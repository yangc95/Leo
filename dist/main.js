/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");

 // document.addEventListener("DOMContentLoaded", function () {

var canvasEl = document.getElementById("mycanvas");
var canvasDimension = 500;
canvasEl.width = canvasDimension;
canvasEl.height = canvasDimension;
var ctx = canvasEl.getContext("2d");
ctx.imageSmoothingEnabled = false;
var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__["default"](canvasEl.width, canvasEl.height, ctx); // new GameView(game, ctx).start();
// });
// export function newGame() {
//     game = new Game(canvas.width, canvas.height, ctx);
//     document.getElementById("start-div").style.visibility = "visible";
//     document.getElementById("end-div").style.visibility = "hidden";
// }
// window.addEventListener("keydown", e => {
//     keys[e.keyCode] = true; 
// });
// window.addEventListener("keyup", e => {
//     delete keys[e.keyCode]; 
// });

var STATUS = true;

function animate() {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  game.draw(ctx);
  game.render();
  requestAnimationFrame(animate);
  console.log("hi");
}

if (STATUS) animate();

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./src/scripts/map.js");
/* harmony import */ var _map_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map_elements */ "./src/scripts/map_elements.js");
/* harmony import */ var _leo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leo */ "./src/scripts/leo.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Game = /*#__PURE__*/function () {
  function Game(canvasElWidth, canvasElHeight, ctx) {
    _classCallCheck(this, Game);

    this.canvasElWidth = canvasElWidth;
    this.canvasElHeight = canvasElHeight;
    this.map = new _map__WEBPACK_IMPORTED_MODULE_0__["default"](canvasElWidth, canvasElHeight);
    this.leo = new _leo__WEBPACK_IMPORTED_MODULE_2__["default"](canvasElWidth / 2, canvasElHeight / 2);
    new _util__WEBPACK_IMPORTED_MODULE_3__["default"](this.leo, this);
  }

  _createClass(Game, [{
    key: "draw",
    value: function draw(ctx) {
      this.map.draw(ctx, this.canvasElWidth, this.canvasElHeight); // debugger;

      this.leo.draw(ctx); // ctx.drawImage()
    }
  }, {
    key: "render",
    value: function render() {
      this.leoDx = this.canvasElWidth / 2 - this.leo.x;
      this.leoDy = this.canvasElHeight / 2 - this.leo.y;
      this.map.render(this.leoDx, this.leoDy);
      this.leo.render();
    }
  }, {
    key: "won",
    value: function won() {}
  }, {
    key: "lost",
    value: function lost() {}
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/scripts/leo.js":
/*!****************************!*\
  !*** ./src/scripts/leo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Leo = /*#__PURE__*/function () {
  function Leo(x, y) {
    _classCallCheck(this, Leo);

    this.leo = new Image();
    this.leo.src = "src/assets/images/sprite/LeoWalkCycle.png"; // state of leo

    this.x = x;
    this.y = y;
    this.size = 100;
    this.dir = 0; // which key is held down

    this.trotting = 0;
    this.speed = 0.1;
    this.right = false;
    this.left = false;
    this.down = false;
    this.up = false;
  }

  _createClass(Leo, [{
    key: "draw",
    value: function draw(ctx) {
      // render(ctx, width, height)
      // console.log("where the heck is leo")
      var spriteSize = this.size / 4;
      var trot = Math.floor(this.trotting % 4);
      ctx.drawImage(this.leo, trot * spriteSize, this.dir * spriteSize, spriteSize, spriteSize, 200, 200, this.size, this.size);
    }
  }, {
    key: "render",
    value: function render() {
      // const dir = dir[0];
      // if (dir) {
      //     if (this.right) { this.trotting += this.speed; }
      //     if (this.left) { this.trotting -= this.speed; }
      //     if (this.down) { this.trotting += this.speed; }
      //     if (this.up) { this.trotting -= this.speed; }      
      // }
      var dir = {
        "right": 0,
        "left": 1,
        "down": 2,
        "up": 3
      };

      if (this.right && this.x < 1950) {
        this.dir = dir["right"];
        this.trotting += this.speed;
        this.x += 3; // console.log("right"+this.x)
      } else if (this.left && this.x > -460) {
        this.dir = dir["left"];
        this.trotting += this.speed;
        this.x -= 3; // console.log("left"+this.x)
      } else if (this.down && this.y < 1925) {
        this.dir = dir["down"];
        this.trotting += this.speed;
        this.y += 3; // console.log("down"+this.y)
      } else if (this.up && this.y > -500) {
        this.dir = dir["up"];
        this.trotting += this.speed;
        this.y -= 3; // console.log("up"+this.y)
      }
    }
  }]);

  return Leo;
}();

/* harmony default export */ __webpack_exports__["default"] = (Leo);

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Map = /*#__PURE__*/function () {
  function Map(width, height) {
    _classCallCheck(this, Map);

    this.width = width;
    this.height = height;
    this.magnify = 5;
    this.xPos = 0;
    this.yPos = 0;
    this.map = new Image();
    this.map.src = "src/assets/images/map/bgMap.png"; // this.map.onload = () => ctx.drawImage(this.map, 0, 0, width, height)
  }

  _createClass(Map, [{
    key: "draw",
    value: function draw(ctx, canvasElWidth, canvasElHeight) {
      var mapSize = this.width * this.magnify;
      ctx.drawImage(this.map, 0, 0, this.map.width, this.map.height, -this.map.width + this.xPos, -this.map.height + this.yPos, mapSize, mapSize);
    }
  }, {
    key: "render",
    value: function render(leoDx, leoDy) {
      // if (this.xPos < 1250 && this.yPos < 1250) {
      this.xPos = leoDx;
      this.yPos = leoDy; // }
    }
  }]);

  return Map;
}();

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./src/scripts/map_elements.js":
/*!*************************************!*\
  !*** ./src/scripts/map_elements.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapElements = function MapElements() {
  _classCallCheck(this, MapElements);
};

/* harmony default export */ __webpack_exports__["default"] = (MapElements);

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function Util(leo, game) {
  _classCallCheck(this, Util);

  document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
      case 39:
        leo.right = true;
        break;

      case 37:
        leo.left = true;
        break;

      case 40:
        leo.down = true;
        break;

      case 38:
        leo.up = true;
        break;
    }
  });
  document.addEventListener('keyup', function (e) {
    switch (e.keyCode) {
      case 39:
        leo.right = false;
        break;

      case 37:
        leo.left = false;
        break;

      case 40:
        leo.down = false;
        break;

      case 38:
        leo.up = false;
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXBfZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzRWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzRGltZW5zaW9uIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiZ2FtZSIsIkdhbWUiLCJTVEFUVVMiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiZHJhdyIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXNFbFdpZHRoIiwiY2FudmFzRWxIZWlnaHQiLCJtYXAiLCJNYXAiLCJsZW8iLCJMZW8iLCJVdGlsIiwibGVvRHgiLCJ4IiwibGVvRHkiLCJ5IiwiSW1hZ2UiLCJzcmMiLCJzaXplIiwiZGlyIiwidHJvdHRpbmciLCJzcGVlZCIsInJpZ2h0IiwibGVmdCIsImRvd24iLCJ1cCIsInNwcml0ZVNpemUiLCJ0cm90IiwiTWF0aCIsImZsb29yIiwiZHJhd0ltYWdlIiwibWFnbmlmeSIsInhQb3MiLCJ5UG9zIiwibWFwU2l6ZSIsIk1hcEVsZW1lbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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LEksR0FDSCxjQUFZRixHQUFaLEVBQWlCZCxJQUFqQixFQUF1QjtBQUFBOztBQUNuQlIsVUFBUSxDQUFDaUQsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQUMsQ0FBQyxFQUFJO0FBQ3RDLFlBQVFBLENBQUMsQ0FBQ0MsT0FBVjtBQUNJLFdBQUssRUFBTDtBQUNHN0IsV0FBRyxDQUFDYSxLQUFKLEdBQVksSUFBWjtBQUNDOztBQUNKLFdBQUssRUFBTDtBQUNJYixXQUFHLENBQUNjLElBQUosR0FBVyxJQUFYO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lkLFdBQUcsQ0FBQ2UsSUFBSixHQUFXLElBQVg7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWYsV0FBRyxDQUFDZ0IsRUFBSixHQUFTLElBQVQ7QUFDQTtBQVpSO0FBY0gsR0FmRDtBQWlCQXRDLFVBQVEsQ0FBQ2lELGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUFDLENBQUMsRUFBSTtBQUNwQyxZQUFRQSxDQUFDLENBQUNDLE9BQVY7QUFDSSxXQUFLLEVBQUw7QUFDSTdCLFdBQUcsQ0FBQ2EsS0FBSixHQUFZLEtBQVo7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWIsV0FBRyxDQUFDYyxJQUFKLEdBQVcsS0FBWDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJZCxXQUFHLENBQUNlLElBQUosR0FBVyxLQUFYO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lmLFdBQUcsQ0FBQ2dCLEVBQUosR0FBUyxLQUFUO0FBQ0E7QUFaUjtBQWNILEdBZkQ7QUFnQkgsQzs7QUFHVWQsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Y2FudmFzXCIpO1xuICAgIGNvbnN0IGNhbnZhc0RpbWVuc2lvbiA9IDUwMDtcbiAgICBjYW52YXNFbC53aWR0aCA9IGNhbnZhc0RpbWVuc2lvbjtcbiAgICBjYW52YXNFbC5oZWlnaHQgPSBjYW52YXNEaW1lbnNpb247XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIFxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodCwgY3R4KTtcbiAgICAvLyBuZXcgR2FtZVZpZXcoZ2FtZSwgY3R4KS5zdGFydCgpO1xuLy8gfSk7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBuZXdHYW1lKCkge1xuLy8gICAgIGdhbWUgPSBuZXcgR2FtZShjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIGN0eCk7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1kaXZcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kLWRpdlwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbi8vIH1cblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuLy8gICAgIGtleXNbZS5rZXlDb2RlXSA9IHRydWU7IFxuLy8gfSk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuLy8gICAgIGRlbGV0ZSBrZXlzW2Uua2V5Q29kZV07IFxuLy8gfSk7XG5jb25zdCBTVEFUVVMgPSB0cnVlO1xuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodCk7XG4gICAgZ2FtZS5kcmF3KGN0eClcbiAgICBnYW1lLnJlbmRlcigpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICBjb25zb2xlLmxvZyhcImhpXCIpXG59XG5pZiAoU1RBVFVTKSBhbmltYXRlKCk7IiwiaW1wb3J0IE1hcCBmcm9tICcuL21hcCc7XG5pbXBvcnQgTWFwRWxlbWVudHMgZnJvbSAnLi9tYXBfZWxlbWVudHMnO1xuaW1wb3J0IExlbyBmcm9tICcuL2xlbyc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbFdpZHRoLCBjYW52YXNFbEhlaWdodCwgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzRWxXaWR0aCA9IGNhbnZhc0VsV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzRWxIZWlnaHQgPSBjYW52YXNFbEhlaWdodDtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKGNhbnZhc0VsV2lkdGgsIGNhbnZhc0VsSGVpZ2h0KTtcbiAgICAgICAgdGhpcy5sZW8gPSBuZXcgTGVvKGNhbnZhc0VsV2lkdGggLyAyLCBjYW52YXNFbEhlaWdodCAvIDIpO1xuICAgICAgICBuZXcgVXRpbCAodGhpcy5sZW8sIHRoaXMpO1xuICAgIH07XG4gICAgXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgdGhpcy5tYXAuZHJhdyhcbiAgICAgICAgICAgIGN0eCwgXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsV2lkdGgsIFxuICAgICAgICAgICAgdGhpcy5jYW52YXNFbEhlaWdodFxuICAgICAgICApO1xuICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgdGhpcy5sZW8uZHJhdyhjdHgpO1xuICAgICAgICAvLyBjdHguZHJhd0ltYWdlKClcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmxlb0R4ID0gKHRoaXMuY2FudmFzRWxXaWR0aCAvIDIpIC0gdGhpcy5sZW8ueFxuICAgICAgICB0aGlzLmxlb0R5ID0gKHRoaXMuY2FudmFzRWxIZWlnaHQgLyAyKSAtIHRoaXMubGVvLnlcbiAgICAgICAgdGhpcy5tYXAucmVuZGVyKHRoaXMubGVvRHgsIHRoaXMubGVvRHkpO1xuICAgICAgICB0aGlzLmxlby5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB3b24oKSB7XG5cbiAgICB9XG5cbiAgICBsb3N0KCkge1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImNsYXNzIExlbyB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLmxlbyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxlby5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL3Nwcml0ZS9MZW9XYWxrQ3ljbGUucG5nXCI7XG4gICAgICAgIC8vIHN0YXRlIG9mIGxlb1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zaXplID0gMTAwO1xuICAgICAgICB0aGlzLmRpciA9IDA7IC8vIHdoaWNoIGtleSBpcyBoZWxkIGRvd25cbiAgICAgICAgdGhpcy50cm90dGluZyA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjE7XG5cbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXAgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkgeyAvLyByZW5kZXIoY3R4LCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndoZXJlIHRoZSBoZWNrIGlzIGxlb1wiKVxuICAgICAgICBsZXQgc3ByaXRlU2l6ZSA9IHRoaXMuc2l6ZSAvIDQ7XG4gICAgICAgIGxldCB0cm90ID0gTWF0aC5mbG9vcih0aGlzLnRyb3R0aW5nICUgNCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5sZW8sIHRyb3QgKiBzcHJpdGVTaXplLCB0aGlzLmRpciAqIHNwcml0ZVNpemUsIHNwcml0ZVNpemUsIHNwcml0ZVNpemUsIDIwMCwgMjAwLCB0aGlzLnNpemUsIHRoaXMuc2l6ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBjb25zdCBkaXIgPSBkaXJbMF07XG4gICAgICAgIC8vIGlmIChkaXIpIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnJpZ2h0KSB7IHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDsgfVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMubGVmdCkgeyB0aGlzLnRyb3R0aW5nIC09IHRoaXMuc3BlZWQ7IH1cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmRvd24pIHsgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkOyB9XG4gICAgICAgIC8vICAgICBpZiAodGhpcy51cCkgeyB0aGlzLnRyb3R0aW5nIC09IHRoaXMuc3BlZWQ7IH0gICAgICBcbiAgICAgICAgLy8gfVxuICAgICAgICBjb25zdCBkaXIgPSB7XG4gICAgICAgICAgICBcInJpZ2h0XCI6IDAsXG4gICAgICAgICAgICBcImxlZnRcIjogMSxcbiAgICAgICAgICAgIFwiZG93blwiOiAyLFxuICAgICAgICAgICAgXCJ1cFwiOiAzXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0ICYmIHRoaXMueCA8IDE5NTApIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1wicmlnaHRcIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnggKz0gMztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmlnaHRcIit0aGlzLngpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0ICYmIHRoaXMueCA+IC00NjApIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1wibGVmdFwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueCAtPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJsZWZ0XCIrdGhpcy54KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZG93biAmJiB0aGlzLnkgPCAxOTI1KSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcltcImRvd25cIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnkgKz0gMztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZG93blwiK3RoaXMueSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnVwICYmIHRoaXMueSA+IC01MDApIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1widXBcIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnkgLT0gMztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBcIit0aGlzLnkpXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVvOyIsImNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLm1hZ25pZnkgPSA1O1xuICAgICAgICB0aGlzLnhQb3MgPSAwO1xuICAgICAgICB0aGlzLnlQb3MgPSAwO1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLm1hcC5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL21hcC9iZ01hcC5wbmdcIjtcbiAgICAgICAgLy8gdGhpcy5tYXAub25sb2FkID0gKCkgPT4gY3R4LmRyYXdJbWFnZSh0aGlzLm1hcCwgMCwgMCwgd2lkdGgsIGhlaWdodClcbiAgICB9XG4gICAgXG4gICAgZHJhdyhjdHgsIGNhbnZhc0VsV2lkdGgsIGNhbnZhc0VsSGVpZ2h0KSB7XG4gICAgICAgIGxldCBtYXBTaXplID0gdGhpcy53aWR0aCAqIHRoaXMubWFnbmlmeTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMubWFwLCBcbiAgICAgICAgICAgIDAsIDAsIFxuICAgICAgICAgICAgdGhpcy5tYXAud2lkdGgsIFxuICAgICAgICAgICAgdGhpcy5tYXAuaGVpZ2h0LCBcbiAgICAgICAgICAgIC0odGhpcy5tYXAud2lkdGgpICsgdGhpcy54UG9zLCBcbiAgICAgICAgICAgIC0odGhpcy5tYXAuaGVpZ2h0KSArIHRoaXMueVBvcywgXG4gICAgICAgICAgICBtYXBTaXplLCBtYXBTaXplKTtcbiAgICB9XG5cbiAgICByZW5kZXIobGVvRHgsIGxlb0R5KSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnhQb3MgPCAxMjUwICYmIHRoaXMueVBvcyA8IDEyNTApIHtcbiAgICAgICAgICAgIHRoaXMueFBvcyA9IGxlb0R4O1xuICAgICAgICAgICAgdGhpcy55UG9zID0gbGVvRHk7XG5cbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwOyIsImNsYXNzIE1hcEVsZW1lbnRzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwRWxlbWVudHM7IiwiIGNsYXNzIFV0aWwge1xuICAgIGNvbnN0cnVjdG9yKGxlbywgZ2FtZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgbGVvLnJpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGxlby5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBsZW8uZG93biA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBsZW8udXAgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIGxlby5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBsZW8ubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBsZW8uZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBsZW8udXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9