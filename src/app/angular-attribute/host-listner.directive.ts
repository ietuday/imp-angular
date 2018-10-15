import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[count]'
  })
  export class HostListenerDirective {
    numClicks = 0;
    numClicksWindow = 0;
    @HostListener("click", ["$event"])
    onClick(event) {
      console.log(this.numClicks++);
    }
    
    @HostListener("window:click", ["$event"])
    winClick(event) {
      console.log("Num clicks on the window:", this.numClicksWindow++);
    }
  }