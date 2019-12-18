import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rf-register-form',
  templateUrl: './rf-register-form.component.html',
  styleUrls: ['./rf-register-form.component.css']
})
export class RfRegisterFormComponent implements OnInit {

  public form: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      fullName: ['userName', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.email],]

    }
    )
  }
  submitForm(form: NgForm) {
    console.log(form);
    debugger;
  }
  get f() {
    return this.form.controls;
  }


}
