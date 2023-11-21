"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/socket/io";
exports.ids = ["pages/api/socket/io"];
exports.modules = {

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "(api)/./pages/api/socket/io.ts":
/*!********************************!*\
  !*** ./pages/api/socket/io.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst ioHandler = (req, res)=>{\n    if (!res.socket.server.io) {\n        const path = \"/api/socket/io\";\n        const httpServer = res.socket.server;\n        const io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(httpServer, {\n            path: path,\n            // @ts-ignore\n            addTrailingSlash: false\n        });\n        res.socket.server.io = io;\n    }\n    res.end();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ioHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc29ja2V0L2lvLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFK0M7QUFJeEMsTUFBTUUsU0FBUztJQUNwQkMsS0FBSztRQUNIQyxZQUFZO0lBQ2Q7QUFDRixFQUFFO0FBRUYsTUFBTUMsWUFBWSxDQUFDQyxLQUFxQkM7SUFDdEMsSUFBSSxDQUFDQSxJQUFJQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsRUFBRSxFQUFFO1FBQ3pCLE1BQU1DLE9BQU87UUFDYixNQUFNQyxhQUF3QkwsSUFBSUMsTUFBTSxDQUFDQyxNQUFNO1FBQy9DLE1BQU1DLEtBQUssSUFBSVQsNkNBQVFBLENBQUNXLFlBQVk7WUFDbENELE1BQU1BO1lBQ04sYUFBYTtZQUNiRSxrQkFBa0I7UUFDcEI7UUFDQU4sSUFBSUMsTUFBTSxDQUFDQyxNQUFNLENBQUNDLEVBQUUsR0FBR0E7SUFDekI7SUFFQUgsSUFBSU8sR0FBRztBQUNUO0FBRUEsaUVBQWVULFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Tb2Npb1BhbHMvLi9wYWdlcy9hcGkvc29ja2V0L2lvLnRzP2Q5M2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmVyIGFzIE5ldFNlcnZlciB9IGZyb20gXCJodHRwXCI7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBTZXJ2ZXIgYXMgU2VydmVySU8gfSBmcm9tIFwic29ja2V0LmlvXCI7XG5cbmltcG9ydCB7IE5leHRBcGlSZXNwb25zZVNlcnZlcklvIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsXG4gIH0sXG59O1xuXG5jb25zdCBpb0hhbmRsZXIgPSAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2VTZXJ2ZXJJbykgPT4ge1xuICBpZiAoIXJlcy5zb2NrZXQuc2VydmVyLmlvKSB7XG4gICAgY29uc3QgcGF0aCA9IFwiL2FwaS9zb2NrZXQvaW9cIjtcbiAgICBjb25zdCBodHRwU2VydmVyOiBOZXRTZXJ2ZXIgPSByZXMuc29ja2V0LnNlcnZlciBhcyBhbnk7XG4gICAgY29uc3QgaW8gPSBuZXcgU2VydmVySU8oaHR0cFNlcnZlciwge1xuICAgICAgcGF0aDogcGF0aCxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGFkZFRyYWlsaW5nU2xhc2g6IGZhbHNlLFxuICAgIH0pO1xuICAgIHJlcy5zb2NrZXQuc2VydmVyLmlvID0gaW87XG4gIH1cblxuICByZXMuZW5kKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlvSGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJTZXJ2ZXIiLCJTZXJ2ZXJJTyIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJpb0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJzb2NrZXQiLCJzZXJ2ZXIiLCJpbyIsInBhdGgiLCJodHRwU2VydmVyIiwiYWRkVHJhaWxpbmdTbGFzaCIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/socket/io.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/socket/io.ts"));
module.exports = __webpack_exports__;

})();