import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  numberCount:number=4;
  btnText:String='Add an Item';
  goalText:String='my goal';
  goals=[];

  constructor() {

  }

  ngOnInit() {

    this.numberCount=this.goals.length;
  }
  addItem(){
    this.goals.push(this.goalText);
    this.goalText='';
    this.numberCount=this.goals.length;

  }

}
