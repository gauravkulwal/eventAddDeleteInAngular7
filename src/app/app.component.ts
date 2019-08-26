import { Component } from '@angular/core';
import { IEvent } from './event/eventInterface';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  timeInput = new FormControl();
  subjectInput = new FormControl();
  locationInput = new FormControl();
  descriptionInput = new FormControl();
  events: IEvent[] =
  [
    {time: '08:00', subject: 'Breakfast', location: 'Gurgaon', description: 'Dal baati churma'},
    {time: '08:30', subject: 'Meeting with Pm ', location: 'New Delhi'},
    {time: '09:00', subject: 'Call with HRs'},
    {time: '12:00', subject: 'Lunch with Rupal', location: 'Canteen', description: 'Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a'},
  ];
modal: boolean =false;

modalpopup(): void {
this.modal= true;
}
modalpopupclose(): void {
  this.modal= false;
  }

deleteEvent(event: any){
const itemIndex= this.events.findIndex(i => i === event);
this.events.splice(itemIndex, 1);
}

addNewEvent() {
  const newEvent: any = {
    time: this.timeInput.value,
    subject: this.subjectInput.value,
    location: this.locationInput.value,
    description: this.descriptionInput.value
  };

  this.events.push(newEvent);

  this.timeInput.setValue('');
  this.subjectInput.setValue('');
  this.locationInput.setValue('');
  this.descriptionInput.setValue('');
  this.modal=false;

  
}


  title = 'agendaApp';

}
