import {Injectable} from "@angular/core";
import {
  addDoc, collection,
  doc, Firestore,
  getDocs, query, setDoc, updateDoc, where
} from "@angular/fire/firestore";
import { getStorage, ref, getDownloadURL} from "firebase/storage";
import {User} from "../interfaces/user";
import {BNEMaterial} from "../interfaces/BNEMaterial";
import {CategorySelection} from "../interfaces/categorySelection";
import {customComment} from "../interfaces/comments";
import {uploadBytes} from "@angular/fire/storage";

@Injectable()
export class CrudService {

  constructor(private store: Firestore) {}


  // UPDATE DATA

  async updateLicenceUrl(materialId: string, downloadLink: string){

    const materialRef = doc(this.store, "BNEMaterial", materialId);

    try{
      await updateDoc(materialRef,{
        licenceUrl: downloadLink
      });
      return 1;
    }catch (e) {
      console.log("Error in updateLicenceUrl", e);
      return null;
    }
  }

  async updateExaminedUrl(materialId: string, downloadLink: string){

    const materialRef = doc(this.store, "BNEMaterial", materialId);

    try{
      await updateDoc(materialRef,{
        proofExaminedUrl: downloadLink
      });
      return 0;
    }catch (e) {
      console.log("Error in updateExaminedUrl", e);
      return null;
    }
  }

  async approveMember(memberId: string){

    const memberRef = doc(this.store, "users", memberId);

    try{
      await updateDoc(memberRef,{
        role: 1
      });
      return 1;
    }catch (e) {
      console.log("Error in approveMember", e);
      return null;
    }
  }

  async approveMaterial(materialId: string){

    const materialRef = doc(this.store, "BNEMaterial", materialId);

    try{
      await updateDoc(materialRef,{
        examinationState: 1,
        examinedById: localStorage.getItem("t4f_id"),
        examinedByName: localStorage.getItem("t4f_name")
      });
      return 1;
    }catch (e) {
      console.log("Error in approveMaterial:", e)
      return null;
    }
  }

  async updateEvaluationConcept(
    rating: number, alreadyEvaluated: boolean,
    index:number, evaluationConcept: number[],
    evaluationConceptIds: string[], materialId: string){

    // Get the reference with the specific material
    const materialRef = doc(this.store, "BNEMaterial", materialId);

    // Either way we need the current array of the ratings
    let tempArray = evaluationConcept;

    // If already exists, we only need to update the rating
    if(alreadyEvaluated){

      tempArray[index] = rating;

      try{
        await updateDoc(materialRef,{
          evaluationConcept: tempArray
        });
        return 1;
      }catch (e) {
        console.log("Error in updateEvaluationConcept:", e)
        return null;
      }

      // If first time, we need to update Id's and ratings
    }else{
      tempArray.push(rating);
      let tempIds = evaluationConceptIds;
      tempIds.push(localStorage.getItem("t4f_id")!)

      try{
        await updateDoc(materialRef,{
          evaluationConcept: tempArray,
          evaluationConceptIds: tempIds
        });
        return 1;
      }catch (e) {
        console.log("Error in updateEvaluationConcept:", e)
        return null;
      }
    }
  }

  async updateEvaluationTested(
    rating: number, alreadyEvaluated: boolean,
    index:number, evaluationTested: number[],
    evaluationTestedIds: string[], materialId: string){

    // Get the reference with the specific material
    const materialRef = doc(this.store, "BNEMaterial", materialId);

    // Either way we need the current array of the ratings
    let tempArray = evaluationTested;

    // If already exists, we only need to update the rating
    if(alreadyEvaluated){

      tempArray[index] = rating;

      try{
        await updateDoc(materialRef,{
          evaluationTested: tempArray
        });
        return 1;
      }catch (e) {
        console.log("Error in updateEvaluationTested:", e)
        return null;
      }

      // If first time, we need to update Id's and ratings
    }else{
      tempArray.push(rating);
      let tempIds = evaluationTestedIds;
      tempIds.push(localStorage.getItem("t4f_id")!)

      try{
        await updateDoc(materialRef,{
          evaluationTested: tempArray,
          evaluationTestedIds: tempIds
        });
        return 1;
      }catch(e){
        console.log("Error in updateEvaluationTested:", e)
        return null;
      }
    }
  }


  async uploadFile(file: File, path: string){

    let downloadLinkLicence: string = "";

    const storage = getStorage();
    const storageRef = ref(storage, path + "/" + file.name);

    try{
      await uploadBytes(storageRef, file).then(async (snapshot) => {
        await getDownloadURL(snapshot.ref).then((link) =>{
          downloadLinkLicence = link;
        })
      });
      return downloadLinkLicence
    }catch (e) {
      console.log("Error in uploadLicenceFile:", e)
      return null;
    }
  }

  async updateCommentCount(materialId:string, currentCommentCount: number){

    // Get the reference with the specific material
    const materialRef = doc(this.store, "BNEMaterial", materialId);

    try{
      await updateDoc(materialRef,{
        evaluationConcept: currentCommentCount+1
      });
      return 1;
    }catch (e) {
      console.log("Error in updateCommentCount:", e)
      return null;
    }
  }



  // FETCH DATA //


  // Fetch a specific user
  async getUser(id: string){

    let user: any;

    const usersRef = collection(this.store, "users");
    const q = query(usersRef, where("__name__", "==", id));
    try{
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        user = doc.data() as User;
      });
      return user;
    }catch(e){
      console.log("Error in getUser:", e)
      return null;
    }
  }

  // Fetch all users and return them
  async getAllUsers() {

    let users: User[] = [];

    const usersRef = collection(this.store, "users");

    const q = query(usersRef);

    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const user = doc.data() as User;
        users.push(user);
      })
      return users;
    }catch(e){
      console.log("Error in getAllUsers:", e)
      return null;
    }
  }

  // Fetch all users and return them
  async getAllBNEMaterial() {

    let material: BNEMaterial[] = [];

    const usersRef = collection(this.store, "BNEMaterial");

    const q = query(usersRef);

    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let tempMaterial = doc.data() as BNEMaterial;
        tempMaterial.id = doc.id;
        material.push(tempMaterial);
      })
      return material;
    }catch (e){
      console.log("Error in getAllBNEMaterial:", e)
      return null;
    }
  }

  // Fetch specific material
  async getSpecificBNEMaterial(id: string) {

    let material: any;

    const materialRef = collection(this.store, "BNEMaterial");

    const q = query(materialRef, where("__name__", "==", id));

    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let tempMaterial = doc.data() as BNEMaterial;
        tempMaterial.id = doc.id;
        material = tempMaterial;
      })
      return material;
    }catch (e) {
      console.log("Error in getSpecificBNEMaterial:", e)
      return null;
    }
  }


  async getUsersToBeApproved(){

    let users: User[] = [];

    const usersRef = collection(this.store, "users");

    const q = query(usersRef, where("role", "==", 0));

    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const tempUser = doc.data() as User;
        tempUser.id = doc.id;
        users.push(tempUser);
      })
      return users;
    }catch (e) {
      console.log("Error in getUsersToBeApproved:", e)
      return null;
    }

  }

  async getMaterialToBeApproved(){

    let material: BNEMaterial[] = [];

    const materialRef = collection(this.store, "BNEMaterial");

    const q = query(materialRef, where("examinationState", "==", 0));

    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const tempMaterial = doc.data() as BNEMaterial;
        tempMaterial.id = doc.id;
        material.push(tempMaterial);
      })
      return material;
    }catch (e) {
      console.log("Error in getMaterialToBeApproved:", e)
      return null;
    }

  }


  // Fetches all users and returns them
  async getAllCategorySelectionItem() {

    let categories: any[] = [];

    let topics: CategorySelection[] = [];
    let evaluations: CategorySelection[] = []
    let niveaus: CategorySelection[] = []
    let types: CategorySelection[] = []
    let licences: CategorySelection[] = []
    let ageRecommends: CategorySelection[] = []
    let subjects: CategorySelection[] = []
    let SDGGoals: CategorySelection[] = []

    const usersRef = collection(this.store, "creationCategorySelection");

    const q = query(usersRef);

    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const tempItem = doc.data() as CategorySelection;
        if(tempItem.category == "typeData"){
          types.push(tempItem);
        }else if(tempItem.category == "topicData"){
          topics.push(tempItem);
        }else if(tempItem.category == "licenceData"){
          licences.push(tempItem);
        }else if(tempItem.category == "levelData"){
          niveaus.push(tempItem);
        }else if(tempItem.category == "evaluationData"){
          evaluations.push(tempItem);
        }else if(tempItem.category == "ageRecommendData"){
          ageRecommends.push(tempItem);
        } else if(tempItem.category == "subjectData"){
          subjects.push(tempItem);
        }else if(tempItem.category == "SDGGoalData"){
          SDGGoals.push(tempItem);
        }
        else{console.log("Error occured while sorting the categories.")}

        categories = [types, topics, licences, niveaus, evaluations, ageRecommends, subjects, SDGGoals];
      })
      return categories;
    }catch (e) {
      console.log("Error in getAllCategorySelectionItem:", e)
      return null;
    }
  }

  async getComments(materialId: string){
    let comments: customComment[] = [];

    const materialRef = collection(this.store, "comments");

    const q = query(materialRef, where("materialId", "==", materialId));

    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const tempMaterial = doc.data() as customComment;
        comments.push(tempMaterial);
      })
      return comments;
    }catch (e) {
      console.log("Error in getComments:", e)
      return null;
    }
  }




  // CREATE DATA


  async createCategorySelectionItem(value: string, label: string, category: string){
    const categorySelectionRef = collection(this.store, "creationCategorySelection");

    try{
      const docRef = await addDoc(categorySelectionRef, {
        category: category,
        value: value,
        label: label
      })
      return 1;
    }catch (e) {
      console.log("Error in createCategorySelectionItem:", e)
      return null;
    }

  }



  async createUser(email: string, experience: string, name: string, userId: string)
  {
    const userRef = collection(this.store, "users");

    try{
      const docRef = await setDoc(doc(this.store, "users",userId), {
        email: email,
        experience: experience,
        name: name,
        role: 0
      })
      return 1;
    }catch (e) {
      console.log("Error in createUser:", e)
      return null;
    }
  }

  async createMaterial(
    title: string,
    author: string,
    organisation: string,
    type:string,
    licence: string,
    topic: string,
    keywords: string,
    ageRecommend: string,
    subject: string,
    level: string,
    description: string,
    evaluation: string,
    SDGGoals: string,
    url: string,
    fileAttachmentUrl: string,
    licenceUrl: string,
    foundById: string,
    foundByName: string
  ){

    const materialRef = collection(this.store, "BNEMaterial");

    try{
      const docRef = await addDoc(materialRef, {
        title: title,
        author: author,
        organisation: organisation,
        type: type,
        licence: licence,
        topic: topic,
        keywords: keywords,
        ageRecommend: ageRecommend,
        subject: subject,
        level: level,
        description: description,
        evaluation: evaluation,
        url: url,
        fileAttachmentUrl: fileAttachmentUrl,
        licenceUrl: licenceUrl,
        evaluationConceptIds: [],
        evaluationConcept: [],
        evaluationTestedIds: [],
        evaluationTested: [],
        SDGGoals: SDGGoals,
        foundById: foundById,
        foundByName: foundByName,
        examinedById: "",
        examinedByName:"",
        examinationState: 0,
        proofExaminedUrl: "",
        externExamination: false,
        externExaminationEMail: "",
        externExaminationName:"",
        commentCount: 0
      });
      return 1;
    }catch (e) {
      console.log("Error in createMaterial:", e)
      return null;
    }

  }


  async createComment(content: string, creatorId: string, creatorName: string, date: string,
                      dateToSort: number, materialId: string){
    const commentRef = collection(this.store, "comments");


    try{
      const docRef = await addDoc(commentRef, {
        content: content,
        creatorId: creatorId,
        creatorName: creatorName,
        date: date,
        dateToSort: dateToSort,
        materialId: materialId
      })
      return 1;
    }catch (e) {
      console.log("Error in createMaterial:", e)
      return null;
    }
  }
}

