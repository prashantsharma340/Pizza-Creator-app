import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/assets/services/common.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }
onClick(){
  this.commonService.showuserDetails = true;
}
}
