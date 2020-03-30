import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../assets/services/common.service'

@Component({
  selector: 'app-add-user-details',
  templateUrl: './add-user-details.component.html',
  styleUrls: ['./add-user-details.component.css']
})
export class AddUserDetailsComponent implements OnInit {
  // public show = true;
  constructor(private fb: FormBuilder, private commonService: CommonService) { }

  ngOnInit() {
  }

  userInfo = this.fb.group({
    name: ['',  [Validators.required, Validators.pattern('[a-z A-z]*')]],
    address: ['', Validators.required],
    pincode: ['',  [Validators.required, Validators.pattern('[0-9]*')]],
    phone_no: ['',  [Validators.required, Validators.pattern('[0-9]*')]]
  })

  onClick(){
    this.commonService.userDetails = this.userInfo.value;
    this.commonService.showAddPizza = true;
  }

}
