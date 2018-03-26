import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DateTime } from 'ionic-angular/components/datetime/datetime';


/*
  Generated class for the BookingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()
export class BookingProvider {
  
  private apiUrl='http://turfbooking-2018.azurewebsites.net/booking/';
  
  constructor(public http: HttpClient) {
    console.log('Hello BookingProvider Provider');
   }

  bookSlot(SlotId:number,date:DateTime,NumberOfPlayers:number,Rate:number,UserId:string):Observable<any>{
    return this.http.get<any>(this.apiUrl+'bookSlotApi?SlotId='+SlotId+'&Date='+date+'&NumberOfPlayers='+NumberOfPlayers+'&Rate='+Rate+'&UserId='+UserId,httpOptions); 
  }
   
  bookList(UserId:string):Observable<any>{
    return this.http.get<any>(this.apiUrl+'BookListApi?userId='+UserId,httpOptions);
  }
}
