/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _history = __webpack_require__(53);
	
	var _DocApp = __webpack_require__(58);
	
	var _DocApp2 = _interopRequireDefault(_DocApp);
	
	var _html = __webpack_require__(59);
	
	var _html2 = _interopRequireDefault(_html);
	
	var _ = __webpack_require__(72);
	
	var ReactMDL = _interopRequireWildcard(_);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-eval: 0 */
	
	// export all ReactMDL into global so we can generate demos
	
	for (var component in ReactMDL) {
	    if (ReactMDL.hasOwnProperty(component)) {
	        global[component] = ReactMDL[component];
	    }
	}
	
	var home = !!_html2.default.home ? _react2.default.createElement(_reactRouter.IndexRoute, { component: function component() {
	        return _react2.default.createElement('section', { dangerouslySetInnerHTML: { __html: _html2.default.home } });
	    } }) : null;
	
	var routes = Object.keys(_html2.default).filter(function (e) {
	    return e !== 'home';
	}).map(function (page) {
	    var PageComponent = (function (_React$Component) {
	        _inherits(PageComponent, _React$Component);
	
	        function PageComponent() {
	            _classCallCheck(this, PageComponent);
	
	            return _possibleConstructorReturn(this, Object.getPrototypeOf(PageComponent).apply(this, arguments));
	        }
	
	        _createClass(PageComponent, [{
	            key: 'componentDidMount',
	            value: function componentDidMount() {
	                window.componentHandler.upgradeElements((0, _reactDom.findDOMNode)(this));
	
	                var demoJs = document.querySelectorAll('.demo-js');
	                Array.from(demoJs).forEach(function (code) {
	                    return eval(code.innerHTML);
	                });
	            }
	        }, {
	            key: 'componentWillUnmount',
	            value: function componentWillUnmount() {
	                window.componentHandler.downgradeElements((0, _reactDom.findDOMNode)(this));
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                return _react2.default.createElement('section', { dangerouslySetInnerHTML: { __html: _html2.default[page] } });
	            }
	        }]);
	
	        return PageComponent;
	    })(_react2.default.Component);
	
	    return _react2.default.createElement(_reactRouter.Route, { key: page, path: page, component: PageComponent });
	});
	
	var history = (0, _history.useBasename)(_history.createHashHistory)({
	    queryKey: false
	});
	
	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: history },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: _DocApp2.default },
	        home,
	        routes
	    )
	), document.getElementById('app'));
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* components */
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Router2 = __webpack_require__(4);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	exports.Router = _Router3['default'];
	
	var _Link2 = __webpack_require__(41);
	
	var _Link3 = _interopRequireDefault(_Link2);
	
	exports.Link = _Link3['default'];
	
	var _IndexLink2 = __webpack_require__(42);
	
	var _IndexLink3 = _interopRequireDefault(_IndexLink2);
	
	exports.IndexLink = _IndexLink3['default'];
	
	/* components (configuration) */
	
	var _IndexRedirect2 = __webpack_require__(43);
	
	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);
	
	exports.IndexRedirect = _IndexRedirect3['default'];
	
	var _IndexRoute2 = __webpack_require__(45);
	
	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);
	
	exports.IndexRoute = _IndexRoute3['default'];
	
	var _Redirect2 = __webpack_require__(44);
	
	var _Redirect3 = _interopRequireDefault(_Redirect2);
	
	exports.Redirect = _Redirect3['default'];
	
	var _Route2 = __webpack_require__(46);
	
	var _Route3 = _interopRequireDefault(_Route2);
	
	exports.Route = _Route3['default'];
	
	/* mixins */
	
	var _History2 = __webpack_require__(47);
	
	var _History3 = _interopRequireDefault(_History2);
	
	exports.History = _History3['default'];
	
	var _Lifecycle2 = __webpack_require__(48);
	
	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);
	
	exports.Lifecycle = _Lifecycle3['default'];
	
	var _RouteContext2 = __webpack_require__(49);
	
	var _RouteContext3 = _interopRequireDefault(_RouteContext2);
	
	exports.RouteContext = _RouteContext3['default'];
	
	/* utils */
	
	var _useRoutes2 = __webpack_require__(28);
	
	var _useRoutes3 = _interopRequireDefault(_useRoutes2);
	
	exports.useRoutes = _useRoutes3['default'];
	
	var _RouteUtils = __webpack_require__(24);
	
	exports.createRoutes = _RouteUtils.createRoutes;
	
	var _RoutingContext2 = __webpack_require__(25);
	
	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);
	
	exports.RoutingContext = _RoutingContext3['default'];
	
	var _PropTypes2 = __webpack_require__(40);
	
	var _PropTypes3 = _interopRequireDefault(_PropTypes2);
	
	exports.PropTypes = _PropTypes3['default'];
	
	var _match2 = __webpack_require__(50);
	
	var _match3 = _interopRequireDefault(_match2);
	
	exports.match = _match3['default'];
	
	var _Router4 = _interopRequireDefault(_Router2);
	
	exports['default'] = _Router4['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _warning = __webpack_require__(6);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _historyLibCreateHashHistory = __webpack_require__(7);
	
	var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);
	
	var _RouteUtils = __webpack_require__(24);
	
	var _RoutingContext = __webpack_require__(25);
	
	var _RoutingContext2 = _interopRequireDefault(_RoutingContext);
	
	var _useRoutes = __webpack_require__(28);
	
	var _useRoutes2 = _interopRequireDefault(_useRoutes);
	
	var _PropTypes = __webpack_require__(40);
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;
	
	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RoutingContext> with all the props
	 * it needs each time the URL changes.
	 */
	
	var Router = (function (_Component) {
	  _inherits(Router, _Component);
	
	  _createClass(Router, null, [{
	    key: 'propTypes',
	    value: {
	      history: object,
	      children: _PropTypes.routes,
	      routes: _PropTypes.routes, // alias for children
	      RoutingContext: func.isRequired,
	      createElement: func,
	      onError: func,
	      onUpdate: func,
	      parseQueryString: func,
	      stringifyQuery: func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      RoutingContext: _RoutingContext2['default']
	    },
	    enumerable: true
	  }]);
	
	  function Router(props, context) {
	    _classCallCheck(this, Router);
	
	    _Component.call(this, props, context);
	
	    this.state = {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  }
	
	  Router.prototype.handleError = function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  };
	
	  Router.prototype.componentWillMount = function componentWillMount() {
	    var _this = this;
	
	    var _props = this.props;
	    var history = _props.history;
	    var children = _props.children;
	    var routes = _props.routes;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;
	
	    var createHistory = history ? function () {
	      return history;
	    } : _historyLibCreateHashHistory2['default'];
	
	    this.history = _useRoutes2['default'](createHistory)({
	      routes: _RouteUtils.createRoutes(routes || children),
	      parseQueryString: parseQueryString,
	      stringifyQuery: stringifyQuery
	    });
	
	    this._unlisten = this.history.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	  };
	
	  /* istanbul ignore next: sanity check */
	
	  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : undefined;
	  };
	
	  Router.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  };
	
	  Router.prototype.render = function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props2 = this.props;
	    var RoutingContext = _props2.RoutingContext;
	    var createElement = _props2.createElement;
	
	    var props = _objectWithoutProperties(_props2, ['RoutingContext', 'createElement']);
	
	    if (location == null) return null; // Async match
	
	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });
	
	    return _react2['default'].createElement(RoutingContext, _extends({}, props, {
	      history: this.history,
	      createElement: createElement,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components
	    }));
	  };
	
	  return Router;
	})(_react.Component);
	
	exports['default'] = Router;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(6);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Actions = __webpack_require__(9);
	
	var _ExecutionEnvironment = __webpack_require__(10);
	
	var _DOMUtils = __webpack_require__(11);
	
	var _DOMStateStorage = __webpack_require__(12);
	
	var _createDOMHistory = __webpack_require__(13);
	
	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);
	
	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}
	
	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();
	
	  if (isAbsolutePath(path)) return true;
	
	  _DOMUtils.replaceHashPath('/' + path);
	
	  return false;
	}
	
	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}
	
	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}
	
	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}
	
	var DefaultQueryKey = '_k';
	
	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;
	
	  var queryKey = options.queryKey;
	
	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;
	
	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();
	
	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);
	
	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }
	
	    return history.createLocation(path, state, undefined, key);
	  }
	
	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;
	
	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.
	
	      transitionTo(getCurrentLocation());
	    }
	
	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);
	
	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }
	
	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;
	
	    if (action === _Actions.POP) return; // Nothing to do.
	
	    var path = (basename || '') + pathname + search;
	
	    if (queryKey) {
	      path = addQueryStringValueToPath(path, queryKey, key);
	      _DOMStateStorage.saveState(key, state);
	    } else {
	      // Drop key and state.
	      location.key = location.state = null;
	    }
	
	    var currentHash = _DOMUtils.getHashPath();
	
	    if (action === _Actions.PUSH) {
	      if (currentHash !== path) {
	        window.location.hash = path;
	      } else {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
	      }
	    } else if (currentHash !== path) {
	      // REPLACE
	      _DOMUtils.replaceHashPath(path);
	    }
	  }
	
	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));
	
	  var listenerCount = 0,
	      stopHashChangeListener = undefined;
	
	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);
	
	    var unlisten = history.listenBefore(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }
	
	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);
	
	    var unlisten = history.listen(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }
	
	  function pushState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
	
	    history.pushState(state, path);
	  }
	
	  function replaceState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
	
	    history.replaceState(state, path);
	  }
	
	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();
	
	  function go(n) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;
	
	    history.go(n);
	  }
	
	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }
	
	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);
	
	    history.registerTransitionHook(hook);
	  }
	
	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);
	
	    if (--listenerCount === 0) stopHashChangeListener();
	  }
	
	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    pushState: pushState,
	    replaceState: replaceState,
	    go: go,
	    createHref: createHref,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}
	
	exports['default'] = createHashHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';
	
	exports.__esModule = true;
	var PUSH = 'PUSH';
	
	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';
	
	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';
	
	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;
	
	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}
	
	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}
	
	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}
	
	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}
	
	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}
	
	function go(n) {
	  if (n) window.history.go(n);
	}
	
	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}
	
	/**
	 * Returns true if the HTML5 history API is supported. Taken from modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */
	
	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}
	
	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	
	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*eslint-disable no-empty */
	'use strict';
	
	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(6);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var KeyPrefix = '@@History/';
	var QuotaExceededError = 'QuotaExceededError';
	var SecurityError = 'SecurityError';
	
	function createKey(key) {
	  return KeyPrefix + key;
	}
	
	function saveState(key, state) {
	  try {
	    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;
	
	      return;
	    }
	
	    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;
	
	      return;
	    }
	
	    throw error;
	  }
	}
	
	function readState(key) {
	  var json = undefined;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;
	
	      return null;
	    }
	  }
	
	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }
	
	  return null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ExecutionEnvironment = __webpack_require__(10);
	
	var _DOMUtils = __webpack_require__(11);
	
	var _createHistory = __webpack_require__(14);
	
	var _createHistory2 = _interopRequireDefault(_createHistory);
	
	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));
	
	  function listen(listener) {
	    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;
	
	    return history.listen(listener);
	  }
	
	  return _extends({}, history, {
	    listen: listen
	  });
	}
	
	exports['default'] = createDOMHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deepEqual = __webpack_require__(15);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _AsyncUtils = __webpack_require__(18);
	
	var _Actions = __webpack_require__(9);
	
	var _createLocation2 = __webpack_require__(19);
	
	var _createLocation3 = _interopRequireDefault(_createLocation2);
	
	var _runTransitionHook = __webpack_require__(22);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _deprecate = __webpack_require__(23);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}
	
	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}
	
	var DefaultKeyLength = 6;
	
	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var keyLength = options.keyLength;
	  var getUserConfirmation = options.getUserConfirmation;
	
	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;
	
	  var transitionHooks = [];
	
	  function listenBefore(hook) {
	    transitionHooks.push(hook);
	
	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }
	
	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;
	
	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }
	
	  function updateLocation(newLocation) {
	    var current = getCurrent();
	
	    location = newLocation;
	
	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }
	
	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }
	
	  function listen(listener) {
	    changeListeners.push(listener);
	
	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }
	
	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }
	
	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }
	
	  var pendingLocation = undefined;
	
	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.
	
	    pendingLocation = nextLocation;
	
	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.
	
	      if (ok) {
	        // treat PUSH to current path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var _getCurrentLocation = getCurrentLocation();
	
	          var pathname = _getCurrentLocation.pathname;
	          var search = _getCurrentLocation.search;
	
	          var currentPath = pathname + search;
	          var path = nextLocation.pathname + nextLocation.search;
	
	          if (currentPath === path) nextLocation.action = _Actions.REPLACE;
	        }
	
	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);
	
	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }
	
	  function pushState(state, path) {
	    transitionTo(createLocation(path, state, _Actions.PUSH, createKey()));
	  }
	
	  function push(path) {
	    pushState(null, path);
	  }
	
	  function replaceState(state, path) {
	    transitionTo(createLocation(path, state, _Actions.REPLACE, createKey()));
	  }
	
	  function replace(path) {
	    replaceState(null, path);
	  }
	
	  function goBack() {
	    go(-1);
	  }
	
	  function goForward() {
	    go(1);
	  }
	
	  function createKey() {
	    return createRandomKey(keyLength);
	  }
	
	  function createPath(path) {
	    if (path == null || typeof path === 'string') return path;
	
	    var pathname = path.pathname;
	    var search = path.search;
	    var hash = path.hash;
	
	    var result = pathname;
	
	    if (search) result += search;
	
	    if (hash) result += hash;
	
	    return result;
	  }
	
	  function createHref(path) {
	    return createPath(path);
	  }
	
	  function createLocation(path, state, action) {
	    var key = arguments.length <= 3 || arguments[3] === undefined ? createKey() : arguments[3];
	
	    return _createLocation3['default'](path, state, action, key);
	  }
	
	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }
	
	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }
	
	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }
	
	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }
	
	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    pushState: pushState,
	    replaceState: replaceState,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,
	
	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead')
	  };
	}
	
	exports['default'] = createHistory;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(16);
	var isArguments = __webpack_require__(17);
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0;
	  var isDone = false;
	
	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }
	
	  function next() {
	    if (isDone) return;
	
	    if (currentTurn < turns) {
	      work.call(this, currentTurn++, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }
	
	  next();
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Actions = __webpack_require__(9);
	
	var _parsePath = __webpack_require__(20);
	
	var _parsePath2 = _interopRequireDefault(_parsePath);
	
	function createLocation() {
	  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
	  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	
	  if (typeof path === 'string') path = _parsePath2['default'](path);
	
	  var pathname = path.pathname || '/';
	  var search = path.search || '';
	  var hash = path.hash || '';
	
	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}
	
	exports['default'] = createLocation;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(6);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _extractPath = __webpack_require__(21);
	
	var _extractPath2 = _interopRequireDefault(_extractPath);
	
	function parsePath(path) {
	  var pathname = _extractPath2['default'](path);
	  var search = '';
	  var hash = '';
	
	  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;
	
	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }
	
	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }
	
	  if (pathname === '') pathname = '/';
	
	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}
	
	exports['default'] = parsePath;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);
	
	  if (match == null) return string;
	
	  return string.substring(match[0].length);
	}
	
	exports["default"] = extractPath;
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(6);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);
	
	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
	  }
	}
	
	exports['default'] = runTransitionHook;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(6);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function deprecate(fn, message) {
	  return function () {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
	    return fn.apply(this, arguments);
	  };
	}
	
	exports['default'] = deprecate;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _warning = __webpack_require__(6);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function isValidChild(object) {
	  return object == null || _react2['default'].isValidElement(object);
	}
	
	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}
	
	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || 'UnknownComponent';
	
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);
	
	      /* istanbul ignore if: error logging */
	      if (error instanceof Error) process.env.NODE_ENV !== 'production' ? _warning2['default'](false, error.message) : undefined;
	    }
	  }
	}
	
	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}
	
	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);
	
	  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);
	
	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);
	
	    if (childRoutes.length) route.childRoutes = childRoutes;
	
	    delete route.children;
	  }
	
	  return route;
	}
	
	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *   
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];
	
	  _react2['default'].Children.forEach(children, function (element) {
	    if (_react2['default'].isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);
	
	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });
	
	  return routes;
	}
	
	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }
	
	  return routes;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouteUtils = __webpack_require__(24);
	
	var _getRouteParams = __webpack_require__(26);
	
	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;
	
	/**
	 * A <RoutingContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */
	
	var RoutingContext = (function (_Component) {
	  _inherits(RoutingContext, _Component);
	
	  function RoutingContext() {
	    _classCallCheck(this, RoutingContext);
	
	    _Component.apply(this, arguments);
	  }
	
	  RoutingContext.prototype.getChildContext = function getChildContext() {
	    var _props = this.props;
	    var history = _props.history;
	    var location = _props.location;
	
	    return { history: history, location: location };
	  };
	
	  RoutingContext.prototype.createElement = function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  };
	
	  RoutingContext.prototype.render = function render() {
	    var _this = this;
	
	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;
	
	    var element = null;
	
	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.
	
	        var route = routes[index];
	        var routeParams = _getRouteParams2['default'](route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };
	
	        if (_RouteUtils.isReactChildren(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (element.hasOwnProperty(prop)) props[prop] = element[prop];
	          }
	        }
	
	        if (typeof components === 'object') {
	          var elements = {};
	
	          for (var key in components) {
	            if (components.hasOwnProperty(key)) elements[key] = _this.createElement(components[key], props);
	          }return elements;
	        }
	
	        return _this.createElement(components, props);
	      }, element);
	    }
	
	    !(element === null || element === false || _react2['default'].isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'The root route must render a single element') : _invariant2['default'](false) : undefined;
	
	    return element;
	  };
	
	  _createClass(RoutingContext, null, [{
	    key: 'propTypes',
	    value: {
	      history: object.isRequired,
	      createElement: func.isRequired,
	      location: object.isRequired,
	      routes: array.isRequired,
	      params: object.isRequired,
	      components: array.isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      createElement: _react2['default'].createElement
	    },
	    enumerable: true
	  }, {
	    key: 'childContextTypes',
	    value: {
	      history: object.isRequired,
	      location: object.isRequired
	    },
	    enumerable: true
	  }]);
	
	  return RoutingContext;
	})(_react.Component);
	
	exports['default'] = RoutingContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(27);
	
	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};
	
	  if (!route.path) return routeParams;
	
	  var paramNames = _PatternUtils.getParamNames(route.path);
	
	  for (var p in params) {
	    if (params.hasOwnProperty(p) && paramNames.indexOf(p) !== -1) routeParams[p] = params[p];
	  }return routeParams;
	}
	
	exports['default'] = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}
	
	function escapeSource(string) {
	  return escapeRegExp(string).replace(/\/+/g, '/+');
	}
	
	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];
	
	  var match = undefined,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
	    }
	
	    if (match[1]) {
	      regexpSource += '([^/?#]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '([\\s\\S]*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '([\\s\\S]*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }
	
	    tokens.push(match[0]);
	
	    lastIndex = matcher.lastIndex;
	  }
	
	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
	  }
	
	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}
	
	var CompiledPatternsCache = {};
	
	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);
	
	  return CompiledPatternsCache[pattern];
	}
	
	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	
	function matchPattern(pattern, pathname) {
	  // Make leading slashes consistent between pattern and pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }
	
	  var _compilePattern2 = compilePattern(pattern);
	
	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;
	
	  regexpSource += '/*'; // Capture path separators
	
	  // Special-case patterns like '*' for catch-all routes.
	  var captureRemaining = tokens[tokens.length - 1] !== '*';
	
	  if (captureRemaining) {
	    // This will match newlines in the remaining path.
	    regexpSource += '([\\s\\S]*?)';
	  }
	
	  var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));
	
	  var remainingPathname = undefined,
	      paramValues = undefined;
	  if (match != null) {
	    if (captureRemaining) {
	      remainingPathname = match.pop();
	      var matchedPath = match[0].substr(0, match[0].length - remainingPathname.length);
	
	      // If we didn't match the entire pathname, then make sure that the match
	      // we did get ends at a path separator (potentially the one we added
	      // above at the beginning of the path, if the actual match was empty).
	      if (remainingPathname && matchedPath.charAt(matchedPath.length - 1) !== '/') {
	        return {
	          remainingPathname: null,
	          paramNames: paramNames,
	          paramValues: null
	        };
	      }
	    } else {
	      // If this matched at all, then the match was the entire pathname.
	      remainingPathname = '';
	    }
	
	    paramValues = match.slice(1).map(function (v) {
	      return v != null ? decodeURIComponent(v) : v;
	    });
	  } else {
	    remainingPathname = paramValues = null;
	  }
	
	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: paramValues
	  };
	}
	
	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}
	
	function getParams(pattern, pathname) {
	  var _matchPattern = matchPattern(pattern, pathname);
	
	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;
	
	  if (paramValues != null) {
	    return paramNames.reduce(function (memo, paramName, index) {
	      memo[paramName] = paramValues[index];
	      return memo;
	    }, {});
	  }
	
	  return null;
	}
	
	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	
	function formatPattern(pattern, params) {
	  params = params || {};
	
	  var _compilePattern3 = compilePattern(pattern);
	
	  var tokens = _compilePattern3.tokens;
	
	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;
	
	  var token = undefined,
	      paramName = undefined,
	      paramValue = undefined;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];
	
	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;
	
	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : _invariant2['default'](false) : undefined;
	
	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];
	
	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : _invariant2['default'](false) : undefined;
	
	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }
	
	  return pathname.replace(/\/+/g, '/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _warning = __webpack_require__(6);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _historyLibActions = __webpack_require__(9);
	
	var _historyLibUseQueries = __webpack_require__(29);
	
	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);
	
	var _computeChangedRoutes2 = __webpack_require__(34);
	
	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);
	
	var _TransitionUtils = __webpack_require__(35);
	
	var _isActive2 = __webpack_require__(37);
	
	var _isActive3 = _interopRequireDefault(_isActive2);
	
	var _getComponents = __webpack_require__(38);
	
	var _getComponents2 = _interopRequireDefault(_getComponents);
	
	var _matchRoutes = __webpack_require__(39);
	
	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);
	
	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p)) return true;
	  }return false;
	}
	
	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var routes = options.routes;
	
	    var historyOptions = _objectWithoutProperties(options, ['routes']);
	
	    var history = _historyLibUseQueries2['default'](createHistory)(historyOptions);
	    var state = {};
	
	    function isActive(pathname, query) {
	      var indexOnly = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	      return _isActive3['default'](pathname, query, indexOnly, state.location, state.routes, state.params);
	    }
	
	    function createLocationFromRedirectInfo(_ref) {
	      var pathname = _ref.pathname;
	      var query = _ref.query;
	      var state = _ref.state;
	
	      return history.createLocation(history.createPath(pathname, query), state, _historyLibActions.REPLACE);
	    }
	
	    var partialNextState = undefined;
	
	    function match(location, callback) {
	      if (partialNextState && partialNextState.location === location) {
	        // Continue from where we left off.
	        finishMatch(partialNextState, callback);
	      } else {
	        _matchRoutes2['default'](routes, location, function (error, nextState) {
	          if (error) {
	            callback(error);
	          } else if (nextState) {
	            finishMatch(_extends({}, nextState, { location: location }), callback);
	          } else {
	            callback();
	          }
	        });
	      }
	    }
	
	    function finishMatch(nextState, callback) {
	      var _computeChangedRoutes = _computeChangedRoutes3['default'](state, nextState);
	
	      var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	      var enterRoutes = _computeChangedRoutes.enterRoutes;
	
	      _TransitionUtils.runLeaveHooks(leaveRoutes);
	
	      _TransitionUtils.runEnterHooks(enterRoutes, nextState, function (error, redirectInfo) {
	        if (error) {
	          callback(error);
	        } else if (redirectInfo) {
	          callback(null, createLocationFromRedirectInfo(redirectInfo));
	        } else {
	          // TODO: Fetch components after state is updated.
	          _getComponents2['default'](nextState, function (error, components) {
	            if (error) {
	              callback(error);
	            } else {
	              // TODO: Make match a pure function and have some other API
	              // for "match and update state".
	              callback(null, null, state = _extends({}, nextState, { components: components }));
	            }
	          });
	        }
	      });
	    }
	
	    var RouteGuid = 1;
	
	    function getRouteID(route) {
	      return route.__id__ || (route.__id__ = RouteGuid++);
	    }
	
	    var RouteHooks = {};
	
	    function getRouteHooksForRoutes(routes) {
	      return routes.reduce(function (hooks, route) {
	        hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	        return hooks;
	      }, []);
	    }
	
	    function transitionHook(location, callback) {
	      _matchRoutes2['default'](routes, location, function (error, nextState) {
	        if (nextState == null) {
	          // TODO: We didn't actually match anything, but hang
	          // onto error/nextState so we don't have to matchRoutes
	          // again in the listen callback.
	          callback();
	          return;
	        }
	
	        // Cache some state here so we don't have to
	        // matchRoutes() again in the listen callback.
	        partialNextState = _extends({}, nextState, { location: location });
	
	        var hooks = getRouteHooksForRoutes(_computeChangedRoutes3['default'](state, partialNextState).leaveRoutes);
	
	        var result = undefined;
	        for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	          // Passing the location arg here indicates to
	          // the user that this is a transition hook.
	          result = hooks[i](location);
	        }
	
	        callback(result);
	      });
	    }
	
	    function beforeUnloadHook() {
	      // Synchronously check to see if any route hooks want
	      // to prevent the current window/tab from closing.
	      if (state.routes) {
	        var hooks = getRouteHooksForRoutes(state.routes);
	
	        var message = undefined;
	        for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	          // Passing no args indicates to the user that this is a
	          // beforeunload hook. We don't know the next location.
	          message = hooks[i]();
	        }
	
	        return message;
	      }
	    }
	
	    var unlistenBefore = undefined,
	        unlistenBeforeUnload = undefined;
	
	    /**
	     * Registers the given hook function to run before leaving the given route.
	     *
	     * During a normal transition, the hook function receives the next location
	     * as its only argument and must return either a) a prompt message to show
	     * the user, to make sure they want to leave the page or b) false, to prevent
	     * the transition.
	     *
	     * During the beforeunload event (in browsers) the hook receives no arguments.
	     * In this case it must return a prompt message to prevent the transition.
	     *
	     * Returns a function that may be used to unbind the listener.
	     */
	    function listenBeforeLeavingRoute(route, hook) {
	      // TODO: Warn if they register for a route that isn't currently
	      // active. They're probably doing something wrong, like re-creating
	      // route objects on every location change.
	      var routeID = getRouteID(route);
	      var hooks = RouteHooks[routeID];
	
	      if (hooks == null) {
	        var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
	
	        hooks = RouteHooks[routeID] = [hook];
	
	        if (thereWereNoRouteHooks) {
	          // setup transition & beforeunload hooks
	          unlistenBefore = history.listenBefore(transitionHook);
	
	          if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	        }
	      } else if (hooks.indexOf(hook) === -1) {
	        hooks.push(hook);
	      }
	
	      return function () {
	        var hooks = RouteHooks[routeID];
	
	        if (hooks != null) {
	          var newHooks = hooks.filter(function (item) {
	            return item !== hook;
	          });
	
	          if (newHooks.length === 0) {
	            delete RouteHooks[routeID];
	
	            if (!hasAnyProperties(RouteHooks)) {
	              // teardown transition & beforeunload hooks
	              if (unlistenBefore) {
	                unlistenBefore();
	                unlistenBefore = null;
	              }
	
	              if (unlistenBeforeUnload) {
	                unlistenBeforeUnload();
	                unlistenBeforeUnload = null;
	              }
	            }
	          } else {
	            RouteHooks[routeID] = newHooks;
	          }
	        }
	      };
	    }
	
	    /**
	     * This is the API for stateful environments. As the location
	     * changes, we update state and call the listener. We can also
	     * gracefully handle errors and redirects.
	     */
	    function listen(listener) {
	      // TODO: Only use a single history listener. Otherwise we'll
	      // end up with multiple concurrent calls to match.
	      return history.listen(function (location) {
	        if (state.location === location) {
	          listener(null, state);
	        } else {
	          match(location, function (error, redirectLocation, nextState) {
	            if (error) {
	              listener(error);
	            } else if (redirectLocation) {
	              history.transitionTo(redirectLocation);
	            } else if (nextState) {
	              listener(null, nextState);
	            } else {
	              process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : undefined;
	            }
	          });
	        }
	      });
	    }
	
	    return _extends({}, history, {
	      isActive: isActive,
	      match: match,
	      listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	      listen: listen
	    });
	  };
	}
	
	exports['default'] = useRoutes;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _qs = __webpack_require__(30);
	
	var _qs2 = _interopRequireDefault(_qs);
	
	var _runTransitionHook = __webpack_require__(22);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _parsePath = __webpack_require__(20);
	
	var _parsePath2 = _interopRequireDefault(_parsePath);
	
	function defaultStringifyQuery(query) {
	  return _qs2['default'].stringify(query, { arrayFormat: 'brackets' }).replace(/%20/g, '+');
	}
	
	function defaultParseQueryString(queryString) {
	  return _qs2['default'].parse(queryString.replace(/\+/g, '%20'));
	}
	
	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;
	
	    var historyOptions = _objectWithoutProperties(options, ['stringifyQuery', 'parseQueryString']);
	
	    var history = createHistory(historyOptions);
	
	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;
	
	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;
	
	    function addQuery(location) {
	      if (location.query == null) location.query = parseQueryString(location.search.substring(1));
	
	      return location;
	    }
	
	    function appendQuery(path, query) {
	      var queryString = undefined;
	      if (!query || (queryString = stringifyQuery(query)) === '') return path;
	
	      if (typeof path === 'string') path = _parsePath2['default'](path);
	
	      var search = path.search + (path.search ? '&' : '?') + queryString;
	
	      return _extends({}, path, {
	        search: search
	      });
	    }
	
	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }
	
	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }
	
	    // Override all write methods with query-aware versions.
	    function pushState(state, path, query) {
	      return history.pushState(state, appendQuery(path, query));
	    }
	
	    function replaceState(state, path, query) {
	      return history.replaceState(state, appendQuery(path, query));
	    }
	
	    function createPath(path, query) {
	      return history.createPath(appendQuery(path, query));
	    }
	
	    function createHref(path, query) {
	      return history.createHref(appendQuery(path, query));
	    }
	
	    function createLocation() {
	      return addQuery(history.createLocation.apply(history, arguments));
	    }
	
	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      pushState: pushState,
	      replaceState: replaceState,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	}
	
	exports['default'] = useQueries;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules
	
	var Stringify = __webpack_require__(31);
	var Parse = __webpack_require__(33);
	
	
	// Declare internals
	
	var internals = {};
	
	
	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules
	
	var Utils = __webpack_require__(32);
	
	
	// Declare internals
	
	var internals = {
	    delimiter: '&',
	    arrayPrefixGenerators: {
	        brackets: function (prefix, key) {
	
	            return prefix + '[]';
	        },
	        indices: function (prefix, key) {
	
	            return prefix + '[' + key + ']';
	        },
	        repeat: function (prefix, key) {
	
	            return prefix;
	        }
	    },
	    strictNullHandling: false
	};
	
	
	internals.stringify = function (obj, prefix, generateArrayPrefix, strictNullHandling, filter) {
	
	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    }
	    else if (Utils.isBuffer(obj)) {
	        obj = obj.toString();
	    }
	    else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    }
	    else if (obj === null) {
	        if (strictNullHandling) {
	            return Utils.encode(prefix);
	        }
	
	        obj = '';
	    }
	
	    if (typeof obj === 'string' ||
	        typeof obj === 'number' ||
	        typeof obj === 'boolean') {
	
	        return [Utils.encode(prefix) + '=' + Utils.encode(obj)];
	    }
	
	    var values = [];
	
	    if (typeof obj === 'undefined') {
	        return values;
	    }
	
	    var objKeys = Array.isArray(filter) ? filter : Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	
	        if (Array.isArray(obj)) {
	            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, filter));
	        }
	        else {
	            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix, strictNullHandling, filter));
	        }
	    }
	
	    return values;
	};
	
	
	module.exports = function (obj, options) {
	
	    options = options || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;
	    var objKeys;
	    var filter;
	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    }
	    else if (Array.isArray(options.filter)) {
	        objKeys = filter = options.filter;
	    }
	
	    var keys = [];
	
	    if (typeof obj !== 'object' ||
	        obj === null) {
	
	        return '';
	    }
	
	    var arrayFormat;
	    if (options.arrayFormat in internals.arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    }
	    else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    }
	    else {
	        arrayFormat = 'indices';
	    }
	
	    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];
	
	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix, strictNullHandling, filter));
	    }
	
	    return keys.join(delimiter);
	};


/***/ },
/* 32 */
/***/ function(module, exports) {

	// Load modules
	
	
	// Declare internals
	
	var internals = {};
	internals.hexTable = new Array(256);
	for (var h = 0; h < 256; ++h) {
	    internals.hexTable[h] = '%' + ((h < 16 ? '0' : '') + h.toString(16)).toUpperCase();
	}
	
	
	exports.arrayToObject = function (source, options) {
	
	    var obj = options.plainObjects ? Object.create(null) : {};
	    for (var i = 0, il = source.length; i < il; ++i) {
	        if (typeof source[i] !== 'undefined') {
	
	            obj[i] = source[i];
	        }
	    }
	
	    return obj;
	};
	
	
	exports.merge = function (target, source, options) {
	
	    if (!source) {
	        return target;
	    }
	
	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        }
	        else if (typeof target === 'object') {
	            target[source] = true;
	        }
	        else {
	            target = [target, source];
	        }
	
	        return target;
	    }
	
	    if (typeof target !== 'object') {
	        target = [target].concat(source);
	        return target;
	    }
	
	    if (Array.isArray(target) &&
	        !Array.isArray(source)) {
	
	        target = exports.arrayToObject(target, options);
	    }
	
	    var keys = Object.keys(source);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var value = source[key];
	
	        if (!Object.prototype.hasOwnProperty.call(target, key)) {
	            target[key] = value;
	        }
	        else {
	            target[key] = exports.merge(target[key], value, options);
	        }
	    }
	
	    return target;
	};
	
	
	exports.decode = function (str) {
	
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};
	
	exports.encode = function (str) {
	
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }
	
	    if (typeof str !== 'string') {
	        str = '' + str;
	    }
	
	    var out = '';
	    for (var i = 0, il = str.length; i < il; ++i) {
	        var c = str.charCodeAt(i);
	
	        if (c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A)) { // A-Z
	
	            out += str[i];
	            continue;
	        }
	
	        if (c < 0x80) {
	            out += internals.hexTable[c];
	            continue;
	        }
	
	        if (c < 0x800) {
	            out += internals.hexTable[0xC0 | (c >> 6)] + internals.hexTable[0x80 | (c & 0x3F)];
	            continue;
	        }
	
	        if (c < 0xD800 || c >= 0xE000) {
	            out += internals.hexTable[0xE0 | (c >> 12)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
	            continue;
	        }
	
	        ++i;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (str.charCodeAt(i) & 0x3FF));
	        out += internals.hexTable[0xF0 | (c >> 18)] + internals.hexTable[0x80 | ((c >> 12) & 0x3F)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
	    }
	
	    return out;
	};
	
	exports.compact = function (obj, refs) {
	
	    if (typeof obj !== 'object' ||
	        obj === null) {
	
	        return obj;
	    }
	
	    refs = refs || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }
	
	    refs.push(obj);
	
	    if (Array.isArray(obj)) {
	        var compacted = [];
	
	        for (var i = 0, il = obj.length; i < il; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }
	
	        return compacted;
	    }
	
	    var keys = Object.keys(obj);
	    for (i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        obj[key] = exports.compact(obj[key], refs);
	    }
	
	    return obj;
	};
	
	
	exports.isRegExp = function (obj) {
	
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};
	
	
	exports.isBuffer = function (obj) {
	
	    if (obj === null ||
	        typeof obj === 'undefined') {
	
	        return false;
	    }
	
	    return !!(obj.constructor &&
	              obj.constructor.isBuffer &&
	              obj.constructor.isBuffer(obj));
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules
	
	var Utils = __webpack_require__(32);
	
	
	// Declare internals
	
	var internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000,
	    strictNullHandling: false,
	    plainObjects: false,
	    allowPrototypes: false
	};
	
	
	internals.parseValues = function (str, options) {
	
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);
	
	    for (var i = 0, il = parts.length; i < il; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;
	
	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';
	
	            if (options.strictNullHandling) {
	                obj[Utils.decode(part)] = null;
	            }
	        }
	        else {
	            var key = Utils.decode(part.slice(0, pos));
	            var val = Utils.decode(part.slice(pos + 1));
	
	            if (!Object.prototype.hasOwnProperty.call(obj, key)) {
	                obj[key] = val;
	            }
	            else {
	                obj[key] = [].concat(obj[key]).concat(val);
	            }
	        }
	    }
	
	    return obj;
	};
	
	
	internals.parseObject = function (chain, val, options) {
	
	    if (!chain.length) {
	        return val;
	    }
	
	    var root = chain.shift();
	
	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    }
	    else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        var indexString = '' + index;
	        if (!isNaN(index) &&
	            root !== cleanRoot &&
	            indexString === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays &&
	             index <= options.arrayLimit)) {
	
	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        }
	        else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }
	
	    return obj;
	};
	
	
	internals.parseKeys = function (key, val, options) {
	
	    if (!key) {
	        return;
	    }
	
	    // Transform dot notation to bracket notation
	
	    if (options.allowDots) {
	        key = key.replace(/\.([^\.\[]+)/g, '[$1]');
	    }
	
	    // The regex chunks
	
	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;
	
	    // Get the parent
	
	    var segment = parent.exec(key);
	
	    // Stash the parent if it exists
	
	    var keys = [];
	    if (segment[1]) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects &&
	            Object.prototype.hasOwnProperty(segment[1])) {
	
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }
	
	        keys.push(segment[1]);
	    }
	
	    // Loop through children appending to the array until we hit depth
	
	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	
	        ++i;
	        if (!options.plainObjects &&
	            Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
	
	            if (!options.allowPrototypes) {
	                continue;
	            }
	        }
	        keys.push(segment[1]);
	    }
	
	    // If there's a remainder, just add whatever is left
	
	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }
	
	    return internals.parseObject(keys, val, options);
	};
	
	
	module.exports = function (str, options) {
	
	    options = options || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.allowDots = options.allowDots !== false;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : internals.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : internals.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;
	
	    if (str === '' ||
	        str === null ||
	        typeof str === 'undefined') {
	
	        return options.plainObjects ? Object.create(null) : {};
	    }
	
	    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    var obj = options.plainObjects ? Object.create(null) : {};
	
	    // Iterate over the keys and setup the new object
	
	    var keys = Object.keys(tempObj);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        var newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj, options);
	    }
	
	    return Utils.compact(obj);
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(27);
	
	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;
	
	  var paramNames = _PatternUtils.getParamNames(route.path);
	
	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}
	
	/**
	 * Returns an object of { leaveRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;
	
	  var leaveRoutes = undefined,
	      enterRoutes = undefined;
	  if (prevRoutes) {
	    leaveRoutes = prevRoutes.filter(function (route) {
	      return nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	    });
	
	    // onLeave hooks start at the leaf route.
	    leaveRoutes.reverse();
	
	    enterRoutes = nextRoutes.filter(function (route) {
	      return prevRoutes.indexOf(route) === -1 || leaveRoutes.indexOf(route) !== -1;
	    });
	  } else {
	    leaveRoutes = [];
	    enterRoutes = nextRoutes;
	  }
	
	  return {
	    leaveRoutes: leaveRoutes,
	    enterRoutes: enterRoutes
	  };
	}
	
	exports['default'] = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runLeaveHooks = runLeaveHooks;
	
	var _AsyncUtils = __webpack_require__(36);
	
	function createEnterHook(hook, route) {
	  return function (a, b, callback) {
	    hook.apply(route, arguments);
	
	    if (hook.length < 3) {
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}
	
	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createEnterHook(route.onEnter, route));
	
	    return hooks;
	  }, []);
	}
	
	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replaceState, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replaceState short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	
	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);
	
	  if (!hooks.length) {
	    callback();
	    return;
	  }
	
	  var redirectInfo = undefined;
	  function replaceState(state, pathname, query) {
	    redirectInfo = { pathname: pathname, query: query, state: state };
	  }
	
	  _AsyncUtils.loopAsync(hooks.length, function (index, next, done) {
	    hooks[index](nextState, replaceState, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	          next();
	        }
	    });
	  }, callback);
	}
	
	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	
	function runLeaveHooks(routes) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i]);
	  }
	}

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	
	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }
	
	  function next() {
	    if (isDone) return;
	
	    if (currentTurn < turns) {
	      work.call(this, currentTurn++, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }
	
	  next();
	}
	
	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];
	
	  if (length === 0) return callback(null, values);
	
	  var isDone = false,
	      doneCount = 0;
	
	  function done(index, error, value) {
	    if (isDone) return;
	
	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;
	
	      isDone = ++doneCount === length;
	
	      if (isDone) callback(null, values);
	    }
	  }
	
	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(27);
	
	function deepEqual(a, b) {
	  if (a == b) return true;
	
	  if (a == null || b == null) return false;
	
	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }
	
	  if (typeof a === 'object') {
	    for (var p in a) {
	      if (!a.hasOwnProperty(p)) {
	        continue;
	      }
	
	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!b.hasOwnProperty(p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }
	
	    return true;
	  }
	
	  return String(a) === String(b);
	}
	
	function paramsAreActive(paramNames, paramValues, activeParams) {
	  // FIXME: This doesn't work on repeated params in activeParams.
	  return paramNames.every(function (paramName, index) {
	    return String(paramValues[index]) === String(activeParams[paramName]);
	  });
	}
	
	function getMatchingRouteIndex(pathname, activeRoutes, activeParams) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];
	
	  for (var i = 0, len = activeRoutes.length; i < len; ++i) {
	    var route = activeRoutes[i];
	    var pattern = route.path || '';
	
	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }
	
	    if (remainingPathname !== null) {
	      var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
	      remainingPathname = matched.remainingPathname;
	      paramNames = [].concat(paramNames, matched.paramNames);
	      paramValues = [].concat(paramValues, matched.paramValues);
	    }
	
	    if (remainingPathname === '' && route.path && paramsAreActive(paramNames, paramValues, activeParams)) return i;
	  }
	
	  return null;
	}
	
	/**
	 * Returns true if the given pathname matches the active routes
	 * and params.
	 */
	function routeIsActive(pathname, routes, params, indexOnly) {
	  var i = getMatchingRouteIndex(pathname, routes, params);
	
	  if (i === null) {
	    // No match.
	    return false;
	  } else if (!indexOnly) {
	    // Any match is good enough.
	    return true;
	  }
	
	  // If any remaining routes past the match index have paths, then we can't
	  // be on the index route.
	  return routes.slice(i + 1).every(function (route) {
	    return !route.path;
	  });
	}
	
	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;
	
	  if (query == null) return true;
	
	  return deepEqual(query, activeQuery);
	}
	
	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(pathname, query, indexOnly, location, routes, params) {
	  if (location == null) return false;
	
	  if (!routeIsActive(pathname, routes, params, indexOnly)) return false;
	
	  return queryIsActive(query, location.query);
	}
	
	exports['default'] = isActive;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _AsyncUtils = __webpack_require__(36);
	
	function getComponentsForRoute(location, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	  } else if (route.getComponent) {
	    route.getComponent(location, callback);
	  } else if (route.getComponents) {
	    route.getComponents(location, callback);
	  } else {
	    callback();
	  }
	}
	
	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  _AsyncUtils.mapAsync(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState.location, route, callback);
	  }, callback);
	}
	
	exports['default'] = getComponents;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(6);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _AsyncUtils = __webpack_require__(36);
	
	var _PatternUtils = __webpack_require__(27);
	
	var _RouteUtils = __webpack_require__(24);
	
	function getChildRoutes(route, location, callback) {
	  if (route.childRoutes) {
	    callback(null, route.childRoutes);
	  } else if (route.getChildRoutes) {
	    route.getChildRoutes(location, function (error, childRoutes) {
	      callback(error, !error && _RouteUtils.createRoutes(childRoutes));
	    });
	  } else {
	    callback();
	  }
	}
	
	function getIndexRoute(route, location, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    route.getIndexRoute(location, function (error, indexRoute) {
	      callback(error, !error && _RouteUtils.createRoutes(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (obj) {
	        return !obj.hasOwnProperty('path');
	      });
	
	      _AsyncUtils.loopAsync(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}
	
	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];
	
	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }
	
	    return params;
	  }, params);
	}
	
	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}
	
	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';
	
	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }
	
	  if (remainingPathname !== null) {
	    var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
	    remainingPathname = matched.remainingPathname;
	    paramNames = [].concat(paramNames, matched.paramNames);
	    paramValues = [].concat(paramValues, matched.paramValues);
	
	    if (remainingPathname === '' && route.path) {
	      var _ret2 = (function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };
	
	        getIndexRoute(route, location, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;
	
	              process.env.NODE_ENV !== 'production' ? _warning2['default'](indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : undefined;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? _warning2['default'](!indexRoute.path, 'Index routes should not have paths') : undefined;
	              match.routes.push(indexRoute);
	            }
	
	            callback(null, match);
	          }
	        });
	        return {
	          v: undefined
	        };
	      })();
	
	      if (typeof _ret2 === 'object') return _ret2.v;
	    }
	  }
	
	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    getChildRoutes(route, location, function (error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    });
	  } else {
	    callback();
	  }
	}
	
	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback) {
	  var remainingPathname = arguments.length <= 3 || arguments[3] === undefined ? location.pathname : arguments[3];
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];
	  return (function () {
	    _AsyncUtils.loopAsync(routes.length, function (index, next, done) {
	      matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	        if (error || match) {
	          done(error, match);
	        } else {
	          next();
	        }
	      });
	    }, callback);
	  })();
	}
	
	exports['default'] = matchRoutes;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.falsy = falsy;
	
	var _react = __webpack_require__(1);
	
	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}
	
	var history = shape({
	  listen: func.isRequired,
	  pushState: func.isRequired,
	  replaceState: func.isRequired,
	  go: func.isRequired
	});
	
	exports.history = history;
	var location = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});
	
	exports.location = location;
	var component = oneOfType([func, string]);
	exports.component = component;
	var components = oneOfType([component, object]);
	exports.components = components;
	var route = oneOfType([object, element]);
	exports.route = route;
	var routes = oneOfType([route, arrayOf(route)]);
	
	exports.routes = routes;
	exports['default'] = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	
	function isLeftClickEvent(event) {
	  return event.button === 0;
	}
	
	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}
	
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p)) return false;
	  }return true;
	}
	
	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * `activeClassName` prop
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	
	var Link = (function (_Component) {
	  _inherits(Link, _Component);
	
	  function Link() {
	    _classCallCheck(this, Link);
	
	    _Component.apply(this, arguments);
	  }
	
	  Link.prototype.handleClick = function handleClick(event) {
	    var allowTransition = true;
	
	    if (this.props.onClick) this.props.onClick(event);
	
	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;
	
	    if (event.defaultPrevented === true) allowTransition = false;
	
	    // If target prop is set (e.g. to "_blank") let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) {
	      if (!allowTransition) event.preventDefault();
	
	      return;
	    }
	
	    event.preventDefault();
	
	    if (allowTransition) {
	      var _props = this.props;
	      var state = _props.state;
	      var to = _props.to;
	      var query = _props.query;
	      var hash = _props.hash;
	
	      if (hash) to += hash;
	
	      this.context.history.pushState(state, to, query);
	    }
	  };
	
	  Link.prototype.render = function render() {
	    var _this = this;
	
	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;
	
	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);
	
	    // Manually override onClick.
	    props.onClick = function (e) {
	      return _this.handleClick(e);
	    };
	
	    // Ignore if rendered outside the context of history, simplifies unit testing.
	    var history = this.context.history;
	
	    if (history) {
	      props.href = history.createHref(to, query);
	
	      if (hash) props.href += hash;
	
	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (history.isActive(to, query, onlyActiveOnIndex)) {
	          if (activeClassName) props.className += props.className === '' ? activeClassName : ' ' + activeClassName;
	
	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }
	
	    return _react2['default'].createElement('a', props);
	  };
	
	  _createClass(Link, null, [{
	    key: 'contextTypes',
	    value: {
	      history: object
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      to: string.isRequired,
	      query: object,
	      hash: string,
	      state: object,
	      activeStyle: object,
	      activeClassName: string,
	      onlyActiveOnIndex: bool.isRequired,
	      onClick: func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      onlyActiveOnIndex: false,
	      className: '',
	      style: {}
	    },
	    enumerable: true
	  }]);
	
	  return Link;
	})(_react.Component);
	
	exports['default'] = Link;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Link = __webpack_require__(41);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	
	var IndexLink = (function (_Component) {
	  _inherits(IndexLink, _Component);
	
	  function IndexLink() {
	    _classCallCheck(this, IndexLink);
	
	    _Component.apply(this, arguments);
	  }
	
	  IndexLink.prototype.render = function render() {
	    return _react2['default'].createElement(_Link2['default'], _extends({}, this.props, { onlyActiveOnIndex: true }));
	  };
	
	  return IndexLink;
	})(_react.Component);
	
	exports['default'] = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _warning = __webpack_require__(6);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Redirect = __webpack_require__(44);
	
	var _Redirect2 = _interopRequireDefault(_Redirect);
	
	var _PropTypes = __webpack_require__(40);
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;
	
	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */
	
	var IndexRedirect = (function (_Component) {
	  _inherits(IndexRedirect, _Component);
	
	  function IndexRedirect() {
	    _classCallCheck(this, IndexRedirect);
	
	    _Component.apply(this, arguments);
	  }
	
	  IndexRedirect.createRouteFromReactElement = function createRouteFromReactElement(element, parentRoute) {
	    /* istanbul ignore else: sanity check */
	    if (parentRoute) {
	      parentRoute.indexRoute = _Redirect2['default'].createRouteFromReactElement(element);
	    } else {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'An <IndexRedirect> does not make sense at the root of your route config') : undefined;
	    }
	  };
	
	  /* istanbul ignore next: sanity check */
	
	  IndexRedirect.prototype.render = function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };
	
	  _createClass(IndexRedirect, null, [{
	    key: 'propTypes',
	    value: {
	      to: string.isRequired,
	      query: object,
	      state: object,
	      onEnter: _PropTypes.falsy,
	      children: _PropTypes.falsy
	    },
	    enumerable: true
	  }]);
	
	  return IndexRedirect;
	})(_react.Component);
	
	exports['default'] = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouteUtils = __webpack_require__(24);
	
	var _PatternUtils = __webpack_require__(27);
	
	var _PropTypes = __webpack_require__(40);
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;
	
	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */
	
	var Redirect = (function (_Component) {
	  _inherits(Redirect, _Component);
	
	  function Redirect() {
	    _classCallCheck(this, Redirect);
	
	    _Component.apply(this, arguments);
	  }
	
	  Redirect.createRouteFromReactElement = function createRouteFromReactElement(element) {
	    var route = _RouteUtils.createRouteFromReactElement(element);
	
	    if (route.from) route.path = route.from;
	
	    route.onEnter = function (nextState, replaceState) {
	      var location = nextState.location;
	      var params = nextState.params;
	
	      var pathname = undefined;
	      if (route.to.charAt(0) === '/') {
	        pathname = _PatternUtils.formatPattern(route.to, params);
	      } else if (!route.to) {
	        pathname = location.pathname;
	      } else {
	        var routeIndex = nextState.routes.indexOf(route);
	        var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	        var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	        pathname = _PatternUtils.formatPattern(pattern, params);
	      }
	
	      replaceState(route.state || location.state, pathname, route.query || location.query);
	    };
	
	    return route;
	  };
	
	  Redirect.getRoutePattern = function getRoutePattern(routes, routeIndex) {
	    var parentPattern = '';
	
	    for (var i = routeIndex; i >= 0; i--) {
	      var route = routes[i];
	      var pattern = route.path || '';
	      parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;
	
	      if (pattern.indexOf('/') === 0) break;
	    }
	
	    return '/' + parentPattern;
	  };
	
	  /* istanbul ignore next: sanity check */
	
	  Redirect.prototype.render = function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<Redirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };
	
	  _createClass(Redirect, null, [{
	    key: 'propTypes',
	    value: {
	      path: string,
	      from: string, // Alias for path
	      to: string.isRequired,
	      query: object,
	      state: object,
	      onEnter: _PropTypes.falsy,
	      children: _PropTypes.falsy
	    },
	    enumerable: true
	  }]);
	
	  return Redirect;
	})(_react.Component);
	
	exports['default'] = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _warning = __webpack_require__(6);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouteUtils = __webpack_require__(24);
	
	var _PropTypes = __webpack_require__(40);
	
	var func = _react2['default'].PropTypes.func;
	
	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */
	
	var IndexRoute = (function (_Component) {
	  _inherits(IndexRoute, _Component);
	
	  function IndexRoute() {
	    _classCallCheck(this, IndexRoute);
	
	    _Component.apply(this, arguments);
	  }
	
	  IndexRoute.createRouteFromReactElement = function createRouteFromReactElement(element, parentRoute) {
	    /* istanbul ignore else: sanity check */
	    if (parentRoute) {
	      parentRoute.indexRoute = _RouteUtils.createRouteFromReactElement(element);
	    } else {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'An <IndexRoute> does not make sense at the root of your route config') : undefined;
	    }
	  };
	
	  /* istanbul ignore next: sanity check */
	
	  IndexRoute.prototype.render = function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<IndexRoute> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };
	
	  _createClass(IndexRoute, null, [{
	    key: 'propTypes',
	    value: {
	      path: _PropTypes.falsy,
	      component: _PropTypes.component,
	      components: _PropTypes.components,
	      getComponent: func,
	      getComponents: func
	    },
	    enumerable: true
	  }]);
	
	  return IndexRoute;
	})(_react.Component);
	
	exports['default'] = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouteUtils = __webpack_require__(24);
	
	var _PropTypes = __webpack_require__(40);
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	
	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */
	
	var Route = (function (_Component) {
	  _inherits(Route, _Component);
	
	  function Route() {
	    _classCallCheck(this, Route);
	
	    _Component.apply(this, arguments);
	  }
	
	  /* istanbul ignore next: sanity check */
	
	  Route.prototype.render = function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<Route> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };
	
	  _createClass(Route, null, [{
	    key: 'createRouteFromReactElement',
	    value: _RouteUtils.createRouteFromReactElement,
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      path: string,
	      component: _PropTypes.component,
	      components: _PropTypes.components,
	      getComponent: func,
	      getComponents: func
	    },
	    enumerable: true
	  }]);
	
	  return Route;
	})(_react.Component);
	
	exports['default'] = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PropTypes = __webpack_require__(40);
	
	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {
	
	  contextTypes: {
	    history: _PropTypes.history
	  },
	
	  componentWillMount: function componentWillMount() {
	    this.history = this.context.history;
	  }
	
	};
	
	exports['default'] = History;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var object = _react2['default'].PropTypes.object;
	
	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */
	var Lifecycle = {
	
	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },
	
	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },
	
	  componentDidMount: function componentDidMount() {
	    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : _invariant2['default'](false) : undefined;
	
	    var route = this.props.route || this.context.route;
	
	    !route ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : _invariant2['default'](false) : undefined;
	
	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }
	
	};
	
	exports['default'] = Lifecycle;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var object = _react2['default'].PropTypes.object;
	
	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */
	var RouteContext = {
	
	  propTypes: {
	    route: object.isRequired
	  },
	
	  childContextTypes: {
	    route: object.isRequired
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  }
	
	};
	
	exports['default'] = RouteContext;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _historyLibCreateMemoryHistory = __webpack_require__(51);
	
	var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);
	
	var _historyLibUseBasename = __webpack_require__(52);
	
	var _historyLibUseBasename2 = _interopRequireDefault(_historyLibUseBasename);
	
	var _RouteUtils = __webpack_require__(24);
	
	var _useRoutes = __webpack_require__(28);
	
	var _useRoutes2 = _interopRequireDefault(_useRoutes);
	
	var createHistory = _useRoutes2['default'](_historyLibUseBasename2['default'](_historyLibCreateMemoryHistory2['default']));
	
	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser. Use
	 * the history.listen API instead.
	 */
	function match(_ref, callback) {
	  var routes = _ref.routes;
	  var location = _ref.location;
	  var parseQueryString = _ref.parseQueryString;
	  var stringifyQuery = _ref.stringifyQuery;
	  var basename = _ref.basename;
	
	  !location ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'match needs a location') : _invariant2['default'](false) : undefined;
	
	  var history = createHistory({
	    routes: _RouteUtils.createRoutes(routes),
	    parseQueryString: parseQueryString,
	    stringifyQuery: stringifyQuery,
	    basename: basename
	  });
	
	  // Allow match({ location: '/the/path', ... })
	  if (typeof location === 'string') location = history.createLocation(location);
	
	  history.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation, nextState && _extends({}, nextState, { history: history }));
	  });
	}
	
	exports['default'] = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Actions = __webpack_require__(9);
	
	var _createHistory = __webpack_require__(14);
	
	var _createHistory2 = _interopRequireDefault(_createHistory);
	
	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}
	
	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }
	
	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));
	
	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;
	
	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }
	
	  entries = entries.map(function (entry) {
	    var key = history.createKey();
	
	    if (typeof entry === 'string') return { pathname: entry, key: key };
	
	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });
	
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });
	
	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }
	
	  var storage = createStateStorage(entries);
	
	  function saveState(key, state) {
	    storage[key] = state;
	  }
	
	  function readState(key) {
	    return storage[key];
	  }
	
	  function getCurrentLocation() {
	    var entry = entries[current];
	    var key = entry.key;
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;
	
	    var path = (basename || '') + pathname + (search || '');
	
	    var state = undefined;
	    if (key) {
	      state = readState(key);
	    } else {
	      state = null;
	      key = history.createKey();
	      entry.key = key;
	    }
	
	    return history.createLocation(path, state, undefined, key);
	  }
	
	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }
	
	  function go(n) {
	    if (n) {
	      !canGo(n) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Cannot go(%s) there is not enough history', n) : _invariant2['default'](false) : undefined;
	
	      current += n;
	
	      var currentLocation = getCurrentLocation();
	
	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }
	
	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;
	
	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);
	
	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }
	
	  return history;
	}
	
	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _ExecutionEnvironment = __webpack_require__(10);
	
	var _runTransitionHook = __webpack_require__(22);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _extractPath = __webpack_require__(21);
	
	var _extractPath2 = _interopRequireDefault(_extractPath);
	
	var _parsePath = __webpack_require__(20);
	
	var _parsePath2 = _interopRequireDefault(_parsePath);
	
	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var basename = options.basename;
	
	    var historyOptions = _objectWithoutProperties(options, ['basename']);
	
	    var history = createHistory(historyOptions);
	
	    // Automatically use the value of <base href> in HTML
	    // documents as basename if it's not explicitly given.
	    if (basename == null && _ExecutionEnvironment.canUseDOM) {
	      var base = document.getElementsByTagName('base')[0];
	
	      if (base) basename = _extractPath2['default'](base.href);
	    }
	
	    function addBasename(location) {
	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;
	
	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }
	
	      return location;
	    }
	
	    function prependBasename(path) {
	      if (!basename) return path;
	
	      if (typeof path === 'string') path = _parsePath2['default'](path);
	
	      var pname = path.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;
	
	      return _extends({}, path, {
	        pathname: pathname
	      });
	    }
	
	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }
	
	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }
	
	    // Override all write methods with basename-aware versions.
	    function pushState(state, path) {
	      history.pushState(state, prependBasename(path));
	    }
	
	    function push(path) {
	      pushState(null, path);
	    }
	
	    function replaceState(state, path) {
	      history.replaceState(state, prependBasename(path));
	    }
	
	    function replace(path) {
	      replaceState(null, path);
	    }
	
	    function createPath(path) {
	      return history.createPath(prependBasename(path));
	    }
	
	    function createHref(path) {
	      return history.createHref(prependBasename(path));
	    }
	
	    function createLocation() {
	      return addBasename(history.createLocation.apply(history, arguments));
	    }
	
	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      pushState: pushState,
	      push: push,
	      replaceState: replaceState,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	}
	
	exports['default'] = useBasename;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _createBrowserHistory = __webpack_require__(54);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	exports.createHistory = _createBrowserHistory2['default'];
	
	var _createHashHistory2 = __webpack_require__(7);
	
	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);
	
	exports.createHashHistory = _createHashHistory3['default'];
	
	var _createMemoryHistory2 = __webpack_require__(51);
	
	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);
	
	exports.createMemoryHistory = _createMemoryHistory3['default'];
	
	var _createLocation2 = __webpack_require__(19);
	
	var _createLocation3 = _interopRequireDefault(_createLocation2);
	
	exports.createLocation = _createLocation3['default'];
	
	var _useBasename2 = __webpack_require__(52);
	
	var _useBasename3 = _interopRequireDefault(_useBasename2);
	
	exports.useBasename = _useBasename3['default'];
	
	var _useBeforeUnload2 = __webpack_require__(55);
	
	var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);
	
	exports.useBeforeUnload = _useBeforeUnload3['default'];
	
	var _useQueries2 = __webpack_require__(29);
	
	var _useQueries3 = _interopRequireDefault(_useQueries2);
	
	exports.useQueries = _useQueries3['default'];
	
	var _Actions2 = __webpack_require__(9);
	
	var _Actions3 = _interopRequireDefault(_Actions2);
	
	exports.Actions = _Actions3['default'];
	
	// deprecated
	
	var _enableBeforeUnload2 = __webpack_require__(56);
	
	var _enableBeforeUnload3 = _interopRequireDefault(_enableBeforeUnload2);
	
	exports.enableBeforeUnload = _enableBeforeUnload3['default'];
	
	var _enableQueries2 = __webpack_require__(57);
	
	var _enableQueries3 = _interopRequireDefault(_enableQueries2);
	
	exports.enableQueries = _enableQueries3['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Actions = __webpack_require__(9);
	
	var _ExecutionEnvironment = __webpack_require__(10);
	
	var _DOMUtils = __webpack_require__(11);
	
	var _DOMStateStorage = __webpack_require__(12);
	
	var _createDOMHistory = __webpack_require__(13);
	
	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);
	
	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;
	
	  var forceRefresh = options.forceRefresh;
	
	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;
	
	  function getCurrentLocation(historyState) {
	    historyState = historyState || window.history.state || {};
	
	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;
	
	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();
	
	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
	    }
	
	    return history.createLocation(path, state, undefined, key);
	  }
	
	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;
	
	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.
	
	      transitionTo(getCurrentLocation(event.state));
	    }
	
	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);
	
	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }
	
	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;
	
	    if (action === _Actions.POP) return; // Nothing to do.
	
	    _DOMStateStorage.saveState(key, state);
	
	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };
	
	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }
	
	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));
	
	  var listenerCount = 0,
	      stopPopStateListener = undefined;
	
	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    var unlisten = history.listenBefore(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }
	
	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    var unlisten = history.listen(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }
	
	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    history.registerTransitionHook(hook);
	  }
	
	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);
	
	    if (--listenerCount === 0) stopPopStateListener();
	  }
	
	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}
	
	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(6);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _ExecutionEnvironment = __webpack_require__(10);
	
	var _DOMUtils = __webpack_require__(11);
	
	var _deprecate = __webpack_require__(23);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	function startBeforeUnloadListener(getBeforeUnloadPromptMessage) {
	  function listener(event) {
	    var message = getBeforeUnloadPromptMessage();
	
	    if (typeof message === 'string') {
	      (event || window.event).returnValue = message;
	      return message;
	    }
	  }
	
	  _DOMUtils.addEventListener(window, 'beforeunload', listener);
	
	  return function () {
	    _DOMUtils.removeEventListener(window, 'beforeunload', listener);
	  };
	}
	
	/**
	 * Returns a new createHistory function that can be used to create
	 * history objects that know how to use the beforeunload event in web
	 * browsers to cancel navigation.
	 */
	function useBeforeUnload(createHistory) {
	  return function (options) {
	    var history = createHistory(options);
	
	    var stopBeforeUnloadListener = undefined;
	    var beforeUnloadHooks = [];
	
	    function getBeforeUnloadPromptMessage() {
	      var message = undefined;
	
	      for (var i = 0, len = beforeUnloadHooks.length; message == null && i < len; ++i) {
	        message = beforeUnloadHooks[i].call();
	      }return message;
	    }
	
	    function listenBeforeUnload(hook) {
	      beforeUnloadHooks.push(hook);
	
	      if (beforeUnloadHooks.length === 1) {
	        if (_ExecutionEnvironment.canUseDOM) {
	          stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	        } else {
	          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'listenBeforeUnload only works in DOM environments') : undefined;
	        }
	      }
	
	      return function () {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });
	
	        if (beforeUnloadHooks.length === 0 && stopBeforeUnloadListener) {
	          stopBeforeUnloadListener();
	          stopBeforeUnloadListener = null;
	        }
	      };
	    }
	
	    // deprecated
	    function registerBeforeUnloadHook(hook) {
	      if (_ExecutionEnvironment.canUseDOM && beforeUnloadHooks.indexOf(hook) === -1) {
	        beforeUnloadHooks.push(hook);
	
	        if (beforeUnloadHooks.length === 1) stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	      }
	    }
	
	    // deprecated
	    function unregisterBeforeUnloadHook(hook) {
	      if (beforeUnloadHooks.length > 0) {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });
	
	        if (beforeUnloadHooks.length === 0) stopBeforeUnloadListener();
	      }
	    }
	
	    return _extends({}, history, {
	      listenBeforeUnload: listenBeforeUnload,
	
	      registerBeforeUnloadHook: _deprecate2['default'](registerBeforeUnloadHook, 'registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead'),
	      unregisterBeforeUnloadHook: _deprecate2['default'](unregisterBeforeUnloadHook, 'unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead')
	    });
	  };
	}
	
	exports['default'] = useBeforeUnload;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deprecate = __webpack_require__(23);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var _useBeforeUnload = __webpack_require__(55);
	
	var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);
	
	exports['default'] = _deprecate2['default'](_useBeforeUnload2['default'], 'enableBeforeUnload is deprecated, use useBeforeUnload instead');
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deprecate = __webpack_require__(23);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var _useQueries = __webpack_require__(29);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	exports['default'] = _deprecate2['default'](_useQueries2['default'], 'enableQueries is deprecated, use useQueries instead');
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _html = __webpack_require__(59);
	
	var _html2 = _interopRequireDefault(_html);
	
	var _ = __webpack_require__(72);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DocApp = (function (_React$Component) {
	    _inherits(DocApp, _React$Component);
	
	    function DocApp() {
	        _classCallCheck(this, DocApp);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(DocApp).apply(this, arguments));
	    }
	
	    _createClass(DocApp, [{
	        key: 'render',
	        value: function render() {
	            var componentSections = Object.keys(_html2.default).filter(function (e) {
	                return e !== 'home';
	            }).map(function (page) {
	                return {
	                    id: page,
	                    label: page[0].toUpperCase() + page.slice(1)
	                };
	            });
	
	            return _react2.default.createElement(
	                _.Layout,
	                { fixedHeader: true, fixedDrawer: true },
	                _react2.default.createElement(
	                    _.Header,
	                    { title: 'React-MDL' },
	                    _react2.default.createElement(
	                        _.Navigation,
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'https://github.com/tleunen/react-mdl' },
	                            _react2.default.createElement(_.Icon, { name: 'link', style: { marginRight: '8px', verticalAlign: 'middle' } }),
	                            'GitHub'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _.Drawer,
	                    { title: 'Components' },
	                    _react2.default.createElement(
	                        _.Navigation,
	                        null,
	                        componentSections.map(function (e) {
	                            return _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: e.id, key: e.id },
	                                e.label
	                            );
	                        })
	                    )
	                ),
	                _react2.default.createElement(
	                    _.Content,
	                    { className: 'mdl-color-text--grey-600' },
	                    _react2.default.createElement(
	                        _.Grid,
	                        null,
	                        _react2.default.createElement(
	                            _.Cell,
	                            { col: 12 },
	                            this.props.children
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return DocApp;
	})(_react2.default.Component);
	
	exports.default = DocApp;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
		badges: __webpack_require__(60),
		buttons: __webpack_require__(61),
		cards: __webpack_require__(62),
		datatables: __webpack_require__(63),
		home: __webpack_require__(64),
		layout: __webpack_require__(65),
		loading: __webpack_require__(66),
		menus: __webpack_require__(67),
		sliders: __webpack_require__(68),
		textfield: __webpack_require__(69),
		toggles: __webpack_require__(70),
		tooltips: __webpack_require__(71)
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"badges\" class=\"mdl-typography--display-4\">Badges</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-1\"></div><script class=\"demo-js\">var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                Badge,\n                                                { text: \"1\" },\n                                                React.createElement(Icon, { name: \"account_box\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                Badge,\n                                                { text: \"♥\" },\n                                                React.createElement(Icon, { name: \"account_box\" })\n                                )\n                )\n);\nvar cont = document.getElementById(\"demo-1\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Number badge on icon */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Badge</span> <span class=\"token attr-name\" >text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>account_box<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Badge</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Icon badge on icon */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Badge</span> <span class=\"token attr-name\" >text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>♥<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>account_box<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Badge</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-2\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            Badge,\n            { text: \"4\" },\n            \"Inbox\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            Badge,\n            { text: \"♥\" },\n            \"Mood\"\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-2\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Number badge on text */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Badge</span> <span class=\"token attr-name\" >text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>4<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Inbox<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Badge</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Icon badge on text */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Badge</span> <span class=\"token attr-name\" >text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>♥<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Mood<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Badge</span><span class=\"token punctuation\" >></span></span></code></pre>\n<h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">text</td>\n<td style=\"text-align:left\">Assign string value to badge</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"buttons\" class=\"mdl-typography--display-4\">Buttons</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-3\"></div><script class=\"demo-js\">var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                FABButton,\n                                                { colored: true },\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                FABButton,\n                                                { colored: true, ripple: true },\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                )\n);\nvar cont = document.getElementById(\"demo-3\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Colored FAB button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FABButton</span> <span class=\"token attr-name\" >colored</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FABButton</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Colored FAB button with ripple */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FABButton</span> <span class=\"token attr-name\" >colored</span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FABButton</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-4\"></div><script class=\"demo-js\">var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 4 },\n                                React.createElement(\n                                                FABButton,\n                                                null,\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 4 },\n                                React.createElement(\n                                                FABButton,\n                                                { ripple: true },\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 4 },\n                                React.createElement(\n                                                FABButton,\n                                                { disabled: true },\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                )\n);\nvar cont = document.getElementById(\"demo-4\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* FAB button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FABButton</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FABButton</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* FAB button with ripple */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FABButton</span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FABButton</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Disabled FAB button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FABButton</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FABButton</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-5\"></div><script class=\"demo-js\">var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                FABButton,\n                                                { mini: true },\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                FABButton,\n                                                { mini: true, colored: true },\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                )\n);\nvar cont = document.getElementById(\"demo-5\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Mini FAB button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FABButton</span> <span class=\"token attr-name\" >mini</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FABButton</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Colored Mini FAB button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FABButton</span> <span class=\"token attr-name\" >mini</span> <span class=\"token attr-name\" >colored</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FABButton</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-6\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { raised: true },\n            \"Button\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { raised: true, ripple: true },\n            \"Button\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { raised: true, disabled: true },\n            \"Button\"\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-6\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Raised button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >raised</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Raised button with ripple */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >raised</span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Disabled Raised button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >raised</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-7\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { raised: true, colored: true },\n            \"Button\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { raised: true, accent: true },\n            \"Button\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { raised: true, accent: true, ripple: true },\n            \"Button\"\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-7\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Colored Raised button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >raised</span> <span class=\"token attr-name\" >colored</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Accent-colored button without ripple */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >raised</span> <span class=\"token attr-name\" >accent</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Accent-colored button with ripple */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >raised</span> <span class=\"token attr-name\" >accent</span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-8\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            null,\n            \"Button\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { ripple: true },\n            \"Button\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { disabled: true },\n            \"Button\"\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-8\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Flat button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Flat button with ripple */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Disabled flat button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-9\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            Button,\n            { primary: true },\n            \"Button\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            Button,\n            { accent: true },\n            \"Button\"\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-9\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Primary colored flat button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >primary</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Accent-colored flat button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >accent</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-10\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(IconButton, { name: \"mood\" })\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(IconButton, { name: \"mood\", colored: true })\n    )\n);\nvar cont = document.getElementById(\"demo-10\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Icon button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconButton</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mood<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Colored Icon button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconButton</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mood<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >colored</span> <span class=\"token punctuation\" >/></span></span></code></pre>\n<h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">accent</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies &quot;accent&quot; colors</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">colored</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies &quot;colored&quot; colors</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">mini</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Set the button as &quot;mini&quot;</td>\n<td style=\"text-align:left\">Optional, works only with &quot;FABButton&quot;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">name</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Set the icon name&quot;</td>\n<td style=\"text-align:left\">Optional, works only with &quot;IconButton&quot;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">primary</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies &quot;primary&quot; colors</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">raised</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies &quot;raised&quot; button style</td>\n<td style=\"text-align:left\">Optional, doesn\\&#39;t work with &quot;FABButton&quot;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">ripple</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies &quot;ripple&quot; click effect</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"cards\" class=\"mdl-typography--display-4\">Cards</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-11\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Card,\n    { shadow: 0, style: { width: '512px', margin: 'auto' } },\n    React.createElement(\n        CardTitle,\n        { style: { color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' } },\n        'Welcome'\n    ),\n    React.createElement(\n        CardText,\n        null,\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...'\n    ),\n    React.createElement(\n        CardActions,\n        { border: true },\n        React.createElement(\n            Button,\n            { colored: true },\n            'Get Started'\n        )\n    ),\n    React.createElement(\n        CardMenu,\n        { style: { color: '#fff' } },\n        React.createElement(IconButton, { name: 'share' })\n    )\n);\nvar cont = document.getElementById(\"demo-11\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Card</span> <span class=\"token attr-name\" >shadow</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>0<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> '512px'<span class=\"token punctuation\" >,</span> margin<span class=\"token punctuation\" >:</span> 'auto'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardTitle</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>color<span class=\"token punctuation\" >:</span> '#fff'<span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> '176px'<span class=\"token punctuation\" >,</span> background<span class=\"token punctuation\" >:</span> '<span class=\"token function\" >url</span><span class=\"token punctuation\" >(</span>http<span class=\"token punctuation\" >:</span>//www<span class=\"token punctuation\" >.</span>getmdl<span class=\"token punctuation\" >.</span>io/assets/demos/welcome_card<span class=\"token punctuation\" >.</span>jpg<span class=\"token punctuation\" >)</span> center / cover'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Welcome<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardTitle</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardText</span><span class=\"token punctuation\" >></span></span>\n        Lorem ipsum dolor sit amet<span class=\"token punctuation\" >,</span> consectetur adipiscing elit<span class=\"token punctuation\" >.</span>\n        Mauris sagittis pellentesque lacus eleifend lacinia<span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardText</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardActions</span> <span class=\"token attr-name\" >border</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >colored</span><span class=\"token punctuation\" >></span></span>Get Started<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardActions</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardMenu</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>color<span class=\"token punctuation\" >:</span> '#fff'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconButton</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>share<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardMenu</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Card</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-12\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Card,\n    { shadow: 0, style: { width: '320px', height: '320px', margin: 'auto' } },\n    React.createElement(\n        CardTitle,\n        { expand: true, style: { color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' } },\n        'Update'\n    ),\n    React.createElement(\n        CardText,\n        null,\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.'\n    ),\n    React.createElement(\n        CardActions,\n        { border: true },\n        React.createElement(\n            Button,\n            { colored: true },\n            'View Updates'\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-12\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Card</span> <span class=\"token attr-name\" >shadow</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>0<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> '320px'<span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> '320px'<span class=\"token punctuation\" >,</span> margin<span class=\"token punctuation\" >:</span> 'auto'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardTitle</span> <span class=\"token attr-name\" >expand</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>color<span class=\"token punctuation\" >:</span> '#fff'<span class=\"token punctuation\" >,</span> background<span class=\"token punctuation\" >:</span> '<span class=\"token function\" >url</span><span class=\"token punctuation\" >(</span>http<span class=\"token punctuation\" >:</span>//www<span class=\"token punctuation\" >.</span>getmdl<span class=\"token punctuation\" >.</span>io/assets/demos/dog<span class=\"token punctuation\" >.</span>png<span class=\"token punctuation\" >)</span> bottom right 15% no-repeat #46B6AC'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Update<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardTitle</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardText</span><span class=\"token punctuation\" >></span></span>\n        Lorem ipsum dolor sit amet<span class=\"token punctuation\" >,</span> consectetur adipiscing elit<span class=\"token punctuation\" >.</span>\n        Aenan convallis<span class=\"token punctuation\" >.</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardText</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardActions</span> <span class=\"token attr-name\" >border</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >colored</span><span class=\"token punctuation\" >></span></span>View Updates<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardActions</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Card</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-13\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Card,\n    { shadow: 0, style: { width: '256px', height: '256px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', margin: 'auto' } },\n    React.createElement(CardTitle, { expand: true }),\n    React.createElement(\n        CardActions,\n        { style: { height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)' } },\n        React.createElement(\n            'span',\n            { style: { color: '#fff', fontSize: '14px', fontWeight: '500' } },\n            'Image.jpg'\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-13\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Card</span> <span class=\"token attr-name\" >shadow</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>0<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> '256px'<span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> '256px'<span class=\"token punctuation\" >,</span> background<span class=\"token punctuation\" >:</span> '<span class=\"token function\" >url</span><span class=\"token punctuation\" >(</span>http<span class=\"token punctuation\" >:</span>//www<span class=\"token punctuation\" >.</span>getmdl<span class=\"token punctuation\" >.</span>io/assets/demos/image_card<span class=\"token punctuation\" >.</span>jpg<span class=\"token punctuation\" >)</span> center / cover'<span class=\"token punctuation\" >,</span> margin<span class=\"token punctuation\" >:</span> 'auto'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardTitle</span> <span class=\"token attr-name\" >expand</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardActions</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> '52px'<span class=\"token punctuation\" >,</span> padding<span class=\"token punctuation\" >:</span> '16px'<span class=\"token punctuation\" >,</span> background<span class=\"token punctuation\" >:</span> '<span class=\"token function\" >rgba</span><span class=\"token punctuation\" >(</span>0<span class=\"token punctuation\" >,</span>0<span class=\"token punctuation\" >,</span>0<span class=\"token punctuation\" >,</span>0<span class=\"token punctuation\" >.</span>2<span class=\"token punctuation\" >)</span>'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>color<span class=\"token punctuation\" >:</span> '#fff'<span class=\"token punctuation\" >,</span> fontSize<span class=\"token punctuation\" >:</span> '14px'<span class=\"token punctuation\" >,</span> fontWeight<span class=\"token punctuation\" >:</span> '500'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n            Image<span class=\"token punctuation\" >.</span>jpg\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardActions</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Card</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-14\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Card,\n    { shadow: 0, style: { width: '256px', height: '256px', background: '#3E4EB8' } },\n    React.createElement(\n        CardTitle,\n        { expand: true, style: { alignItems: 'flex-start', color: '#fff' } },\n        React.createElement(\n            'h4',\n            { style: { marginTop: '0' } },\n            'Featured event:',\n            React.createElement('br', null),\n            'May 24, 2016',\n            React.createElement('br', null),\n            '7-11pm'\n        )\n    ),\n    React.createElement(\n        CardActions,\n        { border: true, style: { borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff' } },\n        React.createElement(\n            Button,\n            { colored: true, style: { color: '#fff' } },\n            'Add to Calendar'\n        ),\n        React.createElement('div', { className: 'mdl-layout-spacer' }),\n        React.createElement(Icon, { name: 'event' })\n    )\n);\nvar cont = document.getElementById(\"demo-14\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Card</span> <span class=\"token attr-name\" >shadow</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>0<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> '256px'<span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> '256px'<span class=\"token punctuation\" >,</span> background<span class=\"token punctuation\" >:</span> '#3E4EB8'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardTitle</span> <span class=\"token attr-name\" >expand</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>alignItems<span class=\"token punctuation\" >:</span> 'flex-start'<span class=\"token punctuation\" >,</span> color<span class=\"token punctuation\" >:</span> '#fff'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>marginTop<span class=\"token punctuation\" >:</span> '0'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n            Featured event<span class=\"token punctuation\" >:</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n            May <span class=\"token number\" >24</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >2016</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token number\" >7</span><span class=\"token operator\" >-</span>11pm\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardTitle</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardActions</span> <span class=\"token attr-name\" >border</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>borderColor<span class=\"token punctuation\" >:</span> '<span class=\"token function\" >rgba</span><span class=\"token punctuation\" >(</span>255<span class=\"token punctuation\" >,</span> 255<span class=\"token punctuation\" >,</span> 255<span class=\"token punctuation\" >,</span> 0<span class=\"token punctuation\" >.</span>2<span class=\"token punctuation\" >)</span>'<span class=\"token punctuation\" >,</span> display<span class=\"token punctuation\" >:</span> 'flex'<span class=\"token punctuation\" >,</span> boxSizing<span class=\"token punctuation\" >:</span> 'border-box'<span class=\"token punctuation\" >,</span> alignItems<span class=\"token punctuation\" >:</span> 'center'<span class=\"token punctuation\" >,</span> color<span class=\"token punctuation\" >:</span> '#fff'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >colored</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>color<span class=\"token punctuation\" >:</span> '#fff'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Add to Calendar<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mdl-layout-spacer<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>event<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardActions</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Card</span><span class=\"token punctuation\" >></span></span></code></pre>\n<h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">border</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies a border on top of the container</td>\n<td style=\"text-align:left\">Optional. Works only with &quot;CardActions&quot;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">expand</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Expand the size to take the available space</td>\n<td style=\"text-align:left\">Optional. Works only with &quot;CardTitle&quot;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">shadow</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Defines the shadow depth</td>\n<td style=\"text-align:left\">Optional, Default 0. Must be between 0 and 6</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"data-tables\" class=\"mdl-typography--display-4\">Data Tables</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-15\"></div><script class=\"demo-js\">var elem = React.createElement(DataTable, {\n    selectable: true,\n    columns: [{ name: 'material', label: 'Material' }, { name: 'quantity', label: 'Quantity', numeric: true }, { name: 'price', label: 'Unit Price', numeric: true }],\n    data: [{ material: 'Acrylic (Transparent)', quantity: 25, price: '$2.90' }, { material: 'Plywood (Birch)', quantity: 50, price: '$1.25' }, { material: 'Laminate (Gold on Blue)', quantity: 10, price: '$2.35' }]\n});\nvar cont = document.getElementById(\"demo-15\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DataTable</span>\n    <span class=\"token attr-name\" >selectable</span>\n    <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span>\n        <span class=\"token punctuation\" >{</span>name<span class=\"token punctuation\" >:</span> 'material'<span class=\"token punctuation\" >,</span> label<span class=\"token punctuation\" >:</span> 'Material'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >{</span>name<span class=\"token punctuation\" >:</span> 'quantity'<span class=\"token punctuation\" >,</span> label<span class=\"token punctuation\" >:</span> 'Quantity'<span class=\"token punctuation\" >,</span> numeric<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >{</span>name<span class=\"token punctuation\" >:</span> 'price'<span class=\"token punctuation\" >,</span> label<span class=\"token punctuation\" >:</span> 'Unit Price'<span class=\"token punctuation\" >,</span> numeric<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >}</span>\n    <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >data</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span>\n        <span class=\"token punctuation\" >{</span>material<span class=\"token punctuation\" >:</span> 'Acrylic <span class=\"token punctuation\" >(</span>Transparent<span class=\"token punctuation\" >)</span>'<span class=\"token punctuation\" >,</span> quantity<span class=\"token punctuation\" >:</span> 25<span class=\"token punctuation\" >,</span> price<span class=\"token punctuation\" >:</span> '$2<span class=\"token punctuation\" >.</span>90'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >{</span>material<span class=\"token punctuation\" >:</span> 'Plywood <span class=\"token punctuation\" >(</span>Birch<span class=\"token punctuation\" >)</span>'<span class=\"token punctuation\" >,</span> quantity<span class=\"token punctuation\" >:</span> 50<span class=\"token punctuation\" >,</span> price<span class=\"token punctuation\" >:</span> '$1<span class=\"token punctuation\" >.</span>25'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >{</span>material<span class=\"token punctuation\" >:</span> 'Laminate <span class=\"token punctuation\" >(</span>Gold on Blue<span class=\"token punctuation\" >)</span>'<span class=\"token punctuation\" >,</span> quantity<span class=\"token punctuation\" >:</span> 10<span class=\"token punctuation\" >,</span> price<span class=\"token punctuation\" >:</span> '$2<span class=\"token punctuation\" >.</span>35'<span class=\"token punctuation\" >}</span>\n    <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n<span class=\"token punctuation\" >/></span></span></code></pre>\n<h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">columns</td>\n<td style=\"text-align:left\">Array of {label, name, numeric}</td>\n<td style=\"text-align:left\">Set the columns</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">data</td>\n<td style=\"text-align:left\">Array of object</td>\n<td style=\"text-align:left\">Set the rows data</td>\n<td style=\"text-align:left\">Required. The properties of each object should be the &quot;name&quot; of each column</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">selected</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Adds a checkbox in front of each row</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"react-mdl\" class=\"mdl-typography--display-4\">React-MDL</h1>\n<p>React-MDL is a React wrapper for <a href=\"http://www.getmdl.io\">Material Design Lite</a>, a set of material components maintained by Google.</p>\n<p>This documentation is actually built entirely with React-MDL. You&#39;ll find examples of the available components.</p>\n<p>If you want to experiment using codepen for example, you can find the React-MDL <a href=\"https://npmcdn.com/react-mdl/out/ReactMDL.js\">bundle JS file</a> and its <a href=\"https://npmcdn.com/react-mdl/out/ReactMDL.min.js\">minified version</a>. Don&#39;t forget to include React and React-DOM for your demos.</p>\n";

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"layout\" class=\"mdl-typography--display-4\">Layout</h1>\n<ul>\n<li><a href=\"#navigation-layout\">Navigation Layout</a></li>\n<li><a href=\"#grid\">Grid</a></li>\n<li><a href=\"#tabs\">Tabs</a></li>\n<li><a href=\"#footer\">Footer</a></li>\n</ul>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<h3 id=\"navigation-layout\" class=\"mdl-typography--display-2\">Navigation Layout</h3>\n<div id=\"demo-16\"></div><script class=\"demo-js\">var elem = React.createElement(\n    'div',\n    { style: { height: '300px', position: 'relative' } },\n    React.createElement(\n        Layout,\n        { style: { background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' } },\n        React.createElement(\n            Header,\n            { transparent: true, title: 'Title', style: { color: 'white' } },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                )\n            )\n        ),\n        React.createElement(\n            Drawer,\n            { title: 'Title' },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                )\n            )\n        ),\n        React.createElement(Content, null)\n    )\n);\nvar cont = document.getElementById(\"demo-16\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Uses a transparent header that draws on top of the layout's background */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> '300px'<span class=\"token punctuation\" >,</span> position<span class=\"token punctuation\" >:</span> 'relative'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>background<span class=\"token punctuation\" >:</span> '<span class=\"token function\" >url</span><span class=\"token punctuation\" >(</span>http<span class=\"token punctuation\" >:</span>//www<span class=\"token punctuation\" >.</span>getmdl<span class=\"token punctuation\" >.</span>io/assets/demos/transparent<span class=\"token punctuation\" >.</span>jpg<span class=\"token punctuation\" >)</span> center / cover'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Header</span> <span class=\"token attr-name\" >transparent</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>color<span class=\"token punctuation\" >:</span> 'white'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Header</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Drawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-17\"></div><script class=\"demo-js\">var elem = React.createElement(\n    'div',\n    { style: { height: '300px', position: 'relative' } },\n    React.createElement(\n        Layout,\n        { fixedDrawer: true },\n        React.createElement(\n            Drawer,\n            { title: 'Title' },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                )\n            )\n        ),\n        React.createElement(Content, null)\n    )\n);\nvar cont = document.getElementById(\"demo-17\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* No header, and the drawer stays open on larger screens (fixed drawer). */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> '300px'<span class=\"token punctuation\" >,</span> position<span class=\"token punctuation\" >:</span> 'relative'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span> <span class=\"token attr-name\" >fixedDrawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Drawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-18\"></div><script class=\"demo-js\">var elem = React.createElement(\n    'div',\n    { style: { height: '300px', position: 'relative' } },\n    React.createElement(\n        Layout,\n        { fixedHeader: true },\n        React.createElement(\n            Header,\n            { title: React.createElement(\n                    'span',\n                    null,\n                    React.createElement(\n                        'span',\n                        { style: { color: '#ddd' } },\n                        'Area / '\n                    ),\n                    React.createElement(\n                        'strong',\n                        null,\n                        'The Title'\n                    )\n                ) },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                )\n            )\n        ),\n        React.createElement(\n            Drawer,\n            { title: 'Title' },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                )\n            )\n        ),\n        React.createElement(Content, null)\n    )\n);\nvar cont = document.getElementById(\"demo-18\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Always shows a header, even in smaller screens. */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> '300px'<span class=\"token punctuation\" >,</span> position<span class=\"token punctuation\" >:</span> 'relative'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span> <span class=\"token attr-name\" >fixedHeader</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Header</span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> color<span class=\"token punctuation\" >:</span> '#ddd' <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Area <span class=\"token operator\" >/</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>strong</span><span class=\"token punctuation\" >></span></span>The Title<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>strong</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Header</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Drawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-19\"></div><script class=\"demo-js\">var elem = React.createElement(\n    'div',\n    { style: { height: '300px', position: 'relative' } },\n    React.createElement(\n        Layout,\n        { fixedHeader: true, fixedDrawer: true },\n        React.createElement(\n            Header,\n            { title: 'Title' },\n            React.createElement(Textfield, {\n                value: '',\n                onChange: () => {},\n                label: 'Search',\n                expandable: true,\n                expandableIcon: 'search'\n            })\n        ),\n        React.createElement(\n            Drawer,\n            { title: 'Title' },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                )\n            )\n        ),\n        React.createElement(Content, null)\n    )\n);\nvar cont = document.getElementById(\"demo-19\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* The drawer is always open in large screens. The header is always shown, even in small screens. */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> '300px'<span class=\"token punctuation\" >,</span> position<span class=\"token punctuation\" >:</span> 'relative'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span> <span class=\"token attr-name\" >fixedHeader</span> <span class=\"token attr-name\" >fixedDrawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Header</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n                <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span>\n                <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >=</span>> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n                <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Search<span class=\"token punctuation\" >\"</span></span>\n                <span class=\"token attr-name\" >expandable</span>\n                <span class=\"token attr-name\" >expandableIcon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Header</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Drawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-20\"></div><script class=\"demo-js\">var elem = React.createElement(\n    'div',\n    { className: 'big-content', style: { height: '300px', position: 'relative' } },\n    React.createElement(\n        Layout,\n        null,\n        React.createElement(\n            Header,\n            { title: 'Title', scroll: true },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                )\n            )\n        ),\n        React.createElement(\n            Drawer,\n            { title: 'Title' },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                )\n            )\n        ),\n        React.createElement(\n            Content,\n            null,\n            React.createElement('div', { className: 'page-content' })\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-20\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Uses a header that scrolls with the text, rather than staying locked at the top */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>big-content<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> '300px'<span class=\"token punctuation\" >,</span> position<span class=\"token punctuation\" >:</span> 'relative'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Header</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >scroll</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Header</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Drawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>page-content<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Content</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-21\"></div><script class=\"demo-js\">var elem = React.createElement(\n    'div',\n    { className: 'big-content', style: { height: '300px', position: 'relative' } },\n    React.createElement(\n        Layout,\n        null,\n        React.createElement(\n            Header,\n            { waterfall: true },\n            React.createElement(\n                HeaderRow,\n                { title: 'Title' },\n                React.createElement(Textfield, {\n                    value: '',\n                    onChange: () => {},\n                    label: 'Search',\n                    expandable: true,\n                    expandableIcon: 'search'\n                })\n            ),\n            React.createElement(\n                HeaderRow,\n                null,\n                React.createElement(\n                    Navigation,\n                    null,\n                    React.createElement(\n                        'a',\n                        { href: '' },\n                        'Link'\n                    ),\n                    React.createElement(\n                        'a',\n                        { href: '' },\n                        'Link'\n                    ),\n                    React.createElement(\n                        'a',\n                        { href: '' },\n                        'Link'\n                    ),\n                    React.createElement(\n                        'a',\n                        { href: '' },\n                        'Link'\n                    )\n                )\n            )\n        ),\n        React.createElement(\n            Drawer,\n            { title: 'Title' },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                )\n            )\n        ),\n        React.createElement(\n            Content,\n            null,\n            React.createElement('div', { className: 'page-content' })\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-21\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Uses a header that contracts as the page scrolls down. */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>big-content<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> '300px'<span class=\"token punctuation\" >,</span> position<span class=\"token punctuation\" >:</span> 'relative'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Header</span> <span class=\"token attr-name\" >waterfall</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HeaderRow</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n                    <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span>\n                    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >=</span>> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n                    <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Search<span class=\"token punctuation\" >\"</span></span>\n                    <span class=\"token attr-name\" >expandable</span>\n                    <span class=\"token attr-name\" >expandableIcon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span>\n                <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>HeaderRow</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HeaderRow</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>HeaderRow</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Header</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Drawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>page-content<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Content</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-22\"></div><script class=\"demo-js\">var elem = React.createElement(\n    'div',\n    { style: { height: '300px', position: 'relative' } },\n    React.createElement(\n        Layout,\n        { fixedHeader: true },\n        React.createElement(\n            Header,\n            null,\n            React.createElement(HeaderRow, { title: 'Title' }),\n            React.createElement(\n                HeaderTabs,\n                { activeTab: 2, onChange: tabId => {} },\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab1'\n                ),\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab2'\n                ),\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab3'\n                ),\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab4'\n                ),\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab5'\n                ),\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab6'\n                )\n            )\n        ),\n        React.createElement(Drawer, { title: 'Title' }),\n        React.createElement(\n            Content,\n            null,\n            React.createElement(\n                'div',\n                { className: 'page-content' },\n                'You can add logic to update the content of this container based on the \"activeTab\" receive in the `onChange` callback.'\n            )\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-22\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Simple header with scrollable tabs. */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> '300px'<span class=\"token punctuation\" >,</span> position<span class=\"token punctuation\" >:</span> 'relative'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span> <span class=\"token attr-name\" >fixedHeader</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Header</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HeaderRow</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HeaderTabs</span> <span class=\"token attr-name\" >activeTab</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>2<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>tabId<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >=</span>> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab1<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab2<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab3<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab4<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab5<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab6<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>HeaderTabs</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Header</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>page-content<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>You can add logic to update the content <span class=\"token keyword\" >of</span> <span class=\"token keyword\" >this</span> container based on the <span class=\"token string\" >\"activeTab\"</span> receive <span class=\"token keyword\" >in</span> the <span class=\"token template-string\" ><span class=\"token string\" >`onChange`</span></span> callback<span class=\"token punctuation\" >.</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Content</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-23\"></div><script class=\"demo-js\">var elem = React.createElement(\n    'div',\n    { style: { height: '300px', position: 'relative' } },\n    React.createElement(\n        Layout,\n        { fixedHeader: true, fixedTabs: true },\n        React.createElement(\n            Header,\n            null,\n            React.createElement(HeaderRow, { title: 'Title' }),\n            React.createElement(\n                HeaderTabs,\n                { activeTab: 1, onChange: tabId => {} },\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab1'\n                ),\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab2'\n                ),\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab3'\n                )\n            )\n        ),\n        React.createElement(Drawer, { title: 'Title' }),\n        React.createElement(\n            Content,\n            null,\n            React.createElement(\n                'div',\n                { className: 'page-content' },\n                'You can add logic to update the content of this container based on the \"activeTab\" receive in the `onChange` callback.'\n            )\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-23\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Simple header with fixed tabs. */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> '300px'<span class=\"token punctuation\" >,</span> position<span class=\"token punctuation\" >:</span> 'relative'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span> <span class=\"token attr-name\" >fixedHeader</span> <span class=\"token attr-name\" >fixedTabs</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Header</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HeaderRow</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HeaderTabs</span> <span class=\"token attr-name\" >activeTab</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>1<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>tabId<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >=</span>> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab1<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab2<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab3<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>HeaderTabs</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Header</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>page-content<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>You can add logic to update the content <span class=\"token keyword\" >of</span> <span class=\"token keyword\" >this</span> container based on the <span class=\"token string\" >\"activeTab\"</span> receive <span class=\"token keyword\" >in</span> the <span class=\"token template-string\" ><span class=\"token string\" >`onChange`</span></span> callback<span class=\"token punctuation\" >.</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Content</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code></pre>\n<h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Element</th>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">Drawer</td>\n<td style=\"text-align:left\">title</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Set the Drawer title</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Layout</td>\n<td style=\"text-align:left\">fixedDrawer</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Makes the drawer always visible and open in larger screens</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Layout</td>\n<td style=\"text-align:left\">fixedHeader</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Makes the header always visible, even in small screens</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Layout</td>\n<td style=\"text-align:left\">fixedTabs</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Uses fixed tabs instead of the default scrollable tabs</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Header</td>\n<td style=\"text-align:left\">scroll</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Makes the header scroll with the content</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Header</td>\n<td style=\"text-align:left\">seamed</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Uses a header without a shadow</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Header</td>\n<td style=\"text-align:left\">title</td>\n<td style=\"text-align:left\">Any</td>\n<td style=\"text-align:left\">Set the layout title</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Header</td>\n<td style=\"text-align:left\">transparent</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Makes header transparent</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Header</td>\n<td style=\"text-align:left\">waterfall</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Allows a &quot;waterfall&quot; effect with multiple header lines</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">HeaderRow</td>\n<td style=\"text-align:left\">title</td>\n<td style=\"text-align:left\">Any</td>\n<td style=\"text-align:left\">Set the layout title</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n<h3 id=\"grid\" class=\"mdl-typography--display-2\">Grid</h3>\n<style>.demo-grid-ruler .mdl-cell,\n.demo-grid-1 .mdl-cell,\n.demo-grid-2 .mdl-cell,\n.demo-grid-3 .mdl-cell {\n  box-sizing: border-box;\n  background-color: #BDBDBD;\n  height: 100px;\n  padding-left: 8px;\n  padding-top: 4px;\n  color: white;\n}\n.demo-grid-ruler.demo-grid-ruler .mdl-cell {\n  height: 50px;\n}</style><div id=\"demo-24\"></div><script class=\"demo-js\">var elem = React.createElement(\n    'div',\n    { style: { width: '80%', margin: 'auto' } },\n    React.createElement(\n        Grid,\n        { className: 'demo-grid-ruler' },\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        )\n    ),\n    React.createElement(\n        Grid,\n        { className: 'demo-grid-1' },\n        React.createElement(\n            Cell,\n            { col: 4 },\n            '4'\n        ),\n        React.createElement(\n            Cell,\n            { col: 4 },\n            '4'\n        ),\n        React.createElement(\n            Cell,\n            { col: 4 },\n            '4'\n        )\n    ),\n    React.createElement(\n        Grid,\n        { className: 'demo-grid-2' },\n        React.createElement(\n            Cell,\n            { col: 6 },\n            '6'\n        ),\n        React.createElement(\n            Cell,\n            { col: 4 },\n            '4'\n        ),\n        React.createElement(\n            Cell,\n            { col: 2 },\n            '2'\n        )\n    ),\n    React.createElement(\n        Grid,\n        { className: 'demo-grid-3' },\n        React.createElement(\n            Cell,\n            { col: 6, tablet: 8 },\n            '6 (8 tablet)'\n        ),\n        React.createElement(\n            Cell,\n            { col: 4, tablet: 6 },\n            '4 (6 tablet)'\n        ),\n        React.createElement(\n            Cell,\n            { col: 2, phone: 4 },\n            '2 (4 phone)'\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-24\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> '80%'<span class=\"token punctuation\" >,</span> margin<span class=\"token punctuation\" >:</span> 'auto'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Grid</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-grid-ruler<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>1<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>1<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>1<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>1<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>1<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>1<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>1<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>1<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>1<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>1<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>1<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>1<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Grid</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Grid</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-grid-1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>4<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>4<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>4<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Grid</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Grid</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-grid-2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>6<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>4<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>2<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >2</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Grid</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Grid</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-grid-3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>6<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >tablet</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>8<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >6</span> <span class=\"token punctuation\" >(</span><span class=\"token number\" >8</span> tablet<span class=\"token punctuation\" >)</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>4<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >tablet</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>6<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >4</span> <span class=\"token punctuation\" >(</span><span class=\"token number\" >6</span> tablet<span class=\"token punctuation\" >)</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>2<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >phone</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>4<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >2</span> <span class=\"token punctuation\" >(</span><span class=\"token number\" >4</span> phone<span class=\"token punctuation\" >)</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Grid</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code></pre>\n<h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Element</th>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">Cell</td>\n<td style=\"text-align:left\">align</td>\n<td style=\"text-align:left\">String[top, middle, bottom, stretch]</td>\n<td style=\"text-align:left\">Set the cell alignment</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Cell</td>\n<td style=\"text-align:left\">col</td>\n<td style=\"text-align:left\">Number[1..12]</td>\n<td style=\"text-align:left\">Set the column size</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Cell</td>\n<td style=\"text-align:left\">phone</td>\n<td style=\"text-align:left\">Number[1..12]</td>\n<td style=\"text-align:left\">Set the column size in phone mode</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Cell</td>\n<td style=\"text-align:left\">tablet</td>\n<td style=\"text-align:left\">Number[1..12]</td>\n<td style=\"text-align:left\">Set the column size in tablet mode</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n<h3 id=\"tabs\" class=\"mdl-typography--display-2\">Tabs</h3>\n<style>.demo-tabs {\n    width: 70%;\n    margin: auto;\n}\n.demo-tabs .content {\n    height: 100px;\n}</style><div id=\"demo-25\"></div><script class=\"demo-js\">var elem = React.createElement(\n    \"div\",\n    { className: \"demo-tabs\" },\n    React.createElement(\n        Tabs,\n        { activeTab: 1, onChange: tabId => {}, ripple: true },\n        React.createElement(\n            Tab,\n            null,\n            \"Starks\"\n        ),\n        React.createElement(\n            Tab,\n            null,\n            \"Lannisters\"\n        ),\n        React.createElement(\n            Tab,\n            null,\n            \"Targaryens\"\n        )\n    ),\n    React.createElement(\n        \"section\",\n        null,\n        React.createElement(\n            \"div\",\n            { className: \"content\" },\n            \"You can add logic to update the content of this container based on the \\\"activeTab\\\" receive in the `onChange` callback.\"\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-25\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-tabs<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tabs</span> <span class=\"token attr-name\" >activeTab</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>1<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>tabId<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >=</span>> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Starks<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Lannisters<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Targaryens<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tabs</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>section</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>content<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>You can add logic to update the content <span class=\"token keyword\" >of</span> <span class=\"token keyword\" >this</span> container based on the <span class=\"token string\" >\"activeTab\"</span> receive <span class=\"token keyword\" >in</span> the <span class=\"token template-string\" ><span class=\"token string\" >`onChange`</span></span> callback<span class=\"token punctuation\" >.</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>section</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code></pre>\n<h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Element</th>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">Tabs</td>\n<td style=\"text-align:left\">activeTab</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Set the active tab</td>\n<td style=\"text-align:left\">Optional, default 0</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Tabs</td>\n<td style=\"text-align:left\">onChange</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Set the change callback</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Tabs</td>\n<td style=\"text-align:left\">ripple</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies ripples effect on tabs</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n<h3 id=\"footer\" class=\"mdl-typography--display-2\">Footer</h3>\n<div id=\"demo-26\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Footer,\n    { size: \"mega\" },\n    React.createElement(\n        FooterSection,\n        { type: \"middle\" },\n        React.createElement(\n            FooterDropDownSection,\n            { title: \"Features\" },\n            React.createElement(\n                FooterLinkList,\n                null,\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"About\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Terms\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Partners\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Updates\"\n                )\n            )\n        ),\n        React.createElement(\n            FooterDropDownSection,\n            { title: \"Details\" },\n            React.createElement(\n                FooterLinkList,\n                null,\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Specs\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Tools\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Resources\"\n                )\n            )\n        ),\n        React.createElement(\n            FooterDropDownSection,\n            { title: \"Technology\" },\n            React.createElement(\n                FooterLinkList,\n                null,\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"How it works\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Patterns\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Usage\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Products\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Contracts\"\n                )\n            )\n        ),\n        React.createElement(\n            FooterDropDownSection,\n            { title: \"FAQ\" },\n            React.createElement(\n                FooterLinkList,\n                null,\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Questions\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Answers\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Contact Us\"\n                )\n            )\n        )\n    ),\n    React.createElement(\n        FooterSection,\n        { type: \"bottom\", logo: \"Title\" },\n        React.createElement(\n            FooterLinkList,\n            null,\n            React.createElement(\n                \"a\",\n                { href: \"#\" },\n                \"Help\"\n            ),\n            React.createElement(\n                \"a\",\n                { href: \"#\" },\n                \"Privacy & Terms\"\n            )\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-26\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Footer</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mega<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterSection</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>middle<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterDropDownSection</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Features<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>About<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Terms<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Partners<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Updates<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterDropDownSection</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterDropDownSection</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Details<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Specs<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Tools<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Resources<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterDropDownSection</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterDropDownSection</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Technology<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>How it works<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Patterns<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Usage<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Products<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Contracts<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterDropDownSection</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterDropDownSection</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>FAQ<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Questions<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Answers<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Contact Us<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterDropDownSection</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterSection</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterSection</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >logo</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Help<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Privacy <span class=\"token operator\" >&amp;</span> Terms<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterSection</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Footer</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-27\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Footer,\n    { size: \"mini\" },\n    React.createElement(\n        FooterSection,\n        { type: \"left\", logo: \"Title\" },\n        React.createElement(\n            FooterLinkList,\n            null,\n            React.createElement(\n                \"a\",\n                { href: \"#\" },\n                \"Help\"\n            ),\n            React.createElement(\n                \"a\",\n                { href: \"#\" },\n                \"Privacy & Terms\"\n            )\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-27\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Footer</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mini<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterSection</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >logo</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Help<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Privacy <span class=\"token operator\" >&amp;</span> Terms<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterSection</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Footer</span><span class=\"token punctuation\" >></span></span></code></pre>\n<h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Element</th>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">Footer</td>\n<td style=\"text-align:left\">size</td>\n<td style=\"text-align:left\">String (mini, mega)</td>\n<td style=\"text-align:left\">Set the size of the footer</td>\n<td style=\"text-align:left\">Optional, default &quot;mega&quot;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">FooterSection</td>\n<td style=\"text-align:left\">logo</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Set the &quot;logo&quot; name</td>\n<td style=\"text-align:left\">Optional, used only in the mini footer</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">FooterSection</td>\n<td style=\"text-align:left\">type</td>\n<td style=\"text-align:left\">String (top, middle, bottom, left, right)</td>\n<td style=\"text-align:left\">Set the section type</td>\n<td style=\"text-align:left\">Optional, default left</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">FooterDropDownSection</td>\n<td style=\"text-align:left\">title</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Set the &quot;logo&quot; name</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"loading\" class=\"mdl-typography--display-4\">Loading</h1>\n<ul>\n<li><a href=\"#progress-bar\">Progress Bar</a></li>\n<li><a href=\"#spinner\">Spinner</a></li>\n</ul>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<h3 id=\"progress-bar\" class=\"mdl-typography--display-2\">Progress Bar</h3>\n<div id=\"demo-28\"></div><script class=\"demo-js\">var elem = React.createElement(ProgressBar, { progress: 44 });\nvar cont = document.getElementById(\"demo-28\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Simple Progress Bar */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ProgressBar</span> <span class=\"token attr-name\" >progress</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>44<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span></code></pre>\n<div id=\"demo-29\"></div><script class=\"demo-js\">var elem = React.createElement(ProgressBar, { indeterminate: true });\nvar cont = document.getElementById(\"demo-29\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Progress Bar with Indeterminate Progress */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ProgressBar</span> <span class=\"token attr-name\" >indeterminate</span> <span class=\"token punctuation\" >/></span></span></code></pre>\n<div id=\"demo-30\"></div><script class=\"demo-js\">var elem = React.createElement(ProgressBar, { progress: 33, buffer: 87 });\nvar cont = document.getElementById(\"demo-30\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Progress Bar with Buffering */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ProgressBar</span> <span class=\"token attr-name\" >progress</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>33<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >buffer</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>87<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span></code></pre>\n<h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">buffer</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Specify the buffer</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">indeterminate</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Set as indeterminate</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">progress</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Specify the progress value</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n<h3 id=\"spinner\" class=\"mdl-typography--display-2\">Spinner</h3>\n<div id=\"demo-31\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(Spinner, null)\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(Spinner, { singleColor: true })\n    )\n);\nvar cont = document.getElementById(\"demo-31\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Simple spinner */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Spinner</span> <span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Single color spinner */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Spinner</span> <span class=\"token attr-name\" >singleColor</span> <span class=\"token punctuation\" >/></span></span></code></pre>\n<h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">singleColor</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Use the primary color instead of a multi color spinner</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"menus\" class=\"mdl-typography--display-4\">Menus</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-32\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            \"div\",\n            { style: { position: 'relative' } },\n            React.createElement(IconButton, { name: \"more_vert\", id: \"demo-menu-lower-left\" }),\n            React.createElement(\n                Menu,\n                { target: \"demo-menu-lower-left\" },\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Some Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Another Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    { disabled: true },\n                    \"Disabled Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Yet Another Action\"\n                )\n            )\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            \"div\",\n            { style: { position: 'relative' } },\n            React.createElement(IconButton, { name: \"more_vert\", id: \"demo-menu-lower-right\" }),\n            React.createElement(\n                Menu,\n                { target: \"demo-menu-lower-right\", align: \"right\" },\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Some Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Another Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    { disabled: true },\n                    \"Disabled Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Yet Another Action\"\n                )\n            )\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-32\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Lower left */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>position<span class=\"token punctuation\" >:</span> 'relative'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconButton</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>more_vert<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-lower-left<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu</span> <span class=\"token attr-name\" >target</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-lower-left<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Some Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>Disabled Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Yet Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Lower right */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>position<span class=\"token punctuation\" >:</span> 'relative'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconButton</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>more_vert<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-lower-right<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu</span> <span class=\"token attr-name\" >target</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-lower-right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >align</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Some Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>Disabled Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Yet Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-33\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            \"div\",\n            { style: { position: 'relative' } },\n            React.createElement(IconButton, { name: \"more_vert\", id: \"demo-menu-top-left\" }),\n            React.createElement(\n                Menu,\n                { target: \"demo-menu-top-left\", valign: \"top\" },\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Some Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Another Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    { disabled: true },\n                    \"Disabled Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Yet Another Action\"\n                )\n            )\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            \"div\",\n            { style: { position: 'relative' } },\n            React.createElement(IconButton, { name: \"more_vert\", id: \"demo-menu-top-right\" }),\n            React.createElement(\n                Menu,\n                { target: \"demo-menu-top-right\", valign: \"top\", align: \"right\" },\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Some Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Another Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    { disabled: true },\n                    \"Disabled Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Yet Another Action\"\n                )\n            )\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-33\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Top left */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>position<span class=\"token punctuation\" >:</span> 'relative'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconButton</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>more_vert<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-top-left<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu</span> <span class=\"token attr-name\" >target</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-top-left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >valign</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>top<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Some Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>Disabled Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Yet Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Top right */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>position<span class=\"token punctuation\" >:</span> 'relative'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconButton</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>more_vert<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-top-right<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu</span> <span class=\"token attr-name\" >target</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-top-right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >valign</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>top<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >align</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Some Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>Disabled Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Yet Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code></pre>\n<h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Element</th>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">Menu</td>\n<td style=\"text-align:left\">align</td>\n<td style=\"text-align:left\">String (left, right)</td>\n<td style=\"text-align:left\">Set the horizontal alignment</td>\n<td style=\"text-align:left\">Optional, default &quot;left&quot;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Menu</td>\n<td style=\"text-align:left\">ripple</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Apply the ripple effect</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Menu</td>\n<td style=\"text-align:left\">target</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">ID of the targeted element. A click on the targeted element wil lopen the menu</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Menu</td>\n<td style=\"text-align:left\">valign</td>\n<td style=\"text-align:left\">String (top, bottom)</td>\n<td style=\"text-align:left\">Set the vertical alignment</td>\n<td style=\"text-align:left\">Optional, default &quot;bottom&quot;</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"sliders\" class=\"mdl-typography--display-4\">Sliders</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-34\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(Slider, { min: 0, max: 100, defaultValue: 0 })\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(Slider, { min: 0, max: 100, defaultValue: 25 })\n    )\n);\nvar cont = document.getElementById(\"demo-34\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Default slider */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >min</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>0<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >max</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>100<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>0<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Slider with initial value */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >min</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>0<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >max</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>100<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>25<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span></code></pre>\n<h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">max</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Set the maximum value</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">min</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Set the minimum value</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">onChange</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Callback taking 1 parameter with the new value</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">value</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Set the initial/current value</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"textfield\" class=\"mdl-typography--display-4\">Textfield</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-35\"></div><script class=\"demo-js\">var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(Textfield, {\n                                                onChange: () => {},\n                                                label: \"Text...\",\n                                                style: { width: '200px' }\n                                })\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(Textfield, {\n                                                onChange: () => {},\n                                                pattern: \"-?[0-9]*(\\\\.[0-9]+)?\",\n                                                error: \"Input is not a number!\",\n                                                label: \"Number...\",\n                                                style: { width: '200px' }\n                                })\n                )\n);\nvar cont = document.getElementById(\"demo-35\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Simple textfield */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >=</span>> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Text...<span class=\"token punctuation\" >\"</span></span>\n    <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> '200px'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n<span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Numeric textfield */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >=</span>> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >pattern</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>-?[0-9]*(\\.[0-9]+)?<span class=\"token punctuation\" >\"</span></span>\n    <span class=\"token attr-name\" >error</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Input</span> <span class=\"token attr-name\" >is</span> <span class=\"token attr-name\" >not</span> <span class=\"token attr-name\" >a</span> <span class=\"token attr-name\" >number!\"</span>\n    <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Number...<span class=\"token punctuation\" >\"</span></span>\n    <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> '200px'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n<span class=\"token punctuation\" >/></span></span></code></pre>\n<div id=\"demo-36\"></div><script class=\"demo-js\">var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(Textfield, {\n                                                onChange: () => {},\n                                                label: \"Text...\",\n                                                floatingLabel: true,\n                                                style: { width: '200px' }\n                                })\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(Textfield, {\n                                                onChange: () => {},\n                                                pattern: \"-?[0-9]*(\\\\.[0-9]+)?\",\n                                                error: \"Input is not a number!\",\n                                                label: \"Number...\",\n                                                floatingLabel: true\n                                })\n                )\n);\nvar cont = document.getElementById(\"demo-36\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Textfield with floating label */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >=</span>> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Text...<span class=\"token punctuation\" >\"</span></span>\n    <span class=\"token attr-name\" >floatingLabel</span>\n    <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> '200px'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n<span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Numeric Textfield with floating label */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >=</span>> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >pattern</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>-?[0-9]*(\\.[0-9]+)?<span class=\"token punctuation\" >\"</span></span>\n    <span class=\"token attr-name\" >error</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Input</span> <span class=\"token attr-name\" >is</span> <span class=\"token attr-name\" >not</span> <span class=\"token attr-name\" >a</span> <span class=\"token attr-name\" >number!\"</span>\n    <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Number...<span class=\"token punctuation\" >\"</span></span>\n    <span class=\"token attr-name\" >floatingLabel</span>\n<span class=\"token punctuation\" >/></span></span></code></pre>\n<div id=\"demo-37\"></div><script class=\"demo-js\">var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(Textfield, {\n                                                onChange: () => {},\n                                                label: \"Text lines...\",\n                                                rows: 3,\n                                                style: { width: '200px' }\n                                })\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(Textfield, {\n                                                onChange: () => {},\n                                                label: \"Expandable Input\",\n                                                expandable: true,\n                                                expandableIcon: \"search\"\n                                })\n                )\n);\nvar cont = document.getElementById(\"demo-37\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Floating Multiline Textfield */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >=</span>> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Text</span> <span class=\"token attr-name\" >lines...\"</span>\n    <span class=\"token attr-name\" >rows</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>3<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> '200px'<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n<span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Expandable Textfield */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >=</span>> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Expandable</span> <span class=\"token attr-name\" >Input\"</span>\n    <span class=\"token attr-name\" >expandable</span>\n    <span class=\"token attr-name\" >expandableIcon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span>\n<span class=\"token punctuation\" >/></span></span></code></pre>\n<h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">disabled</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies the disabled state</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">error</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Specifies the error message</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">expandable</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Set the textfield as expandable</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">expandableIcon</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Set the icon for the expandable textfield</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">floatingLabel</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies the floating label effect</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">inputClassName</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Set CSS classes on the input</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">label</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Defines the input label</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">maxRows</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Defines the max rows (multilines)</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">onChange</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Defines the callback to receive the change event</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">pattern</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Defines the pattern to validate the value</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">required</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Set the textfield as required</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">rows</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Defines the number of rows (multiline)</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">style</td>\n<td style=\"text-align:left\">Object</td>\n<td style=\"text-align:left\">Defines the custom styles for the container</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">value</td>\n<td style=\"text-align:left\">String or Number</td>\n<td style=\"text-align:left\">Definest the &#39;current&#39; value</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"toggles\" class=\"mdl-typography--display-4\">Toggles</h1>\n<ul>\n<li><a href=\"#checkbox\">Checkbox</a></li>\n<li><a href=\"#radio-button\">Radio Button</a></li>\n<li><a href=\"#icon-toggle\">Icon Toggle</a></li>\n<li><a href=\"#switch\">Switch</a></li>\n</ul>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<h3 id=\"checkbox\" class=\"mdl-typography--display-2\">Checkbox</h3>\n<div id=\"demo-38\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(Checkbox, { label: \"With ripple\", ripple: true, defaultChecked: true })\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(Checkbox, { label: \"Without ripple\" })\n    )\n);\nvar cont = document.getElementById(\"demo-38\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Checkbox</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>With</span> <span class=\"token attr-name\" >ripple\"</span> <span class=\"token attr-name\" >ripple</span> <span class=\"token attr-name\" >defaultChecked</span> <span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Checkbox</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Without</span> <span class=\"token attr-name\" >ripple\"</span> <span class=\"token punctuation\" >/></span></span></code></pre>\n<h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">checked</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Defines the checkbox as &quot;checked&quot;</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">disabled</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Defines the checkbox as &quot;disabled&quot;</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">label</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Defines the label</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">onChange</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Callback to receive the change event</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">ripple</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies the ripple effect</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n<h3 id=\"radio-button\" class=\"mdl-typography--display-2\">Radio Button</h3>\n<div id=\"demo-39\"></div><script class=\"demo-js\">var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                RadioGroup,\n                                                { name: \"demo\", value: \"opt1\", onChange: () => {} },\n                                                React.createElement(\n                                                                Radio,\n                                                                { value: \"opt1\", ripple: true },\n                                                                \"Ripple option\"\n                                                ),\n                                                React.createElement(\n                                                                Radio,\n                                                                { value: \"opt2\" },\n                                                                \"Other option\"\n                                                )\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                RadioGroup,\n                                                { container: \"ul\", childContainer: \"li\", name: \"demo2\", value: \"opt2\", onChange: () => {} },\n                                                React.createElement(\n                                                                Radio,\n                                                                { value: \"opt1\", ripple: true },\n                                                                \"Ripple option\"\n                                                ),\n                                                React.createElement(\n                                                                Radio,\n                                                                { value: \"opt2\" },\n                                                                \"Other option\"\n                                                )\n                                )\n                )\n);\nvar cont = document.getElementById(\"demo-39\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>RadioGroup</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>opt1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >=</span>> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>opt1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>Ripple option<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Radio</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>opt2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Other option<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Radio</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>RadioGroup</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>RadioGroup</span> <span class=\"token attr-name\" >container</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ul<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >childContainer</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>li<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>opt2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >=</span>> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>opt1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>Ripple option<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Radio</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>opt2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Other option<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Radio</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>RadioGroup</span><span class=\"token punctuation\" >></span></span></code></pre>\n<h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Element</th>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">RadioGroup</td>\n<td style=\"text-align:left\">childContainer</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Wrap every child in the specified container</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">RadioGroup</td>\n<td style=\"text-align:left\">name</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Defines the name of the radio group</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">RadioGroup</td>\n<td style=\"text-align:left\">onChange</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Defines the callback to receive the change event</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">RadioGroup</td>\n<td style=\"text-align:left\">value</td>\n<td style=\"text-align:left\">String or Number</td>\n<td style=\"text-align:left\">Defines the selected value</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Radio</td>\n<td style=\"text-align:left\">disabled</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Set as disabled</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Radio</td>\n<td style=\"text-align:left\">ripple</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies the ripple effect</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Radio</td>\n<td style=\"text-align:left\">value</td>\n<td style=\"text-align:left\">String or Number</td>\n<td style=\"text-align:left\">Defines the selected value</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n</tbody>\n        </table>\n<h3 id=\"icon-toggle\" class=\"mdl-typography--display-2\">Icon Toggle</h3>\n<div id=\"demo-40\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(IconToggle, { ripple: true, id: \"bold\", name: \"format_bold\", defaultChecked: true })\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(IconToggle, { id: \"italic\", name: \"format_italic\" })\n    )\n);\nvar cont = document.getElementById(\"demo-40\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconToggle</span> <span class=\"token attr-name\" >ripple</span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bold<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>format_bold<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >defaultChecked</span> <span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconToggle</span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>italic<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>format_italic<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span></code></pre>\n<h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">checked</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Defines the checkbox as &quot;checked&quot;</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">disabled</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Defines the checkbox as &quot;disabled&quot;</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">name</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Defines the name</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">onChange</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Callback to receive the change event</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">ripple</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies the ripple effect</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n<h3 id=\"switch\" class=\"mdl-typography--display-2\">Switch</h3>\n<div id=\"demo-41\"></div><script class=\"demo-js\">var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            Switch,\n            { ripple: true, id: \"switch1\", defaultChecked: true },\n            \"Ripple switch\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            Switch,\n            { id: \"switch2\" },\n            \"Switch\"\n        )\n    )\n);\nvar cont = document.getElementById(\"demo-41\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >ripple</span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>switch1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >defaultChecked</span><span class=\"token punctuation\" >></span></span>Ripple <span class=\"token keyword\" >switch</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Switch</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>switch2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Switch<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Switch</span><span class=\"token punctuation\" >></span></span></code></pre>\n<h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">checked</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Defines the checkbox as &quot;checked&quot;</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">disabled</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Defines the checkbox as &quot;disabled&quot;</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">onChange</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Callback to receive the change event</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">ripple</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies the ripple effect</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"loading\" class=\"mdl-typography--display-4\">Loading</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-42\"></div><script class=\"demo-js\">var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                Tooltip,\n                                                { label: \"Follow\" },\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                Tooltip,\n                                                { label: \"Print\", large: true },\n                                                React.createElement(Icon, { name: \"print\" })\n                                )\n                )\n);\nvar cont = document.getElementById(\"demo-42\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Simple tooltip */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tooltip</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Follow<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tooltip</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Large Tooltip */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tooltip</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Print<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >large</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>print<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tooltip</span><span class=\"token punctuation\" >></span></span></code></pre>\n<div id=\"demo-43\"></div><script class=\"demo-js\">var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                Tooltip,\n                                                { label: React.createElement(\n                                                                                \"span\",\n                                                                                null,\n                                                                                \"Upload \",\n                                                                                React.createElement(\n                                                                                                \"strong\",\n                                                                                                null,\n                                                                                                \"file.zip\"\n                                                                                )\n                                                                ) },\n                                                React.createElement(Icon, { name: \"cloud_upload\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                Tooltip,\n                                                { label: React.createElement(\n                                                                                \"span\",\n                                                                                null,\n                                                                                \"Share your content\",\n                                                                                React.createElement(\"br\", null),\n                                                                                \"via social media\"\n                                                                ) },\n                                                React.createElement(Icon, { name: \"share\" })\n                                )\n                )\n);\nvar cont = document.getElementById(\"demo-43\");\nReactDOM.render(elem, cont);\n</script><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Rich Tooltip */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tooltip</span> <span class=\"token attr-name\" >label={&lt;span</span><span class=\"token punctuation\" >></span></span>Upload <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>strong</span><span class=\"token punctuation\" >></span></span>file<span class=\"token punctuation\" >.</span>zip<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>strong</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>cloud_upload<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tooltip</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Multiline Tooltip */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tooltip</span> <span class=\"token attr-name\" >label={&lt;span</span><span class=\"token punctuation\" >></span></span>Share your content<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>via social media<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>share<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tooltip</span><span class=\"token punctuation\" >></span></span></code></pre>\n<h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">label</td>\n<td style=\"text-align:left\">Element or String</td>\n<td style=\"text-align:left\">Specify the content of the tooltip</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">large</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Defines a large tooltip</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Tooltip = exports.Textfield = exports.TabBar = exports.Tab = exports.Tabs = exports.Switch = exports.Spinner = exports.Slider = exports.RadioGroup = exports.Radio = exports.ProgressBar = exports.MenuItem = exports.Menu = exports.Content = exports.Navigation = exports.Spacer = exports.HeaderTabs = exports.HeaderRow = exports.Drawer = exports.Header = exports.Layout = exports.IconToggle = exports.IconButton = exports.Icon = exports.Cell = exports.Grid = exports.FooterLinkList = exports.FooterDropDownSection = exports.FooterSection = exports.Footer = exports.FABButton = exports.DataTable = exports.Checkbox = exports.CardMenu = exports.CardText = exports.CardMedia = exports.CardActions = exports.CardTitle = exports.Card = exports.Button = exports.Badge = exports.MDLComponent = exports.mdlUpgrade = undefined;
	
	var _Card = __webpack_require__(73);
	
	Object.defineProperty(exports, 'Card', {
	    enumerable: true,
	    get: function get() {
	        return _Card.Card;
	    }
	});
	Object.defineProperty(exports, 'CardTitle', {
	    enumerable: true,
	    get: function get() {
	        return _Card.CardTitle;
	    }
	});
	Object.defineProperty(exports, 'CardActions', {
	    enumerable: true,
	    get: function get() {
	        return _Card.CardActions;
	    }
	});
	Object.defineProperty(exports, 'CardMedia', {
	    enumerable: true,
	    get: function get() {
	        return _Card.CardMedia;
	    }
	});
	Object.defineProperty(exports, 'CardText', {
	    enumerable: true,
	    get: function get() {
	        return _Card.CardText;
	    }
	});
	Object.defineProperty(exports, 'CardMenu', {
	    enumerable: true,
	    get: function get() {
	        return _Card.CardMenu;
	    }
	});
	
	var _Footer = __webpack_require__(80);
	
	Object.defineProperty(exports, 'Footer', {
	    enumerable: true,
	    get: function get() {
	        return _Footer.Footer;
	    }
	});
	Object.defineProperty(exports, 'FooterSection', {
	    enumerable: true,
	    get: function get() {
	        return _Footer.FooterSection;
	    }
	});
	Object.defineProperty(exports, 'FooterDropDownSection', {
	    enumerable: true,
	    get: function get() {
	        return _Footer.FooterDropDownSection;
	    }
	});
	Object.defineProperty(exports, 'FooterLinkList', {
	    enumerable: true,
	    get: function get() {
	        return _Footer.FooterLinkList;
	    }
	});
	
	var _Grid2 = __webpack_require__(86);
	
	Object.defineProperty(exports, 'Cell', {
	    enumerable: true,
	    get: function get() {
	        return _Grid2.Cell;
	    }
	});
	
	var _Layout = __webpack_require__(87);
	
	Object.defineProperty(exports, 'Layout', {
	    enumerable: true,
	    get: function get() {
	        return _Layout.Layout;
	    }
	});
	Object.defineProperty(exports, 'Header', {
	    enumerable: true,
	    get: function get() {
	        return _Layout.Header;
	    }
	});
	Object.defineProperty(exports, 'Drawer', {
	    enumerable: true,
	    get: function get() {
	        return _Layout.Drawer;
	    }
	});
	Object.defineProperty(exports, 'HeaderRow', {
	    enumerable: true,
	    get: function get() {
	        return _Layout.HeaderRow;
	    }
	});
	Object.defineProperty(exports, 'HeaderTabs', {
	    enumerable: true,
	    get: function get() {
	        return _Layout.HeaderTabs;
	    }
	});
	Object.defineProperty(exports, 'Spacer', {
	    enumerable: true,
	    get: function get() {
	        return _Layout.Spacer;
	    }
	});
	Object.defineProperty(exports, 'Navigation', {
	    enumerable: true,
	    get: function get() {
	        return _Layout.Navigation;
	    }
	});
	Object.defineProperty(exports, 'Content', {
	    enumerable: true,
	    get: function get() {
	        return _Layout.Content;
	    }
	});
	
	var _Menu2 = __webpack_require__(100);
	
	Object.defineProperty(exports, 'MenuItem', {
	    enumerable: true,
	    get: function get() {
	        return _Menu2.MenuItem;
	    }
	});
	
	var _Tabs = __webpack_require__(101);
	
	Object.defineProperty(exports, 'Tabs', {
	    enumerable: true,
	    get: function get() {
	        return _Tabs.Tabs;
	    }
	});
	Object.defineProperty(exports, 'Tab', {
	    enumerable: true,
	    get: function get() {
	        return _Tabs.Tab;
	    }
	});
	Object.defineProperty(exports, 'TabBar', {
	    enumerable: true,
	    get: function get() {
	        return _Tabs.TabBar;
	    }
	});
	
	var _mdlUpgrade2 = __webpack_require__(89);
	
	var _mdlUpgrade3 = _interopRequireDefault(_mdlUpgrade2);
	
	var _MDLComponent2 = __webpack_require__(90);
	
	var _MDLComponent3 = _interopRequireDefault(_MDLComponent2);
	
	var _Badge2 = __webpack_require__(103);
	
	var _Badge3 = _interopRequireDefault(_Badge2);
	
	var _Button2 = __webpack_require__(104);
	
	var _Button3 = _interopRequireDefault(_Button2);
	
	var _Checkbox2 = __webpack_require__(105);
	
	var _Checkbox3 = _interopRequireDefault(_Checkbox2);
	
	var _DataTable2 = __webpack_require__(106);
	
	var _DataTable3 = _interopRequireDefault(_DataTable2);
	
	var _FABButton2 = __webpack_require__(107);
	
	var _FABButton3 = _interopRequireDefault(_FABButton2);
	
	var _Grid3 = _interopRequireDefault(_Grid2);
	
	var _Icon2 = __webpack_require__(108);
	
	var _Icon3 = _interopRequireDefault(_Icon2);
	
	var _IconButton2 = __webpack_require__(109);
	
	var _IconButton3 = _interopRequireDefault(_IconButton2);
	
	var _IconToggle2 = __webpack_require__(110);
	
	var _IconToggle3 = _interopRequireDefault(_IconToggle2);
	
	var _Menu3 = _interopRequireDefault(_Menu2);
	
	var _ProgressBar2 = __webpack_require__(111);
	
	var _ProgressBar3 = _interopRequireDefault(_ProgressBar2);
	
	var _Radio2 = __webpack_require__(112);
	
	var _Radio3 = _interopRequireDefault(_Radio2);
	
	var _RadioGroup2 = __webpack_require__(113);
	
	var _RadioGroup3 = _interopRequireDefault(_RadioGroup2);
	
	var _Slider2 = __webpack_require__(114);
	
	var _Slider3 = _interopRequireDefault(_Slider2);
	
	var _Spinner2 = __webpack_require__(115);
	
	var _Spinner3 = _interopRequireDefault(_Spinner2);
	
	var _Switch2 = __webpack_require__(116);
	
	var _Switch3 = _interopRequireDefault(_Switch2);
	
	var _Textfield2 = __webpack_require__(117);
	
	var _Textfield3 = _interopRequireDefault(_Textfield2);
	
	var _Tooltip2 = __webpack_require__(118);
	
	var _Tooltip3 = _interopRequireDefault(_Tooltip2);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.mdlUpgrade = _mdlUpgrade3.default;
	exports.MDLComponent = _MDLComponent3.default;
	
	// components
	
	exports.Badge = _Badge3.default;
	exports.Button = _Button3.default;
	exports.Checkbox = _Checkbox3.default;
	exports.DataTable = _DataTable3.default;
	exports.FABButton = _FABButton3.default;
	exports.Grid = _Grid3.default;
	exports.Icon = _Icon3.default;
	exports.IconButton = _IconButton3.default;
	exports.IconToggle = _IconToggle3.default;
	exports.Menu = _Menu3.default;
	exports.ProgressBar = _ProgressBar3.default;
	exports.Radio = _Radio3.default;
	exports.RadioGroup = _RadioGroup3.default;
	exports.Slider = _Slider3.default;
	exports.Spinner = _Spinner3.default;
	exports.Switch = _Switch3.default;
	exports.Textfield = _Textfield3.default;
	exports.Tooltip = _Tooltip3.default;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CardMedia = exports.CardActions = exports.CardTitle = exports.CardMenu = exports.CardText = exports.Card = undefined;
	
	var _basicClassCreator = __webpack_require__(74);
	
	var _basicClassCreator2 = _interopRequireDefault(_basicClassCreator);
	
	var _Card2 = __webpack_require__(76);
	
	var _Card3 = _interopRequireDefault(_Card2);
	
	var _CardTitle2 = __webpack_require__(78);
	
	var _CardTitle3 = _interopRequireDefault(_CardTitle2);
	
	var _CardActions2 = __webpack_require__(79);
	
	var _CardActions3 = _interopRequireDefault(_CardActions2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.Card = _Card3.default;
	var CardText = exports.CardText = (0, _basicClassCreator2.default)('CardText', 'mdl-card__supporting-text');
	var CardMenu = exports.CardMenu = (0, _basicClassCreator2.default)('CardMenu', 'mdl-card__menu');
	exports.CardTitle = _CardTitle3.default;
	exports.CardActions = _CardActions3.default;
	var CardMedia = exports.CardMedia = (0, _basicClassCreator2.default)('CardMedia', 'mdl-card__media');

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (displayName, defaultClassName) {
	    var element = arguments.length <= 2 || arguments[2] === undefined ? 'div' : arguments[2];
	
	    var fn = function fn(props) {
	        var className = props.className;
	        var children = props.children;
	
	        var otherProps = _objectWithoutProperties(props, ['className', 'children']);
	
	        return _react2.default.createElement(element, _extends({
	            className: (0, _classnames2.default)(defaultClassName, className)
	        }, otherProps), children);
	    };
	
	    fn.displayName = displayName;
	
	    return fn;
	};
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _clamp = __webpack_require__(77);
	
	var _clamp2 = _interopRequireDefault(_clamp);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var shadows = ['mdl-shadow--2dp', 'mdl-shadow--3dp', 'mdl-shadow--4dp', 'mdl-shadow--6dp', 'mdl-shadow--8dp', 'mdl-shadow--16dp'];
	
	var Card = function Card(props) {
	    var className = props.className;
	    var shadow = props.shadow;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'shadow', 'children']);
	
	    var hasShadow = typeof shadow !== 'undefined';
	    var shadowLevel = (0, _clamp2.default)(shadow || 0, 0, shadows.length - 1);
	
	    var classes = (0, _classnames2.default)('mdl-card', _defineProperty({}, shadows[shadowLevel], hasShadow), className);
	
	    return _react2.default.createElement('div', _extends({ className: classes }, otherProps), children);
	};
	Card.propTypes = {
	    className: _react.PropTypes.string,
	    shadow: _react.PropTypes.number
	};
	
	exports.default = Card;

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = clamp
	
	function clamp(value, min, max) {
	  return min < max
	    ? (value < min ? min : value > max ? max : value)
	    : (value < max ? max : value > min ? min : value)
	}


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var CardTitle = (function (_React$Component) {
	    _inherits(CardTitle, _React$Component);
	
	    function CardTitle() {
	        _classCallCheck(this, CardTitle);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CardTitle).apply(this, arguments));
	    }
	
	    _createClass(CardTitle, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var children = _props.children;
	            var expand = _props.expand;
	
	            var otherProps = _objectWithoutProperties(_props, ['className', 'children', 'expand']);
	
	            var classes = (0, _classnames2.default)('mdl-card__title', {
	                'mdl-card--expand': expand
	            }, className);
	
	            var title = typeof children === 'string' ? _react2.default.createElement('h2', { className: 'mdl-card__title-text' }, children) : children;
	
	            return _react2.default.createElement('div', _extends({ className: classes }, otherProps), title);
	        }
	    }]);
	
	    return CardTitle;
	})(_react2.default.Component);
	
	CardTitle.propTypes = {
	    className: _react.PropTypes.string,
	    expand: _react.PropTypes.bool
	};
	exports.default = CardTitle;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var CardActions = function CardActions(props) {
	    var className = props.className;
	    var border = props.border;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'border', 'children']);
	
	    var classes = (0, _classnames2.default)('mdl-card__actions', {
	        'mdl-card--border': border
	    }, className);
	
	    return _react2.default.createElement('div', _extends({ className: classes }, otherProps), children);
	};
	
	CardActions.propTypes = {
	    border: _react.PropTypes.bool,
	    className: _react.PropTypes.string
	};
	
	exports.default = CardActions;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FooterLinkList = exports.FooterDropDownSection = exports.FooterSection = exports.Footer = undefined;
	
	var _Footer2 = __webpack_require__(81);
	
	var _Footer3 = _interopRequireDefault(_Footer2);
	
	var _Section = __webpack_require__(83);
	
	var _Section2 = _interopRequireDefault(_Section);
	
	var _DropDownSection = __webpack_require__(84);
	
	var _DropDownSection2 = _interopRequireDefault(_DropDownSection);
	
	var _LinkList = __webpack_require__(85);
	
	var _LinkList2 = _interopRequireDefault(_LinkList);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.Footer = _Footer3.default;
	exports.FooterSection = _Section2.default;
	exports.FooterDropDownSection = _DropDownSection2.default;
	exports.FooterLinkList = _LinkList2.default;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _cloneChildren = __webpack_require__(82);
	
	var _cloneChildren2 = _interopRequireDefault(_cloneChildren);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var Footer = function Footer(props) {
	    var className = props.className;
	    var size = props.size;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'size', 'children']);
	
	    var classes = (0, _classnames2.default)(_defineProperty({}, 'mdl-' + size + '-footer', true), className);
	
	    return _react2.default.createElement('footer', _extends({ className: classes }, otherProps), (0, _cloneChildren2.default)(children, { size: size }));
	};
	
	Footer.propTypes = {
	    className: _react.PropTypes.string,
	    size: _react.PropTypes.oneOf(['mini', 'mega'])
	};
	Footer.defaultProps = {
	    size: 'mega'
	};
	
	exports.default = Footer;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (children, props) {
	    return _react2.default.Children.map(children, function (child) {
	        var newProps = typeof props === 'function' ? props(child) : props;
	        return _react2.default.cloneElement(child, newProps);
	    });
	};
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _cloneChildren = __webpack_require__(82);
	
	var _cloneChildren2 = _interopRequireDefault(_cloneChildren);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var Section = function Section(props) {
	    var className = props.className;
	    var logo = props.logo;
	    var size = props.size;
	    var type = props.type;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'logo', 'size', 'type', 'children']);
	
	    var classes = (0, _classnames2.default)(_defineProperty({}, 'mdl-' + size + '-footer__' + type + '-section', true), className);
	
	    return _react2.default.createElement('div', _extends({ className: classes }, otherProps), logo ? _react2.default.createElement('div', { className: 'mdl-logo' }, logo) : null, (0, _cloneChildren2.default)(children, { size: size }));
	};
	
	Section.propTypes = {
	    className: _react.PropTypes.string,
	    logo: _react.PropTypes.string,
	    size: _react.PropTypes.oneOf(['mini', 'mega']),
	    type: _react.PropTypes.oneOf(['top', 'middle', 'bottom', 'left', 'right'])
	};
	Section.defaultProps = {
	    size: 'mega',
	    type: 'left'
	};
	
	exports.default = Section;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _cloneChildren = __webpack_require__(82);
	
	var _cloneChildren2 = _interopRequireDefault(_cloneChildren);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var DropDownSection = function DropDownSection(props) {
	    var className = props.className;
	    var size = props.size;
	    var title = props.title;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'size', 'title', 'children']);
	
	    var classes = (0, _classnames2.default)(_defineProperty({}, 'mdl-' + size + '-footer__drop-down-section', true), className);
	
	    return _react2.default.createElement('div', _extends({ className: classes }, otherProps), _react2.default.createElement('input', { className: 'mdl-' + size + '-footer__heading-checkbox', type: 'checkbox', defaultChecked: true }), _react2.default.createElement('h1', { className: 'mdl-' + size + '-footer__heading' }, title), (0, _cloneChildren2.default)(children, { size: size }));
	};
	
	DropDownSection.propTypes = {
	    className: _react.PropTypes.string,
	    size: _react.PropTypes.oneOf(['mini', 'mega']),
	    title: _react.PropTypes.string.isRequired
	};
	DropDownSection.defaultProps = {
	    size: 'mega'
	};
	
	exports.default = DropDownSection;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var LinkList = function LinkList(props) {
	    var className = props.className;
	    var size = props.size;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'size', 'children']);
	
	    var classes = (0, _classnames2.default)(_defineProperty({}, 'mdl-' + size + '-footer__link-list', true), className);
	
	    return _react2.default.createElement('ul', _extends({ className: classes }, otherProps), _react2.default.Children.map(children, function (child) {
	        return _react2.default.createElement('li', null, child);
	    }));
	};
	
	LinkList.propTypes = {
	    className: _react.PropTypes.string,
	    size: _react.PropTypes.oneOf(['mini', 'mega'])
	};
	LinkList.defaultProps = {
	    size: 'mega'
	};
	
	exports.default = LinkList;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Cell = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var Grid = function Grid(props) {
	    var className = props.className;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'children']);
	
	    var classes = (0, _classnames2.default)('mdl-grid', className);
	
	    return _react2.default.createElement('div', _extends({ className: classes }, otherProps), children);
	};
	
	Grid.propTypes = {
	    className: _react.PropTypes.string
	};
	
	/* eslint-disable react/no-multi-comp */
	var Cell = function Cell(props) {
	    var _classNames;
	
	    var align = props.align;
	    var className = props.className;
	    var children = props.children;
	    var col = props.col;
	    var phone = props.phone;
	    var tablet = props.tablet;
	
	    var otherProps = _objectWithoutProperties(props, ['align', 'className', 'children', 'col', 'phone', 'tablet']);
	
	    var classes = (0, _classnames2.default)('mdl-cell', (_classNames = {}, _defineProperty(_classNames, 'mdl-cell--' + col + '-col', true), _defineProperty(_classNames, 'mdl-cell--' + phone + '-col-phone', typeof phone !== 'undefined'), _defineProperty(_classNames, 'mdl-cell--' + tablet + '-col-tablet', typeof tablet !== 'undefined'), _defineProperty(_classNames, 'mdl-cell--' + align, typeof align !== 'undefined'), _classNames), className);
	
	    return _react2.default.createElement('div', _extends({ className: classes }, otherProps), children);
	};
	
	Cell.propTypes = {
	    align: _react.PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
	    className: _react.PropTypes.string,
	    col: _react.PropTypes.number.isRequired,
	    phone: _react.PropTypes.number,
	    tablet: _react.PropTypes.number
	};
	
	exports.default = Grid;
	exports.Cell = Cell;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Spacer = exports.Navigation = exports.HeaderTabs = exports.HeaderRow = exports.Header = exports.Drawer = exports.Content = exports.Layout = undefined;
	
	var _Layout2 = __webpack_require__(88);
	
	var _Layout3 = _interopRequireDefault(_Layout2);
	
	var _Content2 = __webpack_require__(91);
	
	var _Content3 = _interopRequireDefault(_Content2);
	
	var _Drawer2 = __webpack_require__(92);
	
	var _Drawer3 = _interopRequireDefault(_Drawer2);
	
	var _Header2 = __webpack_require__(93);
	
	var _Header3 = _interopRequireDefault(_Header2);
	
	var _HeaderRow2 = __webpack_require__(94);
	
	var _HeaderRow3 = _interopRequireDefault(_HeaderRow2);
	
	var _HeaderTabs2 = __webpack_require__(96);
	
	var _HeaderTabs3 = _interopRequireDefault(_HeaderTabs2);
	
	var _Navigation2 = __webpack_require__(99);
	
	var _Navigation3 = _interopRequireDefault(_Navigation2);
	
	var _Spacer2 = __webpack_require__(95);
	
	var _Spacer3 = _interopRequireDefault(_Spacer2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.Layout = _Layout3.default;
	exports.Content = _Content3.default;
	exports.Drawer = _Drawer3.default;
	exports.Header = _Header3.default;
	exports.HeaderRow = _HeaderRow3.default;
	exports.HeaderTabs = _HeaderTabs3.default;
	exports.Navigation = _Navigation3.default;
	exports.Spacer = _Spacer3.default;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(89);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Layout = (function (_React$Component) {
	    _inherits(Layout, _React$Component);
	
	    function Layout() {
	        _classCallCheck(this, Layout);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).apply(this, arguments));
	    }
	
	    _createClass(Layout, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var fixedDrawer = _props.fixedDrawer;
	            var fixedHeader = _props.fixedHeader;
	            var fixedTabs = _props.fixedTabs;
	
	            var otherProps = _objectWithoutProperties(_props, ['className', 'fixedDrawer', 'fixedHeader', 'fixedTabs']);
	
	            var classes = (0, _classnames2.default)('mdl-layout mdl-js-layout', {
	                'mdl-layout--fixed-drawer': fixedDrawer,
	                'mdl-layout--fixed-header': fixedHeader,
	                'mdl-layout--fixed-tabs': fixedTabs
	            }, className);
	
	            return _react2.default.createElement('div', _extends({ className: classes }, otherProps), this.props.children);
	        }
	    }]);
	
	    return Layout;
	})(_react2.default.Component);
	
	Layout.propTypes = {
	    className: _react.PropTypes.string,
	    fixedDrawer: _react.PropTypes.bool,
	    fixedHeader: _react.PropTypes.bool,
	    fixedTabs: _react.PropTypes.bool
	};
	exports.default = (0, _mdlUpgrade2.default)(Layout);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MDLComponent = __webpack_require__(90);
	
	var _MDLComponent2 = _interopRequireDefault(_MDLComponent);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = function (Component) {
	    var render = Component.prototype.render;
	
	    Component.prototype.render = function rendr() {
	        return _react2.default.createElement(_MDLComponent2.default, null, render.call(this));
	    };
	
	    return Component;
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _reactDom = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var MDLComponent = (function (_Component) {
	    _inherits(MDLComponent, _Component);
	
	    function MDLComponent() {
	        _classCallCheck(this, MDLComponent);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MDLComponent).apply(this, arguments));
	    }
	
	    _createClass(MDLComponent, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            window.componentHandler.upgradeElement((0, _reactDom.findDOMNode)(this));
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.componentHandler.downgradeElements((0, _reactDom.findDOMNode)(this));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react.Children.only(this.props.children);
	        }
	    }]);
	
	    return MDLComponent;
	})(_react.Component);
	
	exports.default = MDLComponent;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var Content = function Content(props) {
	    var children = props.children;
	    var className = props.className;
	
	    var otherProps = _objectWithoutProperties(props, ['children', 'className']);
	
	    var classes = (0, _classnames2.default)('mdl-layout__content', className);
	
	    return _react2.default.createElement('div', _extends({ className: classes }, otherProps), children, _react2.default.createElement('div', { className: 'react-mdl-header-tabs-hack', id: 'undefined' }));
	};
	
	exports.default = Content;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var Drawer = function Drawer(props) {
	    var className = props.className;
	    var title = props.title;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'title', 'children']);
	
	    var classes = (0, _classnames2.default)('mdl-layout__drawer', className);
	
	    return _react2.default.createElement('div', _extends({ className: classes }, otherProps), title ? _react2.default.createElement('span', { className: 'mdl-layout-title' }, title) : null, children);
	};
	Drawer.propTypes = {
	    className: _react.PropTypes.string,
	    title: _react.PropTypes.string
	};
	
	exports.default = Drawer;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _HeaderRow = __webpack_require__(94);
	
	var _HeaderRow2 = _interopRequireDefault(_HeaderRow);
	
	var _HeaderTabs = __webpack_require__(96);
	
	var _HeaderTabs2 = _interopRequireDefault(_HeaderTabs);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var Header = function Header(props) {
	    var className = props.className;
	    var scroll = props.scroll;
	    var seamed = props.seamed;
	    var title = props.title;
	    var transparent = props.transparent;
	    var waterfall = props.waterfall;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'scroll', 'seamed', 'title', 'transparent', 'waterfall', 'children']);
	
	    var classes = (0, _classnames2.default)('mdl-layout__header', {
	        'mdl-layout__header--scroll': scroll,
	        'mdl-layout__header--seamed': seamed,
	        'mdl-layout__header--transparent': transparent,
	        'mdl-layout__header--waterfall': waterfall
	    }, className);
	
	    var isRowOrTab = false;
	    _react2.default.Children.forEach(children, function (child) {
	        if (child && (child.type === _HeaderRow2.default || child.type === _HeaderTabs2.default)) {
	            isRowOrTab = true;
	        }
	    });
	
	    return _react2.default.createElement('header', _extends({ className: classes }, otherProps), isRowOrTab ? children : _react2.default.createElement(_HeaderRow2.default, { title: title }, children));
	};
	Header.propTypes = {
	    className: _react.PropTypes.string,
	    scroll: _react.PropTypes.bool,
	    seamed: _react.PropTypes.bool,
	    title: _react.PropTypes.any,
	    transparent: _react.PropTypes.bool,
	    waterfall: _react.PropTypes.bool
	};
	
	exports.default = Header;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Spacer = __webpack_require__(95);
	
	var _Spacer2 = _interopRequireDefault(_Spacer);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var HeaderRow = function HeaderRow(props) {
	    var className = props.className;
	    var title = props.title;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'title', 'children']);
	
	    var classes = (0, _classnames2.default)('mdl-layout__header-row', className);
	
	    return _react2.default.createElement('div', _extends({ className: classes }, otherProps), title && _react2.default.createElement('span', { className: 'mdl-layout-title' }, title), _react2.default.createElement(_Spacer2.default, null), children);
	};
	HeaderRow.propTypes = {
	    className: _react.PropTypes.string,
	    title: _react.PropTypes.any
	};
	
	exports.default = HeaderRow;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _basicClassCreator = __webpack_require__(74);
	
	var _basicClassCreator2 = _interopRequireDefault(_basicClassCreator);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = (0, _basicClassCreator2.default)('Spacer', 'mdl-layout-spacer');

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Tab = __webpack_require__(97);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _TabBar = __webpack_require__(98);
	
	var _TabBar2 = _interopRequireDefault(_TabBar);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var HeaderTabs = function HeaderTabs(props) {
	    var className = props.className;
	    var ripple = props.ripple;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'ripple', 'children']);
	
	    var classes = (0, _classnames2.default)({
	        'mdl-js-ripple-effect': ripple
	    }, className);
	
	    return _react2.default.createElement(_TabBar2.default, _extends({ cssPrefix: 'mdl-layout', className: classes }, otherProps), children);
	};
	HeaderTabs.propTypes = {
	    activeTab: _react.PropTypes.number,
	    children: _react.PropTypes.arrayOf(function (props, propName, componentName) {
	        var prop = props[propName];
	        if (prop.type !== _Tab2.default) {
	            return new Error('`' + componentName + '` only accepts `Tab` as children.');
	        }
	    }),
	    className: _react.PropTypes.string,
	    onChange: _react.PropTypes.func,
	    ripple: _react.PropTypes.bool
	};
	
	exports.default = HeaderTabs;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Tab = (function (_React$Component) {
	    _inherits(Tab, _React$Component);
	
	    function Tab(props) {
	        _classCallCheck(this, Tab);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this, props));
	
	        _this._handleClick = _this._handleClick.bind(_this);
	        return _this;
	    }
	
	    _createClass(Tab, [{
	        key: '_handleClick',
	        value: function _handleClick() {
	            this.props.onTabClick(this.props.tabId);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _classNames;
	
	            var _props = this.props;
	            var active = _props.active;
	            var className = _props.className;
	            var cssPrefix = _props.cssPrefix;
	            var tabId = _props.tabId;
	            var onTabClick = _props.onTabClick;
	            var style = _props.style;
	
	            var otherProps = _objectWithoutProperties(_props, ['active', 'className', 'cssPrefix', 'tabId', 'onTabClick', 'style']);
	
	            var classes = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, cssPrefix + '__tab', true), _defineProperty(_classNames, 'is-active', active), _classNames), className);
	
	            style.cursor = 'pointer';
	
	            return _react2.default.createElement('a', _extends({ className: classes, onClick: this._handleClick, style: style }, otherProps), this.props.children);
	        }
	    }]);
	
	    return Tab;
	})(_react2.default.Component);
	
	Tab.propTypes = {
	    active: _react.PropTypes.bool,
	    className: _react.PropTypes.string,
	    cssPrefix: _react.PropTypes.string,
	    onTabClick: _react.PropTypes.func,
	    style: _react.PropTypes.object,
	    tabId: _react.PropTypes.number
	};
	Tab.defaultProps = {
	    style: {}
	};
	exports.default = Tab;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var TabBar = (function (_React$Component) {
	    _inherits(TabBar, _React$Component);
	
	    function TabBar(props) {
	        _classCallCheck(this, TabBar);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TabBar).call(this, props));
	
	        _this._handleClickTab = _this._handleClickTab.bind(_this);
	        return _this;
	    }
	
	    _createClass(TabBar, [{
	        key: '_handleClickTab',
	        value: function _handleClickTab(tabId) {
	            if (this.props.onChange) {
	                this.props.onChange(tabId);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var activeTab = _props.activeTab;
	            var className = _props.className;
	            var cssPrefix = _props.cssPrefix;
	            var children = _props.children;
	
	            var otherProps = _objectWithoutProperties(_props, ['activeTab', 'className', 'cssPrefix', 'children']);
	
	            var classes = (0, _classnames2.default)(_defineProperty({}, cssPrefix + '__tab-bar', true), className);
	
	            return _react2.default.createElement('div', _extends({ className: classes }, otherProps), _react2.default.Children.map(this.props.children, function (child, tabId) {
	                return _react2.default.cloneElement(child, {
	                    cssPrefix: cssPrefix,
	                    tabId: tabId,
	                    active: tabId === activeTab,
	                    onTabClick: _this2._handleClickTab
	                });
	            }));
	        }
	    }]);
	
	    return TabBar;
	})(_react2.default.Component);
	
	TabBar.propTypes = {
	    activeTab: _react.PropTypes.number,
	    className: _react.PropTypes.string,
	    cssPrefix: _react.PropTypes.string.isRequired,
	    onChange: _react.PropTypes.func
	};
	TabBar.defaultProps = {
	    activeTab: 0
	};
	exports.default = TabBar;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _cloneChildren = __webpack_require__(82);
	
	var _cloneChildren2 = _interopRequireDefault(_cloneChildren);
	
	var _Spacer = __webpack_require__(95);
	
	var _Spacer2 = _interopRequireDefault(_Spacer);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var Navigation = function Navigation(props) {
	    var className = props.className;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'children']);
	
	    var classes = (0, _classnames2.default)('mdl-navigation', className);
	
	    return _react2.default.createElement('nav', _extends({ className: classes }, otherProps), (0, _cloneChildren2.default)(children, function (child) {
	        return {
	            className: (0, _classnames2.default)({ 'mdl-navigation__link': child.type !== _Spacer2.default }, child.props.className)
	        };
	    }));
	};
	Navigation.propTypes = {
	    className: _react.PropTypes.string
	};
	
	exports.default = Navigation;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MenuItem = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(89);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	var _basicClassCreator = __webpack_require__(74);
	
	var _basicClassCreator2 = _interopRequireDefault(_basicClassCreator);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Menu = (function (_React$Component) {
	    _inherits(Menu, _React$Component);
	
	    function Menu() {
	        _classCallCheck(this, Menu);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).apply(this, arguments));
	    }
	
	    _createClass(Menu, [{
	        key: 'render',
	        value: function render() {
	            var _classNames;
	
	            var _props = this.props;
	            var align = _props.align;
	            var children = _props.children;
	            var className = _props.className;
	            var ripple = _props.ripple;
	            var target = _props.target;
	            var valign = _props.valign;
	
	            var otherProps = _objectWithoutProperties(_props, ['align', 'children', 'className', 'ripple', 'target', 'valign']);
	
	            var classes = (0, _classnames2.default)('mdl-menu mdl-js-menu', (_classNames = {}, _defineProperty(_classNames, 'mdl-menu--' + valign + '-' + align, true), _defineProperty(_classNames, 'mdl-js-ripple-effect', ripple), _classNames), className);
	
	            return _react2.default.createElement('ul', _extends({ className: classes, htmlFor: target }, otherProps), children);
	        }
	    }]);
	
	    return Menu;
	})(_react2.default.Component);
	
	Menu.propTypes = {
	    align: _react.PropTypes.oneOf(['left', 'right']),
	    className: _react.PropTypes.string,
	    ripple: _react.PropTypes.bool,
	    target: _react.PropTypes.string.isRequired,
	    valign: _react.PropTypes.oneOf(['bottom', 'top'])
	};
	Menu.defaultProps = {
	    align: 'left',
	    valign: 'bottom'
	};
	exports.default = (0, _mdlUpgrade2.default)(Menu);
	var MenuItem = exports.MenuItem = (0, _basicClassCreator2.default)('MenuItem', 'mdl-menu__item', 'li');

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tab = exports.TabBar = exports.Tabs = undefined;
	
	var _Tabs2 = __webpack_require__(102);
	
	var _Tabs3 = _interopRequireDefault(_Tabs2);
	
	var _TabBar2 = __webpack_require__(98);
	
	var _TabBar3 = _interopRequireDefault(_TabBar2);
	
	var _Tab2 = __webpack_require__(97);
	
	var _Tab3 = _interopRequireDefault(_Tab2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.Tabs = _Tabs3.default;
	exports.TabBar = _TabBar3.default;
	exports.Tab = _Tab3.default;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Tab = __webpack_require__(97);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _TabBar = __webpack_require__(98);
	
	var _TabBar2 = _interopRequireDefault(_TabBar);
	
	var _mdlUpgrade = __webpack_require__(89);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Tabs = (function (_React$Component) {
	    _inherits(Tabs, _React$Component);
	
	    function Tabs() {
	        _classCallCheck(this, Tabs);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).apply(this, arguments));
	    }
	
	    _createClass(Tabs, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var activeTab = _props.activeTab;
	            var className = _props.className;
	            var onChange = _props.onChange;
	            var ripple = _props.ripple;
	            var children = _props.children;
	
	            var otherProps = _objectWithoutProperties(_props, ['activeTab', 'className', 'onChange', 'ripple', 'children']);
	
	            var classes = (0, _classnames2.default)('mdl-tabs mdl-js-tabs', {
	                'mdl-js-ripple-effect': ripple
	            }, className);
	
	            return _react2.default.createElement('div', _extends({ className: classes }, otherProps), _react2.default.createElement(_TabBar2.default, { cssPrefix: 'mdl-tabs', activeTab: activeTab, onChange: onChange }, children), _react2.default.createElement('div', { className: 'react-mdl-hack', id: 'undefined' }));
	        }
	    }]);
	
	    return Tabs;
	})(_react2.default.Component);
	
	Tabs.propTypes = {
	    activeTab: _react.PropTypes.number,
	    children: _react.PropTypes.arrayOf(function (props, propName, componentName) {
	        var prop = props[propName];
	        if (prop.type !== _Tab2.default) {
	            return new Error('`' + componentName + '` only accepts `Tab` as children.');
	        }
	    }),
	    className: _react.PropTypes.string,
	    onChange: _react.PropTypes.func,
	    ripple: _react.PropTypes.bool
	};
	exports.default = (0, _mdlUpgrade2.default)(Tabs);

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Badge = (function (_React$Component) {
	    _inherits(Badge, _React$Component);
	
	    function Badge() {
	        _classCallCheck(this, Badge);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Badge).apply(this, arguments));
	    }
	
	    _createClass(Badge, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var children = _props.children;
	            var text = _props.text;
	
	            // No badge if no children
	
	            if (!_react2.default.Children.count(children)) return null;
	
	            var element = typeof children === 'string' ? _react2.default.createElement('span', null, children) : _react2.default.Children.only(children);
	
	            // No text -> No need of badge
	            if (text === null || typeof text === 'undefined') return element;
	
	            return _react2.default.cloneElement(element, {
	                className: 'mdl-badge',
	                'data-badge': text
	            });
	        }
	    }]);
	
	    return Badge;
	})(_react2.default.Component);
	
	Badge.propTypes = {
	    children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
	    text: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
	};
	exports.default = Badge;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(89);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Button = (function (_React$Component) {
	    _inherits(Button, _React$Component);
	
	    function Button() {
	        _classCallCheck(this, Button);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
	    }
	
	    _createClass(Button, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var accent = _props.accent;
	            var className = _props.className;
	            var colored = _props.colored;
	            var primary = _props.primary;
	            var raised = _props.raised;
	            var ripple = _props.ripple;
	            var component = _props.component;
	            var href = _props.href;
	            var children = _props.children;
	
	            var otherProps = _objectWithoutProperties(_props, ['accent', 'className', 'colored', 'primary', 'raised', 'ripple', 'component', 'href', 'children']);
	
	            var buttonClasses = (0, _classnames2.default)('mdl-button mdl-js-button', {
	                'mdl-js-ripple-effect': ripple,
	                'mdl-button--raised': raised,
	                'mdl-button--colored': colored,
	                'mdl-button--primary': primary,
	                'mdl-button--accent': accent
	            }, className);
	
	            return _react2.default.createElement(component || (href ? 'a' : 'button'), _extends({
	                className: buttonClasses,
	                href: href
	            }, otherProps), children);
	        }
	    }]);
	
	    return Button;
	})(_react2.default.Component);
	
	Button.propTypes = {
	    accent: _react.PropTypes.bool,
	    className: _react.PropTypes.string,
	    colored: _react.PropTypes.bool,
	    component: _react.PropTypes.any,
	    href: _react.PropTypes.string,
	    primary: _react.PropTypes.bool,
	    raised: _react.PropTypes.bool,
	    ripple: _react.PropTypes.bool
	};
	exports.default = (0, _mdlUpgrade2.default)(Button);

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(89);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Checkbox = (function (_React$Component) {
	    _inherits(Checkbox, _React$Component);
	
	    function Checkbox() {
	        _classCallCheck(this, Checkbox);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).apply(this, arguments));
	    }
	
	    _createClass(Checkbox, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var label = _props.label;
	            var ripple = _props.ripple;
	
	            var inputProps = _objectWithoutProperties(_props, ['label', 'ripple']);
	
	            var classes = (0, _classnames2.default)('mdl-checkbox mdl-js-checkbox', {
	                'mdl-js-ripple-effect': ripple
	            });
	
	            return _react2.default.createElement('label', { className: classes }, _react2.default.createElement('input', _extends({
	                type: 'checkbox',
	                className: 'mdl-checkbox__input'
	            }, inputProps)), label && _react2.default.createElement('span', { className: 'mdl-checkbox__label' }, label));
	        }
	    }]);
	
	    return Checkbox;
	})(_react2.default.Component);
	
	Checkbox.propTypes = {
	    checked: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    label: _react.PropTypes.string,
	    onChange: _react.PropTypes.func,
	    ripple: _react.PropTypes.bool
	};
	exports.default = (0, _mdlUpgrade2.default)(Checkbox);

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(89);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var DataTable = (function (_React$Component) {
	    _inherits(DataTable, _React$Component);
	
	    function DataTable() {
	        _classCallCheck(this, DataTable);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(DataTable).apply(this, arguments));
	    }
	
	    _createClass(DataTable, [{
	        key: '_getCellClass',
	        value: function _getCellClass(column) {
	            return !column.numeric ? 'mdl-data-table__cell--non-numeric' : '';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var className = _props.className;
	            var columns = _props.columns;
	            var data = _props.data;
	            var selectable = _props.selectable;
	
	            var otherProps = _objectWithoutProperties(_props, ['className', 'columns', 'data', 'selectable']);
	
	            var classes = (0, _classnames2.default)('mdl-data-table mdl-js-data-table', {
	                'mdl-data-table--selectable': selectable
	            }, className);
	
	            return _react2.default.createElement('table', _extends({ className: classes }, otherProps), _react2.default.createElement('thead', null, _react2.default.createElement('tr', null, columns.map(function (column) {
	                return _react2.default.createElement('th', { key: column.name, className: _this2._getCellClass(column) }, column.label);
	            }))), _react2.default.createElement('tbody', null, data.map(function (elt, idx) {
	                return _react2.default.createElement('tr', { key: elt.key ? elt.key : idx }, columns.map(function (column) {
	                    return _react2.default.createElement('td', { key: column.name, className: _this2._getCellClass(column) }, elt[column.name]);
	                }));
	            })));
	        }
	    }]);
	
	    return DataTable;
	})(_react2.default.Component);
	
	DataTable.propTypes = {
	    className: _react.PropTypes.string,
	    columns: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	        label: _react.PropTypes.string,
	        name: _react.PropTypes.string,
	        numeric: _react.PropTypes.bool
	    })).isRequired,
	    data: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
	    selectable: _react.PropTypes.bool
	};
	exports.default = (0, _mdlUpgrade2.default)(DataTable);

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Button = __webpack_require__(104);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var FABButton = function FABButton(props) {
	    var mini = props.mini;
	    var className = props.className;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['mini', 'className', 'children']);
	
	    var classes = (0, _classnames2.default)('mdl-button--fab', {
	        'mdl-button--mini-fab': mini
	    }, className);
	
	    return _react2.default.createElement(_Button2.default, _extends({ className: classes }, otherProps), children);
	};
	
	FABButton.propTypes = {
	    className: _react.PropTypes.string,
	    mini: _react.PropTypes.bool
	};
	
	exports.default = FABButton;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var Icon = function Icon(props) {
	    var className = props.className;
	    var name = props.name;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'name']);
	
	    var classes = (0, _classnames2.default)('material-icons', className);
	
	    return _react2.default.createElement('i', _extends({ className: classes }, otherProps), name);
	};
	
	Icon.propTypes = {
	    className: _react.PropTypes.string,
	    name: _react.PropTypes.string.isRequired
	};
	
	exports.default = Icon;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Button = __webpack_require__(104);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Icon = __webpack_require__(108);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var IconButton = function IconButton(props) {
	    var className = props.className;
	    var name = props.name;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'name']);
	
	    var classes = (0, _classnames2.default)('mdl-button--icon', className);
	
	    return _react2.default.createElement(_Button2.default, _extends({ className: classes }, otherProps), _react2.default.createElement(_Icon2.default, { name: name }));
	};
	
	IconButton.propTypes = {
	    className: _react.PropTypes.string,
	    name: _react.PropTypes.string.isRequired
	};
	
	exports.default = IconButton;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(108);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _mdlUpgrade = __webpack_require__(89);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var IconToggle = (function (_React$Component) {
	    _inherits(IconToggle, _React$Component);
	
	    function IconToggle() {
	        _classCallCheck(this, IconToggle);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(IconToggle).apply(this, arguments));
	    }
	
	    _createClass(IconToggle, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var name = _props.name;
	            var ripple = _props.ripple;
	
	            var inputProps = _objectWithoutProperties(_props, ['className', 'name', 'ripple']);
	
	            var classes = (0, _classnames2.default)('mdl-icon-toggle mdl-js-icon-toggle', {
	                'mdl-js-ripple-effect': ripple
	            }, className);
	
	            return _react2.default.createElement('label', { className: classes }, _react2.default.createElement('input', _extends({
	                type: 'checkbox',
	                className: 'mdl-icon-toggle__input'
	            }, inputProps)), _react2.default.createElement(_Icon2.default, { className: 'mdl-icon-toggle__label', name: name }));
	        }
	    }]);
	
	    return IconToggle;
	})(_react2.default.Component);
	
	IconToggle.propTypes = {
	    checked: _react.PropTypes.bool,
	    className: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    name: _react.PropTypes.string.isRequired,
	    onChange: _react.PropTypes.func,
	    ripple: _react.PropTypes.bool
	};
	exports.default = (0, _mdlUpgrade2.default)(IconToggle);

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(89);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ProgressBar = (function (_React$Component) {
	    _inherits(ProgressBar, _React$Component);
	
	    function ProgressBar() {
	        _classCallCheck(this, ProgressBar);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ProgressBar).apply(this, arguments));
	    }
	
	    _createClass(ProgressBar, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._setProgress(this.props.progress);
	            this._setBuffer(this.props.buffer);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this._setProgress(this.props.progress);
	            this._setBuffer(this.props.buffer);
	        }
	    }, {
	        key: '_setProgress',
	        value: function _setProgress(progress) {
	            if (!this.props.indeterminate && progress !== undefined) {
	                (0, _reactDom.findDOMNode)(this).MaterialProgress.setProgress(progress);
	            }
	        }
	    }, {
	        key: '_setBuffer',
	        value: function _setBuffer(buffer) {
	            if (buffer !== undefined) {
	                (0, _reactDom.findDOMNode)(this).MaterialProgress.setBuffer(buffer);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var buffer = _props.buffer;
	            var className = _props.className;
	            var indeterminate = _props.indeterminate;
	            var progress = _props.progress;
	
	            var otherProps = _objectWithoutProperties(_props, ['buffer', 'className', 'indeterminate', 'progress']);
	
	            var classes = (0, _classnames2.default)('mdl-progress mdl-js-progress', {
	                'mdl-progress__indeterminate': indeterminate
	            }, className);
	
	            return _react2.default.createElement('div', _extends({ className: classes }, otherProps));
	        }
	    }]);
	
	    return ProgressBar;
	})(_react2.default.Component);
	
	ProgressBar.propTypes = {
	    buffer: _react.PropTypes.number,
	    className: _react.PropTypes.string,
	    indeterminate: _react.PropTypes.bool,
	    progress: _react.PropTypes.number
	};
	exports.default = (0, _mdlUpgrade2.default)(ProgressBar);

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(89);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Radio = (function (_React$Component) {
	    _inherits(Radio, _React$Component);
	
	    function Radio() {
	        _classCallCheck(this, Radio);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Radio).apply(this, arguments));
	    }
	
	    _createClass(Radio, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var name = _props.name;
	            var ripple = _props.ripple;
	            var value = _props.value;
	
	            var inputProps = _objectWithoutProperties(_props, ['children', 'className', 'name', 'ripple', 'value']);
	
	            var classes = (0, _classnames2.default)('mdl-radio mdl-js-radio', {
	                'mdl-js-ripple-effect': ripple
	            }, className);
	
	            return _react2.default.createElement('label', { className: classes }, _react2.default.createElement('input', _extends({
	                type: 'radio',
	                className: 'mdl-radio__button',
	                value: value,
	                name: name
	            }, inputProps)), _react2.default.createElement('span', { className: 'mdl-radio__label' }, children));
	        }
	    }]);
	
	    return Radio;
	})(_react2.default.Component);
	
	Radio.propTypes = {
	    checked: _react.PropTypes.bool,
	    className: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    name: _react.PropTypes.string,
	    onChange: _react.PropTypes.func,
	    ripple: _react.PropTypes.bool,
	    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired
	};
	exports.default = (0, _mdlUpgrade2.default)(Radio);

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Radio = __webpack_require__(112);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var RadioGroup = function RadioGroup(props) {
	    var name = props.name;
	    var value = props.value;
	    var children = props.children;
	    var container = props.container;
	    var childContainer = props.childContainer;
	
	    var otherProps = _objectWithoutProperties(props, ['name', 'value', 'children', 'container', 'childContainer']);
	
	    return _react2.default.createElement(container, otherProps, _react2.default.Children.map(children, function (child) {
	        var clonedChild = _react2.default.cloneElement(child, _extends({
	            checked: child.props.value === value,
	            name: name
	        }, otherProps));
	
	        return childContainer ? _react2.default.createElement(childContainer, {}, clonedChild) : clonedChild;
	    }));
	};
	
	RadioGroup.propTypes = {
	    childContainer: _react.PropTypes.string,
	    children: _react.PropTypes.arrayOf(function (props, propName, componentName) {
	        var prop = props[propName];
	        if (prop.type !== _Radio2.default) {
	            return new Error('`' + componentName + '` only accepts `Radio` as children.');
	        }
	    }),
	    container: _react.PropTypes.string,
	    name: _react.PropTypes.string.isRequired,
	    onChange: _react.PropTypes.func,
	    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired
	};
	
	RadioGroup.defaultProps = {
	    container: 'div'
	};
	
	exports.default = RadioGroup;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(89);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Slider = (function (_React$Component) {
	    _inherits(Slider, _React$Component);
	
	    function Slider() {
	        _classCallCheck(this, Slider);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Slider).apply(this, arguments));
	    }
	
	    _createClass(Slider, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	
	            var otherProps = _objectWithoutProperties(_props, ['className']);
	
	            var classes = (0, _classnames2.default)('mdl-slider mdl-js-slider', className);
	
	            return _react2.default.createElement('input', _extends({
	                className: classes,
	                type: 'range'
	            }, otherProps));
	        }
	    }]);
	
	    return Slider;
	})(_react2.default.Component);
	
	Slider.propTypes = {
	    className: _react.PropTypes.string,
	    max: _react.PropTypes.number,
	    min: _react.PropTypes.number,
	    onChange: _react.PropTypes.func,
	    value: _react.PropTypes.number
	};
	exports.default = (0, _mdlUpgrade2.default)(Slider);

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(89);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Spinner = (function (_React$Component) {
	    _inherits(Spinner, _React$Component);
	
	    function Spinner() {
	        _classCallCheck(this, Spinner);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Spinner).apply(this, arguments));
	    }
	
	    _createClass(Spinner, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var singleColor = _props.singleColor;
	
	            var otherProps = _objectWithoutProperties(_props, ['className', 'singleColor']);
	
	            var classes = (0, _classnames2.default)('mdl-spinner mdl-js-spinner is-active', {
	                'mdl-spinner--single-color': singleColor
	            }, className);
	
	            return _react2.default.createElement('div', _extends({ className: classes }, otherProps));
	        }
	    }]);
	
	    return Spinner;
	})(_react2.default.Component);
	
	Spinner.propTypes = {
	    className: _react.PropTypes.string,
	    singleColor: _react.PropTypes.bool
	};
	exports.default = (0, _mdlUpgrade2.default)(Spinner);

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(89);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Switch = (function (_React$Component) {
	    _inherits(Switch, _React$Component);
	
	    function Switch() {
	        _classCallCheck(this, Switch);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Switch).apply(this, arguments));
	    }
	
	    _createClass(Switch, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (this.props.disabled !== prevProps.disabled) {
	                var fnName = this.props.disabled ? 'disable' : 'enable';
	                (0, _reactDom.findDOMNode)(this).MaterialSwitch[fnName]();
	            }
	            if (this.props.checked !== prevProps.checked) {
	                var fnName = this.props.checked ? 'on' : 'off';
	                (0, _reactDom.findDOMNode)(this).MaterialSwitch[fnName]();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var ripple = _props.ripple;
	            var children = _props.children;
	
	            var inputProps = _objectWithoutProperties(_props, ['className', 'ripple', 'children']);
	
	            var classes = (0, _classnames2.default)('mdl-switch mdl-js-switch', {
	                'mdl-js-ripple-effect': ripple
	            }, className);
	
	            return _react2.default.createElement('label', { className: classes }, _react2.default.createElement('input', _extends({
	                type: 'checkbox',
	                className: 'mdl-switch__input'
	            }, inputProps)), _react2.default.createElement('span', { className: 'mdl-switch__label' }, children));
	        }
	    }]);
	
	    return Switch;
	})(_react2.default.Component);
	
	Switch.propTypes = {
	    checked: _react.PropTypes.bool,
	    className: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    onChange: _react.PropTypes.func,
	    ripple: _react.PropTypes.bool
	};
	exports.default = (0, _mdlUpgrade2.default)(Switch);

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(89);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Textfield = (function (_React$Component) {
	    _inherits(Textfield, _React$Component);
	
	    function Textfield() {
	        _classCallCheck(this, Textfield);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Textfield).apply(this, arguments));
	    }
	
	    _createClass(Textfield, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (this.props.required !== prevProps.required || this.props.pattern !== prevProps.pattern) {
	                (0, _reactDom.findDOMNode)(this).MaterialTextfield.checkValidity();
	            }
	            if (this.props.disabled !== prevProps.disabled) {
	                (0, _reactDom.findDOMNode)(this).MaterialTextfield.checkDisabled();
	            }
	            if (this.props.value !== prevProps.value && this.refs.input !== document.activeElement) {
	                (0, _reactDom.findDOMNode)(this).MaterialTextfield.change(this.props.value);
	            }
	            if (this.props.error && !this.props.pattern) {
	                // At every re-render, mdl will set 'is-invalid' class according to the 'pattern' props validity
	                // If we want to force the error display, we have to override mdl 'is-invalid' value.
	                var elt = (0, _reactDom.findDOMNode)(this);
	                elt.className = (0, _classnames2.default)(elt.className, 'is-invalid');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var inputClassName = _props.inputClassName;
	            var error = _props.error;
	            var expandable = _props.expandable;
	            var expandableIcon = _props.expandableIcon;
	            var floatingLabel = _props.floatingLabel;
	            var label = _props.label;
	            var maxRows = _props.maxRows;
	            var rows = _props.rows;
	            var style = _props.style;
	
	            var otherProps = _objectWithoutProperties(_props, ['className', 'inputClassName', 'error', 'expandable', 'expandableIcon', 'floatingLabel', 'label', 'maxRows', 'rows', 'style']);
	
	            var hasRows = !!rows;
	            var inputId = 'textfield-' + label.replace(/[^a-z0-9]/gi, '');
	            var inputTag = hasRows || maxRows > 1 ? 'textarea' : 'input';
	
	            var inputProps = _extends({
	                className: (0, _classnames2.default)('mdl-textfield__input', inputClassName),
	                id: inputId,
	                key: inputId,
	                rows: rows,
	                ref: 'input'
	            }, otherProps);
	
	            var input = _react2.default.createElement(inputTag, inputProps);
	
	            var inputAndLabelError = [input, _react2.default.createElement('label', { key: 'label', className: 'mdl-textfield__label', htmlFor: inputId }, label), error ? _react2.default.createElement('span', { key: 'error', className: 'mdl-textfield__error' }, error) : null];
	
	            var containerClasses = (0, _classnames2.default)('mdl-textfield mdl-js-textfield', {
	                'mdl-textfield--floating-label': floatingLabel,
	                'mdl-textfield--expandable': expandable
	            }, className);
	
	            var field = expandable ? _react2.default.createElement('div', { className: 'mdl-textfield__expandable-holder' }, inputAndLabelError) : inputAndLabelError;
	
	            return _react2.default.createElement('div', { className: containerClasses, style: style }, expandable ? _react2.default.createElement('label', { className: 'mdl-button mdl-js-button mdl-button--icon', htmlFor: inputId }, _react2.default.createElement('i', { className: 'material-icons' }, expandableIcon)) : null, field);
	        }
	    }]);
	
	    return Textfield;
	})(_react2.default.Component);
	
	Textfield.propTypes = {
	    className: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    error: _react.PropTypes.string,
	    expandable: _react.PropTypes.bool,
	    expandableIcon: _react.PropTypes.string,
	    floatingLabel: _react.PropTypes.bool,
	    inputClassName: _react.PropTypes.string,
	    label: _react.PropTypes.string.isRequired,
	    maxRows: _react.PropTypes.number,
	    onChange: _react.PropTypes.func,
	    pattern: _react.PropTypes.string,
	    required: _react.PropTypes.bool,
	    rows: _react.PropTypes.number,
	    style: _react.PropTypes.object,
	    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
	};
	exports.default = (0, _mdlUpgrade2.default)(Textfield);

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(75);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _MDLComponent = __webpack_require__(90);
	
	var _MDLComponent2 = _interopRequireDefault(_MDLComponent);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}
	
	var Tooltip = function Tooltip(props) {
	    var label = props.label;
	    var large = props.large;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['label', 'large', 'children']);
	
	    var id = Math.random().toString(36).substr(2);
	
	    var newLabel = typeof label === 'string' ? _react2.default.createElement('span', null, label) : label;
	
	    var element = undefined;
	    if (typeof children === 'string') {
	        element = _react2.default.createElement('span', null, children);
	    } else {
	        element = _react2.default.Children.only(children);
	    }
	
	    return _react2.default.createElement('div', _extends({ style: { display: 'inline-block' } }, otherProps), _react2.default.cloneElement(element, { id: id }), _react2.default.createElement(_MDLComponent2.default, null, _react2.default.cloneElement(newLabel, {
	        htmlFor: id,
	        className: (0, _classnames2.default)('mdl-tooltip', {
	            'mdl-tooltip--large': large
	        })
	    })));
	};
	
	Tooltip.propTypes = {
	    children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]).isRequired,
	    label: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]).isRequired,
	    large: _react.PropTypes.bool
	};
	
	exports.default = Tooltip;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map