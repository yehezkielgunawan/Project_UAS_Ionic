(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["training-training-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/training/training.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/training/training.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>training</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <p>{{soal[0]}} {{operator}} {{soal[1]}}</p><ion-input [(ngModel)]=\"hasil\" name=\"hasil\"></ion-input>\n    <ng-template [ngIf] = \"questionNumber >= 1\" [ngIfElse]=\"none\"> \n      <!-- ^ Tambah jadi 10 ^ -->\n      <ion-button (click)=\"submitTraining(hasil)\">Submit</ion-button>\n    </ng-template>\n    <ng-template #none>\n      <ion-button (click)=\"nextPage(hasil)\">Next</ion-button>\n    </ng-template>\n  </ion-content>"

/***/ }),

/***/ "./src/app/services/training.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/training.service.ts ***!
  \**********************************************/
/*! exports provided: TrainingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingService", function() { return TrainingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrainingService = /** @class */ (function () {
    function TrainingService() {
        this.a = [1, 2];
    }
    TrainingService.prototype.generateQuestionSatuan = function () {
        var temp;
        this.a[0] = Math.floor(Math.random() * 1000000 % 10);
        this.a[1] = Math.floor(Math.random() * 1000000 % 10);
        if (this.a[0] < this.a[1]) {
            temp = this.a[0];
            this.a[0] = this.a[1];
            this.a[1] = temp;
        }
        return this.a;
    };
    TrainingService.prototype.generateQuestionPuluhan = function () {
        var temp;
        this.a[0] = Math.floor(Math.random() * 1000000 % 100);
        this.a[1] = Math.floor(Math.random() * 1000000 % 100);
        if (this.a[0] < this.a[1]) {
            temp = this.a[0];
            this.a[0] = this.a[1];
            this.a[1] = temp;
        }
        return this.a;
    };
    TrainingService.prototype.generateQuestionRatusan = function () {
        var temp;
        this.a[0] = Math.floor(Math.random() * 1000000 % 1000);
        this.a[1] = Math.floor(Math.random() * 1000000 % 1000);
        if (this.a[0] < this.a[1]) {
            temp = this.a[0];
            this.a[0] = this.a[1];
            this.a[1] = temp;
        }
        return this.a;
    };
    TrainingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrainingService);
    return TrainingService;
}());



/***/ }),

/***/ "./src/app/training/training-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/training/training-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TrainingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingPageRoutingModule", function() { return TrainingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _training_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./training.page */ "./src/app/training/training.page.ts");




var routes = [
    {
        path: '',
        component: _training_page__WEBPACK_IMPORTED_MODULE_3__["TrainingPage"]
    }
];
var TrainingPageRoutingModule = /** @class */ (function () {
    function TrainingPageRoutingModule() {
    }
    TrainingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TrainingPageRoutingModule);
    return TrainingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/training/training.module.ts":
/*!*********************************************!*\
  !*** ./src/app/training/training.module.ts ***!
  \*********************************************/
/*! exports provided: TrainingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingPageModule", function() { return TrainingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./training-routing.module */ "./src/app/training/training-routing.module.ts");
/* harmony import */ var _training_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./training.page */ "./src/app/training/training.page.ts");







var TrainingPageModule = /** @class */ (function () {
    function TrainingPageModule() {
    }
    TrainingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _training_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrainingPageRoutingModule"]
            ],
            declarations: [_training_page__WEBPACK_IMPORTED_MODULE_6__["TrainingPage"]]
        })
    ], TrainingPageModule);
    return TrainingPageModule;
}());



/***/ }),

/***/ "./src/app/training/training.page.scss":
/*!*********************************************!*\
  !*** ./src/app/training/training.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWluaW5nL3RyYWluaW5nLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/training/training.page.ts":
/*!*******************************************!*\
  !*** ./src/app/training/training.page.ts ***!
  \*******************************************/
/*! exports provided: TrainingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingPage", function() { return TrainingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_training_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/training.service */ "./src/app/services/training.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var TrainingPage = /** @class */ (function () {
    function TrainingPage(router, trainingService, alertController) {
        this.router = router;
        this.trainingService = trainingService;
        this.alertController = alertController;
        this.soal = [1, 2];
        this.score = 0;
        this.questionNumber = 0;
        this.operatorList = ['+', '-', '*', '/'];
        this.exp = 0;
        this.level = 0;
    }
    TrainingPage.prototype.ngOnInit = function () {
        this.showQuestion();
        var loggedin = localStorage.getItem('uid');
        if (loggedin == null) {
            this.router.navigate(['login']);
        }
        else {
            this.localStorageUid = loggedin;
        }
    };
    TrainingPage.prototype.showQuestion = function () {
        var _this = this;
        console.log('Score : ' + this.score);
        this.questionNumber++;
        // const uid = firebase.auth().currentUser.uid;
        var xp;
        firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('/users/' + this.localStorageUid).once('value').then(function (snapshot) {
            xp = (snapshot.val() && snapshot.val().xp);
            if (xp <= 100) {
                _this.soal = _this.trainingService.generateQuestionSatuan();
                var operatorPicker = 0;
                _this.operator = _this.operatorList[operatorPicker];
            }
            else if (xp <= 200) {
                _this.soal = _this.trainingService.generateQuestionPuluhan();
                var operatorPicker = Math.floor(Math.random() * (2 - 0) + 0);
                _this.operator = _this.operatorList[operatorPicker];
            }
            else if (xp <= 300) {
                _this.soal = _this.trainingService.generateQuestionRatusan();
                var operatorPicker = Math.floor(Math.random() * (4 - 0) + 0);
                _this.operator = _this.operatorList[operatorPicker];
            }
            _this.generateAnswer(_this.operator);
            return _this.soal;
        });
    };
    TrainingPage.prototype.generateAnswer = function (operator) {
        if (operator === '+') {
            this.answer = this.soal[0] + this.soal[1];
        }
        else if (operator === '-') {
            this.answer = this.soal[0] - this.soal[1];
        }
        else if (operator === 'x') {
            this.answer = this.soal[0] * this.soal[1];
        }
        else if (operator === '/') {
            this.answer = this.soal[0] / this.soal[1];
        }
        return this.answer;
    };
    TrainingPage.prototype.nextPage = function (hasil) {
        console.log('Answer : ' + this.answer);
        console.log('Hasil : ' + hasil);
        if (this.answer == hasil) {
            console.log('Jawaban Benar');
            this.score++;
        }
        this.ngOnInit();
    };
    TrainingPage.prototype.submitTraining = function (hasil) {
        var _this = this;
        console.log('Answer : ' + this.answer);
        console.log('Hasil : ' + hasil);
        if (this.answer == hasil) {
            console.log('Jawaban Benar');
            this.score++;
        }
        console.log(this.score);
        // const uid = firebase.auth().currentUser.uid;
        if (this.score >= 1) { //tambah jadi 5
            if (this.score == 1) { //tambah jadi 10
                firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('/users/' + this.localStorageUid).once('value').then(function (snapshot) {
                    var trainingCount = (snapshot.val() && snapshot.val().train_flag);
                    console.log(trainingCount);
                    if (trainingCount < 3) {
                        console.log('MASUK COK !');
                        _this.exp = (snapshot.val() && snapshot.val().xp);
                        _this.level = (snapshot.val() && snapshot.val().level);
                        _this.exp += 10;
                        trainingCount++;
                        if (_this.exp >= 100) {
                            _this.exp -= 100;
                            _this.level++;
                            trainingCount = 0;
                        }
                        firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('users/' + _this.localStorageUid).update({ xp: _this.exp });
                        firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('users/' + _this.localStorageUid).update({ train_flag: trainingCount });
                        firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('users/' + _this.localStorageUid).update({ level: _this.level });
                        _this.presentAlert('Training Done', 'You get 10 experiences');
                    }
                    else {
                        _this.presentAlert('Training Done', 'You get nothing because of training limit ! Please Battle with your friends');
                    }
                });
            }
            else {
                firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('/users/' + this.localStorageUid).once('value').then(function (snapshot) {
                    var trainingCount = (snapshot.val() && snapshot.val().train_flag);
                    if (trainingCount < 3) {
                        _this.exp = (snapshot.val() && snapshot.val().xp);
                        _this.exp += 5;
                        trainingCount++;
                        if (_this.exp >= 100) {
                            _this.exp -= 100;
                            _this.level++;
                            trainingCount = 0;
                        }
                        firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('users/' + _this.localStorageUid).update({ xp: _this.exp });
                        firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('users/' + _this.localStorageUid).update({ train_flag: trainingCount });
                        firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('users/' + _this.localStorageUid).update({ level: _this.level });
                        _this.presentAlert('Training Done', 'You get 5 experiences');
                    }
                    else {
                        _this.presentAlert('Training Done', 'You get nothing because of training limit ! Please battle with your friends');
                    }
                });
            }
        }
        this.router.navigate(['home']);
    };
    TrainingPage.prototype.presentAlert = function (header, message) {
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
    TrainingPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_training_service__WEBPACK_IMPORTED_MODULE_3__["TrainingService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
    ]; };
    TrainingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-training',
            template: __webpack_require__(/*! raw-loader!./training.page.html */ "./node_modules/raw-loader/index.js!./src/app/training/training.page.html"),
            styles: [__webpack_require__(/*! ./training.page.scss */ "./src/app/training/training.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_training_service__WEBPACK_IMPORTED_MODULE_3__["TrainingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], TrainingPage);
    return TrainingPage;
}());



/***/ })

}]);
//# sourceMappingURL=training-training-module-es5.js.map