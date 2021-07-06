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
  } // const STATUS = true;
  // if (STATUS) animate();


  playButton.addEventListener('click', function () {
    playButton.style.visibility = 'hidden'; // game.start();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXBfZWxlL2hvdXNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5QnV0dG9uIiwicXVlcnlTZWxlY3RvciIsInJlc3RhcnRCdXR0b24iLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiZ2FtZSIsIkdhbWUiLCJhbmltYXRlIiwiY29uc29sZSIsImxvZyIsIndvbiIsIndpbmRvdyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uSWQiLCJyZXN0YXJ0IiwiY2xlYXJSZWN0IiwiZHJhdyIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsIkJ1dHRvbnN0eWxlIiwiY2FudmFzRWxXaWR0aCIsImNhbnZhc0VsSGVpZ2h0IiwibWFwIiwiTWFwIiwibGVvIiwiTGVvIiwic3RvcnkiLCJTdG9yeSIsInBvaW50cyIsIlV0aWwiLCJsZW9EeCIsIngiLCJsZW9EeSIsInkiLCJzdG9yeWxpbmUiLCJmb3VuZEhld2VydCIsIkltYWdlIiwic3JjIiwic2l6ZSIsImRpciIsInRyb3R0aW5nIiwic3BlZWQiLCJyaWdodCIsImxlZnQiLCJkb3duIiwidXAiLCJzcHJpdGVTaXplIiwidHJvdCIsIk1hdGgiLCJmbG9vciIsImRyYXdJbWFnZSIsIm1hZ25pZnkiLCJ4UG9zIiwieVBvcyIsImhvdXNlIiwiSG91c2VzIiwibWFwU2l6ZSIsInhDb2xsaXNpb24iLCJiYXNlV2lkdGgiLCJ5Q29sbGlzaW9uIiwiYmFzZUhlaWdodCIsImR4IiwiZHkiLCJwb2xseXNIb3VzZSIsImhld2VydHNIb3VzZSIsImZvdW5kUG9sbHkiLCJjdXJyZW50UG9zIiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7QUFDQSxNQUFN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Ozs7QUFHVXJDLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztJQ3ZCTUUsSSxHQUNGLGNBQVlMLEdBQVosRUFBaUJyQixJQUFqQixFQUF1QjtBQUFBOztBQUNuQlosVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFBMkUsQ0FBQyxFQUFJO0FBQ3RDQSxLQUFDLENBQUNDLGNBQUY7O0FBQ0EsWUFBUUQsQ0FBQyxDQUFDRSxPQUFWO0FBQ0ksV0FBSyxFQUFMO0FBQ0c3QyxXQUFHLENBQUNrQixLQUFKLEdBQVksSUFBWjtBQUNDOztBQUNKLFdBQUssRUFBTDtBQUNJbEIsV0FBRyxDQUFDbUIsSUFBSixHQUFXLElBQVg7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSW5CLFdBQUcsQ0FBQ29CLElBQUosR0FBVyxJQUFYO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lwQixXQUFHLENBQUNxQixFQUFKLEdBQVMsSUFBVDtBQUNBO0FBWlI7QUFjSCxHQWhCRDtBQWtCQXRELFVBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQTJFLENBQUMsRUFBSTtBQUNwQ0EsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFlBQVFELENBQUMsQ0FBQ0UsT0FBVjtBQUNJLFdBQUssRUFBTDtBQUNJN0MsV0FBRyxDQUFDa0IsS0FBSixHQUFZLEtBQVo7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWxCLFdBQUcsQ0FBQ21CLElBQUosR0FBVyxLQUFYO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0luQixXQUFHLENBQUNvQixJQUFKLEdBQVcsS0FBWDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJcEIsV0FBRyxDQUFDcUIsRUFBSixHQUFTLEtBQVQ7QUFDQTtBQVpSO0FBY0gsR0FoQkQ7QUFpQkgsQzs7QUFHVWhCLG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEucGxheS1idXR0b25cIik7XG4gIGNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5yZXN0YXJ0LWJ1dHRvblwiKTtcblxuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXljYW52YXNcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY2FudmFzRWwud2lkdGggPSA1MDA7XG4gIGNhbnZhc0VsLmhlaWdodCA9IDUwMDtcbiAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICBcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQsIGN0eCk7XG4gIC8vIG5ldyBHYW1lVmlldyhnYW1lLCBjdHgpLnN0YXJ0KCk7XG4gIFxuICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIGNvbnNvbGUubG9nKCdhbmltYXRlJylcbiAgICBpZiAoZ2FtZS53b24oKSkge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHdpbmRvdy5hbmltYXRpb25JZCk7XG4gICAgICBnYW1lLnJlc3RhcnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbGlzdCBhbnkgb3RoZXIgY29uZGl0aW9uYWxzIGFib3ZlXG4gICAgICAgIFxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodCk7XG4gICAgZ2FtZS5kcmF3KCk7XG4gICAgZ2FtZS5yZW5kZXIoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH1cbiAgLy8gY29uc3QgU1RBVFVTID0gdHJ1ZTtcbiAgLy8gaWYgKFNUQVRVUykgYW5pbWF0ZSgpO1xuXG4gIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGxheUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgLy8gZ2FtZS5zdGFydCgpO1xuICAgIGFuaW1hdGUoKTtcbiAgfSk7XG5cbiAgcmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZXN0YXJ0LkJ1dHRvbnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH0pO1xufSk7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBuZXdHYW1lKCkge1xuLy8gICAgIGdhbWUgPSBuZXcgR2FtZShjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIGN0eCk7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1kaXZcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kLWRpdlwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbi8vIH1cblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuLy8gICAgIGtleXNbZS5rZXlDb2RlXSA9IHRydWU7IFxuLy8gfSk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuLy8gICAgIGRlbGV0ZSBrZXlzW2Uua2V5Q29kZV07IFxuLy8gfSk7IiwiaW1wb3J0IE1hcCBmcm9tICcuL21hcCc7XG5pbXBvcnQgTGVvIGZyb20gJy4vbGVvJztcbmltcG9ydCBTdG9yeSBmcm9tICcuL3N0b3J5JztcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0VsV2lkdGgsIGNhbnZhc0VsSGVpZ2h0LCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbFdpZHRoID0gY2FudmFzRWxXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXNFbEhlaWdodCA9IGNhbnZhc0VsSGVpZ2h0O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKGNhbnZhc0VsV2lkdGgsIGNhbnZhc0VsSGVpZ2h0LCB0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMubGVvID0gbmV3IExlbyhjYW52YXNFbFdpZHRoIC8gMiwgY2FudmFzRWxIZWlnaHQgLyAyLCB0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuc3RvcnkgPSBuZXcgU3RvcnkodGhpcy5sZW8sIHRoaXMubWFwKTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSAwO1xuICAgICAgICBuZXcgVXRpbCAodGhpcy5sZW8sIHRoaXMpO1xuICAgIH07XG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5tYXAuZHJhdyhcbiAgICAgICAgICAgIHRoaXMuY3R4LCBcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWxXaWR0aCwgXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsSGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubGVvLmRyYXcoKTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGVvRHggPSAodGhpcy5jYW52YXNFbFdpZHRoIC8gMikgLSB0aGlzLmxlby54XG4gICAgICAgIGxldCBsZW9EeSA9ICh0aGlzLmNhbnZhc0VsSGVpZ2h0IC8gMikgLSB0aGlzLmxlby55XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxlb0R4KTtcbiAgICAgICAgdGhpcy5tYXAucmVuZGVyKGxlb0R4LCBsZW9EeSk7XG4gICAgICAgIHRoaXMubGVvLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHdvbigpIHtcbiAgICAgICAgLy8gd2hlbiBhbGwgdGhlIHN0b3J5IHBvaW50cyBhcmUgdHJ1ZSAoY29tcGxldGVkKVxuICAgICAgICBpZiAodGhpcy5zdG9yeS5zdG9yeWxpbmUuZm91bmRIZXdlcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuICAgICAgdGhpcy5wb2ludHMgPSAwO1xuICAgICAgdGhpcy5zdG9yeSA9IG5ldyBTdG9yeSh0aGlzLmxlbywgdGhpcy5tYXApO1xuICAgIH1cblxuICAgIC8vIGxvc3QoKSB7XG4gICAgICAgIC8vIHNvZnQgbG9zZSAtPiBhbnN3ZXJpbmcgYSBxdWVzdGlvbiBpbmNvcnJlY3RseVxuICAgICAgICAvLyBcbiAgICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJjbGFzcyBMZW8ge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGN0eCkge1xuICAgICAgICB0aGlzLmxlbyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxlby5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL3Nwcml0ZS9MZW9XYWxrQ3ljbGUucG5nXCI7XG4gICAgICAgIC8vIHN0YXRlIG9mIGxlb1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgICAgICB0aGlzLnNpemUgPSAxMDA7XG4gICAgICAgIHRoaXMuZGlyID0gMDsgLy8gd2hpY2gga2V5IGlzIGhlbGQgZG93blxuICAgICAgICB0aGlzLnRyb3R0aW5nID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDAuMTtcblxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRyYXcoKSB7IC8vIHJlbmRlcihjdHgsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2hlcmUgdGhlIGhlY2sgaXMgbGVvXCIpXG4gICAgICAgIGxldCBzcHJpdGVTaXplID0gdGhpcy5zaXplIC8gNDtcbiAgICAgICAgbGV0IHRyb3QgPSBNYXRoLmZsb29yKHRoaXMudHJvdHRpbmcgJSA0KTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMubGVvLCB0cm90ICogc3ByaXRlU2l6ZSwgdGhpcy5kaXIgKiBzcHJpdGVTaXplLCBzcHJpdGVTaXplLCBzcHJpdGVTaXplLCAyMDAsIDIwMCwgdGhpcy5zaXplLCB0aGlzLnNpemUpOyAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnggKyBcIi0tLS0tLS1cIiArIHRoaXMueSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGNvbnN0IGRpciA9IGRpclswXTtcbiAgICAgICAgLy8gaWYgKGRpcikge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMucmlnaHQpIHsgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkOyB9XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5sZWZ0KSB7IHRoaXMudHJvdHRpbmcgLT0gdGhpcy5zcGVlZDsgfVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuZG93bikgeyB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7IH1cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnVwKSB7IHRoaXMudHJvdHRpbmcgLT0gdGhpcy5zcGVlZDsgfSAgICAgIFxuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IGRpciA9IHtcbiAgICAgICAgICAgIFwicmlnaHRcIjogMCxcbiAgICAgICAgICAgIFwibGVmdFwiOiAxLFxuICAgICAgICAgICAgXCJkb3duXCI6IDIsXG4gICAgICAgICAgICBcInVwXCI6IDNcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucmlnaHQgJiYgdGhpcy54IDwgMTk1MCkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJyaWdodFwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueCArPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyaWdodFwiK3RoaXMueClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlZnQgJiYgdGhpcy54ID4gLTQ2MCkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJsZWZ0XCJdO1xuICAgICAgICAgICAgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy54IC09IDM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxlZnRcIit0aGlzLngpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kb3duICYmIHRoaXMueSA8IDE5MjUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1wiZG93blwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueSArPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkb3duXCIrdGhpcy55KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXAgJiYgdGhpcy55ID4gLTUwMCkge1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJbXCJ1cFwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueSAtPSAzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1cFwiK3RoaXMueSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVvO1xuIiwiaW1wb3J0IEhvdXNlcyBmcm9tICcuL21hcF9lbGUvaG91c2VzJztcbmltcG9ydCBTaHJ1YnMgZnJvbSAnLi9tYXBfZWxlL3NocnVicyc7XG5cbmNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgY3R4KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLm1hZ25pZnkgPSA1O1xuICAgICAgICB0aGlzLnhQb3MgPSAwO1xuICAgICAgICB0aGlzLnlQb3MgPSAwO1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLm1hcC5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL21hcC9iZ01hcC5wbmdcIjtcbiAgICAgICAgdGhpcy5ob3VzZSA9IG5ldyBIb3VzZXModGhpcy54UG9zLCB0aGlzLnlQb3MsIHRoaXMubWFnbmlmeSwgdGhpcy5jdHgpO1xuICAgICAgICAvLyB0aGlzLm1hcC5vbmxvYWQgPSAoKSA9PiBjdHguZHJhd0ltYWdlKHRoaXMubWFwLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KVxuICAgIH1cbiAgICBcbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBsZXQgbWFwU2l6ZSA9IHRoaXMud2lkdGggKiB0aGlzLm1hZ25pZnk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLm1hcCwgXG4gICAgICAgICAgICAwLCAwLCBcbiAgICAgICAgICAgIHRoaXMubWFwLndpZHRoLCBcbiAgICAgICAgICAgIHRoaXMubWFwLmhlaWdodCwgXG4gICAgICAgICAgICAtKHRoaXMubWFwLndpZHRoKSArIHRoaXMueFBvcywgXG4gICAgICAgICAgICAtKHRoaXMubWFwLmhlaWdodCkgKyB0aGlzLnlQb3MsIFxuICAgICAgICAgICAgbWFwU2l6ZSwgbWFwU2l6ZVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMueFBvcyArIFwiYW5kXCIgKyB0aGlzLnlQb3MpXG4gICAgICAgIC8vIGlmICh0aGlzLnhQb3MgPD0gNTI1ICYmIHRoaXMueFBvcyA+PSAtNTAwICYmIHRoaXMueVBvcyA8PSA3NTAgJiYgdGhpcy55UG9zID49IC0zNTApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuaG91c2UuZHJhd0hld2VydHNIb3VzZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICByZW5kZXIobGVvRHgsIGxlb0R5KSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnhQb3MgPCAxMjUwICYmIHRoaXMueVBvcyA8IDEyNTApIHtcbiAgICAgICAgICAgIHRoaXMueFBvcyA9IGxlb0R4O1xuICAgICAgICAgICAgdGhpcy55UG9zID0gbGVvRHk7XG5cbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuIiwiY2xhc3MgSG91c2VzIHtcbiAgICBjb25zdHJ1Y3Rvcih4UG9zLCB5UG9zLCBtYWduaWZ5LCBjdHgpIHtcbiAgICAgICAgdGhpcy54UG9zID0geFBvcztcbiAgICAgICAgdGhpcy55UG9zID0geVBvcztcbiAgICAgICAgdGhpcy5tYWduaWZ5ID0gbWFnbmlmeTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueENvbGxpc2lvbiA9IHRoaXMueFBvcyAtIHRoaXMuYmFzZVdpZHRoO1xuICAgICAgICB0aGlzLnlDb2xsaXNpb24gPSB0aGlzLnlQb3MgLSB0aGlzLmJhc2VIZWlnaHQ7XG4gICAgICAgIHRoaXMuaG91c2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB9XG5cbiAgICBkcmF3UG9sbHlzSG91c2UoZHgsIGR5KSB7XG4gICAgICAgIGNvbnN0IHBvbGx5c0hvdXNlID0gdGhpcy5ob3VzZTtcbiAgICAgICAgcG9sbHlzSG91c2Uuc3JjID0gXCJzcmMvYXNzZXRzL2ltYWdlcy9tYXBfZWxlbWVudHMvcG9sbHlzSG91c2UucG5nXCI7XG5cbiAgICAgICAgY29uc3QgYmFzZVdpZHRoID0gODA7XG4gICAgICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAxMjA7XG4gICAgICAgIGxldCBsZW9EeCA9IGJhc2VXaWR0aDtcbiAgICAgICAgbGV0IGxlb0R5ID0gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UocG9sbHlzSG91c2UsICwgMCwgYmFzZVdpZHRoICogNSwgYmFzZUhlaWdodCAqIDUpO1xuICAgIH1cblxuICAgIGRyYXdIZXdlcnRzSG91c2UoZHgsIGR5KSB7XG4gICAgICAgIGNvbnN0IGhld2VydHNIb3VzZSA9IHRoaXMuaG91c2U7XG4gICAgICAgIGhld2VydHNIb3VzZS5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL21hcF9lbGVtZW50cy9oZXdlcnRzSG91c2UucG5nXCI7XG5cbiAgICAgICAgY29uc3QgYmFzZVdpZHRoID0gMjAwO1xuICAgICAgICBjb25zdCBiYXNlSGVpZ2h0ID0gMTIwO1xuICAgICAgICBsZXQgbGVvRHggPSB0aGlzLnhQb3MgLSBiYXNlV2lkdGg7XG4gICAgICAgIGxldCBsZW9EeSA9IHRoaXMueVBvcyAtIGJhc2VIZWlnaHQ7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cobGVvRHkpXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShoZXdlcnRzSG91c2UsIDAsIDAsIGJhc2VXaWR0aCwgYmFzZUhlaWdodCwgZHgsIGR5LCBiYXNlV2lkdGggKiAzLCBiYXNlSGVpZ2h0ICogMyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3VzZXM7IiwiY2xhc3MgU3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKGxlbywgbWFwKSB7XG4gICAgICAgIHRoaXMubGVvID0gbGVvO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5zdG9yeWxpbmUgPSB7XG4gICAgICAgICAgICAvLyBiYXNlZCBvbiB0aGUgcG9pbnQgaW4gdGhlIHN0b3J5bGluZSwgdGhlIG1hcCB3aWxsIGNoYW5nZVxuICAgICAgICAgICAgLy8gbWFwIGNoYW5nZXMgaW5jbHVkZSB3aGF0IGNoYXJhY3RlcnMgc2F5IGFuZCB3aGVyZSB0aGV5IGFyZSBsb2NhdGVkXG4gICAgICAgICAgICBmb3VuZFBvbGx5OiBmYWxzZSxcbiAgICAgICAgICAgIGZvdW5kSGV3ZXJ0OiBmYWxzZSBcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdGhpcyBpcyBhIHN0b3J5IGxpbmUgb2JqZWN0XG4gICAgICAgIHRoaXMuY3VycmVudFBvcyA9IHtcbiAgICAgICAgICAgIG1hcDogdHJ1ZSxcbiAgICAgICAgICAgIHBvbGx5c0hvdXNlOiBmYWxzZSxcbiAgICAgICAgICAgIGhld2VydHNIb3VzZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdG9yeWxpbmVzICgpIHtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Rvcnk7IiwiY2xhc3MgVXRpbCB7XG4gICAgY29uc3RydWN0b3IobGVvLCBnYW1lKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICBsZW8ucmlnaHQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGxlby5kb3duID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIGxlby51cCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGxlby5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGxlby5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIGxlby51cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=