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

/***/ "./src/boss.js":
/*!*********************!*\
  !*** ./src/boss.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bullets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullets */ \"./src/bullets.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _enemy_projectile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemy_projectile */ \"./src/enemy_projectile.js\");\n\n\n\n\nclass Boss extends _moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(game) {\n    super(game);\n    this.player = game.player;\n    this.ctx = game.ctx;\n    this.health = 10 * (this.game.currentLevel / 2);\n    this.pos = {\n      x: this.startingPos(),\n      y: this.startingPos()\n    };\n    this.width = 50;\n    this.height = 50;\n    this.color = \"#E6FFFF \";\n    this.gameHeight = game.height;\n    this.gameWidth = game.width;\n    this.lastFire = new Date();\n    this.lastMove = new Date();\n    this.lastRandomFire = new Date();\n    this.speed = 2;\n    this.moveToward = {\n      x: 0,\n      y: 0\n    };\n  }\n\n  startingPos() {\n    return Math.random() * this.game.height;\n  }\n\n  draw() {\n    this.ctx.fillStyle = this.color;\n    this.ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);\n    this.fire();\n  }\n\n  collidedWith(otherObject) {\n    if (otherObject instanceof _bullets__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      otherObject.remove();\n      this.health -= 1;\n      if (this.health <= 0) this.remove();\n    }\n  }\n\n  move() {\n    const date = new Date();\n    const timer = Math.floor(Math.rand() * 500);\n    this.moveToward.x = Math.floor(Math.rand() * this.gameWidth);\n    this.moveToward.y = Math.floor(Math.rand() * this.gameHeight);\n  }\n\n  fire() {\n    const date = new Date();\n\n    if (date - this.lastFire > 100) {\n      this.game.projectiles.push(new _enemy_projectile__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.game, this.pos, this.width, this.height, this.speed, true));\n      this.lastFire = date;\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boss);\n\n//# sourceURL=webpack:///./src/boss.js?");

/***/ }),

/***/ "./src/bullets.js":
/*!************************!*\
  !*** ./src/bullets.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nclass Bullet extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(pos, ctx, cursor, game) {\n    super(game);\n    this.ctx = ctx;\n    this.x = pos.x;\n    this.y = pos.y; //position for bullet to spawn;\n\n    this.xBound = game.width;\n    this.yBound = game.height; //boundary to check out of bounds\n\n    this.curX = cursor.x;\n    this.curY = cursor.y; //mouse pointer location\n\n    this.width = 5;\n    this.height = 5; //bullet height and width;\n\n    var deltaX = this.curX - (this.x + this.width / 2);\n    var deltaY = this.curY - (this.y + this.height / 2);\n    var magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY);\n    const velocityScale = 15 / magnitude;\n    this.velocityInstanceX = deltaX * velocityScale;\n    this.velocityInstanceY = deltaY * velocityScale;\n  }\n\n  fire() {\n    this.x += this.velocityInstanceX;\n    this.y += this.velocityInstanceY;\n\n    if (this.x >= this.xBound || this.x <= 0) {\n      this.remove(this);\n      this.drawNothing();\n    }\n\n    if (this.y >= this.yBound || this.y <= 0) {\n      this.remove(this);\n      this.drawNothing();\n    } else {\n      this.draw();\n    }\n  }\n\n  draw() {\n    this.ctx.fillStyle = \"#ff124f\";\n    this.ctx.fillRect(this.x, this.y, this.width, this.height);\n  }\n\n  drawNothing() {\n    return null;\n  }\n\n}\n\nconst BULLET_SPEED = 15;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n//# sourceURL=webpack:///./src/bullets.js?");

/***/ }),

/***/ "./src/control.js":
/*!************************!*\
  !*** ./src/control.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Control {\n  constructor(player, canvas, game) {\n    this.game = game;\n    this.player = player;\n    this.keys = {};\n    document.addEventListener(\"keydown\", event => {\n      event.preventDefault();\n      this.keys[event.code] = true;\n\n      if (this.keys[\"KeyA\"]) {\n        this.player.moveLeft();\n      }\n\n      if (this.keys[\"KeyD\"]) {\n        this.player.moveRight();\n      }\n\n      if (this.keys[\"KeyW\"]) {\n        this.player.moveUp();\n      }\n\n      if (this.keys[\"KeyS\"]) {\n        this.player.moveDown();\n      }\n\n      if (this.keys[\"ShiftLeft\"]) {\n        this.player.changeWeapon();\n      }\n\n      if (this.keys['Enter'] && !this.game.gameStarted) {\n        this.game.startGame();\n      }\n\n      if (this.keys['KeyP'] && this.game.gameStarted) {\n        this.game.paused = !this.game.paused;\n      }\n\n      if (this.keys['KeyR'] && this.game.gameEnded) {\n        this.game.startGame();\n        this.game.gameEnded = false;\n      }\n    });\n    document.addEventListener(\"keyup\", event => {\n      this.keys[event.code] = false;\n    });\n    document.addEventListener(\"mousedown\", event => (event.preventDefault(), this.player.shootBullet()));\n    canvas.addEventListener(\"mousemove\", event => (this.player.cursorPos.x = event.layerX, this.player.cursorPos.y = event.layerY));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Control); //game will be used to pause canvas\n\n//# sourceURL=webpack:///./src/control.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bullets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullets */ \"./src/bullets.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _enemy_projectile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemy_projectile */ \"./src/enemy_projectile.js\");\n\n\n\n\nclass Enemy extends _moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(ctx, player, game) {\n    super(game);\n    this.player = player;\n    this.ctx = ctx;\n    this.health = 3;\n    this.pos = {\n      x: this.startingPos(),\n      y: this.startingPos()\n    };\n    this.width = 5;\n    this.height = 5;\n    this.gameHeight = game.height;\n    this.gameWidth = game.width;\n    this.speed = 5;\n    this.lastFire = new Date();\n    this.lastMove = new Date();\n    this.moveToward = {\n      x: 0,\n      y: 0\n    };\n  }\n\n  startingPos() {\n    return Math.random() * this.game.height;\n  }\n\n  draw() {\n    this.ctx.fillStyle = \"yellow\";\n    this.ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);\n    this.fire();\n  }\n\n  collidedWith(otherObject) {\n    if (otherObject instanceof _bullets__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      otherObject.remove();\n      this.health -= 1;\n      if (this.health <= 0) this.remove();\n    }\n  }\n\n  move() {\n    const date = new Date();\n    const timer = Math.floor(Math.rand() * 1000);\n    this.moveToward.x = Math.floor(Math.rand() * this.gameWidth);\n    this.moveToward.y = Math.floor(Math.rand() * this.gameHeight);\n  }\n\n  fire() {\n    const date = new Date();\n\n    if (date - this.lastFire > 1000) {\n      this.game.projectiles.push(new _enemy_projectile__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.game, this.pos, this.width, this.height, this.speed));\n      this.lastFire = date;\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/enemy_projectile.js":
/*!*********************************!*\
  !*** ./src/enemy_projectile.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nclass EnemyProjectile extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(game, pos, width, height, speed, random) {\n    super(game);\n    this.ctx = game.ctx;\n    this.player = game.player;\n    this.pos = pos;\n    this.enemyWidth = width, this.enemyHeight = height;\n    this.speed = speed;\n    this.width = 5;\n    this.height = 5;\n    this.gameHeight = game.height;\n    this.gameWidth = game.width;\n    this.x = pos.x;\n    this.y = pos.y;\n    this.random = random;\n    var deltaX = this.player.pos.x - (this.pos.x + this.width / 2) + Math.random() * 10;\n    var deltaY = this.player.pos.y - (this.pos.y + this.height / 2) + Math.random() * 10;\n    var magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY);\n    const velocityScale = this.speed / magnitude;\n    this.velocityInstanceX = deltaX * velocityScale;\n    this.velocityInstanceY = deltaY * velocityScale;\n    this.randomVelocity = 10;\n  }\n\n  fire() {\n    this.x += this.velocityInstanceX;\n    this.y += this.velocityInstanceY;\n\n    if (this.x > this.gameWidth || this.x < 0) {\n      this.remove(this);\n    } else if (this.y > this.gameHeight || this.y < 0) {\n      this.remove(this);\n    }\n\n    this.draw();\n  }\n\n  draw() {\n    this.ctx.strokeStyle = \"green\";\n    this.ctx.beginPath();\n    this.ctx.arc(this.x + this.enemyWidth / 2, this.y + this.enemyHeight / 2, 2, 0, 2 * Math.PI);\n    this.ctx.fill();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EnemyProjectile);\n\n//# sourceURL=webpack:///./src/enemy_projectile.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control */ \"./src/control.js\");\n/* harmony import */ var _bullets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bullets */ \"./src/bullets.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _enemy_projectile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enemy_projectile */ \"./src/enemy_projectile.js\");\n/* harmony import */ var _boss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boss */ \"./src/boss.js\");\n\n\n\n\n\n\n\n\nclass Game {\n  constructor(ctx, canvas) {\n    this.ctx = ctx;\n    this.height = this.ctx.canvas.height - 100;\n    this.width = this.ctx.canvas.width;\n    this.gameStarted = false;\n    this.currentLevel = 0;\n    this.paused = false;\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this);\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this);\n    this.control = new _control__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.player, canvas, this);\n    this.splash();\n    this.gameEnded = true;\n  }\n\n  splash() {\n    this.ctx.fillStyle = \"fuchsia\";\n    this.ctx.font = \"30px Audiowide\";\n    this.ctx.fillText(\"NotSoTouHou\", 120, 180);\n    this.ctx.fillText(\"PRESS ENTER TO START\", 120, 280);\n  }\n\n  startGame() {\n    if (!this.gameStarted) {\n      this.gameStarted = true;\n      this.currentLevel = 0;\n      this.player.health = 5;\n      this.bullets = [];\n      this.projectiles = [];\n      this.enemies = [];\n      this.gameStart();\n    }\n  }\n\n  gameStart() {\n    this.ctx.clearRect(0, 0, this.width, this.height);\n    this.level.startNewLevel();\n    this.animate();\n  }\n\n  addEnemy() {\n    const enemy = new _enemy__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.ctx, this.player, this);\n    this.enemies.push(enemy);\n  }\n\n  addBoss() {\n    const boss = new _boss__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this);\n    this.enemies.push(boss);\n  }\n\n  animate() {\n    this.start = requestAnimationFrame(this.animate.bind(this));\n\n    if (!this.paused) {\n      this.ctx.clearRect(0, 0, this.width, this.height);\n      this.ctx.fillRect(0, 0, this.ctx.width, this.ctx.height);\n      this.player.draw();\n\n      if (this.bullets !== undefined) {\n        this.bullets.forEach(bullet => bullet.fire());\n      }\n\n      if (this.enemies !== undefined) {\n        this.enemies.forEach(enemy => enemy.draw());\n      }\n\n      for (let i = 0; i < this.enemies.length; i++) {\n        for (let j = 0; j < this.bullets.length; j++) {\n          const enemy = this.enemies[i];\n          const bullet = this.bullets[j];\n\n          if (enemy instanceof _enemy__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n            if (enemy.isCollidedWith(bullet)) {\n              const collision = enemy.collidedWith(bullet);\n            }\n          } else if (enemy instanceof _boss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]) {\n            if (enemy.isBossCollidedWith(bullet)) {\n              const collision = enemy.collidedWith(bullet);\n            }\n          }\n        }\n      }\n\n      if (this.projectiles !== undefined) {\n        this.projectiles.forEach(projectile => {\n          projectile.fire();\n        });\n      }\n\n      for (let i = 0; i < this.projectiles.length; i++) {\n        const projectile = this.projectiles[i];\n\n        if (projectile.isCollidedWithPlayer(this.player)) {\n          this.player.collidedWith();\n        }\n      }\n\n      this.ctx.font = \"30px Audiowide\";\n      this.ctx.fillStyle = \"#ff124f\";\n      this.ctx.strokeStyle = \"fuchsia\";\n      this.ctx.strokeWidth = \"2\";\n      this.ctx.beginPath();\n      this.ctx.lineWidth = \"3\";\n      this.ctx.moveTo(0, 500);\n      this.ctx.lineTo(600, 500);\n      this.ctx.stroke();\n      this.ctx.clearRect(0, 500, this.width, this.height + 100);\n      this.ctx.fillText(this.player.currentWeapon[0], 30, 580);\n      this.ctx.font = \"20px Audiowide\";\n      this.ctx.fillText(`Stage: ${this.currentLevel}`, 30, 550);\n      this.ctx.fillText(`Health: ${this.player.health}`, 430, 580);\n    }\n\n    if (this.paused) {\n      this.ctx.font = \"48px Audiowide\";\n      this.ctx.clearRect(0, 0, this.width, this.height + 100);\n      this.ctx.fillStyle = \"fuchsia\";\n      this.ctx.fillText(\"PAUSED\", 180, 300);\n    }\n\n    if (this.enemies.length === 0) {\n      this.level.startNewLevel();\n    }\n\n    if (this.player.health <= 0) {\n      this.gameOver();\n    }\n  }\n\n  gameOver() {\n    cancelAnimationFrame(this.start);\n    this.gameStarted = false;\n    this.gameEnded = true;\n    this.ctx.clearRect(0, 0, this.width, this.height + 100);\n    this.ctx.font = \"48px Audiowide\";\n    this.ctx.fillStyle = \"fuchsia\";\n    this.ctx.fillText(\"GAME OVER\", 150, 250);\n    this.ctx.font = \"38px Audiowide\";\n    this.ctx.fillText(\"Press R to Restart\", 120, 350);\n  }\n\n  remove(object) {\n    if (object instanceof _bullets__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.bullets.splice(this.bullets.indexOf(object), 1);\n    }\n\n    if (object instanceof _enemy__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n      this.enemies.splice(this.enemies.indexOf(object), 1);\n    }\n\n    if (object instanceof _enemy_projectile__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) {\n      this.projectiles.splice(this.projectiles.indexOf(object), 1);\n    }\n\n    if (object instanceof _boss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]) {\n      this.enemies.splice(this.enemies.indexOf(object), 1);\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const canvasWidth = canvas.width;\n  const canvasHeight = canvas.height;\n  ctx.fillStyle = \"#120458\";\n  ctx.fillRect(0, 0, canvasWidth, canvasHeight);\n  document.fonts.ready;\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvas);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n\n\nclass Level {\n  constructor(game, level) {\n    this.game = game;\n  }\n\n  startNewLevel() {\n    this.game.currentLevel += 1;\n    this.game.bullets = [];\n    this.game.projectiles = [];\n\n    if (this.game.currentLevel % 3 !== 0) {\n      this.normalLevel();\n    } else {\n      this.bossLevel();\n    }\n  }\n\n  normalLevel() {\n    for (let i = 0; i < 5; i++) {\n      this.game.addEnemy();\n    }\n  }\n\n  bossLevel() {\n    this.game.addBoss();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Level);\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bullets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullets */ \"./src/bullets.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\n\nclass MovingObject {\n  constructor(game) {\n    this.game = game;\n  }\n\n  isCollidedWith(otherObject) {\n    if (otherObject instanceof _bullets__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      if (_util__WEBPACK_IMPORTED_MODULE_1__[\"Util\"].dist(this, otherObject)) {\n        return true;\n      }\n\n      return false;\n    }\n\n    return false;\n  }\n\n  isBossCollidedWith(otherObject) {\n    if (otherObject instanceof _bullets__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      if (_util__WEBPACK_IMPORTED_MODULE_1__[\"Util\"].distBoss(this, otherObject)) {\n        return true;\n      }\n\n      return false;\n    }\n\n    return false;\n  }\n\n  isCollidedWithPlayer(otherObject) {\n    if (otherObject instanceof _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      if (_util__WEBPACK_IMPORTED_MODULE_1__[\"Util\"].distPlayer(this, otherObject)) {\n        this.remove();\n        return true;\n      }\n\n      return false;\n    }\n\n    return false;\n  }\n\n  remove() {\n    this.game.remove(this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bullets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullets */ \"./src/bullets.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\nclass Player {\n  constructor(ctx, game) {\n    this.game = game;\n    this.ctx = ctx;\n    this.pos = {\n      x: 300,\n      y: 450\n    }; //player position\n\n    this.cursorPos = {\n      x: 0,\n      y: 0\n    };\n    this.lastFire = new Date();\n    this.height = game.height;\n    this.width = game.width;\n    this.size = {\n      x: 10,\n      y: 10\n    };\n    this.currentWeapon = [\"Gun1\", \"Gun2\"];\n  }\n\n  moveLeft() {\n    if (this.pos.x > 0) this.pos.x -= 10;\n  }\n\n  moveRight() {\n    if (this.pos.x < this.width - this.size.x) {\n      this.pos.x += 10;\n    }\n  }\n\n  moveUp() {\n    if (this.pos.y > 0) this.pos.y -= 10;\n  }\n\n  moveDown() {\n    if (this.pos.y < this.height - this.size.y) this.pos.y += 10;\n  }\n\n  shootBullet() {\n    this.newFire = new Date();\n\n    if (this.newFire - this.lastFire > 500) {\n      this.game.bullets.push(new _bullets__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.pos, this.ctx, this.cursorPos, this.game));\n      this.lastFire = this.newFire;\n    }\n  }\n\n  changeWeapon() {\n    [this.currentWeapon[0], this.currentWeapon[1]] = [this.currentWeapon[1], this.currentWeapon[0]];\n  }\n\n  draw() {\n    this.ctx.clearRect(0, 0, this.width, this.height);\n    this.ctx.fillStyle = \"#ff124f\";\n    this.ctx.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);\n  }\n\n  collidedWith() {\n    this.health -= 1;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Util\", function() { return Util; });\nconst Util = {\n  dist(enemy, bullet) {\n    const xDist = Math.abs(bullet.x - enemy.pos.x);\n    const yDist = Math.abs(bullet.y - enemy.pos.y);\n\n    if (xDist < 10 && yDist < 10) {\n      return true;\n    }\n\n    return false;\n  },\n\n  distBoss(boss, bullet) {\n    const xDist = Math.abs(bullet.x - boss.pos.x);\n    const yDist = Math.abs(bullet.y - boss.pos.y);\n\n    if (xDist < boss.width && yDist < boss.height) {\n      return true;\n    }\n\n    return false;\n  },\n\n  distPlayer(projectile, player) {\n    const xDist = Math.abs(projectile.x - player.pos.x);\n    const yDist = Math.abs(projectile.y - player.pos.y);\n\n    if (xDist * 2 < player.size.x && yDist * 2 < player.size.y) {\n      return true;\n    }\n\n    return false;\n  }\n\n};\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });