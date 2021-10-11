
import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'cyr-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  
  @Input("piz")p!:Pizza;
 txt:boolean=false;
 afficher(){
   this.txt=true;
 
 }

  constructor() { }

  ngOnInit(): void {
  }

}
