import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  DataLogin = "2na Data Mn El Login";

  // constructor(){
  //   //2) Fire [emit] ????
  //   setTimeout(()=>{
  //     //3)Data
  //     this.myEvent.emit(this.DataLogin);
  //   },3000)
  // }

  //1) Defination
  @Output() myEvent = new EventEmitter();

  fireNow(){
    this.myEvent.emit(this.DataLogin);
  }


}
