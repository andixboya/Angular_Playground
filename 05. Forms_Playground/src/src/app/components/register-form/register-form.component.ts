import { Component, OnInit, ViewChild, } from '@angular/core';

//these are not necessary for template driven form! 
import { NgModel, NgModelGroup, NgForm } from '@angular/forms'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})


export class RegisterFormComponent implements OnInit {


  constructor() { }
  public: Array<string> = ["+971", "+359", "+972", "+198", "+701"]
  ngOnInit() {


  }
  submitForm(form: NgForm) {
    //the values are in control.values and errors in control.errors! 
    console.log(form);
    console.log(typeof (form.controls))
    debugger;
  }

}
