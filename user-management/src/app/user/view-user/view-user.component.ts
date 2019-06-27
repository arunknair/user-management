import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {UserInfoModel} from '../models/UserInfoModel';
import {Router} from '@angular/router';

export class PeriodicElement {
  fname: string;
  lname: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {


  displayedColumns: string[] = ['First Name', 'Last Name', 'Email ID', 'Phone Number', 'Details'];
  dataSource = [];

  userList: Array<UserInfoModel>;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.userList = this.userService.getUserInfo();
    console.log('USRE INFO: ', this.userList);
    this.userService.cachedUserList = this.userList;

    this.dataSource = [];
    for (let i = 0; i < this.userList.length; i++) {
      console.log('***********', this.userList[i]);
      let data = new PeriodicElement();
      data.fname = this.userList[i].fname;
      data.lname = this.userList[i].lname;
      data.email = this.userList[i].email;
      data.phone = this.userList[i].phone;
      this.dataSource.push(data);
    }

  }

  getUserDetails(email: string) {
    console.log('details pageXOffset', email);
    this.userService.selectedUserEmailId = email;
    this.router.navigate(['user-details']);
  }

}
