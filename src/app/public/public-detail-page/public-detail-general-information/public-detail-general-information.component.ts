import {Component, Input, OnInit} from '@angular/core';
import {BNEMaterial} from "../../../interfaces/BNEMaterial";

@Component({
  selector: 'app-public-detail-general-information',
  templateUrl: './public-detail-general-information.component.html',
  styleUrls: ['./public-detail-general-information.component.css']
})
export class PublicDetailGeneralInformationComponent implements OnInit {

  @Input() material!: BNEMaterial;

  urlLegit = false;
  licenceLinkLegit = false;
  attachmentLinkLegit = false;


  constructor() { }

  ngOnInit(): void {
    this.checkIfLinksAreValid()
  }

  checkIfLinksAreValid(){
    if(this.material.licenceUrl != ""){
      this.licenceLinkLegit = true
    }
    if(this.material.fileAttachmentUrl != ""){
      this.attachmentLinkLegit = true
    }
    if(this.material.url != ""){
      this.urlLegit = true;
    }
  }
}
