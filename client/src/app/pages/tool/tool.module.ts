import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolComponent } from './tool.component';
import { ToolRoutingModule } from './tool-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ToolRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ToolComponent
  ]
})
export class ToolModule { }
