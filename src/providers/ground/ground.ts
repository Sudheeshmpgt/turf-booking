import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ground } from '../../models/ground';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

/*
  Generated class for the GroundProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GroundProvider {
  private apiUrl= 'http://turfbooking-2018.azurewebsites.net/ground/';
  constructor(public http: HttpClient) {
    console.log('Hello GroundProvider Provider');
  }

  groundlist(id:number):Observable<any>{
    return this.http.post<any>(this.apiUrl+'groundlistapi',id,httpOptions).pipe(
      tap(resp =>console.log(resp)),
      
      catchError(this.handleError<Ground>('ground'))
    );
  }

  groundfind(id:number):Observable<any>{
    return this.http.post<any>(this.apiUrl+'groundfindapi',id,httpOptions).pipe(
      tap(resp =>console.log(resp)),
      
      catchError(this.handleError<Ground>('grounddetails'))
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
