import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path:'admin',   
    component: LayoutComponent,
    children:[
       {path:'',redirectTo: 'home', pathMatch: 'full'},
       {path:'home', component: HomeComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
