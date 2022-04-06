import { Type } from '@angular/core';

export class InternItem {
  constructor(public component: Type<any>, public data: any) {}
}
