import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BNEMaterial} from "../../interfaces/BNEMaterial";
import {CrudService} from "../../services/crud.service";
import {ActivatedRoute} from "@angular/router";
import {PrivateDetailItem} from "./private-detail-item";
import {PrivateDetailDirective} from "./private-detail.directive";
import {PrivateDetailService} from "./private-detail.service";
import {PrivateDetailInterfaceComponent} from "./private-detail-interface.component";

@Component({
  selector: 'app-private-detail-page',
  templateUrl: './private-detail-page.component.html',
  styleUrls: ['./private-detail-page.component.css']
})
export class PrivateDetailPageComponent implements OnInit {

  public material!: void | BNEMaterial;
  public id: string = "";

  activeGeneralInformation: boolean = true;
  activeEvaluation: boolean = false;
  activeComments: boolean = false;
  activeContact: boolean = false;

  @ViewChild(PrivateDetailDirective, {static: true}) privateDetailHost!: PrivateDetailDirective;

  @Input() privateDetailComponents: PrivateDetailItem[] = [];

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute,
    private privateDetailService: PrivateDetailService)
  {
    this.privateDetailComponents = this.privateDetailService.getComponents();
  }

  ngOnInit(): void {

    // Get the id from the former page
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    // Use the id to fetch the material
    this.fetchMaterial().then((item) =>{
      this.loadComponent();
    });

  }

  async fetchMaterial(){
    await this.crudService.getSpecificBNEMaterial(this.id).then((response) =>{
        this.material = response;
      }
    );
  }

  loadComponent() {

    let privateDetailItem;

    if(this.activeGeneralInformation) {
      privateDetailItem = this.privateDetailComponents[0];
    }else if(this.activeEvaluation){
      privateDetailItem = this.privateDetailComponents[1];
    }else if(this.activeComments){
      privateDetailItem = this.privateDetailComponents[2];
    }else if(this.activeContact){
      privateDetailItem = this.privateDetailComponents[3];
    }else{
      privateDetailItem = this.privateDetailComponents[0];
    }

    const viewContainerRef = this.privateDetailHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<PrivateDetailInterfaceComponent>(privateDetailItem.component);
    componentRef.instance.material = <BNEMaterial>this.material;
  }


  toggleGeneralInformation(){
    this.activeGeneralInformation = true;
    this.activeEvaluation = false;
    this.activeComments = false;
    this.activeContact = false;
    this.loadComponent();
  }

  toggleEvaluation(){
    this.activeGeneralInformation = false;
    this.activeEvaluation = true;
    this.activeComments = false;
    this.activeContact = false;
    this.loadComponent();
  }


  toggleContact(){
    this.activeGeneralInformation = false;
    this.activeEvaluation = false;
    this.activeComments = false;
    this.activeContact = true;
    this.loadComponent();
  }

  toggleComments(){
    this.activeGeneralInformation = false;
    this.activeEvaluation = false;
    this.activeComments = true;
    this.activeContact = false;
    this.loadComponent();
  }

  getNavClassGeneralInformation(activeGeneralInformation: boolean){
    if(activeGeneralInformation){
      return "navButtonActive";
    }else{
      return "navButtonInactive";
    }
  }

  getNavClassEvaluation(activeEvaluation: boolean){
    if(activeEvaluation){
      return "navButtonActive";
    }else{
      return "navButtonInactive";
    }
  }

  getNavClassContact(activeContact: boolean){
    if(activeContact){
      return "navButtonActive";
    }else{
      return "navButtonInactive";
    }
  }

  getNavClassComment(activeComment: boolean){
    if(activeComment){
      return "navButtonActive";
    }else{
      return "navButtonInactive";
    }
  }

}
