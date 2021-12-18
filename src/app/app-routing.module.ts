import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisplaydatatypesComponent} from './displaydatatypes/displaydatatypes.component';
import {DisplayarrayComponent} from './displayarray/displayarray.component';
import {DisplaycomboComponent} from './displaycombo/displaycombo.component';
import {DisplaydataComponent} from './displaydata/displaydata.component'; 
const routes: Routes = [
  {
    path:'displaydatatypes',
    component:DisplaydatatypesComponent
  },
  {
    path:'displayarray',
    component:DisplayarrayComponent
  },
  {
    path:'displaycombo',
    component:DisplaycomboComponent
  },
  {
    path:'displaydata',
    component:DisplaydataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
