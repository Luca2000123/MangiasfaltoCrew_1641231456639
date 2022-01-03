import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { PhotoRoutingModule } from './photo-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PhotoRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PhotoComponent
  ]
})
export class PhotoModule { }
