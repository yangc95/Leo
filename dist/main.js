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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXBfZWxlL2hvdXNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnN0cnVjdGlvbnMiLCJxdWVyeVNlbGVjdG9yIiwicGxheUJ1dHRvbiIsInJlc3RhcnRCdXR0b24iLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiZ2FtZSIsIkdhbWUiLCJhbmltYXRlIiwiY29uc29sZSIsImxvZyIsIndvbiIsIndpbmRvdyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uSWQiLCJyZXN0YXJ0IiwiY2xlYXJSZWN0IiwiZHJhdyIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsIkJ1dHRvbnN0eWxlIiwiY2FudmFzRWxXaWR0aCIsImNhbnZhc0VsSGVpZ2h0IiwibWFwIiwiTWFwIiwibGVvIiwiTGVvIiwic3RvcnkiLCJTdG9yeSIsInBvaW50cyIsIlV0aWwiLCJsZW9EeCIsIngiLCJsZW9EeSIsInkiLCJzdG9yeWxpbmUiLCJmb3VuZEhld2VydCIsIkltYWdlIiwic3JjIiwic2l6ZSIsImRpciIsInRyb3R0aW5nIiwic3BlZWQiLCJyaWdodCIsImxlZnQiLCJkb3duIiwidXAiLCJzcHJpdGVTaXplIiwidHJvdCIsIk1hdGgiLCJmbG9vciIsImRyYXdJbWFnZSIsIm1hZ25pZnkiLCJ4UG9zIiwieVBvcyIsImhvdXNlIiwiSG91c2VzIiwibWFwU2l6ZSIsInhDb2xsaXNpb24iLCJiYXNlV2lkdGgiLCJ5Q29sbGlzaW9uIiwiYmFzZUhlaWdodCIsImR4IiwiZHkiLCJwb2xseXNIb3VzZSIsImhld2VydHNIb3VzZSIsImZvdW5kUG9sbHkiLCJjdXJyZW50UG9zIiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBTUMsWUFBWSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsYUFBdkIs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Q0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0luQixXQUFHLENBQUNtQixJQUFKLEdBQVcsS0FBWDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJbkIsV0FBRyxDQUFDcUIsRUFBSixHQUFTLEtBQVQ7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSXJCLFdBQUcsQ0FBQ3FCLEVBQUosR0FBUyxLQUFUO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lyQixXQUFHLENBQUNrQixLQUFKLEdBQVksS0FBWjtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJbEIsV0FBRyxDQUFDa0IsS0FBSixHQUFZLEtBQVo7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWxCLFdBQUcsQ0FBQ29CLElBQUosR0FBVyxLQUFYO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lwQixXQUFHLENBQUNvQixJQUFKLEdBQVcsS0FBWDtBQUNBO0FBeEJSO0FBMEJILEdBNUJEO0FBNkJILEM7O0FBR1VmLG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0LXBsYXlcIilcbiAgY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnBsYXktYnV0dG9uXCIpO1xuICBjb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEucmVzdGFydC1idXR0b25cIik7XG5cbiAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Y2FudmFzXCIpO1xuICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNhbnZhc0VsLndpZHRoID0gNTAwO1xuICBjYW52YXNFbC5oZWlnaHQgPSA1MDA7XG4gIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXNFbC53aWR0aCwgY2FudmFzRWwuaGVpZ2h0LCBjdHgpO1xuICAvLyBuZXcgR2FtZVZpZXcoZ2FtZSwgY3R4KS5zdGFydCgpO1xuICBcbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnYW5pbWF0ZScpXG4gICAgaWYgKGdhbWUud29uKCkpIHtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh3aW5kb3cuYW5pbWF0aW9uSWQpO1xuICAgICAgZ2FtZS5yZXN0YXJ0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGxpc3QgYW55IG90aGVyIGNvbmRpdGlvbmFscyBhYm92ZVxuICAgICAgICBcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQpO1xuICAgIGdhbWUuZHJhdygpO1xuICAgIGdhbWUucmVuZGVyKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9XG5cbiAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwbGF5QnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgIGluc3RydWN0aW9ucy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgYW5pbWF0ZSgpO1xuICB9KTtcblxuICByZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlc3RhcnQuQnV0dG9uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfSk7XG59KTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIG5ld0dhbWUoKSB7XG4vLyAgICAgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwgY3R4KTtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWRpdlwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmQtZGl2XCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuLy8gfVxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4vLyAgICAga2V5c1tlLmtleUNvZGVdID0gdHJ1ZTsgXG4vLyB9KTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG4vLyAgICAgZGVsZXRlIGtleXNbZS5rZXlDb2RlXTsgXG4vLyB9KTsiLCJpbXBvcnQgTWFwIGZyb20gJy4vbWFwJztcbmltcG9ydCBMZW8gZnJvbSAnLi9sZW8nO1xuaW1wb3J0IFN0b3J5IGZyb20gJy4vc3RvcnknO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxXaWR0aCwgY2FudmFzRWxIZWlnaHQsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhc0VsV2lkdGggPSBjYW52YXNFbFdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhc0VsSGVpZ2h0ID0gY2FudmFzRWxIZWlnaHQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoY2FudmFzRWxXaWR0aCwgY2FudmFzRWxIZWlnaHQsIHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5sZW8gPSBuZXcgTGVvKGNhbnZhc0VsV2lkdGggLyAyLCBjYW52YXNFbEhlaWdodCAvIDIsIHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5zdG9yeSA9IG5ldyBTdG9yeSh0aGlzLmxlbywgdGhpcy5tYXApO1xuICAgICAgICB0aGlzLnBvaW50cyA9IDA7XG4gICAgICAgIG5ldyBVdGlsICh0aGlzLmxlbywgdGhpcyk7XG4gICAgfTtcbiAgICBcbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLm1hcC5kcmF3KFxuICAgICAgICAgICAgdGhpcy5jdHgsIFxuICAgICAgICAgICAgdGhpcy5jYW52YXNFbFdpZHRoLCBcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWxIZWlnaHRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5sZW8uZHJhdygpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsZW9EeCA9ICh0aGlzLmNhbnZhc0VsV2lkdGggLyAyKSAtIHRoaXMubGVvLnhcbiAgICAgICAgbGV0IGxlb0R5ID0gKHRoaXMuY2FudmFzRWxIZWlnaHQgLyAyKSAtIHRoaXMubGVvLnlcbiAgICAgICAgLy8gY29uc29sZS5sb2cobGVvRHgpO1xuICAgICAgICB0aGlzLm1hcC5yZW5kZXIobGVvRHgsIGxlb0R5KTtcbiAgICAgICAgdGhpcy5sZW8ucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgd29uKCkge1xuICAgICAgICAvLyB3aGVuIGFsbCB0aGUgc3RvcnkgcG9pbnRzIGFyZSB0cnVlIChjb21wbGV0ZWQpXG4gICAgICAgIGlmICh0aGlzLnN0b3J5LnN0b3J5bGluZS5mb3VuZEhld2VydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICB0aGlzLnBvaW50cyA9IDA7XG4gICAgICB0aGlzLnN0b3J5ID0gbmV3IFN0b3J5KHRoaXMubGVvLCB0aGlzLm1hcCk7XG4gICAgfVxuXG4gICAgLy8gbG9zdCgpIHtcbiAgICAgICAgLy8gc29mdCBsb3NlIC0+IGFuc3dlcmluZyBhIHF1ZXN0aW9uIGluY29ycmVjdGx5XG4gICAgICAgIC8vIFxuICAgIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImNsYXNzIExlbyB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgY3R4KSB7XG4gICAgICAgIHRoaXMubGVvID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubGVvLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvc3ByaXRlL0xlb1dhbGtDeWNsZS5wbmdcIjtcbiAgICAgICAgLy8gc3RhdGUgb2YgbGVvXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMuc2l6ZSA9IDEwMDtcbiAgICAgICAgdGhpcy5kaXIgPSAwOyAvLyB3aGljaCBrZXkgaXMgaGVsZCBkb3duXG4gICAgICAgIHRoaXMudHJvdHRpbmcgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMC4xO1xuXG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZHJhdygpIHsgLy8gcmVuZGVyKGN0eCwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aGVyZSB0aGUgaGVjayBpcyBsZW9cIilcbiAgICAgICAgbGV0IHNwcml0ZVNpemUgPSB0aGlzLnNpemUgLyA0O1xuICAgICAgICBsZXQgdHJvdCA9IE1hdGguZmxvb3IodGhpcy50cm90dGluZyAlIDQpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5sZW8sIHRyb3QgKiBzcHJpdGVTaXplLCB0aGlzLmRpciAqIHNwcml0ZVNpemUsIHNwcml0ZVNpemUsIHNwcml0ZVNpemUsIDIwMCwgMjAwLCB0aGlzLnNpemUsIHRoaXMuc2l6ZSk7ICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMueCArIFwiLS0tLS0tLVwiICsgdGhpcy55KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gY29uc3QgZGlyID0gZGlyWzBdO1xuICAgICAgICAvLyBpZiAoZGlyKSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5yaWdodCkgeyB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7IH1cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmxlZnQpIHsgdGhpcy50cm90dGluZyAtPSB0aGlzLnNwZWVkOyB9XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5kb3duKSB7IHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDsgfVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMudXApIHsgdGhpcy50cm90dGluZyAtPSB0aGlzLnNwZWVkOyB9ICAgICAgXG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc3QgZGlyID0ge1xuICAgICAgICAgICAgXCJyaWdodFwiOiAwLFxuICAgICAgICAgICAgXCJsZWZ0XCI6IDEsXG4gICAgICAgICAgICBcImRvd25cIjogMixcbiAgICAgICAgICAgIFwidXBcIjogM1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5yaWdodCAmJiB0aGlzLnggPCAxOTUwKSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcltcInJpZ2h0XCJdO1xuICAgICAgICAgICAgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy54ICs9IDM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJpZ2h0XCIrdGhpcy54KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVmdCAmJiB0aGlzLnggPiAtNDYwKSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcltcImxlZnRcIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnggLT0gMztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGVmdFwiK3RoaXMueClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRvd24gJiYgdGhpcy55IDwgMTkyNSkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJkb3duXCJdO1xuICAgICAgICAgICAgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy55ICs9IDM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRvd25cIit0aGlzLnkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy51cCAmJiB0aGlzLnkgPiAtNTAwKSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcltcInVwXCJdO1xuICAgICAgICAgICAgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy55IC09IDM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVwXCIrdGhpcy55KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZW87XG4iLCJpbXBvcnQgSG91c2VzIGZyb20gJy4vbWFwX2VsZS9ob3VzZXMnO1xuaW1wb3J0IFNocnVicyBmcm9tICcuL21hcF9lbGUvc2hydWJzJztcblxuY2xhc3MgTWFwIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjdHgpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMubWFnbmlmeSA9IDU7XG4gICAgICAgIHRoaXMueFBvcyA9IDA7XG4gICAgICAgIHRoaXMueVBvcyA9IDA7XG4gICAgICAgIHRoaXMubWFwID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubWFwLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvbWFwL2JnTWFwLnBuZ1wiO1xuICAgICAgICB0aGlzLmhvdXNlID0gbmV3IEhvdXNlcyh0aGlzLnhQb3MsIHRoaXMueVBvcywgdGhpcy5tYWduaWZ5LCB0aGlzLmN0eCk7XG4gICAgICAgIC8vIHRoaXMubWFwLm9ubG9hZCA9ICgpID0+IGN0eC5kcmF3SW1hZ2UodGhpcy5tYXAsIDAsIDAsIHdpZHRoLCBoZWlnaHQpXG4gICAgfVxuICAgIFxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGxldCBtYXBTaXplID0gdGhpcy53aWR0aCAqIHRoaXMubWFnbmlmeTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMubWFwLCBcbiAgICAgICAgICAgIDAsIDAsIFxuICAgICAgICAgICAgdGhpcy5tYXAud2lkdGgsIFxuICAgICAgICAgICAgdGhpcy5tYXAuaGVpZ2h0LCBcbiAgICAgICAgICAgIC0odGhpcy5tYXAud2lkdGgpICsgdGhpcy54UG9zLCBcbiAgICAgICAgICAgIC0odGhpcy5tYXAuaGVpZ2h0KSArIHRoaXMueVBvcywgXG4gICAgICAgICAgICBtYXBTaXplLCBtYXBTaXplXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy54UG9zICsgXCJhbmRcIiArIHRoaXMueVBvcylcbiAgICAgICAgLy8gaWYgKHRoaXMueFBvcyA8PSA1MjUgJiYgdGhpcy54UG9zID49IC01MDAgJiYgdGhpcy55UG9zIDw9IDc1MCAmJiB0aGlzLnlQb3MgPj0gLTM1MCkge1xuICAgICAgICAvLyAgICAgdGhpcy5ob3VzZS5kcmF3SGV3ZXJ0c0hvdXNlKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHJlbmRlcihsZW9EeCwgbGVvRHkpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMueFBvcyA8IDEyNTAgJiYgdGhpcy55UG9zIDwgMTI1MCkge1xuICAgICAgICAgICAgdGhpcy54UG9zID0gbGVvRHg7XG4gICAgICAgICAgICB0aGlzLnlQb3MgPSBsZW9EeTtcblxuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iLCJjbGFzcyBIb3VzZXMge1xuICAgIGNvbnN0cnVjdG9yKHhQb3MsIHlQb3MsIG1hZ25pZnksIGN0eCkge1xuICAgICAgICB0aGlzLnhQb3MgPSB4UG9zO1xuICAgICAgICB0aGlzLnlQb3MgPSB5UG9zO1xuICAgICAgICB0aGlzLm1hZ25pZnkgPSBtYWduaWZ5O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54Q29sbGlzaW9uID0gdGhpcy54UG9zIC0gdGhpcy5iYXNlV2lkdGg7XG4gICAgICAgIHRoaXMueUNvbGxpc2lvbiA9IHRoaXMueVBvcyAtIHRoaXMuYmFzZUhlaWdodDtcbiAgICAgICAgdGhpcy5ob3VzZSA9IG5ldyBJbWFnZSgpO1xuICAgIH1cblxuICAgIGRyYXdQb2xseXNIb3VzZShkeCwgZHkpIHtcbiAgICAgICAgY29uc3QgcG9sbHlzSG91c2UgPSB0aGlzLmhvdXNlO1xuICAgICAgICBwb2xseXNIb3VzZS5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL21hcF9lbGVtZW50cy9wb2xseXNIb3VzZS5wbmdcIjtcblxuICAgICAgICBjb25zdCBiYXNlV2lkdGggPSA4MDtcbiAgICAgICAgY29uc3QgYmFzZUhlaWdodCA9IDEyMDtcbiAgICAgICAgbGV0IGxlb0R4ID0gYmFzZVdpZHRoO1xuICAgICAgICBsZXQgbGVvRHkgPSBiYXNlSGVpZ2h0O1xuXG4gICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShwb2xseXNIb3VzZSwgLCAwLCBiYXNlV2lkdGggKiA1LCBiYXNlSGVpZ2h0ICogNSk7XG4gICAgfVxuXG4gICAgZHJhd0hld2VydHNIb3VzZShkeCwgZHkpIHtcbiAgICAgICAgY29uc3QgaGV3ZXJ0c0hvdXNlID0gdGhpcy5ob3VzZTtcbiAgICAgICAgaGV3ZXJ0c0hvdXNlLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvbWFwX2VsZW1lbnRzL2hld2VydHNIb3VzZS5wbmdcIjtcblxuICAgICAgICBjb25zdCBiYXNlV2lkdGggPSAyMDA7XG4gICAgICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAxMjA7XG4gICAgICAgIGxldCBsZW9EeCA9IHRoaXMueFBvcyAtIGJhc2VXaWR0aDtcbiAgICAgICAgbGV0IGxlb0R5ID0gdGhpcy55UG9zIC0gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsZW9EeSlcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGhld2VydHNIb3VzZSwgMCwgMCwgYmFzZVdpZHRoLCBiYXNlSGVpZ2h0LCBkeCwgZHksIGJhc2VXaWR0aCAqIDMsIGJhc2VIZWlnaHQgKiAzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXNlczsiLCJjbGFzcyBTdG9yeSB7XG4gICAgY29uc3RydWN0b3IobGVvLCBtYXApIHtcbiAgICAgICAgdGhpcy5sZW8gPSBsZW87XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLnN0b3J5bGluZSA9IHtcbiAgICAgICAgICAgIC8vIGJhc2VkIG9uIHRoZSBwb2ludCBpbiB0aGUgc3RvcnlsaW5lLCB0aGUgbWFwIHdpbGwgY2hhbmdlXG4gICAgICAgICAgICAvLyBtYXAgY2hhbmdlcyBpbmNsdWRlIHdoYXQgY2hhcmFjdGVycyBzYXkgYW5kIHdoZXJlIHRoZXkgYXJlIGxvY2F0ZWRcbiAgICAgICAgICAgIGZvdW5kUG9sbHk6IGZhbHNlLCBcbiAgICAgICAgICAgIGZvdW5kSGV3ZXJ0OiBmYWxzZSBcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdGhpcyBpcyBhIHN0b3J5IGxpbmUgb2JqZWN0XG4gICAgICAgIHRoaXMuY3VycmVudFBvcyA9IHtcbiAgICAgICAgICAgIG1hcDogdHJ1ZSxcbiAgICAgICAgICAgIHBvbGx5c0hvdXNlOiBmYWxzZSxcbiAgICAgICAgICAgIGhld2VydHNIb3VzZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdG9yeWxpbmVzICgpIHtcbiAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3J5OyIsImNsYXNzIFV0aWwge1xuICAgIGNvbnN0cnVjdG9yKGxlbywgZ2FtZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGxlby5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDY1OlxuICAgICAgICAgICAgICAgICAgICBsZW8ubGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDg3OlxuICAgICAgICAgICAgICAgICAgICBsZW8udXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIGxlby5yaWdodCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDY4OlxuICAgICAgICAgICAgICAgICAgICBsZW8ucmlnaHQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmRvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgODM6XG4gICAgICAgICAgICAgICAgICAgIGxlby5kb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA2NTpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODc6XG4gICAgICAgICAgICAgICAgICAgIGxlby51cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBsZW8ucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA2ODpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGxlby5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODM6XG4gICAgICAgICAgICAgICAgICAgIGxlby5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==