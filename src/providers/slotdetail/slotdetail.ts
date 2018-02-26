import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the SlotdetailProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable()
export class SlotdetailProvider {

  private apiUrl='http://localhost:49783/slot/';
  constructor(public http: HttpClient) {
    console.log('Hello SlotdetailProvider Provider');
  }

  slotDetailProvider(slotId:number):Observable<any>{
    return this.http.get<any>(this.apiUrl+'slotdetailapi?slotId='+slotId,httpOptions);

  }

}
