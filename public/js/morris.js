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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/morris-js-module/morris.js":
/*!*************************************************!*\
  !*** ./node_modules/morris-js-module/morris.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Raphael = __webpack_require__(/*! raphael */ "./node_modules/raphael/raphael.min.js");
/* @license
morris.js v0.5.1
Copyright 2014 Olly Smith All rights reserved.
Licensed under the BSD-2-Clause License.
*/


function makeMorris(jQuery) {
  const Morris = {};
  var $, minutesSpecHelper, secondsSpecHelper,
    __slice = [].slice,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };


  $ = jQuery;

  Morris.EventEmitter = (function() {
    function EventEmitter() {}

    EventEmitter.prototype.on = function(name, handler) {
      if (this.handlers == null) {
        this.handlers = {};
      }
      if (this.handlers[name] == null) {
        this.handlers[name] = [];
      }
      this.handlers[name].push(handler);
      return this;
    };

    EventEmitter.prototype.fire = function() {
      var args, handler, name, _i, _len, _ref, _results;
      name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((this.handlers != null) && (this.handlers[name] != null)) {
        _ref = this.handlers[name];
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          handler = _ref[_i];
          _results.push(handler.apply(null, args));
        }
        return _results;
      }
    };

    return EventEmitter;

  })();

  Morris.commas = function(num) {
    var absnum, intnum, ret, strabsnum;
    if (num != null) {
      ret = num < 0 ? "-" : "";
      absnum = Math.abs(num);
      intnum = Math.floor(absnum).toFixed(0);
      ret += intnum.replace(/(?=(?:\d{3})+$)(?!^)/g, ',');
      strabsnum = absnum.toString();
      if (strabsnum.length > intnum.length) {
        ret += strabsnum.slice(intnum.length);
      }
      return ret;
    } else {
      return '-';
    }
  };

  Morris.pad2 = function(number) {
    return (number < 10 ? '0' : '') + number;
  };

  Morris.Grid = (function(_super) {
    __extends(Grid, _super);

    function Grid(options) {
      this.hasToShow = __bind(this.hasToShow, this);
      this.resizeHandler = __bind(this.resizeHandler, this);
      var _this = this;
      if (typeof options.element === 'string') {
        this.el = $(document.getElementById(options.element));
      } else {
        this.el = $(options.element);
      }
      if ((this.el == null) || this.el.length === 0) {
        throw new Error("Graph container element not found");
      }
      if (this.el.css('position') === 'static') {
        this.el.css('position', 'relative');
      }
      this.options = $.extend({}, this.gridDefaults, this.defaults || {}, options);
      if (typeof this.options.units === 'string') {
        this.options.postUnits = options.units;
      }
      this.raphael = new Raphael(this.el[0]);
      this.elementWidth = null;
      this.elementHeight = null;
      this.dirty = false;
      this.selectFrom = null;
      if (this.init) {
        this.init();
      }
      this.setData(this.options.data);
      this.el.bind('mousemove', function(evt) {
        var left, offset, right, width, x;
        offset = _this.el.offset();
        x = evt.pageX - offset.left;
        if (_this.selectFrom) {
          left = _this.data[_this.hitTest(Math.min(x, _this.selectFrom))]._x;
          right = _this.data[_this.hitTest(Math.max(x, _this.selectFrom))]._x;
          width = right - left;
          return _this.selectionRect.attr({
            x: left,
            width: width
          });
        } else {
          return _this.fire('hovermove', x, evt.pageY - offset.top);
        }
      });
      this.el.bind('mouseleave', function(evt) {
        if (_this.selectFrom) {
          _this.selectionRect.hide();
          _this.selectFrom = null;
        }
        return _this.fire('hoverout');
      });
      this.el.bind('touchstart touchmove touchend', function(evt) {
        var offset, touch;
        touch = evt.originalEvent.touches[0] || evt.originalEvent.changedTouches[0];
        offset = _this.el.offset();
        return _this.fire('hovermove', touch.pageX - offset.left, touch.pageY - offset.top);
      });
      this.el.bind('click', function(evt) {
        var offset;
        offset = _this.el.offset();
        return _this.fire('gridclick', evt.pageX - offset.left, evt.pageY - offset.top);
      });
      if (this.options.rangeSelect) {
        this.selectionRect = this.raphael.rect(0, 0, 0, this.el.innerHeight()).attr({
          fill: this.options.rangeSelectColor,
          stroke: false
        }).toBack().hide();
        this.el.bind('mousedown', function(evt) {
          var offset;
          offset = _this.el.offset();
          return _this.startRange(evt.pageX - offset.left);
        });
        this.el.bind('mouseup', function(evt) {
          var offset;
          offset = _this.el.offset();
          _this.endRange(evt.pageX - offset.left);
          return _this.fire('hovermove', evt.pageX - offset.left, evt.pageY - offset.top);
        });
      }
      if (this.options.resize) {
        $(window).bind('resize', function(evt) {
          if (_this.timeoutId != null) {
            clearTimeout(_this.timeoutId);
          }
          return _this.timeoutId = setTimeout(_this.resizeHandler, 100);
        });
      }
      this.el.css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
      if (this.postInit) {
        this.postInit();
      }
    }

    Grid.prototype.gridDefaults = {
      dateFormat: null,
      axes: true,
      grid: true,
      gridLineColor: '#aaa',
      gridStrokeWidth: 0.5,
      gridTextColor: '#888',
      gridTextSize: 12,
      gridTextFamily: 'sans-serif',
      gridTextWeight: 'normal',
      hideHover: false,
      yLabelFormat: null,
      xLabelAngle: 0,
      numLines: 5,
      padding: 25,
      parseTime: true,
      postUnits: '',
      preUnits: '',
      ymax: 'auto',
      ymin: 'auto 0',
      goals: [],
      goalStrokeWidth: 1.0,
      goalLineColors: ['#666633', '#999966', '#cc6666', '#663333'],
      events: [],
      eventStrokeWidth: 1.0,
      eventLineColors: ['#005a04', '#ccffbb', '#3a5f0b', '#005502'],
      rangeSelect: null,
      rangeSelectColor: '#eef',
      resize: false
    };

    Grid.prototype.setData = function(data, redraw) {
      var e, flatEvents, from, idx, index, maxGoal, minGoal, ret, row, step, to, total, y, ykey, ymax, ymin, yval, _i, _len, _ref, _ref1;
      if (redraw == null) {
        redraw = true;
      }
      this.options.data = data;
      if ((data == null) || data.length === 0) {
        this.data = [];
        this.raphael.clear();
        if (this.hover != null) {
          this.hover.hide();
        }
        return;
      }
      ymax = this.cumulative ? 0 : null;
      ymin = this.cumulative ? 0 : null;
      if (this.options.goals.length > 0) {
        minGoal = Math.min.apply(Math, this.options.goals);
        maxGoal = Math.max.apply(Math, this.options.goals);
        ymin = ymin != null ? Math.min(ymin, minGoal) : minGoal;
        ymax = ymax != null ? Math.max(ymax, maxGoal) : maxGoal;
      }
      this.data = (function() {
        var _i, _len, _results;
        _results = [];
        for (index = _i = 0, _len = data.length; _i < _len; index = ++_i) {
          row = data[index];
          ret = {
            src: row
          };
          ret.label = row[this.options.xkey];
          if (this.options.parseTime) {
            ret.x = Morris.parseDate(ret.label);
            if (this.options.dateFormat) {
              ret.label = this.options.dateFormat(ret.x);
            } else if (typeof ret.label === 'number') {
              ret.label = new Date(ret.label).toString();
            }
          } else {
            ret.x = index;
            if (this.options.xLabelFormat) {
              ret.label = this.options.xLabelFormat(ret);
            }
          }
          total = 0;
          ret.y = (function() {
            var _j, _len1, _ref, _results1;
            _ref = this.options.ykeys;
            _results1 = [];
            for (idx = _j = 0, _len1 = _ref.length; _j < _len1; idx = ++_j) {
              ykey = _ref[idx];
              yval = row[ykey];
              if (typeof yval === 'string') {
                yval = parseFloat(yval);
              }
              if ((yval != null) && typeof yval !== 'number') {
                yval = null;
              }
              if ((yval != null) && this.hasToShow(idx)) {
                if (this.cumulative) {
                  total += yval;
                } else {
                  if (ymax != null) {
                    ymax = Math.max(yval, ymax);
                    ymin = Math.min(yval, ymin);
                  } else {
                    ymax = ymin = yval;
                  }
                }
              }
              if (this.cumulative && (total != null)) {
                ymax = Math.max(total, ymax);
                ymin = Math.min(total, ymin);
              }
              _results1.push(yval);
            }
            return _results1;
          }).call(this);
          _results.push(ret);
        }
        return _results;
      }).call(this);
      if (this.options.parseTime) {
        this.data = this.data.sort(function(a, b) {
          return (a.x > b.x) - (b.x > a.x);
        });
      }
      this.xmin = this.data[0].x;
      this.xmax = this.data[this.data.length - 1].x;
      this.events = [];
      if (this.options.events.length > 0) {
        if (this.options.parseTime) {
          _ref = this.options.events;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            e = _ref[_i];
            if (e instanceof Array) {
              from = e[0], to = e[1];
              this.events.push([Morris.parseDate(from), Morris.parseDate(to)]);
            } else {
              this.events.push(Morris.parseDate(e));
            }
          }
        } else {
          this.events = this.options.events;
        }
        flatEvents = $.map(this.events, function(e) {
          return e;
        });
        this.xmax = Math.max(this.xmax, Math.max.apply(Math, flatEvents));
        this.xmin = Math.min(this.xmin, Math.min.apply(Math, flatEvents));
      }
      if (this.xmin === this.xmax) {
        this.xmin -= 1;
        this.xmax += 1;
      }
      this.ymin = this.yboundary('min', ymin);
      this.ymax = this.yboundary('max', ymax);
      if (this.ymin === this.ymax) {
        if (ymin) {
          this.ymin -= 1;
        }
        this.ymax += 1;
      }
      if (((_ref1 = this.options.axes) === true || _ref1 === 'both' || _ref1 === 'y') || this.options.grid === true) {
        if (this.options.ymax === this.gridDefaults.ymax && this.options.ymin === this.gridDefaults.ymin) {
          this.grid = this.autoGridLines(this.ymin, this.ymax, this.options.numLines);
          this.ymin = Math.min(this.ymin, this.grid[0]);
          this.ymax = Math.max(this.ymax, this.grid[this.grid.length - 1]);
        } else {
          step = (this.ymax - this.ymin) / (this.options.numLines - 1);
          this.grid = (function() {
            var _j, _ref2, _ref3, _results;
            _results = [];
            for (y = _j = _ref2 = this.ymin, _ref3 = this.ymax; step > 0 ? _j <= _ref3 : _j >= _ref3; y = _j += step) {
              _results.push(y);
            }
            return _results;
          }).call(this);
        }
      }
      this.dirty = true;
      if (redraw) {
        return this.redraw();
      }
    };

    Grid.prototype.yboundary = function(boundaryType, currentValue) {
      var boundaryOption, suggestedValue;
      boundaryOption = this.options["y" + boundaryType];
      if (typeof boundaryOption === 'string') {
        if (boundaryOption.slice(0, 4) === 'auto') {
          if (boundaryOption.length > 5) {
            suggestedValue = parseInt(boundaryOption.slice(5), 10);
            if (currentValue == null) {
              return suggestedValue;
            }
            return Math[boundaryType](currentValue, suggestedValue);
          } else {
            if (currentValue != null) {
              return currentValue;
            } else {
              return 0;
            }
          }
        } else {
          return parseInt(boundaryOption, 10);
        }
      } else {
        return boundaryOption;
      }
    };

    Grid.prototype.autoGridLines = function(ymin, ymax, nlines) {
      var gmax, gmin, grid, smag, span, step, unit, y, ymag;
      span = ymax - ymin;
      ymag = Math.floor(Math.log(span) / Math.log(10));
      unit = Math.pow(10, ymag);
      gmin = Math.floor(ymin / unit) * unit;
      gmax = Math.ceil(ymax / unit) * unit;
      step = (gmax - gmin) / (nlines - 1);
      if (unit === 1 && step > 1 && Math.ceil(step) !== step) {
        step = Math.ceil(step);
        gmax = gmin + step * (nlines - 1);
      }
      if (gmin < 0 && gmax > 0) {
        gmin = Math.floor(ymin / step) * step;
        gmax = Math.ceil(ymax / step) * step;
      }
      if (step < 1) {
        smag = Math.floor(Math.log(step) / Math.log(10));
        grid = (function() {
          var _i, _results;
          _results = [];
          for (y = _i = gmin; step > 0 ? _i <= gmax : _i >= gmax; y = _i += step) {
            _results.push(parseFloat(y.toFixed(1 - smag)));
          }
          return _results;
        })();
      } else {
        grid = (function() {
          var _i, _results;
          _results = [];
          for (y = _i = gmin; step > 0 ? _i <= gmax : _i >= gmax; y = _i += step) {
            _results.push(y);
          }
          return _results;
        })();
      }
      return grid;
    };

    Grid.prototype._calc = function() {
      var angle, bottomOffsets, gridLine, h, i, w, yLabelWidths, _ref, _ref1;
      w = this.el.width();
      h = this.el.height();
      if (this.elementWidth !== w || this.elementHeight !== h || this.dirty) {
        this.elementWidth = w;
        this.elementHeight = h;
        this.dirty = false;
        this.left = this.options.padding;
        this.right = this.elementWidth - this.options.padding;
        this.top = this.options.padding;
        this.bottom = this.elementHeight - this.options.padding;
        if ((_ref = this.options.axes) === true || _ref === 'both' || _ref === 'y') {
          yLabelWidths = (function() {
            var _i, _len, _ref1, _results;
            _ref1 = this.grid;
            _results = [];
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              gridLine = _ref1[_i];
              _results.push(this.measureText(this.yAxisFormat(gridLine)).width);
            }
            return _results;
          }).call(this);
          if (!this.options.horizontal) {
            this.left += Math.max.apply(Math, yLabelWidths);
          } else {
            this.bottom -= Math.max.apply(Math, yLabelWidths);
          }
        }
        if ((_ref1 = this.options.axes) === true || _ref1 === 'both' || _ref1 === 'x') {
          if (!this.options.horizontal) {
            angle = -this.options.xLabelAngle;
          } else {
            angle = -90;
          }
          bottomOffsets = (function() {
            var _i, _ref2, _results;
            _results = [];
            for (i = _i = 0, _ref2 = this.data.length; 0 <= _ref2 ? _i < _ref2 : _i > _ref2; i = 0 <= _ref2 ? ++_i : --_i) {
              _results.push(this.measureText(this.data[i].label, angle).height);
            }
            return _results;
          }).call(this);
          if (!this.options.horizontal) {
            this.bottom -= Math.max.apply(Math, bottomOffsets);
          } else {
            this.left += Math.max.apply(Math, bottomOffsets);
          }
        }
        this.width = Math.max(1, this.right - this.left);
        this.height = Math.max(1, this.bottom - this.top);
        if (!this.options.horizontal) {
          this.dx = this.width / (this.xmax - this.xmin);
          this.dy = this.height / (this.ymax - this.ymin);
          this.yStart = this.bottom;
          this.yEnd = this.top;
          this.xStart = this.left;
          this.xEnd = this.right;
          this.xSize = this.width;
          this.ySize = this.height;
        } else {
          this.dx = this.height / (this.xmax - this.xmin);
          this.dy = this.width / (this.ymax - this.ymin);
          this.yStart = this.left;
          this.yEnd = this.right;
          this.xStart = this.top;
          this.xEnd = this.bottom;
          this.xSize = this.height;
          this.ySize = this.width;
        }
        if (this.calc) {
          return this.calc();
        }
      }
    };

    Grid.prototype.transY = function(y) {
      if (!this.options.horizontal) {
        return this.bottom - (y - this.ymin) * this.dy;
      } else {
        return this.left + (y - this.ymin) * this.dy;
      }
    };

    Grid.prototype.transX = function(x) {
      if (this.data.length === 1) {
        return (this.xStart + this.xEnd) / 2;
      } else {
        return this.xStart + (x - this.xmin) * this.dx;
      }
    };

    Grid.prototype.redraw = function() {
      this.raphael.clear();
      this._calc();
      this.drawGrid();
      this.drawGoals();
      this.drawEvents();
      if (this.draw) {
        return this.draw();
      }
    };

    Grid.prototype.measureText = function(text, angle) {
      var ret, tt;
      if (angle == null) {
        angle = 0;
      }
      tt = this.raphael.text(100, 100, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).rotate(angle);
      ret = tt.getBBox();
      tt.remove();
      return ret;
    };

    Grid.prototype.yAxisFormat = function(label) {
      return this.yLabelFormat(label, 0);
    };

    Grid.prototype.yLabelFormat = function(label, i) {
      if (typeof this.options.yLabelFormat === 'function') {
        return this.options.yLabelFormat(label, i);
      } else {
        return "" + this.options.preUnits + (Morris.commas(label)) + this.options.postUnits;
      }
    };

    Grid.prototype.getYAxisLabelX = function() {
      return this.left - this.options.padding / 2;
    };

    Grid.prototype.drawGrid = function() {
      var basePos, lineY, pos, _i, _len, _ref, _ref1, _ref2, _results;
      if (this.options.grid === false && ((_ref = this.options.axes) !== true && _ref !== 'both' && _ref !== 'y')) {
        return;
      }
      if (!this.options.horizontal) {
        basePos = this.getYAxisLabelX();
      } else {
        basePos = this.getXAxisLabelY();
      }
      _ref1 = this.grid;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        lineY = _ref1[_i];
        pos = this.transY(lineY);
        if ((_ref2 = this.options.axes) === true || _ref2 === 'both' || _ref2 === 'y') {
          if (!this.options.horizontal) {
            this.drawYAxisLabel(basePos, pos, this.yAxisFormat(lineY));
          } else {
            this.drawXAxisLabel(pos, basePos, this.yAxisFormat(lineY));
          }
        }
        if (this.options.grid) {
          pos = Math.floor(pos) + 0.5;
          if (!this.options.horizontal) {
            _results.push(this.drawGridLine("M" + this.xStart + "," + pos + "H" + this.xEnd));
          } else {
            _results.push(this.drawGridLine("M" + pos + "," + this.xStart + "V" + this.xEnd));
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Grid.prototype.drawGoals = function() {
      var color, goal, i, _i, _len, _ref, _results;
      _ref = this.options.goals;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        goal = _ref[i];
        color = this.options.goalLineColors[i % this.options.goalLineColors.length];
        _results.push(this.drawGoal(goal, color));
      }
      return _results;
    };

    Grid.prototype.drawEvents = function() {
      var color, event, i, _i, _len, _ref, _results;
      _ref = this.events;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        event = _ref[i];
        color = this.options.eventLineColors[i % this.options.eventLineColors.length];
        _results.push(this.drawEvent(event, color));
      }
      return _results;
    };

    Grid.prototype.drawGoal = function(goal, color) {
      var path, y;
      y = Math.floor(this.transY(goal)) + 0.5;
      if (!this.options.horizontal) {
        path = "M" + this.xStart + "," + y + "H" + this.xEnd;
      } else {
        path = "M" + y + "," + this.xStart + "V" + this.xEnd;
      }
      return this.raphael.path(path).attr('stroke', color).attr('stroke-width', this.options.goalStrokeWidth);
    };

    Grid.prototype.drawEvent = function(event, color) {
      var from, path, to, x;
      if (event instanceof Array) {
        from = event[0], to = event[1];
        from = Math.floor(this.transX(from)) + 0.5;
        to = Math.floor(this.transX(to)) + 0.5;
        if (!this.options.horizontal) {
          return this.raphael.rect(from, this.yEnd, to - from, this.yStart - this.yEnd).attr({
            fill: color,
            stroke: false
          }).toBack();
        } else {
          return this.raphael.rect(this.yStart, from, this.yEnd - this.yStart, to - from).attr({
            fill: color,
            stroke: false
          }).toBack();
        }
      } else {
        x = Math.floor(this.transX(event)) + 0.5;
        if (!this.options.horizontal) {
          path = "M" + x + "," + this.yStart + "V" + this.yEnd;
        } else {
          path = "M" + this.yStart + "," + x + "H" + this.yEnd;
        }
        return this.raphael.path(path).attr('stroke', color).attr('stroke-width', this.options.eventStrokeWidth);
      }
    };

    Grid.prototype.drawYAxisLabel = function(xPos, yPos, text) {
      return this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor).attr('text-anchor', 'end');
    };

    Grid.prototype.drawGridLine = function(path) {
      return this.raphael.path(path).attr('stroke', this.options.gridLineColor).attr('stroke-width', this.options.gridStrokeWidth);
    };

    Grid.prototype.startRange = function(x) {
      this.hover.hide();
      this.selectFrom = x;
      return this.selectionRect.attr({
        x: x,
        width: 0
      }).show();
    };

    Grid.prototype.endRange = function(x) {
      var end, start;
      if (this.selectFrom) {
        start = Math.min(this.selectFrom, x);
        end = Math.max(this.selectFrom, x);
        this.options.rangeSelect.call(this.el, {
          start: this.data[this.hitTest(start)].x,
          end: this.data[this.hitTest(end)].x
        });
        return this.selectFrom = null;
      }
    };

    Grid.prototype.resizeHandler = function() {
      this.timeoutId = null;
      this.raphael.setSize(this.el.width(), this.el.height());
      return this.redraw();
    };

    Grid.prototype.hasToShow = function(i) {
      return this.options.shown === true || this.options.shown[i] === true;
    };

    return Grid;

  })(Morris.EventEmitter);

  Morris.parseDate = function(date) {
    var isecs, m, msecs, n, o, offsetmins, p, q, r, ret, secs;
    if (typeof date === 'number') {
      return date;
    }
    m = date.match(/^(\d+) Q(\d)$/);
    n = date.match(/^(\d+)-(\d+)$/);
    o = date.match(/^(\d+)-(\d+)-(\d+)$/);
    p = date.match(/^(\d+) W(\d+)$/);
    q = date.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/);
    r = date.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/);
    if (m) {
      return new Date(parseInt(m[1], 10), parseInt(m[2], 10) * 3 - 1, 1).getTime();
    } else if (n) {
      return new Date(parseInt(n[1], 10), parseInt(n[2], 10) - 1, 1).getTime();
    } else if (o) {
      return new Date(parseInt(o[1], 10), parseInt(o[2], 10) - 1, parseInt(o[3], 10)).getTime();
    } else if (p) {
      ret = new Date(parseInt(p[1], 10), 0, 1);
      if (ret.getDay() !== 4) {
        ret.setMonth(0, 1 + ((4 - ret.getDay()) + 7) % 7);
      }
      return ret.getTime() + parseInt(p[2], 10) * 604800000;
    } else if (q) {
      if (!q[6]) {
        return new Date(parseInt(q[1], 10), parseInt(q[2], 10) - 1, parseInt(q[3], 10), parseInt(q[4], 10), parseInt(q[5], 10)).getTime();
      } else {
        offsetmins = 0;
        if (q[6] !== 'Z') {
          offsetmins = parseInt(q[8], 10) * 60 + parseInt(q[9], 10);
          if (q[7] === '+') {
            offsetmins = 0 - offsetmins;
          }
        }
        return Date.UTC(parseInt(q[1], 10), parseInt(q[2], 10) - 1, parseInt(q[3], 10), parseInt(q[4], 10), parseInt(q[5], 10) + offsetmins);
      }
    } else if (r) {
      secs = parseFloat(r[6]);
      isecs = Math.floor(secs);
      msecs = Math.round((secs - isecs) * 1000);
      if (!r[8]) {
        return new Date(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10), parseInt(r[4], 10), parseInt(r[5], 10), isecs, msecs).getTime();
      } else {
        offsetmins = 0;
        if (r[8] !== 'Z') {
          offsetmins = parseInt(r[10], 10) * 60 + parseInt(r[11], 10);
          if (r[9] === '+') {
            offsetmins = 0 - offsetmins;
          }
        }
        return Date.UTC(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10), parseInt(r[4], 10), parseInt(r[5], 10) + offsetmins, isecs, msecs);
      }
    } else {
      return new Date(parseInt(date, 10), 0, 1).getTime();
    }
  };

  Morris.Hover = (function() {
    Hover.defaults = {
      "class": 'morris-hover morris-default-style'
    };

    function Hover(options) {
      if (options == null) {
        options = {};
      }
      this.options = $.extend({}, Morris.Hover.defaults, options);
      this.el = $("<div class='" + this.options["class"] + "'></div>");
      this.el.hide();
      this.options.parent.append(this.el);
    }

    Hover.prototype.update = function(html, x, y, centre_y) {
      if (!html) {
        return this.hide();
      } else {
        this.html(html);
        this.show();
        return this.moveTo(x, y, centre_y);
      }
    };

    Hover.prototype.html = function(content) {
      return this.el.html(content);
    };

    Hover.prototype.moveTo = function(x, y, centre_y) {
      var hoverHeight, hoverWidth, left, parentHeight, parentWidth, top;
      parentWidth = this.options.parent.innerWidth();
      parentHeight = this.options.parent.innerHeight();
      hoverWidth = this.el.outerWidth();
      hoverHeight = this.el.outerHeight();
      left = Math.min(Math.max(0, x - hoverWidth / 2), parentWidth - hoverWidth);
      if (y != null) {
        if (centre_y === true) {
          top = y - hoverHeight / 2;
          if (top < 0) {
            top = 0;
          }
        } else {
          top = y - hoverHeight - 10;
          if (top < 0) {
            top = y + 10;
            if (top + hoverHeight > parentHeight) {
              top = parentHeight / 2 - hoverHeight / 2;
            }
          }
        }
      } else {
        top = parentHeight / 2 - hoverHeight / 2;
      }
      return this.el.css({
        left: left + "px",
        top: parseInt(top) + "px"
      });
    };

    Hover.prototype.show = function() {
      return this.el.show();
    };

    Hover.prototype.hide = function() {
      return this.el.hide();
    };

    return Hover;

  })();

  Morris.Line = (function(_super) {
    __extends(Line, _super);

    function Line(options) {
      this.hilight = __bind(this.hilight, this);
      this.onHoverOut = __bind(this.onHoverOut, this);
      this.onHoverMove = __bind(this.onHoverMove, this);
      this.onGridClick = __bind(this.onGridClick, this);
      if (!(this instanceof Morris.Line)) {
        return new Morris.Line(options);
      }
      Line.__super__.constructor.call(this, options);
    }

    Line.prototype.init = function() {
      if (this.options.hideHover !== 'always') {
        this.hover = new Morris.Hover({
          parent: this.el
        });
        this.on('hovermove', this.onHoverMove);
        this.on('hoverout', this.onHoverOut);
        return this.on('gridclick', this.onGridClick);
      }
    };

    Line.prototype.defaults = {
      lineWidth: 3,
      pointSize: 4,
      lineColors: ['#0b62a4', '#7A92A3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
      pointStrokeWidths: [1],
      pointStrokeColors: ['#ffffff'],
      pointFillColors: [],
      smooth: true,
      shown: true,
      xLabels: 'auto',
      xLabelFormat: null,
      xLabelMargin: 24,
      hideHover: false,
      trendLine: false,
      trendLineWidth: 2,
      trendLineColors: ['#689bc3', '#a2b3bf', '#64b764']
    };

    Line.prototype.calc = function() {
      this.calcPoints();
      return this.generatePaths();
    };

    Line.prototype.calcPoints = function() {
      var row, y, _i, _len, _ref, _results;
      _ref = this.data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        row._x = this.transX(row.x);
        row._y = (function() {
          var _j, _len1, _ref1, _results1;
          _ref1 = row.y;
          _results1 = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            y = _ref1[_j];
            if (y != null) {
              _results1.push(this.transY(y));
            } else {
              _results1.push(y);
            }
          }
          return _results1;
        }).call(this);
        _results.push(row._ymax = Math.min.apply(Math, [this.bottom].concat((function() {
          var _j, _len1, _ref1, _results1;
          _ref1 = row._y;
          _results1 = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            y = _ref1[_j];
            if (y != null) {
              _results1.push(y);
            }
          }
          return _results1;
        })())));
      }
      return _results;
    };

    Line.prototype.hitTest = function(x) {
      var index, r, _i, _len, _ref;
      if (this.data.length === 0) {
        return null;
      }
      _ref = this.data.slice(1);
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        r = _ref[index];
        if (x < (r._x + this.data[index]._x) / 2) {
          break;
        }
      }
      return index;
    };

    Line.prototype.onGridClick = function(x, y) {
      var index;
      index = this.hitTest(x);
      return this.fire('click', index, this.data[index].src, x, y);
    };

    Line.prototype.onHoverMove = function(x, y) {
      var index;
      index = this.hitTest(x);
      return this.displayHoverForRow(index);
    };

    Line.prototype.onHoverOut = function() {
      if (this.options.hideHover !== false) {
        return this.displayHoverForRow(null);
      }
    };

    Line.prototype.displayHoverForRow = function(index) {
      var _ref;
      if (index != null) {
        (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(index));
        return this.hilight(index);
      } else {
        this.hover.hide();
        return this.hilight();
      }
    };

    Line.prototype.hoverContentForRow = function(index) {
      var content, j, row, y, _i, _len, _ref;
      row = this.data[index];
      content = $("<div class='morris-hover-row-label'>").text(row.label);
      content = content.prop('outerHTML');
      _ref = row.y;
      for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
        y = _ref[j];
        if (this.options.labels[j] === false) {
          continue;
        }
        content += "<div class='morris-hover-point' style='color: " + (this.colorFor(row, j, 'label')) + "'>\n  " + this.options.labels[j] + ":\n  " + (this.yLabelFormat(y, j)) + "\n</div>";
      }
      if (typeof this.options.hoverCallback === 'function') {
        content = this.options.hoverCallback(index, this.options, content, row.src);
      }
      return [content, row._x, row._ymax];
    };

    Line.prototype.generatePaths = function() {
      var coords, i, r, smooth;
      return this.paths = (function() {
        var _i, _ref, _ref1, _results;
        _results = [];
        for (i = _i = 0, _ref = this.options.ykeys.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
          smooth = typeof this.options.smooth === "boolean" ? this.options.smooth : (_ref1 = this.options.ykeys[i], __indexOf.call(this.options.smooth, _ref1) >= 0);
          coords = (function() {
            var _j, _len, _ref2, _results1;
            _ref2 = this.data;
            _results1 = [];
            for (_j = 0, _len = _ref2.length; _j < _len; _j++) {
              r = _ref2[_j];
              if (r._y[i] !== void 0) {
                _results1.push({
                  x: r._x,
                  y: r._y[i]
                });
              }
            }
            return _results1;
          }).call(this);
          if (coords.length > 1) {
            _results.push(Morris.Line.createPath(coords, smooth, this.bottom));
          } else {
            _results.push(null);
          }
        }
        return _results;
      }).call(this);
    };

    Line.prototype.draw = function() {
      var _ref;
      if ((_ref = this.options.axes) === true || _ref === 'both' || _ref === 'x') {
        this.drawXAxis();
      }
      this.drawSeries();
      if (this.options.hideHover === false) {
        return this.displayHoverForRow(this.data.length - 1);
      }
    };

    Line.prototype.drawXAxis = function() {
      var drawLabel, l, labels, prevAngleMargin, prevLabelMargin, row, ypos, _i, _len, _results,
        _this = this;
      ypos = this.bottom + this.options.padding / 2;
      prevLabelMargin = null;
      prevAngleMargin = null;
      drawLabel = function(labelText, xpos) {
        var label, labelBox, margin, offset, textBox;
        label = _this.drawXAxisLabel(_this.transX(xpos), ypos, labelText);
        textBox = label.getBBox();
        label.transform("r" + (-_this.options.xLabelAngle));
        labelBox = label.getBBox();
        label.transform("t0," + (labelBox.height / 2) + "...");
        if (_this.options.xLabelAngle !== 0) {
          offset = -0.5 * textBox.width * Math.cos(_this.options.xLabelAngle * Math.PI / 180.0);
          label.transform("t" + offset + ",0...");
        }
        labelBox = label.getBBox();
        if (((prevLabelMargin == null) || prevLabelMargin >= labelBox.x + labelBox.width || (prevAngleMargin != null) && prevAngleMargin >= labelBox.x) && labelBox.x >= 0 && (labelBox.x + labelBox.width) < _this.el.width()) {
          if (_this.options.xLabelAngle !== 0) {
            margin = 1.25 * _this.options.gridTextSize / Math.sin(_this.options.xLabelAngle * Math.PI / 180.0);
            prevAngleMargin = labelBox.x - margin;
          }
          return prevLabelMargin = labelBox.x - _this.options.xLabelMargin;
        } else {
          return label.remove();
        }
      };
      if (this.options.parseTime) {
        if (this.data.length === 1 && this.options.xLabels === 'auto') {
          labels = [[this.data[0].label, this.data[0].x]];
        } else {
          labels = Morris.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat);
        }
      } else {
        labels = (function() {
          var _i, _len, _ref, _results;
          _ref = this.data;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            row = _ref[_i];
            _results.push([row.label, row.x]);
          }
          return _results;
        }).call(this);
      }
      labels.reverse();
      _results = [];
      for (_i = 0, _len = labels.length; _i < _len; _i++) {
        l = labels[_i];
        _results.push(drawLabel(l[0], l[1]));
      }
      return _results;
    };

    Line.prototype.drawSeries = function() {
      var i, _i, _j, _ref, _ref1, _results;
      this.seriesPoints = [];
      for (i = _i = _ref = this.options.ykeys.length - 1; _ref <= 0 ? _i <= 0 : _i >= 0; i = _ref <= 0 ? ++_i : --_i) {
        if (this.hasToShow(i)) {
          if (this.options.trendLine !== false && this.options.trendLine === true || this.options.trendLine[i] === true) {
            this._drawTrendLine(i);
          }
          this._drawLineFor(i);
        }
      }
      _results = [];
      for (i = _j = _ref1 = this.options.ykeys.length - 1; _ref1 <= 0 ? _j <= 0 : _j >= 0; i = _ref1 <= 0 ? ++_j : --_j) {
        if (this.hasToShow(i)) {
          _results.push(this._drawPointFor(i));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Line.prototype._drawPointFor = function(index) {
      var circle, row, _i, _len, _ref, _results;
      this.seriesPoints[index] = [];
      _ref = this.data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        circle = null;
        if (row._y[index] != null) {
          circle = this.drawLinePoint(row._x, row._y[index], this.colorFor(row, index, 'point'), index);
        }
        _results.push(this.seriesPoints[index].push(circle));
      }
      return _results;
    };

    Line.prototype._drawLineFor = function(index) {
      var path;
      path = this.paths[index];
      if (path !== null) {
        return this.drawLinePath(path, this.colorFor(null, index, 'line'), index);
      }
    };

    Line.prototype._drawTrendLine = function(index) {
      var a, b, data, datapoints, path, sum_x, sum_xx, sum_xy, sum_y, val, x, y, _i, _len, _ref;
      sum_x = 0;
      sum_y = 0;
      sum_xx = 0;
      sum_xy = 0;
      datapoints = 0;
      _ref = this.data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        val = _ref[_i];
        x = val.x;
        y = val.y[index];
        if (y === void 0) {
          continue;
        }
        datapoints += 1;
        sum_x += x;
        sum_y += y;
        sum_xx += x * x;
        sum_xy += x * y;
      }
      a = (datapoints * sum_xy - sum_x * sum_y) / (datapoints * sum_xx - sum_x * sum_x);
      b = (sum_y / datapoints) - ((a * sum_x) / datapoints);
      data = [{}, {}];
      data[0].x = this.transX(this.data[0].x);
      data[0].y = this.transY(this.data[0].x * a + b);
      data[1].x = this.transX(this.data[this.data.length - 1].x);
      data[1].y = this.transY(this.data[this.data.length - 1].x * a + b);
      path = Morris.Line.createPath(data, false, this.bottom);
      return path = this.raphael.path(path).attr('stroke', this.colorFor(null, index, 'trendLine')).attr('stroke-width', this.options.trendLineWidth);
    };

    Line.createPath = function(coords, smooth, bottom) {
      var coord, g, grads, i, ix, lg, path, prevCoord, x1, x2, y1, y2, _i, _len;
      path = "";
      if (smooth) {
        grads = Morris.Line.gradients(coords);
      }
      prevCoord = {
        y: null
      };
      for (i = _i = 0, _len = coords.length; _i < _len; i = ++_i) {
        coord = coords[i];
        if (coord.y != null) {
          if (prevCoord.y != null) {
            if (smooth) {
              g = grads[i];
              lg = grads[i - 1];
              ix = (coord.x - prevCoord.x) / 4;
              x1 = prevCoord.x + ix;
              y1 = Math.min(bottom, prevCoord.y + ix * lg);
              x2 = coord.x - ix;
              y2 = Math.min(bottom, coord.y - ix * g);
              path += "C" + x1 + "," + y1 + "," + x2 + "," + y2 + "," + coord.x + "," + coord.y;
            } else {
              path += "L" + coord.x + "," + coord.y;
            }
          } else {
            if (!smooth || (grads[i] != null)) {
              path += "M" + coord.x + "," + coord.y;
            }
          }
        }
        prevCoord = coord;
      }
      return path;
    };

    Line.gradients = function(coords) {
      var coord, grad, i, nextCoord, prevCoord, _i, _len, _results;
      grad = function(a, b) {
        return (a.y - b.y) / (a.x - b.x);
      };
      _results = [];
      for (i = _i = 0, _len = coords.length; _i < _len; i = ++_i) {
        coord = coords[i];
        if (coord.y != null) {
          nextCoord = coords[i + 1] || {
            y: null
          };
          prevCoord = coords[i - 1] || {
            y: null
          };
          if ((prevCoord.y != null) && (nextCoord.y != null)) {
            _results.push(grad(prevCoord, nextCoord));
          } else if (prevCoord.y != null) {
            _results.push(grad(prevCoord, coord));
          } else if (nextCoord.y != null) {
            _results.push(grad(coord, nextCoord));
          } else {
            _results.push(null);
          }
        } else {
          _results.push(null);
        }
      }
      return _results;
    };

    Line.prototype.hilight = function(index) {
      var i, _i, _j, _ref, _ref1;
      if (this.prevHilight !== null && this.prevHilight !== index) {
        for (i = _i = 0, _ref = this.seriesPoints.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          if (this.seriesPoints[i][this.prevHilight]) {
            this.seriesPoints[i][this.prevHilight].animate(this.pointShrinkSeries(i));
          }
        }
      }
      if (index !== null && this.prevHilight !== index) {
        for (i = _j = 0, _ref1 = this.seriesPoints.length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
          if (this.seriesPoints[i][index]) {
            this.seriesPoints[i][index].animate(this.pointGrowSeries(i));
          }
        }
      }
      return this.prevHilight = index;
    };

    Line.prototype.colorFor = function(row, sidx, type) {
      if (typeof this.options.lineColors === 'function') {
        return this.options.lineColors.call(this, row, sidx, type);
      } else if (type === 'point') {
        return this.options.pointFillColors[sidx % this.options.pointFillColors.length] || this.options.lineColors[sidx % this.options.lineColors.length];
      } else if (type === 'line') {
        return this.options.lineColors[sidx % this.options.lineColors.length];
      } else {
        return this.options.trendLineColors[sidx % this.options.trendLineColors.length];
      }
    };

    Line.prototype.drawXAxisLabel = function(xPos, yPos, text) {
      return this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor);
    };

    Line.prototype.drawLinePath = function(path, lineColor, lineIndex) {
      return this.raphael.path(path).attr('stroke', lineColor).attr('stroke-width', this.lineWidthForSeries(lineIndex));
    };

    Line.prototype.drawLinePoint = function(xPos, yPos, pointColor, lineIndex) {
      return this.raphael.circle(xPos, yPos, this.pointSizeForSeries(lineIndex)).attr('fill', pointColor).attr('stroke-width', this.pointStrokeWidthForSeries(lineIndex)).attr('stroke', this.pointStrokeColorForSeries(lineIndex));
    };

    Line.prototype.pointStrokeWidthForSeries = function(index) {
      return this.options.pointStrokeWidths[index % this.options.pointStrokeWidths.length];
    };

    Line.prototype.pointStrokeColorForSeries = function(index) {
      return this.options.pointStrokeColors[index % this.options.pointStrokeColors.length];
    };

    Line.prototype.lineWidthForSeries = function(index) {
      if (this.options.lineWidth instanceof Array) {
        return this.options.lineWidth[index % this.options.lineWidth.length];
      } else {
        return this.options.lineWidth;
      }
    };

    Line.prototype.pointSizeForSeries = function(index) {
      if (this.options.pointSize instanceof Array) {
        return this.options.pointSize[index % this.options.pointSize.length];
      } else {
        return this.options.pointSize;
      }
    };

    Line.prototype.pointGrowSeries = function(index) {
      if (this.pointSizeForSeries(index) === 0) {
        return;
      }
      return Raphael.animation({
        r: this.pointSizeForSeries(index) + 3
      }, 25, 'linear');
    };

    Line.prototype.pointShrinkSeries = function(index) {
      return Raphael.animation({
        r: this.pointSizeForSeries(index)
      }, 25, 'linear');
    };

    return Line;

  })(Morris.Grid);

  Morris.labelSeries = function(dmin, dmax, pxwidth, specName, xLabelFormat) {
    var d, d0, ddensity, name, ret, s, spec, t, _i, _len, _ref;
    ddensity = 200 * (dmax - dmin) / pxwidth;
    d0 = new Date(dmin);
    spec = Morris.LABEL_SPECS[specName];
    if (spec === void 0) {
      _ref = Morris.AUTO_LABEL_ORDER;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        name = _ref[_i];
        s = Morris.LABEL_SPECS[name];
        if (ddensity >= s.span) {
          spec = s;
          break;
        }
      }
    }
    if (spec === void 0) {
      spec = Morris.LABEL_SPECS["second"];
    }
    if (xLabelFormat) {
      spec = $.extend({}, spec, {
        fmt: xLabelFormat
      });
    }
    d = spec.start(d0);
    ret = [];
    while ((t = d.getTime()) <= dmax) {
      if (t >= dmin) {
        ret.push([spec.fmt(d), t]);
      }
      spec.incr(d);
    }
    return ret;
  };

  minutesSpecHelper = function(interval) {
    return {
      span: interval * 60 * 1000,
      start: function(d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours());
      },
      fmt: function(d) {
        return "" + (Morris.pad2(d.getHours())) + ":" + (Morris.pad2(d.getMinutes()));
      },
      incr: function(d) {
        return d.setUTCMinutes(d.getUTCMinutes() + interval);
      }
    };
  };

  secondsSpecHelper = function(interval) {
    return {
      span: interval * 1000,
      start: function(d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());
      },
      fmt: function(d) {
        return "" + (Morris.pad2(d.getHours())) + ":" + (Morris.pad2(d.getMinutes())) + ":" + (Morris.pad2(d.getSeconds()));
      },
      incr: function(d) {
        return d.setUTCSeconds(d.getUTCSeconds() + interval);
      }
    };
  };

  Morris.LABEL_SPECS = {
    "decade": {
      span: 172800000000,
      start: function(d) {
        return new Date(d.getFullYear() - d.getFullYear() % 10, 0, 1);
      },
      fmt: function(d) {
        return "" + (d.getFullYear());
      },
      incr: function(d) {
        return d.setFullYear(d.getFullYear() + 10);
      }
    },
    "year": {
      span: 17280000000,
      start: function(d) {
        return new Date(d.getFullYear(), 0, 1);
      },
      fmt: function(d) {
        return "" + (d.getFullYear());
      },
      incr: function(d) {
        return d.setFullYear(d.getFullYear() + 1);
      }
    },
    "month": {
      span: 2419200000,
      start: function(d) {
        return new Date(d.getFullYear(), d.getMonth(), 1);
      },
      fmt: function(d) {
        return "" + (d.getFullYear()) + "-" + (Morris.pad2(d.getMonth() + 1));
      },
      incr: function(d) {
        return d.setMonth(d.getMonth() + 1);
      }
    },
    "week": {
      span: 604800000,
      start: function(d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
      },
      fmt: function(d) {
        return "" + (d.getFullYear()) + "-" + (Morris.pad2(d.getMonth() + 1)) + "-" + (Morris.pad2(d.getDate()));
      },
      incr: function(d) {
        return d.setDate(d.getDate() + 7);
      }
    },
    "day": {
      span: 86400000,
      start: function(d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
      },
      fmt: function(d) {
        return "" + (d.getFullYear()) + "-" + (Morris.pad2(d.getMonth() + 1)) + "-" + (Morris.pad2(d.getDate()));
      },
      incr: function(d) {
        return d.setDate(d.getDate() + 1);
      }
    },
    "hour": minutesSpecHelper(60),
    "30min": minutesSpecHelper(30),
    "15min": minutesSpecHelper(15),
    "10min": minutesSpecHelper(10),
    "5min": minutesSpecHelper(5),
    "minute": minutesSpecHelper(1),
    "30sec": secondsSpecHelper(30),
    "15sec": secondsSpecHelper(15),
    "10sec": secondsSpecHelper(10),
    "5sec": secondsSpecHelper(5),
    "second": secondsSpecHelper(1)
  };

  Morris.AUTO_LABEL_ORDER = ["decade", "year", "month", "week", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"];

  Morris.Area = (function(_super) {
    var areaDefaults;

    __extends(Area, _super);

    areaDefaults = {
      fillOpacity: 'auto',
      behaveLikeLine: false
    };

    function Area(options) {
      var areaOptions;
      if (!(this instanceof Morris.Area)) {
        return new Morris.Area(options);
      }
      areaOptions = $.extend({}, areaDefaults, options);
      this.cumulative = !areaOptions.behaveLikeLine;
      if (areaOptions.fillOpacity === 'auto') {
        areaOptions.fillOpacity = areaOptions.behaveLikeLine ? .8 : 1;
      }
      Area.__super__.constructor.call(this, areaOptions);
    }

    Area.prototype.calcPoints = function() {
      var row, total, y, _i, _len, _ref, _results;
      _ref = this.data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        row._x = this.transX(row.x);
        total = 0;
        row._y = (function() {
          var _j, _len1, _ref1, _results1;
          _ref1 = row.y;
          _results1 = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            y = _ref1[_j];
            if (this.options.behaveLikeLine) {
              _results1.push(this.transY(y));
            } else {
              total += y || 0;
              _results1.push(this.transY(total));
            }
          }
          return _results1;
        }).call(this);
        _results.push(row._ymax = Math.max.apply(Math, row._y));
      }
      return _results;
    };

    Area.prototype.drawSeries = function() {
      var i, range, _i, _j, _k, _len, _ref, _ref1, _results, _results1, _results2;
      this.seriesPoints = [];
      if (this.options.behaveLikeLine) {
        range = (function() {
          _results = [];
          for (var _i = 0, _ref = this.options.ykeys.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this);
      } else {
        range = (function() {
          _results1 = [];
          for (var _j = _ref1 = this.options.ykeys.length - 1; _ref1 <= 0 ? _j <= 0 : _j >= 0; _ref1 <= 0 ? _j++ : _j--){ _results1.push(_j); }
          return _results1;
        }).apply(this);
      }
      _results2 = [];
      for (_k = 0, _len = range.length; _k < _len; _k++) {
        i = range[_k];
        this._drawFillFor(i);
        this._drawLineFor(i);
        _results2.push(this._drawPointFor(i));
      }
      return _results2;
    };

    Area.prototype._drawFillFor = function(index) {
      var path;
      path = this.paths[index];
      if (path !== null) {
        path = path + ("L" + (this.transX(this.xmax)) + "," + this.bottom + "L" + (this.transX(this.xmin)) + "," + this.bottom + "Z");
        return this.drawFilledPath(path, this.fillForSeries(index));
      }
    };

    Area.prototype.fillForSeries = function(i) {
      var color;
      color = Raphael.rgb2hsl(this.colorFor(this.data[i], i, 'line'));
      return Raphael.hsl(color.h, this.options.behaveLikeLine ? color.s * 0.9 : color.s * 0.75, Math.min(0.98, this.options.behaveLikeLine ? color.l * 1.2 : color.l * 1.25));
    };

    Area.prototype.drawFilledPath = function(path, fill) {
      return this.raphael.path(path).attr('fill', fill).attr('fill-opacity', this.options.fillOpacity).attr('stroke', 'none');
    };

    return Area;

  })(Morris.Line);

  Morris.Bar = (function(_super) {
    __extends(Bar, _super);

    function Bar(options) {
      this.onHoverOut = __bind(this.onHoverOut, this);
      this.onHoverMove = __bind(this.onHoverMove, this);
      this.onGridClick = __bind(this.onGridClick, this);
      if (!(this instanceof Morris.Bar)) {
        return new Morris.Bar(options);
      }
      Bar.__super__.constructor.call(this, $.extend({}, options, {
        parseTime: false
      }));
    }

    Bar.prototype.init = function() {
      this.cumulative = this.options.stacked;
      if (this.options.hideHover !== 'always') {
        this.hover = new Morris.Hover({
          parent: this.el
        });
        this.on('hovermove', this.onHoverMove);
        this.on('hoverout', this.onHoverOut);
        return this.on('gridclick', this.onGridClick);
      }
    };

    Bar.prototype.defaults = {
      barSizeRatio: 0.75,
      barGap: 3,
      barColors: ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
      barOpacity: 1.0,
      barRadius: [0, 0, 0, 0],
      xLabelMargin: 50,
      horizontal: false,
      shown: true
    };

    Bar.prototype.calc = function() {
      var _ref;
      this.calcBars();
      if (this.options.hideHover === false) {
        return (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(this.data.length - 1));
      }
    };

    Bar.prototype.calcBars = function() {
      var idx, row, y, _i, _len, _ref, _results;
      _ref = this.data;
      _results = [];
      for (idx = _i = 0, _len = _ref.length; _i < _len; idx = ++_i) {
        row = _ref[idx];
        row._x = this.xStart + this.xSize * (idx + 0.5) / this.data.length;
        _results.push(row._y = (function() {
          var _j, _len1, _ref1, _results1;
          _ref1 = row.y;
          _results1 = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            y = _ref1[_j];
            if (y != null) {
              _results1.push(this.transY(y));
            } else {
              _results1.push(null);
            }
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    Bar.prototype.draw = function() {
      var _ref;
      if ((_ref = this.options.axes) === true || _ref === 'both' || _ref === 'x') {
        this.drawXAxis();
      }
      return this.drawSeries();
    };

    Bar.prototype.drawXAxis = function() {
      var angle, basePos, i, label, labelBox, margin, maxSize, offset, prevAngleMargin, prevLabelMargin, row, size, startPos, textBox, _i, _ref, _results;
      if (!this.options.horizontal) {
        basePos = this.getXAxisLabelY();
      } else {
        basePos = this.getYAxisLabelX();
      }
      prevLabelMargin = null;
      prevAngleMargin = null;
      _results = [];
      for (i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        row = this.data[this.data.length - 1 - i];
        if (!this.options.horizontal) {
          label = this.drawXAxisLabel(row._x, basePos, row.label);
        } else {
          label = this.drawYAxisLabel(basePos, row._x - 0.5 * this.options.gridTextSize, row.label);
        }
        if (!this.options.horizontal) {
          angle = this.options.xLabelAngle;
        } else {
          angle = 0;
        }
        textBox = label.getBBox();
        label.transform("r" + (-angle));
        labelBox = label.getBBox();
        label.transform("t0," + (labelBox.height / 2) + "...");
        if (angle !== 0) {
          offset = -0.5 * textBox.width * Math.cos(angle * Math.PI / 180.0);
          label.transform("t" + offset + ",0...");
        }
        if (!this.options.horizontal) {
          startPos = labelBox.x;
          size = labelBox.width;
          maxSize = this.el.width();
        } else {
          startPos = labelBox.y;
          size = labelBox.height;
          maxSize = this.el.height();
        }
        if (((prevLabelMargin == null) || prevLabelMargin >= startPos + size || (prevAngleMargin != null) && prevAngleMargin >= startPos) && startPos >= 0 && (startPos + size) < maxSize) {
          if (angle !== 0) {
            margin = 1.25 * this.options.gridTextSize / Math.sin(angle * Math.PI / 180.0);
            prevAngleMargin = startPos - margin;
          }
          if (!this.options.horizontal) {
            _results.push(prevLabelMargin = startPos - this.options.xLabelMargin);
          } else {
            _results.push(prevLabelMargin = startPos);
          }
        } else {
          _results.push(label.remove());
        }
      }
      return _results;
    };

    Bar.prototype.getXAxisLabelY = function() {
      return this.bottom + (this.options.xAxisLabelTopPadding || this.options.padding / 2);
    };

    Bar.prototype.drawSeries = function() {
      var barWidth, bottom, groupWidth, i, idx, lastTop, left, leftPadding, numBars, row, sidx, size, spaceLeft, top, ypos, zeroPos, _i, _ref;
      groupWidth = this.xSize / this.options.data.length;
      if (this.options.stacked) {
        numBars = 1;
      } else {
        numBars = 0;
        for (i = _i = 0, _ref = this.options.ykeys.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          if (this.hasToShow(i)) {
            numBars += 1;
          }
        }
      }
      barWidth = (groupWidth * this.options.barSizeRatio - this.options.barGap * (numBars - 1)) / numBars;
      if (this.options.barSize) {
        barWidth = Math.min(barWidth, this.options.barSize);
      }
      spaceLeft = groupWidth - barWidth * numBars - this.options.barGap * (numBars - 1);
      leftPadding = spaceLeft / 2;
      zeroPos = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null;
      return this.bars = (function() {
        var _j, _len, _ref1, _results;
        _ref1 = this.data;
        _results = [];
        for (idx = _j = 0, _len = _ref1.length; _j < _len; idx = ++_j) {
          row = _ref1[idx];
          lastTop = 0;
          _results.push((function() {
            var _k, _len1, _ref2, _results1;
            _ref2 = row._y;
            _results1 = [];
            for (sidx = _k = 0, _len1 = _ref2.length; _k < _len1; sidx = ++_k) {
              ypos = _ref2[sidx];
              if (!this.hasToShow(sidx)) {
                continue;
              }
              if (ypos !== null) {
                if (zeroPos) {
                  top = Math.min(ypos, zeroPos);
                  bottom = Math.max(ypos, zeroPos);
                } else {
                  top = ypos;
                  bottom = this.bottom;
                }
                left = this.xStart + idx * groupWidth + leftPadding;
                if (!this.options.stacked) {
                  left += sidx * (barWidth + this.options.barGap);
                }
                size = bottom - top;
                if (this.options.verticalGridCondition && this.options.verticalGridCondition(row.x)) {
                  if (!this.options.horizontal) {
                    this.drawBar(this.xStart + idx * groupWidth, this.yEnd, groupWidth, this.ySize, this.options.verticalGridColor, this.options.verticalGridOpacity, this.options.barRadius);
                  } else {
                    this.drawBar(this.yStart, this.xStart + idx * groupWidth, this.ySize, groupWidth, this.options.verticalGridColor, this.options.verticalGridOpacity, this.options.barRadius);
                  }
                }
                if (this.options.stacked) {
                  top -= lastTop;
                }
                if (!this.options.horizontal) {
                  this.drawBar(left, top, barWidth, size, this.colorFor(row, sidx, 'bar'), this.options.barOpacity, this.options.barRadius);
                  _results1.push(lastTop += size);
                } else {
                  this.drawBar(top, left, size, barWidth, this.colorFor(row, sidx, 'bar'), this.options.barOpacity, this.options.barRadius);
                  _results1.push(lastTop -= size);
                }
              } else {
                _results1.push(null);
              }
            }
            return _results1;
          }).call(this));
        }
        return _results;
      }).call(this);
    };

    Bar.prototype.colorFor = function(row, sidx, type) {
      var r, s;
      if (typeof this.options.barColors === 'function') {
        r = {
          x: row.x,
          y: row.y[sidx],
          label: row.label
        };
        s = {
          index: sidx,
          key: this.options.ykeys[sidx],
          label: this.options.labels[sidx]
        };
        return this.options.barColors.call(this, r, s, type);
      } else {
        return this.options.barColors[sidx % this.options.barColors.length];
      }
    };

    Bar.prototype.hitTest = function(x, y) {
      var pos;
      if (this.data.length === 0) {
        return null;
      }
      if (!this.options.horizontal) {
        pos = x;
      } else {
        pos = y;
      }
      pos = Math.max(Math.min(pos, this.xEnd), this.xStart);
      return Math.min(this.data.length - 1, Math.floor((pos - this.xStart) / (this.xSize / this.data.length)));
    };

    Bar.prototype.onGridClick = function(x, y) {
      var index;
      index = this.hitTest(x, y);
      return this.fire('click', index, this.data[index].src, x, y);
    };

    Bar.prototype.onHoverMove = function(x, y) {
      var index, _ref;
      index = this.hitTest(x, y);
      return (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(index));
    };

    Bar.prototype.onHoverOut = function() {
      if (this.options.hideHover !== false) {
        return this.hover.hide();
      }
    };

    Bar.prototype.hoverContentForRow = function(index) {
      var content, j, row, x, y, _i, _len, _ref;
      row = this.data[index];
      content = $("<div class='morris-hover-row-label'>").text(row.label);
      content = content.prop('outerHTML');
      _ref = row.y;
      for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
        y = _ref[j];
        if (this.options.labels[j] === false) {
          continue;
        }
        content += "<div class='morris-hover-point' style='color: " + (this.colorFor(row, j, 'label')) + "'>\n  " + this.options.labels[j] + ":\n  " + (this.yLabelFormat(y, j)) + "\n</div>";
      }
      if (typeof this.options.hoverCallback === 'function') {
        content = this.options.hoverCallback(index, this.options, content, row.src);
      }
      if (!this.options.horizontal) {
        x = this.left + (index + 0.5) * this.width / this.data.length;
        return [content, x];
      } else {
        x = this.left + 0.5 * this.width;
        y = this.top + (index + 0.5) * this.height / this.data.length;
        return [content, x, y, true];
      }
    };

    Bar.prototype.drawXAxisLabel = function(xPos, yPos, text) {
      var label;
      return label = this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor);
    };

    Bar.prototype.drawBar = function(xPos, yPos, width, height, barColor, opacity, radiusArray) {
      var maxRadius, path;
      maxRadius = Math.max.apply(Math, radiusArray);
      if (maxRadius === 0 || maxRadius > height) {
        path = this.raphael.rect(xPos, yPos, width, height);
      } else {
        path = this.raphael.path(this.roundedRect(xPos, yPos, width, height, radiusArray));
      }
      return path.attr('fill', barColor).attr('fill-opacity', opacity).attr('stroke', 'none');
    };

    Bar.prototype.roundedRect = function(x, y, w, h, r) {
      if (r == null) {
        r = [0, 0, 0, 0];
      }
      return ["M", x, r[0] + y, "Q", x, y, x + r[0], y, "L", x + w - r[1], y, "Q", x + w, y, x + w, y + r[1], "L", x + w, y + h - r[2], "Q", x + w, y + h, x + w - r[2], y + h, "L", x + r[3], y + h, "Q", x, y + h, x, y + h - r[3], "Z"];
    };

    return Bar;

  })(Morris.Grid);

  Morris.Donut = (function(_super) {
    __extends(Donut, _super);

    Donut.prototype.defaults = {
      colors: ['#0B62A4', '#3980B5', '#679DC6', '#95BBD7', '#B0CCE1', '#095791', '#095085', '#083E67', '#052C48', '#042135'],
      backgroundColor: '#FFFFFF',
      labelColor: '#000000',
      formatter: Morris.commas,
      showPercentage: false,
      resize: false
    };

    function Donut(options) {
      this.resizeHandler = __bind(this.resizeHandler, this);
      this.select = __bind(this.select, this);
      this.click = __bind(this.click, this);
      var _this = this;
      if (!(this instanceof Morris.Donut)) {
        return new Morris.Donut(options);
      }
      this.options = $.extend({}, this.defaults, options);
      if (typeof options.element === 'string') {
        this.el = $(document.getElementById(options.element));
      } else {
        this.el = $(options.element);
      }
      if (this.el === null || this.el.length === 0) {
        throw new Error("Graph placeholder not found.");
      }
      if (options.data === void 0 || options.data.length === 0) {
        return;
      }
      this.raphael = new Raphael(this.el[0]);
      if (this.options.resize) {
        $(window).bind('resize', function(evt) {
          if (_this.timeoutId != null) {
            clearTimeout(_this.timeoutId);
          }
          return _this.timeoutId = setTimeout(_this.resizeHandler, 100);
        });
      }
      this.setData(options.data);
    }

    Donut.prototype.redraw = function() {
      var C, cx, cy, i, idx, last, max_value, min, next, seg, total, value, w, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
      this.raphael.clear();
      cx = this.el.width() / 2;
      cy = this.el.height() / 2;
      w = (Math.min(cx, cy) - 10) / 3;
      total = 0;
      _ref = this.values;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        value = _ref[_i];
        total += value;
      }
      min = 5 / (2 * w);
      C = 1.9999 * Math.PI - min * this.data.length;
      last = 0;
      idx = 0;
      this.segments = [];
      _ref1 = this.values;
      for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
        value = _ref1[i];
        next = last + min + C * (value / total);
        seg = new Morris.DonutSegment(cx, cy, w * 2, w, last, next, this.data[i].color || this.options.colors[idx % this.options.colors.length], this.options.backgroundColor, idx, this.raphael);
        seg.render();
        this.segments.push(seg);
        seg.on('hover', this.select);
        seg.on('click', this.click);
        last = next;
        idx += 1;
      }
      this.text1 = this.drawEmptyDonutLabel(cx, cy - 10, this.options.labelColor, 15, 800);
      this.text2 = this.drawEmptyDonutLabel(cx, cy + 10, this.options.labelColor, 14);
      max_value = Math.max.apply(Math, this.values);
      idx = 0;
      _ref2 = this.values;
      _results = [];
      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
        value = _ref2[_k];
        if (value === max_value) {
          this.select(idx);
          break;
        }
        _results.push(idx += 1);
      }
      return _results;
    };

    Donut.prototype.setData = function(data) {
      var row;
      this.data = data;
      this.values = (function() {
        var _i, _len, _ref, _results;
        _ref = this.data;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          row = _ref[_i];
          _results.push(parseFloat(row.value));
        }
        return _results;
      }).call(this);
      return this.redraw();
    };

    Donut.prototype.click = function(idx) {
      return this.fire('click', idx, this.data[idx]);
    };

    Donut.prototype.select = function(idx) {
      let finalValue;
      /*
       * Deselects all when idx is not provided
       * without triggering error
       */
      if (typeof idx === 'undefined') {
        this.segments.forEach((segment) => {
          segment.deselect();
        });

        return;
      }
      var row, s, segment, _i, _len, _ref;
      _ref = this.segments;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        s = _ref[_i];
        s.deselect();
      }
      segment = this.segments[idx];
      segment.select();
      row = this.data[idx];
      finalValue = this.options.formatter(row.value, row);
      if (this.options.showPercentage) {
        let overall = 0;
        this.data.forEach((dataRow) => {
          overall += dataRow.value;
        });
        finalValue = Math.round(row.value / overall * 100) + '%';
      }
      return this.setLabels(row.label, finalValue);
    };


    Donut.prototype.setLabels = function(label1, label2) {
      var inner, maxHeightBottom, maxHeightTop, maxWidth, text1bbox, text1scale, text2bbox, text2scale;
      inner = (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) * 2 / 3;
      maxWidth = 1.8 * inner;
      maxHeightTop = inner / 2;
      maxHeightBottom = inner / 3;
      this.text1.attr({
        text: label1,
        transform: ''
      });
      text1bbox = this.text1.getBBox();
      text1scale = Math.min(maxWidth / text1bbox.width, maxHeightTop / text1bbox.height);
      this.text1.attr({
        transform: "S" + text1scale + "," + text1scale + "," + (text1bbox.x + text1bbox.width / 2) + "," + (text1bbox.y + text1bbox.height)
      });
      this.text2.attr({
        text: label2,
        transform: ''
      });
      text2bbox = this.text2.getBBox();
      text2scale = Math.min(maxWidth / text2bbox.width, maxHeightBottom / text2bbox.height);
      return this.text2.attr({
        transform: "S" + text2scale + "," + text2scale + "," + (text2bbox.x + text2bbox.width / 2) + "," + text2bbox.y
      });
    };

    Donut.prototype.drawEmptyDonutLabel = function(xPos, yPos, color, fontSize, fontWeight) {
      var text;
      text = this.raphael.text(xPos, yPos, '').attr('font-size', fontSize).attr('fill', color);
      if (fontWeight != null) {
        text.attr('font-weight', fontWeight);
      }
      return text;
    };

    Donut.prototype.resizeHandler = function() {
      this.timeoutId = null;
      this.raphael.setSize(this.el.width(), this.el.height());
      return this.redraw();
    };

    return Donut;

  })(Morris.EventEmitter);

  Morris.DonutSegment = (function(_super) {
    __extends(DonutSegment, _super);

    function DonutSegment(cx, cy, inner, outer, p0, p1, color, backgroundColor, index, raphael) {
      this.cx = cx;
      this.cy = cy;
      this.inner = inner;
      this.outer = outer;
      this.color = color;
      this.backgroundColor = backgroundColor;
      this.index = index;
      this.raphael = raphael;
      this.deselect = __bind(this.deselect, this);
      this.select = __bind(this.select, this);
      this.sin_p0 = Math.sin(p0);
      this.cos_p0 = Math.cos(p0);
      this.sin_p1 = Math.sin(p1);
      this.cos_p1 = Math.cos(p1);
      this.is_long = (p1 - p0) > Math.PI ? 1 : 0;
      this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5);
      this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer);
      this.hilight = this.calcArc(this.inner);
    }

    DonutSegment.prototype.calcArcPoints = function(r) {
      return [this.cx + r * this.sin_p0, this.cy + r * this.cos_p0, this.cx + r * this.sin_p1, this.cy + r * this.cos_p1];
    };

    DonutSegment.prototype.calcSegment = function(r1, r2) {
      var ix0, ix1, iy0, iy1, ox0, ox1, oy0, oy1, _ref, _ref1;
      _ref = this.calcArcPoints(r1), ix0 = _ref[0], iy0 = _ref[1], ix1 = _ref[2], iy1 = _ref[3];
      _ref1 = this.calcArcPoints(r2), ox0 = _ref1[0], oy0 = _ref1[1], ox1 = _ref1[2], oy1 = _ref1[3];
      return ("M" + ix0 + "," + iy0) + ("A" + r1 + "," + r1 + ",0," + this.is_long + ",0," + ix1 + "," + iy1) + ("L" + ox1 + "," + oy1) + ("A" + r2 + "," + r2 + ",0," + this.is_long + ",1," + ox0 + "," + oy0) + "Z";
    };

    DonutSegment.prototype.calcArc = function(r) {
      var ix0, ix1, iy0, iy1, _ref;
      _ref = this.calcArcPoints(r), ix0 = _ref[0], iy0 = _ref[1], ix1 = _ref[2], iy1 = _ref[3];
      return ("M" + ix0 + "," + iy0) + ("A" + r + "," + r + ",0," + this.is_long + ",0," + ix1 + "," + iy1);
    };

    DonutSegment.prototype.render = function() {
      var _this = this;
      this.arc = this.drawDonutArc(this.hilight, this.color);
      return this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, function() {
        return _this.fire('hover', _this.index);
      }, function() {
        return _this.fire('click', _this.index);
      });
    };

    DonutSegment.prototype.drawDonutArc = function(path, color) {
      return this.raphael.path(path).attr({
        stroke: color,
        'stroke-width': 2,
        opacity: 0
      });
    };

    DonutSegment.prototype.drawDonutSegment = function(path, fillColor, strokeColor, hoverFunction, clickFunction) {
      return this.raphael.path(path).attr({
        fill: fillColor,
        stroke: strokeColor,
        'stroke-width': 3
      }).hover(hoverFunction).click(clickFunction);
    };

    DonutSegment.prototype.select = function() {
      if (!this.selected) {
        this.seg.animate({
          path: this.selectedPath
        }, 150, '<>');
        this.arc.animate({
          opacity: 1
        }, 150, '<>');
        return this.selected = true;
      }
    };

    DonutSegment.prototype.deselect = function() {
      if (this.selected) {
        this.seg.animate({
          path: this.path
        }, 150, '<>');
        this.arc.animate({
          opacity: 0
        }, 150, '<>');
        return this.selected = false;
      }
    };

    return DonutSegment;

  })(Morris.EventEmitter);

  return Morris;
}

module.exports = makeMorris;


/***/ }),

/***/ "./node_modules/raphael/raphael.min.js":
/*!*********************************************!*\
  !*** ./node_modules/raphael/raphael.min.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){var i,n;i=[r(2)],void 0===(n=function(t){function e(i){if(e.is(i,"function"))return r?i():t.on("raphael.DOMload",i);if(e.is(i,A))return e._engine.create[c](e,i.splice(0,3+e.is(i[0],T))).add(i);var n=Array.prototype.slice.call(arguments,0);if(e.is(n[n.length-1],"function")){var a=n.pop();return r?a.call(e._engine.create[c](e,n)):t.on("raphael.DOMload",function(){a.call(e._engine.create[c](e,n))})}return e._engine.create[c](e,arguments)}e.version="2.2.0",e.eve=t;var r,i,n=/[, ]+/,a={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},s=/\{(\d+)\}/g,o="hasOwnProperty",l={doc:document,win:window},h={was:Object.prototype[o].call(l.win,"Raphael"),is:l.win.Raphael},u=function(){this.ca=this.customAttributes={}},c="apply",f="concat",p="ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,d="",g=" ",x=String,v="split",y="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[v](g),m={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},b=x.prototype.toLowerCase,_=Math,w=_.max,k=_.min,B=_.abs,C=_.pow,S=_.PI,T="number",A="array",M=Object.prototype.toString,E=(e._ISURL=/^url\(['"]?(.+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),N={NaN:1,Infinity:1,"-Infinity":1},L=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,P=_.round,z=parseFloat,F=parseInt,R=x.prototype.toUpperCase,j=e._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0,class:""},I=e._availableAnimAttrs={blur:T,"clip-rect":"csv",cx:T,cy:T,fill:"colour","fill-opacity":T,"font-size":T,height:T,opacity:T,path:"path",r:T,rx:T,ry:T,stroke:"colour","stroke-opacity":T,"stroke-width":T,transform:"transform",width:T,x:T,y:T},D=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,q={hs:1,rg:1},O=/,?([achlmqrstvxz]),?/gi,V=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,W=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,Y=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,G=(e._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),H=function(t,e){return z(t)-z(e)},X=function(t){return t},U=e._rectPath=function(t,e,r,i,n){return n?[["M",t+n,e],["l",r-2*n,0],["a",n,n,0,0,1,n,n],["l",0,i-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-r,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-i],["a",n,n,0,0,1,n,-n],["z"]]:[["M",t,e],["l",r,0],["l",0,i],["l",-r,0],["z"]]},$=function(t,e,r,i){return null==i&&(i=r),[["M",t,e],["m",0,-i],["a",r,i,0,1,1,0,2*i],["a",r,i,0,1,1,0,-2*i],["z"]]},Z=e._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;return $(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return $(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return U(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return U(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return U(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return U(e.x,e.y,e.width,e.height)}},Q=e.mapPath=function(t,e){if(!e)return t;var r,i,n,a,s,o,l;for(n=0,s=(t=Tt(t)).length;n<s;n++)for(a=1,o=(l=t[n]).length;a<o;a+=2)r=e.x(l[a],l[a+1]),i=e.y(l[a],l[a+1]),l[a]=r,l[a+1]=i;return t};if(e._g=l,e.type=l.win.SVGAngle||l.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==e.type){var J,K=l.doc.createElement("div");if(K.innerHTML='<v:shape adj="1"/>',(J=K.firstChild).style.behavior="url(#default#VML)",!J||"object"!=typeof J.adj)return e.type=d;K=null}function tt(t){if("function"==typeof t||Object(t)!==t)return t;var e=new t.constructor;for(var r in t)t[o](r)&&(e[r]=tt(t[r]));return e}e.svg=!(e.vml="VML"==e.type),e._Paper=u,e.fn=i=u.prototype=e.prototype,e._id=0,e.is=function(t,e){return"finite"==(e=b.call(e))?!N[o](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||M.call(t).slice(8,-1).toLowerCase()==e},e.angle=function(t,r,i,n,a,s){if(null==a){var o=t-i,l=r-n;return o||l?(180+180*_.atan2(-l,-o)/S+360)%360:0}return e.angle(t,r,a,s)-e.angle(i,n,a,s)},e.rad=function(t){return t%360*S/180},e.deg=function(t){return Math.round(180*t/S%360*1e3)/1e3},e.snapTo=function(t,r,i){if(i=e.is(i,"finite")?i:10,e.is(t,A)){for(var n=t.length;n--;)if(B(t[n]-r)<=i)return t[n]}else{var a=r%(t=+t);if(a<i)return r-a;if(a>t-i)return r-a+t}return r};var et,rt;e.createUUID=(et=/[xy]/g,rt=function(t){var e=16*_.random()|0;return("x"==t?e:3&e|8).toString(16)},function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(et,rt).toUpperCase()});e.setWindow=function(r){t("raphael.setWindow",e,l.win,r),l.win=r,l.doc=l.win.document,e._engine.initWin&&e._engine.initWin(l.win)};var it=function(t){if(e.vml){var r,i=/^\s+|\s+$/g;try{var n=new ActiveXObject("htmlfile");n.write("<body>"),n.close(),r=n.body}catch(t){r=createPopup().document.body}var a=r.createTextRange();it=ht(function(t){try{r.style.color=x(t).replace(i,d);var e=a.queryCommandValue("ForeColor");return"#"+("000000"+(e=(255&e)<<16|65280&e|(16711680&e)>>>16).toString(16)).slice(-6)}catch(t){return"none"}})}else{var s=l.doc.createElement("i");s.title="Raphaël Colour Picker",s.style.display="none",l.doc.body.appendChild(s),it=ht(function(t){return s.style.color=t,l.doc.defaultView.getComputedStyle(s,d).getPropertyValue("color")})}return it(t)},nt=function(){return"hsb("+[this.h,this.s,this.b]+")"},at=function(){return"hsl("+[this.h,this.s,this.l]+")"},st=function(){return this.hex},ot=function(t,r,i){if(null==r&&e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(i=t.b,r=t.g,t=t.r),null==r&&e.is(t,"string")){var n=e.getRGB(t);t=n.r,r=n.g,i=n.b}return(t>1||r>1||i>1)&&(t/=255,r/=255,i/=255),[t,r,i]},lt=function(t,r,i,n){var a={r:t*=255,g:r*=255,b:i*=255,hex:e.rgb(t,r,i),toString:st};return e.is(n,"finite")&&(a.opacity=n),a};function ht(t,e,r){return function i(){var n=Array.prototype.slice.call(arguments,0),a=n.join("␀"),s=i.cache=i.cache||{},l=i.count=i.count||[];return s[o](a)?(function(t,e){for(var r=0,i=t.length;r<i;r++)if(t[r]===e)return t.push(t.splice(r,1)[0])}(l,a),r?r(s[a]):s[a]):(l.length>=1e3&&delete s[l.shift()],l.push(a),s[a]=t[c](e,n),r?r(s[a]):s[a])}}e.color=function(t){var r;return e.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(r=e.hsb2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):e.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(r=e.hsl2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):(e.is(t,"string")&&(t=e.getRGB(t)),e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(r=e.rgb2hsl(t),t.h=r.h,t.s=r.s,t.l=r.l,r=e.rgb2hsb(t),t.v=r.b):(t={hex:"none"}).r=t.g=t.b=t.h=t.s=t.v=t.l=-1),t.toString=st,t},e.hsb2rgb=function(t,e,r,i){var n,a,s,o,l;return this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,i=t.o,t=t.h),o=(l=r*e)*(1-B((t=(t*=360)%360/60)%2-1)),n=a=s=r-l,lt(n+=[l,o,0,0,o,l][t=~~t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],i)},e.hsl2rgb=function(t,e,r,i){var n,a,s,o,l;return this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),o=(l=2*e*(r<.5?r:1-r))*(1-B((t=(t*=360)%360/60)%2-1)),n=a=s=r-l/2,lt(n+=[l,o,0,0,o,l][t=~~t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],i)},e.rgb2hsb=function(t,e,r){var i,n;return t=(r=ot(t,e,r))[0],e=r[1],r=r[2],{h:((0==(n=(i=w(t,e,r))-k(t,e,r))?null:i==t?(e-r)/n:i==e?(r-t)/n+2:(t-e)/n+4)+360)%6*60/360,s:0==n?0:n/i,b:i,toString:nt}},e.rgb2hsl=function(t,e,r){var i,n,a,s;return t=(r=ot(t,e,r))[0],e=r[1],r=r[2],i=((n=w(t,e,r))+(a=k(t,e,r)))/2,{h:((0==(s=n-a)?null:n==t?(e-r)/s:n==e?(r-t)/s+2:(t-e)/s+4)+360)%6*60/360,s:0==s?0:i<.5?s/(2*i):s/(2-2*i),l:i,toString:at}},e._path2string=function(){return this.join(",").replace(O,"$1")};e._preload=function(t,e){var r=l.doc.createElement("img");r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){e.call(this),this.onload=null,l.doc.body.removeChild(this)},r.onerror=function(){l.doc.body.removeChild(this)},l.doc.body.appendChild(r),r.src=t};function ut(){return this.hex}function ct(t,e){for(var r=[],i=0,n=t.length;n-2*!e>i;i+=2){var a=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}];e?i?n-4==i?a[3]={x:+t[0],y:+t[1]}:n-2==i&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[n-2],y:+t[n-1]}:n-4==i?a[3]=a[2]:i||(a[0]={x:+t[i],y:+t[i+1]}),r.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return r}e.getRGB=ht(function(t){if(!t||(t=x(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:ut};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:ut};!q[o](t.toLowerCase().substring(0,2))&&"#"!=t.charAt()&&(t=it(t));var r,i,n,a,s,l,h=t.match(E);return h?(h[2]&&(n=F(h[2].substring(5),16),i=F(h[2].substring(3,5),16),r=F(h[2].substring(1,3),16)),h[3]&&(n=F((s=h[3].charAt(3))+s,16),i=F((s=h[3].charAt(2))+s,16),r=F((s=h[3].charAt(1))+s,16)),h[4]&&(l=h[4][v](D),r=z(l[0]),"%"==l[0].slice(-1)&&(r*=2.55),i=z(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=z(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),"rgba"==h[1].toLowerCase().slice(0,4)&&(a=z(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100)),h[5]?(l=h[5][v](D),r=z(l[0]),"%"==l[0].slice(-1)&&(r*=2.55),i=z(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=z(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),("deg"==l[0].slice(-3)||"°"==l[0].slice(-1))&&(r/=360),"hsba"==h[1].toLowerCase().slice(0,4)&&(a=z(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),e.hsb2rgb(r,i,n,a)):h[6]?(l=h[6][v](D),r=z(l[0]),"%"==l[0].slice(-1)&&(r*=2.55),i=z(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=z(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),("deg"==l[0].slice(-3)||"°"==l[0].slice(-1))&&(r/=360),"hsla"==h[1].toLowerCase().slice(0,4)&&(a=z(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),e.hsl2rgb(r,i,n,a)):((h={r:r,g:i,b:n,toString:ut}).hex="#"+(16777216|n|i<<8|r<<16).toString(16).slice(1),e.is(a,"finite")&&(h.opacity=a),h)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:ut}},e),e.hsb=ht(function(t,r,i){return e.hsb2rgb(t,r,i).hex}),e.hsl=ht(function(t,r,i){return e.hsl2rgb(t,r,i).hex}),e.rgb=ht(function(t,e,r){function i(t){return t+.5|0}return"#"+(16777216|i(r)|i(e)<<8|i(t)<<16).toString(16).slice(1)}),e.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,e.s<=0&&(this.getColor.start={h:0,s:1,b:e.b})),r.hex},e.getColor.reset=function(){delete this.start},e.parsePathString=function(t){if(!t)return null;var r=ft(t);if(r.arr)return mt(r.arr);var i={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},n=[];return e.is(t,A)&&e.is(t[0],A)&&(n=mt(t)),n.length||x(t).replace(V,function(t,e,r){var a=[],s=e.toLowerCase();if(r.replace(Y,function(t,e){e&&a.push(+e)}),"m"==s&&a.length>2&&(n.push([e][f](a.splice(0,2))),s="l",e="m"==e?"l":"L"),"r"==s)n.push([e][f](a));else for(;a.length>=i[s]&&(n.push([e][f](a.splice(0,i[s]))),i[s]););}),n.toString=e._path2string,r.arr=mt(n),n},e.parseTransformString=ht(function(t){if(!t)return null;var r=[];return e.is(t,A)&&e.is(t[0],A)&&(r=mt(t)),r.length||x(t).replace(W,function(t,e,i){var n=[];b.call(e);i.replace(Y,function(t,e){e&&n.push(+e)}),r.push([e][f](n))}),r.toString=e._path2string,r},this,function(t){if(!t)return t;for(var e=[],r=0;r<t.length;r++){for(var i=[],n=0;n<t[r].length;n++)i.push(t[r][n]);e.push(i)}return e});var ft=function(t){var e=ft.ps=ft.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var r in e)e[o](r)&&r!=t&&(e[r].sleep--,!e[r].sleep&&delete e[r])}),e[t]};function pt(t,e,r,i,n){return t*(t*(-3*e+9*r-9*i+3*n)+6*e-12*r+6*i)-3*e+3*r}function dt(t,e,r,i,n,a,s,o,l){null==l&&(l=1);for(var h=(l=l>1?1:l<0?0:l)/2,u=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],c=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],f=0,p=0;p<12;p++){var d=h*u[p]+h,g=pt(d,t,r,n,s),x=pt(d,e,i,a,o),v=g*g+x*x;f+=c[p]*_.sqrt(v)}return h*f}function gt(t,e,r,i,n,a,s,o){if(!(w(t,r)<k(n,s)||k(t,r)>w(n,s)||w(e,i)<k(a,o)||k(e,i)>w(a,o))){var l=(t-r)*(a-o)-(e-i)*(n-s);if(l){var h=((t*i-e*r)*(n-s)-(t-r)*(n*o-a*s))/l,u=((t*i-e*r)*(a-o)-(e-i)*(n*o-a*s))/l,c=+h.toFixed(2),f=+u.toFixed(2);if(!(c<+k(t,r).toFixed(2)||c>+w(t,r).toFixed(2)||c<+k(n,s).toFixed(2)||c>+w(n,s).toFixed(2)||f<+k(e,i).toFixed(2)||f>+w(e,i).toFixed(2)||f<+k(a,o).toFixed(2)||f>+w(a,o).toFixed(2)))return{x:h,y:u}}}}function xt(t,r,i){var n=e.bezierBBox(t),a=e.bezierBBox(r);if(!e.isBBoxIntersect(n,a))return i?0:[];for(var s=dt.apply(0,t),o=dt.apply(0,r),l=w(~~(s/5),1),h=w(~~(o/5),1),u=[],c=[],f={},p=i?0:[],d=0;d<l+1;d++){var g=e.findDotsAtSegment.apply(e,t.concat(d/l));u.push({x:g.x,y:g.y,t:d/l})}for(d=0;d<h+1;d++)g=e.findDotsAtSegment.apply(e,r.concat(d/h)),c.push({x:g.x,y:g.y,t:d/h});for(d=0;d<l;d++)for(var x=0;x<h;x++){var v=u[d],y=u[d+1],m=c[x],b=c[x+1],_=B(y.x-v.x)<.001?"y":"x",C=B(b.x-m.x)<.001?"y":"x",S=gt(v.x,v.y,y.x,y.y,m.x,m.y,b.x,b.y);if(S){if(f[S.x.toFixed(4)]==S.y.toFixed(4))continue;f[S.x.toFixed(4)]=S.y.toFixed(4);var T=v.t+B((S[_]-v[_])/(y[_]-v[_]))*(y.t-v.t),A=m.t+B((S[C]-m[C])/(b[C]-m[C]))*(b.t-m.t);T>=0&&T<=1.001&&A>=0&&A<=1.001&&(i?p++:p.push({x:S.x,y:S.y,t1:k(T,1),t2:k(A,1)}))}}return p}function vt(t,r,i){t=e._path2curve(t),r=e._path2curve(r);for(var n,a,s,o,l,h,u,c,f,p,d=i?0:[],g=0,x=t.length;g<x;g++){var v=t[g];if("M"==v[0])n=l=v[1],a=h=v[2];else{"C"==v[0]?(f=[n,a].concat(v.slice(1)),n=f[6],a=f[7]):(f=[n,a,n,a,l,h,l,h],n=l,a=h);for(var y=0,m=r.length;y<m;y++){var b=r[y];if("M"==b[0])s=u=b[1],o=c=b[2];else{"C"==b[0]?(p=[s,o].concat(b.slice(1)),s=p[6],o=p[7]):(p=[s,o,s,o,u,c,u,c],s=u,o=c);var _=xt(f,p,i);if(i)d+=_;else{for(var w=0,k=_.length;w<k;w++)_[w].segment1=g,_[w].segment2=y,_[w].bez1=f,_[w].bez2=p;d=d.concat(_)}}}}}return d}e.findDotsAtSegment=function(t,e,r,i,n,a,s,o,l){var h=1-l,u=C(h,3),c=C(h,2),f=l*l,p=f*l,d=u*t+3*c*l*r+3*h*l*l*n+p*s,g=u*e+3*c*l*i+3*h*l*l*a+p*o,x=t+2*l*(r-t)+f*(n-2*r+t),v=e+2*l*(i-e)+f*(a-2*i+e),y=r+2*l*(n-r)+f*(s-2*n+r),m=i+2*l*(a-i)+f*(o-2*a+i),b=h*t+l*r,w=h*e+l*i,k=h*n+l*s,B=h*a+l*o,T=90-180*_.atan2(x-y,v-m)/S;return(x>y||v<m)&&(T+=180),{x:d,y:g,m:{x:x,y:v},n:{x:y,y:m},start:{x:b,y:w},end:{x:k,y:B},alpha:T}},e.bezierBBox=function(t,r,i,n,a,s,o,l){e.is(t,"array")||(t=[t,r,i,n,a,s,o,l]);var h=St.apply(null,t);return{x:h.min.x,y:h.min.y,x2:h.max.x,y2:h.max.y,width:h.max.x-h.min.x,height:h.max.y-h.min.y}},e.isPointInsideBBox=function(t,e,r){return e>=t.x&&e<=t.x2&&r>=t.y&&r<=t.y2},e.isBBoxIntersect=function(t,r){var i=e.isPointInsideBBox;return i(r,t.x,t.y)||i(r,t.x2,t.y)||i(r,t.x,t.y2)||i(r,t.x2,t.y2)||i(t,r.x,r.y)||i(t,r.x2,r.y)||i(t,r.x,r.y2)||i(t,r.x2,r.y2)||(t.x<r.x2&&t.x>r.x||r.x<t.x2&&r.x>t.x)&&(t.y<r.y2&&t.y>r.y||r.y<t.y2&&r.y>t.y)},e.pathIntersection=function(t,e){return vt(t,e)},e.pathIntersectionNumber=function(t,e){return vt(t,e,1)},e.isPointInsidePath=function(t,r,i){var n=e.pathBBox(t);return e.isPointInsideBBox(n,r,i)&&vt(t,[["M",r,i],["H",n.x2+10]],1)%2==1},e._removedFactory=function(e){return function(){t("raphael.log",null,"Raphaël: you are calling to method “"+e+"” of removed object",e)}};var yt=e.pathBBox=function(t){var e=ft(t);if(e.bbox)return tt(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};for(var r,i=0,n=0,a=[],s=[],o=0,l=(t=Tt(t)).length;o<l;o++)if("M"==(r=t[o])[0])i=r[1],n=r[2],a.push(i),s.push(n);else{var h=St(i,n,r[1],r[2],r[3],r[4],r[5],r[6]);a=a[f](h.min.x,h.max.x),s=s[f](h.min.y,h.max.y),i=r[5],n=r[6]}var u=k[c](0,a),p=k[c](0,s),d=w[c](0,a),g=w[c](0,s),x=d-u,v=g-p,y={x:u,y:p,x2:d,y2:g,width:x,height:v,cx:u+x/2,cy:p+v/2};return e.bbox=tt(y),y},mt=function(t){var r=tt(t);return r.toString=e._path2string,r},bt=e._pathToRelative=function(t){var r=ft(t);if(r.rel)return mt(r.rel);e.is(t,A)&&e.is(t&&t[0],A)||(t=e.parsePathString(t));var i=[],n=0,a=0,s=0,o=0,l=0;"M"==t[0][0]&&(s=n=t[0][1],o=a=t[0][2],l++,i.push(["M",n,a]));for(var h=l,u=t.length;h<u;h++){var c=i[h]=[],f=t[h];if(f[0]!=b.call(f[0]))switch(c[0]=b.call(f[0]),c[0]){case"a":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-n).toFixed(3),c[7]=+(f[7]-a).toFixed(3);break;case"v":c[1]=+(f[1]-a).toFixed(3);break;case"m":s=f[1],o=f[2];default:for(var p=1,d=f.length;p<d;p++)c[p]=+(f[p]-(p%2?n:a)).toFixed(3)}else{c=i[h]=[],"m"==f[0]&&(s=f[1]+n,o=f[2]+a);for(var g=0,x=f.length;g<x;g++)i[h][g]=f[g]}var v=i[h].length;switch(i[h][0]){case"z":n=s,a=o;break;case"h":n+=+i[h][v-1];break;case"v":a+=+i[h][v-1];break;default:n+=+i[h][v-2],a+=+i[h][v-1]}}return i.toString=e._path2string,r.rel=mt(i),i},_t=e._pathToAbsolute=function(t){var r=ft(t);if(r.abs)return mt(r.abs);if(e.is(t,A)&&e.is(t&&t[0],A)||(t=e.parsePathString(t)),!t||!t.length)return[["M",0,0]];var i=[],n=0,a=0,s=0,o=0,l=0;"M"==t[0][0]&&(s=n=+t[0][1],o=a=+t[0][2],l++,i[0]=["M",n,a]);for(var h,u,c=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),p=l,d=t.length;p<d;p++){if(i.push(h=[]),(u=t[p])[0]!=R.call(u[0]))switch(h[0]=R.call(u[0]),h[0]){case"A":h[1]=u[1],h[2]=u[2],h[3]=u[3],h[4]=u[4],h[5]=u[5],h[6]=+(u[6]+n),h[7]=+(u[7]+a);break;case"V":h[1]=+u[1]+a;break;case"H":h[1]=+u[1]+n;break;case"R":for(var g=[n,a][f](u.slice(1)),x=2,v=g.length;x<v;x++)g[x]=+g[x]+n,g[++x]=+g[x]+a;i.pop(),i=i[f](ct(g,c));break;case"M":s=+u[1]+n,o=+u[2]+a;default:for(x=1,v=u.length;x<v;x++)h[x]=+u[x]+(x%2?n:a)}else if("R"==u[0])g=[n,a][f](u.slice(1)),i.pop(),i=i[f](ct(g,c)),h=["R"][f](u.slice(-2));else for(var y=0,m=u.length;y<m;y++)h[y]=u[y];switch(h[0]){case"Z":n=s,a=o;break;case"H":n=h[1];break;case"V":a=h[1];break;case"M":s=h[h.length-2],o=h[h.length-1];default:n=h[h.length-2],a=h[h.length-1]}}return i.toString=e._path2string,r.abs=mt(i),i},wt=function(t,e,r,i){return[t,e,r,i,r,i]},kt=function(t,e,r,i,n,a){return[1/3*t+2/3*r,1/3*e+2/3*i,1/3*n+2/3*r,1/3*a+2/3*i,n,a]},Bt=function(t,e,r,i,n,a,s,o,l,h){var u,c=120*S/180,p=S/180*(+n||0),d=[],g=ht(function(t,e,r){return{x:t*_.cos(r)-e*_.sin(r),y:t*_.sin(r)+e*_.cos(r)}});if(h)A=h[0],M=h[1],C=h[2],T=h[3];else{t=(u=g(t,e,-p)).x,e=u.y,o=(u=g(o,l,-p)).x,l=u.y;_.cos(S/180*n),_.sin(S/180*n);var x=(t-o)/2,y=(e-l)/2,m=x*x/(r*r)+y*y/(i*i);m>1&&(r*=m=_.sqrt(m),i*=m);var b=r*r,w=i*i,k=(a==s?-1:1)*_.sqrt(B((b*w-b*y*y-w*x*x)/(b*y*y+w*x*x))),C=k*r*y/i+(t+o)/2,T=k*-i*x/r+(e+l)/2,A=_.asin(((e-T)/i).toFixed(9)),M=_.asin(((l-T)/i).toFixed(9));(A=t<C?S-A:A)<0&&(A=2*S+A),(M=o<C?S-M:M)<0&&(M=2*S+M),s&&A>M&&(A-=2*S),!s&&M>A&&(M-=2*S)}var E=M-A;if(B(E)>c){var N=M,L=o,P=l;M=A+c*(s&&M>A?1:-1),o=C+r*_.cos(M),l=T+i*_.sin(M),d=Bt(o,l,r,i,n,0,s,L,P,[M,N,C,T])}E=M-A;var z=_.cos(A),F=_.sin(A),R=_.cos(M),j=_.sin(M),I=_.tan(E/4),D=4/3*r*I,q=4/3*i*I,O=[t,e],V=[t+D*F,e-q*z],W=[o+D*j,l-q*R],Y=[o,l];if(V[0]=2*O[0]-V[0],V[1]=2*O[1]-V[1],h)return[V,W,Y][f](d);for(var G=[],H=0,X=(d=[V,W,Y][f](d).join()[v](",")).length;H<X;H++)G[H]=H%2?g(d[H-1],d[H],p).y:g(d[H],d[H+1],p).x;return G},Ct=function(t,e,r,i,n,a,s,o,l){var h=1-l;return{x:C(h,3)*t+3*C(h,2)*l*r+3*h*l*l*n+C(l,3)*s,y:C(h,3)*e+3*C(h,2)*l*i+3*h*l*l*a+C(l,3)*o}},St=ht(function(t,e,r,i,n,a,s,o){var l,h=n-2*r+t-(s-2*n+r),u=2*(r-t)-2*(n-r),f=t-r,p=(-u+_.sqrt(u*u-4*h*f))/2/h,d=(-u-_.sqrt(u*u-4*h*f))/2/h,g=[e,o],x=[t,s];return B(p)>"1e12"&&(p=.5),B(d)>"1e12"&&(d=.5),p>0&&p<1&&(l=Ct(t,e,r,i,n,a,s,o,p),x.push(l.x),g.push(l.y)),d>0&&d<1&&(l=Ct(t,e,r,i,n,a,s,o,d),x.push(l.x),g.push(l.y)),h=a-2*i+e-(o-2*a+i),f=e-i,p=(-(u=2*(i-e)-2*(a-i))+_.sqrt(u*u-4*h*f))/2/h,d=(-u-_.sqrt(u*u-4*h*f))/2/h,B(p)>"1e12"&&(p=.5),B(d)>"1e12"&&(d=.5),p>0&&p<1&&(l=Ct(t,e,r,i,n,a,s,o,p),x.push(l.x),g.push(l.y)),d>0&&d<1&&(l=Ct(t,e,r,i,n,a,s,o,d),x.push(l.x),g.push(l.y)),{min:{x:k[c](0,x),y:k[c](0,g)},max:{x:w[c](0,x),y:w[c](0,g)}}}),Tt=e._path2curve=ht(function(t,e){var r=!e&&ft(t);if(!e&&r.curve)return mt(r.curve);for(var i=_t(t),n=e&&_t(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=function(t,e,r){var i,n;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"][f](Bt[c](0,[e.x,e.y][f](t.slice(1))));break;case"S":"C"==r||"S"==r?(i=2*e.x-e.bx,n=2*e.y-e.by):(i=e.x,n=e.y),t=["C",i,n][f](t.slice(1));break;case"T":"Q"==r||"T"==r?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"][f](kt(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][f](kt(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"][f](wt(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][f](wt(e.x,e.y,t[1],e.y));break;case"V":t=["C"][f](wt(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][f](wt(e.x,e.y,e.X,e.Y))}return t},l=function(t,e){if(t[e].length>7){t[e].shift();for(var r=t[e];r.length;)u[e]="A",n&&(p[e]="A"),t.splice(e++,0,["C"][f](r.splice(0,6)));t.splice(e,1),v=w(i.length,n&&n.length||0)}},h=function(t,e,r,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),r.bx=0,r.by=0,r.x=t[s][1],r.y=t[s][2],v=w(i.length,n&&n.length||0))},u=[],p=[],d="",g="",x=0,v=w(i.length,n&&n.length||0);x<v;x++){i[x]&&(d=i[x][0]),"C"!=d&&(u[x]=d,x&&(g=u[x-1])),i[x]=o(i[x],a,g),"A"!=u[x]&&"C"==d&&(u[x]="C"),l(i,x),n&&(n[x]&&(d=n[x][0]),"C"!=d&&(p[x]=d,x&&(g=p[x-1])),n[x]=o(n[x],s,g),"A"!=p[x]&&"C"==d&&(p[x]="C"),l(n,x)),h(i,n,a,s,x),h(n,i,s,a,x);var y=i[x],m=n&&n[x],b=y.length,_=n&&m.length;a.x=y[b-2],a.y=y[b-1],a.bx=z(y[b-4])||a.x,a.by=z(y[b-3])||a.y,s.bx=n&&(z(m[_-4])||s.x),s.by=n&&(z(m[_-3])||s.y),s.x=n&&m[_-2],s.y=n&&m[_-1]}return n||(r.curve=mt(i)),n?[i,n]:i},null,mt),At=(e._parseDots=ht(function(t){for(var r=[],i=0,n=t.length;i<n;i++){var a={},s=t[i].match(/^([^:]*):?([\d\.]*)/);if(a.color=e.getRGB(s[1]),a.color.error)return null;a.opacity=a.color.opacity,a.color=a.color.hex,s[2]&&(a.offset=s[2]+"%"),r.push(a)}for(i=1,n=r.length-1;i<n;i++)if(!r[i].offset){for(var o=z(r[i-1].offset||0),l=0,h=i+1;h<n;h++)if(r[h].offset){l=r[h].offset;break}l||(l=100,h=n);for(var u=((l=z(l))-o)/(h-i+1);i<h;i++)o+=u,r[i].offset=o+"%"}return r}),e._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)}),Mt=(e._tofront=function(t,e){e.top!==t&&(At(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},e._toback=function(t,e){e.bottom!==t&&(At(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},e._insertafter=function(t,e,r){At(t,r),e==r.top&&(r.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},e._insertbefore=function(t,e,r){At(t,r),e==r.bottom&&(r.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},e.toMatrix=function(t,e){var r=yt(t),i={_:{transform:d},getBBox:function(){return r}};return Et(i,e),i.matrix}),Et=(e.transformPath=function(t,e){return Q(t,Mt(t,e))},e._extractTransform=function(t,r){if(null==r)return t._.transform;r=x(r).replace(/\.{3}|\u2026/g,t._.transform||d);var i,n,a=e.parseTransformString(r),s=0,o=1,l=1,h=t._,u=new Pt;if(h.transform=a||[],a)for(var c=0,f=a.length;c<f;c++){var p,g,v,y,m,b=a[c],_=b.length,w=x(b[0]).toLowerCase(),k=b[0]!=w,B=k?u.invert():0;"t"==w&&3==_?k?(p=B.x(0,0),g=B.y(0,0),v=B.x(b[1],b[2]),y=B.y(b[1],b[2]),u.translate(v-p,y-g)):u.translate(b[1],b[2]):"r"==w?2==_?(m=m||t.getBBox(1),u.rotate(b[1],m.x+m.width/2,m.y+m.height/2),s+=b[1]):4==_&&(k?(v=B.x(b[2],b[3]),y=B.y(b[2],b[3]),u.rotate(b[1],v,y)):u.rotate(b[1],b[2],b[3]),s+=b[1]):"s"==w?2==_||3==_?(m=m||t.getBBox(1),u.scale(b[1],b[_-1],m.x+m.width/2,m.y+m.height/2),o*=b[1],l*=b[_-1]):5==_&&(k?(v=B.x(b[3],b[4]),y=B.y(b[3],b[4]),u.scale(b[1],b[2],v,y)):u.scale(b[1],b[2],b[3],b[4]),o*=b[1],l*=b[2]):"m"==w&&7==_&&u.add(b[1],b[2],b[3],b[4],b[5],b[6]),h.dirtyT=1,t.matrix=u}t.matrix=u,h.sx=o,h.sy=l,h.deg=s,h.dx=i=u.e,h.dy=n=u.f,1==o&&1==l&&!s&&h.bbox?(h.bbox.x+=+i,h.bbox.y+=+n):h.dirtyT=1}),Nt=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},Lt=e._equaliseTransform=function(t,r){r=x(r).replace(/\.{3}|\u2026/g,t),t=e.parseTransformString(t)||[],r=e.parseTransformString(r)||[];for(var i,n,a,s,o=w(t.length,r.length),l=[],h=[],u=0;u<o;u++){if(a=t[u]||Nt(r[u]),s=r[u]||Nt(a),a[0]!=s[0]||"r"==a[0].toLowerCase()&&(a[2]!=s[2]||a[3]!=s[3])||"s"==a[0].toLowerCase()&&(a[3]!=s[3]||a[4]!=s[4]))return;for(l[u]=[],h[u]=[],i=0,n=w(a.length,s.length);i<n;i++)i in a&&(l[u][i]=a[i]),i in s&&(h[u][i]=s[i])}return{from:l,to:h}};function Pt(t,e,r,i,n,a){null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+i,this.e=+n,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}e._getContainer=function(t,r,i,n){var a;if(null!=(a=null!=n||e.is(t,"object")?t:l.doc.getElementById(t)))return a.tagName?null==r?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:r,height:i}:{container:1,x:t,y:r,width:i,height:n}},e.pathToRelative=bt,e._engine={},e.path2curve=Tt,e.matrix=function(t,e,r,i,n,a){return new Pt(t,e,r,i,n,a)},function(t){function r(t){return t[0]*t[0]+t[1]*t[1]}function i(t){var e=_.sqrt(r(t));t[0]&&(t[0]/=e),t[1]&&(t[1]/=e)}t.add=function(t,e,r,i,n,a){var s,o,l,h,u=[[],[],[]],c=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],f=[[t,r,n],[e,i,a],[0,0,1]];for(t&&t instanceof Pt&&(f=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),s=0;s<3;s++)for(o=0;o<3;o++){for(h=0,l=0;l<3;l++)h+=c[s][l]*f[l][o];u[s][o]=h}this.a=u[0][0],this.b=u[1][0],this.c=u[0][1],this.d=u[1][1],this.e=u[0][2],this.f=u[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new Pt(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new Pt(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){this.add(1,0,0,1,t,e)},t.scale=function(t,e,r,i){null==e&&(e=t),(r||i)&&this.add(1,0,0,1,r,i),this.add(t,0,0,e,0,0),(r||i)&&this.add(1,0,0,1,-r,-i)},t.rotate=function(t,r,i){t=e.rad(t),r=r||0,i=i||0;var n=+_.cos(t).toFixed(9),a=+_.sin(t).toFixed(9);this.add(n,a,-a,n,r,i),this.add(1,0,0,1,-r,-i)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[x.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return e.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var n=[[this.a,this.c],[this.b,this.d]];t.scalex=_.sqrt(r(n[0])),i(n[0]),t.shear=n[0][0]*n[1][0]+n[0][1]*n[1][1],n[1]=[n[1][0]-n[0][0]*t.shear,n[1][1]-n[0][1]*t.shear],t.scaley=_.sqrt(r(n[1])),i(n[1]),t.shear/=t.scaley;var a=-n[0][1],s=n[1][1];return s<0?(t.rotate=e.deg(_.acos(s)),a<0&&(t.rotate=360-t.rotate)):t.rotate=e.deg(_.asin(a)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this[v]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:d)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:d)+(e.rotate?"r"+[e.rotate,0,0]:d)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(Pt.prototype);for(var zt=function(){this.returnValue=!1},Ft=function(){return this.originalEvent.preventDefault()},Rt=function(){this.cancelBubble=!0},jt=function(){return this.originalEvent.stopPropagation()},It=function(t){var e=l.doc.documentElement.scrollTop||l.doc.body.scrollTop,r=l.doc.documentElement.scrollLeft||l.doc.body.scrollLeft;return{x:t.clientX+r,y:t.clientY+e}},Dt=l.doc.addEventListener?function(t,e,r,i){var n=function(t){var e=It(t);return r.call(i,t,e.x,e.y)};if(t.addEventListener(e,n,!1),p&&m[e]){var a=function(e){for(var n=It(e),a=e,s=0,o=e.targetTouches&&e.targetTouches.length;s<o;s++)if(e.targetTouches[s].target==t){(e=e.targetTouches[s]).originalEvent=a,e.preventDefault=Ft,e.stopPropagation=jt;break}return r.call(i,e,n.x,n.y)};t.addEventListener(m[e],a,!1)}return function(){return t.removeEventListener(e,n,!1),p&&m[e]&&t.removeEventListener(m[e],a,!1),!0}}:l.doc.attachEvent?function(t,e,r,i){var n=function(t){t=t||l.win.event;var e=l.doc.documentElement.scrollTop||l.doc.body.scrollTop,n=l.doc.documentElement.scrollLeft||l.doc.body.scrollLeft,a=t.clientX+n,s=t.clientY+e;return t.preventDefault=t.preventDefault||zt,t.stopPropagation=t.stopPropagation||Rt,r.call(i,t,a,s)};return t.attachEvent("on"+e,n),function(){return t.detachEvent("on"+e,n),!0}}:void 0,qt=[],Ot=function(e){for(var r,i=e.clientX,n=e.clientY,a=l.doc.documentElement.scrollTop||l.doc.body.scrollTop,s=l.doc.documentElement.scrollLeft||l.doc.body.scrollLeft,o=qt.length;o--;){if(r=qt[o],p&&e.touches){for(var h,u=e.touches.length;u--;)if((h=e.touches[u]).identifier==r.el._drag.id){i=h.clientX,n=h.clientY,(e.originalEvent?e.originalEvent:e).preventDefault();break}}else e.preventDefault();var c,f=r.el.node,d=f.nextSibling,g=f.parentNode,x=f.style.display;l.win.opera&&g.removeChild(f),f.style.display="none",c=r.el.paper.getElementByPoint(i,n),f.style.display=x,l.win.opera&&(d?g.insertBefore(f,d):g.appendChild(f)),c&&t("raphael.drag.over."+r.el.id,r.el,c),i+=s,n+=a,t("raphael.drag.move."+r.el.id,r.move_scope||r.el,i-r.el._drag.x,n-r.el._drag.y,i,n,e)}},Vt=function(r){e.unmousemove(Ot).unmouseup(Vt);for(var i,n=qt.length;n--;)(i=qt[n]).el._drag={},t("raphael.drag.end."+i.el.id,i.end_scope||i.start_scope||i.move_scope||i.el,r);qt=[]},Wt=e.el={},Yt=y.length;Yt--;)!function(t){e[t]=Wt[t]=function(r,i){return e.is(r,"function")&&(this.events=this.events||[],this.events.push({name:t,f:r,unbind:Dt(this.shape||this.node||l.doc,t,r,i||this)})),this},e["un"+t]=Wt["un"+t]=function(r){for(var i=this.events||[],n=i.length;n--;)i[n].name!=t||!e.is(r,"undefined")&&i[n].f!=r||(i[n].unbind(),i.splice(n,1),!i.length&&delete this.events);return this}}(y[Yt]);Wt.data=function(r,i){var n=G[this.id]=G[this.id]||{};if(0==arguments.length)return n;if(1==arguments.length){if(e.is(r,"object")){for(var a in r)r[o](a)&&this.data(a,r[a]);return this}return t("raphael.data.get."+this.id,this,n[r],r),n[r]}return n[r]=i,t("raphael.data.set."+this.id,this,i,r),this},Wt.removeData=function(t){return null==t?delete G[this.id]:G[this.id]&&delete G[this.id][t],this},Wt.getData=function(){return tt(G[this.id]||{})},Wt.hover=function(t,e,r,i){return this.mouseover(t,r).mouseout(e,i||r)},Wt.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var Gt=[];Wt.drag=function(r,i,n,a,s,o){function h(h){(h.originalEvent||h).preventDefault();var u=h.clientX,c=h.clientY,f=l.doc.documentElement.scrollTop||l.doc.body.scrollTop,d=l.doc.documentElement.scrollLeft||l.doc.body.scrollLeft;if(this._drag.id=h.identifier,p&&h.touches)for(var g,x=h.touches.length;x--;)if(g=h.touches[x],this._drag.id=g.identifier,g.identifier==this._drag.id){u=g.clientX,c=g.clientY;break}this._drag.x=u+d,this._drag.y=c+f,!qt.length&&e.mousemove(Ot).mouseup(Vt),qt.push({el:this,move_scope:a,start_scope:s,end_scope:o}),i&&t.on("raphael.drag.start."+this.id,i),r&&t.on("raphael.drag.move."+this.id,r),n&&t.on("raphael.drag.end."+this.id,n),t("raphael.drag.start."+this.id,s||a||this,this._drag.x,this._drag.y,h)}return this._drag={},Gt.push({el:this,start:h}),this.mousedown(h),this},Wt.onDragOver=function(e){e?t.on("raphael.drag.over."+this.id,e):t.unbind("raphael.drag.over."+this.id)},Wt.undrag=function(){for(var r=Gt.length;r--;)Gt[r].el==this&&(this.unmousedown(Gt[r].start),Gt.splice(r,1),t.unbind("raphael.drag.*."+this.id));!Gt.length&&e.unmousemove(Ot).unmouseup(Vt),qt=[]},i.circle=function(t,r,i){var n=e._engine.circle(this,t||0,r||0,i||0);return this.__set__&&this.__set__.push(n),n},i.rect=function(t,r,i,n,a){var s=e._engine.rect(this,t||0,r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},i.ellipse=function(t,r,i,n){var a=e._engine.ellipse(this,t||0,r||0,i||0,n||0);return this.__set__&&this.__set__.push(a),a},i.path=function(t){t&&!e.is(t,"string")&&!e.is(t[0],A)&&(t+=d);var r=e._engine.path(e.format[c](e,arguments),this);return this.__set__&&this.__set__.push(r),r},i.image=function(t,r,i,n,a){var s=e._engine.image(this,t||"about:blank",r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},i.text=function(t,r,i){var n=e._engine.text(this,t||0,r||0,x(i));return this.__set__&&this.__set__.push(n),n},i.set=function(t){!e.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));var r=new he(t);return this.__set__&&this.__set__.push(r),r.paper=this,r.type="set",r},i.setStart=function(t){this.__set__=t||this.set()},i.setFinish=function(t){var e=this.__set__;return delete this.__set__,e},i.getSize=function(){var t=this.canvas.parentNode;return{width:t.offsetWidth,height:t.offsetHeight}},i.setSize=function(t,r){return e._engine.setSize.call(this,t,r)},i.setViewBox=function(t,r,i,n,a){return e._engine.setViewBox.call(this,t,r,i,n,a)},i.top=i.bottom=null,i.raphael=e;function Ht(){return this.x+g+this.y+g+this.width+" × "+this.height}i.getElementByPoint=function(t,e){var r,i,n,a,s,o,h,u=this.canvas,c=l.doc.elementFromPoint(t,e);if(l.win.opera&&"svg"==c.tagName){var f=(i=(r=u).getBoundingClientRect(),n=r.ownerDocument,a=n.body,s=n.documentElement,o=s.clientTop||a.clientTop||0,h=s.clientLeft||a.clientLeft||0,{y:i.top+(l.win.pageYOffset||s.scrollTop||a.scrollTop)-o,x:i.left+(l.win.pageXOffset||s.scrollLeft||a.scrollLeft)-h}),p=u.createSVGRect();p.x=t-f.x,p.y=e-f.y,p.width=p.height=1;var d=u.getIntersectionList(p,null);d.length&&(c=d[d.length-1])}if(!c)return null;for(;c.parentNode&&c!=u.parentNode&&!c.raphael;)c=c.parentNode;return c==this.canvas.parentNode&&(c=u),c=c&&c.raphael?this.getById(c.raphaelid):null},i.getElementsByBBox=function(t){var r=this.set();return this.forEach(function(i){e.isBBoxIntersect(i.getBBox(),t)&&r.push(i)}),r},i.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},i.forEach=function(t,e){for(var r=this.bottom;r;){if(!1===t.call(e,r))return this;r=r.next}return this},i.getElementsByPoint=function(t,e){var r=this.set();return this.forEach(function(i){i.isPointInside(t,e)&&r.push(i)}),r},Wt.isPointInside=function(t,r){var i=this.realPath=Z[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(i=e.transformPath(i,this.attr("transform"))),e.isPointInsidePath(i,t,r)},Wt.getBBox=function(t){if(this.removed)return{};var e=this._;return t?(!e.dirty&&e.bboxwt||(this.realPath=Z[this.type](this),e.bboxwt=yt(this.realPath),e.bboxwt.toString=Ht,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&(!e.dirty&&this.realPath||(e.bboxwt=0,this.realPath=Z[this.type](this)),e.bbox=yt(Q(this.realPath,this.matrix)),e.bbox.toString=Ht,e.dirty=e.dirtyT=0),e.bbox)},Wt.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(t),t},Wt.glow=function(t){if("text"==this.type)return null;var e={width:((t=t||{}).width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:null==t.opacity?.5:t.opacity,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},r=e.width/2,i=this.paper,n=i.set(),a=this.realPath||Z[this.type](this);a=this.matrix?Q(a,this.matrix):a;for(var s=1;s<r+1;s++)n.push(i.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/r*s).toFixed(3),opacity:+(e.opacity/r).toFixed(3)}));return n.insertBefore(this).translate(e.offsetx,e.offsety)};var Xt=function(t,r,i,n,a,s,o,l,h){return null==h?dt(t,r,i,n,a,s,o,l):e.findDotsAtSegment(t,r,i,n,a,s,o,l,function(t,e,r,i,n,a,s,o,l){if(!(l<0||dt(t,e,r,i,n,a,s,o)<l)){var h,u=.5,c=1-u;for(h=dt(t,e,r,i,n,a,s,o,c);B(h-l)>.01;)h=dt(t,e,r,i,n,a,s,o,c+=(h<l?1:-1)*(u/=2));return c}}(t,r,i,n,a,s,o,l,h))},Ut=function(t,r){return function(i,n,a){for(var s,o,l,h,u,c="",f={},p=0,d=0,g=(i=Tt(i)).length;d<g;d++){if("M"==(l=i[d])[0])s=+l[1],o=+l[2];else{if(p+(h=Xt(s,o,l[1],l[2],l[3],l[4],l[5],l[6]))>n){if(r&&!f.start){if(c+=["C"+(u=Xt(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p)).start.x,u.start.y,u.m.x,u.m.y,u.x,u.y],a)return c;f.start=c,c=["M"+u.x,u.y+"C"+u.n.x,u.n.y,u.end.x,u.end.y,l[5],l[6]].join(),p+=h,s=+l[5],o=+l[6];continue}if(!t&&!r)return{x:(u=Xt(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p)).x,y:u.y,alpha:u.alpha}}p+=h,s=+l[5],o=+l[6]}c+=l.shift()+l}return f.end=c,(u=t?p:r?f:e.findDotsAtSegment(s,o,l[0],l[1],l[2],l[3],l[4],l[5],1)).alpha&&(u={x:u.x,y:u.y,alpha:u.alpha}),u}},$t=Ut(1),Zt=Ut(),Qt=Ut(0,1);e.getTotalLength=$t,e.getPointAtLength=Zt,e.getSubpath=function(t,e,r){if(this.getTotalLength(t)-r<1e-6)return Qt(t,e).end;var i=Qt(t,r,1);return e?Qt(i,e).end:i},Wt.getTotalLength=function(){var t=this.getPath();if(t)return this.node.getTotalLength?this.node.getTotalLength():$t(t)},Wt.getPointAtLength=function(t){var e=this.getPath();if(e)return Zt(e,t)},Wt.getPath=function(){var t,r=e._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return r&&(t=r(this)),t},Wt.getSubpath=function(t,r){var i=this.getPath();if(i)return e.getSubpath(i,t,r)};var Jt=e.easing_formulas={linear:function(t){return t},"<":function(t){return C(t,1.7)},">":function(t){return C(t,.48)},"<>":function(t){var e=.48-t/1.04,r=_.sqrt(.1734+e*e),i=r-e,n=-r-e,a=C(B(i),1/3)*(i<0?-1:1)+C(B(n),1/3)*(n<0?-1:1)+.5;return 3*(1-a)*a*a+a*a*a},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:C(2,-10*t)*_.sin(2*S*(t-.075)/.3)+1},bounce:function(t){var e=7.5625,r=2.75;return t<1/r?e*t*t:t<2/r?e*(t-=1.5/r)*t+.75:t<2.5/r?e*(t-=2.25/r)*t+.9375:e*(t-=2.625/r)*t+.984375}};Jt.easeIn=Jt["ease-in"]=Jt["<"],Jt.easeOut=Jt["ease-out"]=Jt[">"],Jt.easeInOut=Jt["ease-in-out"]=Jt["<>"],Jt["back-in"]=Jt.backIn,Jt["back-out"]=Jt.backOut;var Kt=[],te=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,16)},ee=function(){for(var r=+new Date,i=0;i<Kt.length;i++){var n=Kt[i];if(!n.el.removed&&!n.paused){var a,s,l=r-n.start,h=n.ms,u=n.easing,c=n.from,p=n.diff,d=n.to,x=(n.t,n.el),v={},y={};if(n.initstatus?(l=(n.initstatus*n.anim.top-n.prev)/(n.percent-n.prev)*h,n.status=n.initstatus,delete n.initstatus,n.stop&&Kt.splice(i--,1)):n.status=(n.prev+(n.percent-n.prev)*(l/h))/n.anim.top,!(l<0))if(l<h){var m=u(l/h);for(var b in c)if(c[o](b)){switch(I[b]){case T:a=+c[b]+m*h*p[b];break;case"colour":a="rgb("+[re(P(c[b].r+m*h*p[b].r)),re(P(c[b].g+m*h*p[b].g)),re(P(c[b].b+m*h*p[b].b))].join(",")+")";break;case"path":a=[];for(var _=0,w=c[b].length;_<w;_++){a[_]=[c[b][_][0]];for(var k=1,B=c[b][_].length;k<B;k++)a[_][k]=+c[b][_][k]+m*h*p[b][_][k];a[_]=a[_].join(g)}a=a.join(g);break;case"transform":if(p[b].real)for(a=[],_=0,w=c[b].length;_<w;_++)for(a[_]=[c[b][_][0]],k=1,B=c[b][_].length;k<B;k++)a[_][k]=c[b][_][k]+m*h*p[b][_][k];else{var C=function(t){return+c[b][t]+m*h*p[b][t]};a=[["m",C(0),C(1),C(2),C(3),C(4),C(5)]]}break;case"csv":if("clip-rect"==b)for(a=[],_=4;_--;)a[_]=+c[b][_]+m*h*p[b][_];break;default:var S=[][f](c[b]);for(a=[],_=x.paper.customAttributes[b].length;_--;)a[_]=+S[_]+m*h*p[b][_]}v[b]=a}x.attr(v),function(e,r,i){setTimeout(function(){t("raphael.anim.frame."+e,r,i)})}(x.id,x,n.anim)}else{if(function(r,i,n){setTimeout(function(){t("raphael.anim.frame."+i.id,i,n),t("raphael.anim.finish."+i.id,i,n),e.is(r,"function")&&r.call(i)})}(n.callback,x,n.anim),x.attr(d),Kt.splice(i--,1),n.repeat>1&&!n.next){for(s in d)d[o](s)&&(y[s]=n.totalOrigin[s]);n.el.attr(y),ae(n.anim,n.el,n.anim.percents[0],null,n.totalOrigin,n.repeat-1)}n.next&&!n.stop&&ae(n.anim,n.el,n.next,null,n.totalOrigin,n.repeat)}}}Kt.length&&te(ee)},re=function(t){return t>255?255:t<0?0:t};function ie(t,e,r,i,n,a){var s=3*e,o=3*(i-e)-s,l=1-s-o,h=3*r,u=3*(n-r)-h,c=1-h-u;function f(t){return((l*t+o)*t+s)*t}return function(t,e){var r=function(t,e){var r,i,n,a,h,u;for(n=t,u=0;u<8;u++){if(a=f(n)-t,B(a)<e)return n;if(B(h=(3*l*n+2*o)*n+s)<1e-6)break;n-=a/h}if(i=1,(n=t)<(r=0))return r;if(n>i)return i;for(;r<i;){if(a=f(n),B(a-t)<e)return n;t>a?r=n:i=n,n=(i-r)/2+r}return n}(t,e);return((c*r+u)*r+h)*r}(t,1/(200*a))}function ne(t,e){var r=[],i={};if(this.ms=e,this.times=1,t){for(var n in t)t[o](n)&&(i[z(n)]=t[n],r.push(z(n)));r.sort(H)}this.anim=i,this.top=r[r.length-1],this.percents=r}function ae(r,i,a,s,l,h){a=z(a);var u,c,p,d,g,y,m=r.ms,b={},_={},w={};if(s)for(B=0,C=Kt.length;B<C;B++){var k=Kt[B];if(k.el.id==i.id&&k.anim==r){k.percent!=a?(Kt.splice(B,1),p=1):c=k,i.attr(k.totalOrigin);break}}else s=+_;for(var B=0,C=r.percents.length;B<C;B++){if(r.percents[B]==a||r.percents[B]>s*r.top){a=r.percents[B],g=r.percents[B-1]||0,m=m/r.top*(a-g),d=r.percents[B+1],u=r.anim[a];break}s&&i.attr(r.anim[r.percents[B]])}if(u){if(c)c.initstatus=s,c.start=new Date-c.ms*s;else{for(var S in u)if(u[o](S)&&(I[o](S)||i.paper.customAttributes[o](S)))switch(b[S]=i.attr(S),null==b[S]&&(b[S]=j[S]),_[S]=u[S],I[S]){case T:w[S]=(_[S]-b[S])/m;break;case"colour":b[S]=e.getRGB(b[S]);var A=e.getRGB(_[S]);w[S]={r:(A.r-b[S].r)/m,g:(A.g-b[S].g)/m,b:(A.b-b[S].b)/m};break;case"path":var M=Tt(b[S],_[S]),E=M[1];for(b[S]=M[0],w[S]=[],B=0,C=b[S].length;B<C;B++){w[S][B]=[0];for(var N=1,P=b[S][B].length;N<P;N++)w[S][B][N]=(E[B][N]-b[S][B][N])/m}break;case"transform":var F=i._,R=Lt(F[S],_[S]);if(R)for(b[S]=R.from,_[S]=R.to,w[S]=[],w[S].real=!0,B=0,C=b[S].length;B<C;B++)for(w[S][B]=[b[S][B][0]],N=1,P=b[S][B].length;N<P;N++)w[S][B][N]=(_[S][B][N]-b[S][B][N])/m;else{var D=i.matrix||new Pt,q={_:{transform:F.transform},getBBox:function(){return i.getBBox(1)}};b[S]=[D.a,D.b,D.c,D.d,D.e,D.f],Et(q,_[S]),_[S]=q._.transform,w[S]=[(q.matrix.a-D.a)/m,(q.matrix.b-D.b)/m,(q.matrix.c-D.c)/m,(q.matrix.d-D.d)/m,(q.matrix.e-D.e)/m,(q.matrix.f-D.f)/m]}break;case"csv":var O=x(u[S])[v](n),V=x(b[S])[v](n);if("clip-rect"==S)for(b[S]=V,w[S]=[],B=V.length;B--;)w[S][B]=(O[B]-b[S][B])/m;_[S]=O;break;default:for(O=[][f](u[S]),V=[][f](b[S]),w[S]=[],B=i.paper.customAttributes[S].length;B--;)w[S][B]=((O[B]||0)-(V[B]||0))/m}var W=u.easing,Y=e.easing_formulas[W];if(!Y)if((Y=x(W).match(L))&&5==Y.length){var G=Y;Y=function(t){return ie(t,+G[1],+G[2],+G[3],+G[4],m)}}else Y=X;if(k={anim:r,percent:a,timestamp:y=u.start||r.start||+new Date,start:y+(r.del||0),status:0,initstatus:s||0,stop:!1,ms:m,easing:Y,from:b,diff:w,to:_,el:i,callback:u.callback,prev:g,next:d,repeat:h||r.times,origin:i.attr(),totalOrigin:l},Kt.push(k),s&&!c&&!p&&(k.stop=!0,k.start=new Date-m*s,1==Kt.length))return ee();p&&(k.start=new Date-k.ms*s),1==Kt.length&&te(ee)}t("raphael.anim.start."+i.id,i,r)}}function se(t){for(var e=0;e<Kt.length;e++)Kt[e].el.paper==t&&Kt.splice(e--,1)}Wt.animateWith=function(t,r,i,n,a,s){if(this.removed)return s&&s.call(this),this;var o=i instanceof ne?i:e.animation(i,n,a,s);ae(o,this,o.percents[0],null,this.attr());for(var l=0,h=Kt.length;l<h;l++)if(Kt[l].anim==r&&Kt[l].el==t){Kt[h-1].start=Kt[l].start;break}return this},Wt.onAnimation=function(e){return e?t.on("raphael.anim.frame."+this.id,e):t.unbind("raphael.anim.frame."+this.id),this},ne.prototype.delay=function(t){var e=new ne(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},ne.prototype.repeat=function(t){var e=new ne(this.anim,this.ms);return e.del=this.del,e.times=_.floor(w(t,0))||1,e},e.animation=function(t,r,i,n){if(t instanceof ne)return t;!e.is(i,"function")&&i||(n=n||i||null,i=null),t=Object(t),r=+r||0;var a,s,l={};for(s in t)t[o](s)&&z(s)!=s&&z(s)+"%"!=s&&(a=!0,l[s]=t[s]);if(a)return i&&(l.easing=i),n&&(l.callback=n),new ne({100:l},r);if(n){var h=0;for(var u in t){var c=F(u);t[o](u)&&c>h&&(h=c)}!t[h+="%"].callback&&(t[h].callback=n)}return new ne(t,r)},Wt.animate=function(t,r,i,n){if(this.removed)return n&&n.call(this),this;var a=t instanceof ne?t:e.animation(t,r,i,n);return ae(a,this,a.percents[0],null,this.attr()),this},Wt.setTime=function(t,e){return t&&null!=e&&this.status(t,k(e,t.ms)/t.ms),this},Wt.status=function(t,e){var r,i,n=[],a=0;if(null!=e)return ae(t,this,-1,k(e,1)),this;for(r=Kt.length;a<r;a++)if((i=Kt[a]).el.id==this.id&&(!t||i.anim==t)){if(t)return i.status;n.push({anim:i.anim,status:i.status})}return t?0:n},Wt.pause=function(e){for(var r=0;r<Kt.length;r++)Kt[r].el.id!=this.id||e&&Kt[r].anim!=e||!1!==t("raphael.anim.pause."+this.id,this,Kt[r].anim)&&(Kt[r].paused=!0);return this},Wt.resume=function(e){for(var r=0;r<Kt.length;r++)if(Kt[r].el.id==this.id&&(!e||Kt[r].anim==e)){var i=Kt[r];!1!==t("raphael.anim.resume."+this.id,this,i.anim)&&(delete i.paused,this.status(i.anim,i.status))}return this},Wt.stop=function(e){for(var r=0;r<Kt.length;r++)Kt[r].el.id!=this.id||e&&Kt[r].anim!=e||!1!==t("raphael.anim.stop."+this.id,this,Kt[r].anim)&&Kt.splice(r--,1);return this},t.on("raphael.remove",se),t.on("raphael.clear",se),Wt.toString=function(){return"Raphaël’s object"};var oe,le,he=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,r=t.length;e<r;e++)!t[e]||t[e].constructor!=Wt.constructor&&t[e].constructor!=he||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},ue=he.prototype;for(var ce in ue.push=function(){for(var t,e,r=0,i=arguments.length;r<i;r++)!(t=arguments[r])||t.constructor!=Wt.constructor&&t.constructor!=he||(this[e=this.items.length]=this.items[e]=t,this.length++);return this},ue.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},ue.forEach=function(t,e){for(var r=0,i=this.items.length;r<i;r++)if(!1===t.call(e,this.items[r],r))return this;return this},Wt)Wt[o](ce)&&(ue[ce]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t][c](r,e)})}}(ce));return ue.attr=function(t,r){if(t&&e.is(t,A)&&e.is(t[0],"object"))for(var i=0,n=t.length;i<n;i++)this.items[i].attr(t[i]);else for(var a=0,s=this.items.length;a<s;a++)this.items[a].attr(t,r);return this},ue.clear=function(){for(;this.length;)this.pop()},ue.splice=function(t,e,r){t=t<0?w(this.length+t,0):t,e=w(0,k(this.length-t,e));var i,n=[],a=[],s=[];for(i=2;i<arguments.length;i++)s.push(arguments[i]);for(i=0;i<e;i++)a.push(this[t+i]);for(;i<this.length-t;i++)n.push(this[t+i]);var o=s.length;for(i=0;i<o+n.length;i++)this.items[t+i]=this[t+i]=i<o?s[i]:n[i-o];for(i=this.items.length=this.length-=e-o;this[i];)delete this[i++];return new he(a)},ue.exclude=function(t){for(var e=0,r=this.length;e<r;e++)if(this[e]==t)return this.splice(e,1),!0},ue.animate=function(t,r,i,n){(e.is(i,"function")||!i)&&(n=i||null);var a,s,o=this.items.length,l=o,h=this;if(!o)return this;n&&(s=function(){!--o&&n.call(h)}),i=e.is(i,"string")?i:s;var u=e.animation(t,r,i,s);for(a=this.items[--l].animate(u);l--;)this.items[l]&&!this.items[l].removed&&this.items[l].animateWith(a,u,u),this.items[l]&&!this.items[l].removed||o--;return this},ue.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},ue.getBBox=function(){for(var t=[],e=[],r=[],i=[],n=this.items.length;n--;)if(!this.items[n].removed){var a=this.items[n].getBBox();t.push(a.x),e.push(a.y),r.push(a.x+a.width),i.push(a.y+a.height)}return{x:t=k[c](0,t),y:e=k[c](0,e),x2:r=w[c](0,r),y2:i=w[c](0,i),width:r-t,height:i-e}},ue.clone=function(t){t=this.paper.set();for(var e=0,r=this.items.length;e<r;e++)t.push(this.items[e].clone());return t},ue.toString=function(){return"Raphaël‘s set"},ue.glow=function(t){var e=this.paper.set();return this.forEach(function(r,i){var n=r.glow(t);null!=n&&n.forEach(function(t,r){e.push(t)})}),e},ue.isPointInside=function(t,e){var r=!1;return this.forEach(function(i){if(i.isPointInside(t,e))return r=!0,!1}),r},e.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},r=t.face["font-family"];for(var i in t.face)t.face[o](i)&&(e.face[i]=t.face[i]);if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg)for(var n in e.face["units-per-em"]=F(t.face["units-per-em"],10),t.glyphs)if(t.glyphs[o](n)){var a=t.glyphs[n];if(e.glyphs[n]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},a.k)for(var s in a.k)a[o](s)&&(e.glyphs[n].k[s]=a.k[s])}return t},i.getFont=function(t,r,i,n){if(n=n||"normal",i=i||"normal",r=+r||{normal:400,bold:700,lighter:300,bolder:800}[r]||400,e.fonts){var a,s=e.fonts[t];if(!s){var l=new RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,d)+"(\\s|$)","i");for(var h in e.fonts)if(e.fonts[o](h)&&l.test(h)){s=e.fonts[h];break}}if(s)for(var u=0,c=s.length;u<c&&((a=s[u]).face["font-weight"]!=r||a.face["font-style"]!=i&&a.face["font-style"]||a.face["font-stretch"]!=n);u++);return a}},i.print=function(t,r,i,a,s,o,l,h){o=o||"middle",l=w(k(l||0,1),-1),h=w(k(h||1,3),1);var u,c=x(i)[v](d),f=0,p=0,g=d;if(e.is(a,"string")&&(a=this.getFont(a)),a){u=(s||16)/a.face["units-per-em"];for(var y=a.face.bbox[v](n),m=+y[0],b=y[3]-y[1],_=0,B=+y[1]+("baseline"==o?b+ +a.face.descent:b/2),C=0,S=c.length;C<S;C++){if("\n"==c[C])f=0,A=0,p=0,_+=b*h;else{var T=p&&a.glyphs[c[C-1]]||{},A=a.glyphs[c[C]];f+=p?(T.w||a.w)+(T.k&&T.k[c[C]]||0)+a.w*l:0,p=1}A&&A.d&&(g+=e.transformPath(A.d,["t",f*u,_*u,"s",u,u,m,B,"t",(t-m)/u,(r-B)/u]))}}return this.path(g).attr({fill:"#000",stroke:"none"})},i.add=function(t){if(e.is(t,"array"))for(var r,i=this.set(),n=0,s=t.length;n<s;n++)r=t[n]||{},a[o](r.type)&&i.push(this[r.type]().attr(r));return i},e.format=function(t,r){var i=e.is(r,A)?[0][f](r):arguments;return t&&e.is(t,"string")&&i.length-1&&(t=t.replace(s,function(t,e){return null==i[++e]?d:i[e]})),t||d},e.fullfill=(oe=/\{([^\}]+)\}/g,le=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,function(t,e){return String(t).replace(oe,function(t,r){return function(t,e,r){var i=r;return e.replace(le,function(t,e,r,n,a){e=e||n,i&&(e in i&&(i=i[e]),"function"==typeof i&&a&&(i=i()))}),i=(null==i||i==r?t:i)+""}(t,r,e)})}),e.ninja=function(){if(h.was)l.win.Raphael=h.is;else{window.Raphael=void 0;try{delete window.Raphael}catch(t){}}return e},e.st=ue,t.on("raphael.DOMload",function(){r=!0}),function(t,r,i){null==t.readyState&&t.addEventListener&&(t.addEventListener("DOMContentLoaded",i=function(){t.removeEventListener("DOMContentLoaded",i,!1),t.readyState="complete"},!1),t.readyState="loading"),function r(){/in/.test(t.readyState)?setTimeout(r,9):e.eve("raphael.DOMload")}()}(document),e}.apply(e,i))||(t.exports=n)},function(t,e,r){var i,n;i=[r(0),r(3),r(4)],void 0===(n=function(t){return t}.apply(e,i))||(t.exports=n)},function(t,e,r){var i,n,a,s,o,l,h,u,c,f,p,d,g,x;s="hasOwnProperty",o=/[\.\/]/,l=/\s*,\s*/,h=function(t,e){return t-e},u={n:{}},c=function(){for(var t=0,e=this.length;t<e;t++)if(void 0!==this[t])return this[t]},f=function(){for(var t=this.length;--t;)if(void 0!==this[t])return this[t]},p=Object.prototype.toString,d=String,g=Array.isArray||function(t){return t instanceof Array||"[object Array]"==p.call(t)},(x=function(t,e){var r,i=a,s=Array.prototype.slice.call(arguments,2),o=x.listeners(t),l=0,u=[],p={},d=[],g=n;d.firstDefined=c,d.lastDefined=f,n=t,a=0;for(var v=0,y=o.length;v<y;v++)"zIndex"in o[v]&&(u.push(o[v].zIndex),o[v].zIndex<0&&(p[o[v].zIndex]=o[v]));for(u.sort(h);u[l]<0;)if(r=p[u[l++]],d.push(r.apply(e,s)),a)return a=i,d;for(v=0;v<y;v++)if("zIndex"in(r=o[v]))if(r.zIndex==u[l]){if(d.push(r.apply(e,s)),a)break;do{if((r=p[u[++l]])&&d.push(r.apply(e,s)),a)break}while(r)}else p[r.zIndex]=r;else if(d.push(r.apply(e,s)),a)break;return a=i,n=g,d})._events=u,x.listeners=function(t){var e,r,i,n,a,s,l,h,c=g(t)?t:t.split(o),f=u,p=[f],d=[];for(n=0,a=c.length;n<a;n++){for(h=[],s=0,l=p.length;s<l;s++)for(r=[(f=p[s].n)[c[n]],f["*"]],i=2;i--;)(e=r[i])&&(h.push(e),d=d.concat(e.f||[]));p=h}return d},x.separator=function(t){t?(t="["+(t=d(t).replace(/(?=[\.\^\]\[\-])/g,"\\"))+"]",o=new RegExp(t)):o=/[\.\/]/},x.on=function(t,e){if("function"!=typeof e)return function(){};for(var r=g(t)?g(t[0])?t:[t]:d(t).split(l),i=0,n=r.length;i<n;i++)!function(t){for(var r,i=g(t)?t:d(t).split(o),n=u,a=0,s=i.length;a<s;a++)n=(n=n.n).hasOwnProperty(i[a])&&n[i[a]]||(n[i[a]]={n:{}});for(n.f=n.f||[],a=0,s=n.f.length;a<s;a++)if(n.f[a]==e){r=!0;break}!r&&n.f.push(e)}(r[i]);return function(t){+t==+t&&(e.zIndex=+t)}},x.f=function(t){var e=[].slice.call(arguments,1);return function(){x.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},x.stop=function(){a=1},x.nt=function(t){var e=g(n)?n.join("."):n;return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e},x.nts=function(){return g(n)?n:n.split(o)},x.off=x.unbind=function(t,e){if(t){var r=g(t)?g(t[0])?t:[t]:d(t).split(l);if(r.length>1)for(var i=0,n=r.length;i<n;i++)x.off(r[i],e);else{r=g(t)?t:d(t).split(o);var a,h,c,f,p,v=[u];for(i=0,n=r.length;i<n;i++)for(f=0;f<v.length;f+=c.length-2){if(c=[f,1],a=v[f].n,"*"!=r[i])a[r[i]]&&c.push(a[r[i]]);else for(h in a)a[s](h)&&c.push(a[h]);v.splice.apply(v,c)}for(i=0,n=v.length;i<n;i++)for(a=v[i];a.n;){if(e){if(a.f){for(f=0,p=a.f.length;f<p;f++)if(a.f[f]==e){a.f.splice(f,1);break}!a.f.length&&delete a.f}for(h in a.n)if(a.n[s](h)&&a.n[h].f){var y=a.n[h].f;for(f=0,p=y.length;f<p;f++)if(y[f]==e){y.splice(f,1);break}!y.length&&delete a.n[h].f}}else for(h in delete a.f,a.n)a.n[s](h)&&a.n[h].f&&delete a.n[h].f;a=a.n}}}else x._events=u={n:{}}},x.once=function(t,e){var r=function(){return x.off(t,r),e.apply(this,arguments)};return x.on(t,r)},x.version="0.5.0",x.toString=function(){return"You are running Eve 0.5.0"},t.exports?t.exports=x:void 0===(i=function(){return x}.apply(e,[]))||(t.exports=i)},function(t,e,r){var i,n;i=[r(0)],void 0===(n=function(t){if(!t||t.svg){var e="hasOwnProperty",r=String,i=parseFloat,n=parseInt,a=Math,s=a.max,o=a.abs,l=a.pow,h=/[, ]+/,u=t.eve,c="",f=" ",p="http://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};t.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var x=function(i,n){if(n)for(var a in"string"==typeof i&&(i=x(i)),n)n[e](a)&&("xlink:"==a.substring(0,6)?i.setAttributeNS(p,a.substring(6),r(n[a])):i.setAttribute(a,r(n[a])));else(i=t._g.doc.createElementNS("http://www.w3.org/2000/svg",i)).style&&(i.style.webkitTapHighlightColor="rgba(0,0,0,0)");return i},v=function(e,n){var h="linear",u=e.id+n,f=.5,p=.5,d=e.node,g=e.paper,v=d.style,m=t._g.doc.getElementById(u);if(!m){if(n=(n=r(n).replace(t._radial_gradient,function(t,e,r){if(h="radial",e&&r){f=i(e);var n=2*((p=i(r))>.5)-1;l(f-.5,2)+l(p-.5,2)>.25&&(p=a.sqrt(.25-l(f-.5,2))*n+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*n)}return c})).split(/\s*\-\s*/),"linear"==h){var b=n.shift();if(b=-i(b),isNaN(b))return null;var _=[0,0,a.cos(t.rad(b)),a.sin(t.rad(b))],w=1/(s(o(_[2]),o(_[3]))||1);_[2]*=w,_[3]*=w,_[2]<0&&(_[0]=-_[2],_[2]=0),_[3]<0&&(_[1]=-_[3],_[3]=0)}var k=t._parseDots(n);if(!k)return null;if(u=u.replace(/[\(\)\s,\xb0#]/g,"_"),e.gradient&&u!=e.gradient.id&&(g.defs.removeChild(e.gradient),delete e.gradient),!e.gradient){m=x(h+"Gradient",{id:u}),e.gradient=m,x(m,"radial"==h?{fx:f,fy:p}:{x1:_[0],y1:_[1],x2:_[2],y2:_[3],gradientTransform:e.matrix.invert()}),g.defs.appendChild(m);for(var B=0,C=k.length;B<C;B++)m.appendChild(x("stop",{offset:k[B].offset?k[B].offset:B?"100%":"0%","stop-color":k[B].color||"#fff","stop-opacity":isFinite(k[B].opacity)?k[B].opacity:1}))}}return x(d,{fill:y(u),opacity:1,"fill-opacity":1}),v.fill=c,v.opacity=1,v.fillOpacity=1,1},y=function(t){if((e=document.documentMode)&&(9===e||10===e))return"url('#"+t+"')";var e,r=document.location;return"url('"+(r.protocol+"//"+r.host+r.pathname+r.search)+"#"+t+"')"},m=function(t){var e=t.getBBox(1);x(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},b=function(i,n,a){if("path"==i.type){for(var s,o,l,h,u,f=r(n).toLowerCase().split("-"),p=i.paper,v=a?"end":"start",y=i.node,m=i.attrs,b=m["stroke-width"],_=f.length,w="classic",k=3,B=3,C=5;_--;)switch(f[_]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=f[_];break;case"wide":B=5;break;case"narrow":B=2;break;case"long":k=5;break;case"short":k=2}if("open"==w?(k+=2,B+=2,C+=2,l=1,h=a?4:1,u={fill:"none",stroke:m.stroke}):(h=l=k/2,u={fill:m.stroke,stroke:"none"}),i._.arrows?a?(i._.arrows.endPath&&g[i._.arrows.endPath]--,i._.arrows.endMarker&&g[i._.arrows.endMarker]--):(i._.arrows.startPath&&g[i._.arrows.startPath]--,i._.arrows.startMarker&&g[i._.arrows.startMarker]--):i._.arrows={},"none"!=w){var S="raphael-marker-"+w,T="raphael-marker-"+v+w+k+B+"-obj"+i.id;t._g.doc.getElementById(S)?g[S]++:(p.defs.appendChild(x(x("path"),{"stroke-linecap":"round",d:d[w],id:S})),g[S]=1);var A,M=t._g.doc.getElementById(T);M?(g[T]++,A=M.getElementsByTagName("use")[0]):(M=x(x("marker"),{id:T,markerHeight:B,markerWidth:k,orient:"auto",refX:h,refY:B/2}),A=x(x("use"),{"xlink:href":"#"+S,transform:(a?"rotate(180 "+k/2+" "+B/2+") ":c)+"scale("+k/C+","+B/C+")","stroke-width":(1/((k/C+B/C)/2)).toFixed(4)}),M.appendChild(A),p.defs.appendChild(M),g[T]=1),x(A,u);var E=l*("diamond"!=w&&"oval"!=w);a?(s=i._.arrows.startdx*b||0,o=t.getTotalLength(m.path)-E*b):(s=E*b,o=t.getTotalLength(m.path)-(i._.arrows.enddx*b||0)),(u={})["marker-"+v]="url(#"+T+")",(o||s)&&(u.d=t.getSubpath(m.path,s,o)),x(y,u),i._.arrows[v+"Path"]=S,i._.arrows[v+"Marker"]=T,i._.arrows[v+"dx"]=E,i._.arrows[v+"Type"]=w,i._.arrows[v+"String"]=n}else a?(s=i._.arrows.startdx*b||0,o=t.getTotalLength(m.path)-s):(s=0,o=t.getTotalLength(m.path)-(i._.arrows.enddx*b||0)),i._.arrows[v+"Path"]&&x(y,{d:t.getSubpath(m.path,s,o)}),delete i._.arrows[v+"Path"],delete i._.arrows[v+"Marker"],delete i._.arrows[v+"dx"],delete i._.arrows[v+"Type"],delete i._.arrows[v+"String"];for(u in g)if(g[e](u)&&!g[u]){var N=t._g.doc.getElementById(u);N&&N.parentNode.removeChild(N)}}},_={"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},w=function(t,e,i){if(e=_[r(e).toLowerCase()]){for(var n=t.attrs["stroke-width"]||"1",a={round:n,square:n,butt:0}[t.attrs["stroke-linecap"]||i["stroke-linecap"]]||0,s=[],o=e.length;o--;)s[o]=e[o]*n+(o%2?1:-1)*a;x(t.node,{"stroke-dasharray":s.join(",")})}else x(t.node,{"stroke-dasharray":"none"})},k=function(i,a){var l=i.node,u=i.attrs,f=l.style.visibility;for(var d in l.style.visibility="hidden",a)if(a[e](d)){if(!t._availableAttrs[e](d))continue;var g=a[d];switch(u[d]=g,d){case"blur":i.blur(g);break;case"title":var y=l.getElementsByTagName("title");if(y.length&&(y=y[0]))y.firstChild.nodeValue=g;else{y=x("title");var _=t._g.doc.createTextNode(g);y.appendChild(_),l.appendChild(y)}break;case"href":case"target":var k=l.parentNode;if("a"!=k.tagName.toLowerCase()){var C=x("a");k.insertBefore(C,l),C.appendChild(l),k=C}"target"==d?k.setAttributeNS(p,"show","blank"==g?"new":g):k.setAttributeNS(p,d,g);break;case"cursor":l.style.cursor=g;break;case"transform":i.transform(g);break;case"arrow-start":b(i,g);break;case"arrow-end":b(i,g,1);break;case"clip-rect":var S=r(g).split(h);if(4==S.length){i.clip&&i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);var T=x("clipPath"),A=x("rect");T.id=t.createUUID(),x(A,{x:S[0],y:S[1],width:S[2],height:S[3]}),T.appendChild(A),i.paper.defs.appendChild(T),x(l,{"clip-path":"url(#"+T.id+")"}),i.clip=A}if(!g){var M=l.getAttribute("clip-path");if(M){var E=t._g.doc.getElementById(M.replace(/(^url\(#|\)$)/g,c));E&&E.parentNode.removeChild(E),x(l,{"clip-path":c}),delete i.clip}}break;case"path":"path"==i.type&&(x(l,{d:g?u.path=t._pathToAbsolute(g):"M0,0"}),i._.dirty=1,i._.arrows&&("startString"in i._.arrows&&b(i,i._.arrows.startString),"endString"in i._.arrows&&b(i,i._.arrows.endString,1)));break;case"width":if(l.setAttribute(d,g),i._.dirty=1,!u.fx)break;d="x",g=u.x;case"x":u.fx&&(g=-u.x-(u.width||0));case"rx":if("rx"==d&&"rect"==i.type)break;case"cx":l.setAttribute(d,g),i.pattern&&m(i),i._.dirty=1;break;case"height":if(l.setAttribute(d,g),i._.dirty=1,!u.fy)break;d="y",g=u.y;case"y":u.fy&&(g=-u.y-(u.height||0));case"ry":if("ry"==d&&"rect"==i.type)break;case"cy":l.setAttribute(d,g),i.pattern&&m(i),i._.dirty=1;break;case"r":"rect"==i.type?x(l,{rx:g,ry:g}):l.setAttribute(d,g),i._.dirty=1;break;case"src":"image"==i.type&&l.setAttributeNS(p,"href",g);break;case"stroke-width":1==i._.sx&&1==i._.sy||(g/=s(o(i._.sx),o(i._.sy))||1),l.setAttribute(d,g),u["stroke-dasharray"]&&w(i,u["stroke-dasharray"],a),i._.arrows&&("startString"in i._.arrows&&b(i,i._.arrows.startString),"endString"in i._.arrows&&b(i,i._.arrows.endString,1));break;case"stroke-dasharray":w(i,g,a);break;case"fill":var N=r(g).match(t._ISURL);if(N){T=x("pattern");var L=x("image");T.id=t.createUUID(),x(T,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),x(L,{x:0,y:0,"xlink:href":N[1]}),T.appendChild(L),function(e){t._preload(N[1],function(){var t=this.offsetWidth,r=this.offsetHeight;x(e,{width:t,height:r}),x(L,{width:t,height:r})})}(T),i.paper.defs.appendChild(T),x(l,{fill:"url(#"+T.id+")"}),i.pattern=T,i.pattern&&m(i);break}var P=t.getRGB(g);if(P.error){if(("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&v(i,g)){if("opacity"in u||"fill-opacity"in u){var z=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c));if(z){var F=z.getElementsByTagName("stop");x(F[F.length-1],{"stop-opacity":("opacity"in u?u.opacity:1)*("fill-opacity"in u?u["fill-opacity"]:1)})}}u.gradient=g,u.fill="none";break}}else delete a.gradient,delete u.gradient,!t.is(u.opacity,"undefined")&&t.is(a.opacity,"undefined")&&x(l,{opacity:u.opacity}),!t.is(u["fill-opacity"],"undefined")&&t.is(a["fill-opacity"],"undefined")&&x(l,{"fill-opacity":u["fill-opacity"]});P[e]("opacity")&&x(l,{"fill-opacity":P.opacity>1?P.opacity/100:P.opacity});case"stroke":P=t.getRGB(g),l.setAttribute(d,P.hex),"stroke"==d&&P[e]("opacity")&&x(l,{"stroke-opacity":P.opacity>1?P.opacity/100:P.opacity}),"stroke"==d&&i._.arrows&&("startString"in i._.arrows&&b(i,i._.arrows.startString),"endString"in i._.arrows&&b(i,i._.arrows.endString,1));break;case"gradient":("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&v(i,g);break;case"opacity":u.gradient&&!u[e]("stroke-opacity")&&x(l,{"stroke-opacity":g>1?g/100:g});case"fill-opacity":if(u.gradient){(z=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c)))&&(F=z.getElementsByTagName("stop"),x(F[F.length-1],{"stop-opacity":g}));break}default:"font-size"==d&&(g=n(g,10)+"px");var R=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});l.style[R]=g,i._.dirty=1,l.setAttribute(d,g)}}B(i,a),l.style.visibility=f},B=function(i,a){if("text"==i.type&&(a[e]("text")||a[e]("font")||a[e]("font-size")||a[e]("x")||a[e]("y"))){var s=i.attrs,o=i.node,l=o.firstChild?n(t._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue("font-size"),10):10;if(a[e]("text")){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild);for(var h,u=r(a.text).split("\n"),f=[],p=0,d=u.length;p<d;p++)h=x("tspan"),p&&x(h,{dy:1.2*l,x:s.x}),h.appendChild(t._g.doc.createTextNode(u[p])),o.appendChild(h),f[p]=h}else for(p=0,d=(f=o.getElementsByTagName("tspan")).length;p<d;p++)p?x(f[p],{dy:1.2*l,x:s.x}):x(f[0],{dy:0});x(o,{x:s.x,y:s.y}),i._.dirty=1;var g=i._getBBox(),v=s.y-(g.y+g.height/2);v&&t.is(v,"finite")&&x(f[0],{dy:v})}},C=function(t){return t.parentNode&&"a"===t.parentNode.tagName.toLowerCase()?t.parentNode:t},S=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=("0000"+(Math.random()*Math.pow(36,5)<<0).toString(36)).slice(-5),e.raphaelid=this.id,this.matrix=t.matrix(),this.realPath=null,this.paper=r,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},T=t.el;S.prototype=T,T.constructor=S,t._engine.path=function(t,e){var r=x("path");e.canvas&&e.canvas.appendChild(r);var i=new S(r,e);return i.type="path",k(i,{fill:"none",stroke:"#000",path:t}),i},T.rotate=function(t,e,n){if(this.removed)return this;if((t=r(t).split(h)).length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,e,n]])),this},T.scale=function(t,e,n,a){if(this.removed)return this;if((t=r(t).split(h)).length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3])),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this},T.translate=function(t,e){return this.removed?this:((t=r(t).split(h)).length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this.transform(this._.transform.concat([["t",t,e]])),this)},T.transform=function(r){var i=this._;if(null==r)return i.transform;if(t._extractTransform(this,r),this.clip&&x(this.clip,{transform:this.matrix.invert()}),this.pattern&&m(this),this.node&&x(this.node,{transform:this.matrix}),1!=i.sx||1!=i.sy){var n=this.attrs[e]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":n})}return this},T.hide=function(){return this.removed||(this.node.style.display="none"),this},T.show=function(){return this.removed||(this.node.style.display=""),this},T.remove=function(){var e=C(this.node);if(!this.removed&&e.parentNode){var r=this.paper;for(var i in r.__set__&&r.__set__.exclude(this),u.unbind("raphael.*.*."+this.id),this.gradient&&r.defs.removeChild(this.gradient),t._tear(this,r),e.parentNode.removeChild(e),this.removeData(),this)this[i]="function"==typeof this[i]?t._removedFactory(i):null;this.removed=!0}},T._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0}var e,r=!1;this.paper.canvas.parentElement?e=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(e=this.paper.canvas.parentNode.style),e&&"none"==e.display&&(r=!0,e.display="");var i={};try{i=this.node.getBBox()}catch(t){i={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{i=i||{},r&&(e.display="none")}return t&&this.hide(),i},T.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if("fill"==r&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==r)return this._.transform;for(var s=r.split(h),o={},l=0,c=s.length;l<c;l++)(r=s[l])in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return c-1?o:o[s[0]]}if(null==i&&t.is(r,"array")){for(o={},l=0,c=r.length;l<c;l++)o[r[l]]=this.attr(r[l]);return o}if(null!=i){var f={};f[r]=i}else null!=r&&t.is(r,"object")&&(f=r);for(var p in f)u("raphael.attr."+p+"."+this.id,this,f[p]);for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&&f[e](p)&&t.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));for(var g in this.attrs[p]=f[p],d)d[e](g)&&(f[g]=d[g])}return k(this,f),this},T.toFront=function(){if(this.removed)return this;var e=C(this.node);e.parentNode.appendChild(e);var r=this.paper;return r.top!=this&&t._tofront(this,r),this},T.toBack=function(){if(this.removed)return this;var e=C(this.node),r=e.parentNode;r.insertBefore(e,r.firstChild),t._toback(this,this.paper);this.paper;return this},T.insertAfter=function(e){if(this.removed||!e)return this;var r=C(this.node),i=C(e.node||e[e.length-1].node);return i.nextSibling?i.parentNode.insertBefore(r,i.nextSibling):i.parentNode.appendChild(r),t._insertafter(this,e,this.paper),this},T.insertBefore=function(e){if(this.removed||!e)return this;var r=C(this.node),i=C(e.node||e[0].node);return i.parentNode.insertBefore(r,i),t._insertbefore(this,e,this.paper),this},T.blur=function(e){var r=this;if(0!=+e){var i=x("filter"),n=x("feGaussianBlur");r.attrs.blur=e,i.id=t.createUUID(),x(n,{stdDeviation:+e||1.5}),i.appendChild(n),r.paper.defs.appendChild(i),r._blur=i,x(r.node,{filter:"url(#"+i.id+")"})}else r._blur&&(r._blur.parentNode.removeChild(r._blur),delete r._blur,delete r.attrs.blur),r.node.removeAttribute("filter");return r},t._engine.circle=function(t,e,r,i){var n=x("circle");t.canvas&&t.canvas.appendChild(n);var a=new S(n,t);return a.attrs={cx:e,cy:r,r:i,fill:"none",stroke:"#000"},a.type="circle",x(n,a.attrs),a},t._engine.rect=function(t,e,r,i,n,a){var s=x("rect");t.canvas&&t.canvas.appendChild(s);var o=new S(s,t);return o.attrs={x:e,y:r,width:i,height:n,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},o.type="rect",x(s,o.attrs),o},t._engine.ellipse=function(t,e,r,i,n){var a=x("ellipse");t.canvas&&t.canvas.appendChild(a);var s=new S(a,t);return s.attrs={cx:e,cy:r,rx:i,ry:n,fill:"none",stroke:"#000"},s.type="ellipse",x(a,s.attrs),s},t._engine.image=function(t,e,r,i,n,a){var s=x("image");x(s,{x:r,y:i,width:n,height:a,preserveAspectRatio:"none"}),s.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(s);var o=new S(s,t);return o.attrs={x:r,y:i,width:n,height:a,src:e},o.type="image",o},t._engine.text=function(e,r,i,n){var a=x("text");e.canvas&&e.canvas.appendChild(a);var s=new S(a,e);return s.attrs={x:r,y:i,"text-anchor":"middle",text:n,"font-family":t._availableAttrs["font-family"],"font-size":t._availableAttrs["font-size"],stroke:"none",fill:"#000"},s.type="text",k(s,s.attrs),s},t._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e&&e.container;if(!r)throw new Error("SVG container not found.");var i,n=e.x,a=e.y,s=e.width,o=e.height,l=x("svg"),h="overflow:hidden;";return n=n||0,a=a||0,x(l,{height:o=o||342,version:1.1,width:s=s||512,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),1==r?(l.style.cssText=h+"position:absolute;left:"+n+"px;top:"+a+"px",t._g.doc.body.appendChild(l),i=1):(l.style.cssText=h+"position:relative",r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l)),(r=new t._Paper).width=s,r.height=o,r.canvas=l,r.clear(),r._left=r._top=0,i&&(r.renderfix=function(){}),r.renderfix(),r},t._engine.setViewBox=function(t,e,r,i,n){u("raphael.setViewBox",this,this._viewBox,[t,e,r,i,n]);var a,o,l=this.getSize(),h=s(r/l.width,i/l.height),c=this.top,p=n?"xMidYMid meet":"xMinYMin";for(null==t?(this._vbSize&&(h=1),delete this._vbSize,a="0 0 "+this.width+f+this.height):(this._vbSize=h,a=t+f+e+f+r+f+i),x(this.canvas,{viewBox:a,preserveAspectRatio:p});h&&c;)o="stroke-width"in c.attrs?c.attrs["stroke-width"]:1,c.attr({"stroke-width":o}),c._.dirty=1,c._.dirtyT=1,c=c.prev;return this._viewBox=[t,e,r,i,!!n],this},t.prototype.renderfix=function(){var t,e=this.canvas,r=e.style;try{t=e.getScreenCTM()||e.createSVGMatrix()}catch(r){t=e.createSVGMatrix()}var i=-t.e%1,n=-t.f%1;(i||n)&&(i&&(this._left=(this._left+i)%1,r.left=this._left+"px"),n&&(this._top=(this._top+n)%1,r.top=this._top+"px"))},t.prototype.clear=function(){t.eve("raphael.clear",this);for(var e=this.canvas;e.firstChild;)e.removeChild(e.firstChild);this.bottom=this.top=null,(this.desc=x("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël "+t.version)),e.appendChild(this.desc),e.appendChild(this.defs=x("defs"))},t.prototype.remove=function(){for(var e in u("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this)this[e]="function"==typeof this[e]?t._removedFactory(e):null};var A=t.st;for(var M in T)T[e](M)&&!A[e](M)&&(A[M]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(M))}}.apply(e,i))||(t.exports=n)},function(t,e,r){var i,n;i=[r(0)],void 0===(n=function(t){if(!t||t.vml){var e="hasOwnProperty",r=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h=/[, ]+/,u=t.eve,c=" ",f="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},d=/([clmz]),?([^clmz]*)/gi,g=/ progid:\S+Blur\([^\)]+\)/g,x=/-?[^,\s-]+/g,v="position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",y=21600,m={path:1,rect:1,image:1},b={circle:1,ellipse:1},_=function(e,r,i){var n=t.matrix();return n.rotate(-e,.5,.5),{dx:n.x(r,i),dy:n.y(r,i)}},w=function(t,e,r,i,n,a){var s=t._,o=t.matrix,h=s.fillpos,u=t.node,f=u.style,p=1,d="",g=y/e,x=y/r;if(f.visibility="hidden",e&&r){if(u.coordsize=l(g)+c+l(x),f.rotation=a*(e*r<0?-1:1),a){var v=_(a,i,n);i=v.dx,n=v.dy}if(e<0&&(d+="x"),r<0&&(d+=" y")&&(p=-1),f.flip=d,u.coordorigin=i*-g+c+n*-x,h||s.fillsize){var m=u.getElementsByTagName("fill");m=m&&m[0],u.removeChild(m),h&&(v=_(a,o.x(h[0],h[1]),o.y(h[0],h[1])),m.position=v.dx*p+c+v.dy*p),s.fillsize&&(m.size=s.fillsize[0]*l(e)+c+s.fillsize[1]*l(r)),u.appendChild(m)}f.visibility="visible"}};t.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var k,B=function(t,e,i){for(var n=r(e).toLowerCase().split("-"),a=i?"end":"start",s=n.length,o="classic",l="medium",h="medium";s--;)switch(n[s]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[s];break;case"wide":case"narrow":h=n[s];break;case"long":case"short":l=n[s]}var u=t.node.getElementsByTagName("stroke")[0];u[a+"arrow"]=o,u[a+"arrowlength"]=l,u[a+"arrowwidth"]=h},C=function(n,l){n.attrs=n.attrs||{};var u=n.node,g=n.attrs,v=u.style,_=m[n.type]&&(l.x!=g.x||l.y!=g.y||l.width!=g.width||l.height!=g.height||l.cx!=g.cx||l.cy!=g.cy||l.rx!=g.rx||l.ry!=g.ry||l.r!=g.r),C=b[n.type]&&(g.cx!=l.cx||g.cy!=l.cy||g.r!=l.r||g.rx!=l.rx||g.ry!=l.ry),T=n;for(var A in l)l[e](A)&&(g[A]=l[A]);if(_&&(g.path=t._getPath[n.type](n),n._.dirty=1),l.href&&(u.href=l.href),l.title&&(u.title=l.title),l.target&&(u.target=l.target),l.cursor&&(v.cursor=l.cursor),"blur"in l&&n.blur(l.blur),(l.path&&"path"==n.type||_)&&(u.path=function(e){var i=/[ahqstv]/gi,n=t._pathToAbsolute;if(r(e).match(i)&&(n=t._path2curve),i=/[clmz]/g,n==t._pathToAbsolute&&!r(e).match(i)){var s=r(e).replace(d,function(t,e,r){var i=[],n="m"==e.toLowerCase(),s=p[e];return r.replace(x,function(t){n&&2==i.length&&(s+=i+p["m"==e?"l":"L"],i=[]),i.push(a(t*y))}),s+i});return s}var o,l,h=n(e);s=[];for(var u=0,g=h.length;u<g;u++){o=h[u],"z"==(l=h[u][0].toLowerCase())&&(l="x");for(var v=1,m=o.length;v<m;v++)l+=a(o[v]*y)+(v!=m-1?",":f);s.push(l)}return s.join(c)}(~r(g.path).toLowerCase().indexOf("r")?t._pathToAbsolute(g.path):g.path),n._.dirty=1,"image"==n.type&&(n._.fillpos=[g.x,g.y],n._.fillsize=[g.width,g.height],w(n,1,1,0,0,0))),"transform"in l&&n.transform(l.transform),C){var M=+g.cx,E=+g.cy,N=+g.rx||+g.r||0,L=+g.ry||+g.r||0;u.path=t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((M-N)*y),a((E-L)*y),a((M+N)*y),a((E+L)*y),a(M*y)),n._.dirty=1}if("clip-rect"in l){var P=r(l["clip-rect"]).split(h);if(4==P.length){P[2]=+P[2]+ +P[0],P[3]=+P[3]+ +P[1];var z=u.clipRect||t._g.doc.createElement("div"),F=z.style;F.clip=t.format("rect({1}px {2}px {3}px {0}px)",P),u.clipRect||(F.position="absolute",F.top=0,F.left=0,F.width=n.paper.width+"px",F.height=n.paper.height+"px",u.parentNode.insertBefore(z,u),z.appendChild(u),u.clipRect=z)}l["clip-rect"]||u.clipRect&&(u.clipRect.style.clip="auto")}if(n.textpath){var R=n.textpath.style;l.font&&(R.font=l.font),l["font-family"]&&(R.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,f)+'"'),l["font-size"]&&(R.fontSize=l["font-size"]),l["font-weight"]&&(R.fontWeight=l["font-weight"]),l["font-style"]&&(R.fontStyle=l["font-style"])}if("arrow-start"in l&&B(T,l["arrow-start"]),"arrow-end"in l&&B(T,l["arrow-end"],1),null!=l.opacity||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var j=u.getElementsByTagName("fill");if(!(j=j&&j[0])&&(j=k("fill")),"image"==n.type&&l.src&&(j.src=l.src),l.fill&&(j.on=!0),null!=j.on&&"none"!=l.fill&&null!==l.fill||(j.on=!1),j.on&&l.fill){var I=r(l.fill).match(t._ISURL);if(I){j.parentNode==u&&u.removeChild(j),j.rotate=!0,j.src=I[1],j.type="tile";var D=n.getBBox(1);j.position=D.x+c+D.y,n._.fillpos=[D.x,D.y],t._preload(I[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else j.color=t.getRGB(l.fill).hex,j.src=f,j.type="solid",t.getRGB(l.fill).error&&(T.type in{circle:1,ellipse:1}||"r"!=r(l.fill).charAt())&&S(T,l.fill,j)&&(g.fill="none",g.gradient=l.fill,j.rotate=!1)}if("fill-opacity"in l||"opacity"in l){var q=((+g["fill-opacity"]+1||2)-1)*((+g.opacity+1||2)-1)*((+t.getRGB(l.fill).o+1||2)-1);q=o(s(q,0),1),j.opacity=q,j.src&&(j.color="none")}u.appendChild(j);var O=u.getElementsByTagName("stroke")&&u.getElementsByTagName("stroke")[0],V=!1;!O&&(V=O=k("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(O.on=!0),("none"==l.stroke||null===l.stroke||null==O.on||0==l.stroke||0==l["stroke-width"])&&(O.on=!1);var W=t.getRGB(l.stroke);O.on&&l.stroke&&(O.color=W.hex),q=((+g["stroke-opacity"]+1||2)-1)*((+g.opacity+1||2)-1)*((+W.o+1||2)-1);var Y=.75*(i(l["stroke-width"])||1);if(q=o(s(q,0),1),null==l["stroke-width"]&&(Y=g["stroke-width"]),l["stroke-width"]&&(O.weight=Y),Y&&Y<1&&(q*=Y)&&(O.weight=1),O.opacity=q,l["stroke-linejoin"]&&(O.joinstyle=l["stroke-linejoin"]||"miter"),O.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(O.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),"stroke-dasharray"in l){var G={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};O.dashstyle=G[e](l["stroke-dasharray"])?G[l["stroke-dasharray"]]:f}V&&u.appendChild(O)}if("text"==T.type){T.paper.canvas.style.display=f;var H=T.paper.span,X=g.font&&g.font.match(/\d+(?:\.\d*)?(?=px)/);v=H.style,g.font&&(v.font=g.font),g["font-family"]&&(v.fontFamily=g["font-family"]),g["font-weight"]&&(v.fontWeight=g["font-weight"]),g["font-style"]&&(v.fontStyle=g["font-style"]),X=i(g["font-size"]||X&&X[0])||10,v.fontSize=100*X+"px",T.textpath.string&&(H.innerHTML=r(T.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var U=H.getBoundingClientRect();T.W=g.w=(U.right-U.left)/100,T.H=g.h=(U.bottom-U.top)/100,T.X=g.x,T.Y=g.y+T.H/2,("x"in l||"y"in l)&&(T.path.v=t.format("m{0},{1}l{2},{1}",a(g.x*y),a(g.y*y),a(g.x*y)+1));for(var $=["x","y","text","font","font-family","font-weight","font-style","font-size"],Z=0,Q=$.length;Z<Q;Z++)if($[Z]in l){T._.dirty=1;break}switch(g["text-anchor"]){case"start":T.textpath.style["v-text-align"]="left",T.bbx=T.W/2;break;case"end":T.textpath.style["v-text-align"]="right",T.bbx=-T.W/2;break;default:T.textpath.style["v-text-align"]="center",T.bbx=0}T.textpath.style["v-text-kern"]=!0}},S=function(e,a,s){e.attrs=e.attrs||{};e.attrs;var o=Math.pow,l="linear",h=".5 .5";if(e.attrs.gradient=a,a=(a=r(a).replace(t._radial_gradient,function(t,e,r){return l="radial",e&&r&&(e=i(e),r=i(r),o(e-.5,2)+o(r-.5,2)>.25&&(r=n.sqrt(.25-o(e-.5,2))*(2*(r>.5)-1)+.5),h=e+c+r),f})).split(/\s*\-\s*/),"linear"==l){var u=a.shift();if(u=-i(u),isNaN(u))return null}var p=t._parseDots(a);if(!p)return null;if(e=e.shape||e.node,p.length){e.removeChild(s),s.on=!0,s.method="none",s.color=p[0].color,s.color2=p[p.length-1].color;for(var d=[],g=0,x=p.length;g<x;g++)p[g].offset&&d.push(p[g].offset+c+p[g].color);s.colors=d.length?d.join():"0% "+s.color,"radial"==l?(s.type="gradientTitle",s.focus="100%",s.focussize="0 0",s.focusposition=h,s.angle=0):(s.type="gradient",s.angle=(270-u)%360),e.appendChild(s)}return 1},T=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=r,this.matrix=t.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},A=t.el;T.prototype=A,A.constructor=T,A.transform=function(e){if(null==e)return this._.transform;var i,n=this.paper._viewBoxShift,a=n?"s"+[n.scale,n.scale]+"-1-1t"+[n.dx,n.dy]:f;n&&(i=e=r(e).replace(/\.{3}|\u2026/g,this._.transform||f)),t._extractTransform(this,a+e);var s,o=this.matrix.clone(),l=this.skew,h=this.node,u=~r(this.attrs.fill).indexOf("-"),p=!r(this.attrs.fill).indexOf("url(");if(o.translate(1,1),p||u||"image"==this.type)if(l.matrix="1 0 0 1",l.offset="0 0",s=o.split(),u&&s.noRotation||!s.isSimple){h.style.filter=o.toFilter();var d=this.getBBox(),g=this.getBBox(1),x=d.x-g.x,v=d.y-g.y;h.coordorigin=x*-y+c+v*-y,w(this,1,1,x,v,0)}else h.style.filter=f,w(this,s.scalex,s.scaley,s.dx,s.dy,s.rotate);else h.style.filter=f,l.matrix=r(o),l.offset=o.offset();return null!==i&&(this._.transform=i,t._extractTransform(this,i)),this},A.rotate=function(t,e,n){if(this.removed)return this;if(null!=t){if((t=r(t).split(h)).length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,e,n]])),this}},A.translate=function(t,e){return this.removed?this:((t=r(t).split(h)).length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=e),this.transform(this._.transform.concat([["t",t,e]])),this)},A.scale=function(t,e,n,a){if(this.removed)return this;if((t=r(t).split(h)).length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&&(n=null),isNaN(a)&&(a=null)),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this._.dirtyT=1,this},A.hide=function(){return!this.removed&&(this.node.style.display="none"),this},A.show=function(){return!this.removed&&(this.node.style.display=f),this},A.auxGetBBox=t.el.getBBox,A.getBBox=function(){var t=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var e={},r=1/this.paper._viewBoxShift.scale;return e.x=t.x-this.paper._viewBoxShift.dx,e.x*=r,e.y=t.y-this.paper._viewBoxShift.dy,e.y*=r,e.width=t.width*r,e.height=t.height*r,e.x2=e.x+e.width,e.y2=e.y+e.height,e}return t},A._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},A.remove=function(){if(!this.removed&&this.node.parentNode){for(var e in this.paper.__set__&&this.paper.__set__.exclude(this),t.eve.unbind("raphael.*.*."+this.id),t._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape),this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;this.removed=!0}},A.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if("fill"==r&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var s=r.split(h),o={},l=0,c=s.length;l<c;l++)(r=s[l])in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return c-1?o:o[s[0]]}if(this.attrs&&null==i&&t.is(r,"array")){for(o={},l=0,c=r.length;l<c;l++)o[r[l]]=this.attr(r[l]);return o}var f;for(var p in null!=i&&((f={})[r]=i),null==i&&t.is(r,"object")&&(f=r),f)u("raphael.attr."+p+"."+this.id,this,f[p]);if(f){for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&&f[e](p)&&t.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));for(var g in this.attrs[p]=f[p],d)d[e](g)&&(f[g]=d[g])}f.text&&"text"==this.type&&(this.textpath.string=f.text),C(this,f)}return this},A.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&t._tofront(this,this.paper),this},A.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper)),this)},A.insertAfter=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[e.length-1]),e.node.nextSibling?e.node.parentNode.insertBefore(this.node,e.node.nextSibling):e.node.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this)},A.insertBefore=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[0]),e.node.parentNode.insertBefore(this.node,e.node),t._insertbefore(this,e,this.paper),this)},A.blur=function(e){var r=this.node.runtimeStyle,i=r.filter;return i=i.replace(g,f),0!=+e?(this.attrs.blur=e,r.filter=i+c+" progid:DXImageTransform.Microsoft.Blur(pixelradius="+(+e||1.5)+")",r.margin=t.format("-{0}px 0 0 -{0}px",a(+e||1.5))):(r.filter=i,r.margin=0,delete this.attrs.blur),this},t._engine.path=function(t,e){var r=k("shape");r.style.cssText=v,r.coordsize=y+c+y,r.coordorigin=e.coordorigin;var i=new T(r,e),n={fill:"none",stroke:"#000"};t&&(n.path=t),i.type="path",i.path=[],i.Path=f,C(i,n),e.canvas&&e.canvas.appendChild(r);var a=k("skew");return a.on=!0,r.appendChild(a),i.skew=a,i.transform(f),i},t._engine.rect=function(e,r,i,n,a,s){var o=t._rectPath(r,i,n,a,s),l=e.path(o),h=l.attrs;return l.X=h.x=r,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type="rect",l},t._engine.ellipse=function(t,e,r,i,n){var a=t.path();a.attrs;return a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type="ellipse",C(a,{cx:e,cy:r,rx:i,ry:n}),a},t._engine.circle=function(t,e,r,i){var n=t.path();n.attrs;return n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",C(n,{cx:e,cy:r,r:i}),n},t._engine.image=function(e,r,i,n,a,s){var o=t._rectPath(i,n,a,s),l=e.path(o).attr({stroke:"none"}),h=l.attrs,u=l.node,c=u.getElementsByTagName("fill")[0];return h.src=r,l.X=h.x=i,l.Y=h.y=n,l.W=h.width=a,l.H=h.height=s,h.path=o,l.type="image",c.parentNode==u&&u.removeChild(c),c.rotate=!0,c.src=r,c.type="tile",l._.fillpos=[i,n],l._.fillsize=[a,s],u.appendChild(c),w(l,1,1,0,0,0),l},t._engine.text=function(e,i,n,s){var o=k("shape"),l=k("path"),h=k("textpath");i=i||0,n=n||0,s=s||"",l.v=t.format("m{0},{1}l{2},{1}",a(i*y),a(n*y),a(i*y)+1),l.textpathok=!0,h.string=r(s),h.on=!0,o.style.cssText=v,o.coordsize=y+c+y,o.coordorigin="0 0";var u=new T(o,e),p={fill:"#000",stroke:"none",font:t._availableAttrs.font,text:s};u.shape=o,u.path=l,u.textpath=h,u.type="text",u.attrs.text=r(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,C(u,p),o.appendChild(h),o.appendChild(l),e.canvas.appendChild(o);var d=k("skew");return d.on=!0,o.appendChild(d),u.skew=d,u.transform(f),u},t._engine.setSize=function(e,r){var i=this.canvas.style;return this.width=e,this.height=r,e==+e&&(e+="px"),r==+r&&(r+="px"),i.width=e,i.height=r,i.clip="rect(0 "+e+" "+r+" 0)",this._viewBox&&t._engine.setViewBox.apply(this,this._viewBox),this},t._engine.setViewBox=function(e,r,i,n,a){t.eve("raphael.setViewBox",this,this._viewBox,[e,r,i,n,a]);var s,o,l=this.getSize(),h=l.width,u=l.height;return a&&(i*(s=u/n)<h&&(e-=(h-i*s)/2/s),n*(o=h/i)<u&&(r-=(u-n*o)/2/o)),this._viewBox=[e,r,i,n,!!a],this._viewBoxShift={dx:-e,dy:-r,scale:l},this.forEach(function(t){t.transform("...")}),this},t._engine.initWin=function(t){var e=t.document;e.styleSheets.length<31?e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"):e.styleSheets[0].addRule(".rvml","behavior:url(#default#VML)");try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),k=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(t){k=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},t._engine.initWin(t._g.win),t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e.container,i=e.height,n=e.width,a=e.x,s=e.y;if(!r)throw new Error("VML container not found.");var o=new t._Paper,l=o.canvas=t._g.doc.createElement("div"),h=l.style;return a=a||0,s=s||0,n=n||512,i=i||342,o.width=n,o.height=i,n==+n&&(n+="px"),i==+i&&(i+="px"),o.coordsize=216e5+c+216e5,o.coordorigin="0 0",o.span=t._g.doc.createElement("span"),o.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",l.appendChild(o.span),h.cssText=t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",n,i),1==r?(t._g.doc.body.appendChild(l),h.left=a+"px",h.top=s+"px",h.position="absolute"):r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),o.renderfix=function(){},o},t.prototype.clear=function(){t.eve("raphael.clear",this),this.canvas.innerHTML=f,this.span=t._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},t.prototype.remove=function(){for(var e in t.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas),this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;return!0};var M=t.st;for(var E in A)A[e](E)&&!M[e](E)&&(M[E]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(E))}}.apply(e,i))||(t.exports=n)}])});

/***/ }),

/***/ 1:
/*!*******************************************************!*\
  !*** multi ./node_modules/morris-js-module/morris.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\ecix-admin-base\node_modules\morris-js-module\morris.js */"./node_modules/morris-js-module/morris.js");


/***/ })

/******/ });