import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html'
})
export class CustomerDetailComponent implements OnInit{
  customerRecord: object;
  constructor(private route: ActivatedRoute, private custService: CustomerService){ }
  id:any;
  customerList:Array<any> = [];
  error: any = '';
  ngOnInit() {
    this.route.params.subscribe(params => {
      this. id = params['id'];
      this.getCustomer(this.id);
    });
  }
  getCustomer(id){
    this.custService.getCustomers()
    .subscribe(
      ((response) =>{
        this.customerList = response
        if(this.customerList.length){
          this.customerRecord = this.customerList.filter(x=>x.id == id)[0];  
          console.log(this.customerRecord);
          
        }
      }),
      error => this.error = error
    );
    
    
  }  

  
}