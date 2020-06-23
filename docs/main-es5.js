function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"fixed-header\">\n    <sc-toolbar></sc-toolbar>\n    <nav mat-tab-nav-bar>\n        <a mat-tab-link *ngFor=\"let page of pages\" [routerLink]=\"page.path\" routerLinkActive #rla=\"routerLinkActive\"\n            [active]=\"rla.isActive\">{{page.label}} </a>\n    </nav>\n</div>\n<div class=\"root-node\">\n    <router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sc-toolbar/sc-toolbar.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sc-toolbar/sc-toolbar.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsScToolbarScToolbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <img mat-card-avatar src=\"assets/profile-pic.jpg\" class=\"book-image\" alt=\"profile picture\">\n        <div class=\"title-text\">\n            <span class=\"title-text\">\n                VENKATA KEERTI KOTARU \n            </span>\n            <span class=\"small-font\">\n                ( k e e r t i )\n            </span>\n\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n\n    <div class=\"col-md-5 col-lg-3\">\n        <mat-card>\n            <img mat-card-image src=\"assets/profile-pic.jpg\" class=\"book-image\" alt=\"profile picture\">\n\n            <mat-card-header>\n                <mat-card-title>Venkata Keerti Kotaru</mat-card-title>\n                <mat-card-subtitle>Author, Three time Microsoft MVP and a blogger</mat-card-subtitle>\n            </mat-card-header>\n        </mat-card>\n    </div>\n    <div class=\"col-md-6 col-lg-8\">\n        <p class=\"d-none d-lg-block\">\n            <mat-grid-list cols=\"3\" rowHeight=\"220px\">\n                <mat-grid-tile colspan=\"2\" [style.background]=\"color5\">\n                    <span [innerHtml]=\"introParagraph\"></span>\n                </mat-grid-tile>\n                <a href=\"https://www.linkedin.com/in/keertikotaru/\" target=\"__blank\">\n                    <mat-grid-tile [style.background]=\"color1\">\n                        <img src=\"assets/Linkedin.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\n                        <div class=\"link\">\n                            View LinkedIn Profile\n                        </div>\n                    </mat-grid-tile>\n                </a>\n                <a href=\"https://twitter.com/keertikotaru\" target=\"__blank\">\n                    <mat-grid-tile [style.background]=\"color2\">\n                        <img src=\"assets/twitter.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\n                        <div class=\"link\">\n                            Follow on Twitter\n                        </div>\n                    </mat-grid-tile>\n                </a>\n                <a href=\"https://github.com/kvkirthy/\" target=\"__blank\">\n\n                    <mat-grid-tile [style.background]=\"color3\">\n                        <img src=\"assets/github.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\n                        <div class=\"link\">\n                            Github Profile\n                        </div>\n                    </mat-grid-tile>\n                </a>\n                <a href=\"https://stackoverflow.com/users/2955455/vencki\" target=\"__blank\">\n                    <mat-grid-tile [style.background]=\"color4\">\n                        <img src=\"assets/stackoverflow.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\n                        <div class=\"link\">\n                            Stackoverflow Profile\n                        </div>\n                    </mat-grid-tile>\n                </a>\n\n            </mat-grid-list>\n        </p>\n        <p class=\"d-lg-none d-sm-block\">\n            <mat-grid-list cols=\"1\" rowHeight=\"240px\" class=\"single-item\">\n                <mat-grid-tile [style.background]=\"color5\">\n                    <span [innerHtml]=\"introParagraph\"></span>\n                </mat-grid-tile>\n            </mat-grid-list>\n            <mat-grid-list cols=\"1\" rowHeight=\"120px\" gutterSize=\"5px\">\n                <a href=\"https://www.linkedin.com/in/keertikotaru/\" target=\"__blank\">\n                    <mat-grid-tile [style.background]=\"color1\">\n                        <img src=\"assets/Linkedin.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\n                        <div class=\"link\">\n                            View LinkedIn Profile\n                        </div>\n                    </mat-grid-tile>\n                </a>\n                <a href=\"https://twitter.com/keertikotaru\" target=\"__blank\">\n                    <mat-grid-tile [style.background]=\"color2\">\n                        <img src=\"assets/twitter.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\n                        <div class=\"link\">\n                            Follow on Twitter\n                        </div>\n                    </mat-grid-tile>\n                </a>\n                <a href=\"https://github.com/kvkirthy/\" target=\"__blank\">\n\n                    <mat-grid-tile [style.background]=\"color3\">\n                        <img src=\"assets/github.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\n                        <div class=\"link\">\n                            Github Profile\n                        </div>\n                    </mat-grid-tile>\n                </a>\n                <a href=\"https://stackoverflow.com/users/2955455/vencki\" target=\"__blank\">\n                    <mat-grid-tile [style.background]=\"color4\">\n                        <img src=\"assets/stackoverflow.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\n                        <div class=\"link\">\n                            Stackoverflow Profile\n                        </div>\n                    </mat-grid-tile>\n                </a>\n\n            </mat-grid-list>\n        </p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blogs/blogs.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blogs/blogs.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBlogsBlogsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-none d-lg-block\">\n    <div class=\"row\">\n        <div class=\"col-sm-4 primary-card\" *ngIf=\"highlightedBlog\">\n            <mat-card (click)=\"cardClickHandler(highlightedBlog.linkToBlog)\">\n                <img mat-card-image class=\"card-image\" [src]=\"highlightedBlog.imageUrl\">\n\n                <mat-card-header>\n                    <mat-card-title>{{highlightedBlog.title}}\n                        <mat-icon color=\"accent\">fiber_new</mat-icon>\n                    </mat-card-title>\n                </mat-card-header>\n                <mat-card-content>{{highlightedBlog.description}}</mat-card-content>\n            </mat-card>\n        </div>\n\n        <div class=\"col-sm-8\">\n            <div class=\"row\">\n                <ng-container *ngFor=\"let blog of blogList$ | async; let i=index\">\n                    <div class=\"col-md-6 small-cards-recent\">\n                        <mat-card *ngIf=\"i < 4\" (click)=\"cardClickHandler(blog.linkToBlog)\">\n\n                            <mat-card-header>\n                                <img mat-card-avatar [src]=\"blog.imageUrl\">\n                                <mat-card-subtitle>\n                                    {{blog.title}}\n                                </mat-card-subtitle>\n                            </mat-card-header>\n                            <mat-card-content>{{blog.description}}</mat-card-content>\n                        </mat-card>\n                    </div>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <ng-container *ngFor=\"let blog of blogList$ | async; let i=index\">\n            <div *ngIf=\"i >= 4\" class=\"col-sm-4 small-cards\">\n                <mat-card (click)=\"cardClickHandler(blog.linkToBlog)\">\n                    <mat-card-header>\n                        <img mat-card-avatar [src]=\"blog.imageUrl\">\n                        <mat-card-subtitle>\n                            {{blog.title}}\n                        </mat-card-subtitle>\n                    </mat-card-header>\n                    <mat-card-content>{{blog.description}}</mat-card-content>\n                </mat-card>\n            </div>\n        </ng-container>\n    </div>\n</div>\n<div class=\"d-xs-block d-lg-none\">\n    <div class=\"row\">\n        <div class=\"col-sm-10\" *ngIf=\"highlightedBlog\">\n            <mat-card (click)=\"cardClickHandler(highlightedBlog.linkToBlog)\">\n                <img mat-card-image [src]=\"highlightedBlog.imageUrl\">\n\n                <mat-card-header>\n                    <mat-card-title>{{highlightedBlog.title}}\n                        <mat-icon color=\"accent\">fiber_new</mat-icon>\n                    </mat-card-title>\n                </mat-card-header>\n                <mat-card-content>{{highlightedBlog.description}}</mat-card-content>\n            </mat-card>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-10\">\n            <ng-container *ngFor=\"let blog of blogList$ | async;\">\n                <mat-card (click)=\"cardClickHandler(blog.linkToBlog)\">\n                    <mat-card-header>\n                        <img mat-card-avatar class=\"avatar\" [src]=\"blog.imageUrl\">\n                        <mat-card-subtitle>{{blog.title}}</mat-card-subtitle>\n                    </mat-card-header>\n                    <mat-card-content>{{blog.description}}</mat-card-content>\n                </mat-card>\n            </ng-container>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/books/books.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/books/books.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBooksBooksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-3\"></div>\n  <div class=\"col-md-3 col-sm-12\">\n    <mat-card>\n      <img mat-card-image src=\"assets/book-2.jpg\" class=\"book-image\" alt=\"Angular 2 book\">\n      <!-- <mat-card-header> -->\n        <!-- <mat-card-subtitle>\n          Build Angular applications faster and better with TypeScript and Material Design.\n        </mat-card-subtitle>\n      </mat-card-header> -->\n\n      <mat-card-actions class=\"small-text\">\n        <a mat-button href=\"https://www.apress.com/us/book/9781484254332\" target=\"__blank\" color=\"primary\">Apress</a>\n        <a mat-button\n          href=\"https://www.amazon.com/Angular-Material-Design-TypeScript-Interface/dp/1484254333/ref=sr_1_3?keywords=angular+material&qid=1578191826&sr=8-3\"\n          target=\"__blank\" color=\"primary\">Amazon</a>\n        <a mat-button href=\"https://github.com/kvkirthy/superheroes\" target=\"__blank\" color=\"primary\">Samples</a>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n\n  <div class=\"col-md-3 col-sm-12\">\n    <mat-card>\n      <img mat-card-image src=\"assets/book-1.jpg\" class=\"book-image\" alt=\"Angular 2 book\">\n      <!-- <mat-card-header>\n        <mat-card-subtitle>\n          Build applications with AngularJS (version 1.x) and Material Design. Uses Angular Material library.\n        </mat-card-subtitle>\n      </mat-card-header> -->\n      <mat-card-actions class=\"small-text\">\n        <a mat-button href=\"https://www.apress.com/us/book/9781484221891\" target=\"__blank\" color=\"primary\">Apress</a>\n        <a mat-button href=\"https://www.amazon.com/dp/B01L17B8LK/ref=rdr_kindle_ext_tmb\" target=\"__blank\"\n          color=\"primary\">Amazon</a>\n        <a mat-button href=\"https://github.com/kvkirthy/Angular-Material-Samples\" target=\"__blank\"\n          color=\"primary\">Samples</a>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n  <div class=\"col-md-3\"></div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>error works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>home works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/opinion/opinion.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/opinion/opinion.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOpinionOpinionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"row\">\n    <div class=\"col-md-4\">\n        <a class=\"twitter-timeline\" href=\"https://twitter.com/KeertiKotaru?ref_src=twsrc%5Etfw\">Tweets by KeertiKotaru</a>\n    </div>\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: pages, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pages", function () {
      return pages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/error/error.component */
    "./src/app/pages/error/error.component.ts");
    /* harmony import */


    var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/about/about.component */
    "./src/app/pages/about/about.component.ts");
    /* harmony import */


    var _pages_books_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/books/books.component */
    "./src/app/pages/books/books.component.ts");
    /* harmony import */


    var _pages_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/blogs/blogs.component */
    "./src/app/pages/blogs/blogs.component.ts");

    var pages = [{
      path: 'blog',
      component: _pages_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_6__["BlogsComponent"],
      label: "Blog"
    }, {
      path: 'books',
      component: _pages_books_books_component__WEBPACK_IMPORTED_MODULE_5__["BooksComponent"],
      label: "Books"
    }, {
      path: 'about',
      component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
      label: "About Me!"
    }];
    var routes = [].concat(pages, [{
      path: '',
      redirectTo: '/blog',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]
    }]);

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".root-node{\n    margin: 110px 10px auto 10px;\n    position: relative;\n}\n\nnav{\n    margin: 0px 0px 0px 0px;\n}\n\n.fixed-header {\n    top: 0;\n    background-color: white;\n    position: fixed;\n    width: 100%;\n    z-index:999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksTUFBTTtJQUNOLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3Qtbm9kZXtcbiAgICBtYXJnaW46IDExMHB4IDEwcHggYXV0byAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxubmF2e1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xufVxuXG4uZml4ZWQtaGVhZGVyIHtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6OTk5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.pages = _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["pages"];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _components_sc_toolbar_sc_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/sc-toolbar/sc-toolbar.component */
    "./src/app/components/sc-toolbar/sc-toolbar.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/error/error.component */
    "./src/app/pages/error/error.component.ts");
    /* harmony import */


    var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/about/about.component */
    "./src/app/pages/about/about.component.ts");
    /* harmony import */


    var _pages_books_books_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/books/books.component */
    "./src/app/pages/books/books.component.ts");
    /* harmony import */


    var _pages_opinion_opinion_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/opinion/opinion.component */
    "./src/app/pages/opinion/opinion.component.ts");
    /* harmony import */


    var _pages_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/blogs/blogs.component */
    "./src/app/pages/blogs/blogs.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_sc_toolbar_sc_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ScToolbarComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _pages_error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"], _pages_about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"], _pages_books_books_component__WEBPACK_IMPORTED_MODULE_17__["BooksComponent"], _pages_opinion_opinion_component__WEBPACK_IMPORTED_MODULE_18__["OpinionComponent"], _pages_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_19__["BlogsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/sc-toolbar/sc-toolbar.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/sc-toolbar/sc-toolbar.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsScToolbarScToolbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-toolbar {\n    font-size: medium;\n}\n\n.title-text {\n    margin-left: 10px;\n    font-family: Constantia, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-weight: bold;\n    font-size: 11pt;\n}\n\n.small-font {\n    font-size: 12pt;\n    margin-left: 10px;\n    line-break: strict;\n    font-family: \"ink free\";\n    display: block;\n    margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYy10b29sYmFyL3NjLXRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3RUFBd0U7SUFDeEUsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2MtdG9vbGJhci9zYy10b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi50aXRsZS10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LWZhbWlseTogQ29uc3RhbnRpYSwgJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxMXB0O1xufVxuXG4uc21hbGwtZm9udCB7XG4gICAgZm9udC1zaXplOiAxMnB0O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGxpbmUtYnJlYWs6IHN0cmljdDtcbiAgICBmb250LWZhbWlseTogXCJpbmsgZnJlZVwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/sc-toolbar/sc-toolbar.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/sc-toolbar/sc-toolbar.component.ts ***!
    \***************************************************************/

  /*! exports provided: ScToolbarComponent */

  /***/
  function srcAppComponentsScToolbarScToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScToolbarComponent", function () {
      return ScToolbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ScToolbarComponent =
    /*#__PURE__*/
    function () {
      function ScToolbarComponent() {
        _classCallCheck(this, ScToolbarComponent);
      }

      _createClass(ScToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ScToolbarComponent;
    }();

    ScToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sc-toolbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sc-toolbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sc-toolbar/sc-toolbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sc-toolbar.component.css */
      "./src/app/components/sc-toolbar/sc-toolbar.component.css")).default]
    })], ScToolbarComponent);
    /***/
  },

  /***/
  "./src/app/pages/about/about.component.css":
  /*!*************************************************!*\
    !*** ./src/app/pages/about/about.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div{\n    margin: 30px 1px 1px 5px;\n  }\n\n  mat-card{\n    width: 100%;\n    border-radius: 10px;\n  }\n\n  .img-logo{\n  width: 40px;\n}\n\n  .link{\n  font-size: 10pt;\n  font-weight: bold;\n}\n\n  a{\n  color: black;\n}\n\n  mat-grid-tile{\n  border-radius: 5px;\n}\n\n  span{\n  margin: 15px;\n  font-family: \"Book Antiqua\"\n}\n\n  i{\n  font-size: 24pt\n}\n\n  mat-grid-list.single-item{\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUY7RUFDRSxXQUFXO0FBQ2I7O0VBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0UsWUFBWTtBQUNkOztFQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsWUFBWTtFQUNaO0FBQ0Y7O0VBRUE7RUFDRTtBQUNGOztFQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgICBtYXJnaW46IDMwcHggMXB4IDFweCA1cHg7XG4gIH1cblxuICBtYXQtY2FyZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbi5pbWctbG9nb3tcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5saW5re1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5he1xuICBjb2xvcjogYmxhY2s7XG59XG5cbm1hdC1ncmlkLXRpbGV7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuc3BhbntcbiAgbWFyZ2luOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJCb29rIEFudGlxdWFcIlxufVxuXG5pe1xuICBmb250LXNpemU6IDI0cHRcbn1cblxubWF0LWdyaWQtbGlzdC5zaW5nbGUtaXRlbXtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/about/about.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/about/about.component.ts ***!
    \************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppPagesAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        this.color1 = "skyblue";
        this.color2 = "#F4EAE8";
        this.color3 = "lightpink";
        this.color4 = "lightgreen";
        this.color5 = "#FEBDB0";
        this.introParagraph = "<i>I've</i> been in software development for over 17 years." + "<br />I'm a three-time Microsoft MVP and the author of a two books, and several technology articles from Dot Net Curry and DNC magazine." + "I hold a master's degree in software systems from the University of St. Thomas, Minneapolis and St. Paul, USA.";
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/pages/about/about.component.css")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/pages/blogs/blogs-data.json":
  /*!*********************************************!*\
    !*** ./src/app/pages/blogs/blogs-data.json ***!
    \*********************************************/

  /*! exports provided: blogs, default */

  /***/
  function srcAppPagesBlogsBlogsDataJson(module) {
    module.exports = JSON.parse("{\"blogs\":[{\"title\":\"Private Members in JavaScript Classes\",\"description\":\"ES6 / ES2015 introduced classes in JavaScript. It is an encapsulation of data (fields) and behavior (functions). With a new proposal currently in stage-3, a class can have private members, which are not accessible outside the scope of the class.\",\"imageUrl\":\"assets/js.jpeg\",\"linkToBlog\":\"https://medium.com/@kvkirthy/private-members-in-javascript-classes-cb04944f1ae2\",\"isHighlighted\":true},{\"title\":\"Cumulative Layout Shift (CLS)\",\"description\":\"Visual Stability data point among Web Vitals. Identify and fix clumsy user experience with jumpy buttons, text and other controls on a web page.\",\"imageUrl\":\"assets/ny.jpg\",\"linkToBlog\":\"https://medium.com/@kvkirthy/cumulative-layout-shifts-cls-ab3ef9b98b70\",\"isHighlighted\":false},{\"title\":\"Dynamic Import() in JavaScript\",\"description\":\"Discuss native support for on-the-fly import of modules in ES 2020 (also called ES 11). Towards the end, a quick description of how JavaScript features are standardized and implemented by various browsers.\",\"imageUrl\":\"https://miro.medium.com/max/2000/1*ibQ7bd0wnGLXY3jMlhpgYA.jpeg\",\"linkToBlog\":\"https://medium.com/@kvkirthy/discuss-native-support-for-on-the-fly-import-of-modules-in-es-2020-also-called-es-11-ad4f899e0c2\",\"isHighlighted\":false},{\"title\":\"Memoization with Selectors in NgRx\",\"description\":\"The prior article on Memoization in JavaScript discusses caching results of a long running JavaScript function. Majority of the functions that run in a browser finish fairly quickly, return in milliseconds. That begs the question, what are the real-world use cases for memoization in JavaScript? This article describes one such use case.\",\"imageUrl\":\"https://miro.medium.com/max/1400/1*jX76ElYc3BXOUhvVqPQa_g.jpeg\",\"linkToBlog\":\"https://medium.com/@kvkirthy/memoization-with-selectors-in-ngrx-c60e67a08161\",\"isHighlighted\":false},{\"title\":\"Memoization - JavaScript\",\"description\":\"This article describes memoization in JavaScript. We begin with basics. The article elaborates memoization technique with a simple example.\",\"imageUrl\":\"https://miro.medium.com/max/1000/1*sqvl0IJngpf5k6UHtNKDYg.jpeg\",\"linkToBlog\":\"https://medium.com/@kvkirthy/memoization-51d35ac2a3cf\",\"isHighlighted\":false},{\"title\":\"Building Single Page Applications (SPA) with Angular Router\",\"description\":\"Routing is an important aspect of building a SPA (Single Page Application). In this two-part Basic to Advanced tutorial on Angular Routing, we will discuss all the important components required to implement routing in your applications\",\"imageUrl\":\"https://angular.io/assets/images/logos/angular/angular.png\",\"linkToBlog\":\"https://www.dotnetcurry.com/ShowArticle.aspx?ID=1467\",\"isHighlighted\":false},{\"title\":\"Angular Evolution - Version 1.x to 6\",\"description\":\"This Angular tutorial summarizes the evolution process of the Angular.js framework. It attempts to look back at the original context of Angular application development and how it has progressed. It covers Angular 1.x, v2, v4, v5 and Angular version 6\",\"imageUrl\":\"https://www.dotnetcurry.com/images/angular/versions/angular-evolution.jpg\",\"linkToBlog\":\"https://www.dotnetcurry.com/angularjs/1453/angular-evolution-versions-1-to-6\",\"isHighlighted\":false},{\"title\":\"Angular HttpClient Deep Dive (Headers, HTTP events, non-JSON data and Interceptors)\",\"description\":\"Explore advanced scenarios with the HTTP Client in Angular. In this tutorial, we add headers and parameters to the request, access the response object, work with the HTTPEvent, and look at Interceptors in Angular.\",\"imageUrl\":\"https://angular.io/generated/images/marketing/concept-icons/http.png\",\"linkToBlog\":\"https://www.dotnetcurry.com/angularjs/1448/angular-http-client-interceptors-headers-event\",\"isHighlighted\":false},{\"title\":\"Getting Started with HTTP Client in Angular (GET, POST, PUT, DELETE methods)\",\"description\":\"Learn the basics of making HTTP calls over GET/POST/PUT/DELETE methods in an Angular application. Also explore error handling scenarios and solutions for separating presentation logic from service API integration details.\",\"imageUrl\":\"https://angular.io/generated/images/marketing/concept-icons/http.png\",\"linkToBlog\":\"https://www.dotnetcurry.com/ShowArticle.aspx?ID=1438\",\"isHighlighted\":false},{\"title\":\"ES8 (or ES2017) – What’s New in JavaScript?\",\"description\":\"ES8 or ES2017 is the eighth version of the JavaScript language specification created to offer new features and ways of working with JavaScript. This article talks about the new features in ES8/ES 2017.\",\"imageUrl\":\"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png\",\"linkToBlog\":\"https://www.dotnetcurry.com/ShowArticle.aspx?ID=1405\",\"isHighlighted\":false},{\"title\":\"Angular 4 Development Cheat Sheet\",\"description\":\"This Angular cheat sheet is a quick reference to get you going with Angular development. It uses Angular v4 with TypeScript.\",\"imageUrl\":\"https://angular.io/assets/images/logos/angular/angular_solidBlack.png\",\"linkToBlog\":\"https://www.dotnetcurry.com/ShowArticle.aspx?ID=1385\",\"isHighlighted\":false},{\"title\":\"Angular 4 application development with Bootstrap 4 and TypeScript\",\"description\":\"In this tutorial, we will explore how to develop an Angular 4 application using TypeScript. We will also explore Angular 4 New Features, Angular CLI, as well as differences between Angular v2 vs 4 application development.\",\"imageUrl\":\"https://pluspng.com/img-png/bootstrap-logo-vector-png-bootstrap-logo-512.jpg\",\"linkToBlog\":\"https://www.dotnetcurry.com/ShowArticle.aspx?ID=1366\",\"isHighlighted\":false},{\"title\":\"Ionic 2 Tutorial - Building a hybrid mobile app using Angular\",\"description\":\"The Ionic framework is one of the most popular hybrid mobile application frameworks. This tutorial focuses on building a simple hybrid app using Ionic 2, Angular 2 and TypeScript.\",\"imageUrl\":\"https://media-exp1.licdn.com/dms/image/C510BAQHe0GgjFhdIBQ/company-logo_200_200/0?e=2159024400&v=beta&t=7jQ06NmrITyrCAlQsbpeQwXlwXiUV-Nqtw1m9UQd3Ho\",\"linkToBlog\":\"https://www.dotnetcurry.com/ShowArticle.aspx?ID=1355\",\"isHighlighted\":false},{\"title\":\"Angular V4 (or) call it just Angular\",\"description\":\"This blog is a high level gist of Angular 4 features. For detailed explanation refer to my article in DNC magazine. Article is titled \\\"Angular 4 application development with Bootstrap 4 and TypeScript\\\". Follow this link to download the magazine for free.\",\"imageUrl\":\"https://angular.io/generated/images/marketing/concept-icons/animations.png\",\"linkToBlog\":\"http://venckicode.blogspot.com/\",\"isHighlighted\":false},{\"title\":\"CSS and styling options in ReactJS\",\"description\":\"ReactJS provides multiple options for styling components. We might use traditional approach to have a style-sheet in the project; Then apply CSS classes for elements in the component. Or we might pick a contentious approach to code styles within the component.\",\"imageUrl\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png\",\"linkToBlog\":\"http://venckicode.blogspot.com/2017/01/css-and-styling-options-in-reactjs.html\",\"isHighlighted\":false},{\"title\":\"Using Flow types with React components\",\"description\":\"Continuing series on Flow, in this blog I'm writing about Flow with React. It details advantages of using Flow while building React components.\",\"imageUrl\":\"https://pbs.twimg.com/profile_images/889697663087542272/7mfszmjJ_400x400.jpg\",\"linkToBlog\":\"http://venckicode.blogspot.com/2016/12/getting-started-with-react-component.html\",\"isHighlighted\":false},{\"title\":\"Working with Flow on Visual Studio Code\",\"description\":\"Blog describes what I believe is an optimal development setup with Flow. It details using Visual Studio Code IDE with Flow.\",\"imageUrl\":\"https://seeklogo.com/images/V/visual-studio-code-logo-284BC24C39-seeklogo.com.png\",\"linkToBlog\":\"http://venckicode.blogspot.com/2016/12/optimizing-flow-using-it-with-vs-code.html\",\"isHighlighted\":false},{\"title\":\"Getting started with AngularFire 2\",\"description\":\"The blog describes using AngularFire2, Angular 2 and TypeScript API for Firebase. It is a beginner guide with a sample for retrieval and update to Firebase database.\",\"linkToBlog\":\"http://venckicode.blogspot.com/2016/10/getting-started-with-angularfire-2_65.html\",\"imageUrl\":\"https://img.icons8.com/color/480/firebase.png\",\"isHighlighted\":false}]}");
    /***/
  },

  /***/
  "./src/app/pages/blogs/blogs.component.css":
  /*!*************************************************!*\
    !*** ./src/app/pages/blogs/blogs.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBlogsBlogsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".d-lg-block {\n    margin-left: 15px;\n    margin-right: 15px;\n}\n\n.small-banner {\n    max-height: 125px;\n    max-width: auto;\n    width: auto;\n}\n\n.dark {\n    color: lightslategray;\n}\n\nmat-card {\n    width: 100%;\n    border-radius: 10px;\n    margin-top: 20px;\n    max-width: 500px;\n}\n\n.small-cards-recent mat-card {\n    min-height: 205px;\n    height: 95%;\n}\n\n.small-cards mat-card {\n    min-height: 200px;\n    height: 95%;\n}\n\nmat-card img.card-image {\n    min-height: 286px;\n}\n\nmat-card-content {\n    padding-top: 15px;\n}\n\n/* .img-logo {\n    width: 40px;\n} */\n\n.avatar {\n    margin-bottom: 7px;\n}\n\n.link {\n    font-size: 10pt;\n    font-weight: bold;\n}\n\na {\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUdBOztHQUVHOztBQUVIO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ibG9ncy9ibG9ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtbGctYmxvY2sge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnNtYWxsLWJhbm5lciB7XG4gICAgbWF4LWhlaWdodDogMTI1cHg7XG4gICAgbWF4LXdpZHRoOiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG4uZGFyayB7XG4gICAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xufVxuXG5tYXQtY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5zbWFsbC1jYXJkcy1yZWNlbnQgbWF0LWNhcmQge1xuICAgIG1pbi1oZWlnaHQ6IDIwNXB4O1xuICAgIGhlaWdodDogOTUlO1xufVxuXG4uc21hbGwtY2FyZHMgbWF0LWNhcmQge1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIGhlaWdodDogOTUlO1xufVxuXG5tYXQtY2FyZCBpbWcuY2FyZC1pbWFnZSB7XG4gICAgbWluLWhlaWdodDogMjg2cHg7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG5cbi8qIC5pbWctbG9nbyB7XG4gICAgd2lkdGg6IDQwcHg7XG59ICovXG5cbi5hdmF0YXIge1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbn1cblxuLmxpbmsge1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuYSB7XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/blogs/blogs.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/blogs/blogs.component.ts ***!
    \************************************************/

  /*! exports provided: BlogsComponent */

  /***/
  function srcAppPagesBlogsBlogsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogsComponent", function () {
      return BlogsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _blogs_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blogs-data.json */
    "./src/app/pages/blogs/blogs-data.json");

    var _blogs_data_json__WEBPACK_IMPORTED_MODULE_3___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ./blogs-data.json */
    "./src/app/pages/blogs/blogs-data.json", 1);

    var BlogsComponent =
    /*#__PURE__*/
    function () {
      function BlogsComponent() {
        _classCallCheck(this, BlogsComponent);
      }

      _createClass(BlogsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var allBlogs = _blogs_data_json__WEBPACK_IMPORTED_MODULE_3__["blogs"];
          this.highlightedBlog = allBlogs.find(function (i) {
            return i.isHighlighted;
          });
          this.blogList$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(allBlogs.filter(function (i) {
            return !i.isHighlighted;
          }));
        }
      }, {
        key: "cardClickHandler",
        value: function cardClickHandler(linkToBlog) {
          window.open(linkToBlog, "__blog");
        }
      }]);

      return BlogsComponent;
    }();

    BlogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blogs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blogs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blogs/blogs.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blogs.component.css */
      "./src/app/pages/blogs/blogs.component.css")).default]
    })], BlogsComponent);
    /***/
  },

  /***/
  "./src/app/pages/books/books.component.css":
  /*!*************************************************!*\
    !*** ./src/app/pages/books/books.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBooksBooksComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col-6 mat-card{\n  width: 309px;\n}\n\n.col-md-6 mat-card{\n  width: 200px;\n  margin-top: 10px;\n}\n\nmat-card{\n  margin-top: 10px;\n}\n\nmat-card-actions{\n  text-align: center;\n}\n\nbutton{\n  padding: 2px;\n}\n\n.col-6 .book-image {\n  height: 440px;\n  width: auto;\n}\n\n.col-md-6 .book-image {\n  height: 287px;\n  width: auto;\n}\n\n.row{\n  margin-top: 10px;\n  margin-left: 1px;\n  padding-top: 10px;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va3MvYm9va3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLTYgbWF0LWNhcmR7XG4gIHdpZHRoOiAzMDlweDtcbn1cblxuLmNvbC1tZC02IG1hdC1jYXJke1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5tYXQtY2FyZHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxubWF0LWNhcmQtYWN0aW9uc3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b257XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmNvbC02IC5ib29rLWltYWdlIHtcbiAgaGVpZ2h0OiA0NDBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5jb2wtbWQtNiAuYm9vay1pbWFnZSB7XG4gIGhlaWdodDogMjg3cHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ucm93e1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/books/books.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/books/books.component.ts ***!
    \************************************************/

  /*! exports provided: BooksComponent */

  /***/
  function srcAppPagesBooksBooksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksComponent", function () {
      return BooksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BooksComponent =
    /*#__PURE__*/
    function () {
      function BooksComponent() {
        _classCallCheck(this, BooksComponent);
      }

      _createClass(BooksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BooksComponent;
    }();

    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-books',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./books.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/books/books.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./books.component.css */
      "./src/app/pages/books/books.component.css")).default]
    })], BooksComponent);
    /***/
  },

  /***/
  "./src/app/pages/error/error.component.css":
  /*!*************************************************!*\
    !*** ./src/app/pages/error/error.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesErrorErrorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/error/error.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/error/error.component.ts ***!
    \************************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppPagesErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorComponent =
    /*#__PURE__*/
    function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error.component.css */
      "./src/app/pages/error/error.component.css")).default]
    })], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.css":
  /*!***********************************************!*\
    !*** ./src/app/pages/home/home.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/pages/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/pages/opinion/opinion.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/pages/opinion/opinion.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOpinionOpinionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div{\n  margin: 20px 1px 1px 15px;\n}\n\nmat-card{\n  width: 280px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3Bpbmlvbi9vcGluaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcGluaW9uL29waW5pb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgbWFyZ2luOiAyMHB4IDFweCAxcHggMTVweDtcbn1cblxubWF0LWNhcmR7XG4gIHdpZHRoOiAyODBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/opinion/opinion.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/opinion/opinion.component.ts ***!
    \****************************************************/

  /*! exports provided: OpinionComponent */

  /***/
  function srcAppPagesOpinionOpinionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpinionComponent", function () {
      return OpinionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OpinionComponent =
    /*#__PURE__*/
    function () {
      function OpinionComponent() {
        _classCallCheck(this, OpinionComponent);

        this.twttr = window['twttr'] || {};
      }

      _createClass(OpinionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.twttr && this.twttr.widgets.load();
        }
      }]);

      return OpinionComponent;
    }();

    OpinionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-opinion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./opinion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/opinion/opinion.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./opinion.component.css */
      "./src/app/pages/opinion/opinion.component.css")).default]
    })], OpinionComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/m_110190/Code/showcase/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map