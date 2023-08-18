import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})

export class ClickOutSideDirective {

  private isInside = false;

  @Output() clickOutside = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) { }

  @HostListener("click") onClicked() {
    this.isInside = true;
  }

  @HostListener('document:click', ['$event.target']) onClickOutSide(target: any) {
    const clickedInside = this.elementRef.nativeElement.contains(target);

    if (!clickedInside && this.isInside) {
      this.clickOutside.emit(null);
      this.isInside = false;
    }
  }
}
