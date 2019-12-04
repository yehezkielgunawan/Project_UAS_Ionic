import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Camera, PictureSourceType, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { HttpClient } from '@angular/common/http';
import { Platform, ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource, Filesystem } from '@capacitor/core';
import * as firebase from 'firebase';


const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileDetails: string[] = [];
  photo: SafeResourceUrl;

  constructor(private camera: Camera, private file: File, private Http: HttpClient, private userService: UserServiceService,
              private plt: Platform, private storage: Storage, private webview: WebView,
              private actionSheetController: ActionSheetController, private ref: ChangeDetectorRef,
              private sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.profileDetails = this.userService.getProfileDetails();
  }

  updateName() {
    this.userService.inputAlert('Update your Names !');
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select your Image",
      buttons: [{
        text: "Upload from Library",
        handler: () => {
          console.log('DIBUAT DULU ANJING FUNCTIONNYA !!!');
        }
      },
      {
        text: "Upload from Camera",
        handler: () => {
          this.captureImage();
        }
      },
      {
        text: "Cancel",
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  async getImage() {
    const photoInTempStorage = await Filesystem.readFile({ path: originalPhoto.path });
  }

  captureImage(){
    Plugins.Camera.getPhoto({
      quality:100,
      allowEditing:false,
      resultType:CameraResultType.Base64,
      source:CameraSource.Camera
    }).then((imageData)=>{
      console.log(imageData);
      var storageRef = firebase.storage().ref();
      var uid = this.userService.getUid();
      var childRef = storageRef.child( uid + '_profilepicture.jpg');

      return childRef
      .putString(imageData.base64String, 'base64', { contentType: 'image/png' })
      .then(() => {
        return childRef.getDownloadURL().then(downloadURL => {
          return this.userService.setImage(downloadURL);
        });
      });
    },(Err)=>{
      alert(JSON.stringify(Err));
    });
  }


}
