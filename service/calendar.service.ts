import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  myGroup: any;
  images: any;
  user:any;

  public inputWedding = new BehaviorSubject<any>([]);
  ImageMessage$= this.inputWedding.asObservable();

  constructor() { }

  //send data IMAGE
  sendImage(images:any){
    this.images=(images);
    console.log(this.images);

    this.inputWedding.next(images)
    console.log(this.sendImage)
  }

  //send data INPUT FORM
  send(myGroup: any ){
    this.myGroup=myGroup;
    console.log(this.myGroup)
  }

  //get data and return to display page
  getHead(){return this.myGroup;}
  getGamba(){return this.images;}

  //localstorage input form add user
  addUser(user: any)  {
    let users: any=[];

    if(localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users') || '{}');
      users= [user, ...users];
    }
    
    else{users=[user];}
    localStorage.setItem('Users', JSON.stringify(users));
  }
   
}
