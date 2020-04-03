import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  public userDetails;
  public showAddPizza = false;
  public showCartDetails = false;
  public pizzaDetails;
  public showuserDetails = false;
}
