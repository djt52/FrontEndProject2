import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }
  email = "";
  password = "";
  first = "";
  last = "";

  ngOnInit() {
  }

  register() {
      this.userService.register(this.email,this.password,this.first,this.last);
  }
}
