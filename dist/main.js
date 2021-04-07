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
        this.x += 3;
      } else if (this.left) {
        this.dir = dir["left"];
        this.trotting += this.speed;
        this.x -= 3;
      } else if (this.down) {
        this.dir = dir["down"];
        this.trotting += this.speed;
        this.y += 3;
      } else if (this.up) {
        this.dir = dir["up"];
        this.trotting += this.speed;
        this.y -= 3;
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
    this.map.src = "src/assets/images/map/MainMap.png"; // this.map.onload = () => ctx.drawImage(this.map, 0, 0, width, height)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXNFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW52YXNEaW1lbnNpb24iLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lIiwiR2FtZSIsImFuaW1hdGUiLCJpbWFnZVNtb290aGluZ0VuYWJsZWQiLCJjbGVhclJlY3QiLCJkcmF3IiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FudmFzRWxXaWR0aCIsImNhbnZhc0VsSGVpZ2h0IiwibWFwIiwiTWFwIiwibGVvIiwiTGVvIiwiVXRpbCIsImxlb0R4IiwieCIsImxlb0R5IiwieSIsIkltYWdlIiwic3JjIiwic2l6ZSIsImRpciIsInRyb3R0aW5nIiwic3BlZWQiLCJyaWdodCIsImxlZnQiLCJkb3duIiwidXAiLCJzcHJpdGVTaXplIiwidHJvdCIsIk1hdGgiLCJmbG9vciIsImRyYXdJbWFnZSIsIm1hZ25pZnkiLCJ4UG9zIiwieVBvcyIsIm1hcFNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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QUFpQkFuQyxVQUFRLENBQUM2QyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFBQyxDQUFDLEVBQUk7QUFDcEMsWUFBUUEsQ0FBQyxDQUFDQyxPQUFWO0FBQ0ksV0FBSyxFQUFMO0FBQ0k1QixXQUFHLENBQUNhLEtBQUosR0FBWSxLQUFaO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0liLFdBQUcsQ0FBQ2MsSUFBSixHQUFXLEtBQVg7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWQsV0FBRyxDQUFDZSxJQUFKLEdBQVcsS0FBWDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJZixXQUFHLENBQUNnQixFQUFKLEdBQVMsS0FBVDtBQUNBO0FBWlI7QUFjSCxHQWZEO0FBZ0JILEM7O0FBR1VkLG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWNhbnZhc1wiKTtcbiAgICBjb25zdCBjYW52YXNEaW1lbnNpb24gPSA1MDA7XG4gICAgY2FudmFzRWwud2lkdGggPSBjYW52YXNEaW1lbnNpb247XG4gICAgY2FudmFzRWwuaGVpZ2h0ID0gY2FudmFzRGltZW5zaW9uO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodCwgY3R4KTtcbiAgICAvLyBuZXcgR2FtZVZpZXcoZ2FtZSwgY3R4KS5zdGFydCgpO1xuLy8gfSk7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBuZXdHYW1lKCkge1xuLy8gICAgIGdhbWUgPSBuZXcgR2FtZShjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIGN0eCk7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1kaXZcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kLWRpdlwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbi8vIH1cblxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4vLyAgICAga2V5c1tlLmtleUNvZGVdID0gdHJ1ZTsgXG4vLyB9KTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG4vLyAgICAgZGVsZXRlIGtleXNbZS5rZXlDb2RlXTsgXG4vLyB9KTtcblxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNFbC53aWR0aCwgY2FudmFzRWwuaGVpZ2h0KTtcbiAgICBnYW1lLmRyYXcoY3R4KVxuICAgIGdhbWUucmVuZGVyKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xufVxuYW5pbWF0ZSgpOyIsImltcG9ydCBNYXAgZnJvbSAnLi9tYXAnO1xuaW1wb3J0IExlbyBmcm9tICcuL2xlbyc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbFdpZHRoLCBjYW52YXNFbEhlaWdodCwgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzRWxXaWR0aCA9IGNhbnZhc0VsV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzRWxIZWlnaHQgPSBjYW52YXNFbEhlaWdodDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcChjYW52YXNFbFdpZHRoLCBjYW52YXNFbEhlaWdodCk7XG4gICAgICAgIHRoaXMubGVvID0gbmV3IExlbyhjYW52YXNFbFdpZHRoIC8gMiwgY2FudmFzRWxIZWlnaHQgLyAyKTtcbiAgICAgICAgbmV3IFV0aWwgKHRoaXMubGVvLCB0aGlzKTtcblxuICAgIH1cbiAgICBcbiAgICBkcmF3KGN0eCkge1xuICAgICAgICB0aGlzLm1hcC5kcmF3KFxuICAgICAgICAgICAgY3R4LCBcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWxXaWR0aCwgXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsSGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICB0aGlzLmxlby5kcmF3KGN0eCk7XG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UoKVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMubGVvRHggPSAodGhpcy5jYW52YXNFbFdpZHRoIC8gMikgLSB0aGlzLmxlby54XG4gICAgICAgIHRoaXMubGVvRHkgPSAodGhpcy5jYW52YXNFbEhlaWdodCAvIDIpIC0gdGhpcy5sZW8ueVxuICAgICAgICB0aGlzLm1hcC5yZW5kZXIodGhpcy5sZW9EeCwgdGhpcy5sZW9EeSk7XG4gICAgICAgIHRoaXMubGVvLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHdvbigpIHtcblxuICAgIH1cblxuICAgIGxvc3QoKSB7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiY2xhc3MgTGVvIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMubGVvID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubGVvLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvc3ByaXRlL0xlb1dhbGtDeWNsZS5wbmdcIjtcbiAgICAgICAgLy8gc3RhdGUgb2YgbGVvXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNpemUgPSAxMDA7XG4gICAgICAgIHRoaXMuZGlyID0gMDsgLy8gd2hpY2gga2V5IGlzIGhlbGQgZG93blxuICAgICAgICB0aGlzLnRyb3R0aW5nID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDAuMTtcblxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7IC8vIHJlbmRlcihjdHgsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2hlcmUgdGhlIGhlY2sgaXMgbGVvXCIpXG4gICAgICAgIGxldCBzcHJpdGVTaXplID0gdGhpcy5zaXplIC8gNDtcbiAgICAgICAgbGV0IHRyb3QgPSBNYXRoLmZsb29yKHRoaXMudHJvdHRpbmcgJSA0KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmxlbywgdHJvdCAqIHNwcml0ZVNpemUsIHRoaXMuZGlyICogc3ByaXRlU2l6ZSwgc3ByaXRlU2l6ZSwgc3ByaXRlU2l6ZSwgMjAwLCAyMDAsIHRoaXMuc2l6ZSwgdGhpcy5zaXplKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGNvbnN0IGRpciA9IGRpclswXTtcbiAgICAgICAgLy8gaWYgKGRpcikge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMucmlnaHQpIHsgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkOyB9XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5sZWZ0KSB7IHRoaXMudHJvdHRpbmcgLT0gdGhpcy5zcGVlZDsgfVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuZG93bikgeyB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7IH1cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnVwKSB7IHRoaXMudHJvdHRpbmcgLT0gdGhpcy5zcGVlZDsgfSAgICAgIFxuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IGRpciA9IHtcbiAgICAgICAgICAgIFwicmlnaHRcIjogMCxcbiAgICAgICAgICAgIFwibGVmdFwiOiAxLFxuICAgICAgICAgICAgXCJkb3duXCI6IDIsXG4gICAgICAgICAgICBcInVwXCI6IDNcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0ICYmIHRoaXMueCA8IDE5NTApIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1wicmlnaHRcIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnggKz0gMztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1wibGVmdFwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueCAtPSAzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZG93bikge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJkb3duXCJdO1xuICAgICAgICAgICAgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy55ICs9IDM7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy51cCkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJ1cFwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueSAtPSAzO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlbzsiLCJjbGFzcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5tYWduaWZ5ID0gNTtcbiAgICAgICAgdGhpcy54UG9zID0gMDtcbiAgICAgICAgdGhpcy55UG9zID0gMDtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5tYXAuc3JjID0gXCJzcmMvYXNzZXRzL2ltYWdlcy9tYXAvTWFpbk1hcC5wbmdcIjtcbiAgICAgICAgLy8gdGhpcy5tYXAub25sb2FkID0gKCkgPT4gY3R4LmRyYXdJbWFnZSh0aGlzLm1hcCwgMCwgMCwgd2lkdGgsIGhlaWdodClcbiAgICB9XG4gICAgXG4gICAgZHJhdyhjdHgsIGNhbnZhc0VsV2lkdGgsIGNhbnZhc0VsSGVpZ2h0KSB7XG4gICAgICAgIGxldCBtYXBTaXplID0gdGhpcy53aWR0aCAqIHRoaXMubWFnbmlmeTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMubWFwLCBcbiAgICAgICAgICAgIDAsIDAsIFxuICAgICAgICAgICAgdGhpcy5tYXAud2lkdGgsIFxuICAgICAgICAgICAgdGhpcy5tYXAuaGVpZ2h0LCBcbiAgICAgICAgICAgIC8vIDAsIDAsXG4gICAgICAgICAgICAtKHRoaXMubWFwLndpZHRoKSArIHRoaXMueFBvcywgXG4gICAgICAgICAgICAtKHRoaXMubWFwLmhlaWdodCkgKyB0aGlzLnlQb3MsIFxuICAgICAgICAgICAgbWFwU2l6ZSwgbWFwU2l6ZSk7IC8vLCAwLCAwLCBtYXBTaXplLCBtYXBTaXplKTtcbiAgICB9XG5cbiAgICByZW5kZXIobGVvRHgsIGxlb0R5KSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnhQb3MgPCAxMjUwICYmIHRoaXMueVBvcyA8IDEyNTApIHtcbiAgICAgICAgICAgIHRoaXMueFBvcyA9IGxlb0R4O1xuICAgICAgICAgICAgdGhpcy55UG9zID0gbGVvRHk7XG5cbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwOyIsIiBjbGFzcyBVdGlsIHtcbiAgICBjb25zdHJ1Y3RvcihsZW8sIGdhbWUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgIGxlby5yaWdodCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBsZW8ubGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmRvd24gPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnVwID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBsZW8ucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==