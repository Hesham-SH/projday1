import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './Components/first/first.component';
import { SecondComponent } from './Components/second/second.component';
import { AllInOneComponent } from './Components/Day3/all-in-one/all-in-one.component';
import { HomeComponent } from './Components/Day3/ComponentInteraction/home/home.component';
import { LoginComponent } from './Components/Day3/ComponentInteraction/login/login.component';

//Decorator [Meta Data of class]
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    AllInOneComponent,
    HomeComponent,
    LoginComponent
    /**
     * 1- Components
     * 2- Pipes
     * 3- Directives
     */
  ],
  imports: [
    BrowserModule,
    FormsModule
    /**
     * 4- External Modules [HttpClientModule - RouterModule - FormsModule - ReactiveFormsModule - ......]
     */
  ],
  providers: [
    /**
     * 5- Services
     */
  ],
  bootstrap: [AppComponent]/**Launching [Parent] Component */
})
export class AppModule { }
