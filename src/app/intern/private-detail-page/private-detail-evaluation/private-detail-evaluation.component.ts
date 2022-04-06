import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from "../../../services/crud.service";
import {MatDialog} from "@angular/material/dialog";
import {PrivateDetailEvaluationDialogComponent} from "./private-detail-evaluation-dialog/private-detail-evaluation-dialog.component";
import {PrivateDetailEvaluationUploadDialogComponent} from "./private-detail-evaluation-upload-dialog/private-detail-evaluation-upload-dialog.component";
import {BNEMaterial} from "../../../interfaces/BNEMaterial";
import {GenericDialogComponent} from "../../../shared/generic-dialog/generic-dialog.component";


@Component({
  selector: 'app-private-detail-evaluation',
  templateUrl: './private-detail-evaluation.component.html',
  styleUrls: ['./private-detail-evaluation.component.css']
})
export class PrivateDetailEvaluationComponent implements OnInit {

  @Input() material!: BNEMaterial;

  public userId!: string;

  public meanConcept = 0;
  public meanTested = 0;

  public tempConceptEvaluation = 0;
  public tempTestedEvaluation = 0;

  public alreadyEvaluatedConcept = false;
  public alreadyEvaluatedTested = false;

  tempConceptStars = ["star_border", "star_border", "star_border","star_border","star_border"]
  tempTestedStars = ["star_border", "star_border", "star_border","star_border","star_border"]

  conceptStars = ["star_border", "star_border", "star_border","star_border","star_border"]
  testedStars = ["star_border", "star_border", "star_border","star_border","star_border"]

  public licenceFile: any;
  public examinedFile: any;

  constructor(
    private crudService: CrudService,
    private dialog: MatDialog) { }

  ngOnInit(): void {

    this.userId = localStorage.getItem("t4f_id")!;
    this.calculateMeanOfConcept();
    this.calculateMeanOfTested();
    this.checkAlreadyEvaluated();
  }

  async onChangeLicenceUpload($event: any){
    this.licenceFile = ($event.target as HTMLInputElement).files!.item(0)
  }

  async onChangeFileAttachmentUpload($event: any){
    this.examinedFile = ($event.target as HTMLInputElement).files!.item(0)
  }

  async uploadLicence(){
    if(this.licenceFile !== undefined){
      let downloadLinkLicence = await this.crudService.uploadFile(this.licenceFile!, "licences")
      if(downloadLinkLicence){
        await this.crudService.updateLicenceUrl(this.material.id, downloadLinkLicence)
        this.dialog.open(PrivateDetailEvaluationUploadDialogComponent)
      }
    }
  }

  async uploadExamined(){
    if(this.examinedFile !== undefined){
      let downloadLinkExaminedFile = await this.crudService.uploadFile(this.examinedFile!, "examined")
      if(downloadLinkExaminedFile){
        await this.crudService.updateExaminedUrl(this.material.id, downloadLinkExaminedFile)
      }

      this.dialog.open(PrivateDetailEvaluationUploadDialogComponent)
    }
  }

  async sendConceptEvaluation(){
    if(this.alreadyEvaluatedConcept){
      let index = this.material.evaluationConceptIds.indexOf(localStorage.getItem("t4f_id")!);

      let response = await this.crudService.updateEvaluationConcept(
        this.tempConceptEvaluation,true,
        index, this.material.evaluationConcept,
        this.material.evaluationConceptIds, this.material.id)
      if(response){
        this.dialog.open(GenericDialogComponent,{data:{message:"Bewertung erfolgreich gespeichert"}})
      }else{
        this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Speichern der Bewertung"}})
      }

    }else{
      let response = await this.crudService.updateEvaluationConcept(
        this.tempConceptEvaluation,false,
        0 ,this.material.evaluationConcept,
        this.material.evaluationConceptIds, this.material.id)

      if(response){
        this.dialog.open(GenericDialogComponent,{data:{message:"Bewertung erfolgreich gespeichert"}})
      }else{
        this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Speichern der Bewertung"}})
      }

    }
    this.alreadyEvaluatedConcept = true;
  }

  async sendTestedEvaluation(){
    if(this.alreadyEvaluatedTested){
      let index = this.material.evaluationTestedIds.indexOf(localStorage.getItem("t4f_id")!);

      let response = await this.crudService.updateEvaluationTested(
        this.tempTestedEvaluation,true,
        index, this.material.evaluationTested,
        this.material.evaluationTestedIds, this.material.id)
      if(response){
        this.dialog.open(GenericDialogComponent,{data:{message:"Bewertung erfolgreich gespeichert"}})
      }else{
        this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Speichern der Bewertung"}})
      }
    }else{
      let response = await this.crudService.updateEvaluationTested(
        this.tempTestedEvaluation,false,
        0 ,this.material.evaluationTested,
        this.material.evaluationTestedIds, this.material.id)
      if(response){
        this.dialog.open(GenericDialogComponent,{data:{message:"Bewertung erfolgreich gespeichert"}})
      }else{
        this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Speichern der Bewertung"}})
      }
    }
    this.alreadyEvaluatedTested = true;
  }


  checkAlreadyExamined(){
    return this.material.proofExaminedUrl.includes("http");
  }

  checkLicenceProof(){
    return this.material.licenceUrl.includes("http");
  }

  checkAlreadyEvaluated(){
    if(this.material.evaluationConceptIds.includes(this.userId)){
      let conceptIndex = this.material.evaluationConceptIds.indexOf(this.userId);
      this.setStarConcept(this.material.evaluationConcept[conceptIndex]);
      this.alreadyEvaluatedConcept = true;
    }
    if(this.material.evaluationTestedIds.includes(this.userId)){
      let testedIndex = this.material.evaluationTestedIds.indexOf(this.userId);
      this.setStarTested(this.material.evaluationTested[testedIndex]);
      this.alreadyEvaluatedTested = true;
    }
  }

  getStarConcept(starIndex: number){
    if(starIndex == 1 && this.meanConcept>0){
      this.conceptStars[starIndex-1] = "star"
      return "activeStar"
    }else if(starIndex == 2 && this.meanConcept > 1){
      this.conceptStars[starIndex-1] = "star"
      return "activeStar"
    }else if(starIndex == 3 && this.meanConcept > 2){
      this.conceptStars[starIndex-1] = "star"
      return "activeStar"
    }else if(starIndex == 4 && this.meanConcept > 3){
      this.conceptStars[starIndex-1] = "star"
      return "activeStar"
    }else if(starIndex == 5 && this.meanConcept > 4){
      console.log("test in 5")
      this.conceptStars[starIndex-1] = "star"
      return "activeStar"
    } else{
      return "inactiveStar"
    }
  }

  getStarTested(starIndex: number){
    if(starIndex == 1 && this.meanTested>0){
      this.testedStars[starIndex-1] = "star"
      return "activeStar"
    }else if(starIndex == 2 && this.meanTested > 1){
      this.testedStars[starIndex-1] = "star"
      return "activeStar"
    }else if(starIndex == 3 && this.meanTested > 2){
      this.testedStars[starIndex-1] = "star"
      return "activeStar"
    }else if(starIndex == 4 && this.meanTested > 3){
      this.testedStars[starIndex-1] = "star"
      return "activeStar"
    }else if(starIndex == 5 && this.meanTested > 4){
      this.testedStars[starIndex-1] = "star"
      return "activeStar"
    } else{
      return "inactiveStar"
    }
  }

  setStarConcept(index: number){
    if(index ==1){
      this.tempConceptEvaluation = 1;
      this.tempConceptStars = ["star", "star_border", "star_border","star_border","star_border"]
    }else if(index == 2){
      this.tempConceptEvaluation = 2;
      this.tempConceptStars = ["star", "star", "star_border","star_border","star_border"]
    }else if(index == 3){
      this.tempConceptEvaluation = 3;
      this.tempConceptStars = ["star", "star", "star","star_border","star_border"]
    }else if(index == 4){
      this.tempConceptEvaluation = 4;
      this.tempConceptStars = ["star", "star", "star","star","star_border"]
    }else if(index == 5){
      this.tempConceptEvaluation = 5;
      this.tempConceptStars = ["star", "star", "star","star","star"]
    }else{}
  }

  setStarTested(index: number){
    if(index ==1){
      this.tempTestedEvaluation = 1;
      this.tempTestedStars = ["star", "star_border", "star_border","star_border","star_border"]
    }else if(index == 2){
      this.tempTestedEvaluation = 2;
      this.tempTestedStars = ["star", "star", "star_border","star_border","star_border"]
    }else if(index == 3){
      this.tempTestedEvaluation = 3;
      this.tempTestedStars = ["star", "star", "star","star_border","star_border"]
    }else if(index == 4){
      this.tempTestedEvaluation = 4;
      this.tempTestedStars = ["star", "star", "star","star","star_border"]
    }else if(index == 5){
      this.tempTestedEvaluation = 5;
      this.tempTestedStars = ["star", "star", "star","star","star"]
    }else{}
  }


  calculateMeanOfConcept(){
    this.material.evaluationConcept.forEach((item) =>{
      this.meanConcept += item;
    })
    this.meanConcept /= this.material.evaluationConcept.length;
  }

  calculateMeanOfTested(){
    this.material.evaluationTested.forEach((item) =>{
      this.meanTested += item;
    })
    this.meanTested /= this.material.evaluationTested.length;
  }

}
