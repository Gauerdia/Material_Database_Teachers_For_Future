import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[internHost]',
})
export class InternDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
