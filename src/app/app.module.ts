import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LicenseComponent } from './license/license.component';
import { LicenseListComponent } from './license-list/license-list.component';
import { LicenseDetailsComponent } from './license-details/license-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LicenseComponent,
    LicenseListComponent,
    LicenseDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
