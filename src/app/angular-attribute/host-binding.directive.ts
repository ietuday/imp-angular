import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: '[host-binding]'
})
export class HostBindingDirective {
    @HostBinding("class.tooltip") tooltip = true;

    @HostBinding("class.tooltip")
    get tooltipAsGetter() {
        // your logic
        return true;
    };

    @HostBinding() type = "text";
}