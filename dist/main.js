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
  var instructions = document.querySelector("#start-play");
  var playButton = document.querySelector("a.play-button");
  var restartButton = document.querySelector("a.restart-button");
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

  playButton.addEventListener('click', function () {
    playButton.style.visibility = 'hidden';
    instructions.style.visibility = 'hidden';
    animate();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXBfZWxlL2hvdXNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnN0cnVjdGlvbnMiLCJxdWVyeVNlbGVjdG9yIiwicGxheUJ1dHRvbiIsInJlc3RhcnRCdXR0b24iLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiZ2FtZSIsIkdhbWUiLCJhbmltYXRlIiwiY29uc29sZSIsImxvZyIsIndvbiIsIndpbmRvdyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uSWQiLCJyZXN0YXJ0IiwiY2xlYXJSZWN0IiwiZHJhdyIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsIkJ1dHRvbnN0eWxlIiwiY2FudmFzRWxXaWR0aCIsImNhbnZhc0VsSGVpZ2h0IiwibWFwIiwiTWFwIiwibGVvIiwiTGVvIiwic3RvcnkiLCJTdG9yeSIsInBvaW50cyIsIlV0aWwiLCJsZW9EeCIsIngiLCJsZW9EeSIsInkiLCJzdG9yeWxpbmUiLCJmb3VuZEhld2VydCIsIkltYWdlIiwic3JjIiwic2l6ZSIsImRpciIsInRyb3R0aW5nIiwic3BlZWQiLCJyaWdodCIsImxlZnQiLCJkb3duIiwidXAiLCJzcHJpdGVTaXplIiwidHJvdCIsIk1hdGgiLCJmbG9vciIsImRyYXdJbWFnZSIsIm1hZ25pZnkiLCJ4UG9zIiwieVBvcyIsImhvdXNlIiwiSG91c2VzIiwibWFwU2l6ZSIsInhDb2xsaXNpb24iLCJiYXNlV2lkdGgiLCJ5Q29sbGlzaW9uIiwiYmFzZUhlaWdodCIsImR4IiwiZHkiLCJwb2xseXNIb3VzZSIsImhld2VydHNIb3VzZSIsImZvdW5kUG9sbHkiLCJjdXJyZW50UG9zIiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBTUMsWUFBWSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsYUFBdkIs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Q0E7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydC1wbGF5XCIpXG4gIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5wbGF5LWJ1dHRvblwiKTtcbiAgY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnJlc3RhcnQtYnV0dG9uXCIpO1xuXG4gIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWNhbnZhc1wiKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjYW52YXNFbC53aWR0aCA9IDUwMDtcbiAgY2FudmFzRWwuaGVpZ2h0ID0gNTAwO1xuICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gIFxuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodCwgY3R4KTtcbiAgLy8gbmV3IEdhbWVWaWV3KGdhbWUsIGN0eCkuc3RhcnQoKTtcbiAgXG4gIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2FuaW1hdGUnKVxuICAgIGlmIChnYW1lLndvbigpKSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUod2luZG93LmFuaW1hdGlvbklkKTtcbiAgICAgIGdhbWUucmVzdGFydCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBsaXN0IGFueSBvdGhlciBjb25kaXRpb25hbHMgYWJvdmVcbiAgICAgICAgXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNFbC53aWR0aCwgY2FudmFzRWwuaGVpZ2h0KTtcbiAgICBnYW1lLmRyYXcoKTtcbiAgICBnYW1lLnJlbmRlcigpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfVxuXG4gIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGxheUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgICBpbnN0cnVjdGlvbnMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGFuaW1hdGUoKTtcbiAgfSk7XG5cbiAgcmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZXN0YXJ0LkJ1dHRvbnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH0pO1xufSk7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBuZXdHYW1lKCkge1xuLy8gICAgIGdhbWUgPSBuZXcgR2FtZShjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIGN0eCk7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1kaXZcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kLWRpdlwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbi8vIH1cblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuLy8gICAgIGtleXNbZS5rZXlDb2RlXSA9IHRydWU7IFxuLy8gfSk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuLy8gICAgIGRlbGV0ZSBrZXlzW2Uua2V5Q29kZV07IFxuLy8gfSk7IiwiaW1wb3J0IE1hcCBmcm9tICcuL21hcCc7XG5pbXBvcnQgTGVvIGZyb20gJy4vbGVvJztcbmltcG9ydCBTdG9yeSBmcm9tICcuL3N0b3J5JztcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0VsV2lkdGgsIGNhbnZhc0VsSGVpZ2h0LCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbFdpZHRoID0gY2FudmFzRWxXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXNFbEhlaWdodCA9IGNhbnZhc0VsSGVpZ2h0O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKGNhbnZhc0VsV2lkdGgsIGNhbnZhc0VsSGVpZ2h0LCB0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMubGVvID0gbmV3IExlbyhjYW52YXNFbFdpZHRoIC8gMiwgY2FudmFzRWxIZWlnaHQgLyAyLCB0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuc3RvcnkgPSBuZXcgU3RvcnkodGhpcy5sZW8sIHRoaXMubWFwKTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSAwO1xuICAgICAgICBuZXcgVXRpbCAodGhpcy5sZW8sIHRoaXMpO1xuICAgIH07XG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5tYXAuZHJhdyhcbiAgICAgICAgICAgIHRoaXMuY3R4LCBcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWxXaWR0aCwgXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsSGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubGVvLmRyYXcoKTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGVvRHggPSAodGhpcy5jYW52YXNFbFdpZHRoIC8gMikgLSB0aGlzLmxlby54XG4gICAgICAgIGxldCBsZW9EeSA9ICh0aGlzLmNhbnZhc0VsSGVpZ2h0IC8gMikgLSB0aGlzLmxlby55XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxlb0R4KTtcbiAgICAgICAgdGhpcy5tYXAucmVuZGVyKGxlb0R4LCBsZW9EeSk7XG4gICAgICAgIHRoaXMubGVvLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHdvbigpIHtcbiAgICAgICAgLy8gd2hlbiBhbGwgdGhlIHN0b3J5IHBvaW50cyBhcmUgdHJ1ZSAoY29tcGxldGVkKVxuICAgICAgICBpZiAodGhpcy5zdG9yeS5zdG9yeWxpbmUuZm91bmRIZXdlcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuICAgICAgdGhpcy5wb2ludHMgPSAwO1xuICAgICAgdGhpcy5zdG9yeSA9IG5ldyBTdG9yeSh0aGlzLmxlbywgdGhpcy5tYXApO1xuICAgIH1cblxuICAgIC8vIGxvc3QoKSB7XG4gICAgICAgIC8vIHNvZnQgbG9zZSAtPiBhbnN3ZXJpbmcgYSBxdWVzdGlvbiBpbmNvcnJlY3RseVxuICAgICAgICAvLyBcbiAgICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJjbGFzcyBMZW8ge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGN0eCkge1xuICAgICAgICB0aGlzLmxlbyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxlby5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL3Nwcml0ZS9MZW9XYWxrQ3ljbGUucG5nXCI7XG4gICAgICAgIC8vIHN0YXRlIG9mIGxlb1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgICAgICB0aGlzLnNpemUgPSAxMDA7XG4gICAgICAgIHRoaXMuZGlyID0gMDsgLy8gd2hpY2gga2V5IGlzIGhlbGQgZG93blxuICAgICAgICB0aGlzLnRyb3R0aW5nID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDAuMTtcblxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRyYXcoKSB7IC8vIHJlbmRlcihjdHgsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2hlcmUgdGhlIGhlY2sgaXMgbGVvXCIpXG4gICAgICAgIGxldCBzcHJpdGVTaXplID0gdGhpcy5zaXplIC8gNDtcbiAgICAgICAgbGV0IHRyb3QgPSBNYXRoLmZsb29yKHRoaXMudHJvdHRpbmcgJSA0KTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMubGVvLCB0cm90ICogc3ByaXRlU2l6ZSwgdGhpcy5kaXIgKiBzcHJpdGVTaXplLCBzcHJpdGVTaXplLCBzcHJpdGVTaXplLCAyMDAsIDIwMCwgdGhpcy5zaXplLCB0aGlzLnNpemUpOyAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnggKyBcIi0tLS0tLS1cIiArIHRoaXMueSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGNvbnN0IGRpciA9IGRpclswXTtcbiAgICAgICAgLy8gaWYgKGRpcikge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMucmlnaHQpIHsgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkOyB9XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5sZWZ0KSB7IHRoaXMudHJvdHRpbmcgLT0gdGhpcy5zcGVlZDsgfVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuZG93bikgeyB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7IH1cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnVwKSB7IHRoaXMudHJvdHRpbmcgLT0gdGhpcy5zcGVlZDsgfSAgICAgIFxuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IGRpciA9IHtcbiAgICAgICAgICAgIFwicmlnaHRcIjogMCxcbiAgICAgICAgICAgIFwibGVmdFwiOiAxLFxuICAgICAgICAgICAgXCJkb3duXCI6IDIsXG4gICAgICAgICAgICBcInVwXCI6IDNcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucmlnaHQgJiYgdGhpcy54IDwgMTk1MCkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJyaWdodFwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueCArPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyaWdodFwiK3RoaXMueClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlZnQgJiYgdGhpcy54ID4gLTQ2MCkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJsZWZ0XCJdO1xuICAgICAgICAgICAgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy54IC09IDM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxlZnRcIit0aGlzLngpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kb3duICYmIHRoaXMueSA8IDE5MjUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1wiZG93blwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueSArPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkb3duXCIrdGhpcy55KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXAgJiYgdGhpcy55ID4gLTUwMCkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJ1cFwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueSAtPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1cFwiK3RoaXMueSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVvO1xuIiwiaW1wb3J0IEhvdXNlcyBmcm9tICcuL21hcF9lbGUvaG91c2VzJztcbmltcG9ydCBTaHJ1YnMgZnJvbSAnLi9tYXBfZWxlL3NocnVicyc7XG5cbmNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgY3R4KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLm1hZ25pZnkgPSA1O1xuICAgICAgICB0aGlzLnhQb3MgPSAwO1xuICAgICAgICB0aGlzLnlQb3MgPSAwO1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLm1hcC5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL21hcC9iZ01hcC5wbmdcIjtcbiAgICAgICAgdGhpcy5ob3VzZSA9IG5ldyBIb3VzZXModGhpcy54UG9zLCB0aGlzLnlQb3MsIHRoaXMubWFnbmlmeSwgdGhpcy5jdHgpO1xuICAgICAgICAvLyB0aGlzLm1hcC5vbmxvYWQgPSAoKSA9PiBjdHguZHJhd0ltYWdlKHRoaXMubWFwLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KVxuICAgIH1cbiAgICBcbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBsZXQgbWFwU2l6ZSA9IHRoaXMud2lkdGggKiB0aGlzLm1hZ25pZnk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLm1hcCwgXG4gICAgICAgICAgICAwLCAwLCBcbiAgICAgICAgICAgIHRoaXMubWFwLndpZHRoLCBcbiAgICAgICAgICAgIHRoaXMubWFwLmhlaWdodCwgXG4gICAgICAgICAgICAtKHRoaXMubWFwLndpZHRoKSArIHRoaXMueFBvcywgXG4gICAgICAgICAgICAtKHRoaXMubWFwLmhlaWdodCkgKyB0aGlzLnlQb3MsIFxuICAgICAgICAgICAgbWFwU2l6ZSwgbWFwU2l6ZVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMueFBvcyArIFwiYW5kXCIgKyB0aGlzLnlQb3MpXG4gICAgICAgIC8vIGlmICh0aGlzLnhQb3MgPD0gNTI1ICYmIHRoaXMueFBvcyA+PSAtNTAwICYmIHRoaXMueVBvcyA8PSA3NTAgJiYgdGhpcy55UG9zID49IC0zNTApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuaG91c2UuZHJhd0hld2VydHNIb3VzZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICByZW5kZXIobGVvRHgsIGxlb0R5KSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnhQb3MgPCAxMjUwICYmIHRoaXMueVBvcyA8IDEyNTApIHtcbiAgICAgICAgICAgIHRoaXMueFBvcyA9IGxlb0R4O1xuICAgICAgICAgICAgdGhpcy55UG9zID0gbGVvRHk7XG5cbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuIiwiY2xhc3MgSG91c2VzIHtcbiAgICBjb25zdHJ1Y3Rvcih4UG9zLCB5UG9zLCBtYWduaWZ5LCBjdHgpIHtcbiAgICAgICAgdGhpcy54UG9zID0geFBvcztcbiAgICAgICAgdGhpcy55UG9zID0geVBvcztcbiAgICAgICAgdGhpcy5tYWduaWZ5ID0gbWFnbmlmeTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueENvbGxpc2lvbiA9IHRoaXMueFBvcyAtIHRoaXMuYmFzZVdpZHRoO1xuICAgICAgICB0aGlzLnlDb2xsaXNpb24gPSB0aGlzLnlQb3MgLSB0aGlzLmJhc2VIZWlnaHQ7XG4gICAgICAgIHRoaXMuaG91c2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB9XG5cbiAgICBkcmF3UG9sbHlzSG91c2UoZHgsIGR5KSB7XG4gICAgICAgIGNvbnN0IHBvbGx5c0hvdXNlID0gdGhpcy5ob3VzZTtcbiAgICAgICAgcG9sbHlzSG91c2Uuc3JjID0gXCJzcmMvYXNzZXRzL2ltYWdlcy9tYXBfZWxlbWVudHMvcG9sbHlzSG91c2UucG5nXCI7XG5cbiAgICAgICAgY29uc3QgYmFzZVdpZHRoID0gODA7XG4gICAgICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAxMjA7XG4gICAgICAgIGxldCBsZW9EeCA9IGJhc2VXaWR0aDtcbiAgICAgICAgbGV0IGxlb0R5ID0gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UocG9sbHlzSG91c2UsICwgMCwgYmFzZVdpZHRoICogNSwgYmFzZUhlaWdodCAqIDUpO1xuICAgIH1cblxuICAgIGRyYXdIZXdlcnRzSG91c2UoZHgsIGR5KSB7XG4gICAgICAgIGNvbnN0IGhld2VydHNIb3VzZSA9IHRoaXMuaG91c2U7XG4gICAgICAgIGhld2VydHNIb3VzZS5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL21hcF9lbGVtZW50cy9oZXdlcnRzSG91c2UucG5nXCI7XG5cbiAgICAgICAgY29uc3QgYmFzZVdpZHRoID0gMjAwO1xuICAgICAgICBjb25zdCBiYXNlSGVpZ2h0ID0gMTIwO1xuICAgICAgICBsZXQgbGVvRHggPSB0aGlzLnhQb3MgLSBiYXNlV2lkdGg7XG4gICAgICAgIGxldCBsZW9EeSA9IHRoaXMueVBvcyAtIGJhc2VIZWlnaHQ7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cobGVvRHkpXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShoZXdlcnRzSG91c2UsIDAsIDAsIGJhc2VXaWR0aCwgYmFzZUhlaWdodCwgZHgsIGR5LCBiYXNlV2lkdGggKiAzLCBiYXNlSGVpZ2h0ICogMyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3VzZXM7IiwiY2xhc3MgU3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKGxlbywgbWFwKSB7XG4gICAgICAgIHRoaXMubGVvID0gbGVvO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5zdG9yeWxpbmUgPSB7XG4gICAgICAgICAgICAvLyBiYXNlZCBvbiB0aGUgcG9pbnQgaW4gdGhlIHN0b3J5bGluZSwgdGhlIG1hcCB3aWxsIGNoYW5nZVxuICAgICAgICAgICAgLy8gbWFwIGNoYW5nZXMgaW5jbHVkZSB3aGF0IGNoYXJhY3RlcnMgc2F5IGFuZCB3aGVyZSB0aGV5IGFyZSBsb2NhdGVkXG4gICAgICAgICAgICBmb3VuZFBvbGx5OiBmYWxzZSwgXG4gICAgICAgICAgICBmb3VuZEhld2VydDogZmFsc2UgXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRoaXMgaXMgYSBzdG9yeSBsaW5lIG9iamVjdFxuICAgICAgICB0aGlzLmN1cnJlbnRQb3MgPSB7XG4gICAgICAgICAgICBtYXA6IHRydWUsXG4gICAgICAgICAgICBwb2xseXNIb3VzZTogZmFsc2UsXG4gICAgICAgICAgICBoZXdlcnRzSG91c2U6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RvcnlsaW5lcyAoKSB7XG4gICAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yeTsiLCJjbGFzcyBVdGlsIHtcbiAgICBjb25zdHJ1Y3RvcihsZW8sIGdhbWUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgIGxlby5yaWdodCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBsZW8ubGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmRvd24gPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnVwID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBsZW8ucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==