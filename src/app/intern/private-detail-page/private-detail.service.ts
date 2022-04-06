import { Injectable } from '@angular/core';
import {PrivateDetailGeneralInformationComponent} from "./private-detail-general-information/private-detail-general-information.component";
import {PrivateDetailCommentsComponent} from "./private-detail-comments/private-detail-comments.component";
import {PrivateDetailContactComponent} from "./private-detail-contact/private-detail-contact.component";
import {PrivateDetailItem} from "./private-detail-item";
import {BNEMaterial} from "../../interfaces/BNEMaterial";
import {PrivateDetailEvaluationComponent} from "./private-detail-evaluation/private-detail-evaluation.component";

@Injectable()
export class PrivateDetailService {

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
      SDGGoals: "",
      evaluation: "",
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
      new PrivateDetailItem(
        PrivateDetailGeneralInformationComponent,
        this.tempMaterial()
      ),
      new PrivateDetailItem(
        PrivateDetailEvaluationComponent,
        this.tempMaterial()
      ),
      new PrivateDetailItem(
        PrivateDetailCommentsComponent,
        this.tempMaterial()
      ),
      new PrivateDetailItem(
        PrivateDetailContactComponent,
        this.tempMaterial()
      ),
    ];
  }
}
