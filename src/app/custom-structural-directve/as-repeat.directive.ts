import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[asRepeat]'
})
export class AsRepeatDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set asRepeat(range: number) {
    if (range) {
      this.viewContainerRef.clear();
      for (let i = 0; i < range; i++) {
        this.viewContainerRef.createEmbeddedView(this.templateRef, {
          index: i
        });
      }
    }
  }

}