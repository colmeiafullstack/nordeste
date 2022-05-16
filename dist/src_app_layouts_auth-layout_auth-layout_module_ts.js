(self["webpackChunkColmeiaWeb"] = self["webpackChunkColmeiaWeb"] || []).push([["src_app_layouts_auth-layout_auth-layout_module_ts"],{

/***/ 29300:
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutModule": function() { return /* binding */ AuthLayoutModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-layout.routing */ 86662);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _pages_rtl_rtl_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/rtl/rtl.component */ 66583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);









var AuthLayoutModule = /** @class */ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule.ɵfac = function AuthLayoutModule_Factory(t) { return new (t || AuthLayoutModule)(); };
    AuthLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthLayoutModule });
    AuthLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_0__.AuthLayoutRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule
            ]] });
    return AuthLayoutModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthLayoutModule, { declarations: [_pages_rtl_rtl_component__WEBPACK_IMPORTED_MODULE_1__.RtlComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule] }); })();


/***/ }),

/***/ 86662:
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutRoutes": function() { return /* binding */ AuthLayoutRoutes; }
/* harmony export */ });
/* harmony import */ var _pages_rtl_rtl_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/rtl/rtl.component */ 66583);

var AuthLayoutRoutes = [
    { path: 'rtl', component: _pages_rtl_rtl_component__WEBPACK_IMPORTED_MODULE_0__.RtlComponent },
];


/***/ })

}]);
//# sourceMappingURL=src_app_layouts_auth-layout_auth-layout_module_ts.js.map