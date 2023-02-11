import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  studName = "";
  studAge = "";
  students:{name:string, age:string}[] = [];

  ageValidation(){
   let x = /^[0-9]+$/;
   return x.test(this.studAge);
  }

  nameValidation(){
   let y = /[a-zA-z]{4}/;
   return y.test(this.studName);
  }

  @Output() publishData = new EventEmitter();

  setData(){
   let student:{name:string, age:string} = {name:this.studName, age:this.studAge};
   if(+this.studAge >=  30 && this.studName.length > 3){
       this.students.push(student);
       console.log(student);
   }
   this.publishData.emit(this.students);
  }


  
}
