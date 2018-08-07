import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ClarityModule } from '../../../node_modules/@clr/angular';

@NgModule({
  imports: [
    ClarityModule,
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [LayoutComponent, HomeComponent]
})
export class AdminModule { }
