import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';
import { ApplicationUser } from "../../models/application-user";
import { LoginModel } from '../../models/login-model';

//header options  
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApplicationUserProvider {

  private apiUrl='http://localhost:49783/account/';

  constructor(public http: HttpClient) {
    console.log('Hello ApplicationUserProvider Provider');
  }

  //register
  register(user: ApplicationUser): Observable<any>{
    return this.http.post<any>(this.apiUrl+'registerapi', user, httpOptions).pipe(
      tap(res => console.log(res)),
      catchError(this.handleError<ApplicationUser>('registerUser'))
    );
  }

  login(user: LoginModel):Observable<any>{
    return this.http.post<any>(this.apiUrl+'loginapi',user,httpOptions).pipe(
        tap(res=>console.log(res)),
        catchError(this.handleError<LoginModel>('login'))

    );


  }
  //handle error
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
