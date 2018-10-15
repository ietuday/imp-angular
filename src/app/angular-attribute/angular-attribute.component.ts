import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { AlertComponent } from './alert.component';

@Component({
  selector: 'app-angular-attribute',
  templateUrl: './angular-attribute.component.html',
  styleUrls: ['./angular-attribute.component.scss']
})
export class AngularAttributeComponent implements OnInit, AfterViewInit {
  /**
   * Returns the specified elements or directives from the view DOM as QueryList
   */
  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>

    /**
     * Like ViewChildren but returns only the first element or the directive matching the selector from the view DOM
     * This will return the native element
     */
    @ViewChild("divElement") div: any;
  
    /**
     * This will return the component instance
     */
    @ViewChild(AlertComponent) alert: AlertComponent;
  constructor() { }

  ngOnInit() {
  }
  /**
   * QueryList is just a fancy name for an object that stores a list of items. What is special about this object is when the state of the application changes Angular will automatically update the object items for you.
   * QueryList implements an iterable interface, therefore, it can be used in Angular templates with the ngFor directive.
   */
  ngAfterViewInit() {
    this.alerts.forEach(alertInstance => console.log(alertInstance));
    console.log(this.div);
    console.log(this.alert);
  }

}
