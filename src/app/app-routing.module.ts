import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchrouterComponent } from './searchrouter/searchrouter.component';
import { WifisearchComponent } from './wifisearch/wifisearch.component';
import { ConnectedComponent } from './connected/connected.component';
import { DisplaymatComponent } from './displaymat/displaymat.component';

const routes: Routes = [
  {path: '', redirectTo:'/wifisearch', pathMatch:'full'},
  {path: 'searchrouter', component: SearchrouterComponent},
  {path: 'wifisearch', component: WifisearchComponent},
  {path: 'connected', component: ConnectedComponent},
  {path: 'displaymat', component: DisplaymatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
