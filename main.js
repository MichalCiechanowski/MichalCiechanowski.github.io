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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], decls: 8, vars: 0, consts: [[1, "title"], [2, "--clr-neon", "#B76CFD"], ["content", "Menu", 1, "Go_back", 2, "--clr-neon", "white", "font-size", "3rem"], [1, "box"], ["routerLink", "/Rock-Paper-Scisors", "content", "Rock Paper Scissors", 2, "--clr-neon", "#00FFFF", "font-size", "4rem"], ["routerLink", "/Tik-Tak-Toe", "content", "Tic Tac Toe", 2, "--clr-neon", "#66FF00", "font-size", "4rem"], ["routerLink", "/Guess-The-Number", "content", "Guess The Number ", 2, "--clr-neon", "hsl(317 100% 54%)", "font-size", "4rem"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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

/***/ "Bjtm":
/*!****************************************************************!*\
  !*** ./src/app/guess-the-number/guess-the-number.component.ts ***!
  \****************************************************************/
/*! exports provided: GuessTheNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuessTheNumberComponent", function() { return GuessTheNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../digital-clock/digital-clock.component */ "kY1C");
/* harmony import */ var _neon_button_neon_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../neon-button/neon-button.component */ "14aH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function GuessTheNumberComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your guess is higher.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GuessTheNumberComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your guess is lower.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GuessTheNumberComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes! That's it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GuessTheNumberComponent {
    constructor() {
        this.initializeGame();
    }
    ngOnInit() {
    }
    initializeGame() {
        this.noOfTries = 0;
        this.original = Math.floor(Math.random() * 10 + 1);
        this.guess = null;
        this.deviation = null;
    }
    verifyGuess() {
        this.deviation = this.original - this.guess;
        this.noOfTries = this.noOfTries + 1;
    }
}
GuessTheNumberComponent.ɵfac = function GuessTheNumberComponent_Factory(t) { return new (t || GuessTheNumberComponent)(); };
GuessTheNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuessTheNumberComponent, selectors: [["app-guess-the-number"]], decls: 25, vars: 5, consts: [[2, "--clr-neon", "#B76CFD"], ["routerLink", "/", "content", "Menu", 1, "Go_back", 2, "--clr-neon", "white", "font-size", "3rem"], [1, "container"], [1, "card", "bg-light", "mb-3"], [1, "card-body"], [1, "card-text"], [1, "input"], [3, "value", "input"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "text-info"], [1, "badge"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]], template: function GuessTheNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "digital-clock", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "neon-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Guess the Number !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Guess the computer generated random number between 1 and 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Your Guess: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function GuessTheNumberComponent_Template_input_input_12_listener($event) { return ctx.guess = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuessTheNumberComponent_Template_button_click_13_listener() { return ctx.verifyGuess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuessTheNumberComponent_Template_button_click_15_listener() { return ctx.initializeGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Restart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GuessTheNumberComponent_p_18_Template, 2, 0, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GuessTheNumberComponent_p_19_Template, 2, 0, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GuessTheNumberComponent_p_20_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Number of guesses : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.guess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviation < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviation > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviation === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.noOfTries);
    } }, directives: [_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_1__["DigitalClockComponent"], _neon_button_neon_button_component__WEBPACK_IMPORTED_MODULE_2__["NeonButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  background: transparent;\n  font-size: 22px;\n  margin: auto;\n  margin-top: 55px;\n  align-items: center;\n  width: 800px;\n  height: 800px;\n  text-align: center;\n  border: hsl(317 100% 54%)0.125em solid;\n  border-radius: 0.25em;\n  box-shadow: inset 0 0 0.5em 0 hsl(317 100% 54%), 0 0 0.5em 0 hsl(317 100% 54%);\n}\n\nh2[_ngcontent-%COMP%] {\n  padding-top: 200px;\n  color: hsl(317 100% 54%);\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em hsl(317 100% 54%);\n}\n\n.Go_back[_ngcontent-%COMP%] {\n  display: flex;\n  width: 290px;\n  height: 94px;\n  vertical-align: middle;\n  position: absolute;\n  top: 30px;\n  left: 30px;\n}\n\n.input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  color: hsl(317 100% 54%);\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em hsl(317 100% 54%);\n}\n\nlabel[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0.125em solid hsl(317 100% 54%);\n  width: 238px;\n  height: 23px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 5px;\n  margin-bottom: 5px;\n  background: transparent;\n  border-radius: 0.25em;\n  color: hsl(317 100% 54%);\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em hsl(317 100% 54%);\n  box-shadow: inset 0 0 0.5em 0 hsl(317 100% 54%), 0 0 0.5em 0 hsl(317 100% 54%);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  padding: 5px;\n  background: transparent;\n  width: 250px;\n  height: 35px;\n  margin-left: auto;\n  margin-right: auto;\n  border: 0.125em solid hsl(317 100% 54%);\n  border-radius: 0.25em;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em hsl(317 100% 54%);\n  box-shadow: inset 0 0 0.5em 0 hsl(317 100% 54%), 0 0 0.5em 0 hsl(317 100% 54%);\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: hsl(317 100% 54%);\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em hsl(317 100% 54%);\n}\n\np[_ngcontent-%COMP%] {\n  color: hsl(317 100% 54%);\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em hsl(317 100% 54%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1ZXNzLXRoZS1udW1iZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLHFCQUFxQjtFQUNyQiw4RUFBOEU7QUFDaEY7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLDJFQUEyRTtBQUM3RTs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLDJFQUEyRTtBQUM3RTs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QiwyRUFBMkU7RUFDM0UsOEVBQThFO0FBQ2hGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxxQkFBcUI7RUFDckIsMkVBQTJFO0VBQzNFLDhFQUE4RTtBQUNoRjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwyRUFBMkU7QUFDN0U7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMkVBQTJFO0FBQzdFIiwiZmlsZSI6Imd1ZXNzLXRoZS1udW1iZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDU1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IGhzbCgzMTcgMTAwJSA1NCUpMC4xMjVlbSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41ZW0gMCBoc2woMzE3IDEwMCUgNTQlKSwgMCAwIDAuNWVtIDAgaHNsKDMxNyAxMDAlIDU0JSk7XG59XG5cbmgyIHtcbiAgcGFkZGluZy10b3A6IDIwMHB4O1xuICBjb2xvcjogaHNsKDMxNyAxMDAlIDU0JSk7XG4gIHRleHQtc2hhZG93OiAwIDAgMC4xMjVlbSBoc2woMCAwJSAxMDAlIC8gMC4zKSwgMCAwIDAuNDVlbSBoc2woMzE3IDEwMCUgNTQlKTtcbn1cblxuLkdvX2JhY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMjkwcHg7XG4gIGhlaWdodDogOTRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDMwcHg7XG59XG5cbi5pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiBoc2woMzE3IDEwMCUgNTQlKTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjEyNWVtIGhzbCgwIDAlIDEwMCUgLyAwLjMpLCAwIDAgMC40NWVtIGhzbCgzMTcgMTAwJSA1NCUpO1xufVxuXG5sYWJlbCB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiAwLjEyNWVtIHNvbGlkIGhzbCgzMTcgMTAwJSA1NCUpO1xuICB3aWR0aDogMjM4cHg7XG4gIGhlaWdodDogMjNweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIGNvbG9yOiBoc2woMzE3IDEwMCUgNTQlKTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjEyNWVtIGhzbCgwIDAlIDEwMCUgLyAwLjMpLCAwIDAgMC40NWVtIGhzbCgzMTcgMTAwJSA1NCUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41ZW0gMCBoc2woMzE3IDEwMCUgNTQlKSwgMCAwIDAuNWVtIDAgaHNsKDMxNyAxMDAlIDU0JSk7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXI6IDAuMTI1ZW0gc29saWQgaHNsKDMxNyAxMDAlIDU0JSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjEyNWVtIGhzbCgwIDAlIDEwMCUgLyAwLjMpLCAwIDAgMC40NWVtIGhzbCgzMTcgMTAwJSA1NCUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41ZW0gMCBoc2woMzE3IDEwMCUgNTQlKSwgMCAwIDAuNWVtIDAgaHNsKDMxNyAxMDAlIDU0JSk7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiBoc2woMzE3IDEwMCUgNTQlKTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjEyNWVtIGhzbCgwIDAlIDEwMCUgLyAwLjMpLCAwIDAgMC40NWVtIGhzbCgzMTcgMTAwJSA1NCUpO1xufVxuXG5wIHtcbiAgY29sb3I6IGhzbCgzMTcgMTAwJSA1NCUpO1xuICB0ZXh0LXNoYWRvdzogMCAwIDAuMTI1ZW0gaHNsKDAgMCUgMTAwJSAvIDAuMyksIDAgMCAwLjQ1ZW0gaHNsKDMxNyAxMDAlIDU0JSk7XG59Il19 */"] });


/***/ }),

/***/ "OvyA":
/*!**************************************!*\
  !*** ./src/app/rps/rps.component.ts ***!
  \**************************************/
/*! exports provided: RpsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpsComponent", function() { return RpsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../digital-clock/digital-clock.component */ "kY1C");
/* harmony import */ var _neon_button_neon_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../neon-button/neon-button.component */ "14aH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function RpsComponent_div_26_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 18);
} }
function RpsComponent_div_26_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 19);
} }
function RpsComponent_div_26_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 20);
} }
function RpsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RpsComponent_div_26_i_1_Template, 1, 0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RpsComponent_div_26_i_2_Template, 1, 0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RpsComponent_div_26_i_3_Template, 1, 0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.enemySelected === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.enemySelected === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.enemySelected === 2);
} }
function RpsComponent_div_27_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You're the winner! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RpsComponent_div_27_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You lose. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RpsComponent_div_27_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "It's a tie! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RpsComponent_div_27_ng_template_5_Template(rf, ctx) { }
function RpsComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RpsComponent_div_27_ng_template_2_Template, 2, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RpsComponent_div_27_ng_template_3_Template, 2, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RpsComponent_div_27_ng_template_4_Template, 2, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RpsComponent_div_27_ng_template_5_Template, 0, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Pick again to continue or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RpsComponent_div_27_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Reset score");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.theResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
} }
function RpsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "selectedWeapon": a0 }; };
class RpsComponent {
    constructor() {
        this.title = 'GameGame';
        this.scores = [0, 0];
        this.weapons = [
            'rock',
            'paper',
            'scissors'
        ];
        this.playerSelected = -1;
        this.enemySelected = -1;
        this.loading = false;
        this.isResultShow = false;
        this.theResult = 0;
    }
    ngOnInit() {
    }
    pick(weapon) {
        if (this.loading)
            return;
        this.loading = true;
        this.playerSelected = weapon;
        setTimeout(() => {
            this.loading = false;
            const randomNum = Math.floor(Math.random() * 3);
            this.enemySelected = randomNum;
            this.checkResult();
            this.isResultShow = true;
        }, Math.floor(Math.random() * 500) + 200);
    }
    reset() {
        this.scores = [0, 0];
    }
    checkResult() {
        const playerPick = this.playerSelected;
        const enemyPick = this.enemySelected;
        if (playerPick == enemyPick) {
            this.theResult = 2;
        }
        else if ((playerPick - enemyPick + 3) % 3 == 1) {
            this.theResult = 0;
            this.scores[0] = this.scores[0] + 1;
        }
        else {
            this.theResult = 1;
            this.scores[1] = this.scores[1] + 1;
        }
    }
}
RpsComponent.ɵfac = function RpsComponent_Factory(t) { return new (t || RpsComponent)(); };
RpsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RpsComponent, selectors: [["app-game"]], decls: 29, vars: 14, consts: [[2, "--clr-neon", "#B76CFD"], ["routerLink", "/", "content", "Menu", 1, "Go_back", 2, "--clr-neon", "white", "font-size", "3rem"], [1, "content"], [1, "boards"], [1, "score-board"], ["mat-fab", "", "color", "primary", 1, "score"], ["mat-fab", "", 1, "score"], [1, "user"], [1, "motivation"], [1, "users-weapons"], [3, "ngClass", "click"], ["class", "flex-container flex-center enemy-hand", 4, "ngIf"], ["class", "flex-container flex-center", "style", "flex-direction: column", 4, "ngIf"], ["class", "flex-container flex-center", 4, "ngIf"], [1, "flex-container", "flex-center", "enemy-hand"], ["class", "fa fa-hand-rock-o", 4, "ngIf"], ["class", "fa fa-hand-paper-o", 4, "ngIf"], ["class", "fa fa-hand-scissors-o", 4, "ngIf"], [1, "fa", "fa-hand-rock-o"], [1, "fa", "fa-hand-paper-o"], [1, "fa", "fa-hand-scissors-o"], [1, "flex-container", "flex-center", 2, "flex-direction", "column"], [3, "ngSwitch"], [3, "ngSwitchCase"], ["ngSwitchDefault", ""], ["mat-raised-button", "", 1, "reset", 3, "click"], [1, "flex-container", "flex-center"]], template: function RpsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "digital-clock", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "neon-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Choose your weapon: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RpsComponent_Template_i_click_18_listener() { return ctx.pick(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ROCK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RpsComponent_Template_i_click_20_listener() { return ctx.pick(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "PAPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RpsComponent_Template_i_click_22_listener() { return ctx.pick(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "SCISSORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RpsComponent_div_26_Template, 4, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RpsComponent_div_27_Template, 10, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RpsComponent_div_28_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.scores[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.scores[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.playerSelected === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.playerSelected === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.playerSelected === 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enemySelected !== -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.isResultShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_1__["DigitalClockComponent"], _neon_button_neon_button_component__WEBPACK_IMPORTED_MODULE_2__["NeonButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchDefault"]], styles: [".content[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 55px;\n  align-items: center;\n  width: 800px;\n  height: 800px;\n  border: #00ffff 0.125em solid;\n  border-radius: 0.25em;\n  box-shadow: inset 0 0 0.5em 0 #00ffff, 0 0 0.5em 0 #00ffff;\n}\n\n.h2[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-left: 50%;\n}\n\n.Go_back[_ngcontent-%COMP%] {\n  display: flex;\n  width: 290px;\n  height: 94px;\n  vertical-align: middle;\n  position: absolute;\n  top: 30px;\n  left: 30px;\n}\n\n.boards[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  display: flex;\n  margin-top: 100px;\n  color: #00ffff;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #00ffff;\n}\n\n.user[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  margin-top: 200px;\n  color: #00ffff;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #00ffff;\n}\n\n.users-weapons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  color: #00ffff;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #00ffff;\n}\n\ni[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n  color: #00ffff;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #00ffff;\n}\n\n.motivation[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #00ffff;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #00ffff;\n}\n\n.enemy-hand[_ngcontent-%COMP%] {\n  animation-iteration-count: 1;\n  animation-timing-function: ease-in;\n  animation-duration: 0.3s;\n  color: #00ffff;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #00ffff;\n}\n\n.content1[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid red;\n  color: #00ffff;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #00ffff;\n}\n\n.content2[_ngcontent-%COMP%] {\n  display: grid;\n  color: white;\n  width: 200px;\n  text-shadow: none;\n  grid-template-columns: repeat(3, 1fr);\n  border: 1px solid forestgreen;\n  color: #00ffff;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #00ffff;\n}\n\n.score[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #00ffff;\n  width: 200px;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;\n  border: #00ffff 0.125em solid;\n  border-radius: 0.25em;\n  box-shadow: inset 0 0 0.5em 0 #00ffff, 0 0 0.5em 0 #00ffff;\n  font-size: 1.5em;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  font-size: 18px;\n  color: #00ffff;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #00ffff;\n}\n\n.flex-center[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  color: #00ffff;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #00ffff;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: black;\n  font-size: 36px;\n  border: none;\n  background: transparent;\n  margin-top: 15px;\n  padding: 15px;\n  color: #00ffff;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #00ffff;\n}\n\n.reset[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n  color: #00ffff;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #00ffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLDBEQUEwRDtBQUM1RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUVBQWlFO0FBQ25FOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlFQUFpRTtBQUNuRTs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGlFQUFpRTtBQUNuRTs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFlBQVk7RUFDWixzRUFBc0U7RUFDdEUsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQiwwREFBMEQ7RUFDMUQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLGlFQUFpRTtBQUNuRTs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGlFQUFpRTtBQUNuRTs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpRUFBaUU7QUFDbkUiLCJmaWxlIjoicnBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNTVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDgwMHB4O1xuICBib3JkZXI6ICMwMGZmZmYgMC4xMjVlbSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41ZW0gMCAjMDBmZmZmLCAwIDAgMC41ZW0gMCAjMDBmZmZmO1xufVxuXG4uaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNTAlO1xufVxuXG4uR29fYmFjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyOTBweDtcbiAgaGVpZ2h0OiA5NHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogMzBweDtcbn1cblxuLmJvYXJkcyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgY29sb3I6ICMwMGZmZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgMC4xMjVlbSBoc2woMCAwJSAxMDAlIC8gMC4zKSwgMCAwIDAuNDVlbSAjMDBmZmZmO1xufVxuXG4udXNlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIGNvbG9yOiAjMDBmZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAwIDAuMTI1ZW0gaHNsKDAgMCUgMTAwJSAvIDAuMyksIDAgMCAwLjQ1ZW0gIzAwZmZmZjtcbn1cblxuLnVzZXJzLXdlYXBvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgY29sb3I6ICMwMGZmZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgMC4xMjVlbSBoc2woMCAwJSAxMDAlIC8gMC4zKSwgMCAwIDAuNDVlbSAjMDBmZmZmO1xufVxuXG5pOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMwMGZmZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgMC4xMjVlbSBoc2woMCAwJSAxMDAlIC8gMC4zKSwgMCAwIDAuNDVlbSAjMDBmZmZmO1xufVxuXG4ubW90aXZhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICMwMGZmZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgMC4xMjVlbSBoc2woMCAwJSAxMDAlIC8gMC4zKSwgMCAwIDAuNDVlbSAjMDBmZmZmO1xufVxuXG4uZW5lbXktaGFuZCB7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgY29sb3I6ICMwMGZmZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgMC4xMjVlbSBoc2woMCAwJSAxMDAlIC8gMC4zKSwgMCAwIDAuNDVlbSAjMDBmZmZmO1xufVxuXG4uY29udGVudDEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgY29sb3I6ICMwMGZmZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgMC4xMjVlbSBoc2woMCAwJSAxMDAlIC8gMC4zKSwgMCAwIDAuNDVlbSAjMDBmZmZmO1xufVxuXG4uY29udGVudDIge1xuICBkaXNwbGF5OiBncmlkO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGZvcmVzdGdyZWVuO1xuICBjb2xvcjogIzAwZmZmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjEyNWVtIGhzbCgwIDAlIDEwMCUgLyAwLjMpLCAwIDAgMC40NWVtICMwMGZmZmY7XG59XG5cbi5zY29yZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzAwZmZmZjtcbiAgd2lkdGg6IDIwMHB4O1xuICB0ZXh0LXNoYWRvdzogMCAwIDAuMTI1ZW0gaHNsKDAgMCUgMTAwJSAvIDAuMyksIDAgMCAwLjQ1ZW0gY3VycmVudENvbG9yO1xuICBib3JkZXI6ICMwMGZmZmYgMC4xMjVlbSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41ZW0gMCAjMDBmZmZmLCAwIDAgMC41ZW0gMCAjMDBmZmZmO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAwZmZmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjEyNWVtIGhzbCgwIDAlIDEwMCUgLyAwLjMpLCAwIDAgMC40NWVtICMwMGZmZmY7XG59XG5cbi5mbGV4LWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogIzAwZmZmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjEyNWVtIGhzbCgwIDAlIDEwMCUgLyAwLjMpLCAwIDAgMC40NWVtICMwMGZmZmY7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiAjMDBmZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAwIDAuMTI1ZW0gaHNsKDAgMCUgMTAwJSAvIDAuMyksIDAgMCAwLjQ1ZW0gIzAwZmZmZjtcbn1cblxuLnJlc2V0OmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMwMGZmZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgMC4xMjVlbSBoc2woMCAwJSAxMDAlIC8gMC4zKSwgMCAwIDAuNDVlbSAjMDBmZmZmO1xufSJdfQ== */"] });


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
/* harmony import */ var _rps_rps_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rps/rps.component */ "OvyA");
/* harmony import */ var _guess_the_number_guess_the_number_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guess-the-number/guess-the-number.component */ "Bjtm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _neon_button_neon_button_component__WEBPACK_IMPORTED_MODULE_3__["NeonButtonComponent"],
        _digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_4__["DigitalClockComponent"],
        _xo_xo_component__WEBPACK_IMPORTED_MODULE_5__["XOComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _rps_rps_component__WEBPACK_IMPORTED_MODULE_7__["RpsComponent"],
        _guess_the_number_guess_the_number_component__WEBPACK_IMPORTED_MODULE_8__["GuessTheNumberComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
    } }, directives: [_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_1__["DigitalClockComponent"], _neon_button_neon_button_component__WEBPACK_IMPORTED_MODULE_2__["NeonButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::after, *[_ngcontent-%COMP%]::before {\n  box-sizing: border-box;\n}\n\n[_nghost-%COMP%] {\n  --board-size: 800px;\n  --cell-size: 250px;\n  --mark-size: calc(var(--cell-size) * .9);\n  --clr-neon: #66FF00;\n}\n\n.Go_back[_ngcontent-%COMP%] {\n  display: flex;\n  width: 290px;\n  height: 94px;\n  vertical-align: middle;\n  position: absolute;\n  top: 30px;\n  left: 30px;\n}\n\n.b[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  width: var(--board-size);\n}\n\n.button[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 120px;\n  display: inline-block;\n  cursor: pointer;\n  text-decoration: none;\n  color: var(--clr-neon);\n  border: var(--clr-neon) 0.125em solid;\n  padding: 0.25em 1em;\n  border-radius: 0.25em;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;\n  box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);\n  position: relative;\n}\n\n.button[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  box-shadow: 0 0 2em 0.5em var(--clr-neon);\n  opacity: 0;\n  background-color: var(--clr-neon);\n  z-index: -1;\n  transition: opacity 100ms linear;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:focus {\n  color: var(--clr-bg);\n  text-shadow: none;\n}\n\n.button[_ngcontent-%COMP%]:hover::before, .button[_ngcontent-%COMP%]:focus::before {\n  opacity: 1;\n}\n\n.button[_ngcontent-%COMP%]:hover::after, .button[_ngcontent-%COMP%]:focus::after {\n  opacity: 1;\n}\n\n.box[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 55px;\n  align-items: center;\n  width: 800px;\n}\n\n.board[_ngcontent-%COMP%] {\n  width: var(--board-size);\n  height: var(--board-size);\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: repeat(3, auto);\n  border: var(--clr-neon) .3em solid;\n  border-radius: 0.25em;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;\n  box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);\n}\n\n.cell[_ngcontent-%COMP%] {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  border: 1px solid black;\n  display: flex;\n  font-size: 250px;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  border: var(--clr-neon) 0.003em solid;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;\n  transition: .6s;\n}\n\n.cell[_ngcontent-%COMP%]:hover {\n  background: var(--clr-neon);\n  opacity: 40%;\n  text-align: center;\n}\n\n.cell[_ngcontent-%COMP%]:first-child, .cell[_ngcontent-%COMP%]:nth-child(2), .cell[_ngcontent-%COMP%]:nth-child(3) {\n  border-top: none;\n}\n\n.cell[_ngcontent-%COMP%]:nth-child(3n + 1) {\n  border-left: none;\n}\n\n.cell[_ngcontent-%COMP%]:nth-child(3n + 3) {\n  border-right: none;\n}\n\n.cell[_ngcontent-%COMP%]:last-child, .cell[_ngcontent-%COMP%]:nth-child(8), .cell[_ngcontent-%COMP%]:nth-child(7) {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsc0VBQXNFO0VBQ3RFLDBFQUEwRTtFQUMxRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUix5Q0FBeUM7RUFDekMsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDOztBQUVBOztFQUVFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixzRUFBc0U7RUFDdEUsMEVBQTBFO0FBQzVFOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLHNFQUFzRTtFQUN0RSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InhvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46aG9zdCB7XG4gIC0tYm9hcmQtc2l6ZTogODAwcHg7XG4gIC0tY2VsbC1zaXplOiAyNTBweDtcbiAgLS1tYXJrLXNpemU6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIC45KTtcbiAgLS1jbHItbmVvbjogIzY2RkYwMDtcbn1cblxuLkdvX2JhY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMjkwcHg7XG4gIGhlaWdodDogOTRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDMwcHg7XG59XG5cbi5iIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiB2YXIoLS1ib2FyZC1zaXplKTtcbn1cblxuLmJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tY2xyLW5lb24pO1xuICBib3JkZXI6IHZhcigtLWNsci1uZW9uKSAwLjEyNWVtIHNvbGlkO1xuICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIHRleHQtc2hhZG93OiAwIDAgMC4xMjVlbSBoc2woMCAwJSAxMDAlIC8gMC4zKSwgMCAwIDAuNDVlbSBjdXJyZW50Q29sb3I7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjVlbSAwIHZhcigtLWNsci1uZW9uKSwgMCAwIDAuNWVtIDAgdmFyKC0tY2xyLW5lb24pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idXR0b246OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAyZW0gMC41ZW0gdmFyKC0tY2xyLW5lb24pO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbmVvbik7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zIGxpbmVhcjtcbn1cblxuLmJ1dHRvbjpob3Zlcixcbi5idXR0b246Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tY2xyLWJnKTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbi5idXR0b246aG92ZXI6OmJlZm9yZSxcbi5idXR0b246Zm9jdXM6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5idXR0b246aG92ZXI6OmFmdGVyLFxuLmJ1dHRvbjpmb2N1czo6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYm94IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1NXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogODAwcHg7XG59XG5cbi5ib2FyZCB7XG4gIHdpZHRoOiB2YXIoLS1ib2FyZC1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1ib2FyZC1zaXplKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcbiAgYm9yZGVyOiB2YXIoLS1jbHItbmVvbikgLjNlbSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICB0ZXh0LXNoYWRvdzogMCAwIDAuMTI1ZW0gaHNsKDAgMCUgMTAwJSAvIDAuMyksIDAgMCAwLjQ1ZW0gY3VycmVudENvbG9yO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41ZW0gMCB2YXIoLS1jbHItbmVvbiksIDAgMCAwLjVlbSAwIHZhcigtLWNsci1uZW9uKTtcbn1cblxuLmNlbGwge1xuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAyNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IHZhcigtLWNsci1uZW9uKSAwLjAwM2VtIHNvbGlkO1xuICB0ZXh0LXNoYWRvdzogMCAwIDAuMTI1ZW0gaHNsKDAgMCUgMTAwJSAvIDAuMyksIDAgMCAwLjQ1ZW0gY3VycmVudENvbG9yO1xuICB0cmFuc2l0aW9uOiAuNnM7XG59XG5cbi5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLW5lb24pO1xuICBvcGFjaXR5OiA0MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNlbGw6Zmlyc3QtY2hpbGQsXG4uY2VsbDpudGgtY2hpbGQoMiksXG4uY2VsbDpudGgtY2hpbGQoMykge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uY2VsbDpudGgtY2hpbGQoM24gKyAxKSB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uY2VsbDpudGgtY2hpbGQoM24gKyAzKSB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLmNlbGw6bGFzdC1jaGlsZCxcbi5jZWxsOm50aC1jaGlsZCg4KSxcbi5jZWxsOm50aC1jaGlsZCg3KSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59Il19 */"] });
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
                        this.Reset();
                    }
                    else {
                        if (this.IsFull()) {
                            this.gameRunning = false;
                            alert("Draw match");
                            this.Reset();
                        }
                        else {
                            let v = this.minmax(-1, true);
                            this.board[v] = -1;
                            this.table[v].style.color = "#ff2914";
                            this.table[v].innerHTML = "O";
                            if (this.win(this.board) == -1) {
                                this.gameRunning = false;
                                alert("You have lost!");
                                this.Reset();
                            }
                            else {
                                if (this.IsFull()) {
                                    this.gameRunning = false;
                                    alert("Draw match");
                                    this.Reset();
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
/* harmony import */ var _rps_rps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rps/rps.component */ "OvyA");
/* harmony import */ var _guess_the_number_guess_the_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guess-the-number/guess-the-number.component */ "Bjtm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'Tik-Tak-Toe', component: _xo_xo_component__WEBPACK_IMPORTED_MODULE_2__["XOComponent"] },
    { path: 'Rock-Paper-Scisors', component: _rps_rps_component__WEBPACK_IMPORTED_MODULE_3__["RpsComponent"] },
    { path: 'Guess-The-Number', component: _guess_the_number_guess_the_number_component__WEBPACK_IMPORTED_MODULE_4__["GuessTheNumberComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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