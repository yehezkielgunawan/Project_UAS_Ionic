(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/history/history.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/history/history.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>history</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor = 'let history of myHistory'>\n      {{ history.player1 }} vs {{ history.player2 }}\n<br> Winner :       {{ history.winner }}\n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/history/history-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/history/history-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function() { return HistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.page */ "./src/app/history/history.page.ts");




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ "./src/app/history/history.module.ts":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-routing.module */ "./src/app/history/history-routing.module.ts");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/history/history.page.ts");







let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"]
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })
], HistoryPageModule);



/***/ }),

/***/ "./src/app/history/history.page.scss":
/*!*******************************************!*\
  !*** ./src/app/history/history.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/history/history.page.ts":
/*!*****************************************!*\
  !*** ./src/app/history/history.page.ts ***!
  \*****************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "./src/app/environment.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user-service.service */ "./src/app/services/user-service.service.ts");





let HistoryPage = class HistoryPage {
    constructor(userService) {
        this.userService = userService;
        this.historyItems = [];
        this.myHistory = [];
        this.roomRef = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('rooms/');
        this.uid = this.userService.getUid();
    }
    ngOnInit() {
        this.roomRef.on('value', resp => {
            this.historyItems = Object(_environment__WEBPACK_IMPORTED_MODULE_3__["snapshotToArray"])(resp);
        });
        this.readMyHistory();
    }
    readMyHistory() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.historyItems.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (element.player1 == this.uid || element.player2 == this.uid) {
                    console.log(element);
                    yield firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('users/' + element.player1).once('value', snapshot => {
                        this.playerOneName = (snapshot.val() && snapshot.val().nickname);
                    });
                    yield firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('users/' + element.player2).once('value', snapshot => {
                        this.playerTwoName = (snapshot.val() && snapshot.val().nickname);
                    });
                    yield firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('users/' + element.winner).once('value', snapshot => {
                        this.winnerName = (snapshot.val() && snapshot.val().nickname);
                    });
                    let data = {
                        player1: this.playerOneName,
                        player2: this.playerTwoName,
                        winner: this.winnerName
                    };
                    console.log(data);
                    console.log('1');
                    this.myHistory.push(data);
                }
            }));
        });
    }
};
HistoryPage.ctorParameters = () => [
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserServiceService"] }
];
HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: __webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/index.js!./src/app/history/history.page.html"),
        styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/history/history.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserServiceService"]])
], HistoryPage);



/***/ })

}]);
//# sourceMappingURL=history-history-module-es2015.js.map