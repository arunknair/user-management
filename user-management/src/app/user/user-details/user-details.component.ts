import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    let selectedMailId = this.userService.selectedUserEmailId;
    if (selectedMailId !== '') {
      console.log('selected Mail Id:: ', selectedMailId);
    } else {
      console.log('moonji');
    }
  }

}
