import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly Uri = 'http://localhost:8000'


  constructor(private http:HttpClient) { }
  //GET

  //POST

  //UPDATE

  //DELETE
}
