import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserInfoModel } from '../models/UserInfoModel';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


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
              private router: Router) { }

  ngOnInit() {
    this.fname = new FormControl('');
    this.lname = new FormControl('');
    this.phone = new FormControl('', Validators.pattern('^[-+]?\d*$'));
    this.email = new FormControl('', Validators.email);
    this.gender = new FormControl();
    this.degree = new FormControl();
    this.address = new FormControl();
    this.dob = new FormControl();
    this.form1 = new FormGroup({
      'fname': this.fname,
      'lname': this.lname,
      'email': this.email,
      'phone': this.phone,
      'gender': this.gender,
      'degree': this.degree,
      'address': this.address,
      'dob': this.dob,
    });

  }

  saveUserInfo() {
    let userInfo = new UserInfoModel();
    userInfo = this.form1.value;
    this.userService.storeUserInfo(userInfo);
    this.router.navigate['add-user'];
  }

  test() {
    console.log('LOGINF HERE $$$$$$$$$$$$   ', this.form1.value);
  }
}
