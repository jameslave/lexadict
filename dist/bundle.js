/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/db/index.ts":
/*!*************************!*\
  !*** ./src/db/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar DB_URL = process.env.DB_URL;\n// use native promises with mongoose\nmongoose.Promise = global.Promise;\nmongoose.connect(DB_URL)\n    .then(function () { return console.log(\"Connected to database at \" + DB_URL.split('@')[1]); })[\"catch\"](console.error);\n\n\n//# sourceURL=webpack:///./src/db/index.ts?");

/***/ }),

/***/ "./src/db/models/user.model.ts":
/*!*************************************!*\
  !*** ./src/db/models/user.model.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar userSchema = new mongoose_1.Schema({\n    id: String,\n    name: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    email: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    photoUrl: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    record: {\n        wins: {\n            type: Number,\n            \"default\": 0\n        },\n        losses: {\n            type: Number,\n            \"default\": 0\n        }\n    },\n    timePlayed: {\n        type: Number,\n        \"default\": 0\n    }\n});\nexports[\"default\"] = mongoose_1.model('User', userSchema);\n\n\n//# sourceURL=webpack:///./src/db/models/user.model.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\n// populate process.env variables\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\ndotenv.config();\n__webpack_require__(/*! ./server */ \"./src/server/index.ts\");\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/server/auth/passport.ts":
/*!*************************************!*\
  !*** ./src/server/auth/passport.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = y[op[0] & 2 ? \"return\" : op[0] ? \"throw\" : \"next\"]) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [0, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nexports.__esModule = true;\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar passport_google_oauth_1 = __webpack_require__(/*! passport-google-oauth */ \"passport-google-oauth\");\nvar user_model_1 = __webpack_require__(/*! ../../db/models/user.model */ \"./src/db/models/user.model.ts\");\npassport.use(new passport_google_oauth_1.OAuth2Strategy({\n    clientID: process.env.GOOGLE_CLIENT,\n    clientSecret: process.env.GOOGLE_SECRET,\n    callbackURL: process.env.URL + \"/auth/google/callback\"\n}, function (token, refreshToken, profile, next) { return __awaiter(_this, void 0, void 0, function () {\n    var existingUser, newUser, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 3, , 4]);\n                return [4 /*yield*/, user_model_1[\"default\"].findOne({ id: profile.id })];\n            case 1:\n                existingUser = _a.sent();\n                if (existingUser) {\n                    return [2 /*return*/, next(null, existingUser)];\n                }\n                return [4 /*yield*/, user_model_1[\"default\"].create({\n                        id: profile.id,\n                        name: profile.displayName,\n                        email: profile.emails[0].value,\n                        photoUrl: profile.photos[0].value\n                    })];\n            case 2:\n                newUser = _a.sent();\n                return [2 /*return*/, next(null, newUser)];\n            case 3:\n                error_1 = _a.sent();\n                console.error(error_1);\n                return [2 /*return*/, next(error_1)];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); }));\nexports[\"default\"] = passport;\n\n\n//# sourceURL=webpack:///./src/server/auth/passport.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar socketIo = __webpack_require__(/*! socket.io */ \"socket.io\");\n__webpack_require__(/*! ../db */ \"./src/db/index.ts\");\nvar auth_router_1 = __webpack_require__(/*! ./routers/auth.router */ \"./src/server/routers/auth.router.ts\");\nvar app = express();\napp.use('/auth', auth_router_1[\"default\"]);\n// start server listening\nvar server = app.listen(process.env.PORT || 3000);\n// bind socket.io to server\nserver = socketIo(server);\nexports[\"default\"] = server;\n\n\n//# sourceURL=webpack:///./src/server/index.ts?");

/***/ }),

/***/ "./src/server/routers/auth.router.ts":
/*!*******************************************!*\
  !*** ./src/server/routers/auth.router.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar passport_1 = __webpack_require__(/*! ../auth/passport */ \"./src/server/auth/passport.ts\");\nvar router = express.Router();\nvar authenticateGoogle = passport_1[\"default\"].authenticate('google', {\n    scope: [\n        'https://www.googleapis.com/auth/userinfo.profile',\n        'https://www.googleapis.com/auth/userinfo.email',\n    ]\n});\nrouter.get('/auth/google', authenticateGoogle);\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack:///./src/server/routers/auth.router.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-google-oauth":
/*!****************************************!*\
  !*** external "passport-google-oauth" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-google-oauth\");\n\n//# sourceURL=webpack:///external_%22passport-google-oauth%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ })

/******/ });