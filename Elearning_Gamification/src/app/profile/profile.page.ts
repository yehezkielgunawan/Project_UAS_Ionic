import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileDetails: string[] =[];

  constructor(private userService: UserServiceService) { }
  ngOnInit() {
    this.profileDetails = this.userService.getProfileDetails();
  }

  updateName(){
    this.userService.inputAlert('Update your Names !');
  }

  

}
