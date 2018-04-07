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
  private apiUrl='http://localhost:49783/Feedback/';
  constructor(public http: HttpClient) {
    console.log('Hello FeedbackProvider Provider');
  }
  feedbackproTurf(feedback:Feedback):Observable<any>{
    return this.http.post<any>(this.apiUrl+'feedbackApi',feedback,httpOptions); 
  }
}
