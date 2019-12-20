import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { Plugins, CameraResultType, CameraSource, FilesystemDirectory, Filesystem, Capacitor } from '@capacitor/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private userService: UserServiceService) { }
  profileDetails: string[] = [];
  selectedImage: string;

  ngOnInit() {
    var loggedIn = localStorage.getItem('uid');
    if(loggedIn == null){
      this.router.navigate(['login']);
    }
    this.profileDetails = this.userService.getProfileDetails();

  }

  updateName() {
    this.userService.inputAlert('Update your Names !');
  }

  onFileChosen(evt: Event) {
    console.log(evt);
    const pickedFile = (evt.target as HTMLInputElement).files[0];
    const fr = new FileReader();
    var imagestring;
    fr.onload = () => {
      const dataUrl = fr.result.toString();
      this.selectedImage = dataUrl;
      console.log(this.selectedImage);
      imagestring = btoa(this.selectedImage);
    }
    var storageRef = firebase.storage().ref();
    var uid = this.userService.getUid();
    var childRef = storageRef.child(uid + '_profilepicture.jpg');
    childRef.put(pickedFile).then(() => {
      return childRef.getDownloadURL().then(downloadURL => {
        return this.userService.setImage(downloadURL);
      });
    });
    fr.readAsDataURL(pickedFile);
  }

  captureImage() {
    Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    }).then((imageData) => {
      console.log(imageData);
      var storageRef = firebase.storage().ref();
      var uid = this.userService.getUid();
      var childRef = storageRef.child(uid + '_profilepicture.jpg');

      return childRef
        .putString(imageData.base64String, 'base64', { contentType: 'image/png' })
        .then(() => {
          return childRef.getDownloadURL().then(downloadURL => {
            return this.userService.setImage(downloadURL);
          });
        });
    }, (Err) => {
    });
  }


}
