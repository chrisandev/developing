  import { Component, OnInit } from '@angular/core';
  import { Project } from '../../models/project';
  import { ProjectService } from '../../services/project.service';
  import { UploadService } from '../../services/upload.service';
  import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService] /*Los servicios siempre se cargan en providers*/
})

export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public save_project: any;
  public filesToUpload: Array<File>;  /*File es un tipo de fichero predefinido en JS*/
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService

  ) { 
    this.title = 'Crear proyecto';
    this.project = new Project('','','','',2022,'','');
    this.status = "";
    this.filesToUpload = new Array();
    this.url = Global.url;

    /*
    public _id: string,
    public name: string,
    public description: string,
    public category: string,
    public year: number,
    public langs: string,
    public image: string
    */
  }

  ngOnInit(): void {
    console.log('Esto funciona');
  }

  onSubmit(form: any) {

    //Guardar los datos
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){ /*Me iba poniendo solo response*/
          //console.log(response); 

          //Subir imagen
          if(this.filesToUpload){ //Linea del profe
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+ response.project._id, [], this.filesToUpload, "image")
            .then((result:any) => {
              console.log('Imagen cargada correctamente');  
              console.log(result);
              this.save_project = result.project; //Linea del profe
              this.status = "success";
              form.reset();
          });

          }else{ //este else del profe
            this.save_project = response.project;
            this.status = 'success';
            form.reset();
          } //Hasta aqui todo el else del profe
        }else{
          this.status = "failed";
          console.log('el status ha sido fallido');
        } 
      },
      error => {
        console.log(<any>error); //Se muestra el error por la consola y ya
      }
      );
  };//Fin método onSubmit

  fileChangeEvent(fileInput: any){
    console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  };

}// Fin clase
