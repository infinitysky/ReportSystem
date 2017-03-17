import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router,
              private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  loginButton(){
    //[routerLink]="['/dashboard/home']"
    this._router.navigate(['/dashboard/blankpage'], {relativeTo: this._activatedRoute});

  }

}
