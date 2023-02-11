import { Component } from '@angular/core';

@Component({
  selector: 'app-all-in-one',
  templateUrl: './all-in-one.component.html',
  styleUrls: ['./all-in-one.component.css']
})
export class AllInOneComponent {
  name = "";
  age = "";
  students:{name:string, age:string}[] = [];

  GetData(){
    let student:{name:string, age:string} = {name:this.name, age:this.age};
    // console.log(student);
    if(+this.age<=30)
      this.students.push(student);
    // console.log(this.students);
  }

}



