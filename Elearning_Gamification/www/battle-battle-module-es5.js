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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _battle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./battle.page */ "./src/app/battle/battle.page.ts");




var routes = [
    {
        path: '',
        component: _battle_page__WEBPACK_IMPORTED_MODULE_3__["BattlePage"]
    }
];
var BattlePageRoutingModule = /** @class */ (function () {
    function BattlePageRoutingModule() {
    }
    BattlePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BattlePageRoutingModule);
    return BattlePageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _battle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./battle-routing.module */ "./src/app/battle/battle-routing.module.ts");
/* harmony import */ var _battle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./battle.page */ "./src/app/battle/battle.page.ts");







var BattlePageModule = /** @class */ (function () {
    function BattlePageModule() {
    }
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
    return BattlePageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _services_training_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/training.service */ "./src/app/services/training.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environment */ "./src/app/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var BattlePage = /** @class */ (function () {
    function BattlePage(alertController, userService, trainingService, router) {
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
    BattlePage.prototype.ngOnInit = function () {
        var _this = this;
        this.userRef.on('value', function (resp) {
            _this.items = Object(_environment__WEBPACK_IMPORTED_MODULE_6__["snapshotToArray"])(resp);
        });
        this.readMessage();
        this.readRespond();
    };
    BattlePage.prototype.readMessage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            console.log(user);
                            return [2 /*return*/, firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + user.uid).on('value', function (snapshot) {
                                    console.log(snapshot.val().messageContent);
                                    _this.content = (snapshot.val() && snapshot.val().messageContent);
                                    if (_this.content == 'received') {
                                        console.log('ANJING');
                                        _this.receiveAlert('You got a battle invitation !', 'Do you want accept it?');
                                    }
                                    else if (_this.content == 'sent') {
                                        console.log('KUCING');
                                        _this.presentAlert('Please wait for your friends !', '');
                                    }
                                })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BattlePage.prototype.readRespond = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            return [2 /*return*/, firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + user.uid).once('value', function (snapshot) {
                                    var invited = (snapshot.val() && snapshot.val().invited);
                                    firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('rooms/' + invited).once('value', function (snapshot) {
                                        var room = (snapshot.val() && snapshot.val().respond);
                                        if (room == 'true') {
                                            _this.presentAlert('Challange Accepted !', 'Let the battle begin');
                                            _this.showQuestion();
                                        }
                                    });
                                })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BattlePage.prototype.requestBattle = function () {
        this.sendAlert('Let\'s battle against your friend !!');
    };
    BattlePage.prototype.presentAlert = function (header, message) {
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
    BattlePage.prototype.receiveAlert = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: message,
                            buttons: [
                                {
                                    text: 'Yes!',
                                    handler: function (data) {
                                        _this.startBattle();
                                    }
                                },
                                {
                                    text: 'No!',
                                    handler: function (data) {
                                        _this.cancelBattle();
                                    },
                                },
                            ]
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
    BattlePage.prototype.startBattle = function () {
        var invited, from;
        firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + user.uid).on('value', function (snapshot) {
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
    };
    BattlePage.prototype.showQuestion = function () {
        console.log('Score : ' + this.score);
        this.questionNumber++;
        this.soal = this.trainingService.generateQuestionSatuan();
        var operatorPicker = Math.floor(Math.random() * (4 - 0) + 0);
        this.operator = this.operatorList[operatorPicker];
        this.generateAnswer(this.operator);
        return this.soal;
    };
    BattlePage.prototype.generateAnswer = function (operator) {
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
    BattlePage.prototype.nextPage = function (hasil) {
        console.log('Answer : ' + this.answer);
        console.log('Hasil : ' + hasil);
        if (this.answer == hasil) {
            console.log('Jawaban Benar');
            this.score++;
        }
        this.showQuestion();
    };
    BattlePage.prototype.submitAnswer = function (hasil) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var roomId, finishCount, winner, otherScore, exp, trainingCount, level, player1, player2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + this.uid).update({ messageContent: '' });
                        console.log('Answer : ' + this.answer);
                        console.log('Hasil : ' + hasil);
                        if (this.answer == hasil) {
                            console.log('Jawaban Benar');
                            this.score++;
                        }
                        console.log(this.score);
                        return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + this.uid).once('value').then(function (snapshot1) {
                                roomId = (snapshot1.val() && snapshot1.val().invited);
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('/rooms/' + roomId).once('value').then(function (snapshot2) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
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
                                            if (!(finishCount >= 2)) return [3 /*break*/, 3];
                                            return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('rooms/' + roomId).once('value').then(function (snapshot3) {
                                                    winner = (snapshot3.val() && snapshot3.val().winner);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + winner).once('value').then(function (snapshot4) {
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
                                                })];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        this.presentAlert('Nice !', 'You just finished the battle. Please wait for your friends !');
                        this.router.navigate(['home']);
                        return [2 /*return*/];
                }
            });
        });
    };
    BattlePage.prototype.cancelBattle = function () {
        var _this = this;
        var invited;
        firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('users/' + user.uid).on('value', function (snapshot) {
                    invited = (snapshot.val() && snapshot.val().invited);
                });
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('rooms/' + invited).update({
                    respond: 'false',
                });
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('/users/' + _this.uid).update({
                    invited: '',
                    messageContent: '',
                    messageFrom: '',
                });
            }
        });
    };
    BattlePage.prototype.sendAlert = function (header) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
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
                                    handler: function (data) {
                                        _this.battle(data.nickname);
                                    },
                                },
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, alert.inputs];
                }
            });
        });
    };
    BattlePage.prototype.battle = function (nickname) {
        var _this = this;
        this.items.forEach(function (element) {
            if (nickname == element.nickname) {
                var masuk = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('rooms/').push();
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('/users/' + element.key).update({
                    invited: masuk.key,
                    messageContent: 'received',
                    messageFrom: _this.uid,
                });
                firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('/users/' + _this.uid).update({
                    invited: masuk.key,
                    messageContent: 'sent',
                });
                masuk.set({
                    player1: _this.uid,
                    player2: element.key,
                    respond: '',
                    winner: '',
                    finish: 0,
                    score: 0,
                });
            }
        });
    };
    BattlePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"] },
        { type: _services_training_service__WEBPACK_IMPORTED_MODULE_4__["TrainingService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    BattlePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-battle',
            template: __webpack_require__(/*! raw-loader!./battle.page.html */ "./node_modules/raw-loader/index.js!./src/app/battle/battle.page.html"),
            styles: [__webpack_require__(/*! ./battle.page.scss */ "./src/app/battle/battle.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"],
            _services_training_service__WEBPACK_IMPORTED_MODULE_4__["TrainingService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], BattlePage);
    return BattlePage;
}());



/***/ })

}]);
//# sourceMappingURL=battle-battle-module-es5.js.map