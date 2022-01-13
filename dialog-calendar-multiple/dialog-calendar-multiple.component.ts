import { Component, OnInit} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormGroup,  Validators, FormBuilder, FormControl} from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { category, timeStart, timeEnd } from '../inputSelect';
import { EventService } from '../service/event.service';
import { eventModel } from '../model/event-model';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/yyyy',
  },
  display: {
    dateInput: 'DD/MM/yyyy',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel:'LL',
    monthYearA11yLabel:'MMMM YYYY'
  },
};

@Component({
  selector: 'app-dialog-calendar-multiple',
  templateUrl: './dialog-calendar-multiple.component.html',
  styleUrls: ['./dialog-calendar-multiple.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }]
})
export class DialogCalendarMultipleComponent implements OnInit {

  close:string='assets/images/icons8-close-24.png';
  showEventForm:boolean=false;
  showEmailForm:boolean=false;
  eventForm: FormGroup; 
  optionValue = '0';
  timeStartObj: any[] = [];
  timeEndObj: any[]= [];
  categoryObj: any[]= [];

  constructor(public dialogRef: MatDialogRef<DialogCalendarMultipleComponent>,
              private fb:FormBuilder,
              public addEventService:EventService) {}

  ngOnInit(): void{this.createEventForm();
                   this.createEventForm();
                   this.timeStartObj = timeStart;  
                   this.timeEndObj = timeEnd;
                   this.categoryObj= category;                   
                  }

  createEventForm(){
    this.eventForm= this.fb.group({
      eventId: 0,
      eventName: new FormControl ('',[Validators.required]),
      dateStart:new FormControl ('',[Validators.required]),
      endDate: new FormControl ('',[Validators.required]),
      startTime: new FormControl ('',[Validators.required]),
      endTime: new FormControl ('',[Validators.required]),
      kategori: new FormControl ('',[Validators.required]),
    });
  }
  get valueEventForm():any{return this.eventForm.controls;}

  closeDialog() {
    this.dialogRef.close(false);
  }

  toogleEvent(){
    this.showEventForm=!this.showEventForm;
  }

  toogleEmail(){
    this.showEmailForm=!this.showEmailForm;
  }

  savebutton(){
  // code for button save when user add event in input form
  }

}
