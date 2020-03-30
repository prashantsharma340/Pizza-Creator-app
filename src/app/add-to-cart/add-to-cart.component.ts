import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/assets/services/common.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  public show=true;
  public showSuccessMsg = true;
  constructor(private commonService : CommonService) { }

  ngOnInit() {
  }

  delete(){
    this.show = false;
    this.showSuccessMsg=false;
  }

  onClick(){
    this.commonService.showCartDetails = false;
    this.showSuccessMsg = false;
  }

  onAddToCart(){
   this.show = false;
   this.showSuccessMsg = true;
  }

  onClick1(){
    this.commonService.showAddPizza=false;
    this.commonService.showCartDetails=false;
  }
}
