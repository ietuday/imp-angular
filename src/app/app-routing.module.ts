import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { CleanUpFormComponent } from './form/clean-up-form/clean-up-form.component';
import { SimpleFormComponentDemo1 } from './form/simple-form-1/simple-form-1.component';
import { SubmitFlagFormComponent } from './form/submit-flag-form/submit-flag-form.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: './customers/customer.module#CustomersModule'
  },
  {
    path:'products',
    loadChildren: './products/products.module#ProductsModule'
  },
  {
    path:'simple-form',
    component: SimpleFormComponentDemo1
  },
  {
    path:'submit-flag',
    component: SubmitFlagFormComponent
  },
  // {
  //   path: 'clean-form',
  //   component:CleanUpFormComponent
  // },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: HomeComponent
  }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[HomeComponent],
  providers: []
})
export class AppRoutingModule { }
