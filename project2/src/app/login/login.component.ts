﻿import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/register']);
  }
  /*
  login() {
    let message = userService.login(email, password);
    if(message == "logged in") {
    
    }
  }
  */

}
