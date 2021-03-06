import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AuthenticationPage } from './authentication.page';
import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthenticationRoutingModule
  ],
  declarations: [AuthenticationPage]
})
export class AuthenticationModule {}
