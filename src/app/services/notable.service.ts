import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotableService {

  constructor(private httpClient: HttpClient) { }

  getPhysicians():Observable<any>{
    const  headers= new HttpHeaders()
    headers.append("Access-Control-Allow-Origin","http://localhost:4200");
    headers.append("Access-Control-Allow-Methods","Get, POST")
    const options={
      headers: headers
    }
     const url="http://localhost:5001/api/physician/physicians";
    
      return this.httpClient.get(url, options);
  }

  getAppointments(physicianId:string):Observable<any>{
    const url=`http://localhost:5001/api/physician/appointments/${physicianId}`;
    const  headers= new HttpHeaders()
    headers.append("Access-Control-Allow-Origin","http://localhost:4200");
    headers.append("Access-Control-Allow-Methods","Get, POST")
    const options={
      headers: headers
    }
    return this.httpClient.get(url, options);
  }
}
