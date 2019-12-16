import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {
val1 : number ;
val2 : number ;
 res : number;
  constructor() { }



  ngOnInit() {
  }
  plus(){ 
    this.res= this.val1  + this.val2;
  }
  moin(){
    this.res= this.val1 - this.val2;
  }
  sur()
  {this.res= this.val1 / this.val2;
  }
  fois()
  {this.res= this.val1 * this.val2;
  }


  
}
