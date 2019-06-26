import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfoModel } from '../models/UserInfoModel';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  selectedUser: UserInfoModel;
  constructor(private userService: UserService) { }

  ngOnInit() {
    let selectedMailId = this.userService.selectedUserEmailId;
    let userList = this.userService.cachedUserList;
    if (selectedMailId !== '') {
      console.log('selected Mail Id:: ', selectedMailId);
      this.selectedUser = userList.find(user => user.email === selectedMailId);
      console.log('Selected User :  ', this.selectedUser);
    } else {
      console.log('moonji');
    }
  }

}
