(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["office-admin-office-admin-module"],{

/***/ "./src/app/pages/office-admin/office-admin-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/office-admin/office-admin-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OfficeAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeAdminRoutingModule", function() { return OfficeAdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management/user-management.component */ "./src/app/pages/office-admin/user-management/user-management.component.ts");
/* harmony import */ var _permission_management_permission_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permission-management/permission-management.component */ "./src/app/pages/office-admin/permission-management/permission-management.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: 'user-management',
        component: _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_2__["UserManagementComponent"],
    },
    {
        path: 'permission-management',
        component: _permission_management_permission_management_component__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementComponent"],
    }];
var OfficeAdminRoutingModule = /** @class */ (function () {
    function OfficeAdminRoutingModule() {
    }
    OfficeAdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], OfficeAdminRoutingModule);
    return OfficeAdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/office-admin/office-admin.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/office-admin/office-admin.module.ts ***!
  \***********************************************************/
/*! exports provided: OfficeAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeAdminModule", function() { return OfficeAdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _office_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./office-admin-routing.module */ "./src/app/pages/office-admin/office-admin-routing.module.ts");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management/user-management.component */ "./src/app/pages/office-admin/user-management/user-management.component.ts");
/* harmony import */ var _permission_management_permission_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permission-management/permission-management.component */ "./src/app/pages/office-admin/permission-management/permission-management.component.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _core_data_smart_table_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@core/data/smart-table.service */ "./src/app/@core/data/smart-table.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var OfficeAdminModule = /** @class */ (function () {
    function OfficeAdminModule() {
    }
    OfficeAdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementComponent"], _permission_management_permission_management_component__WEBPACK_IMPORTED_MODULE_4__["PermissionManagementComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _office_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["OfficeAdminRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
            ],
            providers: [
                _core_data_smart_table_service__WEBPACK_IMPORTED_MODULE_7__["SmartTableService"],
            ],
        })
    ], OfficeAdminModule);
    return OfficeAdminModule;
}());



/***/ }),

/***/ "./src/app/pages/office-admin/permission-management/permission-management.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/office-admin/permission-management/permission-management.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  permission-management works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/office-admin/permission-management/permission-management.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/office-admin/permission-management/permission-management.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29mZmljZS1hZG1pbi9wZXJtaXNzaW9uLW1hbmFnZW1lbnQvcGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/office-admin/permission-management/permission-management.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/office-admin/permission-management/permission-management.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PermissionManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementComponent", function() { return PermissionManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PermissionManagementComponent = /** @class */ (function () {
    function PermissionManagementComponent() {
    }
    PermissionManagementComponent.prototype.ngOnInit = function () {
    };
    PermissionManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-permission-management',
            template: __webpack_require__(/*! ./permission-management.component.html */ "./src/app/pages/office-admin/permission-management/permission-management.component.html"),
            styles: [__webpack_require__(/*! ./permission-management.component.scss */ "./src/app/pages/office-admin/permission-management/permission-management.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PermissionManagementComponent);
    return PermissionManagementComponent;
}());



/***/ }),

/***/ "./src/app/pages/office-admin/user-management/user-management.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/office-admin/user-management/user-management.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-management works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/office-admin/user-management/user-management.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/office-admin/user-management/user-management.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29mZmljZS1hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/office-admin/user-management/user-management.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/office-admin/user-management/user-management.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent() {
    }
    UserManagementComponent.prototype.ngOnInit = function () {
    };
    UserManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-user-management',
            template: __webpack_require__(/*! ./user-management.component.html */ "./src/app/pages/office-admin/user-management/user-management.component.html"),
            styles: [__webpack_require__(/*! ./user-management.component.scss */ "./src/app/pages/office-admin/user-management/user-management.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ })

}]);
//# sourceMappingURL=office-admin-office-admin-module.js.map