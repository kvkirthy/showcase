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


    __webpack_exports__["default"] = "<div class=\"fixed-header\">\r\n    <sc-toolbar></sc-toolbar>\r\n    <nav mat-tab-nav-bar>\r\n        <a mat-tab-link *ngFor=\"let page of pages\" [routerLink]=\"page.path\" routerLinkActive #rla=\"routerLinkActive\"\r\n            [active]=\"rla.isActive\">{{page.label}} </a>\r\n    </nav>\r\n</div>\r\n<div class=\"root-node\">\r\n    <router-outlet></router-outlet>\r\n</div>";
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


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>SHOWCASE</mat-toolbar-row>\n</mat-toolbar>";
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


    __webpack_exports__["default"] = "<div class=\"row\">\r\n\r\n    <div class=\"col-md-3\">\r\n        <mat-card>\r\n            <img mat-card-image src=\"assets/profile-pic.jpg\" class=\"book-image\" alt=\"profile picture\">\r\n\r\n            <mat-card-header>\r\n                <mat-card-title>Venkata Keerti Kotaru</mat-card-title>\r\n                <mat-card-subtitle>Author, Three time Microsoft MVP and a blogger</mat-card-subtitle>\r\n            </mat-card-header>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n        <mat-grid-list cols=\"3\" rowHeight=\"200px\">\r\n            <mat-grid-tile colspan=\"2\" [style.background]=\"color5\">\r\n                <span>\r\n                    <i>I've</i> been in software development for over 17 years. \r\n                    I'm a three-time Microsoft MVP and the author of a two books, and several technology articles from Dot Net Curry and DNC magazine. \r\n                    I hold a master's degree in software systems from the University of St. Thomas, Minneapolis and St. Paul, USA.    \r\n                </span>\r\n                </mat-grid-tile>\r\n            <a href=\"https://www.linkedin.com/in/keertikotaru/\" target=\"__blank\">\r\n                <mat-grid-tile [style.background]=\"color1\">\r\n                    <img src=\"assets/Linkedin.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\r\n                    <div class=\"link\">\r\n                        View LinkedIn Profile\r\n                    </div>\r\n                </mat-grid-tile>\r\n            </a>\r\n            <a href=\"https://twitter.com/keertikotaru\" target=\"__blank\">\r\n                <mat-grid-tile [style.background]=\"color2\">\r\n                    <img src=\"assets/twitter.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\r\n                    <div class=\"link\">\r\n                        Follow on Twitter\r\n                    </div>\r\n                </mat-grid-tile>\r\n            </a>\r\n            <a href=\"https://github.com/kvkirthy/\" target=\"__blank\">\r\n\r\n                <mat-grid-tile [style.background]=\"color3\">\r\n                    <img src=\"assets/github.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\r\n                    <div class=\"link\">\r\n                        Github Profile\r\n                    </div>\r\n                </mat-grid-tile>\r\n            </a>\r\n            <a href=\"https://stackoverflow.com/users/2955455/vencki\" target=\"__blank\">\r\n                <mat-grid-tile [style.background]=\"color4\">\r\n                    <img src=\"assets/stackoverflow.png\" class=\"img-logo\" alt=\"LinkedIn logo\">\r\n                    <div class=\"link\">\r\n                        Stackoverflow Profile\r\n                    </div>\r\n                </mat-grid-tile>\r\n            </a>\r\n\r\n        </mat-grid-list>\r\n    </div>\r\n    <!-- <div class=\"col-md-4\">\r\n        <div class=\"LI-profile-badge\"  data-version=\"v1\" data-size=\"large\" data-locale=\"en_US\" data-type=\"vertical\" data-theme=\"dark\" data-vanity=\"keertikotaru\"><a class=\"LI-simple-link\" href='https://www.linkedin.com/in/keertikotaru?trk=profile-badge'>V Keerti Kotaru</a></div>\r\n        <div> <a href=\"https://twitter.com/keertikotaru?ref_src=twsrc%5Etfw\" class=\"twitter-follow-button\" data-size=\"large\" data-show-count=\"true\">Follow @keertikotaru</a></div>\r\n    </div> -->\r\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"d-none d-xl-block\">\r\n  <div class=\"row book-content \">\r\n    <div class=\"col-6 flex-container\">\r\n      <div>\r\n        <mat-card>\r\n          <img mat-card-image src=\"assets/book-2.jpg\" class=\"book-image\" alt=\"Angular 2 book\">\r\n          <mat-card-content>\r\n            <p class=\"small-text\">\r\n              Build Angular applications faster and better with TypeScript and Material Design.\r\n            </p>\r\n          </mat-card-content>\r\n          <mat-card-actions class=\"small-text\">\r\n            <a mat-button href=\"https://www.apress.com/us/book/9781484254332\" target=\"__blank\"\r\n              color=\"primary\">Apress</a>\r\n            <a mat-button\r\n              href=\"https://www.amazon.com/Angular-Material-Design-TypeScript-Interface/dp/1484254333/ref=sr_1_3?keywords=angular+material&qid=1578191826&sr=8-3\"\r\n              target=\"__blank\" color=\"primary\">Amazon</a>\r\n            <a mat-button href=\"https://github.com/kvkirthy/superheroes\" target=\"__blank\" color=\"primary\">Samples</a>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"book-description\">\r\n        <div class=\"strong\">\r\n          Build Angular applications faster and better with TypeScript and Material Design.\r\n        </div>\r\n        <br />\r\n        <div>\r\n          You will learn how to build a web interface and use Google's open source Angular Material library of\r\n          ready-made and easy-to-use components.\r\n        </div>\r\n        <br />\r\n        <div>\r\n          This book uses Angular with TypeScript (a superset to JavaScript) to enable use of data types and take\r\n          advantage of programming constructs such as classes, interfaces, generic templates, and more. You also will\r\n          utilize various Angular features, including data binding, components, services, etc. You will build a single\r\n          page application with the help of routing capabilities available out of the box (Angular CLI) and interface\r\n          with remote services over HTTP.\r\n        </div>\r\n        <hr />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-6 flex-container\">\r\n      <div>\r\n        <mat-card>\r\n          <img mat-card-image src=\"assets/book-1.jpg\" class=\"book-image\" alt=\"Angular 2 book\">\r\n          <mat-card-content>\r\n            <p class=\"small-text\">\r\n              Build applications with AngularJS (version 1.x) and Material Design. Uses Angular Material library.\r\n            </p>\r\n          </mat-card-content>\r\n          <mat-card-actions class=\"small-text\">\r\n            <a mat-button href=\"https://www.apress.com/us/book/9781484221891\" target=\"__blank\"\r\n              color=\"primary\">Apress</a>\r\n            <a mat-button href=\"https://www.amazon.com/dp/B01L17B8LK/ref=rdr_kindle_ext_tmb\" target=\"__blank\"\r\n              color=\"primary\">Amazon</a>\r\n            <a mat-button href=\"https://github.com/kvkirthy/Angular-Material-Samples\" target=\"__blank\"\r\n              color=\"primary\">Samples</a>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n\r\n      </div>\r\n      <div class=\"book-description\">\r\n        <div class=\"strong\">\r\n          Build high-quality web applications with AngularJS (version 1.x) and Material Design.\r\n        </div>\r\n        <br />\r\n        <div>\r\n          Use a Material Design approach to position elements and create animations along with principles of the\r\n          sophisticated AngularJS JavaScript framework.\r\n        </div>\r\n        <br />\r\n        <div>\r\n          Take advantage of Angular Material, a UI component framework that works out of the box to design web pages\r\n          that adapt to various screen sizes and adhere to Material Design specifications.\r\n        </div>\r\n        <hr />\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"d-xl-none\">\r\n  <div class=\"row book-content\">\r\n    <div class=\"col-md-6 col-sm-12 flex-container\">\r\n      <div>\r\n        <mat-card>\r\n          <img mat-card-image src=\"assets/book-2.jpg\" class=\"book-image\" alt=\"Angular 2 book\">\r\n          <mat-card-actions class=\"small-text\">\r\n            <a mat-button href=\"https://www.apress.com/us/book/9781484254332\" target=\"__blank\"\r\n              color=\"primary\">Apress</a>\r\n            <a mat-button\r\n              href=\"https://www.amazon.com/Angular-Material-Design-TypeScript-Interface/dp/1484254333/ref=sr_1_3?keywords=angular+material&qid=1578191826&sr=8-3\"\r\n              target=\"__blank\" color=\"primary\">Amazon</a>\r\n            <a mat-button href=\"https://github.com/kvkirthy/superheroes\" target=\"__blank\" color=\"primary\">Samples</a>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"book-description d-none d-lg-block\">\r\n        <div class=\"strong\">\r\n          Build Angular applications faster and better with TypeScript and Material Design.\r\n        </div>\r\n        <br />\r\n        <div>\r\n          You will learn how to build a web interface and use Google's open source Angular Material library of\r\n          ready-made and easy-to-use components.\r\n        </div>\r\n        <br />\r\n        <div>\r\n          This book uses Angular with TypeScript (a superset to JavaScript) to enable use of data types and take\r\n          advantage of programming constructs such as classes, interfaces, generic templates, and more. You also will\r\n          utilize various Angular features, including data binding, components, services, etc. You will build a single\r\n          page application with the help of routing capabilities available out of the box (Angular CLI) and interface\r\n          with remote services over HTTP.\r\n        </div>\r\n        <hr />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-sm-12 flex-container\">\r\n      <div>\r\n        <mat-card>\r\n          <img mat-card-image src=\"assets/book-1.jpg\" class=\"book-image\" alt=\"Angular 2 book\">\r\n          <mat-card-actions class=\"small-text\">\r\n            <a mat-button href=\"https://www.apress.com/us/book/9781484221891\" target=\"__blank\"\r\n              color=\"primary\">Apress</a>\r\n            <a mat-button href=\"https://www.amazon.com/dp/B01L17B8LK/ref=rdr_kindle_ext_tmb\" target=\"__blank\"\r\n              color=\"primary\">Amazon</a>\r\n            <a mat-button href=\"https://github.com/kvkirthy/Angular-Material-Samples\" target=\"__blank\"\r\n              color=\"primary\">Samples</a>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"book-description d-none d-lg-block\">\r\n        <div class=\"strong\">\r\n          Build high-quality web applications with AngularJS (version 1.x) and Material Design.\r\n        </div>\r\n        <br />\r\n        <div>\r\n          Use a Material Design approach to position elements and create animations along with principles of the\r\n          sophisticated AngularJS JavaScript framework.\r\n        </div>\r\n        <br />\r\n        <div>\r\n          Take advantage of Angular Material, a UI component framework that works out of the box to design web pages\r\n          that adapt to various screen sizes and adhere to Material Design specifications.\r\n        </div>\r\n        <hr />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
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


    __webpack_exports__["default"] = "<!-- <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <a class=\"twitter-timeline\" href=\"https://twitter.com/KeertiKotaru?ref_src=twsrc%5Etfw\">Tweets by KeertiKotaru</a>\r\n    </div>\r\n</div> -->";
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


    var _pages_opinion_opinion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/opinion/opinion.component */
    "./src/app/pages/opinion/opinion.component.ts");

    var pages = [{
      path: 'opinion',
      component: _pages_opinion_opinion_component__WEBPACK_IMPORTED_MODULE_6__["OpinionComponent"],
      label: "Opinion"
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
      redirectTo: '/opinion',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]
    }]);

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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


    __webpack_exports__["default"] = ".root-node{\r\n    margin: 110px 10px auto 10px;\r\n    position: relative;\r\n}\r\n\r\nnav{\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n.fixed-header {\r\n    top: 0;\r\n    background-color: white;\r\n    position: fixed;\r\n    width: 100%;\r\n    z-index:999;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksTUFBTTtJQUNOLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3Qtbm9kZXtcclxuICAgIG1hcmdpbjogMTEwcHggMTBweCBhdXRvIDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbm5hdntcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uZml4ZWQtaGVhZGVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4Ojk5OTtcclxufSJdfQ== */";
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


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/error/error.component */
    "./src/app/pages/error/error.component.ts");
    /* harmony import */


    var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/about/about.component */
    "./src/app/pages/about/about.component.ts");
    /* harmony import */


    var _pages_books_books_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/books/books.component */
    "./src/app/pages/books/books.component.ts");
    /* harmony import */


    var _pages_opinion_opinion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/opinion/opinion.component */
    "./src/app/pages/opinion/opinion.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_sc_toolbar_sc_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ScToolbarComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _pages_error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"], _pages_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"], _pages_books_books_component__WEBPACK_IMPORTED_MODULE_16__["BooksComponent"], _pages_opinion_opinion_component__WEBPACK_IMPORTED_MODULE_17__["OpinionComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"]],
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


    __webpack_exports__["default"] = "mat-toolbar{\r\n    font-size: medium;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYy10b29sYmFyL3NjLXRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2MtdG9vbGJhci9zYy10b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhcntcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59Il19 */";
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


    __webpack_exports__["default"] = "div{\r\n    margin: 30px 1px 1px 15px;\r\n  }\r\n  \r\n  mat-card{\r\n    width: 100%;\r\n    border-radius: 10px;\r\n  }\r\n  \r\n  .img-logo{\r\n  width: 40px;\r\n}\r\n  \r\n  .link{\r\n  font-size: 10pt;\r\n  font-weight: bold;\r\n}\r\n  \r\n  a{\r\n  color: black;\r\n}\r\n  \r\n  mat-grid-tile{\r\n  border-radius: 5px;\r\n}\r\n  \r\n  span{\r\n  margin: 15px;\r\n  font-family: \"Book Antiqua\"\r\n}\r\n  \r\n  i{\r\n  font-size: 24pt\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUY7RUFDRSxXQUFXO0FBQ2I7O0VBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0UsWUFBWTtBQUNkOztFQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsWUFBWTtFQUNaO0FBQ0Y7O0VBRUE7RUFDRTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIG1hcmdpbjogMzBweCAxcHggMXB4IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbi5pbWctbG9nb3tcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLmxpbmt7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5he1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxubWF0LWdyaWQtdGlsZXtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJvb2sgQW50aXF1YVwiXHJcbn1cclxuXHJcbml7XHJcbiAgZm9udC1zaXplOiAyNHB0XHJcbn0iXX0= */";
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


    __webpack_exports__["default"] = ".col-6 mat-card{\r\n  width: 309px;\r\n}\r\n\r\n.col-md-6 mat-card{\r\n  width: 200px;\r\n  margin-top: 10px;\r\n}\r\n\r\nmat-card-content{\r\n  height: 45px;\r\n}\r\n\r\nmat-card-actions{\r\n  text-align: center;\r\n}\r\n\r\nbutton{\r\n  padding: 2px;\r\n}\r\n\r\n.small-text{\r\n  font-size: 10pt;\r\n}\r\n\r\n.d-xl-block .book-content {\r\n  margin: auto;\r\n  width:90%;\r\n  padding: 10px;\r\n}\r\n\r\n.col-6 .book-image {\r\n  height: 440px;\r\n  width: auto;\r\n}\r\n\r\n.col-md-6 .book-image {\r\n  height: 287px;\r\n  width: auto;\r\n}\r\n\r\n.d-xl-none .book-content {\r\n  margin: 35px;\r\n}\r\n\r\n.row{\r\n  margin-top: 10px;\r\n}\r\n\r\n.flex-container{\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.book-description{\r\n  padding: 10px;\r\n  font-size: 10pt;\r\n  text-align: justify;\r\n}\r\n\r\n.strong{\r\n  font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va3MvYm9va3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib29rcy9ib29rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC02IG1hdC1jYXJke1xyXG4gIHdpZHRoOiAzMDlweDtcclxufVxyXG5cclxuLmNvbC1tZC02IG1hdC1jYXJke1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC1jb250ZW50e1xyXG4gIGhlaWdodDogNDVweDtcclxufVxyXG5cclxubWF0LWNhcmQtYWN0aW9uc3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5zbWFsbC10ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG5cclxuLmQteGwtYmxvY2sgLmJvb2stY29udGVudCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOjkwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY29sLTYgLmJvb2staW1hZ2Uge1xyXG4gIGhlaWdodDogNDQwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5jb2wtbWQtNiAuYm9vay1pbWFnZSB7XHJcbiAgaGVpZ2h0OiAyODdweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmQteGwtbm9uZSAuYm9vay1jb250ZW50IHtcclxuICBtYXJnaW46IDM1cHg7XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5ib29rLWRlc2NyaXB0aW9ue1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5zdHJvbmd7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */";
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


    __webpack_exports__["default"] = "div{\r\n  margin: 20px 1px 1px 15px;\r\n}\r\n\r\nmat-card{\r\n  width: 280px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3Bpbmlvbi9vcGluaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcGluaW9uL29waW5pb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICBtYXJnaW46IDIwcHggMXB4IDFweCAxNXB4O1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuICB3aWR0aDogMjgwcHg7XHJcbn0iXX0= */";
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
    /*! C:\me\showcase\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map