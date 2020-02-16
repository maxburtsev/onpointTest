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
    var fill = document.querySelector('.fill');
    var itemSlider1 = document.querySelector('.item-slide_1');
    var itemSlider2 = document.querySelector('.item-slide_2');
    var itemSlider3 = document.querySelector('.item-slide_3');

    range.oninput = function () {
        function fillBar() {
            var widthFill = range.value + "%";
            fill.style.width = widthFill;
        }
        fillBar();
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

    var box1 = document.querySelector('.box1');
    var box2 = document.querySelector('.box2');
    var box3 = document.querySelector('.box3');
    var xDown = void 0,
        yDown = void 0;

    box1.addEventListener('touchstart', handleTouchStartBox1, false);
    box2.addEventListener('touchstart', handleTouchStartBox2, false);
    box3.addEventListener('touchstart', handleTouchStartBox3, false);

    box1.addEventListener('touchmove', handleTouchMoveBox1, false);
    box2.addEventListener('touchmove', handleTouchMoveBox2, false);
    box3.addEventListener('touchmove', handleTouchMoveBox3, false);

    var translates = document.querySelectorAll('.translate-y');
    function handleTouchStartBox1(event) {
        var touch = event.touches[0];
        xDown = touch.clientX;
        yDown = touch.clientY;
    };
    function handleTouchStartBox2(event) {
        var touch = event.touches[0];
        xDown = touch.clientX;
        yDown = touch.clientY;
    };
    function handleTouchStartBox3(event) {
        var touch = event.touches[0];
        xDown = touch.clientX;
        yDown = touch.clientY;
    };

    function handleTouchMoveBox1(event) {
        var touch = event.touches[0];
        var change = yDown - touch.clientY;

        if (change > 10) {
            document.getElementById('box2').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = translates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var translate = _step.value;

                    translate.style.transform = 'translateY(-200px)';
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
        }
        if (event.cancelable) {
            event.preventDefault();
        }
    };

    function handleTouchMoveBox2(event) {
        var touch = event.touches[0];
        var change = yDown - touch.clientY;
        if (change > 10) {
            document.getElementById('box3').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if (change < 80) {
            document.getElementById('box1').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = translates[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var translate = _step2.value;

                    translate.style.transform = 'translateY(0)';
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
        if (event.cancelable) {
            event.preventDefault();
        }
    };

    function handleTouchMoveBox3(event) {
        var touch = event.touches[0];
        var change = yDown - touch.clientY;
        var changeX = xDown - touch.clientX;
        if (Math.abs(changeX) < Math.abs(change)) {
            if (change < -50) {
                document.getElementById('box2').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            if (event.cancelable) {
                event.preventDefault();
            }
        }
    };
    // let touch = event.changedTouches[0];
    // yDownEnd = touch.clientY;
    // xDownEnd = touch.clientX;

    // let yDiff = yDown - yDownEnd  ;
    // let xDiff =  xDown - xDownEnd ;


    // let isDown =  yDiff > changeDist ; 

    // console.log( yDiff, xDiff);

    // handler();

    // function handler() {
    //     let translates = document.querySelectorAll('translate-y');
    //     if (isDown) {

    //         /* up swipe */ 
    //         if (section.classList.contains('box1')) {
    //             for (let translate of translates) {
    //                 translate.style.transform = 'translateY(-100px)';
    //             }
    //             document.getElementById('box2').scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start',
    //                 }); 
    //         } else if (section.classList.contains('box2')) {
    //             document.getElementById('box3').scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start',
    //                 }); 
    //         }
    //     } else { 
    //         /* down swipe */
    //         if (section.classList.contains('box3')) {
    //             document.getElementById('box2').scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start',
    //                 }); 
    //         } else if (section.classList.contains('box2')) {
    //             for (let translate of translates) {
    //                 translate.style.transform = 'translateY(0)';
    //             }
    //             document.getElementById('box1').scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start',
    //                 }); 
    //         }
    //     }    
    // }           


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

                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = navLinkCurrent[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var cur = _step3.value;

                        cur.classList.remove('current-circle-link');
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

                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = navLink[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var _cur = _step4.value;

                        _cur.classList.add('current-circle-link');
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
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

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = anchors[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var anchor = _step5.value;

            _loop(anchor);
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXS9sb2NhbC9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdL2xvY2FsL3NyYy9tYWluLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2xvY2FsL3NyYy9zdHlsZS9pbmRleC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwibG9jYWwvcHVibGljL2NyZWF0ZWRcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9sb2NhbC9zcmMvbWFpbi5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0Jztcclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlJyk7XHJcbiAgICBsZXQgZmlsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxsJyk7XHJcbiAgICBsZXQgaXRlbVNsaWRlcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1zbGlkZV8xJyk7XHJcbiAgICBsZXQgaXRlbVNsaWRlcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1zbGlkZV8yJyk7XHJcbiAgICBsZXQgaXRlbVNsaWRlcjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1zbGlkZV8zJyk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgcmFuZ2Uub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZpbGxCYXIoKSB7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aEZpbGwgPSByYW5nZS52YWx1ZSArIFwiJVwiO1xyXG4gICAgICAgICAgICBmaWxsLnN0eWxlLndpZHRoID0gd2lkdGhGaWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWxsQmFyKCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPCAyNSkgeyBcclxuICAgICAgICAgICAgaXRlbVNsaWRlcjEuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNmb3JtLWxlZnQnKTtcclxuICAgICAgICAgICAgaXRlbVNsaWRlcjIuY2xhc3NMaXN0LmFkZCgndHJhbnNmb3JtLXJpZ2h0Jyk7XHJcbiAgICAgICAgICAgIGl0ZW1TbGlkZXIzLmNsYXNzTGlzdC5hZGQoJ3RyYW5zZm9ybS1yaWdodCcpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlID4gMjUgJiYgdGhpcy52YWx1ZSA8IDc1KSB7XHJcbiAgICAgICAgICAgIGl0ZW1TbGlkZXIxLmNsYXNzTGlzdC5hZGQoJ3RyYW5zZm9ybS1sZWZ0Jyk7XHJcbiAgICAgICAgICAgIGl0ZW1TbGlkZXIyLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zZm9ybS1yaWdodCcpO1xyXG4gICAgICAgICAgICBpdGVtU2xpZGVyMi5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2Zvcm0tbGVmdCcpO1xyXG4gICAgICAgICAgICBpdGVtU2xpZGVyMy5jbGFzc0xpc3QuYWRkKCd0cmFuc2Zvcm0tcmlnaHQnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmFsdWUgPiA3NSkge1xyXG4gICAgICAgICAgICBpdGVtU2xpZGVyMS5jbGFzc0xpc3QuYWRkKCd0cmFuc2Zvcm0tbGVmdCcpO1xyXG4gICAgICAgICAgICBpdGVtU2xpZGVyMi5jbGFzc0xpc3QuYWRkKCd0cmFuc2Zvcm0tbGVmdCcpO1xyXG4gICAgICAgICAgICBpdGVtU2xpZGVyMy5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2Zvcm0tcmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgXHJcbiAgICBsZXQgYm94MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gxJyk7XHJcbiAgICBsZXQgYm94MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gyJyk7XHJcbiAgICBsZXQgYm94MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gzJyk7XHJcbiAgICBsZXQgeERvd24sXHJcbiAgICAgICAgeURvd247XHJcblxyXG4gICAgYm94MS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVG91Y2hTdGFydEJveDEsIGZhbHNlKVxyXG4gICAgYm94Mi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVG91Y2hTdGFydEJveDIsIGZhbHNlKVxyXG4gICAgYm94My5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVG91Y2hTdGFydEJveDMsIGZhbHNlKVxyXG4gICAgXHJcbiAgICBib3gxLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZUJveDEsIGZhbHNlKVxyXG4gICAgYm94Mi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmVCb3gyLCBmYWxzZSlcclxuICAgIGJveDMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlQm94MywgZmFsc2UpXHJcblxyXG4gICAgbGV0IHRyYW5zbGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhbnNsYXRlLXknKSA7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0Qm94MShldmVudCkgeyAgIFxyXG4gICAgICAgIGxldCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHhEb3duID0gdG91Y2guY2xpZW50WDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHlEb3duID0gdG91Y2guY2xpZW50WTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgfTsgICAgICAgICAgICAgICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0Qm94MihldmVudCkgeyAgIFxyXG4gICAgICAgIGxldCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHhEb3duID0gdG91Y2guY2xpZW50WDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHlEb3duID0gdG91Y2guY2xpZW50WTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgfTsgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0Qm94MyhldmVudCkgeyAgIFxyXG4gICAgICAgIGxldCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHhEb3duID0gdG91Y2guY2xpZW50WDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHlEb3duID0gdG91Y2guY2xpZW50WTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIH07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVCb3gxKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRvdWNoID0gZXZlbnQudG91Y2hlc1swXTtcclxuICAgICAgICBsZXQgY2hhbmdlID0geURvd24gLSB0b3VjaC5jbGllbnRZO1xyXG4gICAgICAgICBcclxuICAgICAgICBpZiAoY2hhbmdlID4gMTApIHsgICAgICAgIFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm94MicpLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgICAgIGJsb2NrOiAnc3RhcnQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgdHJhbnNsYXRlIG9mIHRyYW5zbGF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZS5zdHlsZS50cmFuc2Zvcm0gPSAoJ3RyYW5zbGF0ZVkoLTIwMHB4KScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgaWYoZXZlbnQuY2FuY2VsYWJsZSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlQm94MihldmVudCkge1xyXG4gICAgICAgIGxldCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XHJcbiAgICAgICAgbGV0IGNoYW5nZSA9IHlEb3duIC0gdG91Y2guY2xpZW50WTsgICBcclxuICAgICAgICBpZiAoY2hhbmdlID4gMTAgKSB7ICAgICAgICBcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveDMnKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgICAgICAgICBibG9jazogJ3N0YXJ0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gIGVsc2UgaWYgKGNoYW5nZSA8IDgwICkgeyAgICAgICAgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3gxJykuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgICAgICAgYmxvY2s6ICdzdGFydCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0cmFuc2xhdGUgb2YgdHJhbnNsYXRlcykge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlLnN0eWxlLnRyYW5zZm9ybSA9ICgndHJhbnNsYXRlWSgwKScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmKGV2ZW50LmNhbmNlbGFibGUpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICB9O1xyXG4gICAgIFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlQm94MyhldmVudCkge1xyXG4gICAgICAgIGxldCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XHJcbiAgICAgICAgbGV0IGNoYW5nZSA9IHlEb3duIC0gdG91Y2guY2xpZW50WTtcclxuICAgICAgICBsZXQgY2hhbmdlWCA9IHhEb3duIC0gdG91Y2guY2xpZW50WDtcclxuICAgICAgICBpZiAoTWF0aC5hYnMoY2hhbmdlWCkgPCBNYXRoLmFicyhjaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2UgPCAtNTApIHsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveDInKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrOiAnc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmNhbmNlbGFibGUpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9O1xyXG4gICAgLy8gbGV0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICAvLyB5RG93bkVuZCA9IHRvdWNoLmNsaWVudFk7XHJcbiAgICAvLyB4RG93bkVuZCA9IHRvdWNoLmNsaWVudFg7XHJcbiAgICBcclxuICAgIC8vIGxldCB5RGlmZiA9IHlEb3duIC0geURvd25FbmQgIDtcclxuICAgIC8vIGxldCB4RGlmZiA9ICB4RG93biAtIHhEb3duRW5kIDtcclxuICAgIFxyXG5cclxuICAgIC8vIGxldCBpc0Rvd24gPSAgeURpZmYgPiBjaGFuZ2VEaXN0IDsgXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coIHlEaWZmLCB4RGlmZik7XHJcbiAgICAgICAgXHJcbiAgICAvLyBoYW5kbGVyKCk7XHJcbiAgICBcclxuICAgIC8vIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XHJcbiAgICAvLyAgICAgbGV0IHRyYW5zbGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0cmFuc2xhdGUteScpO1xyXG4gICAgLy8gICAgIGlmIChpc0Rvd24pIHtcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIC8qIHVwIHN3aXBlICovIFxyXG4gICAgLy8gICAgICAgICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2JveDEnKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgZm9yIChsZXQgdHJhbnNsYXRlIG9mIHRyYW5zbGF0ZXMpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0cmFuc2xhdGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTEwMHB4KSc7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm94MicpLnNjcm9sbEludG9WaWV3KHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgYmxvY2s6ICdzdGFydCcsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgLy8gICAgICAgICB9IGVsc2UgaWYgKHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdib3gyJykpIHtcclxuICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3gzJykuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBibG9jazogJ3N0YXJ0JyxcclxuICAgIC8vICAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9IGVsc2UgeyBcclxuICAgIC8vICAgICAgICAgLyogZG93biBzd2lwZSAqL1xyXG4gICAgLy8gICAgICAgICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2JveDMnKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveDInKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGJsb2NrOiAnc3RhcnQnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pOyBcclxuICAgIC8vICAgICAgICAgfSBlbHNlIGlmIChzZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucygnYm94MicpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBmb3IgKGxldCB0cmFuc2xhdGUgb2YgdHJhbnNsYXRlcykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRyYW5zbGF0ZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwKSc7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm94MScpLnNjcm9sbEludG9WaWV3KHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgYmxvY2s6ICdzdGFydCcsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSAgICBcclxuICAgIC8vIH0gICAgICAgICAgIFxyXG4gICAgXHJcblxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBzZWN0aW9uLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSl7XHJcbiAgICAgICAgICAgIGxldCB0b3AgPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDsgXHJcbiAgICAgICAgICAgIGxldCBib3R0b20gPSB0b3AgKyBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoaXRlbSwgbnVsbCkuaGVpZ2h0LnJlcGxhY2UoXCJweFwiLCBcIlwiKSk7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsID4gdG9wICYmIHNjcm9sbCA8IGJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWY9XCIjJytpZCsnXCJdJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmF2TGlua0N1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VycmVudC1jaXJjbGUtbGluaycpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjdXIgb2YgbmF2TGlua0N1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXIuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jaXJjbGUtbGluaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY3VyIG9mIG5hdkxpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXIuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1jaXJjbGUtbGluaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgYW5jaG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZio9XCIjXCJdJylcclxuXHJcbiAgICBmb3IgKGxldCBhbmNob3Igb2YgYW5jaG9ycykge1xyXG4gICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJsb2NrSUQgPSBhbmNob3IuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyKDEpXHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmxvY2tJRCkuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgYmxvY2s6ICdzdGFydCdcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAnQC9qcy9pbmRleC5qcydcclxuaW1wb3J0ICdAL3N0eWxlL2luZGV4LnNjc3MnIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5TUE7QUFnTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUF6TkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUErTUE7QUFBQTtBQUNBO0FBREE7QUFXQTtBQTFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMk5BOzs7Ozs7Ozs7Ozs7OztBQzVOQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7O0FDREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==