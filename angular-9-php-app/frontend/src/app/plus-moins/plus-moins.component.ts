import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plus-moins',
  templateUrl: './plus-moins.component.html',
  styleUrls: ['./plus-moins.component.css']
})
export class PlusMoinsComponent implements OnInit {

  title = "Wellcome to my exercice";
    @Input() nombre : number;
    @Input("min-value") minValue: number;
    @Input("max-value") maxValue: number;
    date = new Date();
    

  constructor() {
    
   }

  ngOnInit(): void {
}
 

   incrementer(){
     if  (this.nombre < (this.maxValue)){
     
    this.nombre++;
       
     }
  }

  decrementer (){

    if  (this.nombre > (this.minValue)){
      
       this.nombre--;
    }

  }
}
