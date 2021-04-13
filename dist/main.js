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
      var leoDx = this.canvasElWidth / 2 - this.leo.x;
      var leoDy = this.canvasElHeight / 2 - this.leo.y; // console.log(leoDx);

      this.map.render(leoDx, leoDy);
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
    this.house = new _map_ele_houses__WEBPACK_IMPORTED_MODULE_0__["default"](this.xPos, this.yPos, this.magnify, this.ctx); // this.map.onload = () => ctx.drawImage(this.map, 0, 0, width, height)
  }

  _createClass(Map, [{
    key: "draw",
    value: function draw(ctx) {
      var mapSize = this.width * this.magnify;
      ctx.drawImage(this.map, 0, 0, this.map.width, this.map.height, -this.map.width + this.xPos, -this.map.height + this.yPos, mapSize, mapSize); // console.log(this.xPos + "and" + this.yPos)

      if (this.xPos <= 525 && this.xPos >= -500 && this.yPos <= 750 && this.yPos >= -350) {
        this.house.drawHewertsHouse(this.width, this.height);
      }
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
  function Houses(xPos, yPos, magnify, ctx) {
    _classCallCheck(this, Houses);

    this.xPos = xPos;
    this.yPos = yPos;
    this.magnify = magnify;
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
      var leoDx = baseWidth;
      var leoDy = baseHeight; // this.ctx.drawImage(pollysHouse, , 0, baseWidth * 5, baseHeight * 5);
    }
  }, {
    key: "drawHewertsHouse",
    value: function drawHewertsHouse(dx, dy) {
      var hewertsHouse = this.house;
      hewertsHouse.src = "src/assets/images/map_elements/hewertsHouse.png";
      var baseWidth = 200;
      var baseHeight = 120;
      var leoDx = this.xPos - baseWidth;
      var leoDy = this.yPos - baseHeight; // console.log(leoDy)

      this.ctx.drawImage(hewertsHouse, 0, 0, baseWidth, baseHeight, dx, dy, baseWidth * 3, baseHeight * 3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXBfZWxlL2hvdXNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXNFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW52YXNEaW1lbnNpb24iLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJpbWFnZVNtb290aGluZ0VuYWJsZWQiLCJnYW1lIiwiR2FtZSIsIlNUQVRVUyIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJkcmF3IiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FudmFzRWxXaWR0aCIsImNhbnZhc0VsSGVpZ2h0IiwibWFwIiwiTWFwIiwibGVvIiwiTGVvIiwiVXRpbCIsImxlb0R4IiwieCIsImxlb0R5IiwieSIsIkltYWdlIiwic3JjIiwic2l6ZSIsImRpciIsInRyb3R0aW5nIiwic3BlZWQiLCJyaWdodCIsImxlZnQiLCJkb3duIiwidXAiLCJzcHJpdGVTaXplIiwidHJvdCIsIk1hdGgiLCJmbG9vciIsImRyYXdJbWFnZSIsIm1hZ25pZnkiLCJ4UG9zIiwieVBvcyIsImhvdXNlIiwiSG91c2VzIiwibWFwU2l6ZSIsImRyYXdIZXdlcnRzSG91c2UiLCJ4Q29sbGlzaW9uIiwiYmFzZVdpZHRoIiwieUNvbGxpc2lvbiIsImJhc2VIZWlnaHQiLCJkeCIsImR5IiwicG9sbHlzSG91c2UiLCJoZXdlcnRzSG91c2UiLCJhZGRFdmVudExpc3RlbmVy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QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWYsV0FBRyxDQUFDZ0IsRUFBSixHQUFTLElBQVQ7QUFDQTtBQVpSO0FBY0gsR0FoQkQ7QUFrQkFwQyxVQUFRLENBQUN5RCxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFBQyxDQUFDLEVBQUk7QUFDcENBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxZQUFRRCxDQUFDLENBQUNFLE9BQVY7QUFDSSxXQUFLLEVBQUw7QUFDSXhDLFdBQUcsQ0FBQ2EsS0FBSixHQUFZLEtBQVo7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWIsV0FBRyxDQUFDYyxJQUFKLEdBQVcsS0FBWDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJZCxXQUFHLENBQUNlLElBQUosR0FBVyxLQUFYO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lmLFdBQUcsQ0FBQ2dCLEVBQUosR0FBUyxLQUFUO0FBQ0E7QUFaUjtBQWNILEdBaEJEO0FBaUJILEM7O0FBR1VkLG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWNhbnZhc1wiKTtcbiAgICBjb25zdCBjYW52YXNEaW1lbnNpb24gPSA1MDA7XG4gICAgY2FudmFzRWwud2lkdGggPSBjYW52YXNEaW1lbnNpb247XG4gICAgY2FudmFzRWwuaGVpZ2h0ID0gY2FudmFzRGltZW5zaW9uO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICBcbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQsIGN0eCk7XG4gICAgLy8gbmV3IEdhbWVWaWV3KGdhbWUsIGN0eCkuc3RhcnQoKTtcbi8vIH0pO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gbmV3R2FtZSgpIHtcbi8vICAgICBnYW1lID0gbmV3IEdhbWUoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCBjdHgpO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtZGl2XCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZC1kaXZcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4vLyB9XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbi8vICAgICBrZXlzW2Uua2V5Q29kZV0gPSB0cnVlOyBcbi8vIH0pO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbi8vICAgICBkZWxldGUga2V5c1tlLmtleUNvZGVdOyBcbi8vIH0pO1xuY29uc3QgU1RBVFVTID0gdHJ1ZTtcblxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQpO1xuICAgIGdhbWUuZHJhdygpO1xuICAgIGdhbWUucmVuZGVyKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xufVxuaWYgKFNUQVRVUykgYW5pbWF0ZSgpOyIsImltcG9ydCBNYXAgZnJvbSAnLi9tYXAnO1xuaW1wb3J0IExlbyBmcm9tICcuL2xlbyc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbFdpZHRoLCBjYW52YXNFbEhlaWdodCwgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzRWxXaWR0aCA9IGNhbnZhc0VsV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzRWxIZWlnaHQgPSBjYW52YXNFbEhlaWdodDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcChjYW52YXNFbFdpZHRoLCBjYW52YXNFbEhlaWdodCwgdGhpcy5jdHgpO1xuICAgICAgICB0aGlzLmxlbyA9IG5ldyBMZW8oY2FudmFzRWxXaWR0aCAvIDIsIGNhbnZhc0VsSGVpZ2h0IC8gMiwgdGhpcy5jdHgpO1xuICAgICAgICBuZXcgVXRpbCAodGhpcy5sZW8sIHRoaXMpO1xuICAgIH07XG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5tYXAuZHJhdyhcbiAgICAgICAgICAgIHRoaXMuY3R4LCBcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWxXaWR0aCwgXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsSGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubGVvLmRyYXcoKTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGVvRHggPSAodGhpcy5jYW52YXNFbFdpZHRoIC8gMikgLSB0aGlzLmxlby54XG4gICAgICAgIGxldCBsZW9EeSA9ICh0aGlzLmNhbnZhc0VsSGVpZ2h0IC8gMikgLSB0aGlzLmxlby55XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxlb0R4KTtcbiAgICAgICAgdGhpcy5tYXAucmVuZGVyKGxlb0R4LCBsZW9EeSk7XG4gICAgICAgIHRoaXMubGVvLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHdvbigpIHtcblxuICAgIH1cblxuICAgIGxvc3QoKSB7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJjbGFzcyBMZW8ge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGN0eCkge1xuICAgICAgICB0aGlzLmxlbyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxlby5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL3Nwcml0ZS9MZW9XYWxrQ3ljbGUucG5nXCI7XG4gICAgICAgIC8vIHN0YXRlIG9mIGxlb1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgICAgICB0aGlzLnNpemUgPSAxMDA7XG4gICAgICAgIHRoaXMuZGlyID0gMDsgLy8gd2hpY2gga2V5IGlzIGhlbGQgZG93blxuICAgICAgICB0aGlzLnRyb3R0aW5nID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDAuMTtcblxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRyYXcoKSB7IC8vIHJlbmRlcihjdHgsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2hlcmUgdGhlIGhlY2sgaXMgbGVvXCIpXG4gICAgICAgIGxldCBzcHJpdGVTaXplID0gdGhpcy5zaXplIC8gNDtcbiAgICAgICAgbGV0IHRyb3QgPSBNYXRoLmZsb29yKHRoaXMudHJvdHRpbmcgJSA0KTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMubGVvLCB0cm90ICogc3ByaXRlU2l6ZSwgdGhpcy5kaXIgKiBzcHJpdGVTaXplLCBzcHJpdGVTaXplLCBzcHJpdGVTaXplLCAyMDAsIDIwMCwgdGhpcy5zaXplLCB0aGlzLnNpemUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnggKyBcIi0tLS0tLS1cIiArIHRoaXMueSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGNvbnN0IGRpciA9IGRpclswXTtcbiAgICAgICAgLy8gaWYgKGRpcikge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMucmlnaHQpIHsgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkOyB9XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5sZWZ0KSB7IHRoaXMudHJvdHRpbmcgLT0gdGhpcy5zcGVlZDsgfVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuZG93bikgeyB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7IH1cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnVwKSB7IHRoaXMudHJvdHRpbmcgLT0gdGhpcy5zcGVlZDsgfSAgICAgIFxuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IGRpciA9IHtcbiAgICAgICAgICAgIFwicmlnaHRcIjogMCxcbiAgICAgICAgICAgIFwibGVmdFwiOiAxLFxuICAgICAgICAgICAgXCJkb3duXCI6IDIsXG4gICAgICAgICAgICBcInVwXCI6IDNcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucmlnaHQgJiYgdGhpcy54IDwgMTk1MCkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJyaWdodFwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueCArPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyaWdodFwiK3RoaXMueClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlZnQgJiYgdGhpcy54ID4gLTQ2MCkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJsZWZ0XCJdO1xuICAgICAgICAgICAgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy54IC09IDM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxlZnRcIit0aGlzLngpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kb3duICYmIHRoaXMueSA8IDE5MjUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1wiZG93blwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueSArPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkb3duXCIrdGhpcy55KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXAgJiYgdGhpcy55ID4gLTUwMCkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJ1cFwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueSAtPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1cFwiK3RoaXMueSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVvO1xuIiwiaW1wb3J0IEhvdXNlcyBmcm9tICcuL21hcF9lbGUvaG91c2VzJztcbmltcG9ydCBTaHJ1YnMgZnJvbSAnLi9tYXBfZWxlL3NocnVicyc7XG5cbmNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgY3R4KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLm1hZ25pZnkgPSA1O1xuICAgICAgICB0aGlzLnhQb3MgPSAwO1xuICAgICAgICB0aGlzLnlQb3MgPSAwO1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLm1hcC5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL21hcC9iZ01hcC5wbmdcIjtcbiAgICAgICAgdGhpcy5ob3VzZSA9IG5ldyBIb3VzZXModGhpcy54UG9zLCB0aGlzLnlQb3MsIHRoaXMubWFnbmlmeSwgdGhpcy5jdHgpO1xuICAgICAgICAvLyB0aGlzLm1hcC5vbmxvYWQgPSAoKSA9PiBjdHguZHJhd0ltYWdlKHRoaXMubWFwLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KVxuICAgIH1cbiAgICBcbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBsZXQgbWFwU2l6ZSA9IHRoaXMud2lkdGggKiB0aGlzLm1hZ25pZnk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLm1hcCwgXG4gICAgICAgICAgICAwLCAwLCBcbiAgICAgICAgICAgIHRoaXMubWFwLndpZHRoLCBcbiAgICAgICAgICAgIHRoaXMubWFwLmhlaWdodCwgXG4gICAgICAgICAgICAtKHRoaXMubWFwLndpZHRoKSArIHRoaXMueFBvcywgXG4gICAgICAgICAgICAtKHRoaXMubWFwLmhlaWdodCkgKyB0aGlzLnlQb3MsIFxuICAgICAgICAgICAgbWFwU2l6ZSwgbWFwU2l6ZVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMueFBvcyArIFwiYW5kXCIgKyB0aGlzLnlQb3MpXG4gICAgICAgIGlmICh0aGlzLnhQb3MgPD0gNTI1ICYmIHRoaXMueFBvcyA+PSAtNTAwICYmIHRoaXMueVBvcyA8PSA3NTAgJiYgdGhpcy55UG9zID49IC0zNTApIHtcbiAgICAgICAgICAgIHRoaXMuaG91c2UuZHJhd0hld2VydHNIb3VzZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIobGVvRHgsIGxlb0R5KSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnhQb3MgPCAxMjUwICYmIHRoaXMueVBvcyA8IDEyNTApIHtcbiAgICAgICAgICAgIHRoaXMueFBvcyA9IGxlb0R4O1xuICAgICAgICAgICAgdGhpcy55UG9zID0gbGVvRHk7XG5cbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuIiwiY2xhc3MgSG91c2VzIHtcbiAgICBjb25zdHJ1Y3Rvcih4UG9zLCB5UG9zLCBtYWduaWZ5LCBjdHgpIHtcbiAgICAgICAgdGhpcy54UG9zID0geFBvcztcbiAgICAgICAgdGhpcy55UG9zID0geVBvcztcbiAgICAgICAgdGhpcy5tYWduaWZ5ID0gbWFnbmlmeTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueENvbGxpc2lvbiA9IHRoaXMueFBvcyAtIHRoaXMuYmFzZVdpZHRoO1xuICAgICAgICB0aGlzLnlDb2xsaXNpb24gPSB0aGlzLnlQb3MgLSB0aGlzLmJhc2VIZWlnaHQ7XG4gICAgICAgIHRoaXMuaG91c2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB9XG5cbiAgICBkcmF3UG9sbHlzSG91c2UoZHgsIGR5KSB7XG4gICAgICAgIGNvbnN0IHBvbGx5c0hvdXNlID0gdGhpcy5ob3VzZTtcbiAgICAgICAgcG9sbHlzSG91c2Uuc3JjID0gXCJzcmMvYXNzZXRzL2ltYWdlcy9tYXBfZWxlbWVudHMvcG9sbHlzSG91c2UucG5nXCI7XG5cbiAgICAgICAgY29uc3QgYmFzZVdpZHRoID0gODA7XG4gICAgICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAxMjA7XG4gICAgICAgIGxldCBsZW9EeCA9IGJhc2VXaWR0aDtcbiAgICAgICAgbGV0IGxlb0R5ID0gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UocG9sbHlzSG91c2UsICwgMCwgYmFzZVdpZHRoICogNSwgYmFzZUhlaWdodCAqIDUpO1xuICAgIH1cblxuICAgIGRyYXdIZXdlcnRzSG91c2UoZHgsIGR5KSB7XG4gICAgICAgIGNvbnN0IGhld2VydHNIb3VzZSA9IHRoaXMuaG91c2U7XG4gICAgICAgIGhld2VydHNIb3VzZS5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL21hcF9lbGVtZW50cy9oZXdlcnRzSG91c2UucG5nXCI7XG5cbiAgICAgICAgY29uc3QgYmFzZVdpZHRoID0gMjAwO1xuICAgICAgICBjb25zdCBiYXNlSGVpZ2h0ID0gMTIwO1xuICAgICAgICBsZXQgbGVvRHggPSB0aGlzLnhQb3MgLSBiYXNlV2lkdGg7XG4gICAgICAgIGxldCBsZW9EeSA9IHRoaXMueVBvcyAtIGJhc2VIZWlnaHQ7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cobGVvRHkpXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShoZXdlcnRzSG91c2UsIDAsIDAsIGJhc2VXaWR0aCwgYmFzZUhlaWdodCwgZHgsIGR5LCBiYXNlV2lkdGggKiAzLCBiYXNlSGVpZ2h0ICogMyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3VzZXM7IiwiIGNsYXNzIFV0aWwge1xuICAgIGNvbnN0cnVjdG9yKGxlbywgZ2FtZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgbGVvLnJpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGxlby5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBsZW8uZG93biA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBsZW8udXAgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIGxlby5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBsZW8ubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBsZW8uZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBsZW8udXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9