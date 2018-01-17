import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  users: Observable<User>;
  /*
  getQuestions(): Observable<User> {
    return this.http.get<User>(url);
  }*/
}

export class User {
    private username: string;
    private password: string;
    private email: string;

}
