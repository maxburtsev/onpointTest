var bundle =
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
/******/ 	__webpack_require__.p = "local/public/created";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./local/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./local/src/js/index.js":
/*!*******************************!*\
  !*** ./local/src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.onload = function () {
    var range = document.querySelector('.range');
    var itemSlider1 = document.querySelector('.item-slide_1');
    var itemSlider2 = document.querySelector('.item-slide_2');
    var itemSlider3 = document.querySelector('.item-slide_3');

    range.oninput = function () {
        if (this.value < 25) {
            itemSlider1.classList.remove('transform-left');
            itemSlider2.classList.add('transform-right');
            itemSlider3.classList.add('transform-right');
        } else if (this.value > 25 && this.value < 75) {
            itemSlider1.classList.add('transform-left');
            itemSlider2.classList.remove('transform-right');
            itemSlider2.classList.remove('transform-left');
            itemSlider3.classList.add('transform-right');
        } else if (this.value > 75) {
            itemSlider1.classList.add('transform-left');
            itemSlider2.classList.add('transform-left');
            itemSlider3.classList.remove('transform-right');
        }
    };

    window.addEventListener('scroll', function () {
        var section = document.querySelectorAll('section');

        section.forEach(function (item, i) {
            var top = item.getBoundingClientRect().top;
            var bottom = top + parseFloat(getComputedStyle(item, null).height.replace("px", ""));
            var scroll = window.pageYOffset;
            var id = item.getAttribute('id');
            if (scroll > top && scroll < bottom) {
                var navLink = document.querySelectorAll('a[href="#' + id + '"]');
                var navLinkCurrent = document.querySelectorAll('.current-circle-link');

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = navLinkCurrent[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var cur = _step.value;

                        cur.classList.remove('current-circle-link');
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = navLink[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _cur = _step2.value;

                        _cur.classList.add('current-circle-link');
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        });
    });

    var anchors = document.querySelectorAll('a[href*="#"]');

    var _loop = function _loop(anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            var blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = anchors[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var anchor = _step3.value;

            _loop(anchor);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
};

/***/ }),

/***/ "./local/src/main.js":
/*!***************************!*\
  !*** ./local/src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! @/js/index.js */ "./local/src/js/index.js");

__webpack_require__(/*! @/style/index.scss */ "./local/src/style/index.scss");

/***/ }),

/***/ "./local/src/style/index.scss":
/*!************************************!*\
  !*** ./local/src/style/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXS9sb2NhbC9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdL2xvY2FsL3NyYy9tYWluLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2xvY2FsL3NyYy9zdHlsZS9pbmRleC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwibG9jYWwvcHVibGljL2NyZWF0ZWRcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9sb2NhbC9zcmMvbWFpbi5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0Jztcclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlJyk7XHJcbiAgICBsZXQgaXRlbVNsaWRlcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1zbGlkZV8xJyk7XHJcbiAgICBsZXQgaXRlbVNsaWRlcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1zbGlkZV8yJyk7XHJcbiAgICBsZXQgaXRlbVNsaWRlcjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1zbGlkZV8zJyk7XHJcblxyXG5cclxuXHJcbiAgICByYW5nZS5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPCAyNSkge1xyXG4gICAgICAgICAgICBpdGVtU2xpZGVyMS5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2Zvcm0tbGVmdCcpO1xyXG4gICAgICAgICAgICBpdGVtU2xpZGVyMi5jbGFzc0xpc3QuYWRkKCd0cmFuc2Zvcm0tcmlnaHQnKTtcclxuICAgICAgICAgICAgaXRlbVNsaWRlcjMuY2xhc3NMaXN0LmFkZCgndHJhbnNmb3JtLXJpZ2h0Jyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlID4gMjUgJiYgdGhpcy52YWx1ZSA8IDc1KSB7XHJcbiAgICAgICAgICAgIGl0ZW1TbGlkZXIxLmNsYXNzTGlzdC5hZGQoJ3RyYW5zZm9ybS1sZWZ0Jyk7XHJcbiAgICAgICAgICAgIGl0ZW1TbGlkZXIyLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zZm9ybS1yaWdodCcpO1xyXG4gICAgICAgICAgICBpdGVtU2xpZGVyMi5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2Zvcm0tbGVmdCcpO1xyXG4gICAgICAgICAgICBpdGVtU2xpZGVyMy5jbGFzc0xpc3QuYWRkKCd0cmFuc2Zvcm0tcmlnaHQnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmFsdWUgPiA3NSkge1xyXG4gICAgICAgICAgICBpdGVtU2xpZGVyMS5jbGFzc0xpc3QuYWRkKCd0cmFuc2Zvcm0tbGVmdCcpO1xyXG4gICAgICAgICAgICBpdGVtU2xpZGVyMi5jbGFzc0xpc3QuYWRkKCd0cmFuc2Zvcm0tbGVmdCcpO1xyXG4gICAgICAgICAgICBpdGVtU2xpZGVyMy5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2Zvcm0tcmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBzZWN0aW9uLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSl7XHJcbiAgICAgICAgICAgIGxldCB0b3AgPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDsgXHJcbiAgICAgICAgICAgIGxldCBib3R0b20gPSB0b3AgKyBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoaXRlbSwgbnVsbCkuaGVpZ2h0LnJlcGxhY2UoXCJweFwiLCBcIlwiKSk7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsID4gdG9wICYmIHNjcm9sbCA8IGJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWY9XCIjJytpZCsnXCJdJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmF2TGlua0N1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VycmVudC1jaXJjbGUtbGluaycpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjdXIgb2YgbmF2TGlua0N1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXIuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jaXJjbGUtbGluaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY3VyIG9mIG5hdkxpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXIuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1jaXJjbGUtbGluaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgYW5jaG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZio9XCIjXCJdJylcclxuXHJcbiAgICBmb3IgKGxldCBhbmNob3Igb2YgYW5jaG9ycykge1xyXG4gICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJsb2NrSUQgPSBhbmNob3IuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyKDEpXHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmxvY2tJRCkuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgYmxvY2s6ICdzdGFydCdcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICdAL2pzL2luZGV4LmpzJ1xyXG5pbXBvcnQgJ0Avc3R5bGUvaW5kZXguc2NzcyciLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbERBO0FBb0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBN0RBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBbURBO0FBQUE7QUFDQTtBQURBO0FBV0E7QUE5REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStEQTs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUFBOzs7Ozs7Ozs7OztBQ0RBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=