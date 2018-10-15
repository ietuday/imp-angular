import { Component, Self } from "@angular/core";

export class Dependency {

}

export class ChildDependency {
 constructor() {
   console.log("ChildDependency");
 }
}

export class ParentDependency {
 constructor() {
   console.log("ParentDependency");
 }
}

@Component({
  selector: 'di',
  template: `
    di
  `,
  providers: [{ provide: Dependency, useClass: ChildDependency }]
})
export class DIComponent {
  constructor(@Self() public dependency: Dependency) {}
}