import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServeService {

  constructor(private http:HttpClient) { }

  dataService(val:any):Observable<any>{
  {
    return this.http.post<any>('http://localhost:8080/postfile', val)
  }

  // public addProduct(data: any):Observable<any>{
  //   return this.http.post("http://localhost:8080/signup",data)
  // }
  }
}