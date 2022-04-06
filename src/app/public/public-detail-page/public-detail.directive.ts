import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[publicDetailHost]',
})
export class PublicDetailDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
