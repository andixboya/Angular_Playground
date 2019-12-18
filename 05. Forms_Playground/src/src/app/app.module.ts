import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UrlValidatorDirective } from './services/url-validator.directive';
import { RfRegisterFormComponent } from './components/rf-register-form/rf-register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    UrlValidatorDirective,
    RfRegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
