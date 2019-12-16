import { NgModule } from '@angular/core';
import { FootersComponent } from './footers/footers.component';
import { HeadersComponent } from './headers/headers.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
    declarations: [
        FootersComponent,
        HeadersComponent,
        LandingComponent
    ],
    imports: [
        AppRoutingModule
    ],
    
    exports: [FootersComponent,
        HeadersComponent,
        LandingComponent],
    providers: [],
    bootstrap: []
})
export class SharedModule {

}