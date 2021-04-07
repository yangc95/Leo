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

function animate() {
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  game.draw(ctx);
  game.render();
  requestAnimationFrame(animate);
}

animate();

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
/* harmony import */ var _leo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leo */ "./src/scripts/leo.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game = /*#__PURE__*/function () {
  function Game(canvasElWidth, canvasElHeight, ctx) {
    _classCallCheck(this, Game);

    this.canvasElWidth = canvasElWidth;
    this.canvasElHeight = canvasElHeight;
    this.map = new _map__WEBPACK_IMPORTED_MODULE_0__["default"](canvasElWidth, canvasElHeight);
    this.leo = new _leo__WEBPACK_IMPORTED_MODULE_1__["default"](canvasElWidth / 2, canvasElHeight / 2);
    new _util__WEBPACK_IMPORTED_MODULE_2__["default"](this.leo, this);
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
      ctx.drawImage(this.map, 0, 0, this.map.width, this.map.height, // 0, 0,
      -this.map.width + this.xPos, -this.map.height + this.yPos, mapSize, mapSize); //, 0, 0, mapSize, mapSize);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXNFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW52YXNEaW1lbnNpb24iLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lIiwiR2FtZSIsImFuaW1hdGUiLCJpbWFnZVNtb290aGluZ0VuYWJsZWQiLCJjbGVhclJlY3QiLCJkcmF3IiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FudmFzRWxXaWR0aCIsImNhbnZhc0VsSGVpZ2h0IiwibWFwIiwiTWFwIiwibGVvIiwiTGVvIiwiVXRpbCIsImxlb0R4IiwieCIsImxlb0R5IiwieSIsIkltYWdlIiwic3JjIiwic2l6ZSIsImRpciIsInRyb3R0aW5nIiwic3BlZWQiLCJyaWdodCIsImxlZnQiLCJkb3duIiwidXAiLCJzcHJpdGVTaXplIiwidHJvdCIsIk1hdGgiLCJmbG9vciIsImRyYXdJbWFnZSIsIm1hZ25pZnkiLCJ4UG9zIiwieVBvcyIsIm1hcFNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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SUFBSixHQUFXLElBQVg7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWQsV0FBRyxDQUFDZSxJQUFKLEdBQVcsSUFBWDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJZixXQUFHLENBQUNnQixFQUFKLEdBQVMsSUFBVDtBQUNBO0FBWlI7QUFjSCxHQWZEO0FBaUJBbkMsVUFBUSxDQUFDNkMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQUMsQ0FBQyxFQUFJO0FBQ3BDLFlBQVFBLENBQUMsQ0FBQ0MsT0FBVjtBQUNJLFdBQUssRUFBTDtBQUNJNUIsV0FBRyxDQUFDYSxLQUFKLEdBQVksS0FBWjtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJYixXQUFHLENBQUNjLElBQUosR0FBVyxLQUFYO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lkLFdBQUcsQ0FBQ2UsSUFBSixHQUFXLEtBQVg7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWYsV0FBRyxDQUFDZ0IsRUFBSixHQUFTLEtBQVQ7QUFDQTtBQVpSO0FBY0gsR0FmRDtBQWdCSCxDOztBQUdVZCxtRUFBZixFOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXljYW52YXNcIik7XG4gICAgY29uc3QgY2FudmFzRGltZW5zaW9uID0gNTAwO1xuICAgIGNhbnZhc0VsLndpZHRoID0gY2FudmFzRGltZW5zaW9uO1xuICAgIGNhbnZhc0VsLmhlaWdodCA9IGNhbnZhc0RpbWVuc2lvbjtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQsIGN0eCk7XG4gICAgLy8gbmV3IEdhbWVWaWV3KGdhbWUsIGN0eCkuc3RhcnQoKTtcbi8vIH0pO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gbmV3R2FtZSgpIHtcbi8vICAgICBnYW1lID0gbmV3IEdhbWUoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCBjdHgpO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtZGl2XCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZC1kaXZcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4vLyB9XG5cblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuLy8gICAgIGtleXNbZS5rZXlDb2RlXSA9IHRydWU7IFxuLy8gfSk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuLy8gICAgIGRlbGV0ZSBrZXlzW2Uua2V5Q29kZV07IFxuLy8gfSk7XG5cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodCk7XG4gICAgZ2FtZS5kcmF3KGN0eClcbiAgICBnYW1lLnJlbmRlcigpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn1cbmFuaW1hdGUoKTsiLCJpbXBvcnQgTWFwIGZyb20gJy4vbWFwJztcbmltcG9ydCBMZW8gZnJvbSAnLi9sZW8nO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxXaWR0aCwgY2FudmFzRWxIZWlnaHQsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhc0VsV2lkdGggPSBjYW52YXNFbFdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhc0VsSGVpZ2h0ID0gY2FudmFzRWxIZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoY2FudmFzRWxXaWR0aCwgY2FudmFzRWxIZWlnaHQpO1xuICAgICAgICB0aGlzLmxlbyA9IG5ldyBMZW8oY2FudmFzRWxXaWR0aCAvIDIsIGNhbnZhc0VsSGVpZ2h0IC8gMik7XG4gICAgICAgIG5ldyBVdGlsICh0aGlzLmxlbywgdGhpcyk7XG5cbiAgICB9XG4gICAgXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgdGhpcy5tYXAuZHJhdyhcbiAgICAgICAgICAgIGN0eCwgXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsV2lkdGgsIFxuICAgICAgICAgICAgdGhpcy5jYW52YXNFbEhlaWdodFxuICAgICAgICApO1xuICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgdGhpcy5sZW8uZHJhdyhjdHgpO1xuICAgICAgICAvLyBjdHguZHJhd0ltYWdlKClcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmxlb0R4ID0gKHRoaXMuY2FudmFzRWxXaWR0aCAvIDIpIC0gdGhpcy5sZW8ueFxuICAgICAgICB0aGlzLmxlb0R5ID0gKHRoaXMuY2FudmFzRWxIZWlnaHQgLyAyKSAtIHRoaXMubGVvLnlcbiAgICAgICAgdGhpcy5tYXAucmVuZGVyKHRoaXMubGVvRHgsIHRoaXMubGVvRHkpO1xuICAgICAgICB0aGlzLmxlby5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB3b24oKSB7XG5cbiAgICB9XG5cbiAgICBsb3N0KCkge1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImNsYXNzIExlbyB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLmxlbyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxlby5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL3Nwcml0ZS9MZW9XYWxrQ3ljbGUucG5nXCI7XG4gICAgICAgIC8vIHN0YXRlIG9mIGxlb1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zaXplID0gMTAwO1xuICAgICAgICB0aGlzLmRpciA9IDA7IC8vIHdoaWNoIGtleSBpcyBoZWxkIGRvd25cbiAgICAgICAgdGhpcy50cm90dGluZyA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjE7XG5cbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXAgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkgeyAvLyByZW5kZXIoY3R4LCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndoZXJlIHRoZSBoZWNrIGlzIGxlb1wiKVxuICAgICAgICBsZXQgc3ByaXRlU2l6ZSA9IHRoaXMuc2l6ZSAvIDQ7XG4gICAgICAgIGxldCB0cm90ID0gTWF0aC5mbG9vcih0aGlzLnRyb3R0aW5nICUgNCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5sZW8sIHRyb3QgKiBzcHJpdGVTaXplLCB0aGlzLmRpciAqIHNwcml0ZVNpemUsIHNwcml0ZVNpemUsIHNwcml0ZVNpemUsIDIwMCwgMjAwLCB0aGlzLnNpemUsIHRoaXMuc2l6ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBjb25zdCBkaXIgPSBkaXJbMF07XG4gICAgICAgIC8vIGlmIChkaXIpIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnJpZ2h0KSB7IHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDsgfVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMubGVmdCkgeyB0aGlzLnRyb3R0aW5nIC09IHRoaXMuc3BlZWQ7IH1cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmRvd24pIHsgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkOyB9XG4gICAgICAgIC8vICAgICBpZiAodGhpcy51cCkgeyB0aGlzLnRyb3R0aW5nIC09IHRoaXMuc3BlZWQ7IH0gICAgICBcbiAgICAgICAgLy8gfVxuICAgICAgICBjb25zdCBkaXIgPSB7XG4gICAgICAgICAgICBcInJpZ2h0XCI6IDAsXG4gICAgICAgICAgICBcImxlZnRcIjogMSxcbiAgICAgICAgICAgIFwiZG93blwiOiAyLFxuICAgICAgICAgICAgXCJ1cFwiOiAzXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0ICYmIHRoaXMueCA8IDE5NTApIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1wicmlnaHRcIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnggKz0gMztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmlnaHRcIit0aGlzLngpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0ICYmIHRoaXMueCA+IC00NjApIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1wibGVmdFwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueCAtPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJsZWZ0XCIrdGhpcy54KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZG93biAmJiB0aGlzLnkgPCAxOTI1KSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcltcImRvd25cIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnkgKz0gMztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZG93blwiK3RoaXMueSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnVwICYmIHRoaXMueSA+IC01MDApIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1widXBcIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnkgLT0gMztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBcIit0aGlzLnkpXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVvOyIsImNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLm1hZ25pZnkgPSA1O1xuICAgICAgICB0aGlzLnhQb3MgPSAwO1xuICAgICAgICB0aGlzLnlQb3MgPSAwO1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLm1hcC5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL21hcC9iZ01hcC5wbmdcIjtcbiAgICAgICAgLy8gdGhpcy5tYXAub25sb2FkID0gKCkgPT4gY3R4LmRyYXdJbWFnZSh0aGlzLm1hcCwgMCwgMCwgd2lkdGgsIGhlaWdodClcbiAgICB9XG4gICAgXG4gICAgZHJhdyhjdHgsIGNhbnZhc0VsV2lkdGgsIGNhbnZhc0VsSGVpZ2h0KSB7XG4gICAgICAgIGxldCBtYXBTaXplID0gdGhpcy53aWR0aCAqIHRoaXMubWFnbmlmeTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMubWFwLCBcbiAgICAgICAgICAgIDAsIDAsIFxuICAgICAgICAgICAgdGhpcy5tYXAud2lkdGgsIFxuICAgICAgICAgICAgdGhpcy5tYXAuaGVpZ2h0LCBcbiAgICAgICAgICAgIC8vIDAsIDAsXG4gICAgICAgICAgICAtKHRoaXMubWFwLndpZHRoKSArIHRoaXMueFBvcywgXG4gICAgICAgICAgICAtKHRoaXMubWFwLmhlaWdodCkgKyB0aGlzLnlQb3MsIFxuICAgICAgICAgICAgbWFwU2l6ZSwgbWFwU2l6ZSk7IC8vLCAwLCAwLCBtYXBTaXplLCBtYXBTaXplKTtcbiAgICB9XG5cbiAgICByZW5kZXIobGVvRHgsIGxlb0R5KSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnhQb3MgPCAxMjUwICYmIHRoaXMueVBvcyA8IDEyNTApIHtcbiAgICAgICAgICAgIHRoaXMueFBvcyA9IGxlb0R4O1xuICAgICAgICAgICAgdGhpcy55UG9zID0gbGVvRHk7XG5cbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwOyIsIiBjbGFzcyBVdGlsIHtcbiAgICBjb25zdHJ1Y3RvcihsZW8sIGdhbWUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgIGxlby5yaWdodCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBsZW8ubGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmRvd24gPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnVwID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBsZW8ucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==