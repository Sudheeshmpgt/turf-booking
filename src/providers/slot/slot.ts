import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DateTime } from 'ionic-angular/components/datetime/datetime';


/*
  Generated class for the SlotProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};


@Injectable()
export class SlotProvider {
  private apiUrl='http://localhost:497843/slot/';
  constructor(public http: HttpClient) {
    console.log('Hello SlotProvider Provider');
  }
  slotlist(id:number,date:string):Observable<any>{
    return this.http.get<any>(this.apiUrl+'slotfindapi?groundId='+id+'&date='+date,httpOptions);
  }

}
