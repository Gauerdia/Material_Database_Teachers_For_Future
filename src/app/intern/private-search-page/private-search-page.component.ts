import {Component,OnInit} from '@angular/core';
import {BNEMaterial} from "../../interfaces/BNEMaterial";
import {CategorySelection} from "../../interfaces/categorySelection";
import {CrudService} from "../../services/crud.service";
import {MatSelectChange} from "@angular/material/select";
import {GenericDialogComponent} from "../../shared/generic-dialog/generic-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-private-search-page',
  templateUrl: './private-search-page.component.html',
  styleUrls: ['./private-search-page.component.css']
})
export class PrivateSearchPageComponent implements OnInit {

  public material: BNEMaterial[] = [];
  public materialSorted: BNEMaterial[] = [];

  // Containg the possible selection of the drop down menus
  public topicSelection: CategorySelection[] = [];
  public evaluationSelection: CategorySelection[] = [];
  public niveauSelection: CategorySelection[] = [];
  public titleSelection: CategorySelection[] = [];
  public licenceSelection: CategorySelection[] = [];
  public ageRecommendSelection: CategorySelection[] = [];
  public subjectSelection: CategorySelection[] = [];
  public typeSelection: CategorySelection[] = [];

  public titleInput!: string;
  public authorInput!: string;
  public organisationInput!: string;
  public keywordInput!: string;
  public subjectInput!: string;

  public topicValue: any;
  public evaluationValue: any;
  public niveauValue: any;
  public typeValue: any;
  public licenceValue: any;
  public ageRecommendValue: any;
  public subjectValue: any;

  public evaluations : string[] = [];


  constructor(private crudService: CrudService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchAllMaterial();
    this.fetchCategorySelection();
  }


  inputFieldChange(){
    this.filterMaterial();
  }

  selectTopic($event: MatSelectChange){
    this.topicValue = $event.value.value;
    this.filterMaterial();
  }
  selectEvaluation($event: MatSelectChange){
    this.evaluationValue = $event.value.value;
    this.filterMaterial();
  }
  selectNiveau($event: MatSelectChange){
    this.niveauValue = $event.value.value;
    this.filterMaterial();
  }
  selectType($event: MatSelectChange){
    this.typeValue = $event.value.value;
    this.filterMaterial();
  }
  selectLicence($event: MatSelectChange){
    this.licenceValue = $event.value.value;
    this.filterMaterial();
  }
  selectAgeRecommend($event: MatSelectChange){
    this.ageRecommendValue = $event.value.value;
    this.filterMaterial();
  }
  selectSubject($event: MatSelectChange){
    this.subjectValue = $event.value.value;
    this.filterMaterial();
  }

  filterMaterial(){
    this.materialSorted = this.material.filter(material =>{

      let materialFitsCriteria = 1;


      // First step: Filter input fields


      if(this.titleInput !== "" && this.titleInput !== undefined){
        if(!material.title.toLowerCase().includes(this.titleInput.toLowerCase())){
          materialFitsCriteria = 0;
        }
      }

      if(this.authorInput !== "" && this.authorInput !== undefined){
        if(!material.author.toLowerCase().includes(this.authorInput.toLowerCase())){
          materialFitsCriteria = 0;
        }
      }

      if(this.organisationInput !== "" && this.organisationInput !== undefined){
        if(!material.organisation.toLowerCase().includes(this.organisationInput.toLowerCase())){
          materialFitsCriteria = 0;
        }
      }

      if(this.keywordInput !== "" && this.keywordInput !== undefined){
        if(!material.keywords.toLowerCase().includes(this.keywordInput.toLowerCase())){
          materialFitsCriteria = 0;
        }
      }

      if(this.subjectInput !== "" && this.subjectInput !== undefined){
        if(!material.subject.toLowerCase().includes(this.subjectInput.toLowerCase())){
          materialFitsCriteria = 0;
        }
      }


      // Second step: Filter dropdown menus


      if(this.topicValue !== "" && this.topicValue !== undefined){
        if(!material.topic.toLowerCase().includes(this.topicValue.toLowerCase())){
          materialFitsCriteria = 0;
        }
      }

      if(this.evaluationValue !== "" && this.evaluationValue !== undefined){
        if(!material.evaluation.toLowerCase().includes(this.evaluationValue.toLowerCase())){
          materialFitsCriteria = 0;
        }
      }

      if(this.niveauValue !== "" && this.niveauValue !== undefined){
        if(!material.level.toLowerCase().includes(this.niveauValue.toLowerCase())){
          materialFitsCriteria = 0;
        }
      }

      if(this.typeValue !== "" && this.typeValue !== undefined){
        if(!material.type.toLowerCase().includes(this.typeValue.toLowerCase())){
          materialFitsCriteria = 0;
        }
      }

      if(this.licenceValue !== "" && this.licenceValue !== undefined){
        if(!material.licence.toLowerCase().includes(this.licenceValue.toLowerCase())){
          materialFitsCriteria = 0;
        }
      }
      if(this.ageRecommendValue !== "" && this.ageRecommendValue !== undefined){
        if(!material.ageRecommend.toLowerCase().includes(this.ageRecommendValue.toLowerCase())){
          materialFitsCriteria = 0;
        }
      }
      if(this.subjectValue !== "" && this.subjectValue !== undefined){
        if(!material.subject.toLowerCase().includes(this.subjectValue.toLowerCase())){
          materialFitsCriteria = 0;
        }
      }

      if(materialFitsCriteria){
        return material;
      }
      return 0;
    });
  }

  calculateMean(conceptRatings: number[], index: number){

    let meanRating = 0;

    conceptRatings.forEach((item) =>{
      meanRating += item;
    })
    meanRating /= conceptRatings.length;

    if(index == 0 && meanRating >= 1){
      return "activeStar"
    }else if(index == 1 && meanRating >= 2){
      return "activeStar"
    }else if(index == 2 && meanRating >= 3){
      return "activeStar"
    }else if(index == 3 && meanRating >= 4){
      return "activeStar"
    }else if(index == 4 && meanRating >= 5){
      return "activeStar"
    }else{
      return "inactiveStar"
    }
  }

  async fetchAllMaterial(){

    let materialResponse = await this.crudService.getAllBNEMaterial();

    if(materialResponse){
      this.material = materialResponse;
        this.materialSorted = this.material;
    }else{
      this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Laden der Materialien"}})
    }
  }

  async fetchCategorySelection(){
    let temp = await this.crudService.getAllCategorySelectionItem();
    if(temp){
      this.typeSelection = temp[0];
      this.topicSelection = temp[1];
      this.licenceSelection = temp[2];
      this.niveauSelection = temp[3];
      this.evaluationSelection = temp[4];
      this.ageRecommendSelection = temp[5];
      this.subjectSelection = temp[6];
    }else{
      this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Laden der Kategorien"}})
    }
  }

}

