import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[privateDetailHost]',
})
export class PrivateDetailDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
