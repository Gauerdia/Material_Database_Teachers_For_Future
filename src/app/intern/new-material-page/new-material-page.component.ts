import {Component, Inject, OnInit} from '@angular/core';
import {MatSelectChange} from "@angular/material/select";
import {CategorySelection} from "../../interfaces/categorySelection";
import {CrudService} from "../../services/crud.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {NewMaterialDialogComponent} from "./new-material-dialog/new-material-dialog.component";
import {GenericDialogComponent} from "../../shared/generic-dialog/generic-dialog.component";

@Component({
  selector: 'app-new-material-page',
  templateUrl: './new-material-page.component.html',
  styleUrls: ['./new-material-page.component.css']
})
export class NewMaterialPageComponent implements OnInit {

  // Arrays to store the possible selection in the dropdown menus
  public topicSelection: CategorySelection[] = [];
  public evaluationSelection: CategorySelection[] = [];
  public niveauSelection: CategorySelection[] = [];
  public typeSelection: CategorySelection[] = [];
  public licenceSelection: CategorySelection[] = [];
  public ageRecommendSelection: CategorySelection[] = [];
  public subjectSelection: CategorySelection[] = [];
  public SDGGoalSelection: CategorySelection[] = [];

  // Variables to save the 'free writing' fields' inputs
  titleInput: string = "";
  authorInput:string = "";
  organisationInput:string = "";
  linkInput:string = "";
  keywordInput: string = "";
  descriptionInput: string = "";

  // Arrays to store the multiple selection inputs
  selectedAges: CategorySelection[] = [];
  selectedTopics: CategorySelection[] = [];
  selectedTypes: CategorySelection[] = [];
  selectedSubjects: CategorySelection[] = [];
  selectedSDGGoals: CategorySelection[] = [];

  // Arrays to store the single selection inputs
  public ageValue: any;
  public topicValue: any;
  public evaluationValue: any;
  public niveauValue: any;
  public typeValue: any;
  public licenceValue: any;
  public subjectValue: any;

  public licenceFile: any;
  public fileAttachmentFile: any;


  constructor(
    private crudService: CrudService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  async fetchCategories(){

    let response = await this.crudService.getAllCategorySelectionItem();

    if(response){
      let categories = response;

      this.typeSelection = categories[0];
      this.topicSelection = categories[1];
      this.licenceSelection = categories[2];
      this.niveauSelection = categories[3];
      this.evaluationSelection = categories[4];
      this.ageRecommendSelection = categories[5];
      this.subjectSelection = categories[6];
      this.SDGGoalSelection = categories[7];
    }else{
      this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Laden der Kategorien"}})
    }


  }

  selectTopic($event: MatSelectChange){
    this.topicValue = $event.value.value;
  }
  selectEvaluation($event: MatSelectChange){
    this.evaluationValue = $event.value.value;
  }
  selectNiveau($event: MatSelectChange){
    this.niveauValue = $event.value.value;
  }
  selectType($event: MatSelectChange){
    this.typeValue = $event.value.value;
  }
  selectLicence($event: MatSelectChange){
    this.licenceValue = $event.value.value;
  }
  selectSubjects($event: MatSelectChange){
    this.subjectValue = $event.value.value;
  }


  async onChangeLicenceUpload($event: any){
    this.licenceFile = ($event.target as HTMLInputElement).files!.item(0)
  }

  async onChangeFileAttachmentUpload($event: any){
    this.fileAttachmentFile = ($event.target as HTMLInputElement).files!.item(0)
  }


  async submitMaterial(){

  // Allocate space for the multi-selection fields
  let ageString: string = "";
  let topicString: string = "";
  let typeString: string = "";
  let subjectString: string = "";
  let SDGGoalString: string = "";

  // Allocate space for the singe selection fields
  let evaluationString = "";
  let licenceString = "";
  let niveauString = "";

  // Only use the Values if they are not null
  if(this.evaluationValue){
    evaluationString = this.evaluationValue;
  }
  if(this.licenceValue){
    licenceString = this.licenceValue;
  }
  if(this.niveauValue){
    niveauString = this.niveauValue;
  }

  // Concatenate the inputs of the multi-selection fields
    this.selectedAges.forEach((item, index) =>{
      if(index == 0){
        ageString = ageString + item.value;
      }else{
        ageString = ageString + "," + item.value;
      }
    })
    this.selectedTopics.forEach((item, index) =>{
      if(index == 0){
        topicString = topicString + item.value;
      }else{
        topicString = topicString + "," + item.value;
      }
    })
    this.selectedTypes.forEach((item, index) =>{
      if(index == 0){
        typeString = typeString + item.value;
      }else{
        typeString = typeString + "," + item.value;
      }
    })
    this.selectedSubjects.forEach((item, index) =>{
      if(index == 0){
        subjectString = subjectString + item.value;
      }else{
        subjectString = subjectString + "," + item.value;
      }
    })
    this.selectedSDGGoals.forEach((item, index) =>{
      if(index == 0){
        SDGGoalString = SDGGoalString + item.value;
      }else{
        SDGGoalString = SDGGoalString + "," + item.value;
      }
    })


    let downloadLinkLicence = "";
    let downloadLinkFileAttachment = "";

    if(this.licenceFile !== undefined){
      let tempLink = await this.crudService.uploadFile(this.licenceFile!, "licences")
      if(tempLink){
        downloadLinkLicence = tempLink;
      }
    }


    if(this.fileAttachmentFile !== undefined){
      let tempLink = await this.crudService.uploadFile(this.fileAttachmentFile!, "customFiles")
      if(tempLink){
        downloadLinkFileAttachment = tempLink;
      }
    }


    this.crudService.createMaterial(
      this.titleInput,
      this.authorInput,
      this.organisationInput,
      typeString,
      licenceString,
      topicString,
      this.keywordInput,
      ageString,
      subjectString,
      niveauString,
      this.descriptionInput,
      evaluationString,
      SDGGoalString,
      this.linkInput,
      downloadLinkFileAttachment,
      downloadLinkLicence,
      localStorage.getItem("t4f_id")!,
      localStorage.getItem("t4f_name")!
      ).then((item) =>{
        if(item){
          this.dialog.open(NewMaterialDialogComponent)
        }else{
          this.dialog.open(GenericDialogComponent,{data:{message:"Fehler beim Erstellen des Materials"}})
        }
    })
  }
}
