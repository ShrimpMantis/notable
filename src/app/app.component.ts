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
  currentPhysicianLastName!:string;
  chosenIndex!:number;
  constructor(private service: NotableService){

  }
  ngOnInit(): void {
    this.service.getPhysicians().subscribe((x)=>{
      this.physicians=x;
      this.physicianClicked(this.physicians[0].physicianId)
    });
    
  }

  physicianClicked(phId:string){
    this.chosenIndex= this.physicians.findIndex((element, index)=>{
         return element.physicianId ===phId;
      });
  
      this.currentPhysicianName= this.physicians[this.chosenIndex].name;
      this.currentPhysicianLastName= this.physicians[this.chosenIndex].lastName;

      this.service.getAppointments(phId).subscribe((x)=>{
          this.appointments= x;
      });
  }
}
