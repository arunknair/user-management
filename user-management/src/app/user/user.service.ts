import {Injectable} from '@angular/core';
import {UserInfoModel} from './models/UserInfoModel';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class UserService {

  selectedUserEmailId = '';
  cachedUserList = new Array<UserInfoModel>();
  isPermanentAddress = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  storeUserInfo(userInfo: UserInfoModel) {
    let userList = JSON.parse(sessionStorage.getItem('userList')) as Array<UserInfoModel>;
    if (userList === null || userList === undefined) {
      userList = new Array<UserInfoModel>();
    }
    userList.push(userInfo);
    sessionStorage.setItem('userList', JSON.stringify(userList));
  }

  getUserInfo() {
    let userList = JSON.parse(sessionStorage.getItem('userList')) as Array<UserInfoModel>;
    if (userList === null || userList === undefined) {
      userList = new Array<UserInfoModel>();
    }
    return userList;
  }

  editUserInfo(userList: UserInfoModel[]) {
    sessionStorage.clear();
    sessionStorage.setItem('userList', JSON.stringify(userList));
  }

  getAddressStatus() {
    return this.isPermanentAddress.asObservable();
  }

  setAddressStatus(flag: boolean) {
    this.isPermanentAddress.next(flag);
  }
}
