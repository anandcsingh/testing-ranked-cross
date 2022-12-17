"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[860],{

/***/ 2860:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ranked": function() { return /* binding */ Ranked; }
/* harmony export */ });
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6400);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

class Ranked extends snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .SmartContract */ .C3 {
    constructor() {
        super(...arguments);
        this.ibjjf = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
        this.itf = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
        this.wkf = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
        this.blackBelt = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
    }
    deploy(args) {
        super.deploy(args);
        this.setPermissions({
            ...snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Permissions["default"] */ .Pl["default"](),
            editState: snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Permissions.proofOrSignature */ .Pl.proofOrSignature(),
        });
        this.blackBelt.set(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey.fromBase58 */ .nh.fromBase58('B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR'));
    }
    initState(instructor, ibjjfState, itfState, wkfState) {
        this.blackBelt.set(instructor);
        this.ibjjf.set(ibjjfState);
        this.itf.set(itfState);
        this.wkf.set(wkfState);
    }
    changeBlackBelt(certifier) {
        const bbState = this.blackBelt.get();
        this.blackBelt.assertEquals(bbState);
        this.blackBelt.set(certifier);
    }
    changeIbjjf(data) {
        const ibjjfState = this.ibjjf.get();
        this.ibjjf.assertEquals(ibjjfState);
        this.ibjjf.set(data);
    }
    certifyIbjjf(certifier, useroldData, userNewData) {
        const ibjjfState = this.ibjjf.get();
        this.ibjjf.assertEquals(ibjjfState);
        // how do I get the user that called the contract?
        this.blackBelt.assertEquals(certifier);
        this.ibjjf.set(userNewData);
    }
    certifyWkf(certifier, useroldData, userNewData) {
        const wkfState = this.wkf.get();
        this.wkf.assertEquals(wkfState);
        // how do I get the user that called the contract?
        this.blackBelt.assertEquals(certifier);
        this.wkf.set(userNewData);
    }
    certifyItf(certifier, useroldData, userNewData) {
        const itffState = this.itf.get();
        this.itf.assertEquals(itffState);
        // how do I get the user that called the contract?
        this.blackBelt.assertEquals(certifier);
        this.itf.set(userNewData);
    }
}
__decorate([
    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], Ranked.prototype, "ibjjf", void 0);
__decorate([
    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], Ranked.prototype, "itf", void 0);
__decorate([
    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], Ranked.prototype, "wkf", void 0);
__decorate([
    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey */ .nh),
    __metadata("design:type", Object)
], Ranked.prototype, "blackBelt", void 0);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey */ .nh,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], Ranked.prototype, "initState", null);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey */ .nh]),
    __metadata("design:returntype", void 0)
], Ranked.prototype, "changeBlackBelt", null);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], Ranked.prototype, "changeIbjjf", null);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey */ .nh,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], Ranked.prototype, "certifyIbjjf", null);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey */ .nh,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], Ranked.prototype, "certifyWkf", null);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey */ .nh,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], Ranked.prototype, "certifyItf", null);
//# sourceMappingURL=Ranked.js.map

/***/ })

}]);