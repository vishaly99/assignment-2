import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { DisplayarrayComponent } from './displayarray/displayarray.component';
import { DisplaycomboComponent } from './displaycombo/displaycombo.component';
import { DisplaydatatypesComponent } from './displaydatatypes/displaydatatypes.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DisplaydataComponent,
    DisplayarrayComponent,
    DisplaycomboComponent,
    DisplaydatatypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
