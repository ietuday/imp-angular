import {Component, NgModule, Directive, Host, Input, Optional} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule, NgForm, FormGroup, FormGroupDirective, Validators, FormBuilder, ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'control-errors',
  template: '<p class="text-danger" *ngIf="error">{{error}}</p>'
})
export class ControlErrors  {
  
  @Input() control: string;
  @Input() errors: Object;
  form: FormGroup;
  err: string;
  
   constructor(@Optional() @Host() private _form: NgForm, 
               @Optional() @Host() private _reactiveForm: FormGroupDirective) {
                
    // this.form = _form || _reactiveForm;

    if( !this.form ) {
      throw new Error('control-errors must be used with a parent formGroup directive');
    }
    
  }
  

  
  get error() {
    const control = this.form.controls[this.control];

    if( control && this.form.errors ) {
     let firstError;
     Object.keys(this.errors).some(err => {
        if(control.hasError(err)) {
          firstError = this.errors[err];
          return true;
        }
      });
      
      return firstError;

    }
  }
  
}


@Component({
  selector: 'clean-form',
  template: `
      <form [formGroup]="questionForm" (submit)="submit()">
   
      <input type="text" formControlName="question" />
     
      <control-errors control="question" [errors]="{required: 'Question is required'}"></control-errors>
      <button type="submit">submit</button>
     </form>
   
   
  `,
})
export class CleanUpFormComponent {
  questionForm: FormGroup;
  
 constructor(private fb: FormBuilder) {
     console.clear();
     
     this.questionForm = this.fb.group({
       question: ['', Validators.required]
     });
  }
  
  submit() {
    console.log('submitted')
  }
  
}
