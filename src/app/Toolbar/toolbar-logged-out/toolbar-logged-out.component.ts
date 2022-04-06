import {Component} from '@angular/core';
import {ToolbarComponent} from "../toolbar.component";


@Component({
  selector: 'app-toolbar-logged-out-page',
  templateUrl: './toolbar-logged-out.component.html',
  styleUrls: ['./toolbar-logged-out.component.css']
})
export class ToolbarLoggedOutComponent implements ToolbarComponent {
  data: any;

}



