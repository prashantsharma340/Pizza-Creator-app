import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../assets/services/common.service'

@Component({
  selector: 'app-add-pizza-info',
  templateUrl: './add-pizza-info.component.html',
  styleUrls: ['./add-pizza-info.component.css']
})
export class AddPizzaInfoComponent implements OnInit {
// public showCartDetails = true;
public addPizzaSize;
public base;
public selectedToppings = [];
public totalPrice;
public showError = false;

public toppings = [
  {name:'pepperoni',selected:false},
  {name:'Mushroom',selected:false},
  {name:'Onion',selected:false},
  {name:'Olives',selected:false},
  {name:'Red Peprika',selected:false},
  {name:'Paneer tikka',selected:false},
  {name:'capsicum',selected:false},
  {name:'corn',selected:false},
  {name:'sausage',selected:false},
  {name:'bacon',selected:false}

]
  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
  }

  pizzaSelect(id,price){
      this.showError=false;
      this.addPizzaSize = id;
      this.totalPrice = price;
  }

  selectToppings(item){
    this.showError=false;
    item.selected = !item.selected;
    if (item.selected) {
      this.selectedToppings.push(item.name);
    }
    else {
        this.selectedToppings.splice(this.toppings.indexOf(item.name), 1);
    }
    console.log(this.selectedToppings,'this.toppings')
  }

  onClick(){
    if(!this.base || !this.selectedToppings.length || !this.addPizzaSize)
    {
      this.showError=true;
      return;
    }
    this.totalPrice = this.totalPrice + 100 + (60 * this.selectedToppings.length);
    this.commonService.showCartDetails = true;
    this.commonService.pizzaDetails = {
                   base:this.base,
                   addPizzaSize:this.addPizzaSize,
                   selectedToppings:this.selectedToppings,
                   price: this.totalPrice
    }
    console.log(this.commonService.userDetails,'this.commonService.userDetails')
    console.log(this.commonService.pizzaDetails,'this.commonService.pizzaDetails')
  }
}
