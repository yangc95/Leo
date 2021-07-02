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


document.addEventListener("DOMContentLoaded", function () {
  var playButton = document.querySelector("play-button");
  var restartButton = document.querySelector("restart-button");
  var canvasEl = document.getElementById("mycanvas");
  canvasEl.width = 500;
  canvasEl.height = 500;
  var ctx = canvasEl.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__["default"](canvasEl.width, canvasEl.height, ctx); // new GameView(game, ctx).start();

  function animate() {
    if (game.won() || game.lost()) {
      window.cancelAnimationFrame(window.animationId);
      return;
    } // list any other conditionals above


    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    game.draw();
    game.render();
    requestAnimationFrame(animate);
  }

  var STATUS = true;
  if (STATUS) animate();
  playButton.addEventListener('click', function () {
    playButton.style.visibility = 'hidden';
    game.start();
    animloop();
  });
  restartButton.addEventListener('click', function () {
    restart.Buttonstyle.visibility = 'visible';
  });
}); // export function newGame() {
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
/* harmony import */ var _story__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./story */ "./src/scripts/story.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");
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
    this.story = new _story__WEBPACK_IMPORTED_MODULE_2__["default"]();
    new _util__WEBPACK_IMPORTED_MODULE_3__["default"](this.leo, this);
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
    value: function won() {// when the 
    }
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
      // if (this.xPos <= 525 && this.xPos >= -500 && this.yPos <= 750 && this.yPos >= -350) {
      //     this.house.drawHewertsHouse(this.width, this.height);
      // }
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

/***/ "./src/scripts/story.js":
/*!******************************!*\
  !*** ./src/scripts/story.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Story = function Story() {
  _classCallCheck(this, Story);
};

/* harmony default export */ __webpack_exports__["default"] = (Story);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXBfZWxlL2hvdXNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5QnV0dG9uIiwicXVlcnlTZWxlY3RvciIsInJlc3RhcnRCdXR0b24iLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiZ2FtZSIsIkdhbWUiLCJhbmltYXRlIiwid29uIiwibG9zdCIsIndpbmRvdyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uSWQiLCJjbGVhclJlY3QiLCJkcmF3IiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiU1RBVFVTIiwic3R5bGUiLCJ2aXNpYmlsaXR5Iiwic3RhcnQiLCJhbmltbG9vcCIsInJlc3RhcnQiLCJCdXR0b25zdHlsZSIsImNhbnZhc0VsV2lkdGgiLCJjYW52YXNFbEhlaWdodCIsIm1hcCIsIk1hcCIsImxlbyIsIkxlbyIsInN0b3J5IiwiU3RvcnkiLCJVdGlsIiwibGVvRHgiLCJ4IiwibGVvRHkiLCJ5IiwiSW1hZ2UiLCJzcmMiLCJzaXplIiwiZGlyIiwidHJvdHRpbmciLCJzcGVlZCIsInJpZ2h0IiwibGVmdCIsImRvd24iLCJ1cCIsInNwcml0ZVNpemUiLCJ0cm90IiwiTWF0aCIsImZsb29yIiwiZHJhd0ltYWdlIiwibWFnbmlmeSIsInhQb3MiLCJ5UG9zIiwiaG91c2UiLCJIb3VzZXMiLCJtYXBTaXplIiwieENvbGxpc2lvbiIsImJhc2VXaWR0aCIsInlDb2xsaXNpb24iLCJiYXNlSGVpZ2h0IiwiZHgiLCJkeSIsInBvbGx5c0hvdXNlIiwiaGV3ZXJ0c0hvdXNlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbkI7QUFDQSxNQUFNQyxhQUFhLEdBQUdKLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixnQkFBdkIs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RUFBTDtBQUNJZixXQUFHLENBQUNnQixJQUFKLEdBQVcsS0FBWDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJaEIsV0FBRyxDQUFDaUIsSUFBSixHQUFXLEtBQVg7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWpCLFdBQUcsQ0FBQ2tCLEVBQUosR0FBUyxLQUFUO0FBQ0E7QUFaUjtBQWNILEdBaEJEO0FBaUJILEM7O0FBR1VkLG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInBsYXktYnV0dG9uXCIpO1xuICBjb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInJlc3RhcnQtYnV0dG9uXCIpO1xuXG4gIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWNhbnZhc1wiKTtcbiAgY2FudmFzRWwud2lkdGggPSA1MDA7XG4gIGNhbnZhc0VsLmhlaWdodCA9IDUwMDtcbiAgXG4gIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICBcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQsIGN0eCk7XG4gIC8vIG5ldyBHYW1lVmlldyhnYW1lLCBjdHgpLnN0YXJ0KCk7XG4gIFxuICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIGlmIChnYW1lLndvbigpIHx8IGdhbWUubG9zdCgpKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh3aW5kb3cuYW5pbWF0aW9uSWQpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGxpc3QgYW55IG90aGVyIGNvbmRpdGlvbmFscyBhYm92ZVxuICAgICAgICBcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQpO1xuICAgIGdhbWUuZHJhdygpO1xuICAgIGdhbWUucmVuZGVyKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIH1cbiAgICAgIFxuICBjb25zdCBTVEFUVVMgPSB0cnVlO1xuICBpZiAoU1RBVFVTKSBhbmltYXRlKCk7XG5cbiAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwbGF5QnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBnYW1lLnN0YXJ0KCk7XG4gICAgYW5pbWxvb3AoKTtcbiAgfSk7XG5cbiAgcmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZXN0YXJ0LkJ1dHRvbnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH0pO1xuXG59KTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIG5ld0dhbWUoKSB7XG4vLyAgICAgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwgY3R4KTtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWRpdlwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmQtZGl2XCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuLy8gfVxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4vLyAgICAga2V5c1tlLmtleUNvZGVdID0gdHJ1ZTsgXG4vLyB9KTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG4vLyAgICAgZGVsZXRlIGtleXNbZS5rZXlDb2RlXTsgXG4vLyB9KTsiLCJpbXBvcnQgTWFwIGZyb20gJy4vbWFwJztcbmltcG9ydCBMZW8gZnJvbSAnLi9sZW8nO1xuaW1wb3J0IFN0b3J5IGZyb20gJy4vc3RvcnknO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxXaWR0aCwgY2FudmFzRWxIZWlnaHQsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhc0VsV2lkdGggPSBjYW52YXNFbFdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhc0VsSGVpZ2h0ID0gY2FudmFzRWxIZWlnaHQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoY2FudmFzRWxXaWR0aCwgY2FudmFzRWxIZWlnaHQsIHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5sZW8gPSBuZXcgTGVvKGNhbnZhc0VsV2lkdGggLyAyLCBjYW52YXNFbEhlaWdodCAvIDIsIHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5zdG9yeSA9IG5ldyBTdG9yeSgpO1xuICAgICAgICBuZXcgVXRpbCAodGhpcy5sZW8sIHRoaXMpO1xuICAgIH07XG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5tYXAuZHJhdyhcbiAgICAgICAgICAgIHRoaXMuY3R4LCBcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWxXaWR0aCwgXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsSGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubGVvLmRyYXcoKTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGVvRHggPSAodGhpcy5jYW52YXNFbFdpZHRoIC8gMikgLSB0aGlzLmxlby54XG4gICAgICAgIGxldCBsZW9EeSA9ICh0aGlzLmNhbnZhc0VsSGVpZ2h0IC8gMikgLSB0aGlzLmxlby55XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxlb0R4KTtcbiAgICAgICAgdGhpcy5tYXAucmVuZGVyKGxlb0R4LCBsZW9EeSk7XG4gICAgICAgIHRoaXMubGVvLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHdvbigpIHtcbiAgICAgICAgLy8gd2hlbiB0aGUgXG4gICAgfVxuXG4gICAgbG9zdCgpIHtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImNsYXNzIExlbyB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgY3R4KSB7XG4gICAgICAgIHRoaXMubGVvID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubGVvLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvc3ByaXRlL0xlb1dhbGtDeWNsZS5wbmdcIjtcbiAgICAgICAgLy8gc3RhdGUgb2YgbGVvXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMuc2l6ZSA9IDEwMDtcbiAgICAgICAgdGhpcy5kaXIgPSAwOyAvLyB3aGljaCBrZXkgaXMgaGVsZCBkb3duXG4gICAgICAgIHRoaXMudHJvdHRpbmcgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMC4xO1xuXG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZHJhdygpIHsgLy8gcmVuZGVyKGN0eCwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aGVyZSB0aGUgaGVjayBpcyBsZW9cIilcbiAgICAgICAgbGV0IHNwcml0ZVNpemUgPSB0aGlzLnNpemUgLyA0O1xuICAgICAgICBsZXQgdHJvdCA9IE1hdGguZmxvb3IodGhpcy50cm90dGluZyAlIDQpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5sZW8sIHRyb3QgKiBzcHJpdGVTaXplLCB0aGlzLmRpciAqIHNwcml0ZVNpemUsIHNwcml0ZVNpemUsIHNwcml0ZVNpemUsIDIwMCwgMjAwLCB0aGlzLnNpemUsIHRoaXMuc2l6ZSk7ICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMueCArIFwiLS0tLS0tLVwiICsgdGhpcy55KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gY29uc3QgZGlyID0gZGlyWzBdO1xuICAgICAgICAvLyBpZiAoZGlyKSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5yaWdodCkgeyB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7IH1cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmxlZnQpIHsgdGhpcy50cm90dGluZyAtPSB0aGlzLnNwZWVkOyB9XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5kb3duKSB7IHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDsgfVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMudXApIHsgdGhpcy50cm90dGluZyAtPSB0aGlzLnNwZWVkOyB9ICAgICAgXG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc3QgZGlyID0ge1xuICAgICAgICAgICAgXCJyaWdodFwiOiAwLFxuICAgICAgICAgICAgXCJsZWZ0XCI6IDEsXG4gICAgICAgICAgICBcImRvd25cIjogMixcbiAgICAgICAgICAgIFwidXBcIjogM1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5yaWdodCAmJiB0aGlzLnggPCAxOTUwKSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcltcInJpZ2h0XCJdO1xuICAgICAgICAgICAgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy54ICs9IDM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJpZ2h0XCIrdGhpcy54KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVmdCAmJiB0aGlzLnggPiAtNDYwKSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcltcImxlZnRcIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnggLT0gMztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGVmdFwiK3RoaXMueClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRvd24gJiYgdGhpcy55IDwgMTkyNSkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJkb3duXCJdO1xuICAgICAgICAgICAgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy55ICs9IDM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRvd25cIit0aGlzLnkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy51cCAmJiB0aGlzLnkgPiAtNTAwKSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcltcInVwXCJdO1xuICAgICAgICAgICAgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy55IC09IDM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVwXCIrdGhpcy55KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZW87XG4iLCJpbXBvcnQgSG91c2VzIGZyb20gJy4vbWFwX2VsZS9ob3VzZXMnO1xuaW1wb3J0IFNocnVicyBmcm9tICcuL21hcF9lbGUvc2hydWJzJztcblxuY2xhc3MgTWFwIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjdHgpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMubWFnbmlmeSA9IDU7XG4gICAgICAgIHRoaXMueFBvcyA9IDA7XG4gICAgICAgIHRoaXMueVBvcyA9IDA7XG4gICAgICAgIHRoaXMubWFwID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubWFwLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvbWFwL2JnTWFwLnBuZ1wiO1xuICAgICAgICB0aGlzLmhvdXNlID0gbmV3IEhvdXNlcyh0aGlzLnhQb3MsIHRoaXMueVBvcywgdGhpcy5tYWduaWZ5LCB0aGlzLmN0eCk7XG4gICAgICAgIC8vIHRoaXMubWFwLm9ubG9hZCA9ICgpID0+IGN0eC5kcmF3SW1hZ2UodGhpcy5tYXAsIDAsIDAsIHdpZHRoLCBoZWlnaHQpXG4gICAgfVxuICAgIFxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGxldCBtYXBTaXplID0gdGhpcy53aWR0aCAqIHRoaXMubWFnbmlmeTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMubWFwLCBcbiAgICAgICAgICAgIDAsIDAsIFxuICAgICAgICAgICAgdGhpcy5tYXAud2lkdGgsIFxuICAgICAgICAgICAgdGhpcy5tYXAuaGVpZ2h0LCBcbiAgICAgICAgICAgIC0odGhpcy5tYXAud2lkdGgpICsgdGhpcy54UG9zLCBcbiAgICAgICAgICAgIC0odGhpcy5tYXAuaGVpZ2h0KSArIHRoaXMueVBvcywgXG4gICAgICAgICAgICBtYXBTaXplLCBtYXBTaXplXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy54UG9zICsgXCJhbmRcIiArIHRoaXMueVBvcylcbiAgICAgICAgLy8gaWYgKHRoaXMueFBvcyA8PSA1MjUgJiYgdGhpcy54UG9zID49IC01MDAgJiYgdGhpcy55UG9zIDw9IDc1MCAmJiB0aGlzLnlQb3MgPj0gLTM1MCkge1xuICAgICAgICAvLyAgICAgdGhpcy5ob3VzZS5kcmF3SGV3ZXJ0c0hvdXNlKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHJlbmRlcihsZW9EeCwgbGVvRHkpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMueFBvcyA8IDEyNTAgJiYgdGhpcy55UG9zIDwgMTI1MCkge1xuICAgICAgICAgICAgdGhpcy54UG9zID0gbGVvRHg7XG4gICAgICAgICAgICB0aGlzLnlQb3MgPSBsZW9EeTtcblxuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iLCJjbGFzcyBIb3VzZXMge1xuICAgIGNvbnN0cnVjdG9yKHhQb3MsIHlQb3MsIG1hZ25pZnksIGN0eCkge1xuICAgICAgICB0aGlzLnhQb3MgPSB4UG9zO1xuICAgICAgICB0aGlzLnlQb3MgPSB5UG9zO1xuICAgICAgICB0aGlzLm1hZ25pZnkgPSBtYWduaWZ5O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54Q29sbGlzaW9uID0gdGhpcy54UG9zIC0gdGhpcy5iYXNlV2lkdGg7XG4gICAgICAgIHRoaXMueUNvbGxpc2lvbiA9IHRoaXMueVBvcyAtIHRoaXMuYmFzZUhlaWdodDtcbiAgICAgICAgdGhpcy5ob3VzZSA9IG5ldyBJbWFnZSgpO1xuICAgIH1cblxuICAgIGRyYXdQb2xseXNIb3VzZShkeCwgZHkpIHtcbiAgICAgICAgY29uc3QgcG9sbHlzSG91c2UgPSB0aGlzLmhvdXNlO1xuICAgICAgICBwb2xseXNIb3VzZS5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL21hcF9lbGVtZW50cy9wb2xseXNIb3VzZS5wbmdcIjtcblxuICAgICAgICBjb25zdCBiYXNlV2lkdGggPSA4MDtcbiAgICAgICAgY29uc3QgYmFzZUhlaWdodCA9IDEyMDtcbiAgICAgICAgbGV0IGxlb0R4ID0gYmFzZVdpZHRoO1xuICAgICAgICBsZXQgbGVvRHkgPSBiYXNlSGVpZ2h0O1xuXG4gICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShwb2xseXNIb3VzZSwgLCAwLCBiYXNlV2lkdGggKiA1LCBiYXNlSGVpZ2h0ICogNSk7XG4gICAgfVxuXG4gICAgZHJhd0hld2VydHNIb3VzZShkeCwgZHkpIHtcbiAgICAgICAgY29uc3QgaGV3ZXJ0c0hvdXNlID0gdGhpcy5ob3VzZTtcbiAgICAgICAgaGV3ZXJ0c0hvdXNlLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvbWFwX2VsZW1lbnRzL2hld2VydHNIb3VzZS5wbmdcIjtcblxuICAgICAgICBjb25zdCBiYXNlV2lkdGggPSAyMDA7XG4gICAgICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAxMjA7XG4gICAgICAgIGxldCBsZW9EeCA9IHRoaXMueFBvcyAtIGJhc2VXaWR0aDtcbiAgICAgICAgbGV0IGxlb0R5ID0gdGhpcy55UG9zIC0gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsZW9EeSlcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGhld2VydHNIb3VzZSwgMCwgMCwgYmFzZVdpZHRoLCBiYXNlSGVpZ2h0LCBkeCwgZHksIGJhc2VXaWR0aCAqIDMsIGJhc2VIZWlnaHQgKiAzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXNlczsiLCJjbGFzcyBTdG9yeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Rvcnk7IiwiY2xhc3MgVXRpbCB7XG4gICAgY29uc3RydWN0b3IobGVvLCBnYW1lKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICBsZW8ucmlnaHQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGxlby5kb3duID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIGxlby51cCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGxlby5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGxlby5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIGxlby51cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=