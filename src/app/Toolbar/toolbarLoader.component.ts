import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import {ToolbarItem} from "./toolbar-item";
import {ToolbarDirective} from "./toolbar.directive";
import {ToolbarComponent} from "./toolbar.component";

@Component({
  selector: 'toolbar-loader',
  template: `
    <div>
      <ng-template toolbarHost></ng-template>
    </div>
  `
})
export class ToolbarLoaderComponent implements OnInit {

  @Input() toolbars: ToolbarItem[] = [];

  @ViewChild(ToolbarDirective, {static: true}) toolbarHost!: ToolbarDirective;
  interval: number|undefined;

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {

    let toolbarItem;
    console.log("LoadComponent Toolbar")
    if(localStorage.getItem('t4f_id')){
      toolbarItem = this.toolbars[0];
    }else{
      toolbarItem = this.toolbars[1];
    }

    const viewContainerRef = this.toolbarHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<ToolbarComponent>(toolbarItem.component);
    componentRef.instance.data = toolbarItem.data;
  }
}

