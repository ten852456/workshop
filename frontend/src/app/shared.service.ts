import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly url = 'http://localhost:8000/dresses'


  constructor(private http:HttpClient) { }
  //GET
  getDresses():Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  //POST
  addDresses(val:any){
    return this.http.post(this.url, val);
  }
  //UPDATE
  updateDresses(val:any){
    const url = `${this.url}/${val.id}/`;
    console.log(val);
    return this.http.put(url, val);
  }
  //DELETE
  deleteDresses(val:any){
    return this.http.delete(this.url+ '/' + val);
  }
  //GETbyID
  getDressesByid(val:any):Observable<any[]> {
    return this.http.get<any[]>(this.url + '/' + val);
  }

  updateRentalDate(dressId: number, rentalDate: string ): Observable<any> {
    const url = `${this.url}/${dressId}/rentaldate`;

    const body = rentalDate ? { rentalDate } : { };

    if (!rentalDate) {
      const today = new Date();
      today.setDate(today.getDate() + 3);
      body.rentalDate = today.toISOString().substring(0, 10);
    }

    return this.http.put<any[]>(url, { rentalDate });
  }
}
