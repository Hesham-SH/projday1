import { Component } from '@angular/core';

@Component({
    selector: 'app-comp-one',
    templateUrl: './comp-one.component.html',
    styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent {
    imgSrc = ['assets/Angular.png', 'assets/Nodejs.jpg', 'assets/React.jpg', 'assets/Vue.png'];
    index = 0;
    img = this.imgSrc[this.index];
    timer:any;
    studName = "";
    studAge = "";

    nextItem(){
        if(this.index === this.imgSrc.length -1){
            this.index = this.imgSrc.length-1;
}
        else{
            this.index++;
}
        this.img = this.imgSrc[this.index];
}


previousItem(){
    if(this.index === this.imgSrc.length - this.imgSrc.length){
        this.index = this.imgSrc.length - this.imgSrc.length;
}
    else{
        this.index--;
}
    this.img = this.imgSrc[this.index];
}

slideRun(){
    if(this.timer){
        clearInterval(this.timer);
    }
    
    this.timer = setInterval(() => {
        this.index++;
        if(this.index === this.imgSrc.length){
            this.index = this.imgSrc.length - this.imgSrc.length;
            this.img = this.imgSrc[this.index];
        }
        else{
            this.img = this.imgSrc[this.index];
        }

    },  1000)
}

sliderStop(){
    clearInterval(this.timer);
}

   data = "";
   showCharacters(args:any){
        this.data = args.target.value;
   }
   reset(){
    this.data = "";
   }

dataFromRegistration:any = [];
   
getData(dataFromRegistration:any){
    this.dataFromRegistration = dataFromRegistration;
    console.log(this.dataFromRegistration);
}
   
}

