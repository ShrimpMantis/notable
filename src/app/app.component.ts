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
  constructor(private service: NotableService){

  }
  ngOnInit(): void {
    this.service.getPhysicians().subscribe((x)=>{
      this.physicians=x;
    });

  }

  physicianClicked(phId:string){
      this.service.getAppointments(phId).subscribe((x)=>{
          this.appointments= x;
      });
  }
}
