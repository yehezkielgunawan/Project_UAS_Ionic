import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Camera, PictureSourceType, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { HttpClient } from '@angular/common/http';
import { Platform, ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileDetails: string[] = [];
  images = [];

  constructor(private camera: Camera, private file: File, private Http: HttpClient, private userService: UserServiceService,
              private plt: Platform, private storage: Storage, private webview: WebView,
              private actionSheetController: ActionSheetController) { }
  ngOnInit() {
    this.profileDetails = this.userService.getProfileDetails();
    this.plt.ready().then(() => {
       this.loadStoredImages();
    });
  }

  updateName() {
    this.userService.inputAlert('Update your Names !');
  }

  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        const arr = JSON.parse(images);
        this.images = [];
        for (const img of arr) {
          const filePath = this.file.dataDirectory + img;
          const resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath: filePath });
        }
      }
    });
  }

  pathForImage(img){
    if (img === null){
      return '';
    }
    else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  async selectImage(){
    const actionSheet = await this.actionSheetController.create({
      header: "Select your Image",
      buttons: [{
        text: "Upload from Library",
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: "Upload from Camera",
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
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

  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: 100,
      sourceType : sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
    };

    this.camera.getPicture(options).then(imagePath =>  {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
    });
  }


}
