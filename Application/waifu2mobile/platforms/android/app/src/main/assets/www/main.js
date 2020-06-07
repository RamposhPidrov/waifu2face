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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _persons_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persons/profile/profile.component */ "./src/app/persons/profile/profile.component.ts");
/* harmony import */ var _model_upload_model_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model-upload/model-upload.component */ "./src/app/model-upload/model-upload.component.ts");
/* harmony import */ var _persons_persons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persons/persons.component */ "./src/app/persons/persons.component.ts");
/* harmony import */ var _model_webcam_model_webcam_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model-webcam/model-webcam.component */ "./src/app/model-webcam/model-webcam.component.ts");








// import { SearchpersonsComponent } from './search-persons/search-persons.component';
var routes = [
    { path: 'modelupload', component: _model_upload_model_upload_component__WEBPACK_IMPORTED_MODULE_3__["ModelUploadComponent"] },
    { path: '', redirectTo: 'person', pathMatch: 'full' },
    { path: 'person', component: _persons_persons_component__WEBPACK_IMPORTED_MODULE_4__["PersonsComponent"] },
    { path: 'add', component: _persons_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    { path: 'person/upload/:id', component: _model_upload_model_upload_component__WEBPACK_IMPORTED_MODULE_3__["ModelUploadComponent"] },
    { path: 'person/webcam/:id', component: _model_webcam_model_webcam_component__WEBPACK_IMPORTED_MODULE_5__["ModelWebcamComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'waifu2angular';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
    return AppComponent;
}());

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _persons_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./persons/profile/profile.component */ "./src/app/persons/profile/profile.component.ts");
/* harmony import */ var _model_upload_model_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model-upload/model-upload.component */ "./src/app/model-upload/model-upload.component.ts");
/* harmony import */ var _persons_person_list_person_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./persons/person-list/person-list.component */ "./src/app/persons/person-list/person-list.component.ts");
/* harmony import */ var _persons_person_details_person_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./persons/person-details/person-details.component */ "./src/app/persons/person-details/person-details.component.ts");
/* harmony import */ var _persons_persons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./persons/persons.component */ "./src/app/persons/persons.component.ts");
/* harmony import */ var _persons_person_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./persons/person.service */ "./src/app/persons/person.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _model_webcam_model_webcam_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./model-webcam/model-webcam.component */ "./src/app/model-webcam/model-webcam.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_persons_person_service__WEBPACK_IMPORTED_MODULE_11__["PersonService"]], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _persons_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        _model_upload_model_upload_component__WEBPACK_IMPORTED_MODULE_7__["ModelUploadComponent"],
        _persons_person_list_person_list_component__WEBPACK_IMPORTED_MODULE_8__["PersonListComponent"],
        _persons_person_details_person_details_component__WEBPACK_IMPORTED_MODULE_9__["PersonDetailsComponent"],
        _persons_persons_component__WEBPACK_IMPORTED_MODULE_10__["PersonsComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
        _model_webcam_model_webcam_component__WEBPACK_IMPORTED_MODULE_13__["ModelWebcamComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _persons_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                    _model_upload_model_upload_component__WEBPACK_IMPORTED_MODULE_7__["ModelUploadComponent"],
                    _persons_person_list_person_list_component__WEBPACK_IMPORTED_MODULE_8__["PersonListComponent"],
                    _persons_person_details_person_details_component__WEBPACK_IMPORTED_MODULE_9__["PersonDetailsComponent"],
                    _persons_persons_component__WEBPACK_IMPORTED_MODULE_10__["PersonsComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                    _model_webcam_model_webcam_component__WEBPACK_IMPORTED_MODULE_13__["ModelWebcamComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                providers: [_persons_person_service__WEBPACK_IMPORTED_MODULE_11__["PersonService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_persons_person_list_person_list_component__WEBPACK_IMPORTED_MODULE_8__["PersonListComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
    _persons_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
    _model_upload_model_upload_component__WEBPACK_IMPORTED_MODULE_7__["ModelUploadComponent"],
    _persons_person_list_person_list_component__WEBPACK_IMPORTED_MODULE_8__["PersonListComponent"],
    _persons_person_details_person_details_component__WEBPACK_IMPORTED_MODULE_9__["PersonDetailsComponent"],
    _persons_persons_component__WEBPACK_IMPORTED_MODULE_10__["PersonsComponent"],
    _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
    _model_webcam_model_webcam_component__WEBPACK_IMPORTED_MODULE_13__["ModelWebcamComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 14, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "navbar-dark", "bg-dark"], ["href", "/person", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/person", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/add", "routerLinkActive", "active", 1, "nav-link"], [1, "nav", "navbar-nav", "navbar-right"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Waifu2Face");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Persons");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "New person");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ul", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
    return HeaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/model-upload/model-upload.component.ts":
/*!********************************************************!*\
  !*** ./src/app/model-upload/model-upload.component.ts ***!
  \********************************************************/
/*! exports provided: ModelUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelUploadComponent", function() { return ModelUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");
/* harmony import */ var _shared_custom_layers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/custom_layers */ "./src/app/shared/custom_layers.ts");
/* harmony import */ var _tensorflow_models_blazeface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tensorflow-models/blazeface */ "./node_modules/@tensorflow-models/blazeface/dist/blazeface.esm.js");
/* harmony import */ var _persons_person_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../persons/person.model */ "./src/app/persons/person.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _persons_person_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../persons/person.service */ "./src/app/persons/person.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");












var _c0 = ["personimg"];
var _c1 = ["person2img_uploaded"];
var _c2 = ["cropped_canvas"];
var _c3 = ["anwser"];
function ModelUploadComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModelUploadComponent_ng_template_19_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 18, 19);
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r7.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ModelUploadComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ModelUploadComponent_ng_template_19_img_0_Template, 2, 1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 17);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.imageSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ModelUploadComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModelUploadComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["serialization"].registerClass(_shared_custom_layers__WEBPACK_IMPORTED_MODULE_3__["HardSwish"]); // Needed for serialization.
_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["serialization"].registerClass(_shared_custom_layers__WEBPACK_IMPORTED_MODULE_3__["Relu6"]); // Needed for serialization.
_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["serialization"].registerClass(_shared_custom_layers__WEBPACK_IMPORTED_MODULE_3__["Lambda"]); // Needed for serialization.
_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["ENV"].set('WEBGL_PACK', false);
var ModelUploadComponent = /** @class */ (function () {
    function ModelUploadComponent(formBuilder, personService, route, router, dataStorageService) {
        this.formBuilder = formBuilder;
        this.personService = personService;
        this.route = route;
        this.router = router;
        this.dataStorageService = dataStorageService;
        this.trashhold_cropper = 0.95;
        this.DJANGO_SERVER = 'http://192.168.1.113:8000';
        this.person = new _persons_person_model__WEBPACK_IMPORTED_MODULE_5__["Person"](0, "", "", "", "", "");
        this.checkdoor = 'not loaded';
    }
    ModelUploadComponent.prototype.ngAfterContentInit = function () {
        this.getPerson(this.route.snapshot.paramMap.get('id'));
        // var img = document.getElementsByClassName('cont')[0];
        // var canvas = this.imageCroppedCanvas.nativeElement; //document.createElement('canvas');
        // var canvas = document.getElementById('img1canvas');
        // var canvas = document.createElement('canvas');
        //canvas.id = "mycanvas";
        // var context = canvas.getContext('2d');    
        // img.appendChild(canvas);
        // context.drawImage(this.imageEl);
    };
    ModelUploadComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.form = this.formBuilder.group({
                    profile: ['']
                });
                this.loadModels();
                return [2 /*return*/];
            });
        });
    };
    // loads siamese model and cropper model
    ModelUploadComponent.prototype.loadModels = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.loading = true;
                        console.log('loading model...');
                        // const MODEL_URL = this.DJANGO_SERVER + '/media/cropper_model2/model.json';
                        // const cal = await loadGraphModel(MODEL_URL);
                        // this.model_cropper = cal
                        console.log(this.model_cropper);
                        _a = this;
                        return [4 /*yield*/, _tensorflow_models_blazeface__WEBPACK_IMPORTED_MODULE_4__["load"]()];
                    case 1:
                        _a.model_cropper = _c.sent();
                        //this.model = await tf.loadLayersModel(this.DJANGO_SERVER + '/media/model.json')
                        console.log(this.model_cropper);
                        _b = this;
                        return [4 /*yield*/, _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["loadLayersModel"](this.DJANGO_SERVER + '/media/waifu2face/model.json')];
                    case 2:
                        _b.model = _c.sent();
                        console.log(this.model.summary());
                        console.log('Sucessfully loaded model');
                        console.log(this.model);
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    //when file uploaded
    ModelUploadComponent.prototype.fileChangeEvent = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var file, mimeType, reader;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (event.target.files && event.target.files[0]) {
                    if (event.target.files.length > 0) {
                        file = event.target.files[0];
                        this.form.get('profile').setValue(file);
                    }
                    if (event.length === 0)
                        return [2 /*return*/];
                    mimeType = event.target.files[0].type;
                    if (mimeType.match(/image\/*/) == null) {
                        return [2 /*return*/];
                    }
                    reader = new FileReader();
                    reader.readAsDataURL(event.target.files[0]);
                    reader.onload = function (res) {
                        _this.imageSrc = res.target.result;
                        setTimeout(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var predictions, img, canvas, context, imageObj, start, end, size;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.model_cropper.estimateFaces((this.imageEl2.nativeElement), false)];
                                    case 1:
                                        predictions = _a.sent();
                                        console.log(predictions);
                                        img = document.getElementsByClassName('cont')[0];
                                        canvas = this.imageCroppedCanvas.nativeElement;
                                        context = canvas.getContext('2d');
                                        imageObj = new Image();
                                        start = predictions[0].topLeft;
                                        end = predictions[0].bottomRight;
                                        size = [(end[0] - start[0]) * 1.5, (end[1] - start[1]) * 1.5];
                                        console.log(size);
                                        canvas.height = size[1];
                                        canvas.width = size[0];
                                        imageObj.onload = function () {
                                            var sourceX = start[0] - 15;
                                            var sourceY = start[1] - 15;
                                            var sourceWidth = size[1];
                                            var sourceHeight = size[0];
                                            var destWidth = size[1];
                                            var destHeight = size[0];
                                            var destX = 0;
                                            var destY = 0;
                                            context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
                                        };
                                        imageObj.src = this.imageEl2.nativeElement.src;
                                        console.log('mda');
                                        console.log(this.imageEl.nativeElement);
                                        console.log(this.imageCroppedCanvas.nativeElement);
                                        console.log([_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["browser"].fromPixels(this.imageEl.nativeElement).cast('float32').expandDims(), _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["browser"].fromPixels(this.imageEl.nativeElement).cast('float32').expandDims()]);
                                        this.predictions = this.model.predict([_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["browser"].fromPixels(this.imageEl.nativeElement).expandDims(), _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["browser"].fromPixels(this.imageCroppedCanvas.nativeElement).expandDims()]);
                                        console.log('final predict:');
                                        console.log(this.predictions);
                                        console.log(this.predictions.dataSync()[0]);
                                        console.log(this.predictions[0]);
                                        if (this.predictions[0] < 0.5) { //change button
                                            this.checkdoor = 'false';
                                        }
                                        else
                                            this.checkdoor = 'true';
                                        this.log_login(); //send log to server
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 0);
                    };
                }
                return [2 /*return*/];
            });
        });
    };
    ModelUploadComponent.prototype.log_login = function () {
        var _this = this;
        this.dataStorageService.log_login(this.person, this.form.get('profile').value, this.checkdoor).subscribe(function (res) {
            _this.response = res;
        }, function (err) {
            console.log(err);
        });
    };
    //http get person by id in url
    ModelUploadComponent.prototype.getPerson = function (id) {
        var _this = this;
        console.log('getPerson called');
        this.dataStorageService.get_person(id)
            .subscribe(function (data) {
            _this.person = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ModelUploadComponent.ɵfac = function ModelUploadComponent_Factory(t) { return new (t || ModelUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_persons_person_service__WEBPACK_IMPORTED_MODULE_7__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_9__["DataStorageService"])); };
    ModelUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModelUploadComponent, selectors: [["app-model-upload"]], viewQuery: function ModelUploadComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imageEl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imageEl2 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imageCroppedCanvas = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.anwser = _t.first);
        } }, decls: 27, vars: 8, consts: [[1, "cont", "d-flex", "justify-content-center", "align-items-center", "flex-column"], ["crossorigin", "anonymous", "hidden", "", 3, "src"], ["personimg", ""], [1, "rounded", "mx-auto", "d-block", "mb-3", 2, "max-width", "300px", 3, "src"], [1, "custom-file"], ["type", "file", 1, "custom-file-input", 3, "change"], [1, "custom-file-label"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["id", "myCanvas", 1, "rounded", "mx-auto", "d-block", "mb-3"], ["cropped_canvas", ""], [1, "list-group"], [1, "align-middle"], ["class", "btn btn-success mt-3", 4, "ngIf"], ["class", "btn btn-danger mt-3", 4, "ngIf"], ["src", "./assets/loading.gif"], ["crossorigin", "anonymous", "id", "image", "hidden", "", 3, "src", 4, "ngIf"], [1, "rounded", "mx-auto", "d-block", "mt-3", "mb-3", 2, "max-width", "400px", 3, "src"], ["crossorigin", "anonymous", "id", "image", "hidden", "", 3, "src"], ["person2img_uploaded", ""], [1, "btn", "btn-success", "mt-3"], [1, "btn", "btn-danger", "mt-3"]], template: function ModelUploadComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Login ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Job code:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ModelUploadComponent_Template_input_change_15_listener($event) { return ctx.fileChangeEvent($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Choose file");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ModelUploadComponent_div_18_Template, 2, 0, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ModelUploadComponent_ng_template_19_Template, 2, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "canvas", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ModelUploadComponent_button_25_Template, 2, 0, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ModelUploadComponent_button_26_Template, 2, 0, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.person.name, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.person.jobcode, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.person.image_crop, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.person.image_crop, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkdoor === "true");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkdoor === "false");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsLXVwbG9hZC9tb2RlbC11cGxvYWQuY29tcG9uZW50LmNzcyJ9 */"] });
    return ModelUploadComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModelUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-model-upload',
                templateUrl: './model-upload.component.html',
                styleUrls: ['./model-upload.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }, { type: _persons_person_service__WEBPACK_IMPORTED_MODULE_7__["PersonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_9__["DataStorageService"] }]; }, { imageEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['personimg']
        }], imageEl2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['person2img_uploaded']
        }], imageCroppedCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['cropped_canvas']
        }], anwser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['anwser']
        }] }); })();


/***/ }),

/***/ "./src/app/model-webcam/model-webcam.component.ts":
/*!********************************************************!*\
  !*** ./src/app/model-webcam/model-webcam.component.ts ***!
  \********************************************************/
/*! exports provided: ModelWebcamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelWebcamComponent", function() { return ModelWebcamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");
/* harmony import */ var _tensorflow_models_blazeface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tensorflow-models/blazeface */ "./node_modules/@tensorflow-models/blazeface/dist/blazeface.esm.js");
/* harmony import */ var _persons_person_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../persons/person.model */ "./src/app/persons/person.model.ts");
/* harmony import */ var _persons_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../persons/person.service */ "./src/app/persons/person.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");










var _c0 = ["personimg"];
var _c1 = ["person2img_uploaded"];
var _c2 = ["cropped_canvas"];
var _c3 = ["video"];
function ModelWebcamComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModelWebcamComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModelWebcamComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var ModelWebcamComponent = /** @class */ (function () {
    function ModelWebcamComponent(personService, route, router, dataStorageService) {
        this.personService = personService;
        this.route = route;
        this.router = router;
        this.dataStorageService = dataStorageService;
        this.trashhold_cropper = 0.95;
        this.DJANGO_SERVER = 'http://192.168.1.113:8000';
        this.person = new _persons_person_model__WEBPACK_IMPORTED_MODULE_4__["Person"](0, "", "", "", "", "");
        this.checkdoor = 'not loaded';
        this.loading = true;
    }
    ModelWebcamComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // this.loadModels();
                        console.log('loading mobilenet model...');
                        _a = this;
                        return [4 /*yield*/, _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["loadLayersModel"](this.DJANGO_SERVER + '/media/waifu2face/model.json')
                            // this.model = await mobilenet.load();
                        ];
                    case 1:
                        _a.model = _b.sent();
                        // this.model = await mobilenet.load();
                        console.log('Sucessfully loaded model');
                        this.loading = false;
                        setInterval(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log('hui');
                                        this.predictions = this.model.predict([_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["div"](_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["browser"].fromPixels(this.imageEl.nativeElement), 255).expandDims().cast('float32'), _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["div"](_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["browser"].fromPixels(this.video.nativeElement), 255).expandDims().cast('float32')]);
                                        console.log(this.predictions.dataSync());
                                        if (this.predictions.dataSync()[0] > 0.5) {
                                            //change button
                                            this.checkdoor = 'false';
                                        }
                                        else
                                            this.checkdoor = 'true';
                                        console.log('predictions');
                                        console.log(this.predictions);
                                        // this.predictions = await this.model.classify(this.video.nativeElement);
                                        return [4 /*yield*/, _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["nextFrame"]()];
                                    case 1:
                                        // this.predictions = await this.model.classify(this.video.nativeElement);
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 3000);
                        return [2 /*return*/];
                }
            });
        });
    };
    ModelWebcamComponent.prototype.ngAfterViewInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var vid;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.getPerson(this.route.snapshot.paramMap.get('id'));
                vid = this.video.nativeElement;
                if (navigator.mediaDevices.getUserMedia) {
                    navigator.mediaDevices.getUserMedia({ video: true })
                        .then(function (stream) {
                        vid.srcObject = stream;
                    })
                        .catch(function (err0r) {
                        console.log('Something went wrong!');
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    ModelWebcamComponent.prototype.loadModels = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.loading = true;
                        console.log('loading model...');
                        // const MODEL_URL = this.DJANGO_SERVER + '/media/cropper_model2/model.json';
                        // const cal = await loadGraphModel(MODEL_URL);
                        // this.model_cropper = cal
                        console.log(this.model_cropper);
                        _a = this;
                        return [4 /*yield*/, _tensorflow_models_blazeface__WEBPACK_IMPORTED_MODULE_3__["load"]()];
                    case 1:
                        _a.model_cropper = _c.sent();
                        //this.model = await tf.loadLayersModel(this.DJANGO_SERVER + '/media/model.json')
                        console.log(this.model_cropper);
                        _b = this;
                        return [4 /*yield*/, _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["loadLayersModel"](this.DJANGO_SERVER + '/media/waifu2face/model.json')];
                    case 2:
                        _b.model = _c.sent();
                        console.log(this.model.summary());
                        console.log('Sucessfully loaded model');
                        console.log(this.model);
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    ModelWebcamComponent.prototype.getPerson = function (id) {
        var _this = this;
        console.log('getPerson called');
        this.dataStorageService.get_person(id)
            .subscribe(function (data) {
            _this.person = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ModelWebcamComponent.ɵfac = function ModelWebcamComponent_Factory(t) { return new (t || ModelWebcamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_persons_person_service__WEBPACK_IMPORTED_MODULE_5__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_7__["DataStorageService"])); };
    ModelWebcamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModelWebcamComponent, selectors: [["app-model-webcam"]], viewQuery: function ModelWebcamComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imageEl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imageEl2 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imageCroppedCanvas = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
        } }, decls: 21, vars: 7, consts: [[1, "d-flex", "justify-content-center", "align-items-center", "flex-column"], ["crossorigin", "anonymous", 3, "src"], ["personimg", ""], ["crossorigin", "anonymous", "autoplay", "", "playsinline", "", "muted", "", "id", "webcam", "width", "300", "height", "300"], ["video", ""], [4, "ngIf"], [1, "list-group"], [1, "align-middle"], ["class", "btn btn-success mt-3", 4, "ngIf"], ["class", "btn btn-danger mt-3", 4, "ngIf"], ["src", "./assets/loading.gif"], [1, "btn", "btn-success", "mt-3"], [1, "btn", "btn-danger", "mt-3"]], template: function ModelWebcamComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Login ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Job code:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "video", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ModelWebcamComponent_div_15_Template, 2, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ModelWebcamComponent_button_19_Template, 2, 0, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ModelWebcamComponent_button_20_Template, 2, 0, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.person.name, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.person.jobcode, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.person.image_crop, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.predictions, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkdoor === "true");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkdoor === "false");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsLXdlYmNhbS9tb2RlbC13ZWJjYW0uY29tcG9uZW50LmNzcyJ9 */"] });
    return ModelWebcamComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModelWebcamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-model-webcam',
                templateUrl: './model-webcam.component.html',
                styleUrls: ['./model-webcam.component.css']
            }]
    }], function () { return [{ type: _persons_person_service__WEBPACK_IMPORTED_MODULE_5__["PersonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_7__["DataStorageService"] }]; }, { imageEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['personimg']
        }], imageEl2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['person2img_uploaded']
        }], imageCroppedCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['cropped_canvas']
        }], video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['video']
        }] }); })();


/***/ }),

/***/ "./src/app/persons/person-details/person-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/persons/person-details/person-details.component.ts ***!
  \********************************************************************/
/*! exports provided: PersonDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailsComponent", function() { return PersonDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../person.service */ "./src/app/persons/person.service.ts");
/* harmony import */ var _person_list_person_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../person-list/person-list.component */ "./src/app/persons/person-list/person-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






function PersonDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login with upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login with webcam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.person.image_crop, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.person.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.person.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.person.jobcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "upload/", ctx_r0.person.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "webcam/", ctx_r0.person.id, "");
} }
//Elements inside persons list
var PersonDetailsComponent = /** @class */ (function () {
    function PersonDetailsComponent(personService, listComponent) {
        this.personService = personService;
        this.listComponent = listComponent;
    }
    PersonDetailsComponent.prototype.ngOnInit = function () {
        this.id = this.person.id;
    };
    PersonDetailsComponent.ɵfac = function PersonDetailsComponent_Factory(t) { return new (t || PersonDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_person_list_person_list_component__WEBPACK_IMPORTED_MODULE_2__["PersonListComponent"])); };
    PersonDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonDetailsComponent, selectors: [["person-details"]], inputs: { person: "person", id: "id", index: "index" }, decls: 2, vars: 1, consts: [[1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [4, "ngIf"], [1, "row", "no-gutters"], [1, "col-auto"], [1, "img-fluid", 2, "max-width", "100px", 3, "src", "alt"], [1, "col"], [1, "card-block", "px-2"], [1, "card-title"], [1, "card-text"], ["routerLinkActive", "active", 1, "btn", "btn-info", 3, "routerLink"], ["routerLinkActive", "active", 1, "btn", "btn-warning", 3, "routerLink"]], template: function PersonDetailsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonDetailsComponent_div_1_Template, 15, 6, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbnMvcGVyc29uLWRldGFpbHMvcGVyc29uLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });
    return PersonDetailsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'person-details',
                templateUrl: './person-details.component.html',
                styleUrls: ['./person-details.component.css']
            }]
    }], function () { return [{ type: _person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"] }, { type: _person_list_person_list_component__WEBPACK_IMPORTED_MODULE_2__["PersonListComponent"] }]; }, { person: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/persons/person-list/person-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/persons/person-list/person-list.component.ts ***!
  \**************************************************************/
/*! exports provided: PersonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonListComponent", function() { return PersonListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../person.service */ "./src/app/persons/person.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");






function PersonListComponent_person_details_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "person-details", 3);
} if (rf & 2) {
    var person_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("person", person_r1)("index", person_r1.id);
} }
var PersonListComponent = /** @class */ (function () {
    function PersonListComponent(personService, router, route, dataStorageService) {
        this.personService = personService;
        this.router = router;
        this.route = route;
        this.dataStorageService = dataStorageService;
    }
    PersonListComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.subscription = this.personService.personsChanged
                    .subscribe(function (persons) {
                    _this.persons = persons;
                });
                // console.log(this.persons);
                this.onFetchData();
                return [2 /*return*/];
            });
        });
    };
    // getPersons() {
    //   this.persondataService.list().subscribe(
    //     // the first argument is a function which runs on success
    //     data => {
    //       this.persons = data;
    //       // convert the dates to a nice format
    //     },
    //     // the second argument is a function which runs on error
    //     err => console.error(err),
    //     // the third argument is a function which runs on completion
    //     () => console.log('done loading persons')
    //   );
    // }
    PersonListComponent.prototype.onFetchData = function () {
        this.dataStorageService.fetchpersons();
    };
    // deletepersons() {
    //   this.personService.deleteAll()
    //     .subscribe(
    //       data => {
    //         console.log(data);
    //         this.reloadData();
    //       },
    //       error => console.log('ERROR: ' + error));
    // }
    PersonListComponent.prototype.reloadData = function () {
        // this.persons = this.personService.getAll()
        // this.persons = this.personService.getAll();
        console.log('persons: ' + this.persons);
    };
    PersonListComponent.ɵfac = function PersonListComponent_Factory(t) { return new (t || PersonListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"])); };
    PersonListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PersonListComponent, selectors: [["person-list"]], decls: 5, vars: 1, consts: [[1, "list-group"], [3, "person", "index", 4, "ngFor", "ngForOf"], [3, "click"], [3, "person", "index"]], template: function PersonListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Persons");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PersonListComponent_person_details_3_Template, 1, 2, "person-details", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PersonListComponent_Template_button_click_4_listener() { return ctx.onFetchData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.persons);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbnMvcGVyc29uLWxpc3QvcGVyc29uLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
    return PersonListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PersonListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'person-list',
                templateUrl: './person-list.component.html',
                styleUrls: ['./person-list.component.css']
            }]
    }], function () { return [{ type: _person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/persons/person.model.ts":
/*!*****************************************!*\
  !*** ./src/app/persons/person.model.ts ***!
  \*****************************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
var Person = /** @class */ (function () {
    function Person(index, id, name, jobcode, image, image_crop) {
        this.index = index;
        this.id = id;
        this.name = name;
        this.image = jobcode;
        this.image = image;
        this.image_crop = image_crop;
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/persons/person.service.ts":
/*!*******************************************!*\
  !*** ./src/app/persons/person.service.ts ***!
  \*******************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var PersonService = /** @class */ (function () {
    function PersonService() {
        this.personsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.persons = [];
    }
    PersonService.prototype.setpersons = function (persons) {
        console.log(persons);
        this.persons = persons;
        this.personsChanged.next(this.persons.slice());
    };
    PersonService.prototype.getpersons = function () {
        return this.persons.slice();
    };
    PersonService.prototype.getperson = function (index) {
        return this.persons[index];
    };
    PersonService.prototype.getpersonbyID = function (id_person) {
        return this.persons.slice().filter(function (x) { return x.id == id_person; })[0];
    };
    PersonService.prototype.addperson = function (person) {
        this.persons.push(person);
        this.personsChanged.next(this.persons.slice());
    };
    PersonService.prototype.updateperson = function (index, newperson) {
        this.persons[index] = newperson;
        this.personsChanged.next(this.persons.slice());
    };
    PersonService.prototype.deleteperson = function (index) {
        this.persons.splice(index, 1);
        this.personsChanged.next(this.persons.slice());
    };
    PersonService.ɵfac = function PersonService_Factory(t) { return new (t || PersonService)(); };
    PersonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PersonService, factory: PersonService.ɵfac });
    return PersonService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/persons/persons.component.ts":
/*!**********************************************!*\
  !*** ./src/app/persons/persons.component.ts ***!
  \**********************************************/
/*! exports provided: PersonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonsComponent", function() { return PersonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _person_list_person_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person-list/person-list.component */ "./src/app/persons/person-list/person-list.component.ts");



var PersonsComponent = /** @class */ (function () {
    function PersonsComponent() {
    }
    PersonsComponent.prototype.ngOnInit = function () {
    };
    PersonsComponent.ɵfac = function PersonsComponent_Factory(t) { return new (t || PersonsComponent)(); };
    PersonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonsComponent, selectors: [["app-persons"]], decls: 3, vars: 0, consts: [[1, "row"], [1, "col-md-12"]], template: function PersonsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "person-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_person_list_person_list_component__WEBPACK_IMPORTED_MODULE_1__["PersonListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbnMvcGVyc29ucy5jb21wb25lbnQuY3NzIn0= */"] });
    return PersonsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-persons',
                templateUrl: './persons.component.html',
                styleUrls: ['./persons.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/persons/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/persons/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/upload.service */ "./src/app/shared/upload.service.ts");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../person.service */ "./src/app/persons/person.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");







var _c0 = ["nameInput"];
var _c1 = ["jobcodeInput"];
function ProfileComponent_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
//FOR CREATION
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(formBuilder, uploadService, personService, route, router) {
        this.formBuilder = formBuilder;
        this.uploadService = uploadService;
        this.personService = personService;
        this.route = route;
        this.router = router;
        this.DJANGO_SERVER = 'http://192.168.1.113:8000';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            profile: ['']
        });
    };
    ProfileComponent.prototype.onChange = function (event, files) {
        var _this = this;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.form.get('profile').setValue(file);
        }
        if (event.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        //console.log(this.form.get('profile').value);
        formData.append('image', this.form.get('profile').value);
        formData.append('image_crop', this.form.get('profile').value);
        formData.append('name', this.nameInputRef.nativeElement.value);
        formData.append('jobcode', this.jobcodeInputRef.nativeElement.value);
        // console.log(this.form.get('profile').value)
        this.uploadService.upload(formData).subscribe(function (res) {
            _this.response = res;
            _this.imageURL = "" + _this.DJANGO_SERVER + res.image;
        }, function (err) {
            console.log(err);
        });
        this.router.navigate(['/person']);
    };
    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], viewQuery: function ProfileComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nameInputRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.jobcodeInputRef = _t.first);
        } }, decls: 24, vars: 1, consts: [[3, "ngSubmit"], ["for", "name"], ["type", "text", "id", "name", 1, "form-control"], ["nameInput", ""], ["type", "text", "id", "jobcode", 1, "form-control"], ["jobcodeInput", ""], ["height", "200", "class", "rounded mx-auto d-block mb-3", 3, "src", 4, "ngIf"], [1, "input-group", "mb-3"], [1, "custom-file"], ["type", "file", "type", "file", "id", "customFile", "name", "profile", "accept", "image/*", 1, "custom-file-input", 3, "change"], ["file", ""], ["for", "customFile", 1, "custom-file-label"], [1, "row", "center"], ["type", "submit", 1, "btn", "btn-danger", "btn-lg", "btn-block"], ["height", "200", 1, "rounded", "mx-auto", "d-block", "mb-3", 3, "src"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create new person");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Job code");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Person image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProfileComponent_img_14_Template, 1, 1, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx.onChange($event, _r3.files); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Choose file");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Create new person");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgURL);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbnMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });
    return ProfileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"] }, { type: _person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { nameInputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nameInput', { static: false }]
        }], jobcodeInputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['jobcodeInput', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/custom_layers.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/custom_layers.ts ***!
  \*****************************************/
/*! exports provided: HardSwish, Relu6, Lambda */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardSwish", function() { return HardSwish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relu6", function() { return Relu6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lambda", function() { return Lambda; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");


var HardSwish = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HardSwish, _super);
    // constructor(config) {
    //   super(config);
    //   this.alpha = config.alpha;
    // }
    function HardSwish() {
        return _super.call(this, {}) || this;
    }
    HardSwish.prototype.call = function (input) {
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tidy"](function () {
            var x = input.cast('float32');
            return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["mul"](x, _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["relu6"](x.add(3.0))).div(6.0);
            //return tf.sigmoid(x.mul(this.alpha)).mul(x);
        });
    };
    HardSwish.prototype.computeOutputShape = function (inputShape) {
        return inputShape;
    };
    Object.defineProperty(HardSwish, "className", {
        get: function () {
            return 'HardSwish';
        },
        enumerable: true,
        configurable: true
    });
    HardSwish.prototype.getConfig = function () {
        var config = { alpha: this.alpha };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    return HardSwish;
}(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["layers"].Layer));

var Relu6 = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Relu6, _super);
    // constructor(config) {
    //   super(config);
    //   this.alpha = config.alpha;
    // }
    function Relu6() {
        return _super.call(this, {}) || this;
    }
    Relu6.prototype.call = function (input) {
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tidy"](function () {
            var x = input.cast('float32');
            return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["relu6"](x);
            //return tf.sigmoid(x.mul(this.alpha)).mul(x);
        });
    };
    Relu6.prototype.computeOutputShape = function (inputShape) {
        return inputShape;
    };
    Object.defineProperty(Relu6, "className", {
        get: function () {
            return 'Relu6';
        },
        enumerable: true,
        configurable: true
    });
    Relu6.prototype.getConfig = function () {
        var config = { alpha: this.alpha };
        var baseConfig = _super.prototype.getConfig.call(this);
        Object.assign(config, baseConfig);
        return config;
    };
    return Relu6;
}(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["layers"].Layer));

var Lambda = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Lambda, _super);
    function Lambda() {
        return _super.call(this, {}) || this;
    }
    Lambda.prototype.computeOutputShape = function (inputShape) {
        console.log(inputShape);
        return [1, 100];
    };
    Lambda.prototype.call = function (input) {
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tidy"](function () {
            var x = input[0].cast('float32');
            var y = input[1].cast('float32');
            // let da = tf.sum(tf.square(tf.sub(input[0], input[1])), 1, true)
            // console.log(tf.sqrt(tf.maximum(da, 0.0000001)))
            // console.log(tf.abs(tf.sub(x, y)).dtype)
            // return tf.abs(tf.sub(x, y).cast('float32')).dataSync();
            // return tf.squaredDifference(input[0], input[1]);
            console.log('x,y from lambda');
            console.log(x.dataSync(), y.dataSync());
            return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["sqrt"](_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["sum"]((_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["square"](_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["sub"](x, y))), 1, true));
        });
    };
    Object.defineProperty(Lambda, "className", {
        get: function () {
            return 'Lambda';
        },
        enumerable: true,
        configurable: true
    });
    return Lambda;
}(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["layers"].Layer));

// export class HardSwish extends tf.layers.Layer {
//     constructor() {
//       super({});
//       // TODO(bileschi): Can we point to documentation on masking here?
//       this.supportsMasking = true;
//     }
//     /**
//      * This layer only works on 4D Tensors [batch, height, width, channels],
//      * and produces output with twice as many channels.
//      *
//      * layer.computeOutputShapes must be overridden in the case that the output
//      * shape is not the same as the input shape.
//      * @param {*} inputShapes
//      */
//     computeOutputShape(inputShape) {
//       return [inputShape[0], inputShape[1], inputShape[2], 2 * inputShape[3]]
//     }
//     /**
//      * Centers the input and applies the following function to every element of
//      * the input.
//      *
//      *     x => [max(x, 0), max(-x, 0)]
//      *
//      * The theory being that there may be signal in the both negative and positive
//      * portions of the input.  Note that this will double the number of channels.
//      * @param inputs Tensor to be treated.
//      * @param kwargs Only used as a pass through to call hooks.  Unused in this
//      *   example code.
//      */
//     call(inputs, kwargs) {
//       let input = inputs;
//       if (Array.isArray(input)) {
//         input = input[0];
//       }
//       this.invokeCallHook(inputs, kwargs);
//       const origShape = input.shape;
//       const flatShape =
//           [origShape[0], origShape[1] * origShape[2] * origShape[3]];
//       const flattened = input.reshape(flatShape);
//       const centered = tf.sub(flattened, flattened.mean(1).expandDims(1));
//       const pos = centered.relu().reshape(origShape);
//       const neg = centered.neg().relu().reshape(origShape);
//       return tf.concat([pos, neg], 3);
//     }
//     /**
//      * If a custom layer class is to support serialization, it must implement
//      * the `className` static getter.
//      */
//     static get className() {
//       return 'HardSwish';
//     }
//   }
//   tf.serialization.registerClass(HardSwish);  // Needed for serialization.


/***/ }),

/***/ "./src/app/shared/data-storage.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/data-storage.service.ts ***!
  \************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _persons_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../persons/person.service */ "./src/app/persons/person.service.ts");







var DataStorageService = /** @class */ (function () {
    function DataStorageService(http, personService) {
        this.http = http;
        this.personService = personService;
        this.DJANGO_SERVER = "http://192.168.1.113:8000";
        this.error = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    DataStorageService.prototype.storepersons = function () {
        var persons = this.personService.getpersons();
        this.http
            .post(this.DJANGO_SERVER + "/api/persons", persons)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    DataStorageService.prototype.fetchpersons = function () {
        var _this = this;
        console.log('fetchpersons()');
        this.http
            .get(this.DJANGO_SERVER + "/api/persons")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (persons) {
            var e_1, _a;
            var posts = persons;
            try {
                // convert the dates to a nice format
                for (var posts_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(posts), posts_1_1 = posts_1.next(); !posts_1_1.done; posts_1_1 = posts_1.next()) {
                    var post = posts_1_1.value;
                    post.index;
                    post.image = _this.DJANGO_SERVER + post.image;
                    post.image_crop = _this.DJANGO_SERVER + post.image_crop;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (posts_1_1 && !posts_1_1.done && (_a = posts_1.return)) _a.call(posts_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return persons;
        })).subscribe(function (persons) {
            console.log('fetch2');
            console.log(persons);
            _this.personService.setpersons(persons);
        });
    };
    DataStorageService.prototype.get_person = function (id) {
        var _this = this;
        return this.http.get(this.DJANGO_SERVER + "/api/persons/one/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (person) {
            person.image = _this.DJANGO_SERVER + person.image;
            person.image_crop = _this.DJANGO_SERVER + person.image_crop;
            return person;
        }));
    };
    DataStorageService.prototype.upload = function (formData) {
        return this.http.post(this.DJANGO_SERVER + "/api/persons/", formData);
    };
    DataStorageService.prototype.log_login = function (person, image, checkdoor) {
        var formData = new FormData();
        //console.log(this.form.get('profile').value);
        formData.append('log_type', "INFO");
        formData.append('action', "login");
        formData.append('user', person.name);
        formData.append('image', image);
        formData.append('body', checkdoor);
        // console.log(image)
        // console.log(formData)
        return this.http.post(this.DJANGO_SERVER + "/api/log/", formData);
    };
    DataStorageService.ɵfac = function DataStorageService_Factory(t) { return new (t || DataStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_persons_person_service__WEBPACK_IMPORTED_MODULE_5__["PersonService"])); };
    DataStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataStorageService, factory: DataStorageService.ɵfac, providedIn: 'root' });
    return DataStorageService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _persons_person_service__WEBPACK_IMPORTED_MODULE_5__["PersonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/upload.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/upload.service.ts ***!
  \******************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");



var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
        this.DJANGO_SERVER = "http://192.168.1.113:8000";
    }
    UploadService.prototype.upload = function (formData) {
        return this.http.post(this.DJANGO_SERVER + "/api/persons/", formData);
    };
    UploadService.ɵfac = function UploadService_Factory(t) { return new (t || UploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    UploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UploadService, factory: UploadService.ɵfac, providedIn: 'root' });
    return UploadService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\waifu2mobile\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map