(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gibon/Documents/hello-ang/src/main.ts */"zUnb");


/***/ }),

/***/ "14aH":
/*!******************************************************!*\
  !*** ./src/app/neon-button/neon-button.component.ts ***!
  \******************************************************/
/*! exports provided: NeonButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonButtonComponent", function() { return NeonButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NeonButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
NeonButtonComponent.ɵfac = function NeonButtonComponent_Factory(t) { return new (t || NeonButtonComponent)(); };
NeonButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NeonButtonComponent, selectors: [["neon-button"]], inputs: { content: "content" }, decls: 2, vars: 1, consts: [[1, "neon-button"]], template: function NeonButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content);
    } }, styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\n.neon-button[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 850px;\n  display: inline-block;\n  cursor: pointer;\n  text-decoration: none;\n  color: var(--clr-neon);\n  border: var(--clr-neon) 0.125em solid;\n  padding: 0.25em 1em;\n  border-radius: 0.25em;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;\n  box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);\n  position: relative;\n}\n\n.neon-button[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  box-shadow: 0 0 2em 0.5em var(--clr-neon);\n  opacity: 0;\n  background-color: var(--clr-neon);\n  z-index: -1;\n  transition: opacity 100ms linear;\n}\n\n.neon-button[_ngcontent-%COMP%]:hover, .neon-button[_ngcontent-%COMP%]:focus {\n  color: var(--clr-bg);\n  text-shadow: none;\n}\n\n.neon-button[_ngcontent-%COMP%]:hover::before, .neon-button[_ngcontent-%COMP%]:focus::before {\n  opacity: 1;\n}\n\n.neon-button[_ngcontent-%COMP%]:hover::after, .neon-button[_ngcontent-%COMP%]:focus::after {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5lb24tYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHNFQUFzRTtFQUN0RSwwRUFBMEU7RUFDMUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IseUNBQXlDO0VBQ3pDLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxVQUFVO0FBQ1oiLCJmaWxlIjoibmVvbi1idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5uZW9uLWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDg1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tY2xyLW5lb24pO1xuICBib3JkZXI6IHZhcigtLWNsci1uZW9uKSAwLjEyNWVtIHNvbGlkO1xuICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIHRleHQtc2hhZG93OiAwIDAgMC4xMjVlbSBoc2woMCAwJSAxMDAlIC8gMC4zKSwgMCAwIDAuNDVlbSBjdXJyZW50Q29sb3I7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjVlbSAwIHZhcigtLWNsci1uZW9uKSwgMCAwIDAuNWVtIDAgdmFyKC0tY2xyLW5lb24pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uZW9uLWJ1dHRvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm94LXNoYWRvdzogMCAwIDJlbSAwLjVlbSB2YXIoLS1jbHItbmVvbik7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1uZW9uKTtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXMgbGluZWFyO1xufVxuXG4ubmVvbi1idXR0b246aG92ZXIsXG4ubmVvbi1idXR0b246Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tY2xyLWJnKTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbi5uZW9uLWJ1dHRvbjpob3Zlcjo6YmVmb3JlLFxuLm5lb24tYnV0dG9uOmZvY3VzOjpiZWZvcmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubmVvbi1idXR0b246aG92ZXI6OmFmdGVyLFxuLm5lb24tYnV0dG9uOmZvY3VzOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../digital-clock/digital-clock.component */ "kY1C");
/* harmony import */ var _neon_button_neon_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../neon-button/neon-button.component */ "14aH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], decls: 8, vars: 0, consts: [[1, "title"], [2, "--clr-neon", "#B76CFD"], ["content", "Menu", 1, "Go_back", 2, "--clr-neon", "white", "font-size", "3rem"], [1, "box"], ["routerLink", "/", "content", "Rock, Paper, Scissors", 2, "--clr-neon", "#00FFFF", "font-size", "4rem"], ["routerLink", "/Tik-Tak-Toe", "content", "Tic Tac Toe", 2, "--clr-neon", "#66FF00", "font-size", "4rem"], ["routerLink", "/", "content", "Guess The Number ", 2, "--clr-neon", "hsl(317 100% 54%)", "font-size", "4rem"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pick your game!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "digital-clock", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "neon-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "neon-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "neon-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "neon-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_1__["DigitalClockComponent"], _neon_button_neon_button_component__WEBPACK_IMPORTED_MODULE_2__["NeonButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".box[_ngcontent-%COMP%] {\n  width: 900px;\n  margin: auto;\n  display: grid;\n  grid-row-gap: 100px;\n  padding-top: 90px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: Itim-Regular;\n  margin: auto;\n  text-align: center;\n  font-size: 6rem;\n  text-decoration: none;\n  cursor: default;\n  color: #ffcf09;\n  padding: 0.25em 1em;\n  padding-top: 60px;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;\n  position: relative;\n}\n\n.Go_back[_ngcontent-%COMP%] {\n  display: flex;\n  width: 290px;\n  height: 94px;\n  vertical-align: middle;\n  position: absolute;\n  top: 30px;\n  left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixzRUFBc0U7RUFDdEUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xuICB3aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1yb3ctZ2FwOiAxMDBweDtcbiAgcGFkZGluZy10b3A6IDkwcHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBJdGltLVJlZ3VsYXI7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDZyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBjb2xvcjogI2ZmY2YwOTtcbiAgcGFkZGluZzogMC4yNWVtIDFlbTtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIHRleHQtc2hhZG93OiAwIDAgMC4xMjVlbSBoc2woMCAwJSAxMDAlIC8gMC4zKSwgMCAwIDAuNDVlbSBjdXJyZW50Q29sb3I7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLkdvX2JhY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMjkwcHg7XG4gIGhlaWdodDogOTRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDMwcHg7XG59Il19 */"] });


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'hello-ang';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _neon_button_neon_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./neon-button/neon-button.component */ "14aH");
/* harmony import */ var _digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./digital-clock/digital-clock.component */ "kY1C");
/* harmony import */ var _xo_xo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xo/xo.component */ "iadf");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _neon_button_neon_button_component__WEBPACK_IMPORTED_MODULE_3__["NeonButtonComponent"],
        _digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_4__["DigitalClockComponent"],
        _xo_xo_component__WEBPACK_IMPORTED_MODULE_5__["XOComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "iadf":
/*!************************************!*\
  !*** ./src/app/xo/xo.component.ts ***!
  \************************************/
/*! exports provided: XOComponent, TTT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XOComponent", function() { return XOComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTT", function() { return TTT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../digital-clock/digital-clock.component */ "kY1C");
/* harmony import */ var _neon_button_neon_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../neon-button/neon-button.component */ "14aH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class XOComponent {
    constructor() { }
    ngOnInit() {
        let cell11 = document.getElementById("cell11");
        let cell12 = document.getElementById("cell12");
        let cell13 = document.getElementById("cell13");
        let cell21 = document.getElementById("cell21");
        let cell22 = document.getElementById("cell22");
        let cell23 = document.getElementById("cell23");
        let cell31 = document.getElementById("cell31");
        let cell32 = document.getElementById("cell32");
        let cell33 = document.getElementById("cell33");
        let reset = document.getElementById("reset");
        let ttt = new TTT([cell11, cell12, cell13, cell21, cell22, cell23, cell31, cell32, cell33]);
        cell11.onclick = (e) => { ttt.ClickCell(1, 1); };
        cell12.onclick = (e) => { ttt.ClickCell(1, 2); };
        cell13.onclick = (e) => { ttt.ClickCell(1, 3); };
        cell21.onclick = (e) => { ttt.ClickCell(2, 1); };
        cell22.onclick = (e) => { ttt.ClickCell(2, 2); };
        cell23.onclick = (e) => { ttt.ClickCell(2, 3); };
        cell31.onclick = (e) => { ttt.ClickCell(3, 1); };
        cell32.onclick = (e) => { ttt.ClickCell(3, 2); };
        cell33.onclick = (e) => { ttt.ClickCell(3, 3); };
        reset.onclick = (e) => { ttt.Reset(); };
    }
}
XOComponent.ɵfac = function XOComponent_Factory(t) { return new (t || XOComponent)(); };
XOComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XOComponent, selectors: [["app-xo"]], decls: 18, vars: 0, consts: [[2, "--clr-neon", "#B76CFD"], ["routerLink", "/", "content", "Menu", 1, "Go_back", 2, "--clr-neon", "white", "font-size", "3rem"], [1, "box"], [1, "board"], ["id", "cell11", 1, "cell"], ["id", "cell12", 1, "cell"], ["id", "cell13", 1, "cell"], ["id", "cell21", 1, "cell"], ["id", "cell22", 1, "cell"], ["id", "cell23", 1, "cell"], ["id", "cell31", 1, "cell"], ["id", "cell32", 1, "cell"], ["id", "cell33", 1, "cell"], [1, "b"], ["id", "reset", 1, "button"]], template: function XOComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "digital-clock", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "neon-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "RESET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_1__["DigitalClockComponent"], _neon_button_neon_button_component__WEBPACK_IMPORTED_MODULE_2__["NeonButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::after, *[_ngcontent-%COMP%]::before {\n  box-sizing: border-box;\n}\n\n[_nghost-%COMP%] {\n  --board-size: 800px;\n  --cell-size: 250px;\n  --mark-size: calc(var(--cell-size) * .9);\n  --clr-neon: #66FF00;\n}\n\n.Go_back[_ngcontent-%COMP%] {\n  display: flex;\n  width: 290px;\n  height: 94px;\n  vertical-align: middle;\n  position: absolute;\n  top: 30px;\n  left: 30px;\n}\n\n.b[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  width: var(--board-size);\n}\n\n.button[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 120px;\n  display: inline-block;\n  cursor: pointer;\n  text-decoration: none;\n  color: var(--clr-neon);\n  border: var(--clr-neon) 0.125em solid;\n  padding: 0.25em 1em;\n  border-radius: 0.25em;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;\n  box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);\n  position: relative;\n}\n\n.button[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  box-shadow: 0 0 2em 0.5em var(--clr-neon);\n  opacity: 0;\n  background-color: var(--clr-neon);\n  z-index: -1;\n  transition: opacity 100ms linear;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:focus {\n  color: var(--clr-bg);\n  text-shadow: none;\n}\n\n.button[_ngcontent-%COMP%]:hover::before, .button[_ngcontent-%COMP%]:focus::before {\n  opacity: 1;\n}\n\n.button[_ngcontent-%COMP%]:hover::after, .button[_ngcontent-%COMP%]:focus::after {\n  opacity: 1;\n}\n\n.box[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 55px;\n  width: 50%;\n}\n\n.board[_ngcontent-%COMP%] {\n  width: var(--board-size);\n  height: var(--board-size);\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: repeat(3, auto);\n  border: var(--clr-neon) .3em solid;\n  border-radius: 0.25em;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;\n  box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);\n}\n\n.cell[_ngcontent-%COMP%] {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  border: 1px solid black;\n  display: flex;\n  font-size: 250px;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  border: var(--clr-neon) 0.003em solid;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;\n  transition: .6s;\n}\n\n.cell[_ngcontent-%COMP%]:hover {\n  background: var(--clr-neon);\n  opacity: 40%;\n  text-align: center;\n}\n\n.cell[_ngcontent-%COMP%]:first-child, .cell[_ngcontent-%COMP%]:nth-child(2), .cell[_ngcontent-%COMP%]:nth-child(3) {\n  border-top: none;\n}\n\n.cell[_ngcontent-%COMP%]:nth-child(3n + 1) {\n  border-left: none;\n}\n\n.cell[_ngcontent-%COMP%]:nth-child(3n + 3) {\n  border-right: none;\n}\n\n.cell[_ngcontent-%COMP%]:last-child, .cell[_ngcontent-%COMP%]:nth-child(8), .cell[_ngcontent-%COMP%]:nth-child(7) {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsc0VBQXNFO0VBQ3RFLDBFQUEwRTtFQUMxRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUix5Q0FBeUM7RUFDekMsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDOztBQUVBOztFQUVFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLHNFQUFzRTtFQUN0RSwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsc0VBQXNFO0VBQ3RFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoieG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpob3N0IHtcbiAgLS1ib2FyZC1zaXplOiA4MDBweDtcbiAgLS1jZWxsLXNpemU6IDI1MHB4O1xuICAtLW1hcmstc2l6ZTogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogLjkpO1xuICAtLWNsci1uZW9uOiAjNjZGRjAwO1xufVxuXG4uR29fYmFjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyOTBweDtcbiAgaGVpZ2h0OiA5NHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogMzBweDtcbn1cblxuLmIge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IHZhcigtLWJvYXJkLXNpemUpO1xufVxuXG4uYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jbHItbmVvbik7XG4gIGJvcmRlcjogdmFyKC0tY2xyLW5lb24pIDAuMTI1ZW0gc29saWQ7XG4gIHBhZGRpbmc6IDAuMjVlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjEyNWVtIGhzbCgwIDAlIDEwMCUgLyAwLjMpLCAwIDAgMC40NWVtIGN1cnJlbnRDb2xvcjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNWVtIDAgdmFyKC0tY2xyLW5lb24pLCAwIDAgMC41ZW0gMCB2YXIoLS1jbHItbmVvbik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ1dHRvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm94LXNoYWRvdzogMCAwIDJlbSAwLjVlbSB2YXIoLS1jbHItbmVvbik7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1uZW9uKTtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXMgbGluZWFyO1xufVxuXG4uYnV0dG9uOmhvdmVyLFxuLmJ1dHRvbjpmb2N1cyB7XG4gIGNvbG9yOiB2YXIoLS1jbHItYmcpO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ1dHRvbjpob3Zlcjo6YmVmb3JlLFxuLmJ1dHRvbjpmb2N1czo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmJ1dHRvbjpob3Zlcjo6YWZ0ZXIsXG4uYnV0dG9uOmZvY3VzOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5ib3gge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDU1cHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5ib2FyZCB7XG4gIHdpZHRoOiB2YXIoLS1ib2FyZC1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1ib2FyZC1zaXplKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcbiAgYm9yZGVyOiB2YXIoLS1jbHItbmVvbikgLjNlbSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICB0ZXh0LXNoYWRvdzogMCAwIDAuMTI1ZW0gaHNsKDAgMCUgMTAwJSAvIDAuMyksIDAgMCAwLjQ1ZW0gY3VycmVudENvbG9yO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41ZW0gMCB2YXIoLS1jbHItbmVvbiksIDAgMCAwLjVlbSAwIHZhcigtLWNsci1uZW9uKTtcbn1cblxuLmNlbGwge1xuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAyNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IHZhcigtLWNsci1uZW9uKSAwLjAwM2VtIHNvbGlkO1xuICB0ZXh0LXNoYWRvdzogMCAwIDAuMTI1ZW0gaHNsKDAgMCUgMTAwJSAvIDAuMyksIDAgMCAwLjQ1ZW0gY3VycmVudENvbG9yO1xuICB0cmFuc2l0aW9uOiAuNnM7XG59XG5cbi5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLW5lb24pO1xuICBvcGFjaXR5OiA0MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNlbGw6Zmlyc3QtY2hpbGQsXG4uY2VsbDpudGgtY2hpbGQoMiksXG4uY2VsbDpudGgtY2hpbGQoMykge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uY2VsbDpudGgtY2hpbGQoM24gKyAxKSB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uY2VsbDpudGgtY2hpbGQoM24gKyAzKSB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLmNlbGw6bGFzdC1jaGlsZCxcbi5jZWxsOm50aC1jaGlsZCg4KSxcbi5jZWxsOm50aC1jaGlsZCg3KSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59Il19 */"] });
class TTT {
    constructor(t) {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.computerSymbol = -1;
        this.gameRunning = true;
        this.table = t;
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    Reset() {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.gameRunning = true;
        for (let i = 0; i < 9; i++) {
            this.table[i].style.color = "white";
            this.table[i].innerHTML = "&nbsp;";
        }
    }
    IsFull() {
        for (let i = 0; i < 9; i++) {
            if (this.board[i] == 0)
                return false;
        }
        return true;
    }
    ClickCell(x, y) {
        let p = 3 * (x - 1) + (y - 1);
        if (!this.gameRunning) {
            alert("Game over");
        }
        else {
            if (this.board[p] == this.computerSymbol) {
                alert("The computer protecting this box!");
            }
            else {
                if (this.board[p] == -this.computerSymbol) {
                    alert("already played");
                }
                else {
                    this.table[p].style.color = "#144dff";
                    this.table[p].innerHTML = "X";
                    this.board[p] = 1;
                    if (this.win(this.board) == 1) {
                        this.gameRunning = false;
                        alert("You have won!");
                    }
                    else {
                        if (this.IsFull()) {
                            this.gameRunning = false;
                            alert("Draw match");
                        }
                        else {
                            let v = this.minmax(-1, true);
                            this.board[v] = -1;
                            this.table[v].style.color = "#ff2914";
                            this.table[v].innerHTML = "O";
                            if (this.win(this.board) == -1) {
                                this.gameRunning = false;
                                alert("You have lost!");
                            }
                            else {
                                if (this.IsFull()) {
                                    this.gameRunning = false;
                                    alert("Draw match");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    win(board) {
        var b = board[1];
        if (board[0] == b && b == board[2] && b != 0)
            return b;
        b = board[4];
        if (board[3] == b && b == board[5] && b != 0)
            return b;
        b = board[7];
        if (board[6] == b && b == board[8] && b != 0)
            return b;
        b = board[3];
        if (board[0] == b && b == board[6] && b != 0)
            return b;
        b = board[4];
        if (board[1] == b && b == board[7] && b != 0)
            return b;
        b = board[5];
        if (board[2] == b && b == board[8] && b != 0)
            return b;
        b = board[4];
        if (board[0] == b && b == board[8] && b != 0)
            return b;
        if (board[2] == b && b == board[6] && b != 0)
            return b;
        return 0;
    }
    minmax(currentPlayer, root) {
        let winner = this.win(this.board);
        if (winner != 0)
            if (currentPlayer == -1)
                return winner;
            else
                return -winner;
        let possibleMoves = [];
        for (let i = 0; i < 9; i++) {
            if (this.board[i] == 0)
                possibleMoves.push(i);
        }
        let n = possibleMoves.length;
        if (n == 0)
            return 0;
        let which = -1;
        let v = 100;
        for (let j = 0; j < n; j++) {
            let move = possibleMoves[j];
            this.board[move] = currentPlayer;
            var m = -this.minmax(-currentPlayer, false);
            this.board[move] = 0;
            if (m < v) {
                v = m;
                which = move;
            }
        }
        if (root) {
            return (which);
        }
        else
            return (v);
    }
}


/***/ }),

/***/ "kY1C":
/*!**********************************************************!*\
  !*** ./src/app/digital-clock/digital-clock.component.ts ***!
  \**********************************************************/
/*! exports provided: DigitalClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalClockComponent", function() { return DigitalClockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DigitalClockComponent {
    constructor() {
        this.date = new Date();
    }
    ngOnInit() {
        const date = new Date();
        this.updateDate(date);
        setInterval(() => {
            const date = new Date();
            this.updateDate(date);
        }, 1000);
    }
    updateDate(date) {
        const hour = date.getHours();
        this.hour = hour < 10 ? '0' + hour : hour.toString();
        const minute = date.getMinutes();
        this.minute = minute < 10 ? '0' + minute : minute.toString();
        const seconds = date.getSeconds();
        this.second = seconds < 10 ? '0' + seconds : seconds.toString();
    }
}
DigitalClockComponent.ɵfac = function DigitalClockComponent_Factory(t) { return new (t || DigitalClockComponent)(); };
DigitalClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DigitalClockComponent, selectors: [["digital-clock"]], decls: 2, vars: 3, consts: [[1, "neon-clock"]], template: function DigitalClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.hour, ":", ctx.minute, ":", ctx.second, "");
    } }, styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\n.neon-clock[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 290px;\n  display: inline-block;\n  cursor: default;\n  text-decoration: none;\n  color: var(--clr-neon);\n  border: var(--clr-neon) 0.125em solid;\n  padding: 0.25em 1em;\n  border-radius: 0.25em;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;\n  box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);\n  position: absolute;\n  top: 30px;\n  right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZ2l0YWwtY2xvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsc0VBQXNFO0VBQ3RFLDBFQUEwRTtFQUMxRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYiIsImZpbGUiOiJkaWdpdGFsLWNsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubmVvbi1jbG9jayB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgd2lkdGg6IDI5MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tY2xyLW5lb24pO1xuICBib3JkZXI6IHZhcigtLWNsci1uZW9uKSAwLjEyNWVtIHNvbGlkO1xuICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIHRleHQtc2hhZG93OiAwIDAgMC4xMjVlbSBoc2woMCAwJSAxMDAlIC8gMC4zKSwgMCAwIDAuNDVlbSBjdXJyZW50Q29sb3I7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjVlbSAwIHZhcigtLWNsci1uZW9uKSwgMCAwIDAuNWVtIDAgdmFyKC0tY2xyLW5lb24pO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _xo_xo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xo/xo.component */ "iadf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'Tik-Tak-Toe', component: _xo_xo_component__WEBPACK_IMPORTED_MODULE_2__["XOComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map