import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url="http://localhost:8000/"
  constructor(private http: HttpClient) { }
  post(){
    return this.http.post(`${this.url}`,{
      "username": ""
    })
  }
  get(){
    return this.http.get(`${this.url}`)
  }
}
