import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UserInfoModel} from '../models/UserInfoModel';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
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
  paddress: FormControl;
  raddress: FormControl;
  dob: FormControl;
  qualifications = QUALIFICATIONS;
  isPermanentAddress: boolean;

  constructor(private userService: UserService,
              private router: Router,
              private toaster: ToastrService) {
  }

  ngOnInit() {
    this.fname = new FormControl('', Validators.required);
    this.lname = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.compose(
      [Validators.pattern('^[0-9]*$'), Validators.required]));
    this.email = new FormControl('', Validators.compose(
      [Validators.email, Validators.required]));
    this.gender = new FormControl('', Validators.required);
    this.degree = new FormControl('', Validators.required);
    this.paddress = new FormControl('', Validators.required);
    this.raddress = new FormControl('', Validators.required);
    this.dob = new FormControl('', Validators.required);
    this.form1 = new FormGroup({
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      phone: this.phone,
      gender: this.gender,
      degree: this.degree,
      paddress: this.paddress,
      raddress: this.raddress,
      dob: this.dob,
    });
    this.isPermanentAddress = false;
    this.userService.getAddressStatus().subscribe(data => {
      this.isPermanentAddress = data.valueOf();

      if (this.isPermanentAddress) {
        this.paddress.setValue(this.raddress.value);
      } else {
        this.paddress.reset();
      }

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

  changeAddressStatus() {
    this.userService.setAddressStatus(!this.isPermanentAddress);
    console.log('address status : ', !this.isPermanentAddress);
  }
}
