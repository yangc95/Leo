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
    // console.log('animate')
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
      var spriteSize = this.size / 4;
      var trot = Math.floor(this.trotting % 4);
      this.ctx.drawImage(this.leo, trot * spriteSize, this.dir * spriteSize, spriteSize, spriteSize, 200, 200, this.size, this.size); // console.log(`${this.x} and ${this.y}`)
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
      } else if (this.left && this.x > -460) {
        this.dir = dir["left"];
        this.trotting += this.speed;
        this.x -= 3;
      } else if (this.down && this.y < 1925) {
        this.dir = dir["down"];
        this.trotting += this.speed;
        this.y += 3;
      } else if (this.up && this.y > -500) {
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
/* harmony import */ var _map_ele_houses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map_ele/houses */ "./src/scripts/map_ele/houses.js");
/* harmony import */ var _map_ele_rooms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map_ele/rooms */ "./src/scripts/map_ele/rooms.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // import Shrubs from './map_ele/shrubs';

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
    this.house = new _map_ele_houses__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx);
    this.room = new _map_ele_rooms__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, width * this.magnify, height * this.magnify); // this.map.onload = () => ctx.drawImage(this.map, 0, 0, width, height)
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
      // this.room.drawPollysRoom();
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
      var baseHeight = 120;
      this.ctx.drawImage(hewertsHouse, -70 + dx, -90 + dy, baseWidth * 3, baseHeight * 3);
    }
  }]);

  return Houses;
}();

/* harmony default export */ __webpack_exports__["default"] = (Houses);

/***/ }),

/***/ "./src/scripts/map_ele/rooms.js":
/*!**************************************!*\
  !*** ./src/scripts/map_ele/rooms.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rooms = /*#__PURE__*/function () {
  function Rooms(ctx, width, height) {
    _classCallCheck(this, Rooms);

    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.room = {
      polly: new Image(),
      hewert: new Image()
    };
  }

  _createClass(Rooms, [{
    key: "drawPollysRoom",
    value: function drawPollysRoom() {
      var pollysRoom = this.room.polly;
      pollysRoom.src = "src/assets/images/map/pollysRoom.png";
      this.ctx.drawImage(pollysRoom, 0, 0, this.width / 5, this.height / 5);
    }
  }, {
    key: "drawHewertsRoom",
    value: function drawHewertsRoom() {
      var hewertsRoom = this.room.hewert;
      hewertsRoom.src = "src/assets/images/map/hewertsRoom.png";
      this.ctx.drawImage(hewertsRoom, 0, 0, this.width, this.height);
    }
  }]);

  return Rooms;
}();

/* harmony default export */ __webpack_exports__["default"] = (Rooms);

/***/ }),

/***/ "./src/scripts/story.js":
/*!******************************!*\
  !*** ./src/scripts/story.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "./src/scripts/text.js");
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
      spokeToShant: false,
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
    value: function storylines() {// this.storyline.spokeToShant && ||
    }
  }]);

  return Story;
}();

/* harmony default export */ __webpack_exports__["default"] = (Story);

/***/ }),

/***/ "./src/scripts/text.js":
/*!*****************************!*\
  !*** ./src/scripts/text.js ***!
  \*****************************/
/*! exports provided: polly, hewert, catthew, shant, grita, catvin, han, valeria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polly", function() { return polly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hewert", function() { return hewert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catthew", function() { return catthew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shant", function() { return shant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grita", function() { return grita; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catvin", function() { return catvin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "han", function() { return han; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valeria", function() { return valeria; });
// 0: when leo hasn't spoken to shant
// 1: when leo has spoken to shant, and polly hewert are false
// 2: when polly is true
// 3: when hewert is true
var polly = {
  0: ["Can't talk, must code"],
  1: ["Can't talk right now"],
  2: ["Thanks Leo! Doesn't the weather feel so nice today?"],
  3: ["Can't talk right now"]
};
var hewert = {
  0: ["Can't talk right now"],
  1: ["Can't talk right now"],
  2: ["I'm never going to get my burjer TT_TT"],
  3: ["Thanks Leo! I can finally have that burjer I was craving."]
};
var catthew = {
  0: ["Hi! I'm Catthew"],
  1: ["Cat Academy is created by Christine Yang (she/her/hers).", "You can check her out via the social links below."],
  2: ["Cat Academy is created by Christine Yang (she/her/hers).", "You can check her out via the social links below."],
  3: ["Cat Academy is created by Christine Yang (she/her/hers).", "You can check her out via the social links below."]
};
var shant = {
  0: ["Welcome to Cat Academy! My name is Shant!", "Everyone is hard at work here.", "Have you seen Hewert and Polly?", "They may need you to help them out!", "Let's find their friends to help solve their bugs. Teamwork is dreamwork!"],
  1: ["Is there anyone on the map who you didn't speak to yet?"],
  2: ["Is there anyone on the map who you didn't speak to yet?"],
  3: ["Is there anyone on the map who you didn't speak to yet?"]
}; // Grita and Catvin are going to free Holly

var grita = {
  0: ["You can call me Grita Kween!"],
  1: ["Which SQL statement inserts new data in a database?", "INSERT INTO", "INSERT NEW"],
  2: ["Martin Fowler once said,", "Good programmers write code that humans can understand."],
  3: ["It\u2019s not a bug \u2014 it\u2019s an undocumented feature"]
};
var catvin = {
  0: ["I don't like computer science jokes.", "...", "Not one bit"],
  1: ["Which is true about React?", "It uses server-side rendering", "It manipulates the real DOM"],
  // it uses the virtual DOM
  2: ["Why did the programmer quit his job?", "...", "because he didn't get arrays"],
  3: ["You had me at Hello World"]
}; // Han and Valeria are going to free Hewert

var han = {
  0: ["Han here!"],
  1: ["To understand what recursion is, you must first understand recursion."],
  2: ["Is Javascript multi-threaded?", "Yes", // no! it's single threaded with one call stack and one memory heap
  "No"],
  3: ["There is an easy way and a hard way.", "The hard part is finding the easy way."]
};
var valeria = {
  0: ["It's been a long time coming young cathopper."],
  1: ["The alternative to the ternary operation is to use the AND (&&) operation"],
  2: ["Is ascending by selectors in CSS possible?", "Yes", "No"],
  3: ["Learning how to test your code is a must!"]
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXBfZWxlL2hvdXNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXBfZWxlL3Jvb21zLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImltYWdlU21vb3RoaW5nRW5hYmxlZCIsImdhbWUiLCJHYW1lIiwiYW5pbWF0ZSIsIndvbiIsIndpbmRvdyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uSWQiLCJyZXN0YXJ0IiwiY2xlYXJSZWN0IiwiZHJhdyIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbnZhc0VsV2lkdGgiLCJjYW52YXNFbEhlaWdodCIsIm1hcCIsIk1hcCIsImxlbyIsIkxlbyIsInN0b3J5IiwiU3RvcnkiLCJwb2ludHMiLCJVdGlsIiwibGVvRHgiLCJ4IiwibGVvRHkiLCJ5Iiwic3RvcnlsaW5lIiwiZm91bmRIZXdlcnQiLCJJbWFnZSIsInNyYyIsInNpemUiLCJkaXIiLCJ0cm90dGluZyIsInNwZWVkIiwicmlnaHQiLCJsZWZ0IiwiZG93biIsInVwIiwic3ByaXRlU2l6ZSIsInRyb3QiLCJNYXRoIiwiZmxvb3IiLCJkcmF3SW1hZ2UiLCJtYWduaWZ5IiwieFBvcyIsInlQb3MiLCJob3VzZSIsIkhvdXNlcyIsInJvb20iLCJSb29tcyIsIm1hcFNpemUiLCJkcmF3SGV3ZXJ0c0hvdXNlIiwiZHgiLCJkeSIsImhld2VydHNIb3VzZSIsImJhc2VXaWR0aCIsImJhc2VIZWlnaHQiLCJwb2xseSIsImhld2VydCIsInBvbGx5c1Jvb20iLCJoZXdlcnRzUm9vbSIsInNwb2tlVG9TaGFudCIsImZvdW5kUG9sbHkiLCJjdXJyZW50UG9zIiwicG9sbHlzSG91c2UiLCJjYXR0aGV3Iiwic2hhbnQiLCJncml0YSIsImNhdHZpbiIsImhhbiIsInZhbGVyaWEiLCJlIiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsUUFBUSxD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SXpELFdBQUcsQ0FBQ21CLElBQUosR0FBVyxLQUFYO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0luQixXQUFHLENBQUNtQixJQUFKLEdBQVcsS0FBWDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJbkIsV0FBRyxDQUFDcUIsRUFBSixHQUFTLEtBQVQ7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSXJCLFdBQUcsQ0FBQ3FCLEVBQUosR0FBUyxLQUFUO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lyQixXQUFHLENBQUNrQixLQUFKLEdBQVksS0FBWjtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJbEIsV0FBRyxDQUFDa0IsS0FBSixHQUFZLEtBQVo7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSWxCLFdBQUcsQ0FBQ29CLElBQUosR0FBVyxLQUFYO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lwQixXQUFHLENBQUNvQixJQUFKLEdBQVcsS0FBWDtBQUNBO0FBeEJSO0FBMEJILEdBNUJEO0FBNkJILEM7O0FBR1VmLG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAvLyBjb21tZW50IGJhY2sgaW5cbiAgLy8gY29uc3QgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydC1wbGF5XCIpXG4gIC8vIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5wbGF5LWJ1dHRvblwiKTtcbiAgLy8gY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnJlc3RhcnQtYnV0dG9uXCIpO1xuICAvLyBjb21tZW50IGJhY2sgaW5cblxuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXljYW52YXNcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY2FudmFzRWwud2lkdGggPSA1MDA7XG4gIGNhbnZhc0VsLmhlaWdodCA9IDUwMDtcbiAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICBcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQsIGN0eCk7XG4gIC8vIG5ldyBHYW1lVmlldyhnYW1lLCBjdHgpLnN0YXJ0KCk7XG4gIFxuICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdhbmltYXRlJylcbiAgICBpZiAoZ2FtZS53b24oKSkge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHdpbmRvdy5hbmltYXRpb25JZCk7XG4gICAgICBnYW1lLnJlc3RhcnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbGlzdCBhbnkgb3RoZXIgY29uZGl0aW9uYWxzIGFib3ZlXG4gICAgICAgIFxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodCk7XG4gICAgZ2FtZS5kcmF3KCk7XG4gICAgZ2FtZS5yZW5kZXIoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH1cblxuICBhbmltYXRlKCk7XG5cbiAgLy8gY29tbWVudCBiYWNrIGluXG4gIC8vIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vICAgcGxheUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgLy8gICBpbnN0cnVjdGlvbnMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAvLyAgIGFuaW1hdGUoKTtcbiAgLy8gfSk7XG5cbiAgLy8gcmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gICByZXN0YXJ0LkJ1dHRvbnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIC8vIH0pO1xuICAvLyBjb21tZW50IGJhY2sgaW5cbn0pO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gbmV3R2FtZSgpIHtcbi8vICAgICBnYW1lID0gbmV3IEdhbWUoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCBjdHgpO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtZGl2XCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZC1kaXZcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4vLyB9XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbi8vICAgICBrZXlzW2Uua2V5Q29kZV0gPSB0cnVlOyBcbi8vIH0pO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbi8vICAgICBkZWxldGUga2V5c1tlLmtleUNvZGVdOyBcbi8vIH0pOyIsImltcG9ydCBNYXAgZnJvbSAnLi9tYXAnO1xuaW1wb3J0IExlbyBmcm9tICcuL2xlbyc7XG5pbXBvcnQgU3RvcnkgZnJvbSAnLi9zdG9yeSc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbFdpZHRoLCBjYW52YXNFbEhlaWdodCwgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzRWxXaWR0aCA9IGNhbnZhc0VsV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzRWxIZWlnaHQgPSBjYW52YXNFbEhlaWdodDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcChjYW52YXNFbFdpZHRoLCBjYW52YXNFbEhlaWdodCwgdGhpcy5jdHgpO1xuICAgICAgICB0aGlzLmxlbyA9IG5ldyBMZW8oY2FudmFzRWxXaWR0aCAvIDIsIGNhbnZhc0VsSGVpZ2h0IC8gMiwgdGhpcy5jdHgpO1xuICAgICAgICB0aGlzLnN0b3J5ID0gbmV3IFN0b3J5KHRoaXMubGVvLCB0aGlzLm1hcCk7XG4gICAgICAgIHRoaXMucG9pbnRzID0gMDtcbiAgICAgICAgbmV3IFV0aWwgKHRoaXMubGVvLCB0aGlzKTtcbiAgICB9O1xuICAgIFxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMubWFwLmRyYXcoXG4gICAgICAgICAgICB0aGlzLmN0eCwgXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsV2lkdGgsIFxuICAgICAgICAgICAgdGhpcy5jYW52YXNFbEhlaWdodFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmxlby5kcmF3KCk7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxlb0R4ID0gKHRoaXMuY2FudmFzRWxXaWR0aCAvIDIpIC0gdGhpcy5sZW8ueFxuICAgICAgICBsZXQgbGVvRHkgPSAodGhpcy5jYW52YXNFbEhlaWdodCAvIDIpIC0gdGhpcy5sZW8ueVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsZW9EeCk7XG4gICAgICAgIHRoaXMubWFwLnJlbmRlcihsZW9EeCwgbGVvRHkpO1xuICAgICAgICB0aGlzLmxlby5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB3b24oKSB7XG4gICAgICAgIC8vIHdoZW4gYWxsIHRoZSBzdG9yeSBwb2ludHMgYXJlIHRydWUgKGNvbXBsZXRlZClcbiAgICAgICAgaWYgKHRoaXMuc3Rvcnkuc3RvcnlsaW5lLmZvdW5kSGV3ZXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgIHRoaXMucG9pbnRzID0gMDtcbiAgICAgIHRoaXMuc3RvcnkgPSBuZXcgU3RvcnkodGhpcy5sZW8sIHRoaXMubWFwKTtcbiAgICB9XG5cbiAgICAvLyBsb3N0KCkge1xuICAgICAgICAvLyBzb2Z0IGxvc2UgLT4gYW5zd2VyaW5nIGEgcXVlc3Rpb24gaW5jb3JyZWN0bHlcbiAgICAgICAgLy8gXG4gICAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiY2xhc3MgTGVvIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBjdHgpIHtcbiAgICAgICAgdGhpcy5sZW8gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5sZW8uc3JjID0gXCJzcmMvYXNzZXRzL2ltYWdlcy9zcHJpdGUvTGVvV2Fsa0N5Y2xlLnBuZ1wiO1xuICAgICAgICAvLyBzdGF0ZSBvZiBsZW9cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy5zaXplID0gMTAwO1xuICAgICAgICB0aGlzLmRpciA9IDA7IC8vIHdoaWNoIGtleSBpcyBoZWxkIGRvd25cbiAgICAgICAgdGhpcy50cm90dGluZyA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjE7XG5cbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXAgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkcmF3KCkgeyAvLyByZW5kZXIoY3R4LCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICBsZXQgc3ByaXRlU2l6ZSA9IHRoaXMuc2l6ZSAvIDQ7XG4gICAgICAgIGxldCB0cm90ID0gTWF0aC5mbG9vcih0aGlzLnRyb3R0aW5nICUgNCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmxlbywgdHJvdCAqIHNwcml0ZVNpemUsIHRoaXMuZGlyICogc3ByaXRlU2l6ZSwgc3ByaXRlU2l6ZSwgc3ByaXRlU2l6ZSwgMjAwLCAyMDAsIHRoaXMuc2l6ZSwgdGhpcy5zaXplKTsgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCR7dGhpcy54fSBhbmQgJHt0aGlzLnl9YClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGNvbnN0IGRpciA9IGRpclswXTtcbiAgICAgICAgLy8gaWYgKGRpcikge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMucmlnaHQpIHsgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkOyB9XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5sZWZ0KSB7IHRoaXMudHJvdHRpbmcgLT0gdGhpcy5zcGVlZDsgfVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuZG93bikgeyB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7IH1cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnVwKSB7IHRoaXMudHJvdHRpbmcgLT0gdGhpcy5zcGVlZDsgfSAgICAgIFxuICAgICAgICAvLyB9XG5cbiAgICAgICAgY29uc3QgZGlyID0ge1xuICAgICAgICAgICAgXCJyaWdodFwiOiAwLFxuICAgICAgICAgICAgXCJsZWZ0XCI6IDEsXG4gICAgICAgICAgICBcImRvd25cIjogMixcbiAgICAgICAgICAgIFwidXBcIjogM1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5yaWdodCAmJiB0aGlzLnggPCAxOTUwKSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcltcInJpZ2h0XCJdO1xuICAgICAgICAgICAgdGhpcy50cm90dGluZyArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy54ICs9IDM7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0ICYmIHRoaXMueCA+IC00NjApIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1wibGVmdFwiXTtcbiAgICAgICAgICAgIHRoaXMudHJvdHRpbmcgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMueCAtPSAzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZG93biAmJiB0aGlzLnkgPCAxOTI1KSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcltcImRvd25cIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnkgKz0gMztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnVwICYmIHRoaXMueSA+IC01MDApIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyW1widXBcIl07XG4gICAgICAgICAgICB0aGlzLnRyb3R0aW5nICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnkgLT0gMztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVvO1xuIiwiaW1wb3J0IEhvdXNlcyBmcm9tICcuL21hcF9lbGUvaG91c2VzJztcbmltcG9ydCBSb29tcyBmcm9tICcuL21hcF9lbGUvcm9vbXMnO1xuLy8gaW1wb3J0IFNocnVicyBmcm9tICcuL21hcF9lbGUvc2hydWJzJztcblxuY2xhc3MgTWFwIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjdHgpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMubWFnbmlmeSA9IDU7XG4gICAgICAgIHRoaXMueFBvcyA9IDA7XG4gICAgICAgIHRoaXMueVBvcyA9IDA7XG4gICAgICAgIHRoaXMubWFwID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubWFwLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvbWFwL2JnTWFwLnBuZ1wiO1xuICAgICAgICB0aGlzLmhvdXNlID0gbmV3IEhvdXNlcyh0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMucm9vbSA9IG5ldyBSb29tcyh0aGlzLmN0eCwgd2lkdGggKiB0aGlzLm1hZ25pZnksIGhlaWdodCAqIHRoaXMubWFnbmlmeSlcbiAgICAgICAgLy8gdGhpcy5tYXAub25sb2FkID0gKCkgPT4gY3R4LmRyYXdJbWFnZSh0aGlzLm1hcCwgMCwgMCwgd2lkdGgsIGhlaWdodClcbiAgICB9XG4gICAgXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgbGV0IG1hcFNpemUgPSB0aGlzLndpZHRoICogdGhpcy5tYWduaWZ5O1xuICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5tYXAsIFxuICAgICAgICAgICAgMCwgMCwgXG4gICAgICAgICAgICB0aGlzLm1hcC53aWR0aCwgXG4gICAgICAgICAgICB0aGlzLm1hcC5oZWlnaHQsIFxuICAgICAgICAgICAgLSh0aGlzLm1hcC53aWR0aCkgKyB0aGlzLnhQb3MsIFxuICAgICAgICAgICAgLSh0aGlzLm1hcC5oZWlnaHQpICsgdGhpcy55UG9zLCBcbiAgICAgICAgICAgIG1hcFNpemUsIG1hcFNpemVcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnhQb3MgKyBcImFuZFwiICsgdGhpcy55UG9zKVxuICAgICAgICBpZiAodGhpcy54UG9zIDw9IDUyNSAmJiB0aGlzLnhQb3MgPj0gLTUwMCAmJiB0aGlzLnlQb3MgPD0gNzUwICYmIHRoaXMueVBvcyA+PSAtMzUwKSB7XG4gICAgICAgICAgICB0aGlzLmhvdXNlLmRyYXdIZXdlcnRzSG91c2UodGhpcy54UG9zLCB0aGlzLnlQb3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKGxlb0R4LCBsZW9EeSkge1xuICAgICAgICAvLyBpZiAodGhpcy54UG9zIDwgMTI1MCAmJiB0aGlzLnlQb3MgPCAxMjUwKSB7XG4gICAgICAgICAgICB0aGlzLnhQb3MgPSBsZW9EeDtcbiAgICAgICAgICAgIHRoaXMueVBvcyA9IGxlb0R5O1xuXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdGhpcy5yb29tLmRyYXdQb2xseXNSb29tKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iLCJjbGFzcyBIb3VzZXMge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5ob3VzZSA9IG5ldyBJbWFnZSgpO1xuICAgIH1cblxuICAgIC8vIGRyYXdQb2xseXNIb3VzZShkeCwgZHkpIHtcbiAgICAvLyAgICAgY29uc3QgcG9sbHlzSG91c2UgPSB0aGlzLmhvdXNlO1xuICAgIC8vICAgICBwb2xseXNIb3VzZS5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL21hcF9lbGVtZW50cy9wb2xseXNIb3VzZS5wbmdcIjtcblxuICAgIC8vICAgICBjb25zdCBiYXNlV2lkdGggPSA4MDtcbiAgICAvLyAgICAgY29uc3QgYmFzZUhlaWdodCA9IDEyMDtcbiAgICAvLyAgICAgbGV0IGxlb0R4ID0gYmFzZVdpZHRoO1xuICAgIC8vICAgICBsZXQgbGVvRHkgPSBiYXNlSGVpZ2h0O1xuXG4gICAgLy8gICAgIHRoaXMuY3R4LmRyYXdJbWFnZShwb2xseXNIb3VzZSwgMCwgMCk7XG4gICAgLy8gfVxuXG4gICAgZHJhd0hld2VydHNIb3VzZShkeCwgZHkpIHtcbiAgICAgICAgY29uc3QgaGV3ZXJ0c0hvdXNlID0gdGhpcy5ob3VzZTtcbiAgICAgICAgaGV3ZXJ0c0hvdXNlLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvbWFwX2VsZW1lbnRzL2hld2VydHNIb3VzZS5wbmdcIjtcblxuICAgICAgICBjb25zdCBiYXNlV2lkdGggPSAyMDA7XG4gICAgICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAxMjA7XG5cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGhld2VydHNIb3VzZSwgLTcwICsgZHgsIC05MCArIGR5LCBiYXNlV2lkdGggKiAzLCBiYXNlSGVpZ2h0ICogMylcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXNlczsiLCJjbGFzcyBSb29tcyB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnJvb20gPSB7XG4gICAgICAgICAgICBwb2xseTogbmV3IEltYWdlKCksXG4gICAgICAgICAgICBoZXdlcnQ6IG5ldyBJbWFnZSgpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZHJhd1BvbGx5c1Jvb20oKSB7XG4gICAgICAgIGNvbnN0IHBvbGx5c1Jvb20gPSB0aGlzLnJvb20ucG9sbHk7XG4gICAgICAgIHBvbGx5c1Jvb20uc3JjID0gXCJzcmMvYXNzZXRzL2ltYWdlcy9tYXAvcG9sbHlzUm9vbS5wbmdcIjtcblxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UocG9sbHlzUm9vbSwgMCwgMCwgdGhpcy53aWR0aCAvNSwgdGhpcy5oZWlnaHQvNSk7XG4gICAgfVxuXG4gICAgZHJhd0hld2VydHNSb29tKCkge1xuICAgICAgICBjb25zdCBoZXdlcnRzUm9vbSA9IHRoaXMucm9vbS5oZXdlcnQ7XG4gICAgICAgIGhld2VydHNSb29tLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvbWFwL2hld2VydHNSb29tLnBuZ1wiO1xuXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShoZXdlcnRzUm9vbSwgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb29tczsiLCJpbXBvcnQge1xuICAgIHBvbGx5LFxuICAgIGhld2VydFxufSBmcm9tICcuL3RleHQnO1xuXG5jbGFzcyBTdG9yeSB7XG4gICAgY29uc3RydWN0b3IobGVvLCBtYXApIHtcbiAgICAgICAgdGhpcy5sZW8gPSBsZW87XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLnN0b3J5bGluZSA9IHtcbiAgICAgICAgICAgIC8vIGJhc2VkIG9uIHRoZSBwb2ludCBpbiB0aGUgc3RvcnlsaW5lLCB0aGUgbWFwIHdpbGwgY2hhbmdlXG4gICAgICAgICAgICAvLyBtYXAgY2hhbmdlcyBpbmNsdWRlIHdoYXQgY2hhcmFjdGVycyBzYXkgYW5kIHdoZXJlIHRoZXkgYXJlIGxvY2F0ZWRcbiAgICAgICAgICAgIHNwb2tlVG9TaGFudDogZmFsc2UsXG4gICAgICAgICAgICBmb3VuZFBvbGx5OiBmYWxzZSwgXG4gICAgICAgICAgICBmb3VuZEhld2VydDogZmFsc2UgXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRoaXMgaXMgYSBzdG9yeSBsaW5lIG9iamVjdFxuICAgICAgICB0aGlzLmN1cnJlbnRQb3MgPSB7XG4gICAgICAgICAgICBtYXA6IHRydWUsXG4gICAgICAgICAgICBwb2xseXNIb3VzZTogZmFsc2UsXG4gICAgICAgICAgICBoZXdlcnRzSG91c2U6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RvcnlsaW5lcyAoKSB7XG4gICAgICAgIC8vIHRoaXMuc3RvcnlsaW5lLnNwb2tlVG9TaGFudCAmJiB8fFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Rvcnk7IiwiLy8gMDogd2hlbiBsZW8gaGFzbid0IHNwb2tlbiB0byBzaGFudFxuLy8gMTogd2hlbiBsZW8gaGFzIHNwb2tlbiB0byBzaGFudCwgYW5kIHBvbGx5IGhld2VydCBhcmUgZmFsc2Vcbi8vIDI6IHdoZW4gcG9sbHkgaXMgdHJ1ZVxuLy8gMzogd2hlbiBoZXdlcnQgaXMgdHJ1ZVxuXG5jb25zdCBwb2xseSA9IHtcbiAgICAwOiBbYENhbid0IHRhbGssIG11c3QgY29kZWBdLFxuICAgIDE6IFtgQ2FuJ3QgdGFsayByaWdodCBub3dgXSxcbiAgICAyOiBbYFRoYW5rcyBMZW8hIERvZXNuJ3QgdGhlIHdlYXRoZXIgZmVlbCBzbyBuaWNlIHRvZGF5P2BdLFxuICAgIDM6IFtgQ2FuJ3QgdGFsayByaWdodCBub3dgXVxufVxuXG5jb25zdCBoZXdlcnQgPSB7XG4gICAgMDogW2BDYW4ndCB0YWxrIHJpZ2h0IG5vd2BdLFxuICAgIDE6IFtgQ2FuJ3QgdGFsayByaWdodCBub3dgXSxcbiAgICAyOiBbYEknbSBuZXZlciBnb2luZyB0byBnZXQgbXkgYnVyamVyIFRUX1RUYF0sXG4gICAgMzogW2BUaGFua3MgTGVvISBJIGNhbiBmaW5hbGx5IGhhdmUgdGhhdCBidXJqZXIgSSB3YXMgY3JhdmluZy5gXVxufVxuXG5jb25zdCBjYXR0aGV3ID0ge1xuICAgIDA6IFtgSGkhIEknbSBDYXR0aGV3YF0sXG4gICAgMTogW2BDYXQgQWNhZGVteSBpcyBjcmVhdGVkIGJ5IENocmlzdGluZSBZYW5nIChzaGUvaGVyL2hlcnMpLmAsXG4gICAgICAgIGBZb3UgY2FuIGNoZWNrIGhlciBvdXQgdmlhIHRoZSBzb2NpYWwgbGlua3MgYmVsb3cuYF0sXG4gICAgMjogW2BDYXQgQWNhZGVteSBpcyBjcmVhdGVkIGJ5IENocmlzdGluZSBZYW5nIChzaGUvaGVyL2hlcnMpLmAsXG4gICAgICAgIGBZb3UgY2FuIGNoZWNrIGhlciBvdXQgdmlhIHRoZSBzb2NpYWwgbGlua3MgYmVsb3cuYF0sXG4gICAgMzogW2BDYXQgQWNhZGVteSBpcyBjcmVhdGVkIGJ5IENocmlzdGluZSBZYW5nIChzaGUvaGVyL2hlcnMpLmAsXG4gICAgICAgIGBZb3UgY2FuIGNoZWNrIGhlciBvdXQgdmlhIHRoZSBzb2NpYWwgbGlua3MgYmVsb3cuYF1cbn1cblxuY29uc3Qgc2hhbnQgPSB7XG4gICAgMDogW2BXZWxjb21lIHRvIENhdCBBY2FkZW15ISBNeSBuYW1lIGlzIFNoYW50IWAsIFxuICAgICAgICBgRXZlcnlvbmUgaXMgaGFyZCBhdCB3b3JrIGhlcmUuYCxcbiAgICAgICAgYEhhdmUgeW91IHNlZW4gSGV3ZXJ0IGFuZCBQb2xseT9gLFxuICAgICAgICBgVGhleSBtYXkgbmVlZCB5b3UgdG8gaGVscCB0aGVtIG91dCFgLFxuICAgICAgICBgTGV0J3MgZmluZCB0aGVpciBmcmllbmRzIHRvIGhlbHAgc29sdmUgdGhlaXIgYnVncy4gVGVhbXdvcmsgaXMgZHJlYW13b3JrIWBdLFxuICAgIDE6IFtgSXMgdGhlcmUgYW55b25lIG9uIHRoZSBtYXAgd2hvIHlvdSBkaWRuJ3Qgc3BlYWsgdG8geWV0P2BdLFxuICAgIDI6IFtgSXMgdGhlcmUgYW55b25lIG9uIHRoZSBtYXAgd2hvIHlvdSBkaWRuJ3Qgc3BlYWsgdG8geWV0P2BdLFxuICAgIDM6IFtgSXMgdGhlcmUgYW55b25lIG9uIHRoZSBtYXAgd2hvIHlvdSBkaWRuJ3Qgc3BlYWsgdG8geWV0P2BdXG59XG5cbi8vIEdyaXRhIGFuZCBDYXR2aW4gYXJlIGdvaW5nIHRvIGZyZWUgSG9sbHlcblxuY29uc3QgZ3JpdGEgPSB7XG4gICAgMDogW2BZb3UgY2FuIGNhbGwgbWUgR3JpdGEgS3dlZW4hYF0sXG4gICAgMTogW2BXaGljaCBTUUwgc3RhdGVtZW50IGluc2VydHMgbmV3IGRhdGEgaW4gYSBkYXRhYmFzZT9gLFxuICAgICAgICBgSU5TRVJUIElOVE9gLFxuICAgICAgICBgSU5TRVJUIE5FV2BdLFxuICAgIDI6IFtgTWFydGluIEZvd2xlciBvbmNlIHNhaWQsYCwgXG4gICAgICAgIGBHb29kIHByb2dyYW1tZXJzIHdyaXRlIGNvZGUgdGhhdCBodW1hbnMgY2FuIHVuZGVyc3RhbmQuYF0sXG4gICAgMzogW2BJdOKAmXMgbm90IGEgYnVnIOKAlCBpdOKAmXMgYW4gdW5kb2N1bWVudGVkIGZlYXR1cmVgXVxufVxuXG5jb25zdCBjYXR2aW4gPSB7XG4gICAgMDogW2BJIGRvbid0IGxpa2UgY29tcHV0ZXIgc2NpZW5jZSBqb2tlcy5gLFxuICAgICAgICBgLi4uYCxcbiAgICAgICAgYE5vdCBvbmUgYml0YF0sXG4gICAgMTogW2BXaGljaCBpcyB0cnVlIGFib3V0IFJlYWN0P2AsXG4gICAgICAgIGBJdCB1c2VzIHNlcnZlci1zaWRlIHJlbmRlcmluZ2AsIFxuICAgICAgICBgSXQgbWFuaXB1bGF0ZXMgdGhlIHJlYWwgRE9NYF0sIC8vIGl0IHVzZXMgdGhlIHZpcnR1YWwgRE9NXG4gICAgMjogW2BXaHkgZGlkIHRoZSBwcm9ncmFtbWVyIHF1aXQgaGlzIGpvYj9gLFxuICAgICAgICBgLi4uYCxcbiAgICAgICAgYGJlY2F1c2UgaGUgZGlkbid0IGdldCBhcnJheXNgXSxcbiAgICAzOiBbYFlvdSBoYWQgbWUgYXQgSGVsbG8gV29ybGRgXVxufVxuXG4vLyBIYW4gYW5kIFZhbGVyaWEgYXJlIGdvaW5nIHRvIGZyZWUgSGV3ZXJ0XG5cbmNvbnN0IGhhbiA9IHtcbiAgICAwOiBbYEhhbiBoZXJlIWBdLFxuICAgIDE6IFtgVG8gdW5kZXJzdGFuZCB3aGF0IHJlY3Vyc2lvbiBpcywgeW91IG11c3QgZmlyc3QgdW5kZXJzdGFuZCByZWN1cnNpb24uYF0sXG4gICAgMjogW2BJcyBKYXZhc2NyaXB0IG11bHRpLXRocmVhZGVkP2AsXG4gICAgICAgIGBZZXNgLCAvLyBubyEgaXQncyBzaW5nbGUgdGhyZWFkZWQgd2l0aCBvbmUgY2FsbCBzdGFjayBhbmQgb25lIG1lbW9yeSBoZWFwXG4gICAgICAgIGBOb2BdLFxuICAgIDM6IFtgVGhlcmUgaXMgYW4gZWFzeSB3YXkgYW5kIGEgaGFyZCB3YXkuYCxcbiAgICAgICAgYFRoZSBoYXJkIHBhcnQgaXMgZmluZGluZyB0aGUgZWFzeSB3YXkuYF1cbn1cblxuY29uc3QgdmFsZXJpYSA9IHtcbiAgICAwOiBbYEl0J3MgYmVlbiBhIGxvbmcgdGltZSBjb21pbmcgeW91bmcgY2F0aG9wcGVyLmBdLFxuICAgIDE6IFtgVGhlIGFsdGVybmF0aXZlIHRvIHRoZSB0ZXJuYXJ5IG9wZXJhdGlvbiBpcyB0byB1c2UgdGhlIEFORCAoJiYpIG9wZXJhdGlvbmBdLFxuICAgIDI6IFtgSXMgYXNjZW5kaW5nIGJ5IHNlbGVjdG9ycyBpbiBDU1MgcG9zc2libGU/YCxcbiAgICAgICAgYFllc2AsXG4gICAgICAgIGBOb2BdLFxuICAgIDM6IFtgTGVhcm5pbmcgaG93IHRvIHRlc3QgeW91ciBjb2RlIGlzIGEgbXVzdCFgXVxufVxuXG5leHBvcnQge1xuICAgIHBvbGx5LFxuICAgIGhld2VydCxcbiAgICBjYXR0aGV3LFxuICAgIHNoYW50LFxuICAgIGdyaXRhLFxuICAgIGNhdHZpbixcbiAgICBoYW4sXG4gICAgdmFsZXJpYVxufSIsImNsYXNzIFV0aWwge1xuICAgIGNvbnN0cnVjdG9yKGxlbywgZ2FtZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGxlby5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDY1OlxuICAgICAgICAgICAgICAgICAgICBsZW8ubGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDg3OlxuICAgICAgICAgICAgICAgICAgICBsZW8udXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIGxlby5yaWdodCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDY4OlxuICAgICAgICAgICAgICAgICAgICBsZW8ucmlnaHQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmRvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgODM6XG4gICAgICAgICAgICAgICAgICAgIGxlby5kb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA2NTpcbiAgICAgICAgICAgICAgICAgICAgbGVvLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODc6XG4gICAgICAgICAgICAgICAgICAgIGxlby51cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBsZW8ucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA2ODpcbiAgICAgICAgICAgICAgICAgICAgbGVvLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGxlby5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODM6XG4gICAgICAgICAgICAgICAgICAgIGxlby5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==