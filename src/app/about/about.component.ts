import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  paramId:number=0;

  constructor(private route : ActivatedRoute,private router : Router) {
    this.route.params.subscribe(res => console.log(res.id));

  }

  ngOnInit() {
  }
  sendMeBack(){
    this.router.navigate(['']);
  }

}
