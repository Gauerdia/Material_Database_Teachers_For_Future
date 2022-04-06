import { Component, Input } from '@angular/core';
import {ToolbarComponent} from "../toolbar.component";

@Component({
  selector: 'app-toolbar-logged-in-page',
  templateUrl: './toolbar-logged-in.component.html',
  styleUrls: ['./toolbar-logged-in.component.css']
})
export class ToolbarLoggedInComponent implements ToolbarComponent {
  @Input() data: any;

  removeLocalStorageId(){

  }
}
