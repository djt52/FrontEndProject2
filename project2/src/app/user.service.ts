﻿import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  loggedUser: User;
  
  login(email: string, password: string): number {
  /*
    let url = "http://54.198.14.22:8090/api/login?email=regop412@gmail.com&password=p4ssw0rd";
    this.http.get<User>(url).subscribe(loggedUser => this.loggedUser = loggedUser);
    console.log(this.loggedUser);
    if(this.loggedUser != null) {
      if(this.loggedUser) {
        return 'logged in';
      } else {
        return 'error';
      }
    }
    */
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      
          if(this.responseText == `{"validuser":"true"}`) {
              console.log("logged in")
              return 1;
          } else {
              return 0;
          }
       }
    };
      xml.open('GET',`http://54.198.14.22:8090/api/login?email=${email}&password=${password}`,true);
      xml.send();
      return 5;

  }
  

  register(email: string, password: string, first:string, last: string) {
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          
       }
    };
      xml.open('GET',`http://54.198.14.22:8090/api/register?email=${email}&password=${password}&fname=${first}&lname=${last}`,true);
      xml.send();

  }

}

export class User {
    //private username: string;
   // private password: string;
   // private email: string;
       validuser: string;

}
