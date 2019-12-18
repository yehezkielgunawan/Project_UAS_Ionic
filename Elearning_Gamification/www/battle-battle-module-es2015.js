(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["battle-battle-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/battle/battle.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/battle/battle.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>battle</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-template [ngIf]=\"content == ''\" [ngIfElse]=\"battleon\">\n    <ion-button (click)=\"requestBattle()\"></ion-button>\n  </ng-template>\n  <ng-template #battleon>\n      <p>{{soal[0]}} {{operator}} {{soal[1]}}</p><ion-input [(ngModel)]=\"hasil\" name=\"hasil\"></ion-input>\n     <ng-template [ngIf] = \"questionNumber >= 1\" [ngIfElse]=\"none\"> \n      <!-- ^ Tambah jadi 10 ^ -->\n      <ion-button (click)=\"submitAnswer(hasil)\">Submit</ion-button>\n    </ng-template>\n    <ng-template #none>\n      <ion-button (click)=\"nextPage(hasil)\">Next</ion-button>\n    </ng-template>\n  </ng-template>\n</ion-content>"

/***/ }),

/***/ "./src/app/battle/battle-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/battle/battle-routing.module.ts ***!
  \*************************************************/
/*! exports provided: BattlePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattlePageRoutingModule", function() { return BattlePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _battle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./battle.page */ "./src/app/battle/battle.page.ts");




const routes = [
    {
        path: '',
        component: _battle_page__WEBPACK_IMPORTED_MODULE_3__["BattlePage"]
    }
];
let BattlePageRoutingModule = class BattlePageRoutingModule {
};
BattlePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BattlePageRoutingModule);



/***/ }),

/***/ "./src/app/battle/battle.module.ts":
/*!*****************************************!*\
  !*** ./src/app/battle/battle.module.ts ***!
  \*****************************************/
/*! exports provided: BattlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattlePageModule", function() { return BattlePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _battle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./battle-routing.module */ "./src/app/battle/battle-routing.module.ts");
/* harmony import */ var _battle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./battle.page */ "./src/app/battle/battle.page.ts");







let BattlePageModule = class BattlePageModule {
};
BattlePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _battle_routing_module__WEBPACK_IMPORTED_MODULE_5__["BattlePageRoutingModule"]
        ],
        declarations: [_battle_page__WEBPACK_IMPORTED_MODULE_6__["BattlePage"]]
    })
], BattlePageModule);



/***/ }),

/***/ "./src/app/battle/battle.page.scss":
/*!*****************************************!*\
  !*** ./src/app/battle/battle.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhdHRsZS9iYXR0bGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/battle/battle.page.ts":
/*!***************************************!*\
  !*** ./src/app/battle/battle.page.ts ***!
  \***************************************/
/*! exports provided: BattlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattlePage", function() { return BattlePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _services_training_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/training.service */ "./src/app/services/training.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environment */ "./src/app/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let BattlePage = class BattlePage {
    constructor(alertController, userService, trainingService, router) {
        this.alertController = alertController;
        this.userService = userService;
        this.trainingService = trainingService;
        this.router = router;
        this.soal = [1, 2];
        this.score = 0;
        this.questionNumber = 0;
        this.operatorList = ['+', '-', '*', '/'];
        this.items = [];
        this.userRef = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/');
        this.uid = this.userService.getUid();
        this.content = '';
    }
    ngOnInit() {
        this.userRef.on('value', resp => {
            this.items = Object(_environment__WEBPACK_IMPORTED_MODULE_6__["snapshotToArray"])(resp);
        });
        this.readMessage();
        this.readRespond();
    }
    readMessage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var user = yield firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser;
            if (user) {
                console.log(user);
                return firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + user.uid).on('value', snapshot => {
                    console.log(snapshot.val().messageContent);
                    this.content = (snapshot.val() && snapshot.val().messageContent);
                    if (this.content == 'received') {
                        console.log('ANJING');
                        this.receiveAlert('You got a battle invitation !', 'Do you want accept it?');
                    }
                    else if (this.content == 'sent') {
                        console.log('KUCING');
                        this.presentAlert('Please wait for your friends !', '');
                    }
                });
            }
        });
    }
    readRespond() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var user = yield firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser;
            if (user) {
                return firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + user.uid).once('value', snapshot => {
                    var invited = (snapshot.val() && snapshot.val().invited);
                    firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('rooms/' + invited).once('value', snapshot => {
                        var room = (snapshot.val() && snapshot.val().respond);
                        if (room == 'true') {
                            this.presentAlert('Challange Accepted !', 'Let the battle begin');
                            this.showQuestion();
                        }
                    });
                });
            }
        });
    }
    requestBattle() {
        this.sendAlert('Let\'s battle against your friend !!');
    }
    presentAlert(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    receiveAlert(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: [
                    {
                        text: 'Yes!',
                        handler: data => {
                            this.startBattle();
                        }
                    },
                    {
                        text: 'No!',
                        handler: data => {
                            this.cancelBattle();
                        },
                    },
                ]
            });
            yield alert.present();
        });
    }
    startBattle() {
        var invited, from;
        firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged(user => {
            if (user) {
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + user.uid).on('value', snapshot => {
                    invited = (snapshot.val() && snapshot.val().invited);
                    from = (snapshot.val() && snapshot.val().messageFrom);
                });
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('rooms/' + invited).update({
                    respond: 'true',
                });
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + from).update({
                    messageContent: 'accepted',
                });
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + user.uid).update({
                    messageContent: 'accepted',
                });
            }
        });
    }
    showQuestion() {
        console.log('Score : ' + this.score);
        this.questionNumber++;
        this.soal = this.trainingService.generateQuestionSatuan();
        const operatorPicker = Math.floor(Math.random() * (4 - 0) + 0);
        this.operator = this.operatorList[operatorPicker];
        this.generateAnswer(this.operator);
        return this.soal;
    }
    generateAnswer(operator) {
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
    }
    nextPage(hasil) {
        console.log('Answer : ' + this.answer);
        console.log('Hasil : ' + hasil);
        if (this.answer == hasil) {
            console.log('Jawaban Benar');
            this.score++;
        }
        this.showQuestion();
    }
    submitAnswer(hasil) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + this.uid).update({ messageContent: '' });
            var roomId, finishCount, winner, otherScore, exp, trainingCount, level, player1, player2;
            console.log('Answer : ' + this.answer);
            console.log('Hasil : ' + hasil);
            if (this.answer == hasil) {
                console.log('Jawaban Benar');
                this.score++;
            }
            console.log(this.score);
            yield firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + this.uid).once('value').then(snapshot1 => {
                roomId = (snapshot1.val() && snapshot1.val().invited);
            });
            yield firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('/rooms/' + roomId).once('value').then((snapshot2) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                finishCount = (snapshot2.val() && snapshot2.val().finish);
                finishCount++;
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('rooms/' + roomId).update({ finish: finishCount });
                winner = (snapshot2.val() && snapshot2.val().winner);
                player1 = (snapshot2.val() && snapshot2.val().player1);
                player2 = (snapshot2.val() && snapshot2.val().player2);
                otherScore = (snapshot2.val() && snapshot2.val().score);
                if (winner != this.uid && otherScore < this.score) {
                    firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('rooms/' + roomId).update({ winner: this.uid });
                    firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('rooms/' + roomId).update({ score: this.score });
                }
                if (finishCount >= 2) {
                    yield firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('rooms/' + roomId).once('value').then(snapshot3 => {
                        winner = (snapshot3.val() && snapshot3.val().winner);
                    });
                    yield firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + winner).once('value').then(snapshot4 => {
                        exp = (snapshot4.val() && snapshot4.val().xp);
                        console.log(exp);
                        level = (snapshot4.val() && snapshot4.val().level);
                        trainingCount = (snapshot4.val() && snapshot4.val().train_flag);
                        exp += 15;
                        if (exp >= 100) {
                            exp -= 100;
                            level++;
                            trainingCount = 0;
                        }
                        if (winner) {
                            firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + winner).update({ xp: exp });
                            firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + winner).update({ train_flag: trainingCount });
                            firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + winner).update({ level: level });
                        }
                        firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + player1).update({ messageFrom: '' });
                        firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + player1).update({ invited: '' });
                        firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + player2).update({ messageFrom: '' });
                        firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + player2).update({ invited: '' });
                        firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('rooms/' + roomId).update({ respond: 'finished' });
                    });
                }
            }));
            this.presentAlert('Nice !', 'You just finished the battle. Please wait for your friends !');
            this.router.navigate(['home']);
        });
    }
    cancelBattle() {
        var invited;
        firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged(user => {
            if (user) {
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + user.uid).on('value', snapshot => {
                    invited = (snapshot.val() && snapshot.val().invited);
                });
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('rooms/' + invited).update({
                    respond: 'false',
                });
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('/users/' + this.uid).update({
                    invited: '',
                    messageContent: '',
                    messageFrom: '',
                });
            }
        });
    }
    sendAlert(header) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                inputs: [
                    {
                        name: 'nickname',
                        type: 'text',
                        placeholder: 'Input your friend nickname',
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'OK !',
                        handler: data => {
                            this.battle(data.nickname);
                        },
                    },
                ]
            });
            yield alert.present();
            return alert.inputs;
        });
    }
    battle(nickname) {
        this.items.forEach(element => {
            if (nickname == element.nickname) {
                let masuk = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('rooms/').push();
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('/users/' + element.key).update({
                    invited: masuk.key,
                    messageContent: 'received',
                    messageFrom: this.uid,
                });
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('/users/' + this.uid).update({
                    invited: masuk.key,
                    messageContent: 'sent',
                });
                masuk.set({
                    player1: this.uid,
                    player2: element.key,
                    respond: '',
                    winner: '',
                    finish: 0,
                    score: 0,
                });
            }
        });
    }
};
BattlePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"] },
    { type: _services_training_service__WEBPACK_IMPORTED_MODULE_4__["TrainingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
BattlePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-battle',
        template: __webpack_require__(/*! raw-loader!./battle.page.html */ "./node_modules/raw-loader/index.js!./src/app/battle/battle.page.html"),
        styles: [__webpack_require__(/*! ./battle.page.scss */ "./src/app/battle/battle.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"],
        _services_training_service__WEBPACK_IMPORTED_MODULE_4__["TrainingService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], BattlePage);



/***/ })

}]);
//# sourceMappingURL=battle-battle-module-es2015.js.map