import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  loggedUser: User;
  
  login(email: string, password: string): string {
    let url = "w";
    this.http.get<User>(url).subscribe(loggedUser => this.loggedUser = loggedUser)
    if(this.loggedUser != null) {
      if(this.loggedUser) {
        return 'logged in';
      } else {
        return 'error';
      }
    }
  }
  

  getUser(email: string): Observable<User> {
    let url = "w";
    return this.http.get<User>(url);
    
  }

}

export class User {
    private username: string;
    private password: string;
    private email: string;

}
