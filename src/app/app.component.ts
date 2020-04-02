import { Component } from '@angular/core';
import { CommonService } from 'src/assets/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizza-cretaor';
constructor( private commonService : CommonService ){
}
}

