import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turf } from '../../models/turf';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

/*
  Generated class for the TurfProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class TurfProvider {

    private apiUrl= 'http://localhost:49783/turf/';
  constructor(public http: HttpClient) {
    console.log('Hello TurfProvider Provider');
  }
  turflist():Observable<any>{
    return this.http.get<any>(this.apiUrl+'turflistapi',httpOptions);
  }

  turffind(id:number):Observable<any>{
    return this.http.post<any>(this.apiUrl+'turffindapi',id,httpOptions).pipe(
      tap(resp =>console.log(resp)),
      
      catchError(this.handleError<Turf>('turfdetails'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
