import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  login:boolean = false ;
  signup:boolean = false;


  loginForm()
  {
    this.login = !this.login;
  }
  btnoff()
  {
    this.login = false;
    this.signup = false;
  }

  signupForm()
  {
    this.signup= true;
  }
}
