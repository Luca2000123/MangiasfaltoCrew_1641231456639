import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { EventRoutingModule } from './event-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    EventComponent
  ]
})
export class EventModule { }
