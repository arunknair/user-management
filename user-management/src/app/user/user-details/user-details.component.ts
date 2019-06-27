import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfoModel } from '../models/UserInfoModel';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';


const QUALIFICATIONS = [
  {id: 1, degreeName: '10th'},
  {id: 1, degreeName: '12th'},
  {id: 1, degreeName: 'Bachelor Degree'},
  {id: 1, degreeName: 'Masters Degree'},
  {id: 1, degreeName: 'PhD'}
];

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  selectedUser: UserInfoModel;
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
  selectedMailId: string;
  userList: Array<UserInfoModel>;
  constructor(private userService: UserService,
              private router: Router,
              private toaster: ToastrService) { }

  ngOnInit() {
    this.selectedMailId = this.userService.selectedUserEmailId;
    this.userList = this.userService.cachedUserList;
    if (this.selectedMailId !== '') {
      console.log('selected Mail Id:: ', this.selectedMailId);
      this.selectedUser = this.userList.find(user => user.email === this.selectedMailId);
      console.log('Selected User :  ', this.selectedUser);

      this.fname = new FormControl(this.selectedUser.fname, Validators.required);
      this.lname = new FormControl(this.selectedUser.lname, Validators.required);
      this.phone = new FormControl(this.selectedUser.phone, Validators.compose(
        [Validators.pattern('^[0-9]*$'), Validators.required]));
      this.email = new FormControl(this.selectedUser.email, Validators.compose(
        [Validators.email, Validators.required]));
      this.gender = new FormControl(this.selectedUser.gender, Validators.required);
      this.degree = new FormControl(this.selectedUser.degree, Validators.required);
      this.address = new FormControl(this.selectedUser.address, Validators.required);
      this.dob = new FormControl(this.selectedUser.dob, Validators.required);
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
  }

  returnToViewPage() {
    this.router.navigate(['view-user']);
  }

  saveEdited() {
     console.log('before change : ', this.userList);
     this.userList.splice( this.userList.findIndex(x => x.email === this.selectedMailId),1);
     
     const userInfo = this.form1.value;
     this.userList.push(userInfo);
     console.log('after change : ',this.userList);
     this.userService.editUserInfo(this.userList);
     this.toaster.success('User Data Edited', 'Success', {
      timeOut: 3000
    });
    this.form1.reset();
  }
}
