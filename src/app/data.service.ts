import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { log } from './log.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl='https://localhost:44377/api/LogItems';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private _http:HttpClient) { 
  }

  getlogs(){
    return this._http.get<log[]>(this.apiUrl);
  }

  addPostService(person:log): Observable<log> {
    const headers = { 'Authorization': 'my-auth-token','content-type': 'application/json','Access-Control-Allow-Origin':'*',"Access-Control-Allow-Methods": "GET, PUT, POST, DELETE"}  
    const body=JSON.stringify(person);
    console.log(body)
    return this._http.post<log>(this.apiUrl, body,{'headers':headers})
       .pipe(
       
       )
  } 
}
