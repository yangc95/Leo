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
  // comment back in
  // const instructions = document.querySelector("#start-play")
  // const playButton = document.querySelector("a.play-button");
  // const restartButton = document.querySelector("a.restart-button");
  // comment back in
  var canvasEl = document.getElementById("mycanvas");
  var ctx = canvasEl.getContext("2d");
  canvasEl.width = 500;
  canvasEl.height = 500;
  ctx.imageSmoothingEnabled = false;
  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__["default"](canvasEl.width, canvasEl.height, ctx); // new GameView(game, ctx).start();

  function animate() {
    console.log('animate');

    if (game.won()) {
      window.cancelAnimationFrame(window.animationId);
      game.restart();
      return;
    } // list any other conditionals above


    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    game.draw();
    game.render();
    requestAnimationFrame(animate);
  }

  animate(); // comment back in
  // playButton.addEventListener('click', () => {
  //   playButton.style.visibility = 'hidden'
  //   instructions.style.visibility = 'hidden';
  //   animate();
  // });
  // restartButton.addEventListener('click', () => {
  //   restart.Buttonstyle.visibility = 'visible';
  // });
  // comment back in
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
    this.story = new _story__WEBPACK_IMPORTED_MODULE_2__["default"](this.leo, this.map);
    this.points = 0;
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
    value: function won() {
      // when all the story points are true (completed)
      if (this.story.storyline.foundHewert) {
        return true;
      }

      return false;
    }
  }, {
    key: "restart",
    value: function restart() {
      this.points = 0;
      this.story = new _story__WEBPACK_IMPORTED_MODULE_2__["default"](this.leo, this.map);
    } // lost() {
    // soft lose -> answering a question incorrectly
    // 
    // }

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
    this.house = new _map_ele_houses__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx); // this.map.onload = () => ctx.drawImage(this.map, 0, 0, width, height)
  }

  _createClass(Map, [{
    key: "draw",
    value: function draw(ctx) {
      var mapSize = this.width * this.magnify;
      ctx.drawImage(this.map, 0, 0, this.map.width, this.map.height, -this.map.width + this.xPos, -this.map.height + this.yPos, mapSize, mapSize); // console.log(this.xPos + "and" + this.yPos)

      if (this.xPos <= 525 && this.xPos >= -500 && this.yPos <= 750 && this.yPos >= -350) {
        this.house.drawHewertsHouse(this.xPos, this.yPos);
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
  function Houses(ctx) {
    _classCallCheck(this, Houses);

    this.ctx = ctx;
    this.xCollision = this.xPos - this.baseWidth;
    this.yCollision = this.yPos - this.baseHeight;
    this.house = new Image();
  } // drawPollysHouse(dx, dy) {
  //     const pollysHouse = this.house;
  //     pollysHouse.src = "src/assets/images/map_elements/pollysHouse.png";
  //     const baseWidth = 80;
  //     const baseHeight = 120;
  //     let leoDx = baseWidth;
  //     let leoDy = baseHeight;
  //     this.ctx.drawImage(pollysHouse, 0, 0);
  // }


  _createClass(Houses, [{
    key: "drawHewertsHouse",
    value: function drawHewertsHouse(dx, dy) {
      var hewertsHouse = this.house;
      hewertsHouse.src = "src/assets/images/map_elements/hewertsHouse.png";
      var baseWidth = 200;
      var baseHeight = 120; // console.log(leoDy)
      // this.ctx.drawImage(hewertsHouse, 0, 0, baseWidth, baseHeight, dx, dy, baseWidth * 3, baseHeight * 3);

      this.ctx.drawImage(hewertsHouse, -70 + dx, -90 + dy, baseWidth * 3, baseHeight * 3);
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Story = /*#__PURE__*/function () {
  function Story(leo, map) {
    _classCallCheck(this, Story);

    this.leo = leo;
    this.map = map;
    this.storyline = {
      // based on the point in the storyline, the map will change
      // map changes include what characters say and where they are located
      foundPolly: false,
      foundHewert: false
    }; // this is a story line object

    this.currentPos = {
      map: true,
      pollysHouse: false,
      hewertsHouse: false
    };
  }

  _createClass(Story, [{
    key: "storylines",
    value: function storylines() {}
  }]);

  return Story;
}();

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
      case 37:
        leo.left = true;
        break;

      case 65:
        leo.left = true;
        break;

      case 38:
        leo.up = true;
        break;

      case 87:
        leo.up = true;
        break;

      case 39:
        leo.right = true;
        break;

      case 68:
        leo.right = true;
        break;

      case 40:
        leo.down = true;
        break;

      case 83:
        leo.down = true;
        break;
    }
  });
  document.addEventListener('keyup', function (e) {
    e.preventDefault();

    switch (e.keyCode) {
      case 37:
        leo.left = false;
        break;

      case 65:
        leo.left = false;
        break;

      case 38:
        leo.up = false;
        break;

      case 87:
        leo.up = false;
        break;

      case 39:
        leo.right = false;
        break;

      case 68:
        leo.right = false;
        break;

      case 40:
        leo.down = false;
        break;

      case 83:
        leo.down = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXBfZWxlL2hvdXNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiZ2FtZSIsIkdhbWUiLCJhbmltYXRlIiwiY29uc29sZSIsImxvZyIsIndvbiIsIndpbmRvdyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uSWQiLCJyZXN0YXJ0IiwiY2xlYXJSZWN0IiwiZHJhdyIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbnZhc0VsV2lkdGgiLCJjYW52YXNFbEhlaWdodCIsIm1hcCIsIk1hcCIsImxlbyIsIkxlbyIsInN0b3J5IiwiU3RvcnkiLCJwb2ludHMiLCJVdGlsIiwibGVvRHgiLCJ4IiwibGVvRHkiLCJ5Iiwic3RvcnlsaW5lIiwiZm91bmRIZXdlcnQiLCJJbWFnZSIsInNyYyIsInNpemUiLCJkaXIiLCJ0cm90dGluZyIsInNwZWVkIiwicmlnaHQiLCJsZWZ0IiwiZG93biIsInVwIiwic3ByaXRlU2l6ZSIsInRyb3QiLCJNYXRoIiwiZmxvb3IiLCJkcmF3SW1hZ2UiLCJtYWduaWZ5IiwieFBvcyIsInlQb3MiLCJob3VzZSIsIkhvdXNlcyIsIm1hcFNpemUiLCJkcmF3SGV3ZXJ0c0hvdXNlIiwieENvbGxpc2lvbiIsImJhc2VXaWR0aCIsInlDb2xsaXNpb24iLCJiYXNlSGVpZ2h0IiwiZHgiLCJkeSIsImhld2VydHNIb3VzZSIsImZvdW5kUG9sbHkiLCJjdXJyZW50UG9zIiwicG9sbHlzSG91c2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBakI7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csVUFBVCxDQUFvQixJ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O0FBQ0E7QUF4QlI7QUEwQkgsR0E1QkQ7QUE4QkEvQyxVQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUFzRSxDQUFDLEVBQUk7QUFDcENBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxZQUFRRCxDQUFDLENBQUNFLE9BQVY7QUFDSSxXQUFLLEVBQUw7QUFDSTlDLFdBQUcsQ0FBQ21CLElBQUosR0FBVyxLQUFYO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0luQixXQUFHLENBQUNtQixJQUFKLEdBQVcsS0FBWDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJbkIsV0FBRyxDQUFDcUIsRUFBSixHQUFTLEtBQVQ7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSXJCLFdBQUcsQ0FBQ3FCLEVBQUosR0FBUyxLQUFUO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lyQixXQUFHLENBQUNrQixLQUFKLEdBQVksS0FBWjtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJbEIsV0FBRyxDQUFDa0IsS0FBSixHQUFZLEtBQVo7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWxCLFdBQUcsQ0FBQ29CLElBQUosR0FBVyxLQUFYO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lwQixXQUFHLENBQUNvQixJQUFKLEdBQVcsS0FBWDtBQUNBO0FBeEJSO0FBMEJILEdBNUJEO0FBNkJILEM7O0FBR1VmLG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAvLyBjb21tZW50IGJhY2sgaW5cbiAgLy8gY29uc3QgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydC1wbGF5XCIpXG4gIC8vIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5wbGF5LWJ1dHRvblwiKTtcbiAgLy8gY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnJlc3RhcnQtYnV0dG9uXCIpO1xuICAvLyBjb21tZW50IGJhY2sgaW5cblxuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXljYW52YXNcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY2FudmFzRWwud2lkdGggPSA1MDA7XG4gIGNhbnZhc0VsLmhlaWdodCA9IDUwMDtcbiAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICBcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQsIGN0eCk7XG4gIC8vIG5ldyBHYW1lVmlldyhnYW1lLCBjdHgpLnN0YXJ0KCk7XG4gIFxuICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIGNvbnNvbGUubG9nKCdhbmltYXRlJylcbiAgICBpZiAoZ2FtZS53b24oKSkge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHdpbmRvdy5hbmltYXRpb25JZCk7XG4gICAgICBnYW1lLnJlc3RhcnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbGlzdCBhbnkgb3RoZXIgY29uZGl0aW9uYWxzIGFib3ZlXG4gICAgICAgIFxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodCk7XG4gICAgZ2FtZS5kcmF3KCk7XG4gICAgZ2FtZS5yZW5kZXIoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH1cblxuICBhbmltYXRlKCk7XG5cbiAgLy8gY29tbWVudCBiYWNrIGluXG4gIC8vIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vICAgcGxheUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgLy8gICBpbnN0cnVjdGlvbnMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAvLyAgIGFuaW1hdGUoKTtcbiAgLy8gfSk7XG5cbiAgLy8gcmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gICByZXN0YXJ0LkJ1dHRvbnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIC8vIH0pO1xuICAvLyBjb21tZW50IGJhY2sgaW5cbn0pO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gbmV3R2FtZSgpIHtcbi8vICAgICBnYW1lID0gbmV3IEdhbWUoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCBjdHgpO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtZGl2XCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZC1kaXZcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4vLyB9XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbi8vICAgICBrZXlzW2Uua2V5Q29kZV0gPSB0cnVlOyBcbi8vIH0pO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbi8vICAgICBkZWxldGUga2V5c1tlLmtleUNvZGVdOyBcbi8vIH0pOyIsImltcG9ydCBNYXAgZnJvbSAnLi9tYXAnO1xuaW1wb3J0IExlbyBmcm9tICcuL2xlbyc7XG5pbXBvcnQgU3RvcnkgZnJvbSAnLi9zdG9yeSc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbFdpZHRoLCBjYW52YXNFbEhlaWdodCwgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzRWxXaWR0aCA9IGNhbnZhc0VsV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzRWxIZWlnaHQgPSBjYW52YXNFbEhlaWdodDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcChjYW52YXNFbFdpZHRoLCBjYW52YXNFbEhlaWdodCwgdGhpcy5jdHgpO1xuICAgICAgICB0aGlzLmxlbyA9IG5ldyBMZW8oY2FudmFzRWxXaWR0aCAvIDIsIGNhbnZhc0VsSGVpZ2h0IC8gMiwgdGhpcy5jdHgpO1xuICAgICAgICB0aGlzLnN0b3J5ID0gbmV3IFN0b3J5KHRoaXMubGVvLCB0aGlzLm1hcCk7XG4gICAgICAgIHRoaXMucG9pbnRzID0gMDtcbiAgICAgICAgbmV3IFV0aWwgKHRoaXMubGVvLCB0aGlzKTtcbiAgICB9O1xuICAgIFxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMubWFwLmRyYXcoXG4gICAgICAgICAgICB0aGlzLmN0eCwgXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsV2lkdGgsIFxuICAgICAgICAgICAgdGhpcy5jYW52YXNFbEhlaWdodFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmxlby5kcmF3KCk7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxlb0R4ID0gKHRoaXMuY2FudmFzRWxXaWR0aCAvIDIpIC0gdGhpcy5sZW8ueFxuICAgICAgICBsZXQgbGVvRHkgPSAodGhpcy5jYW52YXNFbEhlaWdodCAvIDIpIC0gdGhpcy5sZW8ueVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsZW9EeCk7XG4gICAgICAgIHRoaXMubWFwLnJlbmRlcihsZW9EeCwgbGVvRHkpO1xuICAgICAgICB0aGlzLmxlby5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB3b24oKSB7XG4gICAgICAgIC8vIHdoZW4gYWxsIHRoZSBzdG9yeSBwb2ludHMgYXJlIHRydWUgKGNvbXBsZXRlZClcbiAgICAgICAgaWYgKHRoaXMuc3Rvcnkuc3RvcnlsaW5lLmZvdW5kSGV3ZXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgIHRoaXMucG9pbnRzID0gMDtcbiAgICAgIHRoaXMuc3RvcnkgPSBuZXcgU3RvcnkodGhpcy5sZW8sIHRoaXMubWFwKTtcbiAgICB9XG5cbiAgICAvLyBsb3N0KCkge1xuICAgICAgICAvLyBzb2Z0IGxvc2UgLT4gYW5zd2VyaW5nIGEgcXVlc3Rpb24gaW5jb3JyZWN0bHlcbiAgICAgICAgLy8gXG4gICAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiY2xhc3MgTGVvIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBjdHgpIHtcbiAgICAgICAgdGhpcy5sZW8gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5sZW8uc3JjID0gXCJzcmMvYXNzZXRzL2ltYWdlcy9zcHJpdGUvTGVvV2Fsa0N5Y2xlLnBuZ1wiO1xuICAgICAgICAvLyBzdGF0ZSBvZiBsZW9cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy5zaXplID0gMTAwO1xuICAgICAgICB0aGlzLmRpciA9IDA7IC8vIHdoaWNoIGtleSBpcyBoZWxkIGRvd25cbiAgICAgICAgdGhpcy50cm90dGluZyA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjE7XG5cbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXAgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkcmF3KCkgeyAvLyByZW5kZXIoY3R4LCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndoZXJlIHRoZSBoZWNrIGlzIGxlb1wiKVxuICAgICAgICBsZXQgc3ByaXRlU2l6ZSA9IHRoaXMuc2l6ZSAvIDQ7XG4gICAgICAgIGxldCB0cm90ID0gTWF0aC5mbG9vcih0aGlzLnRyb3R0aW5nICUgNCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmxlbywgdHJvdCAqIHNwcml0ZVNpemUsIHRoaXMuZGlyICogc3ByaXRlU2l6ZSwgc3ByaXRlU2l6ZSwgc3ByaXRlU2l6ZSwgMjAwLCAyMDAsIHRoaXMuc2l6ZSwgdGhpcy5zaXplKTsgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy54ICsgXCItLS0tLS0tXCIgKyB0aGlzLnkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBjb25zdCBkaXIgPSBkaXJbMF07XG4gICAgICAgIC8vIGlmIChkaXIpIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnJpZ2h0KSB7IHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDsgfVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMubGVmdCkgeyB0aGlzLnRyb3R0aW5nIC09IHRoaXMuc3BlZWQ7IH1cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmRvd24pIHsgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkOyB9XG4gICAgICAgIC8vICAgICBpZiAodGhpcy51cCkgeyB0aGlzLnRyb3R0aW5nIC09IHRoaXMuc3BlZWQ7IH0gICAgICBcbiAgICAgICAgLy8gfVxuICAgICAgICBjb25zdCBkaXIgPSB7XG4gICAgICAgICAgICBcInJpZ2h0XCI6IDAsXG4gICAgICAgICAgICBcImxlZnRcIjogMSxcbiAgICAgICAgICAgIFwiZG93blwiOiAyLFxuICAgICAgICAgICAgXCJ1cFwiOiAzXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0ICYmIHRoaXMueCA8IDE5NTApIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1wicmlnaHRcIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnggKz0gMztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmlnaHRcIit0aGlzLngpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0ICYmIHRoaXMueCA+IC00NjApIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1wibGVmdFwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueCAtPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJsZWZ0XCIrdGhpcy54KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZG93biAmJiB0aGlzLnkgPCAxOTI1KSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcltcImRvd25cIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnkgKz0gMztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZG93blwiK3RoaXMueSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnVwICYmIHRoaXMueSA+IC01MDApIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1widXBcIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnkgLT0gMztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBcIit0aGlzLnkpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlbztcbiIsImltcG9ydCBIb3VzZXMgZnJvbSAnLi9tYXBfZWxlL2hvdXNlcyc7XG5pbXBvcnQgU2hydWJzIGZyb20gJy4vbWFwX2VsZS9zaHJ1YnMnO1xuXG5jbGFzcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGN0eCkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5tYWduaWZ5ID0gNTtcbiAgICAgICAgdGhpcy54UG9zID0gMDtcbiAgICAgICAgdGhpcy55UG9zID0gMDtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5tYXAuc3JjID0gXCJzcmMvYXNzZXRzL2ltYWdlcy9tYXAvYmdNYXAucG5nXCI7XG4gICAgICAgIHRoaXMuaG91c2UgPSBuZXcgSG91c2VzKHRoaXMuY3R4KTtcbiAgICAgICAgLy8gdGhpcy5tYXAub25sb2FkID0gKCkgPT4gY3R4LmRyYXdJbWFnZSh0aGlzLm1hcCwgMCwgMCwgd2lkdGgsIGhlaWdodClcbiAgICB9XG4gICAgXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgbGV0IG1hcFNpemUgPSB0aGlzLndpZHRoICogdGhpcy5tYWduaWZ5O1xuICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5tYXAsIFxuICAgICAgICAgICAgMCwgMCwgXG4gICAgICAgICAgICB0aGlzLm1hcC53aWR0aCwgXG4gICAgICAgICAgICB0aGlzLm1hcC5oZWlnaHQsIFxuICAgICAgICAgICAgLSh0aGlzLm1hcC53aWR0aCkgKyB0aGlzLnhQb3MsIFxuICAgICAgICAgICAgLSh0aGlzLm1hcC5oZWlnaHQpICsgdGhpcy55UG9zLCBcbiAgICAgICAgICAgIG1hcFNpemUsIG1hcFNpemVcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnhQb3MgKyBcImFuZFwiICsgdGhpcy55UG9zKVxuICAgICAgICBpZiAodGhpcy54UG9zIDw9IDUyNSAmJiB0aGlzLnhQb3MgPj0gLTUwMCAmJiB0aGlzLnlQb3MgPD0gNzUwICYmIHRoaXMueVBvcyA+PSAtMzUwKSB7XG4gICAgICAgICAgICB0aGlzLmhvdXNlLmRyYXdIZXdlcnRzSG91c2UodGhpcy54UG9zLCB0aGlzLnlQb3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKGxlb0R4LCBsZW9EeSkge1xuICAgICAgICAvLyBpZiAodGhpcy54UG9zIDwgMTI1MCAmJiB0aGlzLnlQb3MgPCAxMjUwKSB7XG4gICAgICAgICAgICB0aGlzLnhQb3MgPSBsZW9EeDtcbiAgICAgICAgICAgIHRoaXMueVBvcyA9IGxlb0R5O1xuXG4gICAgICAgIC8vIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDtcbiIsImNsYXNzIEhvdXNlcyB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnhDb2xsaXNpb24gPSB0aGlzLnhQb3MgLSB0aGlzLmJhc2VXaWR0aDtcbiAgICAgICAgdGhpcy55Q29sbGlzaW9uID0gdGhpcy55UG9zIC0gdGhpcy5iYXNlSGVpZ2h0O1xuICAgICAgICB0aGlzLmhvdXNlID0gbmV3IEltYWdlKCk7XG4gICAgfVxuXG4gICAgLy8gZHJhd1BvbGx5c0hvdXNlKGR4LCBkeSkge1xuICAgIC8vICAgICBjb25zdCBwb2xseXNIb3VzZSA9IHRoaXMuaG91c2U7XG4gICAgLy8gICAgIHBvbGx5c0hvdXNlLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvbWFwX2VsZW1lbnRzL3BvbGx5c0hvdXNlLnBuZ1wiO1xuXG4gICAgLy8gICAgIGNvbnN0IGJhc2VXaWR0aCA9IDgwO1xuICAgIC8vICAgICBjb25zdCBiYXNlSGVpZ2h0ID0gMTIwO1xuICAgIC8vICAgICBsZXQgbGVvRHggPSBiYXNlV2lkdGg7XG4gICAgLy8gICAgIGxldCBsZW9EeSA9IGJhc2VIZWlnaHQ7XG5cbiAgICAvLyAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHBvbGx5c0hvdXNlLCAwLCAwKTtcbiAgICAvLyB9XG5cbiAgICBkcmF3SGV3ZXJ0c0hvdXNlKGR4LCBkeSkge1xuICAgICAgICBjb25zdCBoZXdlcnRzSG91c2UgPSB0aGlzLmhvdXNlO1xuICAgICAgICBoZXdlcnRzSG91c2Uuc3JjID0gXCJzcmMvYXNzZXRzL2ltYWdlcy9tYXBfZWxlbWVudHMvaGV3ZXJ0c0hvdXNlLnBuZ1wiO1xuXG4gICAgICAgIGNvbnN0IGJhc2VXaWR0aCA9IDIwMDtcbiAgICAgICAgY29uc3QgYmFzZUhlaWdodCA9IDEyMDtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsZW9EeSlcblxuICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoaGV3ZXJ0c0hvdXNlLCAwLCAwLCBiYXNlV2lkdGgsIGJhc2VIZWlnaHQsIGR4LCBkeSwgYmFzZVdpZHRoICogMywgYmFzZUhlaWdodCAqIDMpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGV3ZXJ0c0hvdXNlLCAtNzAgKyBkeCwgLTkwICsgZHksIGJhc2VXaWR0aCAqIDMsIGJhc2VIZWlnaHQgKiAzKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG91c2VzOyIsImNsYXNzIFN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihsZW8sIG1hcCkge1xuICAgICAgICB0aGlzLmxlbyA9IGxlbztcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuc3RvcnlsaW5lID0ge1xuICAgICAgICAgICAgLy8gYmFzZWQgb24gdGhlIHBvaW50IGluIHRoZSBzdG9yeWxpbmUsIHRoZSBtYXAgd2lsbCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIG1hcCBjaGFuZ2VzIGluY2x1ZGUgd2hhdCBjaGFyYWN0ZXJzIHNheSBhbmQgd2hlcmUgdGhleSBhcmUgbG9jYXRlZFxuICAgICAgICAgICAgZm91bmRQb2xseTogZmFsc2UsIFxuICAgICAgICAgICAgZm91bmRIZXdlcnQ6IGZhbHNlIFxuICAgICAgICB9O1xuICAgICAgICAvLyB0aGlzIGlzIGEgc3RvcnkgbGluZSBvYmplY3RcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zID0ge1xuICAgICAgICAgICAgbWFwOiB0cnVlLFxuICAgICAgICAgICAgcG9sbHlzSG91c2U6IGZhbHNlLFxuICAgICAgICAgICAgaGV3ZXJ0c0hvdXNlOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0b3J5bGluZXMgKCkge1xuICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Rvcnk7IiwiY2xhc3MgVXRpbCB7XG4gICAgY29uc3RydWN0b3IobGVvLCBnYW1lKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNjU6XG4gICAgICAgICAgICAgICAgICAgIGxlby5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBsZW8udXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgODc6XG4gICAgICAgICAgICAgICAgICAgIGxlby51cCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnJpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNjg6XG4gICAgICAgICAgICAgICAgICAgIGxlby5yaWdodCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBsZW8uZG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA4MzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmRvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBsZW8ubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY1OlxuICAgICAgICAgICAgICAgICAgICBsZW8ubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBsZW8udXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA4NzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIGxlby5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY4OlxuICAgICAgICAgICAgICAgICAgICBsZW8ucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA4MzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9