module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MadLibs.js":
/*!*******************************!*\
  !*** ./components/MadLibs.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/jim/Documents/coding/hoopsbot/components/MadLibs.js\";\n\n\n\nconst MadLibs = () => {\n  const {\n    0: take,\n    1: setTake\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n\n  const takeGenerator = () => {\n    const playerOrTeam = ['player', 'team'];\n    const predictOrDeclare = ['predict', 'declare'];\n    const players = ['LeBron James', 'Kawhi Leonard', 'Giannis Antetokounmpo', 'Steph Curry', 'Anthony Davis', 'Luka Doncic', 'Kevin Durant', 'James Harden', 'Damian Lillard', 'Nikola Jokic', 'Devin Booker'];\n    const teams = ['Phoenix Suns', 'LA Lakers', 'LA Clippers', 'Denver Nuggets', 'New York Knicks', 'Brooklyn Nets', 'Cleveland Cavaliers', 'Chicago Bulls'];\n    const playerDeclareAux = ['is', 'is not'];\n    const playerPredictAux = ['will', 'will never'];\n    const teamDeclareAux = ['are', 'are not'];\n    const teamPredictAux = ['will', 'will never'];\n    const playerDeclare = ['a top 10 player', 'terrible at defense', 'going to ask for a trade', 'an all-star caliber player', 'in the same league as Michael and Kobe'];\n    const playerPredict = ['win a championship', 'be MVP', 'score 45+ in a game', 'be a complete liability on defense'];\n    const teamDeclare = ['a top 5 team', 'in a second-tier market'];\n    const teamPredict = ['make the playoffs', 'move cities eventually'];\n    let resultTake = '';\n    const pickStart = playerOrTeam[Math.floor(Math.random() * 2)];\n    const pickDirection = predictOrDeclare[Math.floor(Math.random() * 2)];\n\n    if (pickStart === 'team') {\n      resultTake += 'The ' + teams[Math.floor(Math.random() * teams.length)];\n\n      if (pickDirection === 'predict') {\n        resultTake += ' ' + teamPredictAux[Math.floor(Math.random() * teamPredictAux.length)];\n        resultTake += ' ' + teamPredict[Math.floor(Math.random() * teamPredictAux.length)] + '.';\n      }\n\n      if (pickDirection === 'declare') {\n        resultTake += ' ' + teamDeclareAux[Math.floor(Math.random() * teamDeclareAux.length)];\n        resultTake += ' ' + teamDeclare[Math.floor(Math.random() * teamDeclareAux.length)] + '.';\n      }\n    }\n\n    if (pickStart === 'player') {\n      resultTake += players[Math.floor(Math.random() * teams.length)];\n\n      if (pickDirection === 'predict') {\n        resultTake += ' ' + playerPredictAux[Math.floor(Math.random() * playerPredictAux.length)];\n        resultTake += ' ' + playerPredict[Math.floor(Math.random() * playerPredictAux.length)] + '.';\n      }\n\n      if (pickDirection === 'declare') {\n        resultTake += ' ' + playerDeclareAux[Math.floor(Math.random() * playerDeclareAux.length)];\n        resultTake += ' ' + playerDeclare[Math.floor(Math.random() * playerDeclareAux.length)] + '.';\n      }\n    }\n\n    setTake(resultTake);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    takeGenerator();\n  }, []);\n\n  const handleNewTake = e => {\n    e.preventDefault();\n    takeGenerator();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: take\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: \"twitter-share-button\",\n        href: `https://twitter.com/intent/tweet?text=HOT TAKE: ${take} - Generated by HoopsBot`,\n        target: \"_blank\",\n        children: \"Genius. Tweet it.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: e => handleNewTake(e),\n      children: \"Generate a Take\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MadLibs); // https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hZExpYnMuanM/OWJiZiJdLCJuYW1lcyI6WyJNYWRMaWJzIiwidGFrZSIsInNldFRha2UiLCJ1c2VTdGF0ZSIsInRha2VHZW5lcmF0b3IiLCJwbGF5ZXJPclRlYW0iLCJwcmVkaWN0T3JEZWNsYXJlIiwicGxheWVycyIsInRlYW1zIiwicGxheWVyRGVjbGFyZUF1eCIsInBsYXllclByZWRpY3RBdXgiLCJ0ZWFtRGVjbGFyZUF1eCIsInRlYW1QcmVkaWN0QXV4IiwicGxheWVyRGVjbGFyZSIsInBsYXllclByZWRpY3QiLCJ0ZWFtRGVjbGFyZSIsInRlYW1QcmVkaWN0IiwicmVzdWx0VGFrZSIsInBpY2tTdGFydCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInBpY2tEaXJlY3Rpb24iLCJsZW5ndGgiLCJ1c2VFZmZlY3QiLCJoYW5kbGVOZXdUYWtlIiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBRXBCLFFBQU07QUFBQSxPQUFFQyxJQUFGO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDOztBQUVBLFFBQU1DLGFBQWEsR0FBRyxNQUFNO0FBQzFCLFVBQU1DLFlBQVksR0FBRyxDQUFDLFFBQUQsRUFBVyxNQUFYLENBQXJCO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQyxTQUFELEVBQVksU0FBWixDQUF6QjtBQUNBLFVBQU1DLE9BQU8sR0FBRyxDQUFDLGNBQUQsRUFBaUIsZUFBakIsRUFBa0MsdUJBQWxDLEVBQTJELGFBQTNELEVBQTBFLGVBQTFFLEVBQTJGLGFBQTNGLEVBQTBHLGNBQTFHLEVBQTBILGNBQTFILEVBQTBJLGdCQUExSSxFQUE0SixjQUE1SixFQUE0SyxjQUE1SyxDQUFoQjtBQUNBLFVBQU1DLEtBQUssR0FBRyxDQUFDLGNBQUQsRUFBaUIsV0FBakIsRUFBOEIs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cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY29uc3QgTWFkTGlicyA9ICgpID0+IHtcblxuICBjb25zdCBbIHRha2UsIHNldFRha2UgXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCB0YWtlR2VuZXJhdG9yID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllck9yVGVhbSA9IFsncGxheWVyJywgJ3RlYW0nXTtcbiAgICBjb25zdCBwcmVkaWN0T3JEZWNsYXJlID0gWydwcmVkaWN0JywgJ2RlY2xhcmUnXTtcbiAgICBjb25zdCBwbGF5ZXJzID0gWydMZUJyb24gSmFtZXMnLCAnS2F3aGkgTGVvbmFyZCcsICdHaWFubmlzIEFudGV0b2tvdW5tcG8nLCAnU3RlcGggQ3VycnknLCAnQW50aG9ueSBEYXZpcycsICdMdWthIERvbmNpYycsICdLZXZpbiBEdXJhbnQnLCAnSmFtZXMgSGFyZGVuJywgJ0RhbWlhbiBMaWxsYXJkJywgJ05pa29sYSBKb2tpYycsICdEZXZpbiBCb29rZXInXTtcbiAgICBjb25zdCB0ZWFtcyA9IFsnUGhvZW5peCBTdW5zJywgJ0xBIExha2VycycsICdMQSBDbGlwcGVycycsICdEZW52ZXIgTnVnZ2V0cycsICdOZXcgWW9yayBLbmlja3MnLCAnQnJvb2tseW4gTmV0cycsICdDbGV2ZWxhbmQgQ2F2YWxpZXJzJywgJ0NoaWNhZ28gQnVsbHMnXTtcbiAgICBjb25zdCBwbGF5ZXJEZWNsYXJlQXV4ID0gWydpcycsICdpcyBub3QnXTtcbiAgICBjb25zdCBwbGF5ZXJQcmVkaWN0QXV4ID0gWyd3aWxsJywgJ3dpbGwgbmV2ZXInXTtcbiAgICBjb25zdCB0ZWFtRGVjbGFyZUF1eCA9IFsnYXJlJywgJ2FyZSBub3QnXTtcbiAgICBjb25zdCB0ZWFtUHJlZGljdEF1eCA9IFsnd2lsbCcsICd3aWxsIG5ldmVyJ107XG4gICAgY29uc3QgcGxheWVyRGVjbGFyZSA9IFsnYSB0b3AgMTAgcGxheWVyJywgJ3RlcnJpYmxlIGF0IGRlZmVuc2UnLCAnZ29pbmcgdG8gYXNrIGZvciBhIHRyYWRlJywgJ2FuIGFsbC1zdGFyIGNhbGliZXIgcGxheWVyJywgJ2luIHRoZSBzYW1lIGxlYWd1ZSBhcyBNaWNoYWVsIGFuZCBLb2JlJ107XG4gICAgY29uc3QgcGxheWVyUHJlZGljdCA9IFsnd2luIGEgY2hhbXBpb25zaGlwJywgJ2JlIE1WUCcsICdzY29yZSA0NSsgaW4gYSBnYW1lJywgJ2JlIGEgY29tcGxldGUgbGlhYmlsaXR5IG9uIGRlZmVuc2UnXTtcbiAgICBjb25zdCB0ZWFtRGVjbGFyZSA9IFsnYSB0b3AgNSB0ZWFtJywgJ2luIGEgc2Vjb25kLXRpZXIgbWFya2V0J107XG4gICAgY29uc3QgdGVhbVByZWRpY3QgPSBbJ21ha2UgdGhlIHBsYXlvZmZzJywgJ21vdmUgY2l0aWVzIGV2ZW50dWFsbHknXTtcblxuICAgIGxldCByZXN1bHRUYWtlID0gJyc7XG5cbiAgICBjb25zdCBwaWNrU3RhcnQgPSBwbGF5ZXJPclRlYW1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildO1xuICAgIGNvbnN0IHBpY2tEaXJlY3Rpb24gPSBwcmVkaWN0T3JEZWNsYXJlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcblxuICAgIGlmIChwaWNrU3RhcnQgPT09ICd0ZWFtJykge1xuICAgICAgcmVzdWx0VGFrZSArPSAnVGhlICcgKyB0ZWFtc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZWFtcy5sZW5ndGgpXTtcbiAgICAgIGlmIChwaWNrRGlyZWN0aW9uID09PSAncHJlZGljdCcpIHtcbiAgICAgICAgcmVzdWx0VGFrZSArPSAnICcgKyB0ZWFtUHJlZGljdEF1eFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZWFtUHJlZGljdEF1eC5sZW5ndGgpXTtcbiAgICAgICAgcmVzdWx0VGFrZSArPSAnICcgKyB0ZWFtUHJlZGljdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZWFtUHJlZGljdEF1eC5sZW5ndGgpXSArICcuJztcbiAgICAgIH1cbiAgICAgIGlmIChwaWNrRGlyZWN0aW9uID09PSAnZGVjbGFyZScpIHtcbiAgICAgICAgcmVzdWx0VGFrZSArPSAnICcgKyB0ZWFtRGVjbGFyZUF1eFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZWFtRGVjbGFyZUF1eC5sZW5ndGgpXTtcbiAgICAgICAgcmVzdWx0VGFrZSArPSAnICcgKyB0ZWFtRGVjbGFyZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZWFtRGVjbGFyZUF1eC5sZW5ndGgpXSArICcuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGlja1N0YXJ0ID09PSAncGxheWVyJykge1xuICAgICAgcmVzdWx0VGFrZSArPSBwbGF5ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlYW1zLmxlbmd0aCldO1xuICAgICAgaWYgKHBpY2tEaXJlY3Rpb24gPT09ICdwcmVkaWN0Jykge1xuICAgICAgICByZXN1bHRUYWtlICs9ICcgJyArIHBsYXllclByZWRpY3RBdXhbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxheWVyUHJlZGljdEF1eC5sZW5ndGgpXTtcbiAgICAgICAgcmVzdWx0VGFrZSArPSAnICcgKyBwbGF5ZXJQcmVkaWN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBsYXllclByZWRpY3RBdXgubGVuZ3RoKV0gKyAnLic7XG4gICAgICB9XG4gICAgICBpZiAocGlja0RpcmVjdGlvbiA9PT0gJ2RlY2xhcmUnKSB7XG4gICAgICAgIHJlc3VsdFRha2UgKz0gJyAnICsgcGxheWVyRGVjbGFyZUF1eFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwbGF5ZXJEZWNsYXJlQXV4Lmxlbmd0aCldO1xuICAgICAgICByZXN1bHRUYWtlICs9ICcgJyArIHBsYXllckRlY2xhcmVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxheWVyRGVjbGFyZUF1eC5sZW5ndGgpXSArICcuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUYWtlKHJlc3VsdFRha2UpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0YWtlR2VuZXJhdG9yKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVOZXdUYWtlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFrZUdlbmVyYXRvcigpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge3Rha2V9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInR3aXR0ZXItc2hhcmUtYnV0dG9uXCJcbiAgICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9SE9UIFRBS0U6ICR7dGFrZX0gLSBHZW5lcmF0ZWQgYnkgSG9vcHNCb3RgfVxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5HZW5pdXMuIFR3ZWV0IGl0LjwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlTmV3VGFrZShlKX0+R2VuZXJhdGUgYSBUYWtlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWRMaWJzO1xuXG4vLyBodHRwczovL2RldmVsb3Blci50d2l0dGVyLmNvbS9lbi9kb2NzL3R3aXR0ZXItZm9yLXdlYnNpdGVzL3R3ZWV0LWJ1dHRvbi9vdmVydmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MadLibs.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MadLibs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MadLibs */ \"./components/MadLibs.js\");\n\nvar _jsxFileName = \"/Users/jim/Documents/coding/hoopsbot/pages/index.js\";\n\n\n // import Link from 'next/link';\n\nconst Index = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"HoopsBot\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"HoopsBot\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_MadLibs__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBRWxCLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0UscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELENBWEQ7O0FBYWVBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBNYWRMaWJzIGZyb20gJy4uL2NvbXBvbmVudHMvTWFkTGlicyc7XG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhvb3BzQm90PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMT5Ib29wc0JvdDwvaDE+XG4gICAgICA8TWFkTGlicyAvPlxuICAgIDwvZGl2PlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });