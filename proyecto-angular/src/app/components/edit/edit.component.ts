import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService] /*Los servicios siempre se cargan en providers*/
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public save_project: any;
  public filesToUpload: Array<File>;  /*File es un tipo de fichero predefinido en JS*/
  public url: string;


  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router

  ) { 
    this.title = 'Editar proyecto';
    this.project = new Project('','','','',2022,'',''); //El profe la quita
    this.status = "";
    this.filesToUpload = new Array();
    this.url = Global.url;

  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
    this.getProject(id);
    });
  }

  getProject(id:any){
    this._projectService.getProject(id).subscribe(
        response => {
          this.project = response.project;
        },
        error => {
          console.log(<any>error)
        }
      )
  }

  onSubmit(form: any){
    this._projectService.updateProject(this.project).subscribe(
        response => {
          if(response.project){ /*Me iba poniendo solo response*/
          //console.log(response); 

          //Subir imagen
          if(this.filesToUpload.length){
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+ response.project._id, [], this.filesToUpload, "image")
            .then((result:any) => {

              this.save_project = result.project;
              this.status = "success";
            });
          }else{
              this.save_project = response.project;
              this.status = "success";
          }

        }else{
          this.status = "failed";
        } 
        },
        error => {
          console.log(<any>error)
        }
      );
  }

    fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  };

}