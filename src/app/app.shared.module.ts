// ---------------- libraries ---------------
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
// ---------------- libraries ---------------


// --------------- components ---------------
import { LayoutComponent } from './component/layout/layout.component';
// --------------- components ---------------


// ---------------- services ----------------
import { ApplicationService } from './service/application-service';
import { StorageService } from './service/storage-service';
// ---------------- services ----------------


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    LayoutComponent
  ],
  declarations: [
    LayoutComponent
  ],
  providers: [
    ApplicationService,
    StorageService,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ]
})

export class SharedModule { }