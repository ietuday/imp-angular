import { Component, Input, ContentChildren, QueryList, ContentChild } from "@angular/core";

@Component({
    selector: 'tab',
    template: `
      <p>{{title}}</p>
    `,
  })
  export class TabComponent {
    @Input() title;
  }
  
  @Component({
    selector: 'tabs',
    template: `
      <ng-content></ng-content>
    `,
  })
  export class TabsComponent {
   @ContentChildren(TabComponent) tabs: QueryList<TabComponent>
   @ContentChild("divElementchild") div: any;

   ngAfterContentInit() {
     this.tabs.forEach(tabInstance => console.log(tabInstance))
     console.log(this.div);
     
   }
  }