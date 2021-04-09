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
  game.draw();
  game.render();
  requestAnimationFrame(animate);
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
    this.ctx = ctx;
    this.map = new _map__WEBPACK_IMPORTED_MODULE_0__["default"](canvasElWidth, canvasElHeight, this.ctx);
    this.leo = new _leo__WEBPACK_IMPORTED_MODULE_1__["default"](canvasElWidth / 2, canvasElHeight / 2, this.ctx);
    new _util__WEBPACK_IMPORTED_MODULE_2__["default"](this.leo, this);
  }

  _createClass(Game, [{
    key: "draw",
    value: function draw() {
      this.map.draw(this.ctx, this.canvasElWidth, this.canvasElHeight);
      this.leo.draw();
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
  function Leo(x, y, ctx) {
    _classCallCheck(this, Leo);

    this.leo = new Image();
    this.leo.src = "src/assets/images/sprite/LeoWalkCycle.png"; // state of leo

    this.x = x;
    this.y = y;
    this.ctx = ctx;
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
    value: function draw() {
      // render(ctx, width, height)
      // console.log("where the heck is leo")
      var spriteSize = this.size / 4;
      var trot = Math.floor(this.trotting % 4);
      this.ctx.drawImage(this.leo, trot * spriteSize, this.dir * spriteSize, spriteSize, spriteSize, 200, 200, this.size, this.size); // console.log(this.x + "-------" + this.y)
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
/* harmony import */ var _map_ele_houses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map_ele/houses */ "./src/scripts/map_ele/houses.js");
/* harmony import */ var _map_ele_shrubs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map_ele/shrubs */ "./src/scripts/map_ele/shrubs.js");
/* harmony import */ var _map_ele_shrubs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_map_ele_shrubs__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Map = /*#__PURE__*/function () {
  function Map(width, height, ctx) {
    _classCallCheck(this, Map);

    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.magnify = 5;
    this.xPos = 0;
    this.yPos = 0;
    this.map = new Image();
    this.map.src = "src/assets/images/map/bgMap.png";
    this.house = new _map_ele_houses__WEBPACK_IMPORTED_MODULE_0__["default"](this.xPos, this.yPos, this.ctx); // this.map.onload = () => ctx.drawImage(this.map, 0, 0, width, height)
  }

  _createClass(Map, [{
    key: "draw",
    value: function draw(ctx) {
      var mapSize = this.width * this.magnify;
      ctx.drawImage(this.map, 0, 0, this.map.width, this.map.height, -this.map.width + this.xPos, -this.map.height + this.yPos, mapSize, mapSize);
      console.log(this.xPos + "and" + this.yPos);
      if (this.xPos <= 525 && this.xPos >= -500 && this.yPos <= 750 && this.yPos >= -350) this.house.drawHewertsHouse(this.xPos, this.yPos);
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

/***/ "./src/scripts/map_ele/houses.js":
/*!***************************************!*\
  !*** ./src/scripts/map_ele/houses.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Houses = /*#__PURE__*/function () {
  function Houses(xPos, yPos, ctx) {
    _classCallCheck(this, Houses);

    this.xPos = xPos;
    this.yPos = yPos;
    this.ctx = ctx;
    this.xCollision = this.xPos - this.baseWidth;
    this.yCollision = this.yPos - this.baseHeight;
    this.house = new Image();
  }

  _createClass(Houses, [{
    key: "drawPollysHouse",
    value: function drawPollysHouse(dx, dy) {
      var pollysHouse = this.house;
      pollysHouse.src = "src/assets/images/map_elements/pollysHouse.png";
      var baseWidth = 80;
      var baseHeight = 120;
      var leoDx = this.xPos + dx - this.baseWidth;
      var leoDy = this.yPos + dy - this.baseHeight;
      this.ctx.drawImage(pollysHouse, this.xPos, this.yPos, baseWidth, baseHeight);
    }
  }, {
    key: "drawHewertsHouse",
    value: function drawHewertsHouse(dx, dy) {
      var hewertsHouse = this.house;
      hewertsHouse.src = "src/assets/images/map_elements/hewertsHouse.png";
      var baseWidth = 200;
      var baseHeight = 120;
      var leoDx = this.xPos + dx - this.baseWidth;
      var leoDy = this.yPos + dy - this.baseHeight;
      this.ctx.drawImage(hewertsHouse, 0, 0, this.xPos, this.yPos, 0, 0, baseWidth, baseHeight);
    }
  }]);

  return Houses;
}();

/* harmony default export */ __webpack_exports__["default"] = (Houses);

/***/ }),

/***/ "./src/scripts/map_ele/shrubs.js":
/*!***************************************!*\
  !*** ./src/scripts/map_ele/shrubs.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
    e.preventDefault();

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
    e.preventDefault();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXBfZWxlL2hvdXNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXNFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW52YXNEaW1lbnNpb24iLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJpbWFnZVNtb290aGluZ0VuYWJsZWQiLCJnYW1lIiwiR2FtZSIsIlNUQVRVUyIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJkcmF3IiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FudmFzRWxXaWR0aCIsImNhbnZhc0VsSGVpZ2h0IiwibWFwIiwiTWFwIiwibGVvIiwiTGVvIiwiVXRpbCIsImxlb0R4IiwieCIsImxlb0R5IiwieSIsIkltYWdlIiwic3JjIiwic2l6ZSIsImRpciIsInRyb3R0aW5nIiwic3BlZWQiLCJyaWdodCIsImxlZnQiLCJkb3duIiwidXAiLCJzcHJpdGVTaXplIiwidHJvdCIsIk1hdGgiLCJmbG9vciIsImRyYXdJbWFnZSIsIm1hZ25pZnkiLCJ4UG9zIiwieVBvcyIsImhvdXNlIiwiSG91c2VzIiwibWFwU2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJkcmF3SGV3ZXJ0c0hvdXNlIiwieENvbGxpc2lvbiIsImJhc2VXaWR0aCIsInlDb2xsaXNpb24iLCJiYXNlSGVpZ2h0IiwiZHgiLCJkeSIsInBvbGx5c0hvdXNlIiwiaGV3ZXJ0c0hvdXNlIiwi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Q0FBQyxDQUFDRSxPQUFWO0FBQ0ksV0FBSyxFQUFMO0FBQ0cxQyxXQUFHLENBQUNhLEtBQUosR0FBWSxJQUFaO0FBQ0M7O0FBQ0osV0FBSyxFQUFMO0FBQ0liLFdBQUcsQ0FBQ2MsSUFBSixHQUFXLElBQVg7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWQsV0FBRyxDQUFDZSxJQUFKLEdBQVcsSUFBWDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJZixXQUFHLENBQUNnQixFQUFKLEdBQVMsSUFBVDtBQUNBO0FBWlI7QUFjSCxHQWhCRDtBQWtCQXBDLFVBQVEsQ0FBQzJELGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUFDLENBQUMsRUFBSTtBQUNwQ0EsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFlBQVFELENBQUMsQ0FBQ0UsT0FBVjtBQUNJLFdBQUssRUFBTDtBQUNJMUMsV0FBRyxDQUFDYSxLQUFKLEdBQVksS0FBWjtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJYixXQUFHLENBQUNjLElBQUosR0FBVyxLQUFYO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lkLFdBQUcsQ0FBQ2UsSUFBSixHQUFXLEtBQVg7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWYsV0FBRyxDQUFDZ0IsRUFBSixHQUFTLEtBQVQ7QUFDQTtBQVpSO0FBY0gsR0FoQkQ7QUFpQkgsQzs7QUFHVWQsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDeENBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Y2FudmFzXCIpO1xuICAgIGNvbnN0IGNhbnZhc0RpbWVuc2lvbiA9IDUwMDtcbiAgICBjYW52YXNFbC53aWR0aCA9IGNhbnZhc0RpbWVuc2lvbjtcbiAgICBjYW52YXNFbC5oZWlnaHQgPSBjYW52YXNEaW1lbnNpb247XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIFxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodCwgY3R4KTtcbiAgICAvLyBuZXcgR2FtZVZpZXcoZ2FtZSwgY3R4KS5zdGFydCgpO1xuLy8gfSk7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBuZXdHYW1lKCkge1xuLy8gICAgIGdhbWUgPSBuZXcgR2FtZShjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIGN0eCk7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1kaXZcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kLWRpdlwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbi8vIH1cblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuLy8gICAgIGtleXNbZS5rZXlDb2RlXSA9IHRydWU7IFxuLy8gfSk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuLy8gICAgIGRlbGV0ZSBrZXlzW2Uua2V5Q29kZV07IFxuLy8gfSk7XG5jb25zdCBTVEFUVVMgPSB0cnVlO1xuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodCk7XG4gICAgZ2FtZS5kcmF3KCk7XG4gICAgZ2FtZS5yZW5kZXIoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59XG5pZiAoU1RBVFVTKSBhbmltYXRlKCk7IiwiaW1wb3J0IE1hcCBmcm9tICcuL21hcCc7XG5pbXBvcnQgTGVvIGZyb20gJy4vbGVvJztcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0VsV2lkdGgsIGNhbnZhc0VsSGVpZ2h0LCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbFdpZHRoID0gY2FudmFzRWxXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXNFbEhlaWdodCA9IGNhbnZhc0VsSGVpZ2h0O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKGNhbnZhc0VsV2lkdGgsIGNhbnZhc0VsSGVpZ2h0LCB0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMubGVvID0gbmV3IExlbyhjYW52YXNFbFdpZHRoIC8gMiwgY2FudmFzRWxIZWlnaHQgLyAyLCB0aGlzLmN0eCk7XG4gICAgICAgIG5ldyBVdGlsICh0aGlzLmxlbywgdGhpcyk7XG4gICAgfTtcbiAgICBcbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLm1hcC5kcmF3KFxuICAgICAgICAgICAgdGhpcy5jdHgsIFxuICAgICAgICAgICAgdGhpcy5jYW52YXNFbFdpZHRoLCBcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWxIZWlnaHRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5sZW8uZHJhdygpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMubGVvRHggPSAodGhpcy5jYW52YXNFbFdpZHRoIC8gMikgLSB0aGlzLmxlby54XG4gICAgICAgIHRoaXMubGVvRHkgPSAodGhpcy5jYW52YXNFbEhlaWdodCAvIDIpIC0gdGhpcy5sZW8ueVxuICAgICAgICB0aGlzLm1hcC5yZW5kZXIodGhpcy5sZW9EeCwgdGhpcy5sZW9EeSk7XG4gICAgICAgIHRoaXMubGVvLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHdvbigpIHtcblxuICAgIH1cblxuICAgIGxvc3QoKSB7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJjbGFzcyBMZW8ge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGN0eCkge1xuICAgICAgICB0aGlzLmxlbyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxlby5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL3Nwcml0ZS9MZW9XYWxrQ3ljbGUucG5nXCI7XG4gICAgICAgIC8vIHN0YXRlIG9mIGxlb1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgICAgICB0aGlzLnNpemUgPSAxMDA7XG4gICAgICAgIHRoaXMuZGlyID0gMDsgLy8gd2hpY2gga2V5IGlzIGhlbGQgZG93blxuICAgICAgICB0aGlzLnRyb3R0aW5nID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDAuMTtcblxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRyYXcoKSB7IC8vIHJlbmRlcihjdHgsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2hlcmUgdGhlIGhlY2sgaXMgbGVvXCIpXG4gICAgICAgIGxldCBzcHJpdGVTaXplID0gdGhpcy5zaXplIC8gNDtcbiAgICAgICAgbGV0IHRyb3QgPSBNYXRoLmZsb29yKHRoaXMudHJvdHRpbmcgJSA0KTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMubGVvLCB0cm90ICogc3ByaXRlU2l6ZSwgdGhpcy5kaXIgKiBzcHJpdGVTaXplLCBzcHJpdGVTaXplLCBzcHJpdGVTaXplLCAyMDAsIDIwMCwgdGhpcy5zaXplLCB0aGlzLnNpemUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnggKyBcIi0tLS0tLS1cIiArIHRoaXMueSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGNvbnN0IGRpciA9IGRpclswXTtcbiAgICAgICAgLy8gaWYgKGRpcikge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMucmlnaHQpIHsgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkOyB9XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5sZWZ0KSB7IHRoaXMudHJvdHRpbmcgLT0gdGhpcy5zcGVlZDsgfVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuZG93bikgeyB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7IH1cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnVwKSB7IHRoaXMudHJvdHRpbmcgLT0gdGhpcy5zcGVlZDsgfSAgICAgIFxuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IGRpciA9IHtcbiAgICAgICAgICAgIFwicmlnaHRcIjogMCxcbiAgICAgICAgICAgIFwibGVmdFwiOiAxLFxuICAgICAgICAgICAgXCJkb3duXCI6IDIsXG4gICAgICAgICAgICBcInVwXCI6IDNcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucmlnaHQgJiYgdGhpcy54IDwgMTk1MCkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJyaWdodFwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueCArPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyaWdodFwiK3RoaXMueClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlZnQgJiYgdGhpcy54ID4gLTQ2MCkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJsZWZ0XCJdO1xuICAgICAgICAgICAgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy54IC09IDM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxlZnRcIit0aGlzLngpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kb3duICYmIHRoaXMueSA8IDE5MjUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1wiZG93blwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueSArPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkb3duXCIrdGhpcy55KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXAgJiYgdGhpcy55ID4gLTUwMCkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJ1cFwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueSAtPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1cFwiK3RoaXMueSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVvO1xuIiwiaW1wb3J0IEhvdXNlcyBmcm9tICcuL21hcF9lbGUvaG91c2VzJztcbmltcG9ydCBTaHJ1YnMgZnJvbSAnLi9tYXBfZWxlL3NocnVicyc7XG5cbmNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgY3R4KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLm1hZ25pZnkgPSA1O1xuICAgICAgICB0aGlzLnhQb3MgPSAwO1xuICAgICAgICB0aGlzLnlQb3MgPSAwO1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLm1hcC5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL21hcC9iZ01hcC5wbmdcIjtcbiAgICAgICAgdGhpcy5ob3VzZSA9IG5ldyBIb3VzZXModGhpcy54UG9zLCB0aGlzLnlQb3MsIHRoaXMuY3R4KTtcbiAgICAgICAgLy8gdGhpcy5tYXAub25sb2FkID0gKCkgPT4gY3R4LmRyYXdJbWFnZSh0aGlzLm1hcCwgMCwgMCwgd2lkdGgsIGhlaWdodClcbiAgICB9XG4gICAgXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgbGV0IG1hcFNpemUgPSB0aGlzLndpZHRoICogdGhpcy5tYWduaWZ5O1xuICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5tYXAsIFxuICAgICAgICAgICAgMCwgMCwgXG4gICAgICAgICAgICB0aGlzLm1hcC53aWR0aCwgXG4gICAgICAgICAgICB0aGlzLm1hcC5oZWlnaHQsIFxuICAgICAgICAgICAgLSh0aGlzLm1hcC53aWR0aCkgKyB0aGlzLnhQb3MsIFxuICAgICAgICAgICAgLSh0aGlzLm1hcC5oZWlnaHQpICsgdGhpcy55UG9zLCBcbiAgICAgICAgICAgIG1hcFNpemUsIG1hcFNpemVcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnhQb3MgKyBcImFuZFwiICsgdGhpcy55UG9zKVxuICAgICAgICBpZiAodGhpcy54UG9zIDw9IDUyNSAmJiB0aGlzLnhQb3MgPj0gLTUwMCAmJiB0aGlzLnlQb3MgPD0gNzUwICYmIHRoaXMueVBvcyA+PSAtMzUwKSBcbiAgICAgICAgICAgIHRoaXMuaG91c2UuZHJhd0hld2VydHNIb3VzZSh0aGlzLnhQb3MsIHRoaXMueVBvcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGxlb0R4LCBsZW9EeSkge1xuICAgICAgICAvLyBpZiAodGhpcy54UG9zIDwgMTI1MCAmJiB0aGlzLnlQb3MgPCAxMjUwKSB7XG4gICAgICAgICAgICB0aGlzLnhQb3MgPSBsZW9EeDtcbiAgICAgICAgICAgIHRoaXMueVBvcyA9IGxlb0R5O1xuXG4gICAgICAgIC8vIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDtcbiIsImNsYXNzIEhvdXNlcyB7XG4gICAgY29uc3RydWN0b3IoeFBvcywgeVBvcywgY3R4KSB7XG4gICAgICAgIHRoaXMueFBvcyA9IHhQb3M7XG4gICAgICAgIHRoaXMueVBvcyA9IHlQb3M7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnhDb2xsaXNpb24gPSB0aGlzLnhQb3MgLSB0aGlzLmJhc2VXaWR0aDtcbiAgICAgICAgdGhpcy55Q29sbGlzaW9uID0gdGhpcy55UG9zIC0gdGhpcy5iYXNlSGVpZ2h0O1xuICAgICAgICB0aGlzLmhvdXNlID0gbmV3IEltYWdlKCk7XG4gICAgfVxuXG4gICAgZHJhd1BvbGx5c0hvdXNlKGR4LCBkeSkge1xuICAgICAgICBjb25zdCBwb2xseXNIb3VzZSA9IHRoaXMuaG91c2U7XG4gICAgICAgIHBvbGx5c0hvdXNlLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvbWFwX2VsZW1lbnRzL3BvbGx5c0hvdXNlLnBuZ1wiO1xuXG4gICAgICAgIGNvbnN0IGJhc2VXaWR0aCA9IDgwO1xuICAgICAgICBjb25zdCBiYXNlSGVpZ2h0ID0gMTIwO1xuICAgICAgICBsZXQgbGVvRHggPSB0aGlzLnhQb3MgKyBkeCAtIHRoaXMuYmFzZVdpZHRoO1xuICAgICAgICBsZXQgbGVvRHkgPSB0aGlzLnlQb3MgKyBkeSAtIHRoaXMuYmFzZUhlaWdodDtcblxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UocG9sbHlzSG91c2UsIHRoaXMueFBvcywgdGhpcy55UG9zLCBiYXNlV2lkdGgsIGJhc2VIZWlnaHQpO1xuICAgIH1cblxuICAgIGRyYXdIZXdlcnRzSG91c2UoZHgsIGR5KSB7XG4gICAgICAgIGNvbnN0IGhld2VydHNIb3VzZSA9IHRoaXMuaG91c2U7XG4gICAgICAgIGhld2VydHNIb3VzZS5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL21hcF9lbGVtZW50cy9oZXdlcnRzSG91c2UucG5nXCI7XG5cbiAgICAgICAgY29uc3QgYmFzZVdpZHRoID0gMjAwO1xuICAgICAgICBjb25zdCBiYXNlSGVpZ2h0ID0gMTIwO1xuICAgICAgICBsZXQgbGVvRHggPSB0aGlzLnhQb3MgKyBkeCAtIHRoaXMuYmFzZVdpZHRoO1xuICAgICAgICBsZXQgbGVvRHkgPSB0aGlzLnlQb3MgKyBkeSAtIHRoaXMuYmFzZUhlaWdodDtcblxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGV3ZXJ0c0hvdXNlLCAwLCAwLCB0aGlzLnhQb3MsIHRoaXMueVBvcywgMCwgMCwgYmFzZVdpZHRoLCBiYXNlSGVpZ2h0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXNlczsiLCIgY2xhc3MgVXRpbCB7XG4gICAgY29uc3RydWN0b3IobGVvLCBnYW1lKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICBsZW8ucmlnaHQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGxlby5kb3duID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIGxlby51cCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGxlby5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGxlby5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIGxlby51cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=