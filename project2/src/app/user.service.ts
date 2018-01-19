import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  public loggedUser;
  public right = 0;
  public total = 0;
  public wrong = 0;
  login(email: string, password: string): Observable<any> {
    let observe = this.http.get(`http://54.198.14.22:8090/api/login?email=${email}&password=${password}`);
    observe.subscribe(
        res => {this.loggedUser = res}
    );
    return observe;
  }
  

  register(email: string, password: string, first:string, last: string) {
    return this.http.get(`http://54.198.14.22:8090/api/login?email=${email}&password=${password}&fname=${first}&lname=${last}`);
  }

  correct() {
    this.right++;
    this.total++;
  }

  incorrect() {
    this.wrong++;
    this.total++;
  }

  getRight(): number {
    return this.right;
  }
  getWrong(): number {
    return this.wrong;
  }
  getTotal(): number {
    return this.total;
  }

  updateUser() {
      if(this.loggedUser) {
         console.log("Update");
         this.http.get(`http://54.198.14.22:8090/api/updateUser?userid={this.loggedUser.id}&correctAnswers={right}&wrongAnswers={wrong}`);
      }
  }
}

