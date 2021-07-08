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
    this.house = new _map_ele_houses__WEBPACK_IMPORTED_MODULE_0__["default"](this.xPos, this.yPos, this.magnify, this.ctx); // this.map.onload = () => ctx.drawImage(this.map, 0, 0, width, height)
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
  function Houses(xPos, yPos, magnify, ctx) {
    _classCallCheck(this, Houses);

    this.xPos = xPos;
    this.yPos = yPos;
    this.magnify = magnify;
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
      var baseHeight = 120; // let leoDx = this.xPos - baseWidth;
      // let leoDy = this.yPos - baseHeight;
      // console.log(leoDy)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXBfZWxlL2hvdXNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiZ2FtZSIsIkdhbWUiLCJhbmltYXRlIiwiY29uc29sZSIsImxvZyIsIndvbiIsIndpbmRvdyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uSWQiLCJyZXN0YXJ0IiwiY2xlYXJSZWN0IiwiZHJhdyIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbnZhc0VsV2lkdGgiLCJjYW52YXNFbEhlaWdodCIsIm1hcCIsIk1hcCIsImxlbyIsIkxlbyIsInN0b3J5IiwiU3RvcnkiLCJwb2ludHMiLCJVdGlsIiwibGVvRHgiLCJ4IiwibGVvRHkiLCJ5Iiwic3RvcnlsaW5lIiwiZm91bmRIZXdlcnQiLCJJbWFnZSIsInNyYyIsInNpemUiLCJkaXIiLCJ0cm90dGluZyIsInNwZWVkIiwicmlnaHQiLCJsZWZ0IiwiZG93biIsInVwIiwic3ByaXRlU2l6ZSIsInRyb3QiLCJNYXRoIiwiZmxvb3IiLCJkcmF3SW1hZ2UiLCJtYWduaWZ5IiwieFBvcyIsInlQb3MiLCJob3VzZSIsIkhvdXNlcyIsIm1hcFNpemUiLCJkcmF3SGV3ZXJ0c0hvdXNlIiwieENvbGxpc2lvbiIsImJhc2VXaWR0aCIsInlDb2xsaXNpb24iLCJiYXNlSGVpZ2h0IiwiZHgiLCJkeSIsImhld2VydHNIb3VzZSIsImZvdW5kUG9sbHkiLCJjdXJyZW50UG9zIiwicG9sbHlzSG91c2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBakI7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csVUFBVCxDQUFvQixJ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LENBQUNrQixLQUFKLEdBQVksSUFBWjtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJbEIsV0FBRyxDQUFDa0IsS0FBSixHQUFZLElBQVo7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWxCLFdBQUcsQ0FBQ29CLElBQUosR0FBVyxJQUFYO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lwQixXQUFHLENBQUNvQixJQUFKLEdBQVcsSUFBWDtBQUNBO0FBeEJSO0FBMEJILEdBNUJEO0FBOEJBL0MsVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFBc0UsQ0FBQyxFQUFJO0FBQ3BDQSxLQUFDLENBQUNDLGNBQUY7O0FBQ0EsWUFBUUQsQ0FBQyxDQUFDRSxPQUFWO0FBQ0ksV0FBSyxFQUFMO0FBQ0k5QyxXQUFHLENBQUNtQixJQUFKLEdBQVcsS0FBWDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJbkIsV0FBRyxDQUFDbUIsSUFBSixHQUFXLEtBQVg7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSW5CLFdBQUcsQ0FBQ3FCLEVBQUosR0FBUyxLQUFUO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lyQixXQUFHLENBQUNxQixFQUFKLEdBQVMsS0FBVDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJckIsV0FBRyxDQUFDa0IsS0FBSixHQUFZLEtBQVo7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWxCLFdBQUcsQ0FBQ2tCLEtBQUosR0FBWSxLQUFaO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lsQixXQUFHLENBQUNvQixJQUFKLEdBQVcsS0FBWDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJcEIsV0FBRyxDQUFDb0IsSUFBSixHQUFXLEtBQVg7QUFDQTtBQXhCUjtBQTBCSCxHQTVCRDtBQTZCSCxDOztBQUdVZixtRUFBZixFOzs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgLy8gY29tbWVudCBiYWNrIGluXG4gIC8vIGNvbnN0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnQtcGxheVwiKVxuICAvLyBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEucGxheS1idXR0b25cIik7XG4gIC8vIGNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5yZXN0YXJ0LWJ1dHRvblwiKTtcbiAgLy8gY29tbWVudCBiYWNrIGluXG5cbiAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Y2FudmFzXCIpO1xuICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNhbnZhc0VsLndpZHRoID0gNTAwO1xuICBjYW52YXNFbC5oZWlnaHQgPSA1MDA7XG4gIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXNFbC53aWR0aCwgY2FudmFzRWwuaGVpZ2h0LCBjdHgpO1xuICAvLyBuZXcgR2FtZVZpZXcoZ2FtZSwgY3R4KS5zdGFydCgpO1xuICBcbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnYW5pbWF0ZScpXG4gICAgaWYgKGdhbWUud29uKCkpIHtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh3aW5kb3cuYW5pbWF0aW9uSWQpO1xuICAgICAgZ2FtZS5yZXN0YXJ0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGxpc3QgYW55IG90aGVyIGNvbmRpdGlvbmFscyBhYm92ZVxuICAgICAgICBcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQpO1xuICAgIGdhbWUuZHJhdygpO1xuICAgIGdhbWUucmVuZGVyKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9XG5cbiAgYW5pbWF0ZSgpO1xuXG4gIC8vIGNvbW1lbnQgYmFjayBpblxuICAvLyBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyAgIHBsYXlCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG4gIC8vICAgaW5zdHJ1Y3Rpb25zLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgLy8gICBhbmltYXRlKCk7XG4gIC8vIH0pO1xuXG4gIC8vIHJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vICAgcmVzdGFydC5CdXR0b25zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAvLyB9KTtcbiAgLy8gY29tbWVudCBiYWNrIGluXG59KTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIG5ld0dhbWUoKSB7XG4vLyAgICAgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwgY3R4KTtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWRpdlwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmQtZGl2XCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuLy8gfVxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4vLyAgICAga2V5c1tlLmtleUNvZGVdID0gdHJ1ZTsgXG4vLyB9KTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG4vLyAgICAgZGVsZXRlIGtleXNbZS5rZXlDb2RlXTsgXG4vLyB9KTsiLCJpbXBvcnQgTWFwIGZyb20gJy4vbWFwJztcbmltcG9ydCBMZW8gZnJvbSAnLi9sZW8nO1xuaW1wb3J0IFN0b3J5IGZyb20gJy4vc3RvcnknO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxXaWR0aCwgY2FudmFzRWxIZWlnaHQsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhc0VsV2lkdGggPSBjYW52YXNFbFdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhc0VsSGVpZ2h0ID0gY2FudmFzRWxIZWlnaHQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoY2FudmFzRWxXaWR0aCwgY2FudmFzRWxIZWlnaHQsIHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5sZW8gPSBuZXcgTGVvKGNhbnZhc0VsV2lkdGggLyAyLCBjYW52YXNFbEhlaWdodCAvIDIsIHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5zdG9yeSA9IG5ldyBTdG9yeSh0aGlzLmxlbywgdGhpcy5tYXApO1xuICAgICAgICB0aGlzLnBvaW50cyA9IDA7XG4gICAgICAgIG5ldyBVdGlsICh0aGlzLmxlbywgdGhpcyk7XG4gICAgfTtcbiAgICBcbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLm1hcC5kcmF3KFxuICAgICAgICAgICAgdGhpcy5jdHgsIFxuICAgICAgICAgICAgdGhpcy5jYW52YXNFbFdpZHRoLCBcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWxIZWlnaHRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5sZW8uZHJhdygpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsZW9EeCA9ICh0aGlzLmNhbnZhc0VsV2lkdGggLyAyKSAtIHRoaXMubGVvLnhcbiAgICAgICAgbGV0IGxlb0R5ID0gKHRoaXMuY2FudmFzRWxIZWlnaHQgLyAyKSAtIHRoaXMubGVvLnlcbiAgICAgICAgLy8gY29uc29sZS5sb2cobGVvRHgpO1xuICAgICAgICB0aGlzLm1hcC5yZW5kZXIobGVvRHgsIGxlb0R5KTtcbiAgICAgICAgdGhpcy5sZW8ucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgd29uKCkge1xuICAgICAgICAvLyB3aGVuIGFsbCB0aGUgc3RvcnkgcG9pbnRzIGFyZSB0cnVlIChjb21wbGV0ZWQpXG4gICAgICAgIGlmICh0aGlzLnN0b3J5LnN0b3J5bGluZS5mb3VuZEhld2VydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICB0aGlzLnBvaW50cyA9IDA7XG4gICAgICB0aGlzLnN0b3J5ID0gbmV3IFN0b3J5KHRoaXMubGVvLCB0aGlzLm1hcCk7XG4gICAgfVxuXG4gICAgLy8gbG9zdCgpIHtcbiAgICAgICAgLy8gc29mdCBsb3NlIC0+IGFuc3dlcmluZyBhIHF1ZXN0aW9uIGluY29ycmVjdGx5XG4gICAgICAgIC8vIFxuICAgIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImNsYXNzIExlbyB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgY3R4KSB7XG4gICAgICAgIHRoaXMubGVvID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubGVvLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvc3ByaXRlL0xlb1dhbGtDeWNsZS5wbmdcIjtcbiAgICAgICAgLy8gc3RhdGUgb2YgbGVvXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMuc2l6ZSA9IDEwMDtcbiAgICAgICAgdGhpcy5kaXIgPSAwOyAvLyB3aGljaCBrZXkgaXMgaGVsZCBkb3duXG4gICAgICAgIHRoaXMudHJvdHRpbmcgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMC4xO1xuXG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZHJhdygpIHsgLy8gcmVuZGVyKGN0eCwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aGVyZSB0aGUgaGVjayBpcyBsZW9cIilcbiAgICAgICAgbGV0IHNwcml0ZVNpemUgPSB0aGlzLnNpemUgLyA0O1xuICAgICAgICBsZXQgdHJvdCA9IE1hdGguZmxvb3IodGhpcy50cm90dGluZyAlIDQpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5sZW8sIHRyb3QgKiBzcHJpdGVTaXplLCB0aGlzLmRpciAqIHNwcml0ZVNpemUsIHNwcml0ZVNpemUsIHNwcml0ZVNpemUsIDIwMCwgMjAwLCB0aGlzLnNpemUsIHRoaXMuc2l6ZSk7ICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMueCArIFwiLS0tLS0tLVwiICsgdGhpcy55KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gY29uc3QgZGlyID0gZGlyWzBdO1xuICAgICAgICAvLyBpZiAoZGlyKSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5yaWdodCkgeyB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7IH1cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmxlZnQpIHsgdGhpcy50cm90dGluZyAtPSB0aGlzLnNwZWVkOyB9XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5kb3duKSB7IHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDsgfVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMudXApIHsgdGhpcy50cm90dGluZyAtPSB0aGlzLnNwZWVkOyB9ICAgICAgXG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc3QgZGlyID0ge1xuICAgICAgICAgICAgXCJyaWdodFwiOiAwLFxuICAgICAgICAgICAgXCJsZWZ0XCI6IDEsXG4gICAgICAgICAgICBcImRvd25cIjogMixcbiAgICAgICAgICAgIFwidXBcIjogM1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5yaWdodCAmJiB0aGlzLnggPCAxOTUwKSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcltcInJpZ2h0XCJdO1xuICAgICAgICAgICAgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy54ICs9IDM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJpZ2h0XCIrdGhpcy54KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVmdCAmJiB0aGlzLnggPiAtNDYwKSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcltcImxlZnRcIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnggLT0gMztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGVmdFwiK3RoaXMueClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRvd24gJiYgdGhpcy55IDwgMTkyNSkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJkb3duXCJdO1xuICAgICAgICAgICAgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy55ICs9IDM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRvd25cIit0aGlzLnkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy51cCAmJiB0aGlzLnkgPiAtNTAwKSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcltcInVwXCJdO1xuICAgICAgICAgICAgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy55IC09IDM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVwXCIrdGhpcy55KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZW87XG4iLCJpbXBvcnQgSG91c2VzIGZyb20gJy4vbWFwX2VsZS9ob3VzZXMnO1xuaW1wb3J0IFNocnVicyBmcm9tICcuL21hcF9lbGUvc2hydWJzJztcblxuY2xhc3MgTWFwIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjdHgpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMubWFnbmlmeSA9IDU7XG4gICAgICAgIHRoaXMueFBvcyA9IDA7XG4gICAgICAgIHRoaXMueVBvcyA9IDA7XG4gICAgICAgIHRoaXMubWFwID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubWFwLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvbWFwL2JnTWFwLnBuZ1wiO1xuICAgICAgICB0aGlzLmhvdXNlID0gbmV3IEhvdXNlcyh0aGlzLnhQb3MsIHRoaXMueVBvcywgdGhpcy5tYWduaWZ5LCB0aGlzLmN0eCk7XG4gICAgICAgIC8vIHRoaXMubWFwLm9ubG9hZCA9ICgpID0+IGN0eC5kcmF3SW1hZ2UodGhpcy5tYXAsIDAsIDAsIHdpZHRoLCBoZWlnaHQpXG4gICAgfVxuICAgIFxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGxldCBtYXBTaXplID0gdGhpcy53aWR0aCAqIHRoaXMubWFnbmlmeTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMubWFwLCBcbiAgICAgICAgICAgIDAsIDAsIFxuICAgICAgICAgICAgdGhpcy5tYXAud2lkdGgsIFxuICAgICAgICAgICAgdGhpcy5tYXAuaGVpZ2h0LCBcbiAgICAgICAgICAgIC0odGhpcy5tYXAud2lkdGgpICsgdGhpcy54UG9zLCBcbiAgICAgICAgICAgIC0odGhpcy5tYXAuaGVpZ2h0KSArIHRoaXMueVBvcywgXG4gICAgICAgICAgICBtYXBTaXplLCBtYXBTaXplXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy54UG9zICsgXCJhbmRcIiArIHRoaXMueVBvcylcbiAgICAgICAgaWYgKHRoaXMueFBvcyA8PSA1MjUgJiYgdGhpcy54UG9zID49IC01MDAgJiYgdGhpcy55UG9zIDw9IDc1MCAmJiB0aGlzLnlQb3MgPj0gLTM1MCkge1xuICAgICAgICAgICAgdGhpcy5ob3VzZS5kcmF3SGV3ZXJ0c0hvdXNlKHRoaXMueFBvcywgdGhpcy55UG9zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcihsZW9EeCwgbGVvRHkpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMueFBvcyA8IDEyNTAgJiYgdGhpcy55UG9zIDwgMTI1MCkge1xuICAgICAgICAgICAgdGhpcy54UG9zID0gbGVvRHg7XG4gICAgICAgICAgICB0aGlzLnlQb3MgPSBsZW9EeTtcblxuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iLCJjbGFzcyBIb3VzZXMge1xuICAgIGNvbnN0cnVjdG9yKHhQb3MsIHlQb3MsIG1hZ25pZnksIGN0eCkge1xuICAgICAgICB0aGlzLnhQb3MgPSB4UG9zO1xuICAgICAgICB0aGlzLnlQb3MgPSB5UG9zO1xuICAgICAgICB0aGlzLm1hZ25pZnkgPSBtYWduaWZ5O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54Q29sbGlzaW9uID0gdGhpcy54UG9zIC0gdGhpcy5iYXNlV2lkdGg7XG4gICAgICAgIHRoaXMueUNvbGxpc2lvbiA9IHRoaXMueVBvcyAtIHRoaXMuYmFzZUhlaWdodDtcbiAgICAgICAgdGhpcy5ob3VzZSA9IG5ldyBJbWFnZSgpO1xuICAgIH1cblxuICAgIC8vIGRyYXdQb2xseXNIb3VzZShkeCwgZHkpIHtcbiAgICAvLyAgICAgY29uc3QgcG9sbHlzSG91c2UgPSB0aGlzLmhvdXNlO1xuICAgIC8vICAgICBwb2xseXNIb3VzZS5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL21hcF9lbGVtZW50cy9wb2xseXNIb3VzZS5wbmdcIjtcblxuICAgIC8vICAgICBjb25zdCBiYXNlV2lkdGggPSA4MDtcbiAgICAvLyAgICAgY29uc3QgYmFzZUhlaWdodCA9IDEyMDtcbiAgICAvLyAgICAgbGV0IGxlb0R4ID0gYmFzZVdpZHRoO1xuICAgIC8vICAgICBsZXQgbGVvRHkgPSBiYXNlSGVpZ2h0O1xuXG4gICAgLy8gICAgIHRoaXMuY3R4LmRyYXdJbWFnZShwb2xseXNIb3VzZSwgMCwgMCk7XG4gICAgLy8gfVxuXG4gICAgZHJhd0hld2VydHNIb3VzZShkeCwgZHkpIHtcbiAgICAgICAgY29uc3QgaGV3ZXJ0c0hvdXNlID0gdGhpcy5ob3VzZTtcbiAgICAgICAgaGV3ZXJ0c0hvdXNlLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvbWFwX2VsZW1lbnRzL2hld2VydHNIb3VzZS5wbmdcIjtcblxuICAgICAgICBjb25zdCBiYXNlV2lkdGggPSAyMDA7XG4gICAgICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAxMjA7XG4gICAgICAgIC8vIGxldCBsZW9EeCA9IHRoaXMueFBvcyAtIGJhc2VXaWR0aDtcbiAgICAgICAgLy8gbGV0IGxlb0R5ID0gdGhpcy55UG9zIC0gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsZW9EeSlcblxuICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoaGV3ZXJ0c0hvdXNlLCAwLCAwLCBiYXNlV2lkdGgsIGJhc2VIZWlnaHQsIGR4LCBkeSwgYmFzZVdpZHRoICogMywgYmFzZUhlaWdodCAqIDMpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGV3ZXJ0c0hvdXNlLCAtNzAgKyBkeCwgLTkwICsgZHksIGJhc2VXaWR0aCAqIDMsIGJhc2VIZWlnaHQgKiAzKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG91c2VzOyIsImNsYXNzIFN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihsZW8sIG1hcCkge1xuICAgICAgICB0aGlzLmxlbyA9IGxlbztcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuc3RvcnlsaW5lID0ge1xuICAgICAgICAgICAgLy8gYmFzZWQgb24gdGhlIHBvaW50IGluIHRoZSBzdG9yeWxpbmUsIHRoZSBtYXAgd2lsbCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIG1hcCBjaGFuZ2VzIGluY2x1ZGUgd2hhdCBjaGFyYWN0ZXJzIHNheSBhbmQgd2hlcmUgdGhleSBhcmUgbG9jYXRlZFxuICAgICAgICAgICAgZm91bmRQb2xseTogZmFsc2UsIFxuICAgICAgICAgICAgZm91bmRIZXdlcnQ6IGZhbHNlIFxuICAgICAgICB9O1xuICAgICAgICAvLyB0aGlzIGlzIGEgc3RvcnkgbGluZSBvYmplY3RcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zID0ge1xuICAgICAgICAgICAgbWFwOiB0cnVlLFxuICAgICAgICAgICAgcG9sbHlzSG91c2U6IGZhbHNlLFxuICAgICAgICAgICAgaGV3ZXJ0c0hvdXNlOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0b3J5bGluZXMgKCkge1xuICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Rvcnk7IiwiY2xhc3MgVXRpbCB7XG4gICAgY29uc3RydWN0b3IobGVvLCBnYW1lKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNjU6XG4gICAgICAgICAgICAgICAgICAgIGxlby5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBsZW8udXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgODc6XG4gICAgICAgICAgICAgICAgICAgIGxlby51cCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnJpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNjg6XG4gICAgICAgICAgICAgICAgICAgIGxlby5yaWdodCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBsZW8uZG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA4MzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmRvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBsZW8ubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY1OlxuICAgICAgICAgICAgICAgICAgICBsZW8ubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBsZW8udXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA4NzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIGxlby5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY4OlxuICAgICAgICAgICAgICAgICAgICBsZW8ucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA4MzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9