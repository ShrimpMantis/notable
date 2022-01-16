import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotableService {

  constructor(private httpClient: HttpClient) { }

  getPhysicians():Observable<any>{
     const url="http://localhost:8080/api/physicianApi/physicians";
    
      return this.httpClient.get(url);
  }

  getAppointments(physicianId:string):Observable<any>{
    const url=`http://localhost:8080/api/physicianApi/appointments/${physicianId}`;
    return this.httpClient.get(url);
  }
}
