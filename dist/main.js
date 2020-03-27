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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bullets.js":
/*!************************!*\
  !*** ./src/bullets.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nclass Bullet extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(pos, ctx, cursor, game) {\n    super(game);\n    this.ctx = ctx;\n    this.x = pos.x;\n    this.y = pos.y; //position for bullet to spawn;\n\n    this.xBound = game.width;\n    this.yBound = game.height; //boundary to check out of bounds\n\n    this.curX = cursor.x;\n    this.curY = cursor.y; //mouse pointer location\n\n    this.width = 14;\n    this.height = 14; //bullet height and width;\n\n    var deltaX = this.curX - (this.x + this.width / 2);\n    var deltaY = this.curY - (this.y + this.height / 2);\n    var magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY);\n    const velocityScale = 10 / magnitude;\n    this.velocityInstanceX = deltaX * velocityScale;\n    this.velocityInstanceY = deltaY * velocityScale;\n  }\n\n  fire() {\n    this.x += this.velocityInstanceX;\n    this.y += this.velocityInstanceY;\n\n    if (this.x > this.xBound || this.x < 0) {\n      this.remove(this);\n    } else if (this.y > this.yBound || this.y < 0) {\n      this.remove(this);\n    }\n\n    this.draw();\n  }\n\n  draw() {\n    this.ctx.strokeStyle = \"Black\";\n    this.ctx.strokeRect(this.x, this.y, this.width, this.height);\n  }\n\n}\n\nconst BULLET_SPEED = 15;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n//# sourceURL=webpack:///./src/bullets.js?");

/***/ }),

/***/ "./src/control.js":
/*!************************!*\
  !*** ./src/control.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Control {\n  constructor(player, canvas) {\n    this.player = player;\n    this.keys = {};\n    const e = window.event;\n    document.addEventListener(\"keydown\", event => {\n      event.preventDefault();\n      this.keys[event.code] = true;\n\n      if (this.keys[\"KeyA\"]) {\n        this.player.moveLeft();\n      }\n\n      if (this.keys[\"KeyD\"]) {\n        this.player.moveRight();\n      }\n\n      if (this.keys[\"KeyW\"]) {\n        this.player.moveUp();\n      }\n\n      if (this.keys[\"KeyS\"]) {\n        this.player.moveDown();\n      }\n\n      if (this.keys[\"ShiftLeft\"]) {\n        this.player.changeWeapon();\n      }\n\n      if (this.keys[\"KeyN\"]) {}\n    });\n    document.addEventListener(\"keyup\", event => {\n      this.keys[event.code] = false;\n    });\n    document.addEventListener(\"mousedown\", event => (event.preventDefault(), this.player.shootBullet()));\n    canvas.addEventListener(\"mousemove\", event => (this.player.cursorPos.x = event.layerX, this.player.cursorPos.y = event.layerY));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Control); //game will be used to pause canvas\n\n//# sourceURL=webpack:///./src/control.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bullets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullets */ \"./src/bullets.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\n\nclass Enemy extends _moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(ctx, player, game) {\n    super(game);\n    this.player = player;\n    this.ctx = ctx;\n    this.health = 2;\n    this.pos = {\n      x: 200,\n      y: 200\n    };\n    this.width = 5;\n    this.height = 5;\n  }\n\n  draw() {\n    this.ctx.strokeStyle = \"Brown\";\n    this.ctx.strokeRect(this.pos.x, this.pos.y, this.width, this.height);\n  }\n\n  collidedWith(otherObject) {\n    if (otherObject instanceof _bullets__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.remove();\n      otherObject.remove();\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control */ \"./src/control.js\");\n/* harmony import */ var _bullets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bullets */ \"./src/bullets.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n\n\n\n\n\nclass Game {\n  constructor(ctx, canvas) {\n    this.ctx = ctx;\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this);\n    this.height = this.ctx.canvas.height;\n    this.width = this.ctx.canvas.width;\n    this.control = new _control__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.player, canvas);\n    this.bullets = [];\n    this.enemies = [];\n    this.gameStart();\n  }\n\n  gameStart() {\n    this.animate();\n    const enemy = new _enemy__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.ctx, this.player, this);\n    this.enemies.push(enemy);\n  }\n\n  animate() {\n    requestAnimationFrame(this.animate.bind(this));\n    this.ctx.clearRect(0, 0, this.width, this.height);\n    this.ctx.fillStyle = \"silver\";\n    this.ctx.fillRect(0, 0, this.ctx.width, this.ctx.height);\n    this.player.draw();\n\n    if (this.bullets !== undefined) {\n      this.bullets.forEach(bullet => (bullet.fire(), console.log(this.bullets, this.enemies)));\n    }\n\n    if (this.enemies !== undefined) {\n      this.enemies.forEach(enemy => enemy.draw());\n    }\n\n    for (let i = 0; i < this.enemies.length; i++) {\n      for (let j = 0; j < this.bullets.length; j++) {\n        const enemy = this.enemies[i];\n        const bullet = this.bullets[j];\n\n        if (enemy.isCollidedWith(bullet)) {\n          const collision = enemy.collidedWith(bullet);\n        }\n      }\n    }\n  }\n\n  remove(object) {\n    if (object instanceof _bullets__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.bullets.splice(this.bullets.indexOf(object), 1);\n    } else if (object instanceof _enemy__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n      this.enemies.splice(this.enemies.indexOf(object), 1);\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n // const GameView = require(\"./game_view\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const canvasWidth = canvas.width;\n  const canvasHeight = canvas.height;\n  ctx.fillStyle = \"gold\";\n  ctx.fillRect(0, 0, canvasWidth, canvasHeight);\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvas);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bullets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullets */ \"./src/bullets.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\nclass MovingObject {\n  constructor(game) {\n    this.game = game;\n  }\n\n  isCollidedWith(otherObject) {\n    if (otherObject instanceof _bullets__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      if (_util__WEBPACK_IMPORTED_MODULE_1__[\"Util\"].dist(this, otherObject)) {\n        return true;\n      }\n\n      return false;\n    }\n\n    return false;\n  }\n\n  remove() {\n    this.game.remove(this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bullets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullets */ \"./src/bullets.js\");\n\n\nclass Player {\n  constructor(ctx, game) {\n    this.game = game;\n    this.ctx = ctx;\n    this.speed = 0.0;\n    this.health = 0;\n    this.direction;\n    this.pos = {\n      x: 100,\n      y: 100\n    }; //player position\n\n    this.cursorPos = {\n      x: 0,\n      y: 0\n    };\n    this.lastFire = new Date();\n    this.speed = 0;\n    this.angle = \"Up\";\n    this.height = this.ctx.canvas.height;\n    this.width = this.ctx.canvas.width;\n    this.currentWeapon = [\"Assault Rifle\", \"Pistol\"];\n    this.image = new Image();\n    this.image.src = \"../src/sprites/player.png\";\n  }\n\n  moveLeft() {\n    if (this.pos.x > 0) this.pos.x -= 10;\n  }\n\n  moveRight() {\n    if (this.pos.x < this.width) this.pos.x += 10;\n  }\n\n  moveUp() {\n    if (this.pos.y > 0) this.pos.y -= 10;\n  }\n\n  moveDown() {\n    if (this.pos.y < this.height) this.pos.y += 10;\n  }\n\n  shootBullet() {\n    this.newFire = new Date();\n\n    if (this.newFire - this.lastFire > 500) {\n      this.game.bullets.push(new _bullets__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.pos, this.ctx, this.cursorPos, this.game));\n      this.lastFire = this.newFire;\n    }\n  }\n\n  changeWeapon() {\n    [this.currentWeapon[0], this.currentWeapon[1]] = [this.currentWeapon[1], this.currentWeapon[0]];\n  }\n\n  draw() {\n    this.ctx.clearRect(0, 0, this.width, this.height);\n    this.ctx.strokeStyle = \"#FF0000\";\n    this.ctx.strokeRect(this.pos.x, this.pos.y, 20, 20);\n    this.ctx.font = \"12px Arial\";\n    this.ctx.fillStyle = \"red\";\n    this.ctx.fillText(this.currentWeapon[0], 330, 380);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Util\", function() { return Util; });\nconst Util = {\n  dist(enemy, bullet) {\n    const xDist = Math.abs(bullet.x - enemy.pos.x);\n    const yDist = Math.abs(bullet.y - enemy.pos.y);\n\n    if (xDist < 10 && yDist < 10) {\n      return true;\n    }\n\n    return false;\n  }\n\n};\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });