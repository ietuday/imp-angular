import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appChbgcolor]'
})
export class ChangeBgColorDirective {
    color: any;
    @HostBinding('style.border') border: string;
    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    @HostListener('mouseover') onMouseOver() {
        this.border = '5px solid ' + this.getRandomColor();
        this.color = this.getRandomColor();
        this.ChangeBgColor(this.color);
    }
    @HostListener('click') onClick() {
        console.info('Host Element Clicked');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.ChangeBgColor('black');
        this.border = 'none'
    }
    ChangeBgColor(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
    }
}