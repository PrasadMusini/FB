import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



 public result = "login";


  signup()
  {
    this.result = "signup"
  }

  home()
  {
    this.result = "home"
  }

  login()
  {
    this.result = "login"
  }

  store:any = [90,30,40,1,3,5]
}
