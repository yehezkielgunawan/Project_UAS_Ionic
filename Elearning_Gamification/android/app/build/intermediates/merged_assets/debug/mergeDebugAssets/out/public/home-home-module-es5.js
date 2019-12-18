(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <div class=\"body flex-container\">\n    <div class=\"header\">\n      <ion-row>\n        <div class=\"navbar\">\n          <div class=\"menu\">\n            <pre></pre>\n            <pre></pre>\n            <pre></pre>\n          </div>\n          <ion-col text-center>\n            <p>goleran app</p>\n          </ion-col>\n        </div>\n      </ion-row>\n      <ion-row>\n        <div class=\"profile-container\">\n          <ion-col>\n            <div class=\"avatar\">\n              <img src=\"{{profileDetails['image']}}\" />\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class=\"stats\">\n              <p class=\"vline\">{{ profileDetails['name'] }}</p>\n              <p class=\"vline\">{{ profileDetails['level'] }}</p>\n              <p>Exp : {{ profileDetails['xp'] }}</p>\n            </div>\n          </ion-col>\n        </div>\n      </ion-row>\n    \n    </div>\n\n    <ion-grid>\n      <div class=\"none\">\n        <ion-row>\n          <ion-col size=\"6\">\n    \n                <p> Profesor</p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-card class=\"card-item\" [routerLink]=\"['/game']\">\n              <img src=\"../assets/icon/undraw_may_the_force_bgdm.png\">\n              <h4 class=\"ion-text-center\">Battle</h4>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-card class=\"card-item\" [routerLink]=\"['/training']\">\n              <img src=\"../assets/icon/undraw_ideation_2a64.png\">\n              <h4 class=\"ion-text-center\">Training</h4>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-card class=\"card-item\" [routerLink]=\"['/profile']\">\n              <img src=\"../assets/icon/undraw_profile_6l1l.png\">\n              <h4 class=\"ion-text-center\">Profile</h4>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-card class=\"card-item\" (click)=\"logout()\">\n              <img src=\"../assets/icon/undraw_Login_v483.png\">\n              <h4 class=\"ion-text-center\">Logout</h4>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-device-width: 600px) {\n  /* For portrait layouts only */\n  .body {\n    position: inherit;\n  }\n  .body .header {\n    height: 35vh;\n    margin: 0 !important;\n    background-color: #26bbec;\n    background-image: url('undraw_nature_fun_n9lv.svg');\n    border-bottom-left-radius: 20%;\n    border-bottom-right-radius: 20%;\n    width: 100%;\n  }\n  .body .header .navbar {\n    position: fixed;\n    z-index: 999;\n    display: -webkit-box;\n    display: flex;\n    color: white;\n    background-color: #26bbec;\n    width: 100%;\n    font-weight: 900;\n    font-size: 18px;\n  }\n  .body .header .navbar .menu {\n    margin: 10px 15px;\n  }\n  .body .header .navbar .menu pre {\n    width: 25px;\n    height: 2px;\n    background-color: white;\n    margin: 6px 0;\n  }\n  .body .header .navbar p {\n    padding-right: 15%;\n  }\n  .body .header .profile-container {\n    padding: 0 0 0 0;\n    margin-top: 5vh;\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    background-color: rgba(38, 187, 236, 0.82);\n    border-bottom-left-radius: 20%;\n    border-bottom-right-radius: 20%;\n  }\n  .body .header .profile-container .avatar {\n    -webkit-box-ordinal-group: 2;\n            order: 1;\n    margin-top: 5vh;\n  }\n  .body .header .profile-container .avatar img {\n    width: 15vh;\n    border-radius: 50%;\n    margin-left: 5vh;\n  }\n  .body .header .profile-container .stats {\n    margin: 0;\n    margin-top: 5vh;\n    color: white;\n    font-size: 24px;\n    font-weight: 900;\n    -webkit-box-flex: 2;\n            flex: 2 0px;\n    -webkit-box-ordinal-group: 3;\n            order: 2;\n  }\n  .body .none {\n    display: none;\n  }\n  .body .card-item img {\n    height: 128px !important;\n  }\n}\n@media only screen and (min-device-width: 600px) and (max-device-width: 1024px) {\n  /* For portrait layouts only */\n  .body {\n    position: inherit;\n  }\n  .body .header {\n    height: 35vh;\n    margin: 0 !important;\n    background-color: #26bbec;\n    background-image: url('undraw_nature_fun_n9lv.svg');\n    border-bottom-left-radius: 15%;\n    border-bottom-right-radius: 15%;\n    width: 100%;\n  }\n  .body .header .navbar {\n    position: fixed;\n    z-index: 999;\n    display: -webkit-box;\n    display: flex;\n    color: white;\n    background-color: #26bbec;\n    width: 100%;\n    font-weight: 900;\n    font-size: 28px;\n  }\n  .body .header .navbar .menu {\n    margin: 20px 30px;\n  }\n  .body .header .navbar .menu pre {\n    width: 45px;\n    height: 3px;\n    background-color: white;\n    margin: 12px 0;\n  }\n  .body .header .navbar p {\n    padding-right: 15%;\n  }\n  .body .header .profile-container {\n    padding: 0 0 0 0;\n    margin: 9vh 5vh;\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    background-color: rgba(38, 187, 236, 0.82);\n    border-bottom-left-radius: 15%;\n    border-bottom-right-radius: 15%;\n  }\n  .body .header .profile-container .avatar {\n    -webkit-box-ordinal-group: 2;\n            order: 1;\n  }\n  .body .header .profile-container .avatar img {\n    width: 18vh;\n    border-radius: 50%;\n    margin-left: 5vh;\n  }\n  .body .header .profile-container .stats {\n    margin: 0;\n    color: white;\n    font-size: 28px;\n    font-weight: 900;\n    -webkit-box-flex: 2;\n            flex: 2 0px;\n    -webkit-box-ordinal-group: 3;\n            order: 2;\n  }\n  .body .none {\n    display: none;\n  }\n  .body .card-item img {\n    height: 220px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbmNocmlzdGlhbi9Eb2N1bWVudHMvTW9iaWxlIENyb3NzIFBsYXRmb3JtL1VBUy9Qcm9qZWN0X1VBU19Jb25pYy9FbGVhcm5pbmdfR2FtaWZpY2F0aW9uL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDhCQUFBO0VBQ0E7SUFDSSxpQkFBQTtFQ0FOO0VERU07SUFDRSxZQUFBO0lBQ0Esb0JBQUE7SUFDQSx5QkFBQTtJQUNBLG1EQUFBO0lBQ0EsOEJBQUE7SUFDQSwrQkFBQTtJQUNBLFdBQUE7RUNBUjtFREVRO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtJQUFBLGFBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VDQVY7RURFVTtJQUNJLGlCQUFBO0VDQWQ7RURDWTtJQUNFLFdBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxhQUFBO0VDQ2Q7RURFVTtJQUNDLGtCQUFBO0VDQVg7RURHUTtJQU1FLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw4QkFBQTtJQUFBLDZCQUFBO1lBQUEsbUJBQUE7SUFDQSwwQ0FBQTtJQUNBLDhCQUFBO0lBQ0EsK0JBQUE7RUNOVjtFRFFVO0lBQ0UsNEJBQUE7WUFBQSxRQUFBO0lBQ0EsZUFBQTtFQ05aO0VET1k7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQ0xkO0VEU1U7SUFDRSxTQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtZQUFBLFdBQUE7SUFDQSw0QkFBQTtZQUFBLFFBQUE7RUNQWjtFRFlJO0lBQ0UsYUFBQTtFQ1ZOO0VEY007SUFDRSx3QkFBQTtFQ1pSO0FBQ0Y7QURtQkU7RUFDRSw4QkFBQTtFQUNBO0lBQ0ksaUJBQUE7RUNqQk47RURtQk07SUFDRSxZQUFBO0lBQ0Esb0JBQUE7SUFDQSx5QkFBQTtJQUNBLG1EQUFBO0lBQ0EsOEJBQUE7SUFDQSwrQkFBQTtJQUVBLFdBQUE7RUNsQlI7RURvQlE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUNsQlY7RURvQlU7SUFDSSxpQkFBQTtFQ2xCZDtFRG1CWTtJQUNFLFdBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxjQUFBO0VDakJkO0VEb0JVO0lBQ0Msa0JBQUE7RUNsQlg7RURxQlE7SUFNRSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0Esb0JBQUE7SUFBQSxhQUFBO0lBQ0EsOEJBQUE7SUFBQSw2QkFBQTtZQUFBLG1CQUFBO0lBQ0EsMENBQUE7SUFDQSw4QkFBQTtJQUNBLCtCQUFBO0VDeEJWO0VEMEJVO0lBTUUsNEJBQUE7WUFBQSxRQUFBO0VDN0JaO0VEd0JZO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7RUN0QmQ7RUQyQlU7SUFDRSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO1lBQUEsV0FBQTtJQUNBLDRCQUFBO1lBQUEsUUFBQTtFQ3pCWjtFRDhCTTtJQUNFLGFBQUE7RUM1QlI7RURnQ1E7SUFDRSx3QkFBQTtFQzlCVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNjAwcHgpIHtcbiAgICAvKiBGb3IgcG9ydHJhaXQgbGF5b3V0cyBvbmx5ICovXG4gICAgLmJvZHl7XG4gICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgICAgXG4gICAgICAgIC5oZWFkZXJ7XG4gICAgICAgICAgaGVpZ2h0OiAzNXZoO1xuICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgMTg3LCAyMzYpO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzcmMvYXNzZXRzL2ljb24vdW5kcmF3X25hdHVyZV9mdW5fbjlsdi5zdmcpO1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwJTtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgXG4gICAgICAgICAgLm5hdmJhcntcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDE4NywgMjM2KTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIFxuICAgICAgICAgICAgLm1lbnV7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gICAgICAgICAgICAgIHByZXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2ZpbGUtY29udGFpbmVye1xuICAgICAgICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgICAgLy8gICBtYXJnaW46IC01dmggMCAwIDEwJTtcbiAgICAgICAgICAgIC8vICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgICAgICAgICAgLy8gICBoZWlnaHQ6IDh2aDtcbiAgICAgICAgICAgIC8vICAgd2lkdGg6IDgwJTsgIFxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM4LCAxODcsIDIzNiwgMC44Mik7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMCU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjAlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuYXZhdGFye1xuICAgICAgICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xuICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1dmg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1dmg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAuc3RhdHN7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgZmxleDogMiAwcHg7XG4gICAgICAgICAgICAgIG9yZGVyOiAyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBcbiAgICAgIC5ub25le1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICBcbiAgICAgIC5jYXJkLWl0ZW17XG4gICAgICAgIGltZ3tcbiAgICAgICAgICBoZWlnaHQ6IDEyOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjAwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gICAgLyogRm9yIHBvcnRyYWl0IGxheW91dHMgb25seSAqL1xuICAgIC5ib2R5e1xuICAgICAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgICAgIFxuICAgICAgICAuaGVhZGVye1xuICAgICAgICAgIGhlaWdodDogMzV2aDtcbiAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDE4NywgMjM2KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3JjL2Fzc2V0cy9pY29uL3VuZHJhd19uYXR1cmVfZnVuX245bHYuc3ZnKTtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNSU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1JTtcbiAgICAgICAgICBcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIFxuICAgICAgICAgIC5uYXZiYXJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCAxODcsIDIzNik7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICBcbiAgICAgICAgICAgIC5tZW51e1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAzMHB4O1xuICAgICAgICAgICAgICBwcmV7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZmlsZS1jb250YWluZXJ7XG4gICAgICAgICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgICAgICAvLyAgIG1hcmdpbjogLTV2aCAwIDAgMTAlO1xuICAgICAgICAgICAgLy8gICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgICAgICAgICAvLyAgIGhlaWdodDogOHZoO1xuICAgICAgICAgICAgLy8gICB3aWR0aDogODAlOyAgXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgICAgICAgICAgbWFyZ2luOiA5dmggNXZoO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDE4NywgMjM2LCAwLjgyKTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1JTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNSU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5hdmF0YXJ7XG4gICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTh2aDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDV2aDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAuc3RhdHN7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgIGZsZXg6IDIgMHB4O1xuICAgICAgICAgICAgICBvcmRlcjogMlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC5ub25le1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmNhcmQtaXRlbXtcbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICBoZWlnaHQ6IDIyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2MDBweCkge1xuICAvKiBGb3IgcG9ydHJhaXQgbGF5b3V0cyBvbmx5ICovXG4gIC5ib2R5IHtcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgfVxuICAuYm9keSAuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDM1dmg7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmJlYztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3JjL2Fzc2V0cy9pY29uL3VuZHJhd19uYXR1cmVfZnVuX245bHYuc3ZnKTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMCU7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuYm9keSAuaGVhZGVyIC5uYXZiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmJlYztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuYm9keSAuaGVhZGVyIC5uYXZiYXIgLm1lbnUge1xuICAgIG1hcmdpbjogMTBweCAxNXB4O1xuICB9XG4gIC5ib2R5IC5oZWFkZXIgLm5hdmJhciAubWVudSBwcmUge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogNnB4IDA7XG4gIH1cbiAgLmJvZHkgLmhlYWRlciAubmF2YmFyIHAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgfVxuICAuYm9keSAuaGVhZGVyIC5wcm9maWxlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDE4NywgMjM2LCAwLjgyKTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMCU7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwJTtcbiAgfVxuICAuYm9keSAuaGVhZGVyIC5wcm9maWxlLWNvbnRhaW5lciAuYXZhdGFyIHtcbiAgICBvcmRlcjogMTtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gIH1cbiAgLmJvZHkgLmhlYWRlciAucHJvZmlsZS1jb250YWluZXIgLmF2YXRhciBpbWcge1xuICAgIHdpZHRoOiAxNXZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogNXZoO1xuICB9XG4gIC5ib2R5IC5oZWFkZXIgLnByb2ZpbGUtY29udGFpbmVyIC5zdGF0cyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZmxleDogMiAwcHg7XG4gICAgb3JkZXI6IDI7XG4gIH1cbiAgLmJvZHkgLm5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmJvZHkgLmNhcmQtaXRlbSBpbWcge1xuICAgIGhlaWdodDogMTI4cHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjAwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gIC8qIEZvciBwb3J0cmFpdCBsYXlvdXRzIG9ubHkgKi9cbiAgLmJvZHkge1xuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICB9XG4gIC5ib2R5IC5oZWFkZXIge1xuICAgIGhlaWdodDogMzV2aDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiYmVjO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzcmMvYXNzZXRzL2ljb24vdW5kcmF3X25hdHVyZV9mdW5fbjlsdi5zdmcpO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1JTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5ib2R5IC5oZWFkZXIgLm5hdmJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiYmVjO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG4gIC5ib2R5IC5oZWFkZXIgLm5hdmJhciAubWVudSB7XG4gICAgbWFyZ2luOiAyMHB4IDMwcHg7XG4gIH1cbiAgLmJvZHkgLmhlYWRlciAubmF2YmFyIC5tZW51IHByZSB7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAxMnB4IDA7XG4gIH1cbiAgLmJvZHkgLmhlYWRlciAubmF2YmFyIHAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgfVxuICAuYm9keSAuaGVhZGVyIC5wcm9maWxlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgICBtYXJnaW46IDl2aCA1dmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDE4NywgMjM2LCAwLjgyKTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNSU7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1JTtcbiAgfVxuICAuYm9keSAuaGVhZGVyIC5wcm9maWxlLWNvbnRhaW5lciAuYXZhdGFyIHtcbiAgICBvcmRlcjogMTtcbiAgfVxuICAuYm9keSAuaGVhZGVyIC5wcm9maWxlLWNvbnRhaW5lciAuYXZhdGFyIGltZyB7XG4gICAgd2lkdGg6IDE4dmg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1dmg7XG4gIH1cbiAgLmJvZHkgLmhlYWRlciAucHJvZmlsZS1jb250YWluZXIgLnN0YXRzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZsZXg6IDIgMHB4O1xuICAgIG9yZGVyOiAyO1xuICB9XG4gIC5ib2R5IC5ub25lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5ib2R5IC5jYXJkLWl0ZW0gaW1nIHtcbiAgICBoZWlnaHQ6IDIyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-service.service */ "./src/app/services/user-service.service.ts");






var HomePage = /** @class */ (function () {
    function HomePage(router, alertController, userService) {
        this.router = router;
        this.alertController = alertController;
        this.userService = userService;
        this.profileDetails = [];
    }
    HomePage.prototype.ngOnInit = function () {
        var loggedIn = localStorage.getItem('uid');
        if (loggedIn == null) {
            this.router.navigate(['login']);
        }
        this.profileDetails = this.userService.getProfileDetails();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.ngOnInit();
    };
    HomePage.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signOut().then(function () {
                            console.log('Logout from firebase auth');
                        }).catch(function (error) {
                            console.log(error.message);
                        })];
                    case 1:
                        _a.sent();
                        this.router.navigate(['login']);
                        localStorage.clear();
                        this.presentAlert('Logout Success !', 'Please log in back to use this applications');
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.presentAlert = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
        { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map