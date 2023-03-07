import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DressviewComponent} from './dressview/dressview.component'
import {DressviewUserComponent} from './dressview-user/dressview-user.component'
const routes: Routes = [
  {path: 'Adminview', component:DressviewComponent},
  {path: '',component:DressviewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
