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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXBfZWxlL2hvdXNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5QnV0dG9uIiwicXVlcnlTZWxlY3RvciIsInJlc3RhcnRCdXR0b24iLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiZ2FtZSIsIkdhbWUiLCJhbmltYXRlIiwid29uIiwibG9zdCIsIndpbmRvdyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uSWQiLCJjbGVhclJlY3QiLCJkcmF3IiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiU1RBVFVTIiwic3R5bGUiLCJ2aXNpYmlsaXR5Iiwic3RhcnQiLCJhbmltbG9vcCIsInJlc3RhcnQiLCJCdXR0b25zdHlsZSIsImNhbnZhc0VsV2lkdGgiLCJjYW52YXNFbEhlaWdodCIsIm1hcCIsIk1hcCIsImxlbyIsIkxlbyIsInN0b3J5IiwiU3RvcnkiLCJVdGlsIiwibGVvRHgiLCJ4IiwibGVvRHkiLCJ5IiwiSW1hZ2UiLCJzcmMiLCJzaXplIiwiZGlyIiwidHJvdHRpbmciLCJzcGVlZCIsInJpZ2h0IiwibGVmdCIsImRvd24iLCJ1cCIsInNwcml0ZVNpemUiLCJ0cm90IiwiTWF0aCIsImZsb29yIiwiZHJhd0ltYWdlIiwibWFnbmlmeSIsInhQb3MiLCJ5UG9zIiwiaG91c2UiLCJIb3VzZXMiLCJtYXBTaXplIiwieENvbGxpc2lvbiIsImJhc2VXaWR0aCIsInlDb2xsaXNpb24iLCJiYXNlSGVpZ2h0IiwiZHgiLCJkeSIsInBvbGx5c0hvdXNlIiwiaGV3ZXJ0c0hvdXNlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbkI7QUFDQSxNQUFNQyxhQUFhLEdBQUdKLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixnQkFBdkIs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QUFDSWYsV0FBRyxDQUFDZ0IsSUFBSixHQUFXLEtBQVg7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWhCLFdBQUcsQ0FBQ2lCLElBQUosR0FBVyxLQUFYO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lqQixXQUFHLENBQUNrQixFQUFKLEdBQVMsS0FBVDtBQUNBO0FBWlI7QUFjSCxHQWhCRDtBQWlCSCxDOztBQUdVZCxtRUFBZixFOzs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwbGF5LWJ1dHRvblwiKTtcbiAgY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJyZXN0YXJ0LWJ1dHRvblwiKTtcblxuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXljYW52YXNcIik7XG4gIGNhbnZhc0VsLndpZHRoID0gNTAwO1xuICBjYW52YXNFbC5oZWlnaHQgPSA1MDA7XG4gIFxuICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXNFbC53aWR0aCwgY2FudmFzRWwuaGVpZ2h0LCBjdHgpO1xuICAvLyBuZXcgR2FtZVZpZXcoZ2FtZSwgY3R4KS5zdGFydCgpO1xuICBcbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBpZiAoZ2FtZS53b24oKSB8fCBnYW1lLmxvc3QoKSkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUod2luZG93LmFuaW1hdGlvbklkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBsaXN0IGFueSBvdGhlciBjb25kaXRpb25hbHMgYWJvdmVcbiAgICAgICAgXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNFbC53aWR0aCwgY2FudmFzRWwuaGVpZ2h0KTtcbiAgICBnYW1lLmRyYXcoKTtcbiAgICBnYW1lLnJlbmRlcigpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICB9XG4gICAgICBcbiAgY29uc3QgU1RBVFVTID0gdHJ1ZTtcbiAgaWYgKFNUQVRVUykgYW5pbWF0ZSgpO1xuXG4gIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGxheUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZ2FtZS5zdGFydCgpO1xuICAgIGFuaW1sb29wKCk7XG4gIH0pO1xuXG4gIHJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVzdGFydC5CdXR0b25zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICB9KTtcblxufSk7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBuZXdHYW1lKCkge1xuLy8gICAgIGdhbWUgPSBuZXcgR2FtZShjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIGN0eCk7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1kaXZcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kLWRpdlwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbi8vIH1cblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuLy8gICAgIGtleXNbZS5rZXlDb2RlXSA9IHRydWU7IFxuLy8gfSk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuLy8gICAgIGRlbGV0ZSBrZXlzW2Uua2V5Q29kZV07IFxuLy8gfSk7IiwiaW1wb3J0IE1hcCBmcm9tICcuL21hcCc7XG5pbXBvcnQgTGVvIGZyb20gJy4vbGVvJztcbmltcG9ydCBTdG9yeSBmcm9tICcuL3N0b3J5JztcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0VsV2lkdGgsIGNhbnZhc0VsSGVpZ2h0LCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbFdpZHRoID0gY2FudmFzRWxXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXNFbEhlaWdodCA9IGNhbnZhc0VsSGVpZ2h0O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKGNhbnZhc0VsV2lkdGgsIGNhbnZhc0VsSGVpZ2h0LCB0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMubGVvID0gbmV3IExlbyhjYW52YXNFbFdpZHRoIC8gMiwgY2FudmFzRWxIZWlnaHQgLyAyLCB0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuc3RvcnkgPSBuZXcgU3RvcnkoKTtcbiAgICAgICAgbmV3IFV0aWwgKHRoaXMubGVvLCB0aGlzKTtcbiAgICB9O1xuICAgIFxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMubWFwLmRyYXcoXG4gICAgICAgICAgICB0aGlzLmN0eCwgXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsV2lkdGgsIFxuICAgICAgICAgICAgdGhpcy5jYW52YXNFbEhlaWdodFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmxlby5kcmF3KCk7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxlb0R4ID0gKHRoaXMuY2FudmFzRWxXaWR0aCAvIDIpIC0gdGhpcy5sZW8ueFxuICAgICAgICBsZXQgbGVvRHkgPSAodGhpcy5jYW52YXNFbEhlaWdodCAvIDIpIC0gdGhpcy5sZW8ueVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsZW9EeCk7XG4gICAgICAgIHRoaXMubWFwLnJlbmRlcihsZW9EeCwgbGVvRHkpO1xuICAgICAgICB0aGlzLmxlby5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB3b24oKSB7XG5cbiAgICB9XG5cbiAgICBsb3N0KCkge1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiY2xhc3MgTGVvIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBjdHgpIHtcbiAgICAgICAgdGhpcy5sZW8gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5sZW8uc3JjID0gXCJzcmMvYXNzZXRzL2ltYWdlcy9zcHJpdGUvTGVvV2Fsa0N5Y2xlLnBuZ1wiO1xuICAgICAgICAvLyBzdGF0ZSBvZiBsZW9cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy5zaXplID0gMTAwO1xuICAgICAgICB0aGlzLmRpciA9IDA7IC8vIHdoaWNoIGtleSBpcyBoZWxkIGRvd25cbiAgICAgICAgdGhpcy50cm90dGluZyA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjE7XG5cbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXAgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkcmF3KCkgeyAvLyByZW5kZXIoY3R4LCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndoZXJlIHRoZSBoZWNrIGlzIGxlb1wiKVxuICAgICAgICBsZXQgc3ByaXRlU2l6ZSA9IHRoaXMuc2l6ZSAvIDQ7XG4gICAgICAgIGxldCB0cm90ID0gTWF0aC5mbG9vcih0aGlzLnRyb3R0aW5nICUgNCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmxlbywgdHJvdCAqIHNwcml0ZVNpemUsIHRoaXMuZGlyICogc3ByaXRlU2l6ZSwgc3ByaXRlU2l6ZSwgc3ByaXRlU2l6ZSwgMjAwLCAyMDAsIHRoaXMuc2l6ZSwgdGhpcy5zaXplKTsgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy54ICsgXCItLS0tLS0tXCIgKyB0aGlzLnkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBjb25zdCBkaXIgPSBkaXJbMF07XG4gICAgICAgIC8vIGlmIChkaXIpIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnJpZ2h0KSB7IHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDsgfVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMubGVmdCkgeyB0aGlzLnRyb3R0aW5nIC09IHRoaXMuc3BlZWQ7IH1cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmRvd24pIHsgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkOyB9XG4gICAgICAgIC8vICAgICBpZiAodGhpcy51cCkgeyB0aGlzLnRyb3R0aW5nIC09IHRoaXMuc3BlZWQ7IH0gICAgICBcbiAgICAgICAgLy8gfVxuICAgICAgICBjb25zdCBkaXIgPSB7XG4gICAgICAgICAgICBcInJpZ2h0XCI6IDAsXG4gICAgICAgICAgICBcImxlZnRcIjogMSxcbiAgICAgICAgICAgIFwiZG93blwiOiAyLFxuICAgICAgICAgICAgXCJ1cFwiOiAzXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0ICYmIHRoaXMueCA8IDE5NTApIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1wicmlnaHRcIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnggKz0gMztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmlnaHRcIit0aGlzLngpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0ICYmIHRoaXMueCA+IC00NjApIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1wibGVmdFwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueCAtPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJsZWZ0XCIrdGhpcy54KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZG93biAmJiB0aGlzLnkgPCAxOTI1KSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcltcImRvd25cIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnkgKz0gMztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZG93blwiK3RoaXMueSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnVwICYmIHRoaXMueSA+IC01MDApIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1widXBcIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnkgLT0gMztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBcIit0aGlzLnkpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlbztcbiIsImltcG9ydCBIb3VzZXMgZnJvbSAnLi9tYXBfZWxlL2hvdXNlcyc7XG5pbXBvcnQgU2hydWJzIGZyb20gJy4vbWFwX2VsZS9zaHJ1YnMnO1xuXG5jbGFzcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGN0eCkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5tYWduaWZ5ID0gNTtcbiAgICAgICAgdGhpcy54UG9zID0gMDtcbiAgICAgICAgdGhpcy55UG9zID0gMDtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5tYXAuc3JjID0gXCJzcmMvYXNzZXRzL2ltYWdlcy9tYXAvYmdNYXAucG5nXCI7XG4gICAgICAgIHRoaXMuaG91c2UgPSBuZXcgSG91c2VzKHRoaXMueFBvcywgdGhpcy55UG9zLCB0aGlzLm1hZ25pZnksIHRoaXMuY3R4KTtcbiAgICAgICAgLy8gdGhpcy5tYXAub25sb2FkID0gKCkgPT4gY3R4LmRyYXdJbWFnZSh0aGlzLm1hcCwgMCwgMCwgd2lkdGgsIGhlaWdodClcbiAgICB9XG4gICAgXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgbGV0IG1hcFNpemUgPSB0aGlzLndpZHRoICogdGhpcy5tYWduaWZ5O1xuICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5tYXAsIFxuICAgICAgICAgICAgMCwgMCwgXG4gICAgICAgICAgICB0aGlzLm1hcC53aWR0aCwgXG4gICAgICAgICAgICB0aGlzLm1hcC5oZWlnaHQsIFxuICAgICAgICAgICAgLSh0aGlzLm1hcC53aWR0aCkgKyB0aGlzLnhQb3MsIFxuICAgICAgICAgICAgLSh0aGlzLm1hcC5oZWlnaHQpICsgdGhpcy55UG9zLCBcbiAgICAgICAgICAgIG1hcFNpemUsIG1hcFNpemVcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnhQb3MgKyBcImFuZFwiICsgdGhpcy55UG9zKVxuICAgICAgICAvLyBpZiAodGhpcy54UG9zIDw9IDUyNSAmJiB0aGlzLnhQb3MgPj0gLTUwMCAmJiB0aGlzLnlQb3MgPD0gNzUwICYmIHRoaXMueVBvcyA+PSAtMzUwKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmhvdXNlLmRyYXdIZXdlcnRzSG91c2UodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcmVuZGVyKGxlb0R4LCBsZW9EeSkge1xuICAgICAgICAvLyBpZiAodGhpcy54UG9zIDwgMTI1MCAmJiB0aGlzLnlQb3MgPCAxMjUwKSB7XG4gICAgICAgICAgICB0aGlzLnhQb3MgPSBsZW9EeDtcbiAgICAgICAgICAgIHRoaXMueVBvcyA9IGxlb0R5O1xuXG4gICAgICAgIC8vIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDtcbiIsImNsYXNzIEhvdXNlcyB7XG4gICAgY29uc3RydWN0b3IoeFBvcywgeVBvcywgbWFnbmlmeSwgY3R4KSB7XG4gICAgICAgIHRoaXMueFBvcyA9IHhQb3M7XG4gICAgICAgIHRoaXMueVBvcyA9IHlQb3M7XG4gICAgICAgIHRoaXMubWFnbmlmeSA9IG1hZ25pZnk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnhDb2xsaXNpb24gPSB0aGlzLnhQb3MgLSB0aGlzLmJhc2VXaWR0aDtcbiAgICAgICAgdGhpcy55Q29sbGlzaW9uID0gdGhpcy55UG9zIC0gdGhpcy5iYXNlSGVpZ2h0O1xuICAgICAgICB0aGlzLmhvdXNlID0gbmV3IEltYWdlKCk7XG4gICAgfVxuXG4gICAgZHJhd1BvbGx5c0hvdXNlKGR4LCBkeSkge1xuICAgICAgICBjb25zdCBwb2xseXNIb3VzZSA9IHRoaXMuaG91c2U7XG4gICAgICAgIHBvbGx5c0hvdXNlLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvbWFwX2VsZW1lbnRzL3BvbGx5c0hvdXNlLnBuZ1wiO1xuXG4gICAgICAgIGNvbnN0IGJhc2VXaWR0aCA9IDgwO1xuICAgICAgICBjb25zdCBiYXNlSGVpZ2h0ID0gMTIwO1xuICAgICAgICBsZXQgbGVvRHggPSBiYXNlV2lkdGg7XG4gICAgICAgIGxldCBsZW9EeSA9IGJhc2VIZWlnaHQ7XG5cbiAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKHBvbGx5c0hvdXNlLCAsIDAsIGJhc2VXaWR0aCAqIDUsIGJhc2VIZWlnaHQgKiA1KTtcbiAgICB9XG5cbiAgICBkcmF3SGV3ZXJ0c0hvdXNlKGR4LCBkeSkge1xuICAgICAgICBjb25zdCBoZXdlcnRzSG91c2UgPSB0aGlzLmhvdXNlO1xuICAgICAgICBoZXdlcnRzSG91c2Uuc3JjID0gXCJzcmMvYXNzZXRzL2ltYWdlcy9tYXBfZWxlbWVudHMvaGV3ZXJ0c0hvdXNlLnBuZ1wiO1xuXG4gICAgICAgIGNvbnN0IGJhc2VXaWR0aCA9IDIwMDtcbiAgICAgICAgY29uc3QgYmFzZUhlaWdodCA9IDEyMDtcbiAgICAgICAgbGV0IGxlb0R4ID0gdGhpcy54UG9zIC0gYmFzZVdpZHRoO1xuICAgICAgICBsZXQgbGVvRHkgPSB0aGlzLnlQb3MgLSBiYXNlSGVpZ2h0O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxlb0R5KVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGV3ZXJ0c0hvdXNlLCAwLCAwLCBiYXNlV2lkdGgsIGJhc2VIZWlnaHQsIGR4LCBkeSwgYmFzZVdpZHRoICogMywgYmFzZUhlaWdodCAqIDMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG91c2VzOyIsImNsYXNzIFN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3J5OyIsImNsYXNzIFV0aWwge1xuICAgIGNvbnN0cnVjdG9yKGxlbywgZ2FtZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgbGVvLnJpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGxlby5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBsZW8uZG93biA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBsZW8udXAgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIGxlby5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBsZW8ubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBsZW8uZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBsZW8udXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9