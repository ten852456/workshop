import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly url = 'http://localhost:8000'


  constructor(private http:HttpClient) { }
  //GET
  getDresses():Observable<any[]> {
    return this.http.get<any[]>(this.url + '/dresses/');
  }
  //POST
  addDresses(val:any){
    return this.http.post(this.url + '/dresses/', val);
  }
  //UPDATE
  updateDresses(val:any){
    return this.http.put(this.url + '/dresses/', val);
  }
  //DELETE
  deleteDresses(val:any){
    return this.http.delete(this.url + '/dresses/' + val);
  }
  //GETbyID
  getDressesByid(val:any):Observable<any[]> {
    return this.http.get<any[]>(this.url + '/dresses/' + val);
  }

}
