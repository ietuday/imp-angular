import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AttributeDirective } from './angular-attribute/attribute.directive';
import { AngularAttributeComponent } from './angular-attribute/angular-attribute.component';
import { AlertComponent } from './angular-attribute/alert.component';
import { ElementRefComponent } from './angular-attribute/element-ref.component';
import { TabComponent,TabsComponent } from './angular-attribute/content-children-demo.component';
import { HostBindingDirective } from './angular-attribute/host-binding.directive';
import { HostListenerDirective } from './angular-attribute/host-listner.directive';
import { ReactiveFormDemo1Component } from './form/reactive-form-demo1/reactive-form-demo1.component';
import { CustomStructuralDirectveComponent } from './custom-structural-directve/custom-structural-directve.component';
import { AsRepeatDirective } from './custom-structural-directve/as-repeat.directive';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 


import { HttpErrorInterceptor } from './error-interceptor';

import { CustomerService } from './services/customer.service';
import { NotificationComponent } from './notification/notification.component';
import { BaseService } from './services/base.service';
import { ProductService } from './services/product.service';
import { ChangeBgColorDirective } from './directive/change-bg-color.directive';
import { IteratorNg6Component } from './iterator-ng6/iterator-ng6.component';
import { SimpleFormComponentDemo1 } from './form/simple-form-1/simple-form-1.component';
import { SubmitFlagFormComponent } from './form/submit-flag-form/submit-flag-form.component';
import { FieldErrorDisplayComponent } from './form/field-error-display/field-error-display.component';
// import { CleanUpFormComponent, ControlErrors } from './form/clean-up-form/clean-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirective,
    AngularAttributeComponent,
    AlertComponent,
    ElementRefComponent,
    TabComponent,
    TabsComponent,
    HostBindingDirective,
    HostListenerDirective,
    ReactiveFormDemo1Component,
    CustomStructuralDirectveComponent,
    AsRepeatDirective,
    NotificationComponent,
    ChangeBgColorDirective,
    IteratorNg6Component,
    // CleanUpFormComponent,
    // ControlErrors  
    SimpleFormComponentDemo1,
    SubmitFlagFormComponent,
    FieldErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    CustomerService,
    BaseService,
    ProductService],
  exports:[AsRepeatDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
