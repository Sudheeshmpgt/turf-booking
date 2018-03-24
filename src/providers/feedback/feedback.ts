import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Feedback } from "../../models/feedback";
/*
  Generated class for the FeedbackProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable()
export class FeedbackProvider {
  private apiUrl='http://turfbooking-2018.azurewebsites.net/feedback/';
  constructor(public http: HttpClient) {
    console.log('Hello FeedbackProvider Provider');
  }
  feedbackTurf(feedback:Feedback):Observable<any>{
    return this.http.post<any>(this.apiUrl+'feedbackApi',feedback,httpOptions); 
  }
}
