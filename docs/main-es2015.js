(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");





const routes = [
    {
        path: '',
        redirectTo: '/showcase/blog',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _showcase_showcase_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./showcase/showcase.module */ "./src/app/showcase/showcase.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _newspaper_newspaper_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./newspaper/newspaper.module */ "./src/app/newspaper/newspaper.module.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
            _showcase_showcase_module__WEBPACK_IMPORTED_MODULE_10__["ShowcaseModule"],
            _newspaper_newspaper_module__WEBPACK_IMPORTED_MODULE_12__["NewspaperModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
            // Instrumentation must be imported after importing StoreModule (config is optional)
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
        _showcase_showcase_module__WEBPACK_IMPORTED_MODULE_10__["ShowcaseModule"],
        _newspaper_newspaper_module__WEBPACK_IMPORTED_MODULE_12__["NewspaperModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsRootModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                    _showcase_showcase_module__WEBPACK_IMPORTED_MODULE_10__["ShowcaseModule"],
                    _newspaper_newspaper_module__WEBPACK_IMPORTED_MODULE_12__["NewspaperModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot({}),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([]),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
                    // Instrumentation must be imported after importing StoreModule (config is optional)
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production,
                    }),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/alert-helper.service.ts":
/*!****************************************************!*\
  !*** ./src/app/components/alert-helper.service.ts ***!
  \****************************************************/
/*! exports provided: AlertHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertHelperService", function() { return AlertHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");



class AlertHelperService {
    constructor(snackbar) {
        this.snackbar = snackbar;
    }
    showAlertWithClose(message) {
        this.snackbar.open(message, "close")
            .onAction()
            .subscribe(() => this.snackbar.dismiss());
    }
}
AlertHelperService.ɵfac = function AlertHelperService_Factory(t) { return new (t || AlertHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
AlertHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertHelperService, factory: AlertHelperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sc-toolbar/sc-toolbar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/sc-toolbar/sc-toolbar.component.ts ***!
  \***************************************************************/
/*! exports provided: ScToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScToolbarComponent", function() { return ScToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");



class ScToolbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
ScToolbarComponent.ɵfac = function ScToolbarComponent_Factory(t) { return new (t || ScToolbarComponent)(); };
ScToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScToolbarComponent, selectors: [["sc-toolbar"]], decls: 5, vars: 0, consts: [["color", "primary"], ["src", "assets/codevenkey.png", "alt", "profile picture", 1, "avatar"], [1, "title-text"]], template: function ScToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " CODE VENKEY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n    font-size: medium;\n}\n\n.avatar[_ngcontent-%COMP%] {\n    height: 75%;\n    border-radius: 50%;\n}\n\n.title-text[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    font-family: Constantia, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-weight: bold;\n    font-size: 11pt;\n}\n\n.small-font[_ngcontent-%COMP%] {\n    font-size: 12pt;\n    margin-left: 10px;\n    line-break: strict;\n    font-family: \"ink free\";\n    display: block;\n    margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYy10b29sYmFyL3NjLXRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0VBQXdFO0lBQ3hFLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NjLXRvb2xiYXIvc2MtdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4uYXZhdGFyIHtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50aXRsZS10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LWZhbWlseTogQ29uc3RhbnRpYSwgJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxMXB0O1xufVxuXG4uc21hbGwtZm9udCB7XG4gICAgZm9udC1zaXplOiAxMnB0O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGxpbmUtYnJlYWs6IHN0cmljdDtcbiAgICBmb250LWZhbWlseTogXCJpbmsgZnJlZVwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sc-toolbar',
                templateUrl: './sc-toolbar.component.html',
                styleUrls: ['./sc-toolbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 7, vars: 0, consts: [["href", "#"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This is Knowhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " to get to nearest Gas Station / Petrol Bunk! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] {\n    margin: 15px 15px 15px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIG1hcmdpbjogMTVweCAxNXB4IDE1cHggMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/newspaper/banner-story/banner-story.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/newspaper/banner-story/banner-story.component.ts ***!
  \******************************************************************/
/*! exports provided: BannerStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerStoryComponent", function() { return BannerStoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






function BannerStoryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerStoryComponent_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.imageClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.bannerImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BannerStoryComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.storyContent, " ");
} }
function BannerStoryComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerStoryComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.customAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.customActionTitle);
} }
class BannerStoryComponent {
    constructor() {
        this.showCardRaised = false;
        this.primaryActionTitle = "more...";
        this.shouldUseImage = true;
        this.OnImageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.customActionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.primaryAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngInit() {
        this.bannerImage = this.story.imageId;
    }
    ngOnChanges() {
        this.bannerImage = this.bannerImage || 'assets/js.jpeg';
    }
    imageClicked() {
        this.OnImageClick.emit();
    }
    customAction() {
        this.customActionEvent.emit();
    }
    onPrimaryAction() {
        this.primaryAction.emit(this.story);
    }
}
BannerStoryComponent.ɵfac = function BannerStoryComponent_Factory(t) { return new (t || BannerStoryComponent)(); };
BannerStoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerStoryComponent, selectors: [["app-banner-story-card"]], inputs: { storyContent: "storyContent", story: "story", showCardRaised: "showCardRaised", customActionTitle: "customActionTitle", primaryActionTitle: "primaryActionTitle", shouldUseImage: ["ShouldUseImage", "shouldUseImage"] }, outputs: { OnImageClick: "OnImageClick", customActionEvent: "customActionEvent", primaryAction: "primaryAction" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 7, consts: [[3, "ngClass"], ["class", "storyImage", 4, "ngIf"], [4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-button", "", 3, "click", 4, "ngIf"], [1, "storyImage"], [3, "click"], [3, "src"]], template: function BannerStoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BannerStoryComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BannerStoryComponent_div_8_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerStoryComponent_Template_button_click_10_listener() { return ctx.onPrimaryAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BannerStoryComponent_button_12_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showCardRaised ? "mat-elevation-z2" : "mat-elevation-z0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldUseImage === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.story.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.story.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.story.story);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.primaryActionTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customActionTitle);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["img[_ngcontent-%COMP%] {\n    position: absolute;\n    max-width: 100%;\n    width: auto;\n    height: auto;\n    \n    top: -60px;\n}\n\n.mat-elevation-z2[_ngcontent-%COMP%] {\n    margin : 22% 2% 5% 2%;\n}\n\n\n\nmat-card-title[_ngcontent-%COMP%] {\n        margin: 10px auto auto auto;\n        font-weight: bold;\n        font-size: 10pt;\n        font-family: 'Libre Baskerville', serif;\n        \n        \n        \n    }\n\n\n\ndiv.storyImage[_ngcontent-%COMP%] {\n    height: 123px;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    padding-left: 8px;\n    padding-right: 8px;\n    max-width: 500px;\n    height: auto;\n}\n\nmat-card-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    text-align: justify;\n    white-space: pre-wrap;\n    font-family: 'Libre Baskerville', serif;\n    font-size: 9pt;\n}\n\nmat-card-actions[_ngcontent-%COMP%] {\n    margin-top: -25px;\n    text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3BhcGVyL2Jhbm5lci1zdG9yeS9iYW5uZXItc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBLCtDQUErQzs7QUFDM0M7UUFDSSwyQkFBMkI7UUFDM0IsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZix1Q0FBdUM7UUFDdkMsd0JBQXdCO1FBQ3hCLGtEQUFrRDtRQUNsRCxnQ0FBZ0M7SUFDcEM7O0FBQ0o7Ozs7Ozs7Ozs7R0FVRzs7QUFFSDtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHVDQUF1QztJQUN2QyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL25ld3NwYXBlci9iYW5uZXItc3RvcnkvYmFubmVyLXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC8qIG1hcmdpbi1ib3R0b206IDE1cHg7ICovXG4gICAgdG9wOiAtNjBweDtcbn1cblxuLm1hdC1lbGV2YXRpb24tejIge1xuICAgIG1hcmdpbiA6IDIyJSAyJSA1JSAyJTtcbn1cblxuLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7ICovXG4gICAgbWF0LWNhcmQtdGl0bGUge1xuICAgICAgICBtYXJnaW46IDEwcHggYXV0byBhdXRvIGF1dG87XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcbiAgICAgICAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xuICAgICAgICAvKiBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgKi9cbiAgICAgICAgLyogZm9udC1zaXplOiAyNnB0ICFpbXBvcnRhbnQ7ICovXG4gICAgfVxuLyogfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICBtYXQtY2FyZC10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZwdCAhaW1wb3J0YW50O1xuICAgIH1cbn0gKi9cblxuZGl2LnN0b3J5SW1hZ2Uge1xuICAgIGhlaWdodDogMTIzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbm1hdC1jYXJkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQgZGl2e1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDlwdDtcbn1cblxubWF0LWNhcmQtYWN0aW9ucyB7XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerStoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner-story-card',
                templateUrl: './banner-story.component.html',
                styleUrls: ['./banner-story.component.css']
            }]
    }], null, { storyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], story: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showCardRaised: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customActionTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], primaryActionTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], shouldUseImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["ShouldUseImage"]
        }], OnImageClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], customActionEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], primaryAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/newspaper/compose/compose.component.ts":
/*!********************************************************!*\
  !*** ./src/app/newspaper/compose/compose.component.ts ***!
  \********************************************************/
/*! exports provided: ComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeComponent", function() { return ComposeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_newspaper_ngrx_edition_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/newspaper/ngrx/edition.actions */ "./src/app/newspaper/ngrx/edition.actions.ts");
/* harmony import */ var src_app_newspaper_models_newspaper_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/newspaper/models/newspaper-post */ "./src/app/newspaper/models/newspaper-post.ts");
/* harmony import */ var src_app_newspaper_ngrx_edition_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/newspaper/ngrx/edition.selectors */ "./src/app/newspaper/ngrx/edition.selectors.ts");
/* harmony import */ var src_app_newspaper_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/newspaper/image-picker/image-picker.component */ "./src/app/newspaper/image-picker/image-picker.component.ts");
/* harmony import */ var _ngrx_story_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ngrx/story.actions */ "./src/app/newspaper/ngrx/story.actions.ts");
/* harmony import */ var src_app_newspaper_ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/newspaper/ngrx/story.selectors */ "./src/app/newspaper/ngrx/story.selectors.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _create_newspaper_edition_create_newspaper_edition_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../create-newspaper-edition/create-newspaper-edition.component */ "./src/app/newspaper/create-newspaper-edition/create-newspaper-edition.component.ts");
/* harmony import */ var _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../story-list/story-list.component */ "./src/app/newspaper/story-list/story-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nine_per_page_layout_nine_per_page_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../nine-per-page-layout/nine-per-page-layout.component */ "./src/app/newspaper/nine-per-page-layout/nine-per-page-layout.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _banner_story_banner_story_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../banner-story/banner-story.component */ "./src/app/newspaper/banner-story/banner-story.component.ts");
/* harmony import */ var _story_card_story_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../story-card/story-card.component */ "./src/app/newspaper/story-card/story-card.component.ts");


















const _c0 = ["stepper"];
function ComposeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Select / Create Newspaper Edition");
} }
function ComposeComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Choose top banner story");
} }
const _c1 = function (a0, a1, a2) { return { description: a0, imageId: a1, postLink: a2 }; };
function ComposeComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-banner-story-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("OnImageClick", function ComposeComponent_div_12_Template_app_banner_story_card_OnImageClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.imageClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("story", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c1, ctx_r3.selectedDescription, ctx_r3.selectedBannerImage, ctx_r3.selectedPostLink));
} }
function ComposeComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Pick highlights");
} }
function ComposeComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-story-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("OnImageClick", function ComposeComponent_div_18_Template_app_story_card_OnImageClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.imageClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r5.selectedTitle)("description", ctx_r5.selectedDescription);
} }
function ComposeComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Pick top news bits");
} }
function ComposeComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-story-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("OnImageClick", function ComposeComponent_div_24_Template_app_story_card_OnImageClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.imageClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r7.selectedTitle)("description", ctx_r7.selectedDescription);
} }
function ComposeComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Choose news feed");
} }
function ComposeComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-story-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("OnImageClick", function ComposeComponent_div_30_Template_app_story_card_OnImageClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.imageClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r9.selectedTitle)("description", ctx_r9.selectedDescription);
} }
function ComposeComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Review and confirm");
} }
class ComposeComponent {
    constructor(dialog, store) {
        this.dialog = dialog;
        this.store = store;
        this.availableStories = [];
        this.assignedStories = [];
        this.selectedHighlightStory = new Array();
        this.selectedNewsBits = new Array();
        this.selectedNewsFeed = new Array();
        this.selectedBannerStory = new Array();
        this.CategoryBanner = src_app_newspaper_models_newspaper_post__WEBPACK_IMPORTED_MODULE_2__["StoryCategory"].Banner;
        this.CategoryHighlights = src_app_newspaper_models_newspaper_post__WEBPACK_IMPORTED_MODULE_2__["StoryCategory"].Highlight;
        this.CategoryNewsBits = src_app_newspaper_models_newspaper_post__WEBPACK_IMPORTED_MODULE_2__["StoryCategory"].NewsBit;
        this.CategoryFeed = src_app_newspaper_models_newspaper_post__WEBPACK_IMPORTED_MODULE_2__["StoryCategory"].Feed;
    }
    ngOnInit() {
        this.store
            .select(src_app_newspaper_ngrx_edition_selectors__WEBPACK_IMPORTED_MODULE_3__["allNewspaperEditions"])
            .subscribe((data) => {
            this.editions = data;
        });
        this.store
            .select(src_app_newspaper_ngrx_edition_selectors__WEBPACK_IMPORTED_MODULE_3__["selectedEdition"])
            .subscribe((data) => {
            if (data) {
                this.currentEdition = data;
                this.queryStoreByEdition(this.currentEdition._id);
                this.stepper.next();
            }
        });
        this.store.dispatch(Object(src_app_newspaper_ngrx_edition_actions__WEBPACK_IMPORTED_MODULE_1__["getAllNewspaperEditions"])());
        this.store.dispatch(Object(_ngrx_story_actions__WEBPACK_IMPORTED_MODULE_5__["getAllStories"])());
    }
    queryStoreByEdition(editionId) {
        this.store
            .select(src_app_newspaper_ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_6__["getAssignedStories"], { editionId: editionId })
            .subscribe((data) => {
            this.assignedStories = data;
        });
        this.store
            .select(src_app_newspaper_ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_6__["getStoryByCateory"], { category: src_app_newspaper_models_newspaper_post__WEBPACK_IMPORTED_MODULE_2__["StoryCategory"].Banner, editionId: editionId })
            .subscribe((data) => {
            if (data) {
                if (data) {
                    this.selectedBannerStory = data;
                }
            }
        });
        this.store
            .select(src_app_newspaper_ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_6__["getStoryByCateory"], { category: src_app_newspaper_models_newspaper_post__WEBPACK_IMPORTED_MODULE_2__["StoryCategory"].Highlight, editionId: editionId })
            .subscribe((data) => {
            if (data) {
                this.selectedHighlightStory = data;
            }
        });
        this.store
            .select(src_app_newspaper_ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_6__["getStoryByCateory"], { category: src_app_newspaper_models_newspaper_post__WEBPACK_IMPORTED_MODULE_2__["StoryCategory"].Feed, editionId: editionId })
            .subscribe((data) => {
            if (data) {
                this.selectedNewsFeed = data;
            }
        });
        this.store
            .select(src_app_newspaper_ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_6__["getStoryByCateory"], { category: src_app_newspaper_models_newspaper_post__WEBPACK_IMPORTED_MODULE_2__["StoryCategory"].NewsBit, editionId: editionId })
            .subscribe((data) => {
            if (data) {
                this.selectedNewsBits = data;
            }
        });
        this.store
            // .select(getUnassignedToCurrentEdition, {editionId} )
            .select(src_app_newspaper_ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_6__["getUnassignedStories"], { editionId })
            .subscribe((data) => {
            this.availableStories = data;
        });
    }
    onSelectTopBanner(post) {
        this.selectedBannerStory.push({
            _id: post._id,
            title: post.title,
            imageId: post.imageId,
            description: post.description,
            story: post.story,
            linkToPost: post.linkToPost,
            user: post.user,
        });
        this.saveSelected(this.CategoryBanner, post._id);
        // this.showPreview(post);
    }
    showPreview(post) {
        this.selectedStoryId = post._id;
        this.selectedTitle = post.title;
        this.selectedBannerImage = post.imageId;
        this.selectedDescription = post.description;
        this.selectedPostLink = post.linkToPost;
    }
    clearPreview() {
        this.selectedTitle = '';
        this.selectedBannerImage = '';
        this.selectedDescription = '';
        this.selectedPostLink = '';
    }
    onSelectTopHighlight(post) {
        this.selectedHighlightStory.push({
            _id: post._id,
            title: post.title,
            imageId: post.imageId,
            description: post.description,
            story: post.story,
            linkToPost: post.linkToPost,
            user: post.user,
        });
        this.saveSelected(this.CategoryHighlights, post._id);
    }
    submitEdition() {
        this.store.dispatch(Object(_ngrx_story_actions__WEBPACK_IMPORTED_MODULE_5__["updateStoriesForEdition"])({
            posts: this.assignedStories.filter(i => i.edition._id === this.currentEdition._id)
        }));
    }
    onSelectNewsBits(post) {
        this.selectedNewsBits.push({
            _id: post._id,
            title: post.title,
            imageId: post.imageId,
            description: post.description,
            story: post.story,
            linkToPost: post.linkToPost,
            user: post.user,
        });
        this.saveSelected(this.CategoryNewsBits, post._id);
    }
    onSelectNewsFeed(post) {
        this.selectedNewsFeed.push({
            _id: post._id,
            title: post.title,
            imageId: post.imageId,
            description: post.description,
            story: post.story,
            linkToPost: post.linkToPost,
            user: post.user,
        });
        this.saveSelected(this.CategoryFeed, post._id);
    }
    handleRemovedPost(post) {
        this.store.dispatch(Object(_ngrx_story_actions__WEBPACK_IMPORTED_MODULE_5__["categorizeStories"])({
            newCategory: src_app_newspaper_models_newspaper_post__WEBPACK_IMPORTED_MODULE_2__["StoryCategory"].None,
            storyIds: [post._id]
        }));
    }
    imageClicked() {
        let dialogRef = this.dialog.open(src_app_newspaper_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_4__["ImagePickerComponent"], {
            height: '100%',
            width: '100%'
        });
        dialogRef
            .afterClosed()
            .subscribe(data => {
            this.selectedBannerImage = data;
            let story = this.selectedBannerStory.find(story => story._id === this.selectedStoryId);
            let newStory;
            if (story) {
                newStory = Object.assign({}, story);
                newStory.imageId = this.selectedBannerImage;
                this.store.dispatch(Object(_ngrx_story_actions__WEBPACK_IMPORTED_MODULE_5__["updateStory"])(newStory));
            }
        });
    }
    saveSelected(category, selectedStoryId = this.selectedStoryId) {
        // console.log("button selected", this.selectedStoryId);
        this.store.dispatch(Object(_ngrx_story_actions__WEBPACK_IMPORTED_MODULE_5__["categorizeStories"])({
            newCategory: category,
            storyIds: [selectedStoryId],
            edition: this.currentEdition
        }));
    }
}
ComposeComponent.ɵfac = function ComposeComponent_Factory(t) { return new (t || ComposeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"])); };
ComposeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComposeComponent, selectors: [["app-compose"]], viewQuery: function ComposeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, decls: 38, vars: 13, consts: [[3, "selectionChange"], ["stepper", ""], ["matStepLabel", ""], [1, "row"], [1, "col-8", 3, "editions"], ["Title", "Available Stories", 1, "col-3", 3, "Stories", "SelectedPost"], ["IsRemoveEnabled", "true", "Title", "Selected Stories", 1, "col-3", 3, "Stories", "RemovedPost", "SelectedPost"], [1, "col-6"], [4, "ngIf"], ["class", "col-6", 4, "ngIf"], ["Title", "Available Stories", 1, "col-3", 3, "Stories", "RemovedPost", "SelectedPost"], ["mat-button", "", 3, "click"], [3, "story", "OnImageClick"], [3, "title", "description", "OnImageClick"], ["ShouldUseImage", "false", 3, "title", "description", "OnImageClick"]], template: function ComposeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-horizontal-stepper", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ComposeComponent_Template_mat_horizontal_stepper_selectionChange_0_listener() { return ctx.clearPreview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ComposeComponent_ng_template_3_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-create-newspaper-edition", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ComposeComponent_ng_template_7_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-story-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("SelectedPost", function ComposeComponent_Template_app_story_list_SelectedPost_9_listener($event) { return ctx.onSelectTopBanner($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-story-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("RemovedPost", function ComposeComponent_Template_app_story_list_RemovedPost_10_listener($event) { return ctx.handleRemovedPost($event); })("SelectedPost", function ComposeComponent_Template_app_story_list_SelectedPost_10_listener($event) { return ctx.showPreview($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ComposeComponent_div_12_Template, 2, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ComposeComponent_ng_template_14_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-story-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("SelectedPost", function ComposeComponent_Template_app_story_list_SelectedPost_16_listener($event) { return ctx.onSelectTopHighlight($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-story-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("RemovedPost", function ComposeComponent_Template_app_story_list_RemovedPost_17_listener($event) { return ctx.handleRemovedPost($event); })("SelectedPost", function ComposeComponent_Template_app_story_list_SelectedPost_17_listener($event) { return ctx.showPreview($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ComposeComponent_div_18_Template, 2, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ComposeComponent_ng_template_20_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-story-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("RemovedPost", function ComposeComponent_Template_app_story_list_RemovedPost_22_listener($event) { return ctx.handleRemovedPost($event); })("SelectedPost", function ComposeComponent_Template_app_story_list_SelectedPost_22_listener($event) { return ctx.onSelectNewsBits($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-story-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("RemovedPost", function ComposeComponent_Template_app_story_list_RemovedPost_23_listener($event) { return ctx.handleRemovedPost($event); })("SelectedPost", function ComposeComponent_Template_app_story_list_SelectedPost_23_listener($event) { return ctx.showPreview($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ComposeComponent_div_24_Template, 2, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ComposeComponent_ng_template_26_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-story-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("SelectedPost", function ComposeComponent_Template_app_story_list_SelectedPost_28_listener($event) { return ctx.onSelectNewsFeed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-story-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("RemovedPost", function ComposeComponent_Template_app_story_list_RemovedPost_29_listener($event) { return ctx.handleRemovedPost($event); })("SelectedPost", function ComposeComponent_Template_app_story_list_SelectedPost_29_listener($event) { return ctx.showPreview($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ComposeComponent_div_30_Template, 2, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ComposeComponent_ng_template_32_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-nine-per-page-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Review and confirm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComposeComponent_Template_button_click_36_listener() { return ctx.submitEdition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Go");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editions", ctx.editions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Stories", ctx.availableStories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Stories", ctx.selectedBannerStory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Stories", ctx.availableStories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Stories", ctx.selectedHighlightStory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Stories", ctx.availableStories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Stories", ctx.selectedNewsBits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Stories", ctx.availableStories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Stories", ctx.selectedNewsFeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTitle);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepLabel"], _create_newspaper_edition_create_newspaper_edition_component__WEBPACK_IMPORTED_MODULE_10__["CreateNewspaperEditionComponent"], _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_11__["StoryListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _nine_per_page_layout_nine_per_page_layout_component__WEBPACK_IMPORTED_MODULE_13__["NewspaperMainComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _banner_story_banner_story_component__WEBPACK_IMPORTED_MODULE_15__["BannerStoryComponent"], _story_card_story_card_component__WEBPACK_IMPORTED_MODULE_16__["StoryCardComponent"]], styles: ["strong[_ngcontent-%COMP%] {\n    display: block;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 10px;\n    margin-top: 20px;\n    max-width: 500px;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n    margin-left: -18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3BhcGVyL2NvbXBvc2UvY29tcG9zZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL25ld3NwYXBlci9jb21wb3NlL2NvbXBvc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInN0cm9uZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbm1hdC1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxubWF0LWNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMThweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComposeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-compose',
                templateUrl: './compose.component.html',
                styleUrls: ['./compose.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["stepper"]
        }] }); })();


/***/ }),

/***/ "./src/app/newspaper/create-newspaper-edition/create-newspaper-edition.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/newspaper/create-newspaper-edition/create-newspaper-edition.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CreateNewspaperEditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewspaperEditionComponent", function() { return CreateNewspaperEditionComponent; });
/* harmony import */ var _ngrx_edition_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngrx/edition.actions */ "./src/app/newspaper/ngrx/edition.actions.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_edition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/edition.service */ "./src/app/newspaper/services/edition.service.ts");
/* harmony import */ var src_app_components_alert_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/alert-helper.service */ "./src/app/components/alert-helper.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");














function CreateNewspaperEditionComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const edition_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", edition_r3._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", edition_r3.title, " ");
} }
function CreateNewspaperEditionComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.selectedEdition.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.selectedEdition.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 4, ctx_r1.selectedEdition.dateCreated, "dd-MMM-yyyy hh:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.selectedEdition.isPublished ? "Published" : "Draft");
} }
function CreateNewspaperEditionComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateNewspaperEditionComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.continueWithEdition(ctx_r4.selectedEdition); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CreateNewspaperEditionComponent {
    constructor(formBuilder, editionService, alertHelper, store) {
        this.formBuilder = formBuilder;
        this.editionService = editionService;
        this.alertHelper = alertHelper;
        this.store = store;
    }
    ngOnInit() {
        this.createNpeFormGroup = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    get title() {
        return this.createNpeFormGroup.get('title');
    }
    get description() {
        return this.createNpeFormGroup.get('description');
    }
    get dateCreated() {
        return this.createNpeFormGroup.get('dateCreated');
    }
    get isPublished() {
        return this.createNpeFormGroup.get('isPublished');
    }
    showSelectedEdition($event) {
        this.selectedEdition = this.editionsList.find(i => i._id === $event.value);
    }
    continueWithEdition(selectedEdition) {
        this.store.dispatch(_ngrx_edition_actions__WEBPACK_IMPORTED_MODULE_0__["setEdition"](selectedEdition));
    }
    submit() {
        if (this.createNpeFormGroup.valid) {
            this.editionService.create({
                title: this.title.value,
                description: this.description.value,
                dateCreated: new Date(),
                isPublished: false
            }).subscribe(() => {
                this.alertHelper.showAlertWithClose("Created a new edition");
            });
        }
        else {
            this.alertHelper.showAlertWithClose("Please provide correct values for the post");
        }
    }
    cancel() {
    }
}
CreateNewspaperEditionComponent.ɵfac = function CreateNewspaperEditionComponent_Factory(t) { return new (t || CreateNewspaperEditionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_edition_service__WEBPACK_IMPORTED_MODULE_3__["EditionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_components_alert_helper_service__WEBPACK_IMPORTED_MODULE_4__["AlertHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
CreateNewspaperEditionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateNewspaperEditionComponent, selectors: [["app-create-newspaper-edition"]], inputs: { editionsList: ["editions", "editionsList"] }, decls: 36, vars: 4, consts: [[1, "row", 3, "formGroup"], [1, "col-sm-1", "col-md-1"], [1, "col-sm-12", "col-md-4", "right-border-line"], ["appearance", "fill"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "edition-details", 4, "ngIf"], ["type", "button", "mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "col-xs-12", "col-sm-10", "col-md-6"], [1, "row"], ["id", "title", "name", "title", 1, "col-12"], ["type", "text", "formControlName", "title", "matInput", ""], ["id", "description", "name", "description", 1, "col-12"], ["matInput", "", "formControlName", "description", "rows", "3"], [1, "row", "actions-row"], ["type", "submit", "mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"], [1, "col-sm-1"], [3, "value"], [1, "edition-details"], ["type", "button", "mat-button", "", "color", "primary", 3, "click"]], template: function CreateNewspaperEditionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Select an existing edition");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Select Newspaper Editions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function CreateNewspaperEditionComponent_Template_mat_select_selectionChange_8_listener($event) { return ctx.showSelectedEdition($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CreateNewspaperEditionComponent_mat_option_9_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CreateNewspaperEditionComponent_div_10_Template, 10, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CreateNewspaperEditionComponent_button_11_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Create a new edition");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Provide a title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Describe the news edition ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateNewspaperEditionComponent_Template_button_click_31_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateNewspaperEditionComponent_Template_button_click_33_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.createNpeFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.editionsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedEdition);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedEdition);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["form[_ngcontent-%COMP%] {\n    margin-top: 20px;\n}\n\n.right-border-line[_ngcontent-%COMP%] {\n    border-width: 0px 1px 0px 0px;\n    border-style: solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3BhcGVyL2NyZWF0ZS1uZXdzcGFwZXItZWRpdGlvbi9jcmVhdGUtbmV3c3BhcGVyLWVkaXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9uZXdzcGFwZXIvY3JlYXRlLW5ld3NwYXBlci1lZGl0aW9uL2NyZWF0ZS1uZXdzcGFwZXItZWRpdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnJpZ2h0LWJvcmRlci1saW5lIHtcbiAgICBib3JkZXItd2lkdGg6IDBweCAxcHggMHB4IDBweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateNewspaperEditionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-create-newspaper-edition',
                templateUrl: './create-newspaper-edition.component.html',
                styleUrls: ['./create-newspaper-edition.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_edition_service__WEBPACK_IMPORTED_MODULE_3__["EditionService"] }, { type: src_app_components_alert_helper_service__WEBPACK_IMPORTED_MODULE_4__["AlertHelperService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, { editionsList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['editions']
        }] }); })();


/***/ }),

/***/ "./src/app/newspaper/create-post/create-post.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/newspaper/create-post/create-post.component.ts ***!
  \****************************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_newspaper_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/newspaper/services/post.service */ "./src/app/newspaper/services/post.service.ts");
/* harmony import */ var src_app_components_alert_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/alert-helper.service */ "./src/app/components/alert-helper.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









class CreatePostComponent {
    constructor(postService, formBuilder, alertHelper) {
        this.postService = postService;
        this.formBuilder = formBuilder;
        this.alertHelper = alertHelper;
        this.createPostFormGroup = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            story: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bannerImage: [''],
            linkToPost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/https?:\/\/(.*)/gi)]]
        });
    }
    ngOnInit() {
    }
    get title() {
        return this.createPostFormGroup.get('title');
    }
    get description() {
        return this.createPostFormGroup.get('description');
    }
    get story() {
        return this.createPostFormGroup.get('story');
    }
    get bannerImage() {
        return this.createPostFormGroup.get('bannerImage');
    }
    get linkToPostValue() {
        let value = this.createPostFormGroup.get('linkToPost').value;
        return value;
    }
    get author() {
        return {
            fullname: 'Vencki',
            twitterHandle: '@keertikotaru',
            userImageId: 'ny.jpg'
        };
    }
    submit() {
        var _a;
        if (this.createPostFormGroup.valid) {
            this.postService.create({
                title: this.title.value,
                description: this.description.value,
                story: this.story.value,
                imageId: (_a = this.bannerImage) === null || _a === void 0 ? void 0 : _a.value,
                linkToPost: this.linkToPostValue,
                user: this.author
            }).subscribe((result) => {
                if (result['_id']) {
                    this.reset();
                    this.alertHelper.showAlertWithClose("Thank you for your contribution.");
                }
                else {
                    this.alertHelper.showAlertWithClose("Something wrong! Post not created");
                }
            }, error => this.alertHelper.showAlertWithClose(`Something wrong! ${JSON.stringify(error)}`));
        }
        else {
            this.alertHelper.showAlertWithClose("Please provide correct values for the post");
        }
    }
    cancel() {
        this.reset();
    }
    reset() {
        this.createPostFormGroup.reset();
        Object.keys(this.createPostFormGroup.controls).forEach(key => {
            this.createPostFormGroup.controls[key].setErrors(null);
        });
    }
}
CreatePostComponent.ɵfac = function CreatePostComponent_Factory(t) { return new (t || CreatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_newspaper_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_alert_helper_service__WEBPACK_IMPORTED_MODULE_3__["AlertHelperService"])); };
CreatePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatePostComponent, selectors: [["app-create-post"]], viewQuery: function CreatePostComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.frm = _t.first);
    } }, decls: 37, vars: 1, consts: [[1, "row", 3, "formGroup"], [1, "col-sm-1", "col-md-3"], [1, "col-xs-12", "col-sm-10", "col-md-6"], [1, "row"], ["id", "title", "name", "title", 1, "col-12"], ["type", "text", "formControlName", "title", "matInput", ""], ["id", "description", "name", "description", 1, "col-12"], ["matInput", "", "formControlName", "description", "rows", "4"], ["matInput", "", "formControlName", "story", "rows", "10"], ["id", "url", "name", "url", 1, "col-12"], ["type", "url", "formControlName", "linkToPost", "matInput", ""], [1, "row", "actions-row"], ["type", "submit", "mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"]], template: function CreatePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contribute a Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Provide a title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Short description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Provide a short description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Detailed Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Tell us your story! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Link to the post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePostComponent_Template_button_click_32_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePostComponent_Template_button_click_34_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createPostFormGroup);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    width: 160px;\n    text-align: center;\n}\n\nimg[_ngcontent-%COMP%] {\n    width: 160px;\n    margin: 1px 20px 1px 20px;\n    height: auto;\n}\n\ndiv.image-list[_ngcontent-%COMP%] {\n    max-height: 200px;\n    display: block;\n    overflow-y: scroll;\n    margin: 20px 1px 20px 1px;\n}\n\ndiv.image-item[_ngcontent-%COMP%] {\n    min-height: 100px;\n}\n\n.space-after[_ngcontent-%COMP%] {\n    margin-right: 10px;\n}\n\n.actions-row[_ngcontent-%COMP%] {\n    margin-top: 10px;\n}\n\nform[_ngcontent-%COMP%] {\n    padding: 20px 5px 1px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3BhcGVyL2NyZWF0ZS1wb3N0L2NyZWF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNFQUFzRTtJQUN0RSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvbmV3c3BhcGVyL2NyZWF0ZS1wb3N0L2NyZWF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgbWFyZ2luOiAxcHggMjBweCAxcHggMjBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbmRpdi5pbWFnZS1saXN0IHtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgbWFyZ2luOiAyMHB4IDFweCAyMHB4IDFweDtcbn1cblxuZGl2LmltYWdlLWl0ZW0ge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuXG4uc3BhY2UtYWZ0ZXIge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmFjdGlvbnMtcm93IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5mb3JtIHtcbiAgICBwYWRkaW5nOiAyMHB4IDVweCAxcHggMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-post',
                templateUrl: './create-post.component.html',
                styleUrls: ['./create-post.component.css']
            }]
    }], function () { return [{ type: src_app_newspaper_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_components_alert_helper_service__WEBPACK_IMPORTED_MODULE_3__["AlertHelperService"] }]; }, { frm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]]
        }] }); })();


/***/ }),

/***/ "./src/app/newspaper/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/newspaper/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_edition_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngrx/edition.actions */ "./src/app/newspaper/ngrx/edition.actions.ts");
/* harmony import */ var src_app_newspaper_ngrx_edition_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/newspaper/ngrx/edition.selectors */ "./src/app/newspaper/ngrx/edition.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _newspaper_edition_list_newspaper_edition_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../newspaper-edition-list/newspaper-edition-list.component */ "./src/app/newspaper/newspaper-edition-list/newspaper-edition-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










function HomeComponent_strong_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.selectedEditionDateCreated, "dd-MMM-yyyy"), "");
} }
function HomeComponent_strong_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.selectedEditionDateCreated, "dd-MMM-yyyy"), "");
} }
class HomeComponent {
    constructor(store) {
        this.store = store;
        this.selectedEditionTitle = '';
        this.sitePrimaryMessage = "Be up to date with JavaScript news and updates!";
        this.siteSecondaryMessage = "In the fast moving technology space, it's important to know the trends. At the same time, it's not easy. It consumes energy and time. JavaScript Times makes life easy by providing regular updates in a quick summary.";
    }
    ngOnInit() {
        this.store.dispatch(Object(_ngrx_edition_actions__WEBPACK_IMPORTED_MODULE_1__["getAllNewspaperEditions"])());
        this.store
            .select(src_app_newspaper_ngrx_edition_selectors__WEBPACK_IMPORTED_MODULE_2__["publishedNewspaperEditions"])
            .subscribe((data) => {
            this.editions = data;
            if (data && data[0]) {
                this.selectedEditionTitle = data[0].title;
                this.selectedEditionDateCreated = data[0].dateCreated;
                // this.store.dispatch(actions.setEdition(data[0]));
            }
        });
        this.store
            .select(src_app_newspaper_ngrx_edition_selectors__WEBPACK_IMPORTED_MODULE_2__["selectedEdition"])
            .subscribe((selectedEdition) => {
            if (selectedEdition) {
                this.selectedEditionTitle = selectedEdition.title;
                this.selectedEditionDateCreated = selectedEdition.dateCreated;
                // this.store.dispatch(actions.setEdition(selectedEdition));
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 32, vars: 8, consts: [[1, "d-none", "d-md-block", "md-and-above"], [1, "fixed-header"], [1, "row"], [1, "col-3"], [1, "col-2", "center-align"], ["src", "assets/jstimes2.png", "alt", ""], [1, "col-7"], [1, "col-8", 3, "editions"], [4, "ngIf"], [1, "empty-fill-toolbar-space"], [1, "row", "site-message"], [1, "col-2"], [1, "site-message", "col-8"], [1, "fixed-header", "d-xs-block", "d-md-none"], [1, "d-xs-block", "d-md-none", "sm-and-below"], [1, "hack"], [1, "root-node"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-newspaper-edition-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_strong_8_Template, 3, 4, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-toolbar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-newspaper-edition-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_strong_24_Template, 3, 4, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editions", ctx.editions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedEditionTitle && ctx.selectedEditionDateCreated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.sitePrimaryMessage, " ", ctx.siteSecondaryMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editions", ctx.editions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedEditionTitle && ctx.selectedEditionDateCreated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.sitePrimaryMessage, " ", ctx.siteSecondaryMessage, " ");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _newspaper_edition_list_newspaper_edition_list_component__WEBPACK_IMPORTED_MODULE_5__["NewspaperEditionListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["body[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n}\n\n.site-message[_ngcontent-%COMP%] {\n    font-family: 'Libre Baskerville', serif;\n    font-size: 9pt;\n    font-weight: normal;\n    text-align: center;\n}\n\n.site-message[_ngcontent-%COMP%]    > hr[_ngcontent-%COMP%] {\n    margin-left: 20%;\n    margin-right: 20%;\n}\n\n.sm-and-below[_ngcontent-%COMP%] {\n    height: auto;\n    margin-top: 56px;\n}\n\n.sm-and-below[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    font-family: 'Libre Baskerville', serif;\n    font-size: 8pt;\n    font-weight: normal;\n    text-align: justify;\n}\n\nimg[_ngcontent-%COMP%]{\n    height: 70%;\n}\n\ndiv.intermediate.md-and-above[_ngcontent-%COMP%] {\n    margin-bottom: 80px;\n}\n\ndiv.intermediate.sm-and-below[_ngcontent-%COMP%] {\n    margin-bottom: 48px;\n}\n\n.md-and-above[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 42px;\n}\n\n\n\nmat-toolbar-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-family: 'Libre Baskerville', serif;\n    font-size: 24pt;\n    text-align: center;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{\n    font-family: 'Libre Baskerville', serif;\n    font-size: 9pt;\n    text-align: center;\n    \n}\n\n.empty-fill-toolbar-space[_ngcontent-%COMP%] {\n    height: 64px;\n}\n\n\n\n.second-row[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    \n}\n\n.center-align[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.root-node[_ngcontent-%COMP%]{\n    \n    position: relative;\n}\n\n.hack[_ngcontent-%COMP%] {\n    margin-top: -20%;\n}\n\n.sm-and-below[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    margin: 10px 8px 10px 8px;\n}\n\n.fixed-header[_ngcontent-%COMP%] {\n    top: 0;\n    border-bottom: lightgrey;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    \n    position: fixed;\n    width: 100%;\n    z-index:999;\n}\n\napp-newspaper-edition-list[_ngcontent-%COMP%] {\n    max-width: 160px;\n    font-size: 9pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3BhcGVyL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksdUNBQXVDO0lBQ3ZDLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOzs7Ozs7R0FNRzs7QUFFSDtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksTUFBTTtJQUNOLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbmV3c3BhcGVyL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uc2l0ZS1tZXNzYWdlIHtcbiAgICBmb250LWZhbWlseTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiA5cHQ7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaXRlLW1lc3NhZ2UgPiBociB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcbn1cblxuLnNtLWFuZC1iZWxvdyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG59XG5cbi5zbS1hbmQtYmVsb3cgbWF0LWNhcmQtY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogOHB0O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuaW1ne1xuICAgIGhlaWdodDogNzAlO1xufVxuXG5kaXYuaW50ZXJtZWRpYXRlLm1kLWFuZC1hYm92ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuZGl2LmludGVybWVkaWF0ZS5zbS1hbmQtYmVsb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59XG5cbi5tZC1hbmQtYWJvdmUgaW1nIHtcbiAgICBoZWlnaHQ6IDQycHg7XG59XG5cbi8qIG1hdC10b29sYmFyLXJvdyB7XG4gICAgaGVpZ2h0OiAyNXB4O1xufSAqL1xuXG5tYXQtdG9vbGJhci1yb3cgaDF7XG4gICAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjRwdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC10b29sYmFyLXJvdyBzdHJvbmd7XG4gICAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogOXB0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAtMTBweDsgKi9cbn1cblxuLmVtcHR5LWZpbGwtdG9vbGJhci1zcGFjZSB7XG4gICAgaGVpZ2h0OiA2NHB4O1xufVxuXG4vKiAuc2Vjb25kLXJvdy1tZC1zY3JlZW4ge1xuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDAuNXB4O1xuICAgIGJvcmRlci10b3AtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBwYWRkaW5nLXRvcDogMSU7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn0gKi9cblxuLnNlY29uZC1yb3cge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAvKiBmb250LXN0eWxlOiBpdGFsaWM7ICovXG59XG5cbi5jZW50ZXItYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJvb3Qtbm9kZXtcbiAgICAvKiBtYXJnaW46IGluaGVyaXQgMTBweCBhdXRvIDEwcHg7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGFjayB7XG4gICAgbWFyZ2luLXRvcDogLTIwJTtcbn1cblxuLnNtLWFuZC1iZWxvdyBtYXQtY2FyZCB7XG4gICAgbWFyZ2luOiAxMHB4IDhweCAxMHB4IDhweDtcbn1cblxuLmZpeGVkLWhlYWRlciB7XG4gICAgdG9wOiAwO1xuICAgIGJvcmRlci1ib3R0b206IGxpZ2h0Z3JleTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6OTk5O1xufVxuXG5hcHAtbmV3c3BhcGVyLWVkaXRpb24tbGlzdCB7XG4gICAgbWF4LXdpZHRoOiAxNjBweDtcbiAgICBmb250LXNpemU6IDlwdDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/newspaper/image-picker/image-picker.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/newspaper/image-picker/image-picker.component.ts ***!
  \******************************************************************/
/*! exports provided: ImagePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePickerComponent", function() { return ImagePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_newspaper_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/newspaper/services/post.service */ "./src/app/newspaper/services/post.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ImagePickerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagePickerComponent_div_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const img_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onImageClick(img_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ImagePickerComponent {
    constructor(postService, dialogRef) {
        this.postService = postService;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        this.postService
            .getBanners()
            .subscribe((result) => {
            this.images = result;
        });
    }
    onImageClick(img) {
        this.dialogRef.close(img);
    }
    close() {
        this.dialogRef.close();
    }
}
ImagePickerComponent.ɵfac = function ImagePickerComponent_Factory(t) { return new (t || ImagePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_newspaper_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
ImagePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImagePickerComponent, selectors: [["app-image-picker"]], decls: 7, vars: 1, consts: [[1, "row"], ["mat-dialog-title", "", 1, "col-10"], [1, "col-2", 3, "click"], [1, "row", "center-aligned"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "col-4"], [3, "click"], [3, "src"]], template: function ImagePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagePickerComponent_Template_mat_icon_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ImagePickerComponent_div_6_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["img[_ngcontent-%COMP%] {\n    width: 240px;\n    height: auto;\n}\n\ndiv.center-aligned[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n    text-align: right;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3BhcGVyL2ltYWdlLXBpY2tlci9pbWFnZS1waWNrZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9uZXdzcGFwZXIvaW1hZ2UtcGlja2VyL2ltYWdlLXBpY2tlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG5kaXYuY2VudGVyLWFsaWduZWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWljb24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-picker',
                templateUrl: './image-picker.component.html',
                styleUrls: ['./image-picker.component.css']
            }]
    }], function () { return [{ type: src_app_newspaper_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/newspaper/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/newspaper/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 0, consts: [["formGroup", "", 1, "row"], [1, "col-4"], [1, "row"], [1, "col-12"], ["matInput", "", "type", "email"], ["matInput", "", "type", "password"], ["mat-button", "", "color", "primary"], ["mat-button", ""]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Register to Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    width: 160px;\n    margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3BhcGVyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNFQUFzRTtJQUN0RSxZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL25ld3NwYXBlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBtYXJnaW46IDE1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/newspaper/main/main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/newspaper/main/main.component.ts ***!
  \**************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_story_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngrx/story.actions */ "./src/app/newspaper/ngrx/story.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _nine_per_page_layout_nine_per_page_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nine-per-page-layout/nine-per-page-layout.component */ "./src/app/newspaper/nine-per-page-layout/nine-per-page-layout.component.ts");
/* harmony import */ var _single_column_layout_single_column_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../single-column-layout/single-column-layout.component */ "./src/app/newspaper/single-column-layout/single-column-layout.component.ts");






class MainComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(Object(_ngrx_story_actions__WEBPACK_IMPORTED_MODULE_1__["getAllStories"])());
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 2, vars: 0, consts: [[1, "d-none", "d-md-block"], [1, "d-xs-block", "d-md-none"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nine-per-page-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-single-column-layout", 1);
    } }, directives: [_nine_per_page_layout_nine_per_page_layout_component__WEBPACK_IMPORTED_MODULE_3__["NewspaperMainComponent"], _single_column_layout_single_column_layout_component__WEBPACK_IMPORTED_MODULE_4__["SingleColumnLayoutComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3NwYXBlci9tYWluL21haW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/newspaper/models/editions.ts":
/*!**********************************************!*\
  !*** ./src/app/newspaper/models/editions.ts ***!
  \**********************************************/
/*! exports provided: NewspaperEdition, NewspaperEditions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspaperEdition", function() { return NewspaperEdition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspaperEditions", function() { return NewspaperEditions; });
class NewspaperEdition {
}
class NewspaperEditions {
}


/***/ }),

/***/ "./src/app/newspaper/models/newspaper-post.ts":
/*!****************************************************!*\
  !*** ./src/app/newspaper/models/newspaper-post.ts ***!
  \****************************************************/
/*! exports provided: User, StoryCategory, NewspaperPost, StoryCategoryMap, NewspaperPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryCategory", function() { return StoryCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspaperPost", function() { return NewspaperPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryCategoryMap", function() { return StoryCategoryMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspaperPosts", function() { return NewspaperPosts; });
class User {
}
var StoryCategory;
(function (StoryCategory) {
    StoryCategory[StoryCategory["None"] = 0] = "None";
    StoryCategory[StoryCategory["Banner"] = 1] = "Banner";
    StoryCategory[StoryCategory["Highlight"] = 2] = "Highlight";
    StoryCategory[StoryCategory["NewsBit"] = 3] = "NewsBit";
    StoryCategory[StoryCategory["Feed"] = 4] = "Feed";
})(StoryCategory || (StoryCategory = {}));
class NewspaperPost {
}
class StoryCategoryMap {
}
class NewspaperPosts {
}


/***/ }),

/***/ "./src/app/newspaper/newspaper-edition-list/newspaper-edition-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/newspaper/newspaper-edition-list/newspaper-edition-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NewspaperEditionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspaperEditionListComponent", function() { return NewspaperEditionListComponent; });
/* harmony import */ var _ngrx_edition_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngrx/edition.actions */ "./src/app/newspaper/ngrx/edition.actions.ts");
/* harmony import */ var _models_editions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/editions */ "./src/app/newspaper/models/editions.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_edition_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ngrx/edition.selectors */ "./src/app/newspaper/ngrx/edition.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");









function NewspaperEditionListComponent_mat_select_0_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const edition_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", edition_r2._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", edition_r2.title, " ");
} }
function NewspaperEditionListComponent_mat_select_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-select", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function NewspaperEditionListComponent_mat_select_0_Template_mat_select_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.showSelectedEdition($event); })("valueChange", function NewspaperEditionListComponent_mat_select_0_Template_mat_select_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.selectedEdition._id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NewspaperEditionListComponent_mat_select_0_mat_option_1_Template, 2, 2, "mat-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.selectedEdition._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.editionsList);
} }
class NewspaperEditionListComponent {
    constructor(store) {
        this.store = store;
        this.selectedEdition = new _models_editions__WEBPACK_IMPORTED_MODULE_1__["NewspaperEdition"]();
    }
    ngOnInit() {
        this.store
            .select(_ngrx_edition_selectors__WEBPACK_IMPORTED_MODULE_3__["selectedEdition"])
            .subscribe((data) => {
            if (data) {
                this.selectedEdition = data;
            }
        });
    }
    ngOnChanges() {
        var _a;
        if (((_a = this.editionsList) === null || _a === void 0 ? void 0 : _a.length) > 0 && !this.selectedEdition._id) {
            this.store.dispatch(_ngrx_edition_actions__WEBPACK_IMPORTED_MODULE_0__["setEdition"](this.editionsList[0]));
        }
    }
    showSelectedEdition($event) {
        this.store.dispatch(_ngrx_edition_actions__WEBPACK_IMPORTED_MODULE_0__["setEdition"](this.editionsList.find(i => i._id === $event.value)));
    }
}
NewspaperEditionListComponent.ɵfac = function NewspaperEditionListComponent_Factory(t) { return new (t || NewspaperEditionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
NewspaperEditionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NewspaperEditionListComponent, selectors: [["app-newspaper-edition-list"]], inputs: { editionsList: ["editions", "editionsList"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "value", "selectionChange", "valueChange", 4, "ngIf"], [3, "value", "selectionChange", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function NewspaperEditionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NewspaperEditionListComponent_mat_select_0_Template, 2, 2, "mat-select", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editionsList && ctx.editionsList.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: ["mat-select[_ngcontent-%COMP%] {\n    width: 160px;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3BhcGVyL25ld3NwYXBlci1lZGl0aW9uLWxpc3QvbmV3c3BhcGVyLWVkaXRpb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHNFQUFzRTtJQUN0RSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9uZXdzcGFwZXIvbmV3c3BhcGVyLWVkaXRpb24tbGlzdC9uZXdzcGFwZXItZWRpdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2VsZWN0IHtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NewspaperEditionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-newspaper-edition-list',
                styleUrls: ['./newspaper-edition-list.component.css'],
                templateUrl: './newspaper-edition-list.component.html'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, { editionsList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['editions']
        }] }); })();


/***/ }),

/***/ "./src/app/newspaper/newspaper-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/newspaper/newspaper-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NewspaperRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspaperRoutingModule", function() { return NewspaperRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/newspaper/home/home.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/newspaper/main/main.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/newspaper/login/login.component.ts");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compose/compose.component */ "./src/app/newspaper/compose/compose.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/newspaper/register/register.component.ts");
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-post/create-post.component */ "./src/app/newspaper/create-post/create-post.component.ts");
/* harmony import */ var _update_posts_update_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-posts/update-posts.component */ "./src/app/newspaper/update-posts/update-posts.component.ts");











const routes = [{
        path: 'newspaper',
        redirectTo: 'newspaper/admin/register',
        pathMatch: 'full'
    }, {
        path: 'newspaper',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        children: [{
                path: 'main',
                component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
            }, {
                path: 'admin/register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
            }, {
                path: 'admin/login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            }, {
                path: 'admin/post',
                component: _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_7__["CreatePostComponent"]
            }, {
                path: 'admin/compose',
                component: _compose_compose_component__WEBPACK_IMPORTED_MODULE_5__["ComposeComponent"]
            }, {
                path: 'admin/update-posts',
                component: _update_posts_update_posts_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePostsComponent"]
            }]
    },];
class NewspaperRoutingModule {
}
NewspaperRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NewspaperRoutingModule });
NewspaperRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NewspaperRoutingModule_Factory(t) { return new (t || NewspaperRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewspaperRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewspaperRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/newspaper/newspaper.module.ts":
/*!***********************************************!*\
  !*** ./src/app/newspaper/newspaper.module.ts ***!
  \***********************************************/
/*! exports provided: NewspaperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspaperModule", function() { return NewspaperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/newspaper/main/main.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _ngrx_story_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ngrx/story.effects */ "./src/app/newspaper/ngrx/story.effects.ts");
/* harmony import */ var _ngrx_story_reducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ngrx/story.reducer */ "./src/app/newspaper/ngrx/story.reducer.ts");
/* harmony import */ var _ngrx_edition_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ngrx/edition.effects */ "./src/app/newspaper/ngrx/edition.effects.ts");
/* harmony import */ var _ngrx_edition_reducer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ngrx/edition.reducer */ "./src/app/newspaper/ngrx/edition.reducer.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/home.component */ "./src/app/newspaper/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login.component */ "./src/app/newspaper/login/login.component.ts");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./compose/compose.component */ "./src/app/newspaper/compose/compose.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./register/register.component */ "./src/app/newspaper/register/register.component.ts");
/* harmony import */ var _newspaper_routing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./newspaper-routing.module */ "./src/app/newspaper/newspaper-routing.module.ts");
/* harmony import */ var _story_card_story_card_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./story-card/story-card.component */ "./src/app/newspaper/story-card/story-card.component.ts");
/* harmony import */ var _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./story-list/story-list.component */ "./src/app/newspaper/story-list/story-list.component.ts");
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./create-post/create-post.component */ "./src/app/newspaper/create-post/create-post.component.ts");
/* harmony import */ var _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./post-details/post-details.component */ "./src/app/newspaper/post-details/post-details.component.ts");
/* harmony import */ var _update_posts_update_posts_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./update-posts/update-posts.component */ "./src/app/newspaper/update-posts/update-posts.component.ts");
/* harmony import */ var _banner_story_banner_story_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./banner-story/banner-story.component */ "./src/app/newspaper/banner-story/banner-story.component.ts");
/* harmony import */ var _image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./image-picker/image-picker.component */ "./src/app/newspaper/image-picker/image-picker.component.ts");
/* harmony import */ var _nine_per_page_layout_nine_per_page_layout_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./nine-per-page-layout/nine-per-page-layout.component */ "./src/app/newspaper/nine-per-page-layout/nine-per-page-layout.component.ts");
/* harmony import */ var _create_newspaper_edition_create_newspaper_edition_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./create-newspaper-edition/create-newspaper-edition.component */ "./src/app/newspaper/create-newspaper-edition/create-newspaper-edition.component.ts");
/* harmony import */ var _newspaper_edition_list_newspaper_edition_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./newspaper-edition-list/newspaper-edition-list.component */ "./src/app/newspaper/newspaper-edition-list/newspaper-edition-list.component.ts");
/* harmony import */ var _single_column_layout_single_column_layout_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./single-column-layout/single-column-layout.component */ "./src/app/newspaper/single-column-layout/single-column-layout.component.ts");










































class NewspaperModule {
}
NewspaperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NewspaperModule });
NewspaperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NewspaperModule_Factory(t) { return new (t || NewspaperModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__["MatBottomSheetModule"],
            _newspaper_routing_module__WEBPACK_IMPORTED_MODULE_27__["NewspaperRoutingModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_ngrx_story_effects__WEBPACK_IMPORTED_MODULE_19__["StoryEffects"], _ngrx_edition_effects__WEBPACK_IMPORTED_MODULE_21__["EditionEffects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('newspaperStories', { stories: _ngrx_story_reducer__WEBPACK_IMPORTED_MODULE_20__["getStoryReducer"] }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('newspaperEditions', _ngrx_edition_reducer__WEBPACK_IMPORTED_MODULE_22__["getEditionReducer"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewspaperModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
        _compose_compose_component__WEBPACK_IMPORTED_MODULE_25__["ComposeComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"],
        _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_29__["StoryListComponent"],
        _story_card_story_card_component__WEBPACK_IMPORTED_MODULE_28__["StoryCardComponent"],
        _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_30__["CreatePostComponent"],
        _image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_34__["ImagePickerComponent"],
        _banner_story_banner_story_component__WEBPACK_IMPORTED_MODULE_33__["BannerStoryComponent"],
        _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_31__["PostDetailsComponent"],
        _update_posts_update_posts_component__WEBPACK_IMPORTED_MODULE_32__["UpdatePostsComponent"],
        _nine_per_page_layout_nine_per_page_layout_component__WEBPACK_IMPORTED_MODULE_35__["NewspaperMainComponent"],
        _single_column_layout_single_column_layout_component__WEBPACK_IMPORTED_MODULE_38__["SingleColumnLayoutComponent"],
        _newspaper_edition_list_newspaper_edition_list_component__WEBPACK_IMPORTED_MODULE_37__["NewspaperEditionListComponent"],
        _create_newspaper_edition_create_newspaper_edition_component__WEBPACK_IMPORTED_MODULE_36__["CreateNewspaperEditionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__["MatBottomSheetModule"],
        _newspaper_routing_module__WEBPACK_IMPORTED_MODULE_27__["NewspaperRoutingModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewspaperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                    _compose_compose_component__WEBPACK_IMPORTED_MODULE_25__["ComposeComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"],
                    _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_29__["StoryListComponent"],
                    _story_card_story_card_component__WEBPACK_IMPORTED_MODULE_28__["StoryCardComponent"],
                    _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_30__["CreatePostComponent"],
                    _image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_34__["ImagePickerComponent"],
                    _banner_story_banner_story_component__WEBPACK_IMPORTED_MODULE_33__["BannerStoryComponent"],
                    _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_31__["PostDetailsComponent"],
                    _update_posts_update_posts_component__WEBPACK_IMPORTED_MODULE_32__["UpdatePostsComponent"],
                    _nine_per_page_layout_nine_per_page_layout_component__WEBPACK_IMPORTED_MODULE_35__["NewspaperMainComponent"],
                    _single_column_layout_single_column_layout_component__WEBPACK_IMPORTED_MODULE_38__["SingleColumnLayoutComponent"],
                    _newspaper_edition_list_newspaper_edition_list_component__WEBPACK_IMPORTED_MODULE_37__["NewspaperEditionListComponent"],
                    _create_newspaper_edition_create_newspaper_edition_component__WEBPACK_IMPORTED_MODULE_36__["CreateNewspaperEditionComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__["MatBottomSheetModule"],
                    _newspaper_routing_module__WEBPACK_IMPORTED_MODULE_27__["NewspaperRoutingModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_ngrx_story_effects__WEBPACK_IMPORTED_MODULE_19__["StoryEffects"], _ngrx_edition_effects__WEBPACK_IMPORTED_MODULE_21__["EditionEffects"]]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('newspaperStories', { stories: _ngrx_story_reducer__WEBPACK_IMPORTED_MODULE_20__["getStoryReducer"] }),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('newspaperEditions', _ngrx_edition_reducer__WEBPACK_IMPORTED_MODULE_22__["getEditionReducer"]),
                ],
                entryComponents: [_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_31__["PostDetailsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/newspaper/ngrx/edition.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/newspaper/ngrx/edition.actions.ts ***!
  \***************************************************/
/*! exports provided: getAllNewspaperEditions, getAllEditionsSuccess, setEdition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllNewspaperEditions", function() { return getAllNewspaperEditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEditionsSuccess", function() { return getAllEditionsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEdition", function() { return setEdition; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const getAllNewspaperEditions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Compose Component] getAllNewspaperEditions');
const getAllEditionsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Compose Component] getAllEditionsSuccess', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setEdition = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[CreateNewsPaperEdition Component] setEdition', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/newspaper/ngrx/edition.effects.ts":
/*!***************************************************!*\
  !*** ./src/app/newspaper/ngrx/edition.effects.ts ***!
  \***************************************************/
/*! exports provided: EditionEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditionEffects", function() { return EditionEffects; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _edition_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edition.actions */ "./src/app/newspaper/ngrx/edition.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _services_edition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/edition.service */ "./src/app/newspaper/services/edition.service.ts");








class EditionEffects {
    constructor(actions$, editionSvc) {
        this.actions$ = actions$;
        this.editionSvc = editionSvc;
        this.getStories$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_edition_actions__WEBPACK_IMPORTED_MODULE_2__["getAllNewspaperEditions"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.editionSvc.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(list => (_edition_actions__WEBPACK_IMPORTED_MODULE_2__["getAllEditionsSuccess"]({ editions: list }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"])))));
    }
}
EditionEffects.ɵfac = function EditionEffects_Factory(t) { return new (t || EditionEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_edition_service__WEBPACK_IMPORTED_MODULE_5__["EditionService"])); };
EditionEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EditionEffects, factory: EditionEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditionEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] }, { type: _services_edition_service__WEBPACK_IMPORTED_MODULE_5__["EditionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/newspaper/ngrx/edition.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/newspaper/ngrx/edition.reducer.ts ***!
  \***************************************************/
/*! exports provided: getEditionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditionReducer", function() { return getEditionReducer; });
/* harmony import */ var _edition_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edition.actions */ "./src/app/newspaper/ngrx/edition.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");


const initialState = {
    allEditions: {
        editions: []
    }
};
const getAllEditions = (state, props) => {
    let sortedEditions = [...props.editions];
    sortedEditions.sort((current, prev) => {
        return new Date(current.dateCreated).getTime() - new Date(prev.dateCreated).getTime();
    })
        .reverse();
    return Object.assign(Object.assign({}, state), { allEditions: {
            editions: sortedEditions
        } });
};
const _storyReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_edition_actions__WEBPACK_IMPORTED_MODULE_0__["getAllEditionsSuccess"], getAllEditions), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_edition_actions__WEBPACK_IMPORTED_MODULE_0__["setEdition"], (state, props) => (Object.assign(Object.assign({}, state), { selectedEdition: props }))));
function getEditionReducer(state, action) {
    return _storyReducer(state, action);
}


/***/ }),

/***/ "./src/app/newspaper/ngrx/edition.selectors.ts":
/*!*****************************************************!*\
  !*** ./src/app/newspaper/ngrx/edition.selectors.ts ***!
  \*****************************************************/
/*! exports provided: getNewspaperEditions, getPublishedNewspaperEditions, selectedEdition, allNewspaperEditions, publishedNewspaperEditions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewspaperEditions", function() { return getNewspaperEditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPublishedNewspaperEditions", function() { return getPublishedNewspaperEditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedEdition", function() { return selectedEdition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allNewspaperEditions", function() { return allNewspaperEditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishedNewspaperEditions", function() { return publishedNewspaperEditions; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const getNewspaperEditions = (state) => {
    return state.newspaperEditions;
};
const getPublishedNewspaperEditions = (state) => {
    var _a, _b;
    return (_b = (_a = state === null || state === void 0 ? void 0 : state.newspaperEditions) === null || _a === void 0 ? void 0 : _a.allEditions) === null || _b === void 0 ? void 0 : _b.editions.filter(e => e.isPublished === "true");
};
const selectedEdition = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNewspaperEditions, (npeditions) => npeditions.selectedEdition);
const allNewspaperEditions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNewspaperEditions, npeditions => npeditions.allEditions.editions);
const publishedNewspaperEditions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPublishedNewspaperEditions, npeditions => npeditions);


/***/ }),

/***/ "./src/app/newspaper/ngrx/story.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/newspaper/ngrx/story.actions.ts ***!
  \*************************************************/
/*! exports provided: getAllStories, getAllStoriesSuccess, categorizeStories, updateStory, updateStoriesForEdition, updateStoriesForEditionSuccess, updateStoryJson, updateStoryJsonSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllStories", function() { return getAllStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllStoriesSuccess", function() { return getAllStoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categorizeStories", function() { return categorizeStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStory", function() { return updateStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStoriesForEdition", function() { return updateStoriesForEdition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStoriesForEditionSuccess", function() { return updateStoriesForEditionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStoryJson", function() { return updateStoryJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStoryJsonSuccess", function() { return updateStoryJsonSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const getAllStories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Compose Component] getAllStories');
const getAllStoriesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Compose Component] getAllStoriesSuccess', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// export const getStoryById = createAction('[Compose Component] getStoryById', props<String>());
// export const getAvailableStories = createAction('[Compose Component getAvailableStories');
const categorizeStories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Compose Component categorizeStories', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateStory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Compose Component updateStory', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateStoriesForEdition = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Compose Component updateStoriesForEdition', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateStoriesForEditionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Compose Component updateStoriesForEditionSuccess', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateStoryJson = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[UpdatePosts Component updateStoryJson', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateStoryJsonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[UpdatePosts Component updateStoryJsonSuccess', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/newspaper/ngrx/story.effects.ts":
/*!*************************************************!*\
  !*** ./src/app/newspaper/ngrx/story.effects.ts ***!
  \*************************************************/
/*! exports provided: StoryEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryEffects", function() { return StoryEffects; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _story_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./story.actions */ "./src/app/newspaper/ngrx/story.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/post.service */ "./src/app/newspaper/services/post.service.ts");








class StoryEffects {
    constructor(actions$, postService) {
        this.actions$ = actions$;
        this.postService = postService;
        this.getStories$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_story_actions__WEBPACK_IMPORTED_MODULE_2__["getAllStories"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.postService.getActiveStories()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(stories => (_story_actions__WEBPACK_IMPORTED_MODULE_2__["getAllStoriesSuccess"]({ posts: stories }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"])))));
        this.updateStoriesForEdition$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_story_actions__WEBPACK_IMPORTED_MODULE_2__["updateStoriesForEdition"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((req) => this.postService.updateStoriesForEdition(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => (_story_actions__WEBPACK_IMPORTED_MODULE_2__["updateStoriesForEditionSuccess"](true))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"])))));
        this.updateStoryJson$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_story_actions__WEBPACK_IMPORTED_MODULE_2__["updateStoryJson"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((req) => this.postService.updatePost(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => (_story_actions__WEBPACK_IMPORTED_MODULE_2__["updateStoryJsonSuccess"](true))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"])))));
    }
}
StoryEffects.ɵfac = function StoryEffects_Factory(t) { return new (t || StoryEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"])); };
StoryEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StoryEffects, factory: StoryEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StoryEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] }, { type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/newspaper/ngrx/story.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/newspaper/ngrx/story.reducer.ts ***!
  \*************************************************/
/*! exports provided: initialState, getStoryReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoryReducer", function() { return getStoryReducer; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _story_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story.actions */ "./src/app/newspaper/ngrx/story.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _models_newspaper_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/newspaper-post */ "./src/app/newspaper/models/newspaper-post.ts");




const initialState = {
    allStories: {
        posts: []
    }
};
const getStateOnStoriesApiSuccess = (state, props) => {
    let posts = state.allStories.posts.concat(props.posts);
    return Object.assign(Object.assign({}, state), { allStories: {
            posts
        } });
};
// const getStoryById = (state: Stories, props: String ) => {
//     return state.allStories.posts.find( story => story._id === props);
// }
const categorizeStories = (state, props) => {
    let newState = [];
    state.allStories.posts.map(story => {
        let updatedStory;
        if (props.storyIds.find(p => p === story._id)) {
            if (props.newCategory === _models_newspaper_post__WEBPACK_IMPORTED_MODULE_3__["StoryCategory"].None) {
                updatedStory = Object.assign(Object.assign({}, story), { storyCategory: null });
            }
            else {
                updatedStory = Object.assign(Object.assign({}, story), { storyCategory: props.newCategory });
                updatedStory.edition = props.edition;
            }
            newState.push(updatedStory);
        }
        else {
            newState.push(story);
        }
    });
    return Object.assign(Object.assign({}, state), { allStories: { posts: newState } });
};
const updateStory = (state, props) => {
    let newAllStories = lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](state.allStories);
    let selectedStory = newAllStories.posts.find(story => story._id === props._id);
    if (selectedStory) {
        let index = newAllStories.posts.indexOf(selectedStory);
        newAllStories.posts.splice(index, 1, props);
    }
    return { allStories: newAllStories };
};
const _storyReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, 
// on(actions.getStoryById, getStoryById),
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_story_actions__WEBPACK_IMPORTED_MODULE_1__["getAllStoriesSuccess"], getStateOnStoriesApiSuccess), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_story_actions__WEBPACK_IMPORTED_MODULE_1__["categorizeStories"], categorizeStories), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_story_actions__WEBPACK_IMPORTED_MODULE_1__["updateStory"], updateStory));
function getStoryReducer(state, action) {
    return _storyReducer(state, action);
}


/***/ }),

/***/ "./src/app/newspaper/ngrx/story.selectors.ts":
/*!***************************************************!*\
  !*** ./src/app/newspaper/ngrx/story.selectors.ts ***!
  \***************************************************/
/*! exports provided: getStoryById, getAssignedStories, getUnassignedStories, getUnassignedToCurrentEdition, getStoryByCateory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoryById", function() { return getStoryById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssignedStories", function() { return getAssignedStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnassignedStories", function() { return getUnassignedStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnassignedToCurrentEdition", function() { return getUnassignedToCurrentEdition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoryByCateory", function() { return getStoryByCateory; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const allStories = (state) => {
    return state.newspaperStories.stories.allStories.posts;
};
const getStoryById = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(allStories, (stories, props) => {
    return stories.find(story => story._id === props);
});
const getAssignedStories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(allStories, (stories, props) => {
    if (props === null || props === void 0 ? void 0 : props.editionId) {
        return stories.filter(story => story.storyCategory !== undefined
            && story.storyCategory !== null
            && story.edition && story.edition._id === props.editionId);
    }
    else {
        return stories.filter(story => story.storyCategory !== undefined
            && story.storyCategory !== null);
    }
});
const getUnassignedStories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(allStories, (stories) => stories.filter(story => story.edition === undefined || story.edition === null));
const getUnassignedToCurrentEdition = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(allStories, (stories, props) => {
    // console.log("stories => ", stories, stories.map(s=> s.edition._id), props);
    return stories.filter(story => !story.edition || story.edition._id === null
        || story.edition._id === undefined
        || story.edition._id !== props.editionId);
});
const getStoryByCateory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(allStories, (stories, props) => {
    return stories.filter(story => story.storyCategory === props.category && story.edition && story.edition._id === props.editionId);
});


/***/ }),

/***/ "./src/app/newspaper/nine-per-page-layout/nine-per-page-layout.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/newspaper/nine-per-page-layout/nine-per-page-layout.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NewspaperMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspaperMainComponent", function() { return NewspaperMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_edition_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngrx/edition.selectors */ "./src/app/newspaper/ngrx/edition.selectors.ts");
/* harmony import */ var _ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ngrx/story.selectors */ "./src/app/newspaper/ngrx/story.selectors.ts");
/* harmony import */ var _models_newspaper_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/newspaper-post */ "./src/app/newspaper/models/newspaper-post.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _story_card_story_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../story-card/story-card.component */ "./src/app/newspaper/story-card/story-card.component.ts");
/* harmony import */ var _banner_story_banner_story_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../banner-story/banner-story.component */ "./src/app/newspaper/banner-story/banner-story.component.ts");











function NewspaperMainComponent_div_1_ng_container_1_div_3_app_story_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-story-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("OnStorySelected", function NewspaperMainComponent_div_1_ng_container_1_div_3_app_story_card_1_Template_app_story_card_OnStorySelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r15.storySelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const story_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("story", story_r11)("title", story_r11.title)("description", ctx_r13.formatDescription(story_r11.description, 227));
} }
function NewspaperMainComponent_div_1_ng_container_1_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewspaperMainComponent_div_1_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewspaperMainComponent_div_1_ng_container_1_div_3_app_story_card_1_Template, 1, 3, "app-story-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewspaperMainComponent_div_1_ng_container_1_div_3_div_2_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const storyIndex_r12 = ctx.index;
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r8.getStoryCssClassByRow(i_r4, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isValidForLeftSet(i_r4, storyIndex_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", storyIndex_r12 === 0);
} }
function NewspaperMainComponent_div_1_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-banner-story-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("primaryAction", function NewspaperMainComponent_div_1_ng_container_1_div_4_Template_app_banner_story_card_primaryAction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.storySelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("story", ctx_r9.bannerStories[i_r4])("storyContent", ctx_r9.formatBannerText(ctx_r9.bannerStories[i_r4].story));
} }
function NewspaperMainComponent_div_1_ng_container_1_div_7_app_story_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-story-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("OnStorySelected", function NewspaperMainComponent_div_1_ng_container_1_div_7_app_story_card_1_Template_app_story_card_OnStorySelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r25.storySelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const story_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", story_r22.title)("description", ctx_r24.formatDescription(story_r22.description + " " + story_r22.story, 420))("story", story_r22);
} }
function NewspaperMainComponent_div_1_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewspaperMainComponent_div_1_ng_container_1_div_7_app_story_card_1_Template, 1, 3, "app-story-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const storyIndex_r23 = ctx.index;
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r10.getStoryCssClassByRow(i_r4, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.isValidForRightSet(i_r4, storyIndex_r23));
} }
function NewspaperMainComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewspaperMainComponent_div_1_ng_container_1_div_3_Template, 3, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewspaperMainComponent_div_1_ng_container_1_div_4_Template, 2, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewspaperMainComponent_div_1_ng_container_1_div_7_Template, 2, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r4 = ctx_r29.index;
    const stories_r3 = ctx_r29.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.getSectionCssClassByRow(i_r4, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", stories_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.bannerStories[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.getSectionCssClassByRow(i_r4, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", stories_r3);
} }
function NewspaperMainComponent_div_1_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-story-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("OnStorySelected", function NewspaperMainComponent_div_1_ng_template_2_div_0_Template_app_story_card_OnStorySelected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r32.storySelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const story_r31 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", story_r31.title)("description", ctx_r30.formatDescription(story_r31.description + " " + story_r31.story, 420))("story", story_r31);
} }
function NewspaperMainComponent_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewspaperMainComponent_div_1_ng_template_2_div_0_Template, 2, 3, "div", 20);
} if (rf & 2) {
    const stories_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", stories_r3);
} }
function NewspaperMainComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewspaperMainComponent_div_1_ng_container_1_Template, 8, 5, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewspaperMainComponent_div_1_ng_template_2_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.bannerStories[i_r4])("ngIfElse", _r6);
} }
function NewspaperMainComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-story-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("headerActionClicked", function NewspaperMainComponent_div_2_Template_app_story_card_headerActionClicked_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.scrollTop(); })("OnStorySelected", function NewspaperMainComponent_div_2_Template_app_story_card_OnStorySelected_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.openUrl($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const story_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", story_r35._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("story", story_r35)("title", story_r35.title)("description", story_r35.description)("storyContent", story_r35.story);
} }
function NewspaperMainComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-story-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("headerAction", function NewspaperMainComponent_ng_container_3_div_1_Template_app_story_card_headerAction_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.scrollTop(); })("OnStorySelected", function NewspaperMainComponent_ng_container_3_div_1_Template_app_story_card_OnStorySelected_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.openUrl($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const story_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", story_r41._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("story", story_r41)("title", story_r41.title)("description", story_r41.description)("storyContent", story_r41.story);
} }
function NewspaperMainComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewspaperMainComponent_ng_container_3_div_1_Template, 4, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const stories_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", stories_r39);
} }
class NewspaperMainComponent {
    constructor(store, document) {
        this.store = store;
        this.document = document;
        this.bannerStories = [];
    }
    ngOnInit() {
        this.window = this.document.defaultView;
        this.store
            .select(_ngrx_edition_selectors__WEBPACK_IMPORTED_MODULE_1__["selectedEdition"])
            .subscribe((data) => {
            this.bannerStories = [];
            this.storyGroups = [];
            this.currentEdition = data;
            if (data && data._id) {
                this.store
                    .select(_ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_2__["getStoryByCateory"], { category: _models_newspaper_post__WEBPACK_IMPORTED_MODULE_3__["StoryCategory"].Banner, editionId: data._id })
                    .subscribe((data) => {
                    if (data) {
                        if (data && data.length > 0 && data[0].edition._id === this.currentEdition._id) {
                            this.bannerStories = this.bannerStories.concat(data);
                            // this.bannerStories = this.bannerStories.concat(data);
                        }
                    }
                });
                this.store
                    .select(_ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_2__["getStoryByCateory"], { category: _models_newspaper_post__WEBPACK_IMPORTED_MODULE_3__["StoryCategory"].Highlight, editionId: data._id })
                    .subscribe((data) => {
                    if (data) {
                        if (data && data.length > 0 && data[0].edition._id === this.currentEdition._id) {
                            this.groupStories(data);
                        }
                    }
                });
                this.store
                    .select(_ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_2__["getStoryByCateory"], { category: _models_newspaper_post__WEBPACK_IMPORTED_MODULE_3__["StoryCategory"].NewsBit, editionId: data._id })
                    .subscribe((data) => {
                    if (data) {
                        if (data && data.length > 0 && data[0].edition._id === this.currentEdition._id) {
                            this.groupStories(data);
                        }
                    }
                });
            }
        });
    }
    getSectionCssClassByRow(rowIndex, set) {
        if ((rowIndex % 2 === 0 && set === 1) || (rowIndex % 2 !== 0 && set === 2)) {
            return "col-2";
        }
        else {
            return "col-6";
        }
    }
    getStoryCssClassByRow(rowIndex, set) {
        if ((rowIndex % 2 === 0 && set === 1) || (rowIndex % 2 !== 0 && set === 2)) {
            return "col-12";
        }
        else {
            return "col-6";
        }
    }
    isValidForLeftSet(rowIndex, storyIndex) {
        if ((rowIndex % 2 === 0 && storyIndex < 2) || (rowIndex % 2 !== 0 && storyIndex < 6)) {
            return true;
        }
        else {
            return false;
        }
    }
    isValidForRightSet(rowIndex, storyIndex) {
        if ((rowIndex % 2 === 0 && storyIndex >= 2 && storyIndex < 8) || (rowIndex % 2 !== 0 && storyIndex >= 6 && storyIndex < 8)) {
            return true;
        }
        else {
            return false;
        }
    }
    storySelected(story) {
        this.document.getElementById(story._id).scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
    }
    scrollTop() {
        this.document.getElementById("home").scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
    }
    openUrl(story) {
        this.window.open(story.linkToPost, "__blank");
    }
    groupStories(availableStories) {
        if (!this.storyGroups) {
            this.storyGroups = new Array();
        }
        let uniqueStories = this.getUniqueStories(availableStories);
        for (let i = this.storyGroups.length; uniqueStories.length > 0; i++) {
            if (this.storyGroups[i - 1] && this.storyGroups[i - 1].length < 7) {
                // there is a deficit in the previous count of story groups. 
                // add stories to fill up the length to 9
                let remainingStories = uniqueStories.splice(0, 6 - this.storyGroups[i - 1].length);
                this.storyGroups[i - 1] = this.storyGroups[i - 1].concat(remainingStories);
            }
            this.storyGroups[i] = uniqueStories.splice(0, 6);
        }
    }
    getUniqueStories(availableStories) {
        let uniqueStories = [];
        let allStories = [];
        if (this.storyGroups) {
            this.storyGroups.map((sg) => {
                allStories = allStories.concat(sg);
            });
            availableStories.map(s => {
                let x = allStories.find(as => as._id === s._id);
                if (!!!x) {
                    uniqueStories.push(s);
                }
            });
        }
        return uniqueStories;
    }
    formatDescription(str, length) {
        if (str.length > length) {
            return str.substring(0, length) + "...";
        }
        else {
            return str;
        }
    }
    formatBannerText(str) {
        let bannerTextLength = 980;
        let countOfNextLineChars = (str.split("\n\n") || []).length * 76;
        bannerTextLength = bannerTextLength - countOfNextLineChars;
        if (str.length > length) {
            return str.substring(0, bannerTextLength) + "...";
        }
        else {
            return str;
        }
    }
}
NewspaperMainComponent.ɵfac = function NewspaperMainComponent_Factory(t) { return new (t || NewspaperMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); };
NewspaperMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewspaperMainComponent, selectors: [["app-nine-per-page-layout"]], decls: 4, vars: 3, consts: [["id", "home"], ["class", "row page-margin", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "row", "page-margin"], [4, "ngIf", "ngIfElse"], ["secondaryLayout", ""], [1, "col-2"], [1, "col-10"], [3, "ngClass"], [1, "row"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-4", 4, "ngIf"], [3, "story", "title", "description", "OnStorySelected", 4, "ngIf"], [4, "ngIf"], [3, "story", "title", "description", "OnStorySelected"], [1, "col-4"], [3, "story", "storyContent", "primaryAction"], [3, "title", "description", "story", "OnStorySelected", 4, "ngIf"], [3, "title", "description", "story", "OnStorySelected"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "col-2", 3, "id"], ["showCardRaised", "true", "showHeaderAction", "true", "primaryActionTitle", "Read complete story", 1, "col-8", 3, "story", "title", "description", "storyContent", "headerActionClicked", "OnStorySelected"], ["showCardRaised", "true", "showHeaderAction", "true", "primaryActionTitle", "Read complete story", 1, "col-8", 3, "story", "title", "description", "storyContent", "headerAction", "OnStorySelected"]], template: function NewspaperMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewspaperMainComponent_div_1_Template, 7, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewspaperMainComponent_div_2_Template, 4, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewspaperMainComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.storyGroups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bannerStories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.storyGroups);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _story_card_story_card_component__WEBPACK_IMPORTED_MODULE_7__["StoryCardComponent"], _banner_story_banner_story_component__WEBPACK_IMPORTED_MODULE_8__["BannerStoryComponent"]], styles: ["mat-grid-tile[_ngcontent-%COMP%]{\n    border-width: 1px;\n    border-style: solid;\n}\n\n.gridListCustom[_ngcontent-%COMP%] {\n    min-height: 680px;\n    height: 100%;\n}\n\n@media only screen and (min-width: 780px){\n    div.page-margin[_ngcontent-%COMP%] {\n        margin: auto 2% auto 2%;\n    }\n}\n\n@media only screen and (min-width: 1390px){\n    div.page-margin[_ngcontent-%COMP%] {\n        margin: auto 5% auto 5%;\n    }\n}\n\n@media only screen and (min-width: 1738px){\n    div.page-margin[_ngcontent-%COMP%] {\n        margin: auto 12% auto 12%;\n    }\n}\n\n.col-4[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.col-2[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.col-3[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.col-6[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.col-12[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.row[_ngcontent-%COMP%] {\n    margin-right: 5px;\n    margin-left: 5px;\n}\n\napp-story-card[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3BhcGVyL25pbmUtcGVyLXBhZ2UtbGF5b3V0L25pbmUtcGVyLXBhZ2UtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9uZXdzcGFwZXIvbmluZS1wZXItcGFnZS1sYXlvdXQvbmluZS1wZXItcGFnZS1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLXRpbGV7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLmdyaWRMaXN0Q3VzdG9tIHtcbiAgICBtaW4taGVpZ2h0OiA2ODBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpe1xuICAgIGRpdi5wYWdlLW1hcmdpbiB7XG4gICAgICAgIG1hcmdpbjogYXV0byAyJSBhdXRvIDIlO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzkwcHgpe1xuICAgIGRpdi5wYWdlLW1hcmdpbiB7XG4gICAgICAgIG1hcmdpbjogYXV0byA1JSBhdXRvIDUlO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNzM4cHgpe1xuICAgIGRpdi5wYWdlLW1hcmdpbiB7XG4gICAgICAgIG1hcmdpbjogYXV0byAxMiUgYXV0byAxMiU7XG4gICAgfVxufVxuXG4uY29sLTQge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmNvbC0yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5jb2wtMyB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4uY29sLTYge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5jb2wtMTIge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLnJvdyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuYXBwLXN0b3J5LWNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewspaperMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nine-per-page-layout',
                templateUrl: './nine-per-page-layout.component.html',
                styleUrls: ['./nine-per-page-layout.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/newspaper/post-details/post-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/newspaper/post-details/post-details.component.ts ***!
  \******************************************************************/
/*! exports provided: PostDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsComponent", function() { return PostDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _models_newspaper_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/newspaper-post */ "./src/app/newspaper/models/newspaper-post.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function PostDetailsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Read full article ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.story, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.data.linkToPost, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PostDetailsComponent {
    constructor(data, matBottomSheet) {
        this.data = data;
        this.matBottomSheet = matBottomSheet;
    }
    ngOnInit() {
    }
    close() {
        this.matBottomSheet.dismiss();
    }
}
PostDetailsComponent.ɵfac = function PostDetailsComponent_Factory(t) { return new (t || PostDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"])); };
PostDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostDetailsComponent, selectors: [["app-post-details"]], decls: 5, vars: 1, consts: [["mat-button", "", 3, "click"], [4, "ngIf"], [1, "row"], ["tabindex", "-1", "target", "_blank", 1, "row", 3, "href"]], template: function PostDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailsComponent_Template_button_click_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostDetailsComponent_div_4_Template, 10, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["div[_ngcontent-%COMP%] {\n    text-align: justify;\n    margin-bottom: 10px;\n    white-space: pre-wrap;\n}\n\nstrong[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 10px;\n    margin-bottom: 15px;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 100%;\n    border-bottom: lightgrey;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 40px;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 24pt;\n    text-align: center;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 9pt;\n    text-align: center;\n    margin-bottom: -10px;\n}\n\n.center-align[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 40px;\n    top:0;\n    right: -10px;\n}\n\n.row[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.pull-right[_ngcontent-%COMP%] {\n    text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3BhcGVyL3Bvc3QtZGV0YWlscy9wb3N0LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzRUFBc0U7SUFDdEUsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNFQUFzRTtJQUN0RSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsS0FBSztJQUNMLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbmV3c3BhcGVyL3Bvc3QtZGV0YWlscy9wb3N0LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuc3Ryb25nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5tYXQtdG9vbGJhciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IGxpZ2h0Z3JleTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG59XG5cbm1hdC10b29sYmFyIGltZyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG5tYXQtdG9vbGJhci1yb3cge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxubWF0LXRvb2xiYXItcm93IGgxe1xuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAyNHB0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LXRvb2xiYXItcm93IGg2e1xuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiA5cHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHRvcDowO1xuICAgIHJpZ2h0OiAtMTBweDtcbn1cblxuLnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnB1bGwtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-details',
                templateUrl: './post-details.component.html',
                styleUrls: ['./post-details.component.css']
            }]
    }], function () { return [{ type: _models_newspaper_post__WEBPACK_IMPORTED_MODULE_2__["NewspaperPost"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]]
            }] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/newspaper/register/register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/newspaper/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 37, vars: 0, consts: [["formGroup", "", 1, "row"], [1, "col-2"], [1, "col-8"], [1, "row"], [1, "col-6"], ["matInput", ""], ["matInput", "", "type", "email"], ["matInput", "", "type", "password"], ["matInput", "", "rows", "4"], ["mat-button", "", "color", "primary"], ["mat-button", ""]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Register to Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Twitter Handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " LinkedIn URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    width: 160px;\n    margin: 1px 1px 1px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3BhcGVyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNFQUFzRTtJQUN0RSxZQUFZO0lBQ1osd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvbmV3c3BhcGVyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIG1hcmdpbjogMXB4IDFweCAxcHggMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/newspaper/services/edition.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/newspaper/services/edition.service.ts ***!
  \*******************************************************/
/*! exports provided: EditionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditionService", function() { return EditionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class EditionService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    create(edition) {
        return this.httpClient
            .post('/newspaper-edition', edition);
    }
    getAll() {
        return this.httpClient
            .get('/newspaper-edition');
    }
}
EditionService.ɵfac = function EditionService_Factory(t) { return new (t || EditionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EditionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EditionService, factory: EditionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/newspaper/services/post.service.ts":
/*!****************************************************!*\
  !*** ./src/app/newspaper/services/post.service.ts ***!
  \****************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class PostService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getBanners() {
        return this.httpClient.get('/storage');
    }
    create(post) {
        return this.httpClient
            .post('/newspaper-post', post);
    }
    getActiveStories() {
        return this.httpClient
            .get('/newspaper-post');
    }
    updateStoriesForEdition(posts) {
        return this.httpClient
            .post('/newspaper-post/add-posts-to-edition', posts.posts);
    }
    updatePost(post) {
        return this.httpClient
            .post('/newspaper-post/update-post', post);
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/newspaper/single-column-layout/single-column-layout.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/newspaper/single-column-layout/single-column-layout.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SingleColumnLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleColumnLayoutComponent", function() { return SingleColumnLayoutComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngrx_edition_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ngrx/edition.selectors */ "./src/app/newspaper/ngrx/edition.selectors.ts");
/* harmony import */ var _ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ngrx/story.selectors */ "./src/app/newspaper/ngrx/story.selectors.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_newspaper_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/newspaper-post */ "./src/app/newspaper/models/newspaper-post.ts");
/* harmony import */ var _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post-details/post-details.component */ "./src/app/newspaper/post-details/post-details.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _banner_story_banner_story_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../banner-story/banner-story.component */ "./src/app/newspaper/banner-story/banner-story.component.ts");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _story_card_story_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../story-card/story-card.component */ "./src/app/newspaper/story-card/story-card.component.ts");
















function SingleColumnLayoutComponent_div_0_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-story-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("OnStorySelected", function SingleColumnLayoutComponent_div_0_div_2_div_7_Template_app_story_card_OnStorySelected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r7.showModelDialog($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const story_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("story", story_r6)("showCardRaised", false)("title", story_r6.title)("description", ctx_r5.formatDescription(story_r6.description, 300));
} }
function SingleColumnLayoutComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SingleColumnLayoutComponent_div_0_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r9.closeHelpInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Scroll for more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "swap_horizontal_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SingleColumnLayoutComponent_div_0_div_2_div_7_Template, 2, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r4.showHideHelpTextCss);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.highlightStories);
} }
function SingleColumnLayoutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-banner-story-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("primaryAction", function SingleColumnLayoutComponent_div_0_Template_app_banner_story_card_primaryAction_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const story_r2 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.openUrl(story_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SingleColumnLayoutComponent_div_0_div_2_Template, 8, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const story_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("story", story_r2)("storyContent", story_r2.story)("showCardRaised", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r3 === 0 || i_r3 === 3);
} }
function SingleColumnLayoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-story-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("OnStorySelected", function SingleColumnLayoutComponent_div_1_Template_app_story_card_OnStorySelected_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const story_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.openUrl(story_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const story_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("story", story_r13)("title", story_r13.title)("showCardRaised", true)("storyContent", story_r13.story)("description", story_r13.description);
} }
class SingleColumnLayoutComponent {
    constructor(store, document, dialog) {
        this.store = store;
        this.document = document;
        this.dialog = dialog;
        this.showHideHelpTextCss = "show";
        this.bannerStories = [];
        this.newsbitStories = [];
        this.highlightStories = [];
        this.destory$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.window = this.document.defaultView;
        this.store
            .select(_ngrx_edition_selectors__WEBPACK_IMPORTED_MODULE_3__["selectedEdition"])
            .subscribe((ne) => {
            this.currentEditon = ne;
            this.resetStories();
            if (ne && ne._id) {
                this.store
                    .select(_ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_4__["getStoryByCateory"], { category: _models_newspaper_post__WEBPACK_IMPORTED_MODULE_6__["StoryCategory"].Banner, editionId: ne._id })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destory$))
                    .subscribe((bnSt) => {
                    if (bnSt && bnSt.length > 0 && bnSt[0].edition._id === this.currentEditon._id) {
                        this.bannerStories = bnSt;
                    }
                });
                this.store
                    .select(_ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_4__["getStoryByCateory"], { category: _models_newspaper_post__WEBPACK_IMPORTED_MODULE_6__["StoryCategory"].Highlight, editionId: ne._id })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destory$))
                    .subscribe((nph) => {
                    if (nph && nph.length > 0 && nph[0].edition._id === this.currentEditon._id) {
                        this.highlightStories = nph;
                    }
                });
                this.store
                    .select(_ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_4__["getStoryByCateory"], { category: _models_newspaper_post__WEBPACK_IMPORTED_MODULE_6__["StoryCategory"].NewsBit, editionId: ne._id })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destory$))
                    .subscribe((nnb) => {
                    if (nnb && nnb.length > 0 && nnb[0].edition._id === this.currentEditon._id) {
                        this.newsbitStories = nnb;
                    }
                });
            }
        });
    }
    formatDescription(str, length) {
        if (str.length > length) {
            return str.substring(0, length) + "...";
        }
        else {
            return str;
        }
    }
    ngOnDestroy() {
        this.destory$.complete();
    }
    openUrl(story) {
        this.window.open(story.linkToPost, "__blank");
    }
    showModelDialog(story) {
        this.dialog.open(_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_7__["PostDetailsComponent"], {
            data: story
        });
    }
    resetStories() {
        this.bannerStories = [];
        this.newsbitStories = [];
        this.highlightStories = [];
    }
    closeHelpInfo() {
        this.showHideHelpTextCss = "hide";
    }
}
SingleColumnLayoutComponent.ɵfac = function SingleColumnLayoutComponent_Factory(t) { return new (t || SingleColumnLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheet"])); };
SingleColumnLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SingleColumnLayoutComponent, selectors: [["app-single-column-layout"]], decls: 2, vars: 2, consts: [["class", "small-font", 4, "ngFor", "ngForOf"], ["class", "story-list", 4, "ngFor", "ngForOf"], [1, "small-font"], ["primaryActionTitle", "Read Article", 3, "story", "storyContent", "showCardRaised", "primaryAction"], ["class", "horizontal-scroll-container", 4, "ngIf"], [1, "horizontal-scroll-container"], [1, "info-container", 3, "ngClass", "click"], [1, "info-message"], [1, "big-icon"], ["class", "card-container", 4, "ngFor", "ngForOf"], [1, "card-container"], [3, "story", "showCardRaised", "title", "description", "OnStorySelected"], [1, "story-list"], ["primaryActionTitle", "Read Article", 3, "story", "title", "showCardRaised", "storyContent", "description", "OnStorySelected"]], template: function SingleColumnLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SingleColumnLayoutComponent_div_0_Template, 3, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SingleColumnLayoutComponent_div_1_Template, 2, 5, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.bannerStories);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.newsbitStories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _banner_story_banner_story_component__WEBPACK_IMPORTED_MODULE_10__["BannerStoryComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _story_card_story_card_component__WEBPACK_IMPORTED_MODULE_13__["StoryCardComponent"]], styles: [".horizontal-scroll-container[_ngcontent-%COMP%] {\n    max-height: auto;\n    width: 100%;\n    display: block;\n    overflow-x: auto;\n    overflow-y: hidden;\n    display: flex;\n    flex-direction: row;\n}\n\n.card-container[_ngcontent-%COMP%] {\n    min-width: 310px;\n    margin: 3px 5px 10px 5px;\n    border-right-width: 1px;\n    border-right-style: solid;\n    border-right-color: lightgray;\n}\n\n.no-margin-padding[_ngcontent-%COMP%] {\n    padding: 0px 0px 0px 0px;\n}\n\n.story-list[_ngcontent-%COMP%] {\n    margin: 10px 5px 10px 5px;\n}\n\n.big-icon[_ngcontent-%COMP%] {\n    font-size: 48pt;\n}\n\n.info-container[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    min-height: 350px;\n    background-color: whitesmoke;\n    opacity: 80%;\n    z-index: 1000;\n}\n\n.info-message[_ngcontent-%COMP%] {\n    position: relative;\n    margin: 20% auto auto auto;\n    text-align: center;\n    width: 100%;\n    font-weight: bold;\n}\n\n.info-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\n    width: 100%;\n}\n\n.show[_ngcontent-%COMP%]{\n    display: block;\n}\n\n.hide[_ngcontent-%COMP%] {\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3BhcGVyL3NpbmdsZS1jb2x1bW4tbGF5b3V0L3NpbmdsZS1jb2x1bW4tbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL25ld3NwYXBlci9zaW5nbGUtY29sdW1uLWxheW91dC9zaW5nbGUtY29sdW1uLWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvcml6b250YWwtc2Nyb2xsLWNvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gICAgbWluLXdpZHRoOiAzMTBweDtcbiAgICBtYXJnaW46IDNweCA1cHggMTBweCA1cHg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLm5vLW1hcmdpbi1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5zdG9yeS1saXN0IHtcbiAgICBtYXJnaW46IDEwcHggNXB4IDEwcHggNXB4O1xufVxuXG4uYmlnLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNDhwdDtcbn1cblxuLmluZm8tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBvcGFjaXR5OiA4MCU7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLmluZm8tbWVzc2FnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMjAlIGF1dG8gYXV0byBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmluZm8tbWVzc2FnZSBtYXQtaWNvbntcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnNob3d7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](SingleColumnLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'app-single-column-layout',
                templateUrl: './single-column-layout.component.html',
                styleUrls: ['./single-column-layout.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheet"] }]; }, null); })();


/***/ }),

/***/ "./src/app/newspaper/story-card/story-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/newspaper/story-card/story-card.component.ts ***!
  \**************************************************************/
/*! exports provided: StoryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryCardComponent", function() { return StoryCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");







function StoryCardComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoryCardComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.headerActionClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StoryCardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.storyContent, " ");
} }
function StoryCardComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoryCardComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.customAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.customActionTitle);
} }
class StoryCardComponent {
    constructor() {
        this.showCardRaised = false;
        this.showHeaderAction = false;
        this.primaryActionTitle = "more";
        this.headerAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.OnStorySelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    OnMoreSelect() {
        this.OnStorySelected.emit(this.story);
    }
    headerActionClicked() {
        this.headerAction.emit(true);
    }
    customAction() {
    }
}
StoryCardComponent.ɵfac = function StoryCardComponent_Factory(t) { return new (t || StoryCardComponent)(); };
StoryCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoryCardComponent, selectors: [["app-story-card"]], inputs: { showCardRaised: "showCardRaised", story: "story", title: "title", description: "description", storyContent: "storyContent", customActionTitle: "customActionTitle", showHeaderAction: "showHeaderAction", primaryActionTitle: "primaryActionTitle" }, outputs: { headerAction: "headerAction", OnStorySelected: "OnStorySelected" }, decls: 14, vars: 7, consts: [[3, "ngClass"], [1, "row"], [1, "col-10"], ["class", "col-2", "mat-button", "", 3, "click", 4, "ngIf"], [4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "col-2", 3, "click"]], template: function StoryCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StoryCardComponent_button_5_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StoryCardComponent_div_9_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoryCardComponent_Template_button_click_11_listener() { return ctx.OnMoreSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StoryCardComponent_button_13_Template, 2, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showCardRaised ? "mat-elevation-z2" : "mat-elevation-z0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showHeaderAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.storyContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.primaryActionTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customActionTitle);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["mat-card-header[_ngcontent-%COMP%] {\n    margin-left: -16px;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n    font-size: 10pt;\n    font-family: 'Libre Baskerville', serif;\n    font-weight: bold;\n}\n\n.row[_ngcontent-%COMP%] {\n    width: 100% ;\n}\n\n.row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-top: -13px;\n}\n\nmat-card-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    font-size: 9pt;\n    text-align: justify;\n    margin-bottom: 1px;\n    white-space: pre-wrap;\n    \n    font-family: 'Libre Baskerville', serif;\n    \n    \n}\n\nmat-card-actions[_ngcontent-%COMP%] {\n    margin-top: -25px;\n    text-align: right;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    padding-left: 8px;\n    padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3BhcGVyL3N0b3J5LWNhcmQvc3RvcnktY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1Q0FBdUM7SUFDdkMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiw2Q0FBNkM7SUFDN0MsdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4QyxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL25ld3NwYXBlci9zdG9yeS1jYXJkL3N0b3J5LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxubWF0LWNhcmQtaGVhZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG59XG5cbi5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMHB0O1xuICAgIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJvdyB7XG4gICAgd2lkdGg6IDEwMCUgO1xufVxuXG4ucm93IGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogLTEzcHg7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQgZGl2e1xuICAgIGZvbnQtc2l6ZTogOXB0O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAvKiBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7ICovXG4gICAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xuICAgIC8qIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7ICovXG4gICAgLyogZm9udC1mYW1pbHk6ICdZYW5vbmUgS2FmZmVlc2F0eicsIHNhbnMtc2VyaWY7ICovXG59XG5cbm1hdC1jYXJkLWFjdGlvbnMge1xuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5tYXQtY2FyZCB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoryCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-story-card',
                templateUrl: './story-card.component.html',
                styleUrls: ['./story-card.component.css']
            }]
    }], function () { return []; }, { showCardRaised: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], story: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], storyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customActionTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showHeaderAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], primaryActionTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], OnStorySelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/newspaper/story-list/story-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/newspaper/story-list/story-list.component.ts ***!
  \**************************************************************/
/*! exports provided: StoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryListComponent", function() { return StoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






function StoryListComponent_mat_list_item_3_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoryListComponent_mat_list_item_3_mat_icon_3_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.removeItem(post_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StoryListComponent_mat_list_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoryListComponent_mat_list_item_3_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const post_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSelect(post_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoryListComponent_mat_list_item_3_mat_icon_3_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.remove);
} }
class StoryListComponent {
    constructor() {
        this.listTitle = '';
        this.remove = false;
        this.selectedPost = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removedPost = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onSelect(post) {
        this.selectedPost.emit(post);
    }
    removeItem(item) {
        this.stories.splice(this.stories.indexOf(item), 1);
        this.removedPost.emit(item);
    }
}
StoryListComponent.ɵfac = function StoryListComponent_Factory(t) { return new (t || StoryListComponent)(); };
StoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoryListComponent, selectors: [["app-story-list"]], inputs: { listTitle: ["Title", "listTitle"], stories: ["Stories", "stories"], remove: ["IsRemoveEnabled", "remove"] }, outputs: { selectedPost: "SelectedPost", removedPost: "RemovedPost" }, decls: 4, vars: 2, consts: [["class", "row", 3, "click", 4, "ngFor", "ngForOf"], [1, "row", 3, "click"], [1, "col-10"], ["class", "col-2", 3, "click", 4, "ngIf"], [1, "col-12"], [1, "col-2", 3, "click"]], template: function StoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoryListComponent_mat_list_item_3_Template, 5, 2, "mat-list-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.listTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stories);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3BhcGVyL3N0b3J5LWxpc3Qvc3RvcnktbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9uZXdzcGFwZXIvc3RvcnktbGlzdC9zdG9yeS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5tYXQtaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-story-list',
                templateUrl: './story-list.component.html',
                styleUrls: ['./story-list.component.css']
            }]
    }], function () { return []; }, { listTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["Title"]
        }], stories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["Stories"]
        }], remove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["IsRemoveEnabled"]
        }], selectedPost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["SelectedPost"]
        }], removedPost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["RemovedPost"]
        }] }); })();


/***/ }),

/***/ "./src/app/newspaper/update-posts/update-posts.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/newspaper/update-posts/update-posts.component.ts ***!
  \******************************************************************/
/*! exports provided: UpdatePostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePostsComponent", function() { return UpdatePostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_story_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngrx/story.actions */ "./src/app/newspaper/ngrx/story.actions.ts");
/* harmony import */ var _ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ngrx/story.selectors */ "./src/app/newspaper/ngrx/story.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../story-list/story-list.component */ "./src/app/newspaper/story-list/story-list.component.ts");







class UpdatePostsComponent {
    constructor(store) {
        this.store = store;
        this.stories = [];
        this.story = "";
    }
    ngOnInit() {
        this.store.dispatch(Object(_ngrx_story_actions__WEBPACK_IMPORTED_MODULE_1__["getAllStories"])());
        this.store
            .select(_ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_2__["getAssignedStories"])
            .subscribe((data) => {
            this.stories = this.stories.concat(data);
        });
        this.store
            .select(_ngrx_story_selectors__WEBPACK_IMPORTED_MODULE_2__["getUnassignedStories"])
            .subscribe((data) => {
            this.stories = this.stories.concat(data);
        });
    }
    onSelectTopBanner($event) {
        this.story = JSON.stringify($event, null, 4);
    }
    updateJsonText($event) {
        this.story = $event.target.value;
    }
    savePost() {
        this.store.dispatch(Object(_ngrx_story_actions__WEBPACK_IMPORTED_MODULE_1__["updateStoryJson"])(JSON.parse(this.story)));
    }
}
UpdatePostsComponent.ɵfac = function UpdatePostsComponent_Factory(t) { return new (t || UpdatePostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
UpdatePostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdatePostsComponent, selectors: [["app-update-posts"]], decls: 8, vars: 2, consts: [[1, "row"], [1, "col-8"], ["mat-button", "", 1, "col-2", 3, "click"], [1, "col-2"], ["Title", "Available Stories", 1, "col-4", 3, "Stories", "SelectedPost"], ["rows", "20", 1, "col-6", 3, "value", "change"]], template: function UpdatePostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatePostsComponent_Template_button_click_2_listener() { return ctx.savePost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-story-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("SelectedPost", function UpdatePostsComponent_Template_app_story_list_SelectedPost_6_listener($event) { return ctx.onSelectTopBanner($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatePostsComponent_Template_textarea_change_7_listener($event) { return ctx.updateJsonText($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Stories", ctx.stories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.story);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_5__["StoryListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3NwYXBlci91cGRhdGUtcG9zdHMvdXBkYXRlLXBvc3RzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatePostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-posts',
                templateUrl: './update-posts.component.html',
                styleUrls: ['./update-posts.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/showcase/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/showcase/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_sc_toolbar_sc_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/sc-toolbar/sc-toolbar.component */ "./src/app/components/sc-toolbar/sc-toolbar.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function HomeComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", page_r1.path)("active", _r2.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", page_r1.label, " ");
} }
class HomeComponent {
    constructor() {
        this.pages = [{
                path: 'blog',
                label: "Blog"
            },
            {
                path: 'books',
                label: "Books"
            },
            {
                path: 'applications',
                label: 'Applications'
            },
            {
                path: 'about',
                label: "About Me!"
            }];
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 1, consts: [[1, "fixed-header"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], [1, "root-node"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sc-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_a_3_Template, 3, 3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
    } }, directives: [_components_sc_toolbar_sc_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ScToolbarComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: [".root-node[_ngcontent-%COMP%]{\n    margin: 110px 10px auto 10px;\n    position: relative;\n}\n\nnav[_ngcontent-%COMP%]{\n    margin: 0px 0px 0px 0px;\n}\n\n.fixed-header[_ngcontent-%COMP%] {\n    top: 0;\n    background-color: white;\n    position: fixed;\n    width: 100%;\n    z-index:999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2UvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksTUFBTTtJQUNOLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3Qtbm9kZXtcbiAgICBtYXJnaW46IDExMHB4IDEwcHggYXV0byAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxubmF2e1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xufVxuXG4uZml4ZWQtaGVhZGVyIHtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6OTk5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/showcase/pages/about/about.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/showcase/pages/about/about.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");




class AboutComponent {
    constructor() {
        this.color1 = "skyblue";
        this.color2 = "#F4EAE8";
        this.color3 = "lightpink";
        this.color4 = "lightgreen";
        this.color5 = "#FEBDB0";
        this.introParagraph = "<i>I've</i> been in software development for over 17 years." +
            "<br />I'm a three-time Microsoft MVP and the author of a two books, and several technology articles from Dot Net Curry and DNC magazine." +
            "I hold a master's degree in software systems from the University of St. Thomas, Minneapolis and St. Paul, USA.";
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 59, vars: 22, consts: [[1, "row"], [1, "col-md-5", "col-lg-3"], ["mat-card-image", "", "src", "assets/profile-pic.jpg", "alt", "profile picture", 1, "book-image"], [1, "col-md-6", "col-lg-8"], [1, "d-none", "d-lg-block"], ["cols", "3", "rowHeight", "220px"], ["colspan", "2"], [3, "innerHtml"], ["href", "https://www.linkedin.com/in/keertikotaru/", "target", "__blank"], ["src", "assets/Linkedin.png", "alt", "LinkedIn logo", 1, "img-logo"], [1, "link"], ["href", "https://twitter.com/keertikotaru", "target", "__blank"], ["src", "assets/twitter.png", "alt", "LinkedIn logo", 1, "img-logo"], ["href", "https://github.com/kvkirthy/", "target", "__blank"], ["src", "assets/github.png", "alt", "LinkedIn logo", 1, "img-logo"], ["href", "https://stackoverflow.com/users/2955455/vencki", "target", "__blank"], ["src", "assets/stackoverflow.png", "alt", "LinkedIn logo", 1, "img-logo"], [1, "d-lg-none", "d-sm-block"], ["cols", "1", "rowHeight", "240px", 1, "single-item"], ["cols", "1", "rowHeight", "120px", "gutterSize", "5px"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Venkata Keerti Kotaru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Author, Three time Microsoft MVP and a blogger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-grid-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " View LinkedIn Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Follow on Twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Github Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Stackoverflow Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-grid-list", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-grid-list", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " View LinkedIn Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Follow on Twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Github Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Stackoverflow Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.introParagraph, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.introParagraph, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color4);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"]], styles: ["div[_ngcontent-%COMP%]{\n    margin: 30px 1px 1px 5px;\n  }\n\n  mat-card[_ngcontent-%COMP%]{\n    width: 100%;\n    border-radius: 10px;\n  }\n\n  .img-logo[_ngcontent-%COMP%]{\n  width: 40px;\n}\n\n  .link[_ngcontent-%COMP%]{\n  font-size: 10pt;\n  font-weight: bold;\n}\n\n  a[_ngcontent-%COMP%]{\n  color: black;\n}\n\n  mat-grid-tile[_ngcontent-%COMP%]{\n  border-radius: 5px;\n}\n\n  span[_ngcontent-%COMP%]{\n  margin: 15px;\n  font-family: \"Book Antiqua\"\n}\n\n  i[_ngcontent-%COMP%]{\n  font-size: 24pt\n}\n\n  mat-grid-list.single-item[_ngcontent-%COMP%]{\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2UvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUY7RUFDRSxXQUFXO0FBQ2I7O0VBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0UsWUFBWTtBQUNkOztFQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsWUFBWTtFQUNaO0FBQ0Y7O0VBRUE7RUFDRTtBQUNGOztFQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2UvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgICBtYXJnaW46IDMwcHggMXB4IDFweCA1cHg7XG4gIH1cblxuICBtYXQtY2FyZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbi5pbWctbG9nb3tcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5saW5re1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5he1xuICBjb2xvcjogYmxhY2s7XG59XG5cbm1hdC1ncmlkLXRpbGV7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuc3BhbntcbiAgbWFyZ2luOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJCb29rIEFudGlxdWFcIlxufVxuXG5pe1xuICBmb250LXNpemU6IDI0cHRcbn1cblxubWF0LWdyaWQtbGlzdC5zaW5nbGUtaXRlbXtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/showcase/pages/applications/applications.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/pages/applications/applications.component.ts ***!
  \***********************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class ApplicationsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApplicationsComponent.ɵfac = function ApplicationsComponent_Factory(t) { return new (t || ApplicationsComponent)(); };
ApplicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationsComponent, selectors: [["app-applications"]], decls: 13, vars: 0, consts: [[1, "row"], [1, "col-xs-12", "col-md-6"], ["src", "/assets/covid-asset.png", "mat-card-image", "", "alt", ""], ["mat-button", "", "color", "primary", "href", "https://github.com/kvkirthy/covid-sample/tree/develop", "target", "app"], ["mat-button", "", "color", "primary", "href", "https://kvkirthy.github.io/covid-sample/", "target", "app"]], template: function ApplicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " COVID India Visualization ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Bubble chart shows COVID data for all the states. Allows filter through and zoom in. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Launch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardFooter"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]], styles: [".row[_ngcontent-%COMP%] {\n    margin: 1% 1% 1% 1%;\n    padding-top: 3%\n}\n\nmat-card-footer[_ngcontent-%COMP%] {\n    text-align: right;\n    padding-right: 5%;\n    padding-bottom: 2%;\n}\n\na[_ngcontent-%COMP%] {\n    padding-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2UvcGFnZXMvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL3BhZ2VzL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xuICAgIG1hcmdpbjogMSUgMSUgMSUgMSU7XG4gICAgcGFkZGluZy10b3A6IDMlXG59XG5cbm1hdC1jYXJkLWZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xufVxuXG5hIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-applications',
                templateUrl: './applications.component.html',
                styleUrls: ['./applications.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/showcase/pages/blogs/blogs.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/showcase/pages/blogs/blogs.component.ts ***!
  \*********************************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _blogs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blogs.service */ "./src/app/showcase/pages/blogs/blogs.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");








function BlogsComponent_div_1_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogsComponent_div_1_mat_chip_4_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const tag_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.onChipSelected(tag_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx_r7.selectedTag[tag_r8]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tag_r8, " ");
} }
function BlogsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-chip-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-chip", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogsComponent_div_1_Template_mat_chip_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onChipSelected("all"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BlogsComponent_div_1_mat_chip_4_Template, 2, 2, "mat-chip", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx_r0.selectedTag["all"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.desktopTags);
} }
function BlogsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogsComponent_div_3_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.cardClickHandler(ctx_r13.highlightedBlog.linkToBlog); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "fiber_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.highlightedBlog.bannerImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.highlightedBlog.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.formatDate(ctx_r1.highlightedBlog.dateAdded));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.highlightedBlog.description);
} }
function BlogsComponent_ng_container_6_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogsComponent_ng_container_6_mat_card_2_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const blog_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.cardClickHandler(blog_r15.linkToBlog); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", blog_r15.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", blog_r15.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r17.formatDate(blog_r15.dateAdded), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blog_r15.description);
} }
function BlogsComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BlogsComponent_ng_container_6_mat_card_2_Template, 10, 4, "mat-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r16 < 4);
} }
function BlogsComponent_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogsComponent_ng_container_9_div_1_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const blog_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.cardClickHandler(blog_r22.linkToBlog); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", blog_r22.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", blog_r22.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blog_r22.description);
} }
function BlogsComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BlogsComponent_ng_container_9_div_1_Template, 8, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r23 >= 4);
} }
function BlogsComponent_div_12_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogsComponent_div_12_mat_chip_4_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const tag_r30 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r31.onChipSelected(tag_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx_r29.selectedTag[tag_r30]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tag_r30, " ");
} }
function BlogsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-chip-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-chip", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogsComponent_div_12_Template_mat_chip_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.onChipSelected("all"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BlogsComponent_div_12_mat_chip_4_Template, 2, 2, "mat-chip", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx_r4.selectedTag["all"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.mobileTags);
} }
function BlogsComponent_div_14_mat_card_subtitle_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r35.formatDate(ctx_r35.highlightedBlog.dateAdded), " ");
} }
function BlogsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogsComponent_div_14_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.cardClickHandler(ctx_r36.highlightedBlog.linkToBlog); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "fiber_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BlogsComponent_div_14_mat_card_subtitle_8_Template, 2, 1, "mat-card-subtitle", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r5.highlightedBlog.bannerImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r5.highlightedBlog.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.highlightedBlog.dateAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.highlightedBlog.description);
} }
function BlogsComponent_ng_container_17_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r39.formatDate(blog_r38.dateAdded), " ");
} }
function BlogsComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogsComponent_ng_container_17_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const blog_r38 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.cardClickHandler(blog_r38.linkToBlog); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BlogsComponent_ng_container_17_div_7_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const blog_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", blog_r38.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", blog_r38.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", blog_r38.dateAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blog_r38.description);
} }
class BlogsComponent {
    constructor(blogService) {
        this.blogService = blogService;
        this.tags = [];
        this.mobileTags = [];
        this.desktopTags = [];
        this.selectedTag = {
            all: true
        };
        this.allBlogs = [];
    }
    ngOnInit() {
        let allBlogs = [];
        this.blogService
            .getBlogs()
            .subscribe(data => {
            allBlogs = data.sort((a, b) => (a.dateAdded && b.dateAdded) ? a.dateAdded.localeCompare(b.dateAdded) : 0);
            allBlogs = allBlogs.reverse();
            this.highlightedBlog = allBlogs.find(i => i.isHighlighted);
            if (!!!this.highlightedBlog) {
                allBlogs[0].isHighlighted = true;
                this.highlightedBlog = allBlogs[0];
            }
            this.blogList$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(allBlogs.filter(i => !i.isHighlighted));
            this.allBlogs = allBlogs;
            const extractTagsFromBlogs = () => {
                allBlogs.map((i) => {
                    if (i.tags) {
                        this.tags = this.tags.concat(i.tags);
                    }
                });
                this.tags = [...new Set(this.tags)]; // tags are unique now
            };
            extractTagsFromBlogs();
            this.willSetupTagsByScreenSize();
        });
    }
    willSetupTagsByScreenSize() {
        this.desktopTags = this.tags.slice(0, 8);
        this.mobileTags = this.tags.slice(0, 2);
        this.mobileTags.push("More...");
        this.desktopTags.push("More...");
    }
    onChipSelected(value) {
        this.selectedTag = {
            [value]: true
        };
        if (value === 'all') {
            this.highlightedBlog = this.allBlogs.find(i => i.isHighlighted);
            this.blogList$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.allBlogs.filter(i => !i.isHighlighted));
            return;
        }
        if (value === 'More...') {
            this.mobileTags = this.desktopTags = this.tags;
            if (this.mobileTags.indexOf("Less") < 0) {
                this.mobileTags.push("Less");
            }
            if (this.desktopTags.indexOf("Less") < 0) {
                this.desktopTags.push("Less");
            }
            this.selectedTag = {
                all: true
            };
            return;
        }
        if (value === "Less") {
            this.willSetupTagsByScreenSize();
            this.selectedTag = {
                all: true
            };
            return;
        }
        this.highlightedBlog = this.allBlogs.find(i => { var _a; return i.isHighlighted && ((_a = i === null || i === void 0 ? void 0 : i.tags) === null || _a === void 0 ? void 0 : _a.includes(value)); });
        this.blogList$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.allBlogs.filter(i => { var _a; return !i.isHighlighted && ((_a = i === null || i === void 0 ? void 0 : i.tags) === null || _a === void 0 ? void 0 : _a.includes(value)); }));
    }
    cardClickHandler(linkToBlog) {
        window.open(linkToBlog, "__blog");
    }
    formatDate(dateValue) {
        let d = new Date(dateValue);
        return d.toDateString();
    }
}
BlogsComponent.ɵfac = function BlogsComponent_Factory(t) { return new (t || BlogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_blogs_service__WEBPACK_IMPORTED_MODULE_2__["BlogsService"])); };
BlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BlogsComponent, selectors: [["app-blogs"]], decls: 19, vars: 13, consts: [[1, "d-none", "d-lg-block"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-sm-4 primary-card", 4, "ngIf"], [1, "col-sm-8"], [4, "ngFor", "ngForOf"], [1, "d-xs-block", "d-lg-none"], ["class", "col-sm-10", 4, "ngIf"], [1, "col-md-10"], [1, "col-12", "tag-bar"], ["color", "primary", 3, "selected", "click"], ["color", "primary", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "col-sm-4", "primary-card"], [3, "click"], ["mat-card-image", "", 3, "src"], ["color", "accent"], [1, "col-md-6", "small-cards-recent"], [3, "click", 4, "ngIf"], ["mat-card-avatar", "", 3, "src"], ["class", "col-sm-4 small-cards", 4, "ngIf"], [1, "col-sm-4", "small-cards"], [1, "col-sm-10"], [4, "ngIf"], ["mat-card-avatar", "", 1, "avatar", 3, "src"]], template: function BlogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BlogsComponent_div_1_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BlogsComponent_div_3_Template, 13, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BlogsComponent_ng_container_6_Template, 3, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BlogsComponent_ng_container_9_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BlogsComponent_div_12_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BlogsComponent_div_14_Template, 11, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BlogsComponent_ng_container_17_Template, 10, 4, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.desktopTags.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.highlightedBlog);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, ctx.blogList$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 9, ctx.blogList$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobileTags.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.highlightedBlog);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 11, ctx.blogList$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".d-lg-block[_ngcontent-%COMP%] {\n    margin-left: 15px;\n    margin-right: 15px;\n}\n\n.small-banner[_ngcontent-%COMP%] {\n    max-height: 125px;\n    max-width: auto;\n    width: auto;\n}\n\n.dark[_ngcontent-%COMP%] {\n    color: lightslategray;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 10px;\n    margin-top: 20px;\n    max-width: 500px;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n    margin-left: -18px;\n}\n\n.small-cards-recent[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    min-height: 205px;\n    height: 95%;\n}\n\n.small-cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    min-height: 200px;\n    height: 95%;\n}\n\nmat-card[_ngcontent-%COMP%]   img.card-image[_ngcontent-%COMP%] {\n    min-height: 286px;\n}\n\n.small-cards-recent[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    padding-top: 15px;\n}\n\n\n\n.avatar[_ngcontent-%COMP%] {\n    margin-bottom: 7px;\n}\n\n.link[_ngcontent-%COMP%] {\n    font-size: 10pt;\n    font-weight: bold;\n}\n\na[_ngcontent-%COMP%] {\n    color: black;\n}\n\n.tag-bar[_ngcontent-%COMP%]{\n    padding-top: 1em;\n    font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2UvcGFnZXMvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUdBOztHQUVHOztBQUVIO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2UvcGFnZXMvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWxnLWJsb2NrIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5zbWFsbC1iYW5uZXIge1xuICAgIG1heC1oZWlnaHQ6IDEyNXB4O1xuICAgIG1heC13aWR0aDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbn1cblxuLmRhcmsge1xuICAgIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcbn1cblxubWF0LWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG5tYXQtY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xufVxuXG4uc21hbGwtY2FyZHMtcmVjZW50IG1hdC1jYXJkIHtcbiAgICBtaW4taGVpZ2h0OiAyMDVweDtcbiAgICBoZWlnaHQ6IDk1JTtcbn1cblxuLnNtYWxsLWNhcmRzIG1hdC1jYXJkIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBoZWlnaHQ6IDk1JTtcbn1cblxubWF0LWNhcmQgaW1nLmNhcmQtaW1hZ2Uge1xuICAgIG1pbi1oZWlnaHQ6IDI4NnB4O1xufVxuIFxuLnNtYWxsLWNhcmRzLXJlY2VudCBtYXQtY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuXG4vKiAuaW1nLWxvZ28ge1xuICAgIHdpZHRoOiA0MHB4O1xufSAqL1xuXG4uYXZhdGFyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbi5saW5rIHtcbiAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmEge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnRhZy1iYXJ7XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-blogs',
                templateUrl: './blogs.component.html',
                styleUrls: ['./blogs.component.css']
            }]
    }], function () { return [{ type: _blogs_service__WEBPACK_IMPORTED_MODULE_2__["BlogsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/showcase/pages/blogs/blogs.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/showcase/pages/blogs/blogs.service.ts ***!
  \*******************************************************/
/*! exports provided: BlogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsService", function() { return BlogsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class BlogsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getBlogs() {
        return this.httpClient
            .get('/blog-posts');
    }
    getAllAvatars() {
        return this.httpClient
            .get('/storage/avatars');
    }
    getAllBanners() {
        return this.httpClient
            .get('/storage');
    }
    create(blog) {
        return this.httpClient.post('/blog-posts', blog);
    }
}
BlogsService.ɵfac = function BlogsService_Factory(t) { return new (t || BlogsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BlogsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogsService, factory: BlogsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/showcase/pages/books/books.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/showcase/pages/books/books.component.ts ***!
  \*********************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class BooksComponent {
    constructor() { }
    ngOnInit() {
    }
}
BooksComponent.ɵfac = function BooksComponent_Factory(t) { return new (t || BooksComponent)(); };
BooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BooksComponent, selectors: [["app-books"]], decls: 23, vars: 0, consts: [[1, "row"], [1, "col-md-3"], [1, "col-md-3", "col-sm-12"], ["mat-card-image", "", "src", "assets/book-2.jpg", "alt", "Angular 2 book", 1, "book-image"], [1, "small-text"], ["mat-button", "", "href", "https://www.apress.com/us/book/9781484254332", "target", "__blank", "color", "primary"], ["mat-button", "", "href", "https://www.amazon.com/Angular-Material-Design-TypeScript-Interface/dp/1484254333/ref=sr_1_3?keywords=angular+material&qid=1578191826&sr=8-3", "target", "__blank", "color", "primary"], ["mat-button", "", "href", "https://github.com/kvkirthy/superheroes", "target", "__blank", "color", "primary"], ["mat-card-image", "", "src", "assets/book-1.jpg", "alt", "Angular 2 book", 1, "book-image"], ["mat-button", "", "href", "https://www.apress.com/us/book/9781484221891", "target", "__blank", "color", "primary"], ["mat-button", "", "href", "https://www.amazon.com/dp/B01L17B8LK/ref=rdr_kindle_ext_tmb", "target", "__blank", "color", "primary"], ["mat-button", "", "href", "https://github.com/kvkirthy/Angular-Material-Samples", "target", "__blank", "color", "primary"]], template: function BooksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Apress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Amazon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Samples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Apress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Amazon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Samples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]], styles: [".col-6[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{\n  width: 309px;\n}\n\n.col-md-6[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{\n  width: 200px;\n  margin-top: 10px;\n}\n\nmat-card[_ngcontent-%COMP%]{\n  margin-top: 10px;\n}\n\nmat-card-actions[_ngcontent-%COMP%]{\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%]{\n  padding: 2px;\n}\n\n.col-6[_ngcontent-%COMP%]   .book-image[_ngcontent-%COMP%] {\n  height: 440px;\n  width: auto;\n}\n\n.col-md-6[_ngcontent-%COMP%]   .book-image[_ngcontent-%COMP%] {\n  height: 287px;\n  width: auto;\n}\n\n.row[_ngcontent-%COMP%]{\n  margin-top: 10px;\n  margin-left: 1px;\n  padding-top: 10px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2UvcGFnZXMvYm9va3MvYm9va3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL3BhZ2VzL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLTYgbWF0LWNhcmR7XG4gIHdpZHRoOiAzMDlweDtcbn1cblxuLmNvbC1tZC02IG1hdC1jYXJke1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5tYXQtY2FyZHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxubWF0LWNhcmQtYWN0aW9uc3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b257XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmNvbC02IC5ib29rLWltYWdlIHtcbiAgaGVpZ2h0OiA0NDBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5jb2wtbWQtNiAuYm9vay1pbWFnZSB7XG4gIGhlaWdodDogMjg3cHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ucm93e1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-books',
                templateUrl: './books.component.html',
                styleUrls: ['./books.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/showcase/pages/create-blog/create-blog.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/pages/create-blog/create-blog.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBlogComponent", function() { return CreateBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_showcase_pages_blogs_blogs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/showcase/pages/blogs/blogs.service */ "./src/app/showcase/pages/blogs/blogs.service.ts");
/* harmony import */ var src_app_components_alert_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/alert-helper.service */ "./src/app/components/alert-helper.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function CreateBlogComponent_mat_radio_button_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const av_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", av_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", av_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", av_r2);
} }
function CreateBlogComponent_mat_radio_button_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bn_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bn_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", bn_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", bn_r3);
} }
class CreateBlogComponent {
    constructor(blogSvc, formBuilder, alertHelper) {
        this.blogSvc = blogSvc;
        this.formBuilder = formBuilder;
        this.alertHelper = alertHelper;
        this.avatars = [];
        this.banners = [];
        this.createPostFormGroup = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            story: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            avatar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bannerImage: [''],
            linkToPost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/https?:\/\/(.*)/gi)]]
        });
    }
    ngOnInit() {
        this.blogSvc
            .getAllAvatars()
            .subscribe(re => {
            this.avatars = re;
            this.blogSvc
                .getAllBanners()
                .subscribe(re => this.banners = re);
        });
    }
    get title() {
        return this.createPostFormGroup.get('title');
    }
    get story() {
        return this.createPostFormGroup.get('story');
    }
    get avatar() {
        return this.createPostFormGroup.get('avatar');
    }
    get bannerImage() {
        return this.createPostFormGroup.get('bannerImage');
    }
    get linkToPostValue() {
        let value = this.createPostFormGroup.get('linkToPost').value;
        return value;
    }
    submit() {
        if (this.createPostFormGroup.valid) {
            this.blogSvc.create({
                title: this.title.value,
                description: this.story.value,
                imageUrl: this.avatar.value,
                linkToBlog: this.linkToPostValue,
                bannerImage: this.bannerImage.value,
                dateAdded: new Date().toISOString()
            }).subscribe((result) => {
                if (result['_id']) {
                    this.reset();
                    this.alertHelper.showAlertWithClose("Thank you for your contribution.");
                }
                else {
                    this.alertHelper.showAlertWithClose("Something wrong! Post not created");
                }
            }, error => this.alertHelper.showAlertWithClose(`Something wrong! ${JSON.stringify(error)}`));
        }
        else {
            this.alertHelper.showAlertWithClose("Please provide correct values for the post");
        }
    }
    cancel() {
        this.reset();
    }
    reset() {
        this.createPostFormGroup.reset();
        Object.keys(this.createPostFormGroup.controls).forEach(key => {
            this.createPostFormGroup.controls[key].setErrors(null);
        });
    }
}
CreateBlogComponent.ɵfac = function CreateBlogComponent_Factory(t) { return new (t || CreateBlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_showcase_pages_blogs_blogs_service__WEBPACK_IMPORTED_MODULE_2__["BlogsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_alert_helper_service__WEBPACK_IMPORTED_MODULE_3__["AlertHelperService"])); };
CreateBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateBlogComponent, selectors: [["app-create-blog"]], decls: 39, vars: 3, consts: [[1, "row", 3, "formGroup"], [1, "col-sm-1", "col-md-3"], [1, "col-xs-12", "col-sm-10", "col-md-6"], [1, "row"], ["id", "title", "name", "title", 1, "col-12"], ["type", "text", "formControlName", "title", "matInput", ""], ["id", "description", "name", "description", 1, "col-12"], ["matInput", "", "formControlName", "story", "rows", "10"], ["id", "url", "name", "url", 1, "col-12"], ["type", "url", "formControlName", "linkToPost", "matInput", ""], ["for", "avatar", 1, "radio-label"], ["formControlName", "avatar", 1, "col-12"], ["checked", "false", 3, "value", 4, "ngFor", "ngForOf"], ["for", "banners", 1, "radio-label"], ["formControlName", "bannerImage", 1, "col-12"], [1, "row", "actions-row"], ["type", "submit", "mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"], ["checked", "false", 3, "value"], [1, "avatar", 3, "src", "alt"], [1, "banner-preview", 3, "src", "alt"]], template: function CreateBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create A New Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Provide a title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Detailed Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Tell us your story! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Link to the post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Select Avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-radio-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CreateBlogComponent_mat_radio_button_28_Template, 2, 3, "mat-radio-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Select Banners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-radio-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CreateBlogComponent_mat_radio_button_32_Template, 2, 3, "mat-radio-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateBlogComponent_Template_button_click_34_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateBlogComponent_Template_button_click_36_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createPostFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.avatars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.banners);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    width: 160px;\n    text-align: center;\n}\n\nimg.avatar[_ngcontent-%COMP%] {\n    width: 40px;\n}\n\nimg.banner-preview[_ngcontent-%COMP%] {\n    width: 80px\n}\n\n.radio-label[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-top: 15px;\n    font-size: 10pt;\n    color: grey;\n}\n\nmat-radio-button[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    margin-left: 10px;\n}\n\nform[_ngcontent-%COMP%] {\n    padding-top: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2UvcGFnZXMvY3JlYXRlLWJsb2cvY3JlYXRlLWJsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0VBQXNFO0lBQ3RFLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9wYWdlcy9jcmVhdGUtYmxvZy9jcmVhdGUtYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZy5hdmF0YXIge1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG5pbWcuYmFubmVyLXByZXZpZXcge1xuICAgIHdpZHRoOiA4MHB4XG59XG5cbi5yYWRpby1sYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5mb3JtIHtcbiAgICBwYWRkaW5nLXRvcDogMSU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateBlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-blog',
                templateUrl: './create-blog.component.html',
                styleUrls: ['./create-blog.component.css']
            }]
    }], function () { return [{ type: src_app_showcase_pages_blogs_blogs_service__WEBPACK_IMPORTED_MODULE_2__["BlogsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_components_alert_helper_service__WEBPACK_IMPORTED_MODULE_3__["AlertHelperService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/showcase/pages/opinion/opinion.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/showcase/pages/opinion/opinion.component.ts ***!
  \*************************************************************/
/*! exports provided: OpinionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpinionComponent", function() { return OpinionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OpinionComponent {
    constructor() {
        this.twttr = window['twttr'] || {};
    }
    ngOnInit() {
        this.twttr && this.twttr.widgets.load();
    }
}
OpinionComponent.ɵfac = function OpinionComponent_Factory(t) { return new (t || OpinionComponent)(); };
OpinionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpinionComponent, selectors: [["app-opinion"]], decls: 0, vars: 0, template: function OpinionComponent_Template(rf, ctx) { }, styles: ["div[_ngcontent-%COMP%]{\n  margin: 20px 1px 1px 15px;\n}\n\nmat-card[_ngcontent-%COMP%]{\n  width: 280px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2UvcGFnZXMvb3Bpbmlvbi9vcGluaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9wYWdlcy9vcGluaW9uL29waW5pb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgbWFyZ2luOiAyMHB4IDFweCAxcHggMTVweDtcbn1cblxubWF0LWNhcmR7XG4gIHdpZHRoOiAyODBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpinionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-opinion',
                templateUrl: './opinion.component.html',
                styleUrls: ['./opinion.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/showcase/showcase-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/showcase/showcase-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: pages, ShowcaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseRoutingModule", function() { return ShowcaseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/showcase/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/showcase/pages/about/about.component.ts");
/* harmony import */ var _pages_books_books_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/books/books.component */ "./src/app/showcase/pages/books/books.component.ts");
/* harmony import */ var _pages_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/blogs/blogs.component */ "./src/app/showcase/pages/blogs/blogs.component.ts");
/* harmony import */ var _pages_create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/create-blog/create-blog.component */ "./src/app/showcase/pages/create-blog/create-blog.component.ts");
/* harmony import */ var _pages_applications_applications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/applications/applications.component */ "./src/app/showcase/pages/applications/applications.component.ts");










// import { HomeComponent } from './pages/home/home.component';
// import { OpinionComponent } from './pages/opinion/opinion.component';
const pages = [
    {
        path: 'showcase',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        children: [
            {
                path: 'blog',
                component: _pages_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__["BlogsComponent"],
                label: "Blog"
            },
            {
                path: 'create-blog',
                component: _pages_create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_6__["CreateBlogComponent"],
                label: "Create Blog"
            },
            {
                path: 'books',
                component: _pages_books_books_component__WEBPACK_IMPORTED_MODULE_4__["BooksComponent"],
                label: "Books"
            },
            {
                path: 'applications',
                component: _pages_applications_applications_component__WEBPACK_IMPORTED_MODULE_7__["ApplicationsComponent"],
                label: "Applications"
            },
            {
                path: 'about',
                component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                label: "About Me!"
            }
        ]
    }
];
const routes = [
    {
        path: 'showcase',
        redirectTo: '/showcase/blog',
        pathMatch: 'full'
    },
    ...pages,
];
class ShowcaseRoutingModule {
}
ShowcaseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShowcaseRoutingModule });
ShowcaseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShowcaseRoutingModule_Factory(t) { return new (t || ShowcaseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowcaseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/showcase/showcase.module.ts":
/*!*********************************************!*\
  !*** ./src/app/showcase/showcase.module.ts ***!
  \*********************************************/
/*! exports provided: ShowcaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseModule", function() { return ShowcaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/showcase/home/home.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/showcase/pages/about/about.component.ts");
/* harmony import */ var _pages_books_books_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/books/books.component */ "./src/app/showcase/pages/books/books.component.ts");
/* harmony import */ var _pages_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/blogs/blogs.component */ "./src/app/showcase/pages/blogs/blogs.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _showcase_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./showcase-routing.module */ "./src/app/showcase/showcase-routing.module.ts");
/* harmony import */ var _pages_opinion_opinion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/opinion/opinion.component */ "./src/app/showcase/pages/opinion/opinion.component.ts");
/* harmony import */ var _pages_create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/create-blog/create-blog.component */ "./src/app/showcase/pages/create-blog/create-blog.component.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _components_sc_toolbar_sc_toolbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/sc-toolbar/sc-toolbar.component */ "./src/app/components/sc-toolbar/sc-toolbar.component.ts");
/* harmony import */ var _pages_applications_applications_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/applications/applications.component */ "./src/app/showcase/pages/applications/applications.component.ts");























class ShowcaseModule {
}
ShowcaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShowcaseModule });
ShowcaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShowcaseModule_Factory(t) { return new (t || ShowcaseModule)(); }, providers: [{
            provide: _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MAT_CHIPS_DEFAULT_OPTIONS"],
            useValue: {
                separatorKeyCodes: []
            }
        }], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _showcase_routing_module__WEBPACK_IMPORTED_MODULE_16__["ShowcaseRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowcaseModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _pages_books_books_component__WEBPACK_IMPORTED_MODULE_13__["BooksComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
        _pages_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_14__["BlogsComponent"],
        _pages_opinion_opinion_component__WEBPACK_IMPORTED_MODULE_17__["OpinionComponent"],
        _components_sc_toolbar_sc_toolbar_component__WEBPACK_IMPORTED_MODULE_20__["ScToolbarComponent"],
        _pages_create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_18__["CreateBlogComponent"],
        _pages_applications_applications_component__WEBPACK_IMPORTED_MODULE_21__["ApplicationsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _showcase_routing_module__WEBPACK_IMPORTED_MODULE_16__["ShowcaseRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    _pages_books_books_component__WEBPACK_IMPORTED_MODULE_13__["BooksComponent"],
                    _pages_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                    _pages_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_14__["BlogsComponent"],
                    _pages_opinion_opinion_component__WEBPACK_IMPORTED_MODULE_17__["OpinionComponent"],
                    _components_sc_toolbar_sc_toolbar_component__WEBPACK_IMPORTED_MODULE_20__["ScToolbarComponent"],
                    _pages_create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_18__["CreateBlogComponent"],
                    _pages_applications_applications_component__WEBPACK_IMPORTED_MODULE_21__["ApplicationsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _showcase_routing_module__WEBPACK_IMPORTED_MODULE_16__["ShowcaseRoutingModule"]
                ],
                providers: [{
                        provide: _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MAT_CHIPS_DEFAULT_OPTIONS"],
                        useValue: {
                            separatorKeyCodes: []
                        }
                    }]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/venkey/code/showcase/showcase/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map