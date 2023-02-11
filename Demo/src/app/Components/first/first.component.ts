import {Component} from '@angular/core'

@Component({
  selector:'app-first',
  templateUrl:"./first.component.html",
  styleUrls:["./first.component.css"]
})
export class FirstComponent{
 name = "Ahmed";
 imgPath = "assets/Images/3.jpg";
 firstName = "";
 lastName = "";

 chg(){
  this.name = "Aly";
  this.imgPath = "assets/Images/1.jpg"
 }

 getData(ev:any){
  // console.log(ev.target.value);
  this.firstName = ev.target.value;
 }


}
