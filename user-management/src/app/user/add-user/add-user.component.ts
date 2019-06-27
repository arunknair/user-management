import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserInfoModel } from '../models/UserInfoModel';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';


const QUALIFICATIONS = [
  {id: 1, degreeName: '10th'},
  {id: 1, degreeName: '12th'},
  {id: 1, degreeName: 'Bachelor Degree'},
  {id: 1, degreeName: 'Masters Degree'},
  {id: 1, degreeName: 'PhD'}
];

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form1: FormGroup;
  fname: FormControl;
  lname: FormControl;
  email: FormControl;
  phone: FormControl;
  gender: FormControl;
  degree: FormControl;
  address: FormControl;
  dob: FormControl;
  qualifications = QUALIFICATIONS;
  constructor(private userService: UserService,
              private router: Router,
              private toaster: ToastrService) { }

  ngOnInit() {
    this.fname = new FormControl('', Validators.required);
    this.lname = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.compose(
      [Validators.pattern('^[0-9]*$'), Validators.required]));
    this.email = new FormControl('', Validators.compose(
      [Validators.email, Validators.required]));
    this.gender = new FormControl('', Validators.required);
    this.degree = new FormControl('', Validators.required);
    this.address = new FormControl('', Validators.required);
    this.dob = new FormControl('', Validators.required);
    this.form1 = new FormGroup({
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      phone: this.phone,
      gender: this.gender,
      degree: this.degree,
      address: this.address,
      dob: this.dob,
    });

  }

  saveUserInfo() {
    let userInfo = new UserInfoModel();
    userInfo = this.form1.value;
    this.userService.storeUserInfo(userInfo);
    this.router.navigate['add-user'];
    this.toaster.success('User Added', 'Success', {
      timeOut: 3000
    });
    this.form1.reset();
  }

  test() {
    console.log('LOGGING HERE $$$$$$$$$$$$   ', this.form1.value);
    console.log('VALID HERE $$$$$$$$$$$$   ', this.form1.valid);
    this.router.navigate(['test']);
  }
}
