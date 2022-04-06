import { Injectable } from '@angular/core';
import {PublicDetailGeneralInformationComponent} from "./public-detail-general-information/public-detail-general-information.component";
import {PublicDetailCommentsComponent} from "./public-detail-comments/public-detail-comments.component";
import {PublicDetailContactComponent} from "./public-detail-contact/public-detail-contact.component";
import {PublicDetailItem} from "./public-detail-item";
import {BNEMaterial} from "../../interfaces/BNEMaterial";

@Injectable()
export class PublicDetailService {

  public tempMaterial(): BNEMaterial{
    return {
      type:"",
      ageRecommend:"",
      examinationState:0,
      subject:"",
      fileAttachmentUrl:"",
      licenceUrl:"",
      proofExaminedUrl: "",
      externExamination:false,
      author: "tempAuthor",
      description: "",
      evaluation: "",
      SDGGoals: "",
      evaluationConcept: [],
      evaluationConceptIds: [],
      evaluationTested: [],
      evaluationTestedIds: [],
      examinedById: "",
      examinedByName: "",
      externExaminationEMail: "",
      externExaminationName: "",
      foundById: "",
      foundByName:"",
      keywords: "",
      level: "",
      licence: "",
      organisation: "",
      title: "",
      topic: "",
      url: "",
      id: "",
      commentCount:0
    }
  }

  getComponents() {
    return [
      new PublicDetailItem(
        PublicDetailGeneralInformationComponent,
        this.tempMaterial()
      ),
      new PublicDetailItem(
        PublicDetailCommentsComponent,
        this.tempMaterial()
      ),
      new PublicDetailItem(
        PublicDetailContactComponent,
        this.tempMaterial()
      )
    ];
  }
}
