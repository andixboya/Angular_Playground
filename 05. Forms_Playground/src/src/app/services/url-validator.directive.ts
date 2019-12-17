import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[appUrlValidator]'
})
export class UrlValidatorDirective {

  constructor(private element: ElementRef, private form: NgForm) { }


  @HostListener('input') validateUrl() {
    
    const value = this.element.nativeElement.value;

    // value.startsWith('http') || !value.startsWith('https') || value.endsWith('.jpg') ?
    // this.element.nativeElement.style.border = 'red' :
    // this.element.nativeElement.style.border = 'green';

    const el = this.element.nativeElement;
    const form = this.form.control;

    //TODO: do another directive with Renderer2
    if (!value.startsWith('http') ||
      !value.startsWith('https') ||
      !value.endsWith('.jpg')) {
      el.style.cssText = 'border: solid red';

      form.setErrors({ 'img': true });
    } else {
      el.style.cssText = 'border: solid green'
      form.setErrors(null);
    }

  }


}
