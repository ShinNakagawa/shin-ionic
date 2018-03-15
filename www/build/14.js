webpackJsonp([14],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxPageModule", function() { return BoxPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_flash_card_flash_card__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BoxPageModule = (function () {
    function BoxPageModule() {
    }
    BoxPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__box__["a" /* BoxPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__box__["a" /* BoxPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_flash_card_flash_card__["a" /* FlashCardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__box__["a" /* BoxPage */]
            ]
        })
    ], BoxPageModule);
    return BoxPageModule;
}());

//# sourceMappingURL=box.module.js.map

/***/ })

});
//# sourceMappingURL=14.js.map