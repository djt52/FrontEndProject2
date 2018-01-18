import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //public user: User
  constructor(private userService: UserService, private router: Router) { }
  email = "";
  password = "";
  ngOnInit() {
    
   //console.log(this.userService.login());
  }
  
  login() {
  this.userService.login(this.email,this.password)
  /*
    if(this.userService.login(this.email,this.password)) {
      this.router.navigate(['/']);
    }
    */
  }
  

}
