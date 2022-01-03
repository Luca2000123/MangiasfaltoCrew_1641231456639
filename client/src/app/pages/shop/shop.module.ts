import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ShopComponent
  ]
})
export class ShopModule { }
