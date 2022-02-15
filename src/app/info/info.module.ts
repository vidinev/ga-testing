import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';


@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    MatCardModule
  ]
})
export class InfoModule { }
