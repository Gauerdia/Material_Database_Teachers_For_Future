import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CrudService} from "../../services/crud.service";
import {BNEMaterial} from "../../interfaces/BNEMaterial";
import {ActivatedRoute} from "@angular/router";
import {PublicDetailService} from "./public-detail.service";
import {PublicDetailDirective} from "./public-detail.directive";
import {PublicDetailItem} from "./public-detail-item";
import {PublicDetailInterfaceComponent} from "./public-detail-interface.component";

@Component({
  selector: 'app-public-detail-page',
  templateUrl: './public-detail-page.component.html',
  styleUrls: ['./public-detail-page.component.css']
})
export class PublicDetailPageComponent implements OnInit{

  public material!: void | BNEMaterial;
  public id: string = "";

  activeGeneralInformation: boolean = true;
  activeComments: boolean = false;
  activeContact: boolean = false;

  @ViewChild(PublicDetailDirective, {static: true}) publicDetailHost!: PublicDetailDirective;

  @Input() publicDetailComponents: PublicDetailItem[] = [];

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute,
    private publicDetailService: PublicDetailService)
  {
    this.publicDetailComponents = this.publicDetailService.getComponents();
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
    const tempReturn = await this.crudService.getSpecificBNEMaterial(this.id).then((response) =>{
      this.material = response;
      }
    );
  }


  loadComponent() {

    let publicDetailItem;

    if(this.activeGeneralInformation){
      publicDetailItem = this.publicDetailComponents[0];
    }else if(this.activeComments){
      publicDetailItem = this.publicDetailComponents[1];
    }else if(this.activeContact){
      publicDetailItem = this.publicDetailComponents[2];
    }else{
      publicDetailItem = this.publicDetailComponents[0];
    }

    const viewContainerRef = this.publicDetailHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<PublicDetailInterfaceComponent>(publicDetailItem.component);
    componentRef.instance.material = <BNEMaterial>this.material;
  }


  toggleGeneralInformation(){
    this.activeGeneralInformation = true;
    this.activeComments = false;
    this.activeContact = false;
    this.loadComponent();
  }

  toggleContact(){
    this.activeGeneralInformation = false;
    this.activeComments = false;
    this.activeContact = true;
    this.loadComponent();
  }

  toggleComments(){
    this.activeGeneralInformation = false;
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
