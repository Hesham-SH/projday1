import { Component } from '@angular/core';

//Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {/**Logic */
  title = 'demo';
  DataFromParent = "2na Data Mn El Parent";
  DataFromLogin = "";

  GetData(data:any){
    // console.log(data);
    this.DataFromLogin = data;
  }
}


/**
 *      [Component]
 * 1-HTML
 * 2-CSS
 * 3-TS[Logic]
 */
