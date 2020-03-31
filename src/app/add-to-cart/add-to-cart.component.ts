import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/assets/services/common.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  public show=true;
  public showSuccessMsg = true;

  constructor(private commonService : CommonService, private http: HttpClient) { }

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
   var storeData = {
     name: this.commonService.userDetails.name,
     address: this.commonService.userDetails.address,
     pincode: this.commonService.userDetails.pincode,
     phone_no: this.commonService.userDetails.phone_no,
     pizza_base: this.commonService.pizzaDetails.base,
     pizza_size: this.commonService.pizzaDetails.addPizzaSize,
     toppings : this.commonService.pizzaDetails.selectedToppings,
     price : this.commonService.pizzaDetails.price
   }
   console.log(storeData);
      this.http.post('http://localhost:3000/products',storeData).subscribe((response:any)=>{
                     console.log(response,'response');
      })
  }

  onClick1(){
    this.commonService.showAddPizza=false;
    this.commonService.showCartDetails=false;
  }
}
