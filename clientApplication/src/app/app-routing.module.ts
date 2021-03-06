import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerOrdersComponent } from './customer/customer_orders.component';

const routes: Routes = [
  { path: '', component: CustomerOrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
