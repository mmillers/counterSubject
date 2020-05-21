import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';


const routes: Routes = [
  { path: '', component: PageOneComponent },
  { path: 'two', component: PageTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
