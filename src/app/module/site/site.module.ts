import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { SitePage } from './site.page';
import { SiteRoutingModule } from './site-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiteRoutingModule
  ],
  declarations: [SitePage]
})
export class SiteModule {}
