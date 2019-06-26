import { Injectable } from '@angular/core';
import { UserInfoModel } from './models/UserInfoModel';

@Injectable()
export class UserService {

  selectedUserEmailId = '';
  constructor() { }

  storeUserInfo(userInfo: UserInfoModel) {
    let userList = <Array<UserInfoModel>>JSON.parse(sessionStorage.getItem('userList'));
    if (userList === null || userList === undefined) {
      userList = new Array<UserInfoModel>();
    }
    userList.push(userInfo);
    sessionStorage.setItem('userList', JSON.stringify(userList)); 
  }

  getUserInfo() {
    let userList = <Array<UserInfoModel>>JSON.parse(sessionStorage.getItem('userList'));
    if (userList === null || userList === undefined) {
      userList = new Array<UserInfoModel>();
    }
    return userList;
  }
}
