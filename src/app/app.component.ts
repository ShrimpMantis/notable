import { Component, OnInit } from '@angular/core';
import { NotableService } from './services/notable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'notable-app';
  physicians!:Array<any>;
  appointments!:Array<any>;
  currentPhysicianName!:string;
  currentPhysicianLastName!:string
  constructor(private service: NotableService){

  }
  ngOnInit(): void {
    this.service.getPhysicians().subscribe((x)=>{
      this.physicians=x;
    });

  }

  physicianClicked(phId:string){
    const currPhysician= this.physicians.filter((element, index)=>{
        return element.physicianId=== phId;
      })[0];
      this.currentPhysicianName= currPhysician.name;
      this.currentPhysicianLastName= currPhysician.lastName;
      this.service.getAppointments(phId).subscribe((x)=>{
          this.appointments= x;
      });
  }
}
