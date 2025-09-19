import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective {
  @HostBinding('style.backgroundColor') bgColor: any;
  @Input() favColor: string = 'gold';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = this.favColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = 'transparent';
  }

  // constructor(private elRef: ElementRef) {
  //   elRef.nativeElement.style.backgroundColor = 'gold';
  // }
}

// .
// #
// [name="something"]

// <input name="something"/>

// <div class="appBetterHighlight"> </div>

// <appBetterHighlight></appBetterHighlight>
