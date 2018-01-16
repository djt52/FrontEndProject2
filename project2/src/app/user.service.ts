import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {

  constructor() { }

  users: Observable<>;

  getQuestions(): Observable<Question[]> {
    return this.http.get<User>(/*url*/);
  }
}

export class User {
    private username: string;
    private password: string;
    private email: string;

}
