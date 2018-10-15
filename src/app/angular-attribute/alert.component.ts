import { Component, Input } from '@angular/core';

@Component({
    selector: 'alert',
    template: `
      {{type}}
    `,
})
export class AlertComponent {
    @Input() type: string = "success";
}