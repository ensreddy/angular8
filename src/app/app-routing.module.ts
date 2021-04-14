import { EducationComponent } from './education/education.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignComponent} from './sign/sign.component';



const routes: Routes = [
{path:'',component:LoginComponent},
{path:'sign',component:SignComponent},
{path:'education',component:EducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
