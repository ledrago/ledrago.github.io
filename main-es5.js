var __read = (this && this.__read) || function (o, n) {
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
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/components/todo-detail/todo-detail.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/components/todo-detail/todo-detail.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/components/todo-dialog/todo-dialog.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/components/todo-dialog/todo-dialog.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"todoForm\">\r\n  <div>\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        formControlName=\"title\"\r\n        mat-dialog-title\r\n        placeholder=\"Titre\"\r\n      />\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div mat-dialog-content>\r\n    <mat-form-field>\r\n      <input formControlName=\"description\" matInput placeholder=\"Description\" />\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"item-checkbox\">\r\n    <label for=\"\">Effectué : </label>\r\n    <mat-checkbox formControlName=\"done\"></mat-checkbox>\r\n  </div>\r\n  <div mat-dialog-actions class=\"buttons-box\">\r\n    <button\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      type=\"submit\"\r\n      [disabled]=\"todoForm.invalid\"\r\n      [mat-dialog-close]=\"todoForm.value\"\r\n      cdkFocusInitial\r\n    >\r\n      <span *ngIf=\"data\">Changer</span>\r\n      <span *ngIf=\"!data\">Créer</span>\r\n    </button>\r\n    <button mat-raised-button color=\"primary\" mat-dialog-close cdkFocusInitial>\r\n      Fermer\r\n    </button>\r\n  </div>\r\n</form>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/components/todo/todo.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/components/todo/todo.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"gen-title\">The overkill Todo</h1>\r\n<button\r\n  mat-raised-button\r\n  color=\"primary\"\r\n  (click)=\"newTodo()\"\r\n  class=\"new-todo-button\"\r\n>\r\n  Nouvelle tâche <mat-icon>add_circle_outline</mat-icon>\r\n</button>\r\n<div *ngFor=\"let todo of todoList\" class=\"list\">\r\n  <mat-card class=\"list-item\" *ngIf=\"todo\">\r\n    <mat-card-header class=\"list-item-title\">\r\n      <mat-card-title [ngClass]=\"todo.done ? 'crossed' : ''\"\r\n        ><a [routerLink]=\"['/', todo.id]\">{{ todo.title }}</a></mat-card-title\r\n      >\r\n      <mat-checkbox\r\n        #todoState\r\n        (change)=\"changeTodoState(todo, todoState)\"\r\n        [checked]=\"todo.done\"\r\n      ></mat-checkbox>\r\n    </mat-card-header>\r\n  </mat-card>\r\n</div>\r\n<router-outlet></router-outlet>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_todo_components_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/todo/components/todo/todo.component */ "./src/app/todo/components/todo/todo.component.ts");
            /* harmony import */ var _todo_components_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo/components/todo-detail/todo-detail.component */ "./src/app/todo/components/todo-detail/todo-detail.component.ts");
            var routes = [
                {
                    path: "",
                    component: src_app_todo_components_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"],
                    children: [{ path: ":id", component: _todo_components_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_4__["TodoDetailComponent"] }]
                },
                { path: "**", redirectTo: "" }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = "ngrxTodoApp";
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-root",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
            /* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _todo_services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo/services/data.service */ "./src/app/todo/services/data.service.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _todo_components_todo_todo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo/components/todo/todo.component */ "./src/app/todo/components/todo/todo.component.ts");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _todo_store_todo_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todo/store/todo.reducer */ "./src/app/todo/store/todo.reducer.ts");
            /* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
            /* harmony import */ var _todo_store_todo_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./todo/store/todo.effects */ "./src/app/todo/store/todo.effects.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _todo_components_todo_dialog_todo_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./todo/components/todo-dialog/todo-dialog.component */ "./src/app/todo/components/todo-dialog/todo-dialog.component.ts");
            /* harmony import */ var _todo_components_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./todo/components/todo-detail/todo-detail.component */ "./src/app/todo/components/todo-detail/todo-detail.component.ts");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            // Module
            // Services
            // Components
            // Angular material
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                        _todo_components_todo_todo_component__WEBPACK_IMPORTED_MODULE_10__["TodoComponent"],
                        _todo_components_todo_dialog_todo_dialog_component__WEBPACK_IMPORTED_MODULE_19__["TodoDialogComponent"],
                        _todo_components_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_20__["TodoDetailComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"],
                        // Api and store
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_todo_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]),
                        _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot({ todos: _todo_store_todo_reducer__WEBPACK_IMPORTED_MODULE_12__["TodoReducer"] }),
                        _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_todo_store_todo_effects__WEBPACK_IMPORTED_MODULE_14__["TodoEffects"]]),
                        _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                            maxAge: 10
                        }),
                        // Angular Material
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"]
                    ],
                    entryComponents: [_todo_components_todo_dialog_todo_dialog_component__WEBPACK_IMPORTED_MODULE_19__["TodoDialogComponent"]],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/app.state.ts": 
        /*!******************************!*\
          !*** ./src/app/app.state.ts ***!
          \******************************/
        /*! exports provided: default, initializeState */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return TodoState; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeState", function () { return initializeState; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var TodoState = /** @class */ (function () {
                function TodoState() {
                }
                return TodoState;
            }());
            var initializeState = function () {
                return { TodoList: Array(), TodoError: null };
            };
            /***/ 
        }),
        /***/ "./src/app/todo/components/todo-detail/todo-detail.component.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/todo/components/todo-detail/todo-detail.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vY29tcG9uZW50cy90b2RvLWRldGFpbC90b2RvLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/todo/components/todo-detail/todo-detail.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/todo/components/todo-detail/todo-detail.component.ts ***!
          \**********************************************************************/
        /*! exports provided: TodoDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailComponent", function () { return TodoDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _todo_dialog_todo_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo-dialog/todo-dialog.component */ "./src/app/todo/components/todo-dialog/todo-dialog.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _store_todo_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/todo.action */ "./src/app/todo/store/todo.action.ts");
            var TodoDetailComponent = /** @class */ (function () {
                function TodoDetailComponent(dialog, route, store, router) {
                    this.dialog = dialog;
                    this.route = route;
                    this.store = store;
                    this.router = router;
                    this.todo$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])("todos"));
                }
                TodoDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (params) {
                        _this.todoId = params["id"] || null;
                        _this.TodoDetailSubscription = _this.todo$.subscribe(function (state) {
                            _this.todoDetail = state.TodoList.find(function (el) { return el.id == _this.todoId; });
                            if (_this.todoDetail) {
                                _this.openDialog(_this.todoDetail);
                            }
                        });
                    });
                };
                TodoDetailComponent.prototype.openDialog = function (todo) {
                    var _this = this;
                    this.dialog
                        .open(_todo_dialog_todo_dialog_component__WEBPACK_IMPORTED_MODULE_3__["TodoDialogComponent"], {
                        width: "300px",
                        data: { todo: todo }
                    })
                        .afterClosed()
                        .subscribe(function (result) {
                        _this.TodoDetailSubscription.unsubscribe();
                        if (result &&
                            JSON.stringify(result) !== JSON.stringify(_this.todoDetail)) {
                            _this.store.dispatch(_store_todo_action__WEBPACK_IMPORTED_MODULE_6__["UpdateTodo"]({ payload: result }));
                        }
                        _this.router.navigate(["/"], { relativeTo: _this.route });
                    });
                };
                return TodoDetailComponent;
            }());
            TodoDetailComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            TodoDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-todo-detail",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/components/todo-detail/todo-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-detail.component.scss */ "./src/app/todo/components/todo-detail/todo-detail.component.scss")).default]
                })
            ], TodoDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/todo/components/todo-dialog/todo-dialog.component.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/todo/components/todo-dialog/todo-dialog.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\n  width: 100%;\n}\n\n.item-checkbox {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.buttons-box {\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9jb21wb25lbnRzL3RvZG8tZGlhbG9nL0M6XFxVc2Vyc1xcamVyb21fMDAwXFxEb2N1bWVudHNcXGFwcHNcXGFuZ3VsYXItbmdyeC10b2RvL3NyY1xcYXBwXFx0b2RvXFxjb21wb25lbnRzXFx0b2RvLWRpYWxvZ1xcdG9kby1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RvZG8vY29tcG9uZW50cy90b2RvLWRpYWxvZy90b2RvLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdG9kby9jb21wb25lbnRzL3RvZG8tZGlhbG9nL3RvZG8tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaXRlbS1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbnMtYm94IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuIiwibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLml0ZW0tY2hlY2tib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idXR0b25zLWJveCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/todo/components/todo-dialog/todo-dialog.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/todo/components/todo-dialog/todo-dialog.component.ts ***!
          \**********************************************************************/
        /*! exports provided: TodoDialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDialogComponent", function () { return TodoDialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var TodoDialogComponent = /** @class */ (function () {
                function TodoDialogComponent(dialogRef, data, fb) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.fb = fb;
                    this.todoForm = this.fb.group({
                        id: [null],
                        title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        description: [null],
                        done: [null]
                    });
                }
                TodoDialogComponent.prototype.ngOnInit = function () {
                    if (this.data) {
                        this.todoDetail = this.data.todo;
                        if (this.todoDetail) {
                            this.todoForm.patchValue({
                                id: this.todoDetail.id,
                                title: this.todoDetail.title,
                                description: this.todoDetail.description,
                                done: this.todoDetail.done
                            });
                        }
                    }
                };
                return TodoDialogComponent;
            }());
            TodoDialogComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
            ]; };
            TodoDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-todo-dialog",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/components/todo-dialog/todo-dialog.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-dialog.component.scss */ "./src/app/todo/components/todo-dialog/todo-dialog.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], TodoDialogComponent);
            /***/ 
        }),
        /***/ "./src/app/todo/components/todo/todo.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/todo/components/todo/todo.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".new-todo-button {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9jb21wb25lbnRzL3RvZG8vQzpcXFVzZXJzXFxqZXJvbV8wMDBcXERvY3VtZW50c1xcYXBwc1xcYW5ndWxhci1uZ3J4LXRvZG8vc3JjXFxhcHBcXHRvZG9cXGNvbXBvbmVudHNcXHRvZG9cXHRvZG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RvZG8vY29tcG9uZW50cy90b2RvL3RvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdG9kby9jb21wb25lbnRzL3RvZG8vdG9kby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctdG9kby1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbiIsIi5uZXctdG9kby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/todo/components/todo/todo.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/todo/components/todo/todo.component.ts ***!
          \********************************************************/
        /*! exports provided: TodoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function () { return TodoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _store_todo_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/todo.action */ "./src/app/todo/store/todo.action.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _todo_dialog_todo_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../todo-dialog/todo-dialog.component */ "./src/app/todo/components/todo-dialog/todo-dialog.component.ts");
            var TodoComponent = /** @class */ (function () {
                function TodoComponent(store, dialog) {
                    this.store = store;
                    this.dialog = dialog;
                    this.todoList = [];
                    this.todoError = null;
                    this.todo$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])("todos"));
                }
                TodoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.TodoSubscription = this.todo$
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) {
                        _this.todoList = x.TodoList;
                        _this.todoError = x.TodoError;
                    }))
                        .subscribe();
                    this.store.dispatch(_store_todo_action__WEBPACK_IMPORTED_MODULE_4__["GetTodos"]());
                };
                TodoComponent.prototype.changeTodoState = function (todo, checkbox) {
                    todo.done = checkbox.checked;
                    this.store.dispatch(_store_todo_action__WEBPACK_IMPORTED_MODULE_4__["UpdateTodo"]({ payload: todo }));
                };
                TodoComponent.prototype.newTodo = function () {
                    var _this = this;
                    this.dialog
                        .open(_todo_dialog_todo_dialog_component__WEBPACK_IMPORTED_MODULE_6__["TodoDialogComponent"], {
                        width: "300px"
                    })
                        .afterClosed()
                        .subscribe(function (result) {
                        if (result) {
                            result.id = _this.todoList.length + 1;
                            _this.store.dispatch(_store_todo_action__WEBPACK_IMPORTED_MODULE_4__["CreateTodo"]({ payload: result }));
                        }
                    });
                };
                return TodoComponent;
            }());
            TodoComponent.ctorParameters = function () { return [
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
            ]; };
            TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-todo",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/components/todo/todo.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo.component.scss */ "./src/app/todo/components/todo/todo.component.scss")).default]
                })
            ], TodoComponent);
            /***/ 
        }),
        /***/ "./src/app/todo/services/data.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/todo/services/data.service.ts ***!
          \***********************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DataService = /** @class */ (function () {
                function DataService() {
                }
                DataService.prototype.createDb = function () {
                    var todos = [
                        {
                            id: 1,
                            title: "Faire les courses de Noël",
                            description: "Aller à Darty plutôt qu'à la fnac",
                            done: true
                        },
                        {
                            id: 2,
                            title: "Acheter les cadeaux pour Steven",
                            description: "Peut être un dvd",
                            done: true
                        },
                        { id: 3, title: "Appeler Guillermo", description: "", done: false },
                        {
                            id: 4,
                            title: "Faire le ménage",
                            description: "Penser à acheter du desktop",
                            done: false
                        }
                    ];
                    return { todos: todos };
                };
                return DataService;
            }());
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/todo/services/todo.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/todo/services/todo.service.ts ***!
          \***********************************************/
        /*! exports provided: TodoService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function () { return TodoService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var TodoService = /** @class */ (function () {
                function TodoService(http) {
                    this.http = http;
                    this.SERVER_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
                }
                TodoService.prototype.getTodos = function () {
                    var _this = this;
                    var url = this.SERVER_URL + "/todos";
                    return this.http
                        .get(url)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this.handleError(error); }));
                };
                TodoService.prototype.updateTodo = function (todo) {
                    var _this = this;
                    var url = this.SERVER_URL + "/todos/" + todo.id;
                    return this.http
                        .put(url, todo)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this.handleError(error); }));
                };
                TodoService.prototype.createTodo = function (todo) {
                    var _this = this;
                    var url = this.SERVER_URL + "/todos";
                    return this.http
                        .post(url, todo)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this.handleError(error); }));
                };
                TodoService.prototype.handleError = function (error) {
                    if (error.error instanceof ErrorEvent) {
                        console.error("An error occurred:", error.error.message);
                    }
                    else {
                        console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
                    }
                    // return an observable with a user-facing error message
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])("Something bad happened; please try again later.");
                };
                return TodoService;
            }());
            TodoService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], TodoService);
            /***/ 
        }),
        /***/ "./src/app/todo/store/todo.action.ts": 
        /*!*******************************************!*\
          !*** ./src/app/todo/store/todo.action.ts ***!
          \*******************************************/
        /*! exports provided: GetTodos, SuccessGetTodos, UpdateTodo, SuccessUpdateTodo, CreateTodo, SuccessCreateTodo, ErrorTodo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTodos", function () { return GetTodos; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessGetTodos", function () { return SuccessGetTodos; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTodo", function () { return UpdateTodo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessUpdateTodo", function () { return SuccessUpdateTodo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTodo", function () { return CreateTodo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessCreateTodo", function () { return SuccessCreateTodo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorTodo", function () { return ErrorTodo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            // Getting todo list
            var GetTodos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Todo] - Get todos");
            var SuccessGetTodos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Todo] Success getting todos", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
            // Update todo
            var UpdateTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Todo] - Update todo", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
            var SuccessUpdateTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Todo] - Success updating todo");
            // Create todo
            var CreateTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Todo] - Create Todo", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
            var SuccessCreateTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Todo] - Success creating todo");
            // Error todo
            var ErrorTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Todo] - Error", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
            /***/ 
        }),
        /***/ "./src/app/todo/store/todo.effects.ts": 
        /*!********************************************!*\
          !*** ./src/app/todo/store/todo.effects.ts ***!
          \********************************************/
        /*! exports provided: TodoEffects */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEffects", function () { return TodoEffects; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _todo_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo.action */ "./src/app/todo/store/todo.action.ts");
            /* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/todo.service */ "./src/app/todo/services/todo.service.ts");
            // Modules
            // Actions
            // Services
            var TodoEffects = /** @class */ (function () {
                function TodoEffects(actions$, todosService) {
                    var _this = this;
                    this.actions$ = actions$;
                    this.todosService = todosService;
                    this.GetTodoList$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_todo_action__WEBPACK_IMPORTED_MODULE_5__["GetTodos"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
                        return _this.todosService.getTodos().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                            return _todo_action__WEBPACK_IMPORTED_MODULE_5__["SuccessGetTodos"]({ payload: data });
                        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_todo_action__WEBPACK_IMPORTED_MODULE_5__["ErrorTodo"](error));
                        }));
                    })); });
                    this.UpdateTodo$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_todo_action__WEBPACK_IMPORTED_MODULE_5__["UpdateTodo"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
                        return _this.todosService.updateTodo(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                            return _todo_action__WEBPACK_IMPORTED_MODULE_5__["SuccessUpdateTodo"]();
                        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_todo_action__WEBPACK_IMPORTED_MODULE_5__["ErrorTodo"](error));
                        }));
                    })); });
                    this.CreateTodo$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_todo_action__WEBPACK_IMPORTED_MODULE_5__["CreateTodo"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
                        return _this.todosService.createTodo(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                            return _todo_action__WEBPACK_IMPORTED_MODULE_5__["SuccessCreateTodo"]();
                        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_todo_action__WEBPACK_IMPORTED_MODULE_5__["ErrorTodo"](error));
                        }));
                    })); });
                }
                return TodoEffects;
            }());
            TodoEffects.ctorParameters = function () { return [
                { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
                { type: _services_todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"] }
            ]; };
            TodoEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], TodoEffects);
            /***/ 
        }),
        /***/ "./src/app/todo/store/todo.reducer.ts": 
        /*!********************************************!*\
          !*** ./src/app/todo/store/todo.reducer.ts ***!
          \********************************************/
        /*! exports provided: TodoReducer */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoReducer", function () { return TodoReducer; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _todo_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.action */ "./src/app/todo/store/todo.action.ts");
            /* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.state */ "./src/app/app.state.ts");
            var initialState = Object(_app_state__WEBPACK_IMPORTED_MODULE_3__["initializeState"])();
            var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_todo_action__WEBPACK_IMPORTED_MODULE_2__["SuccessGetTodos"], function (state, _a) {
                var payload = _a.payload;
                return Object.assign({}, state, { TodoList: sortByBooleanProp(payload, "done") });
            }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_todo_action__WEBPACK_IMPORTED_MODULE_2__["CreateTodo"], function (state, _a) {
                var payload = _a.payload;
                return Object.assign({}, state, { TodoList: __spread([payload], state.TodoList), TodoError: null });
            }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_todo_action__WEBPACK_IMPORTED_MODULE_2__["UpdateTodo"], function (state, _a) {
                var payload = _a.payload;
                var updateTodos = state.TodoList.map(function (el) {
                    if (el.id === payload.id) {
                        return payload;
                    }
                    else {
                        return el;
                    }
                });
                return Object.assign({}, state, { TodoList: sortByBooleanProp(updateTodos, "done"), TodoError: null });
            }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_todo_action__WEBPACK_IMPORTED_MODULE_2__["ErrorTodo"], function (state, error) {
                console.log(error);
                return Object.assign({}, state, { TodoError: error });
            }));
            function sortByBooleanProp(payload, property) {
                return payload.sort(function (a, b) { return a && b && a[property] - b[property]; });
            }
            function TodoReducer(state, action) {
                return reducer(state, action);
            }
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                apiUrl: "http://localhost:8080/api"
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
                .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\jerom_000\Documents\apps\angular-ngrx-todo\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map