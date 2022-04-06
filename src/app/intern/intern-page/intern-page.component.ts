import { Component, OnInit } from '@angular/core';
import {ToolbarItem} from "../../Toolbar/toolbar-item";
import {InternItem} from "../intern-item";
import {InternService} from "../intern.service";

@Component({
  selector: 'app-intern-page',
  templateUrl: './intern-page.component.html',
  styleUrls: ['./intern-page.component.css']
})
export class InternPageComponent implements OnInit {

  internComponents: InternItem[] = [];

  constructor(private internService: InternService) { }

  ngOnInit(): void {
    this.internComponents = this.internService.getComponents();
  }

  pressTest(): void {
    console.log("Test")
  }

}
