import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserInfoModel } from '../models/UserInfoModel';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form1: FormGroup;
  form2: FormGroup;
  fname: FormControl;
  lname: FormControl;
  email: FormControl;
  phone: FormControl;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.fname = new FormControl('');
    this.lname = new FormControl('');
    this.phone = new FormControl('', Validators.pattern('^[-+]?\d*$'));
    this.email = new FormControl('', Validators.email);
    this.form1 = new FormGroup({
      'fname': this.fname,
      'lname': this.lname,
      'email': this.email,
      'phone': this.phone
    });
    
  }

  saveUserInfo() {
    let userInfo = new UserInfoModel();
    userInfo = this.form1.value;
    this.userService.storeUserInfo(userInfo);
    this.router.navigate['add-user'];
  }

}
