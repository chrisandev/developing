//Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

 
//Array de rutas
const appRoutes: Routes = [
	{path: '',component: HomeComponent},
	{path: 'home',component: HomeComponent},
	{path: 'zapatillas', component: ZapatillasComponent},
	{path: 'videojuego', component: VideojuegoComponent},
	{path: 'cursos', component: CursosComponent},
	{path: 'cursos/:nombre', component: CursosComponent}, /*Asi creamos una ruta alternativa
	que pueda recoger datos como parametro opcional, si no estariamos restringiendo solo a 
	recoja lo que tenemos declarado en el path*/
	{path: 'cursos/:nombre/:followers', component: CursosComponent},
	{path: 'externo', component: ExternoComponent},
	{path: 'contacto', component: ContactoComponent},
	/**
	 * Esta es la ruta 404, la que se ejecuta cuando no encuentra la url correspondiente, 
	 * siempre hay que definirla la ultima de todas o puede fallar el routing. */
	{path: '**', component: HomeComponent}

];

//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);