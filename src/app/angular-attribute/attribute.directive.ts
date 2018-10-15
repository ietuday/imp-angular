import { Directive, Attribute } from '@angular/core';

@Directive({
  selector:'[attribute]'
})

export class AttributeDirective {
/**
 * Returns the value of the specified attribute from the host
 * @param name 
 */
    constructor(@Attribute('name')name){
      console.log(name)
  }
}