import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/sidebar', pathMatch: 'full'},
  {path: 'sidebar', component:SidebarComponent }
 
];


@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
