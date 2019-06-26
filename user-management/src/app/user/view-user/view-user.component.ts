import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfoModel } from '../models/UserInfoModel';

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


  displayedColumns: string[] = ['First Name', 'Last Name', 'Email ID', 'Phone Number'];
  dataSource = [];

  userList: Array<UserInfoModel>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userList = this.userService.getUserInfo();
    console.log('USRE INFO: ', this.userList);

    this.dataSource = [];
    for(let i=0;i<this.userList.length;i++) {
      console.log('***********', this.userList[i]);
      let data = new PeriodicElement();
      data.fname = this.userList[i].fname;
      data.lname = this.userList[i].lname;
      data.email = this.userList[i].email;
      data.phone = this.userList[i].phone;
      this.dataSource.push(data);
    }

  }

}
