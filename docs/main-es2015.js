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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fixed-header\">\r\n    <sc-toolbar></sc-toolbar>\r\n    <nav mat-tab-nav-bar>\r\n        <a mat-tab-link *ngFor=\"let page of pages\" [routerLink]=\"page.path\" routerLinkActive #rla=\"routerLinkActive\"\r\n            [active]=\"rla.isActive\">{{page.label}} </a>\r\n    </nav>\r\n</div>\r\n<div class=\"root-node\">\r\n    <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sc-toolbar/sc-toolbar.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sc-toolbar/sc-toolbar.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>SHOWCASE</mat-toolbar-row>\r\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/story-card/story-card.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/story-card/story-card.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a (click)=\"onCardClick()\">\n    <ng-container *ngIf=\"!xsMode\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <img class=\"regular\" [src]=\"imageUrl\">\n            </div>\n            <div class=\"col-sm-8 content\">\n                <div>\n                    <strong>{{title}}</strong>\n                </div>\n                <div>\n                    {{description}}\n                </div>\n    \n            </div>\n        </div>\n    </ng-container>\n\n    <ng-container  *ngIf=\"xsMode\">\n        <div class=\"row\">\n            <div class=\"col-xs-2\">\n                <img class=\"xs\" [src]=\"imageUrl\">\n            </div>\n            <div class=\"col-xs-8 content\">\n                <strong>{{title}}</strong>\n            </div>\n        </div>\n        <div class=\"row\">\n                {{description}}\n        </div>\n    </ng-container>\n</a>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n\r\n    <div class=\"col-md-5 col-lg-3\">\r\n        <mat-card>\r\n            <img mat-card-image src=\"assets/profile-pic.jpg\" class=\"book-image\" alt=\"profile picture\">\r\n\r\n            <mat-card-header>\r\n                <mat-card-title>Venkata Keerti Kotaru</mat-card-title>\r\n                <mat-card-subtitle>Author, Three time Microsoft MVP and a blogger</mat-card-subtitle>\r\n            </mat-card-header>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"col-md-6 col-lg-8\">\r\n        <p class=\"d-none d-lg-block\">\r\n            <mat-grid-list cols=\"3\" rowHeight=\"220px\">\r\n                <mat-grid-tile colspan=\"2\" [style.background]=\"color5\">\r\n                    <span [innerHtml]=\"introParagraph\"></span>\r\n                </mat-grid-tile>\r\n                <a href=\"https://www.linkedin.com/in/keertikotaru/\" target=\"__blank\">\r\n                    <mat-grid-tile [style.background]=\"color1\">\r\n                        <img src=\"assets/Linkedin.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\r\n                        <div class=\"link\">\r\n                            View LinkedIn Profile\r\n                        </div>\r\n                    </mat-grid-tile>\r\n                </a>\r\n                <a href=\"https://twitter.com/keertikotaru\" target=\"__blank\">\r\n                    <mat-grid-tile [style.background]=\"color2\">\r\n                        <img src=\"assets/twitter.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\r\n                        <div class=\"link\">\r\n                            Follow on Twitter\r\n                        </div>\r\n                    </mat-grid-tile>\r\n                </a>\r\n                <a href=\"https://github.com/kvkirthy/\" target=\"__blank\">\r\n\r\n                    <mat-grid-tile [style.background]=\"color3\">\r\n                        <img src=\"assets/github.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\r\n                        <div class=\"link\">\r\n                            Github Profile\r\n                        </div>\r\n                    </mat-grid-tile>\r\n                </a>\r\n                <a href=\"https://stackoverflow.com/users/2955455/vencki\" target=\"__blank\">\r\n                    <mat-grid-tile [style.background]=\"color4\">\r\n                        <img src=\"assets/stackoverflow.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\r\n                        <div class=\"link\">\r\n                            Stackoverflow Profile\r\n                        </div>\r\n                    </mat-grid-tile>\r\n                </a>\r\n\r\n            </mat-grid-list>\r\n        </p>\r\n        <p class=\"d-lg-none d-sm-block\">\r\n            <mat-grid-list cols=\"1\" rowHeight=\"240px\" class=\"single-item\">\r\n                <mat-grid-tile [style.background]=\"color5\">\r\n                    <span [innerHtml]=\"introParagraph\"></span>\r\n                </mat-grid-tile>\r\n            </mat-grid-list>\r\n            <mat-grid-list cols=\"1\" rowHeight=\"120px\" gutterSize=\"5px\">\r\n                <a href=\"https://www.linkedin.com/in/keertikotaru/\" target=\"__blank\">\r\n                    <mat-grid-tile [style.background]=\"color1\">\r\n                        <img src=\"assets/Linkedin.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\r\n                        <div class=\"link\">\r\n                            View LinkedIn Profile\r\n                        </div>\r\n                    </mat-grid-tile>\r\n                </a>\r\n                <a href=\"https://twitter.com/keertikotaru\" target=\"__blank\">\r\n                    <mat-grid-tile [style.background]=\"color2\">\r\n                        <img src=\"assets/twitter.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\r\n                        <div class=\"link\">\r\n                            Follow on Twitter\r\n                        </div>\r\n                    </mat-grid-tile>\r\n                </a>\r\n                <a href=\"https://github.com/kvkirthy/\" target=\"__blank\">\r\n\r\n                    <mat-grid-tile [style.background]=\"color3\">\r\n                        <img src=\"assets/github.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\r\n                        <div class=\"link\">\r\n                            Github Profile\r\n                        </div>\r\n                    </mat-grid-tile>\r\n                </a>\r\n                <a href=\"https://stackoverflow.com/users/2955455/vencki\" target=\"__blank\">\r\n                    <mat-grid-tile [style.background]=\"color4\">\r\n                        <img src=\"assets/stackoverflow.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\r\n                        <div class=\"link\">\r\n                            Stackoverflow Profile\r\n                        </div>\r\n                    </mat-grid-tile>\r\n                </a>\r\n\r\n            </mat-grid-list>\r\n        </p>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blogs/blogs.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blogs/blogs.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-none d-lg-block\">\n    <div class=\"row\">\n        <div class=\"col-md-3\" *ngIf=\"highlightedBlog\">\n            <mat-card (click)=\"cardClickHandler(highlightedBlog.linkToBlog)\">\n                <img mat-card-image [src]=\"highlightedBlog.imageUrl\" >\n\n                <mat-card-header>\n                    <mat-card-title>{{highlightedBlog.title}} <mat-icon color=\"accent\">fiber_new</mat-icon>\n                    </mat-card-title>\n                </mat-card-header>\n                <mat-card-content>{{highlightedBlog.description}}</mat-card-content>\n            </mat-card>\n        </div>\n\n        <div class=\"col-md-4\">\n            <ng-container *ngFor=\"let blog of blogList$ | async; let i=index\">\n                <app-story-card *ngIf=\"i%2 === 0\" [title]=\"blog.title\" [description]=\"blog.description\"\n                    [imageUrl]=\"blog.imageUrl\" [linkUrl]=\"blog.linkToBlog\"></app-story-card>\n            </ng-container>\n        </div>\n        <div class=\"col-md-4\">\n            <ng-container *ngFor=\"let blog of blogList$ | async; let i=index\">\n                <app-story-card *ngIf=\"i%2 === 1\" [title]=\"blog.title\" [description]=\"blog.description\"\n                    [imageUrl]=\"blog.imageUrl\" [linkUrl]=\"blog.linkToBlog\"></app-story-card>\n            </ng-container>\n        </div>\n\n    </div>\n</div>\n<div class=\"d-xs-block d-lg-none\">\n    <div class=\"row\">\n        <div class=\"col-sm-10\" *ngIf=\"highlightedBlog\">\n            <mat-card (click)=\"cardClickHandler(highlightedBlog.linkToBlog)\">\n                <img mat-card-image [src]=\"highlightedBlog.imageUrl\" >\n\n                <mat-card-header>\n                    <mat-card-title>{{highlightedBlog.title}} <mat-icon color=\"accent\">fiber_new</mat-icon>\n                    </mat-card-title>\n                </mat-card-header>\n                <mat-card-content>{{highlightedBlog.description}}</mat-card-content>\n            </mat-card>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-10\">\n            <ng-container *ngFor=\"let blog of blogList$ | async;\">\n                <mat-card (click)=\"cardClickHandler(blog.linkToBlog)\">\n                    <mat-card-header>\n                        <img mat-card-avatar class=\"avatar\" [src]=\"blog.imageUrl\" >\n                        <mat-card-subtitle >{{blog.title}}</mat-card-subtitle>\n                    </mat-card-header>\n                    <mat-card-content>{{blog.description}}</mat-card-content>\n                </mat-card>\n                <!-- <app-story-card xsMode=\"true\" [title]=\"blog.title\" [description]=\"blog.description\"\n                    [imageUrl]=\"blog.imageUrl\" [linkUrl]=\"blog.linkToBlog\"></app-story-card> -->\n            </ng-container>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/books/books.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/books/books.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-3\"></div>\r\n  <div class=\"col-md-3 col-sm-12\">\r\n    <mat-card>\r\n      <img mat-card-image src=\"assets/book-2.jpg\" class=\"book-image\" alt=\"Angular 2 book\">\r\n      <!-- <mat-card-header> -->\r\n        <!-- <mat-card-subtitle>\r\n          Build Angular applications faster and better with TypeScript and Material Design.\r\n        </mat-card-subtitle>\r\n      </mat-card-header> -->\r\n\r\n      <mat-card-actions class=\"small-text\">\r\n        <a mat-button href=\"https://www.apress.com/us/book/9781484254332\" target=\"__blank\" color=\"primary\">Apress</a>\r\n        <a mat-button\r\n          href=\"https://www.amazon.com/Angular-Material-Design-TypeScript-Interface/dp/1484254333/ref=sr_1_3?keywords=angular+material&qid=1578191826&sr=8-3\"\r\n          target=\"__blank\" color=\"primary\">Amazon</a>\r\n        <a mat-button href=\"https://github.com/kvkirthy/superheroes\" target=\"__blank\" color=\"primary\">Samples</a>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-3 col-sm-12\">\r\n    <mat-card>\r\n      <img mat-card-image src=\"assets/book-1.jpg\" class=\"book-image\" alt=\"Angular 2 book\">\r\n      <!-- <mat-card-header>\r\n        <mat-card-subtitle>\r\n          Build applications with AngularJS (version 1.x) and Material Design. Uses Angular Material library.\r\n        </mat-card-subtitle>\r\n      </mat-card-header> -->\r\n      <mat-card-actions class=\"small-text\">\r\n        <a mat-button href=\"https://www.apress.com/us/book/9781484221891\" target=\"__blank\" color=\"primary\">Apress</a>\r\n        <a mat-button href=\"https://www.amazon.com/dp/B01L17B8LK/ref=rdr_kindle_ext_tmb\" target=\"__blank\"\r\n          color=\"primary\">Amazon</a>\r\n        <a mat-button href=\"https://github.com/kvkirthy/Angular-Material-Samples\" target=\"__blank\"\r\n          color=\"primary\">Samples</a>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"col-md-3\"></div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>error works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>home works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/opinion/opinion.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/opinion/opinion.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <a class=\"twitter-timeline\" href=\"https://twitter.com/KeertiKotaru?ref_src=twsrc%5Etfw\">Tweets by KeertiKotaru</a>\r\n    </div>\r\n</div> -->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: pages, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/error/error.component */ "./src/app/pages/error/error.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_books_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/books/books.component */ "./src/app/pages/books/books.component.ts");
/* harmony import */ var _pages_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/blogs/blogs.component */ "./src/app/pages/blogs/blogs.component.ts");







const pages = [
    {
        path: 'blog',
        component: _pages_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_6__["BlogsComponent"],
        label: "Blog"
    },
    {
        path: 'books',
        component: _pages_books_books_component__WEBPACK_IMPORTED_MODULE_5__["BooksComponent"],
        label: "Books"
    },
    {
        path: 'about',
        component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        label: "About Me!"
    }
];
const routes = [...pages,
    {
        path: '',
        redirectTo: '/blog',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".root-node{\r\n    margin: 110px 10px auto 10px;\r\n    position: relative;\r\n}\r\n\r\nnav{\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n.fixed-header {\r\n    top: 0;\r\n    background-color: white;\r\n    position: fixed;\r\n    width: 100%;\r\n    z-index:999;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksTUFBTTtJQUNOLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3Qtbm9kZXtcclxuICAgIG1hcmdpbjogMTEwcHggMTBweCBhdXRvIDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbm5hdntcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uZml4ZWQtaGVhZGVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4Ojk5OTtcclxufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.pages = _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["pages"];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_sc_toolbar_sc_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sc-toolbar/sc-toolbar.component */ "./src/app/components/sc-toolbar/sc-toolbar.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/error/error.component */ "./src/app/pages/error/error.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_books_books_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/books/books.component */ "./src/app/pages/books/books.component.ts");
/* harmony import */ var _pages_opinion_opinion_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/opinion/opinion.component */ "./src/app/pages/opinion/opinion.component.ts");
/* harmony import */ var _pages_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/blogs/blogs.component */ "./src/app/pages/blogs/blogs.component.ts");
/* harmony import */ var _components_story_card_story_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/story-card/story-card.component */ "./src/app/components/story-card/story-card.component.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_sc_toolbar_sc_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ScToolbarComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _pages_error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"],
            _pages_about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
            _pages_books_books_component__WEBPACK_IMPORTED_MODULE_17__["BooksComponent"],
            _pages_opinion_opinion_component__WEBPACK_IMPORTED_MODULE_18__["OpinionComponent"],
            _pages_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_19__["BlogsComponent"],
            _components_story_card_story_card_component__WEBPACK_IMPORTED_MODULE_20__["StoryCardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/sc-toolbar/sc-toolbar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/sc-toolbar/sc-toolbar.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-toolbar{\r\n    font-size: medium;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYy10b29sYmFyL3NjLXRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2MtdG9vbGJhci9zYy10b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhcntcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScToolbarComponent = class ScToolbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
ScToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sc-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sc-toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sc-toolbar/sc-toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sc-toolbar.component.css */ "./src/app/components/sc-toolbar/sc-toolbar.component.css")).default]
    })
], ScToolbarComponent);



/***/ }),

/***/ "./src/app/components/story-card/story-card.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/story-card/story-card.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.regular{\r\n    max-height: 100px;\r\n    max-width: 100px;\r\n}\r\n\r\nimg.xs{\r\n    max-height: 35px;\r\n    max-width: 35px;\r\n}\r\n\r\n.row {\r\n    margin-top: 15px;\r\n\r\n}\r\n\r\n.col-sm-4 {\r\n    text-align: right;\r\n}\r\n\r\n.col-xs-4 {\r\n    text-align: left;\r\n}\r\n\r\n.col-xs-8 {\r\n    text-align: right;\r\n    padding-left: 20px\r\n}\r\n\r\ndiv {\r\n    font-size: 10pt;\r\n}\r\n\r\n.content{\r\n    padding-top: 5px;\r\n}\r\n\r\na{\r\n    cursor:pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9yeS1jYXJkL3N0b3J5LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdG9yeS1jYXJkL3N0b3J5LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZy5yZWd1bGFye1xyXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG5pbWcueHN7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAzNXB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG59XHJcblxyXG4uY29sLXNtLTQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb2wteHMtNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY29sLXhzLTgge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHhcclxufVxyXG5cclxuZGl2IHtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG5he1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/story-card/story-card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/story-card/story-card.component.ts ***!
  \***************************************************************/
/*! exports provided: StoryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryCardComponent", function() { return StoryCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StoryCardComponent = class StoryCardComponent {
    constructor() {
        this.xsMode = false;
    }
    ngOnInit() {
    }
    onCardClick() {
        window.open(this.linkUrl, "__blog");
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StoryCardComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StoryCardComponent.prototype, "description", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StoryCardComponent.prototype, "imageUrl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StoryCardComponent.prototype, "linkUrl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StoryCardComponent.prototype, "xsMode", void 0);
StoryCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-story-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./story-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/story-card/story-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./story-card.component.css */ "./src/app/components/story-card/story-card.component.css")).default]
    })
], StoryCardComponent);



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    margin: 30px 1px 1px 5px;\r\n  }\r\n\r\n  mat-card{\r\n    width: 100%;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .img-logo{\r\n  width: 40px;\r\n}\r\n\r\n  .link{\r\n  font-size: 10pt;\r\n  font-weight: bold;\r\n}\r\n\r\n  a{\r\n  color: black;\r\n}\r\n\r\n  mat-grid-tile{\r\n  border-radius: 5px;\r\n}\r\n\r\n  span{\r\n  margin: 15px;\r\n  font-family: \"Book Antiqua\"\r\n}\r\n\r\n  i{\r\n  font-size: 24pt\r\n}\r\n\r\n  mat-grid-list.single-item{\r\n  margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUY7RUFDRSxXQUFXO0FBQ2I7O0VBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0UsWUFBWTtBQUNkOztFQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsWUFBWTtFQUNaO0FBQ0Y7O0VBRUE7RUFDRTtBQUNGOztFQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIG1hcmdpbjogMzBweCAxcHggMXB4IDVweDtcclxuICB9XHJcblxyXG4gIG1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbi5pbWctbG9nb3tcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLmxpbmt7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5he1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxubWF0LWdyaWQtdGlsZXtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJvb2sgQW50aXF1YVwiXHJcbn1cclxuXHJcbml7XHJcbiAgZm9udC1zaXplOiAyNHB0XHJcbn1cclxuXHJcbm1hdC1ncmlkLWxpc3Quc2luZ2xlLWl0ZW17XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
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
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/pages/blogs/blogs.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/blogs/blogs.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    margin: 1px 1px 1px 1px;\r\n  }\r\n\r\n  .small-banner{\r\n    max-height: 125px;\r\n    max-width: auto;\r\n    width: auto;\r\n  }\r\n\r\n  .dark {\r\n    color: lightslategray;\r\n  }\r\n\r\n  mat-card{\r\n    width: 100%;\r\n    border-radius: 10px;\r\n    margin-top: 20px;\r\n    max-width: 500px;\r\n  }\r\n\r\n  .img-logo{\r\n  width: 40px;\r\n}\r\n\r\n  .avatar {\r\n  margin-bottom: 7px;\r\n}\r\n\r\n  .link{\r\n  font-size: 10pt;\r\n  font-weight: bold;\r\n}\r\n\r\n  a{\r\n  color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztFQUVGO0VBQ0UsV0FBVztBQUNiOztFQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7RUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2dzL2Jsb2dzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICBtYXJnaW46IDFweCAxcHggMXB4IDFweDtcclxuICB9XHJcblxyXG4gIC5zbWFsbC1iYW5uZXJ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMjVweDtcclxuICAgIG1heC13aWR0aDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmRhcmsge1xyXG4gICAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG4uaW1nLWxvZ297XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG5cclxuLmxpbmt7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5he1xyXG4gIGNvbG9yOiBibGFjaztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/blogs/blogs.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/blogs/blogs.component.ts ***!
  \************************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let mockBlogResponse = [
    {
        title: "Memoization with Selectors in NgRx",
        description: "The prior article on Memoization in JavaScript discusses caching results of a long running JavaScript function. Majority of the functions that run in a browser finish fairly quickly, return in milliseconds. That begs the question, what are the real-world use cases for memoization in JavaScript? This article describes one such use case.",
        imageUrl: "https://miro.medium.com/max/1400/1*jX76ElYc3BXOUhvVqPQa_g.jpeg",
        linkToBlog: "https://medium.com/@kvkirthy/memoization-with-selectors-in-ngrx-c60e67a08161",
        isHighlighted: true
    },
    {
        title: "Memoization - JavaScript",
        description: "This article describes memoization in JavaScript. We begin with basics. The article elaborates memoization technique with a simple example.",
        imageUrl: "https://miro.medium.com/max/1000/1*sqvl0IJngpf5k6UHtNKDYg.jpeg",
        linkToBlog: "https://medium.com/@kvkirthy/memoization-51d35ac2a3cf",
        isHighlighted: false
    },
    {
        title: "Building Single Page Applications (SPA) with Angular Router",
        description: "Routing is an important aspect of building a SPA (Single Page Application). In this two-part Basic to Advanced tutorial on Angular Routing, we will discuss all the important components required to implement routing in your applications",
        imageUrl: "https://angular.io/assets/images/logos/angular/angular.png",
        linkToBlog: "https://www.dotnetcurry.com/ShowArticle.aspx?ID=1467",
        isHighlighted: false
    },
    {
        title: "Angular Evolution - Version 1.x to 6",
        description: "This Angular tutorial summarizes the evolution process of the Angular.js framework. It attempts to look back at the original context of Angular application development and how it has progressed. It covers Angular 1.x, v2, v4, v5 and Angular version 6",
        imageUrl: "https://www.dotnetcurry.com/images/angular/versions/angular-evolution.jpg",
        linkToBlog: "https://www.dotnetcurry.com/angularjs/1453/angular-evolution-versions-1-to-6",
        isHighlighted: false
    }, {
        title: "Angular HttpClient Deep Dive (Headers, HTTP events, non-JSON data and Interceptors)",
        description: "Explore advanced scenarios with the HTTP Client in Angular. In this tutorial, we add headers and parameters to the request, access the response object, work with the HTTPEvent, and look at Interceptors in Angular.",
        imageUrl: "https://angular.io/generated/images/marketing/concept-icons/http.png",
        linkToBlog: "https://www.dotnetcurry.com/angularjs/1448/angular-http-client-interceptors-headers-event",
        isHighlighted: false
    }, {
        title: "Getting Started with HTTP Client in Angular (GET, POST, PUT, DELETE methods)",
        description: "Learn the basics of making HTTP calls over GET/POST/PUT/DELETE methods in an Angular application. Also explore error handling scenarios and solutions for separating presentation logic from service API integration details.",
        imageUrl: "https://angular.io/generated/images/marketing/concept-icons/http.png",
        linkToBlog: "https://www.dotnetcurry.com/ShowArticle.aspx?ID=1438",
        isHighlighted: false
    }, {
        title: "ES8 (or ES2017) – What’s New in JavaScript?",
        description: "ES8 or ES2017 is the eighth version of the JavaScript language specification created to offer new features and ways of working with JavaScript. This article talks about the new features in ES8/ES 2017.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        linkToBlog: "https://www.dotnetcurry.com/ShowArticle.aspx?ID=1405",
        isHighlighted: false
    }, {
        title: "Angular 4 Development Cheat Sheet",
        description: "This Angular cheat sheet is a quick reference to get you going with Angular development. It uses Angular v4 with TypeScript.",
        imageUrl: "https://angular.io/assets/images/logos/angular/angular_solidBlack.png",
        linkToBlog: "https://www.dotnetcurry.com/ShowArticle.aspx?ID=1385",
        isHighlighted: false
    }, {
        title: "Angular 4 application development with Bootstrap 4 and TypeScript",
        description: "In this tutorial, we will explore how to develop an Angular 4 application using TypeScript. We will also explore Angular 4 New Features, Angular CLI, as well as differences between Angular v2 vs 4 application development.",
        imageUrl: "https://pluspng.com/img-png/bootstrap-logo-vector-png-bootstrap-logo-512.jpg",
        linkToBlog: "https://www.dotnetcurry.com/ShowArticle.aspx?ID=1366",
        isHighlighted: false
    }, {
        title: "Ionic 2 Tutorial - Building a hybrid mobile app using Angular",
        description: "The Ionic framework is one of the most popular hybrid mobile application frameworks. This tutorial focuses on building a simple hybrid app using Ionic 2, Angular 2 and TypeScript.",
        imageUrl: "https://media-exp1.licdn.com/dms/image/C510BAQHe0GgjFhdIBQ/company-logo_200_200/0?e=2159024400&v=beta&t=7jQ06NmrITyrCAlQsbpeQwXlwXiUV-Nqtw1m9UQd3Ho",
        linkToBlog: "https://www.dotnetcurry.com/ShowArticle.aspx?ID=1355",
        isHighlighted: false
    }, {
        title: "Angular V4 (or) call it just Angular",
        description: "This blog is a high level gist of Angular 4 features. For detailed explanation refer to my article in DNC magazine. Article is titled \"Angular 4 application development with Bootstrap 4 and TypeScript\". Follow this link to download the magazine for free.",
        imageUrl: "https://angular.io/generated/images/marketing/concept-icons/animations.png",
        linkToBlog: "http://venckicode.blogspot.com/",
        isHighlighted: false
    }, {
        title: "CSS and styling options in ReactJS",
        description: "ReactJS provides multiple options for styling components. We might use traditional approach to have a style-sheet in the project; Then apply CSS classes for elements in the component. Or we might pick a contentious approach to code styles within the component.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        linkToBlog: "http://venckicode.blogspot.com/2017/01/css-and-styling-options-in-reactjs.html",
        isHighlighted: false
    }, {
        title: "Using Flow types with React components",
        description: "Continuing series on Flow, in this blog I'm writing about Flow with React. It details advantages of using Flow while building React components.",
        imageUrl: "https://pbs.twimg.com/profile_images/889697663087542272/7mfszmjJ_400x400.jpg",
        linkToBlog: "http://venckicode.blogspot.com/2016/12/getting-started-with-react-component.html",
        isHighlighted: false
    }, {
        title: "Working with Flow on Visual Studio Code",
        description: "Blog describes what I believe is an optimal development setup with Flow. It details using Visual Studio Code IDE with Flow.",
        imageUrl: "https://seeklogo.com/images/V/visual-studio-code-logo-284BC24C39-seeklogo.com.png",
        linkToBlog: "http://venckicode.blogspot.com/2016/12/optimizing-flow-using-it-with-vs-code.html",
        isHighlighted: false
    }, {
        title: "Getting started with AngularFire 2",
        description: "The blog describes using AngularFire2, Angular 2 and TypeScript API for Firebase. It is a beginner guide with a sample for retrieval and update to Firebase database.",
        linkToBlog: "http://venckicode.blogspot.com/2016/10/getting-started-with-angularfire-2_65.html",
        imageUrl: "https://img.icons8.com/color/480/firebase.png",
        isHighlighted: false
    }
];
let BlogsComponent = class BlogsComponent {
    constructor() { }
    ngOnInit() {
        let allBlogs = mockBlogResponse;
        this.highlightedBlog = allBlogs.find(i => i.isHighlighted);
        this.blogList$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(allBlogs.filter(i => !i.isHighlighted));
    }
    cardClickHandler(linkToBlog) {
        window.open(linkToBlog, "__blog");
    }
};
BlogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blogs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blogs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blogs/blogs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blogs.component.css */ "./src/app/pages/blogs/blogs.component.css")).default]
    })
], BlogsComponent);



/***/ }),

/***/ "./src/app/pages/books/books.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/books/books.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col-6 mat-card{\r\n  width: 309px;\r\n}\r\n\r\n.col-md-6 mat-card{\r\n  width: 200px;\r\n  margin-top: 10px;\r\n}\r\n\r\nmat-card{\r\n  margin-top: 10px;\r\n}\r\n\r\nmat-card-actions{\r\n  text-align: center;\r\n}\r\n\r\nbutton{\r\n  padding: 2px;\r\n}\r\n\r\n.col-6 .book-image {\r\n  height: 440px;\r\n  width: auto;\r\n}\r\n\r\n.col-md-6 .book-image {\r\n  height: 287px;\r\n  width: auto;\r\n}\r\n\r\n.row{\r\n  margin-top: 10px;\r\n  margin-left: 1px;\r\n  padding-top: 10px;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va3MvYm9va3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLTYgbWF0LWNhcmR7XHJcbiAgd2lkdGg6IDMwOXB4O1xyXG59XHJcblxyXG4uY29sLW1kLTYgbWF0LWNhcmR7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxubWF0LWNhcmR7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxubWF0LWNhcmQtYWN0aW9uc3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5jb2wtNiAuYm9vay1pbWFnZSB7XHJcbiAgaGVpZ2h0OiA0NDBweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmNvbC1tZC02IC5ib29rLWltYWdlIHtcclxuICBoZWlnaHQ6IDI4N3B4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4ucm93e1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/books/books.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/books/books.component.ts ***!
  \************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BooksComponent = class BooksComponent {
    constructor() { }
    ngOnInit() {
    }
};
BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-books',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./books.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/books/books.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./books.component.css */ "./src/app/pages/books/books.component.css")).default]
    })
], BooksComponent);



/***/ }),

/***/ "./src/app/pages/error/error.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/error/error.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/error/error.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/pages/error/error.component.css")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/opinion/opinion.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/opinion/opinion.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div{\r\n  margin: 20px 1px 1px 15px;\r\n}\r\n\r\nmat-card{\r\n  width: 280px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3Bpbmlvbi9vcGluaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcGluaW9uL29waW5pb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICBtYXJnaW46IDIwcHggMXB4IDFweCAxNXB4O1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuICB3aWR0aDogMjgwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/opinion/opinion.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/opinion/opinion.component.ts ***!
  \****************************************************/
/*! exports provided: OpinionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpinionComponent", function() { return OpinionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OpinionComponent = class OpinionComponent {
    constructor() {
        this.twttr = window['twttr'] || {};
    }
    ngOnInit() {
        this.twttr && this.twttr.widgets.load();
    }
};
OpinionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-opinion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./opinion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/opinion/opinion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./opinion.component.css */ "./src/app/pages/opinion/opinion.component.css")).default]
    })
], OpinionComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\me\showcase\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);