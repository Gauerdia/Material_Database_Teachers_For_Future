import { Type } from '@angular/core';
import {BNEMaterial} from "../../interfaces/BNEMaterial";

export class PublicDetailItem {

  constructor(
    public component: Type<any>,
    public material: BNEMaterial
  ) {}

}
