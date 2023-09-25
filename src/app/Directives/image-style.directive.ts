import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[imageStyle]'
})
export class ImageStyleDirective implements OnChanges {

  // property decorator
  @Input() property1: string = '60px';
  @Input() property2: string = '60px';
  // @Input() property2:string = 'blue';
  // @Input('ImgStyle') property2: string = '10px';
  // document.getElement
  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.border = '3px solid red';
    // this.elementRef.nativeElement.style.borderRadius = `${this.property2}`;
  }
  ngOnChanges(): void {
    this.elementRef.nativeElement.style.boxShadow = this.property1;
  }
  // method decorator
  @HostListener('mouseover') func1() {
    this.elementRef.nativeElement.style.boxShadow = this.property2;

    // this.elementRef.nativeElement.style.borderRadius = `${this.property1}`;
    // this.elementRef.nativeElement.style.border = `3px dotted ${this.color1}`;
    // this.elementRef.nativeElement.style.opacity = '.8'
  }
  @HostListener('mouseout') func2() {
    this.elementRef.nativeElement.style.boxShadow = this.property1;

    // this.elementRef.nativeElement.style.border='3px solid red';
    // this.elementRef.nativeElement.style.borderRadius = `${this.property2}`;
    // this.elementRef.nativeElement.style.border='3px solid red';

    // this.elementRef.nativeElement.style.opacity = '1'
  }
}