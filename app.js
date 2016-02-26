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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _history = __webpack_require__(61);
	
	var _DocApp = __webpack_require__(65);
	
	var _DocApp2 = _interopRequireDefault(_DocApp);
	
	var _html = __webpack_require__(66);
	
	var Pages = _interopRequireWildcard(_html);
	
	var _PageComponentHelper = __webpack_require__(144);
	
	var _PageComponentHelper2 = _interopRequireDefault(_PageComponentHelper);
	
	var _templates = __webpack_require__(82);
	
	var Templates = _interopRequireWildcard(_templates);
	
	var _src = __webpack_require__(86);
	
	var ReactMDL = _interopRequireWildcard(_src);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	for (var component in ReactMDL) {
	    if (ReactMDL.hasOwnProperty(component)) {
	        global[component] = ReactMDL[component];
	    }
	}
	
	// export all ReactMDL into global so we can generate demos
	
	
	var appHistory = (0, _reactRouter.useRouterHistory)(_history.createHashHistory)({ queryKey: false });
	
	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: appHistory },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: _DocApp2.default },
	        Pages.home && _react2.default.createElement(_reactRouter.IndexRoute, { component: (0, _PageComponentHelper2.default)(Pages.home) }),
	        Object.keys(Pages).filter(function (e) {
	            return e !== 'home';
	        }).map(function (page) {
	            return _react2.default.createElement(_reactRouter.Route, { key: page, path: page, component: (0, _PageComponentHelper2.default)(Pages[page]) });
	        })
	    ),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'templates' },
	        Object.keys(Templates).map(function (template) {
	            return _react2.default.createElement(_reactRouter.Route, { key: template, path: template.toLowerCase(), component: Templates[template] });
	        })
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
	
	var _useRoutes2 = __webpack_require__(50);
	
	var _useRoutes3 = _interopRequireDefault(_useRoutes2);
	
	exports.useRoutes = _useRoutes3['default'];
	
	var _RouteUtils = __webpack_require__(35);
	
	exports.createRoutes = _RouteUtils.createRoutes;
	
	var _RouterContext2 = __webpack_require__(37);
	
	var _RouterContext3 = _interopRequireDefault(_RouterContext2);
	
	exports.RouterContext = _RouterContext3['default'];
	
	var _RoutingContext2 = __webpack_require__(51);
	
	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);
	
	exports.RoutingContext = _RoutingContext3['default'];
	
	var _PropTypes2 = __webpack_require__(36);
	
	var _PropTypes3 = _interopRequireDefault(_PropTypes2);
	
	exports.PropTypes = _PropTypes3['default'];
	
	var _match2 = __webpack_require__(52);
	
	var _match3 = _interopRequireDefault(_match2);
	
	exports.match = _match3['default'];
	
	var _useRouterHistory2 = __webpack_require__(56);
	
	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);
	
	exports.useRouterHistory = _useRouterHistory3['default'];
	
	var _PatternUtils = __webpack_require__(29);
	
	exports.formatPattern = _PatternUtils.formatPattern;
	
	/* histories */
	
	var _browserHistory2 = __webpack_require__(57);
	
	var _browserHistory3 = _interopRequireDefault(_browserHistory2);
	
	exports.browserHistory = _browserHistory3['default'];
	
	var _hashHistory2 = __webpack_require__(60);
	
	var _hashHistory3 = _interopRequireDefault(_hashHistory2);
	
	exports.hashHistory = _hashHistory3['default'];
	
	var _createMemoryHistory2 = __webpack_require__(53);
	
	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);
	
	exports.createMemoryHistory = _createMemoryHistory3['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _historyLibCreateHashHistory = __webpack_require__(6);
	
	var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);
	
	var _historyLibUseQueries = __webpack_require__(23);
	
	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createTransitionManager = __webpack_require__(26);
	
	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
	
	var _PropTypes = __webpack_require__(36);
	
	var _RouterContext = __webpack_require__(37);
	
	var _RouterContext2 = _interopRequireDefault(_RouterContext);
	
	var _RouteUtils = __webpack_require__(35);
	
	var _RouterUtils = __webpack_require__(40);
	
	var _routerWarning = __webpack_require__(27);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function isDeprecatedHistory(history) {
	  return !history || !history.__v2_compatible__;
	}
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;
	
	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */
	var Router = _react2['default'].createClass({
	  displayName: 'Router',
	
	  propTypes: {
	    history: object,
	    children: _PropTypes.routes,
	    routes: _PropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,
	
	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2['default'].createElement(_RouterContext2['default'], props);
	      }
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	
	  componentWillMount: function componentWillMount() {
	    var _this = this;
	
	    var _props = this.props;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;
	
	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : undefined;
	
	    var _createRouterObjects = this.createRouterObjects();
	
	    var history = _createRouterObjects.history;
	    var transitionManager = _createRouterObjects.transitionManager;
	    var router = _createRouterObjects.router;
	
	    this._unlisten = transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	
	    this.history = history;
	    this.router = router;
	  },
	
	  createRouterObjects: function createRouterObjects() {
	    var matchContext = this.props.matchContext;
	
	    if (matchContext) {
	      return matchContext;
	    }
	
	    var history = this.props.history;
	    var _props2 = this.props;
	    var routes = _props2.routes;
	    var children = _props2.children;
	
	    if (isDeprecatedHistory(history)) {
	      history = this.wrapDeprecatedHistory(history);
	    }
	
	    var transitionManager = _createTransitionManager2['default'](history, _RouteUtils.createRoutes(routes || children));
	    var router = _RouterUtils.createRouterObject(history, transitionManager);
	    var routingHistory = _RouterUtils.createRoutingHistory(history, transitionManager);
	
	    return { history: routingHistory, transitionManager: transitionManager, router: router };
	  },
	
	  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
	    var _props3 = this.props;
	    var parseQueryString = _props3.parseQueryString;
	    var stringifyQuery = _props3.stringifyQuery;
	
	    var createHistory = undefined;
	    if (history) {
	      process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : undefined;
	      createHistory = function () {
	        return history;
	      };
	    } else {
	      process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : undefined;
	      createHistory = _historyLibCreateHashHistory2['default'];
	    }
	
	    return _historyLibUseQueries2['default'](createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
	  },
	
	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : undefined;
	
	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default']((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : undefined;
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	
	  render: function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props4 = this.props;
	    var createElement = _props4.createElement;
	    var render = _props4.render;
	
	    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);
	
	    if (location == null) return null; // Async match
	
	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });
	
	    return render(_extends({}, props, {
	      history: this.history,
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	
	});
	
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

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(7);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Actions = __webpack_require__(9);
	
	var _PathUtils = __webpack_require__(10);
	
	var _ExecutionEnvironment = __webpack_require__(11);
	
	var _DOMUtils = __webpack_require__(12);
	
	var _DOMStateStorage = __webpack_require__(13);
	
	var _createDOMHistory = __webpack_require__(14);
	
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
	
	    var location = _PathUtils.parsePath(path);
	
	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
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
	
	  function push(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
	
	    history.push(location);
	  }
	
	  function replace(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
	
	    history.replace(location);
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
	
	  // deprecated
	  function pushState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
	
	    history.pushState(state, path);
	  }
	
	  // deprecated
	  function replaceState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
	
	    history.replaceState(state, path);
	  }
	
	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    push: push,
	    replace: replace,
	    go: go,
	    createHref: createHref,
	
	    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
	    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
	    pushState: pushState, // deprecated - warning is in createHistory
	    replaceState: replaceState // deprecated - warning is in createHistory
	  });
	}
	
	exports['default'] = createHashHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 7 */
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
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.extractPath = extractPath;
	exports.parsePath = parsePath;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(7);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);
	
	  if (match == null) return string;
	
	  return string.substring(match[0].length);
	}
	
	function parsePath(path) {
	  var pathname = extractPath(path);
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 12 */
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
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*eslint-disable no-empty */
	'use strict';
	
	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(7);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var KeyPrefix = '@@History/';
	var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];
	
	var SecurityError = 'SecurityError';
	
	function createKey(key) {
	  return KeyPrefix + key;
	}
	
	function saveState(key, state) {
	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;
	
	      return;
	    }
	
	    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ExecutionEnvironment = __webpack_require__(11);
	
	var _DOMUtils = __webpack_require__(12);
	
	var _createHistory = __webpack_require__(15);
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(7);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _deepEqual = __webpack_require__(16);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _PathUtils = __webpack_require__(10);
	
	var _AsyncUtils = __webpack_require__(19);
	
	var _Actions = __webpack_require__(9);
	
	var _createLocation2 = __webpack_require__(20);
	
	var _createLocation3 = _interopRequireDefault(_createLocation2);
	
	var _runTransitionHook = __webpack_require__(21);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _deprecate = __webpack_require__(22);
	
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
	          var prevPath = createPath(location);
	          var nextPath = createPath(nextLocation);
	
	          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }
	
	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);
	
	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }
	
	  function push(location) {
	    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
	  }
	
	  function replace(location) {
	    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
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
	
	  function createPath(location) {
	    if (location == null || typeof location === 'string') return location;
	
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	
	    var result = pathname;
	
	    if (search) result += search;
	
	    if (hash) result += hash;
	
	    return result;
	  }
	
	  function createHref(location) {
	    return createPath(location);
	  }
	
	  function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];
	
	    if (typeof action === 'object') {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;
	
	      if (typeof location === 'string') location = _PathUtils.parsePath(location);
	
	      location = _extends({}, location, { state: action });
	
	      action = key;
	      key = arguments[3] || createKey();
	    }
	
	    return _createLocation3['default'](location, action, key);
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
	
	  // deprecated
	  function pushState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	    push(_extends({ state: state }, path));
	  }
	
	  // deprecated
	  function replaceState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	    replace(_extends({ state: state }, path));
	  }
	
	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
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
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	  };
	}
	
	exports['default'] = createHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(17);
	var isArguments = __webpack_require__(18);
	
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(7);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _Actions = __webpack_require__(9);
	
	var _PathUtils = __webpack_require__(10);
	
	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	
	  if (typeof location === 'string') location = _PathUtils.parsePath(location);
	
	  if (typeof action === 'object') {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;
	
	    location = _extends({}, location, { state: action });
	
	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }
	
	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(7);
	
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(7);
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _warning = __webpack_require__(7);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _queryString = __webpack_require__(24);
	
	var _runTransitionHook = __webpack_require__(21);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _PathUtils = __webpack_require__(10);
	
	var _deprecate = __webpack_require__(22);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var SEARCH_BASE_KEY = '$searchBase';
	
	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}
	
	var defaultParseQueryString = _queryString.parse;
	
	function isNestedObject(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
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
	      if (location.query == null) {
	        var search = location.search;
	
	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }
	
	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.
	
	      return location;
	    }
	
	    function appendQuery(location, query) {
	      var _extends2;
	
	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var queryString = query ? stringifyQuery(query) : '';
	      if (!searchBaseSpec && !queryString) {
	        return location;
	      }
	
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;
	
	      if (typeof location === 'string') location = _PathUtils.parsePath(location);
	
	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }
	
	      var search = searchBase;
	      if (queryString) {
	        search += (search ? '&' : '?') + queryString;
	      }
	
	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
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
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }
	
	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }
	
	    function createPath(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;
	
	      return history.createPath(appendQuery(location, query || location.query));
	    }
	
	    function createHref(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;
	
	      return history.createHref(appendQuery(location, query || location.query));
	    }
	
	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
	      if (location.query) {
	        fullLocation.query = location.query;
	      }
	      return addQuery(fullLocation);
	    }
	
	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	      push(_extends({ state: state }, path, { query: query }));
	    }
	
	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	      replace(_extends({ state: state }, path, { query: query }));
	    }
	
	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,
	
	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}
	
	exports['default'] = useQueries;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(25);
	
	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};
	
	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}
	
		str = str.trim().replace(/^(\?|#|&)/, '');
	
		if (!str) {
			return {};
		}
	
		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;
	
			key = decodeURIComponent(key);
	
			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);
	
			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
	
			return ret;
		}, {});
	};
	
	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];
	
			if (val === undefined) {
				return '';
			}
	
			if (val === null) {
				return key;
			}
	
			if (Array.isArray(val)) {
				return val.sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}
	
			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = createTransitionManager;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _routerWarning = __webpack_require__(27);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _historyLibActions = __webpack_require__(9);
	
	var _computeChangedRoutes2 = __webpack_require__(28);
	
	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);
	
	var _TransitionUtils = __webpack_require__(30);
	
	var _isActive2 = __webpack_require__(32);
	
	var _isActive3 = _interopRequireDefault(_isActive2);
	
	var _getComponents = __webpack_require__(33);
	
	var _getComponents2 = _interopRequireDefault(_getComponents);
	
	var _matchRoutes = __webpack_require__(34);
	
	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);
	
	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p)) return true;
	  }return false;
	}
	
	function createTransitionManager(history, routes) {
	  var state = {};
	
	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location) {
	    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	    var indexOnly = undefined;
	    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
	      process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : undefined;
	      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
	      indexOnly = deprecatedIndexOnly || false;
	    } else {
	      location = history.createLocation(location);
	      indexOnly = indexOnlyOrDeprecatedQuery;
	    }
	
	    return _isActive3['default'](location, indexOnly, state.location, state.routes, state.params);
	  }
	
	  function createLocationFromRedirectInfo(location) {
	    return history.createLocation(location, _historyLibActions.REPLACE);
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
	
	    // Tear down confirmation hooks for left routes
	    leaveRoutes.forEach(removeListenBeforeHooksForRoute);
	
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
	    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	    return route.__id__ || create && (route.__id__ = RouteGuid++);
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
	
	  /* istanbul ignore next: untestable with Karma */
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
	
	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route, false);
	    if (!routeID) {
	      return;
	    }
	
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
	  }
	
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
	
	    if (!hooks) {
	      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
	
	      RouteHooks[routeID] = [hook];
	
	      if (thereWereNoRouteHooks) {
	        // setup transition & beforeunload hooks
	        unlistenBefore = history.listenBefore(transitionHook);
	
	        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	      }
	    } else {
	      if (hooks.indexOf(hook) === -1) {
	        process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : undefined;
	
	        hooks.push(hook);
	      }
	    }
	
	    return function () {
	      var hooks = RouteHooks[routeID];
	
	      if (hooks) {
	        var newHooks = hooks.filter(function (item) {
	          return item !== hook;
	        });
	
	        if (newHooks.length === 0) {
	          removeListenBeforeHooksForRoute(route);
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
	            process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : undefined;
	          }
	        });
	      }
	    });
	  }
	
	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}
	
	//export default useRoutes
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = routerWarning;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(7);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function routerWarning(falseToWarn, message) {
	  message = '[react-router] ' + message;
	
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  process.env.NODE_ENV !== 'production' ? _warning2['default'].apply(undefined, [falseToWarn, message].concat(args)) : undefined;
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(29);
	
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
/* 29 */
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runLeaveHooks = runLeaveHooks;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _AsyncUtils = __webpack_require__(31);
	
	var _routerWarning = __webpack_require__(27);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
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
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
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
	  function replace(location, deprecatedPathname, deprecatedQuery) {
	    if (deprecatedPathname) {
	      process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : undefined;
	      redirectInfo = {
	        pathname: deprecatedPathname,
	        query: deprecatedQuery,
	        state: location
	      };
	
	      return;
	    }
	
	    redirectInfo = location;
	  }
	
	  _AsyncUtils.loopAsync(hooks.length, function (index, next, done) {
	    hooks[index](nextState, replace, function (error) {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = undefined;
	
	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(_slice.call(arguments));
	      return;
	    }
	
	    callback.apply(this, arguments);
	  }
	
	  function next() {
	    if (isDone) {
	      return;
	    }
	
	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }
	
	    sync = true;
	
	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }
	
	    sync = false;
	
	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }
	
	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isActive;
	
	var _PatternUtils = __webpack_require__(29);
	
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
	
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname;
	  var query = _ref.query;
	
	  if (currentLocation == null) return false;
	
	  if (!routeIsActive(pathname, routes, params, indexOnly)) return false;
	
	  return queryIsActive(query, currentLocation.query);
	}
	
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _AsyncUtils = __webpack_require__(31);
	
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _routerWarning = __webpack_require__(27);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _AsyncUtils = __webpack_require__(31);
	
	var _PatternUtils = __webpack_require__(29);
	
	var _RouteUtils = __webpack_require__(35);
	
	function getChildRoutes(route, location, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }
	
	  var sync = true,
	      result = undefined;
	
	  route.getChildRoutes(location, function (error, childRoutes) {
	    childRoutes = !error && _RouteUtils.createRoutes(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }
	
	    callback(error, childRoutes);
	  });
	
	  sync = false;
	  return result; // Might be undefined.
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
	
	              process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : undefined;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](!indexRoute.path, 'Index routes should not have paths') : undefined;
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
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
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
	    };
	
	    var result = getChildRoutes(route, location, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
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
/* 35 */
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
	
	var _routerWarning = __webpack_require__(27);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
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
	      if (error instanceof Error) process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, error.message) : undefined;
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
/* 36 */
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _deprecateObjectProperties = __webpack_require__(38);
	
	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);
	
	var _getRouteParams = __webpack_require__(39);
	
	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);
	
	var _RouteUtils = __webpack_require__(35);
	
	var _routerWarning = __webpack_require__(27);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;
	
	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */
	var RouterContext = _react2['default'].createClass({
	  displayName: 'RouterContext',
	
	  propTypes: {
	    history: object,
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2['default'].createElement
	    };
	  },
	
	  childContextTypes: {
	    history: object,
	    location: object.isRequired,
	    router: object.isRequired
	  },
	
	  getChildContext: function getChildContext() {
	    var _props = this.props;
	    var router = _props.router;
	    var history = _props.history;
	    var location = _props.location;
	
	    if (!router) {
	      process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`<RouterContext>` expects a `router` rather than a `history`') : undefined;
	
	      router = _extends({}, history, {
	        setRouteLeaveHook: history.listenBeforeLeavingRoute
	      });
	      delete router.listenBeforeLeavingRoute;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      location = _deprecateObjectProperties2['default'](location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
	    }
	
	    return { history: history, location: location, router: router };
	  },
	
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	
	  render: function render() {
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
	            if (components.hasOwnProperty(key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }
	
	          return elements;
	        }
	
	        return _this.createElement(components, props);
	      }, element);
	    }
	
	    !(element === null || element === false || _react2['default'].isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'The root route must render a single element') : _invariant2['default'](false) : undefined;
	
	    return element;
	  }
	
	});
	
	exports['default'] = RouterContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*eslint no-empty: 0*/
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = deprecateObjectProperties;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _routerWarning = __webpack_require__(27);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var useMembrane = false;
	
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    if (Object.defineProperty({}, 'x', { get: function get() {
	        return true;
	      } }).x) {
	      useMembrane = true;
	    }
	  } catch (e) {}
	}
	
	// wraps an object in a membrane to warn about deprecated property access
	
	function deprecateObjectProperties(object, message) {
	  if (!useMembrane) return object;
	
	  var membrane = {};
	
	  var _loop = function (prop) {
	    if (typeof object[prop] === 'function') {
	      membrane[prop] = function () {
	        process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, message) : undefined;
	        return object[prop].apply(object, arguments);
	      };
	    } else {
	      Object.defineProperty(membrane, prop, {
	        configurable: false,
	        enumerable: false,
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, message) : undefined;
	          return object[prop];
	        }
	      });
	    }
	  };
	
	  for (var prop in object) {
	    _loop(prop);
	  }
	
	  return membrane;
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(29);
	
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.createRouterObject = createRouterObject;
	exports.createRoutingHistory = createRoutingHistory;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deprecateObjectProperties = __webpack_require__(38);
	
	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);
	
	function createRouterObject(history, transitionManager) {
	  return _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });
	}
	
	// deprecated
	
	function createRoutingHistory(history, transitionManager) {
	  history = _extends({}, history, transitionManager);
	
	  if (process.env.NODE_ENV !== 'production') {
	    history = _deprecateObjectProperties2['default'](history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
	  }
	
	  return history;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _routerWarning = __webpack_require__(27);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	var oneOfType = _React$PropTypes.oneOfType;
	
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
	
	function createLocationDescriptor(to, _ref) {
	  var query = _ref.query;
	  var hash = _ref.hash;
	  var state = _ref.state;
	
	  if (query || hash || state) {
	    return { pathname: to, query: query, hash: hash, state: state };
	  }
	
	  return to;
	}
	
	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
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
	var Link = _react2['default'].createClass({
	  displayName: 'Link',
	
	  contextTypes: {
	    router: object
	  },
	
	  propTypes: {
	    to: oneOfType([string, object]).isRequired,
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      className: '',
	      style: {}
	    };
	  },
	
	  handleClick: function handleClick(event) {
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
	      var to = _props.to;
	      var query = _props.query;
	      var hash = _props.hash;
	      var state = _props.state;
	
	      var _location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
	
	      this.context.router.push(_location);
	    }
	  },
	
	  render: function render() {
	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;
	
	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);
	
	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : undefined;
	
	    // Ignore if rendered outside the context of router, simplifies unit testing.
	    var router = this.context.router;
	
	    if (router) {
	      var _location2 = createLocationDescriptor(to, { query: query, hash: hash, state: state });
	      props.href = router.createHref(_location2);
	
	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(_location2, onlyActiveOnIndex)) {
	          if (activeClassName) props.className += props.className === '' ? activeClassName : ' ' + activeClassName;
	
	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }
	
	    return _react2['default'].createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	
	});
	
	exports['default'] = Link;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Link = __webpack_require__(41);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2['default'].createClass({
	  displayName: 'IndexLink',
	
	  render: function render() {
	    return _react2['default'].createElement(_Link2['default'], _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	
	});
	
	exports['default'] = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _routerWarning = __webpack_require__(27);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Redirect = __webpack_require__(44);
	
	var _Redirect2 = _interopRequireDefault(_Redirect);
	
	var _PropTypes = __webpack_require__(36);
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;
	
	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */
	var IndexRedirect = _react2['default'].createClass({
	  displayName: 'IndexRedirect',
	
	  statics: {
	
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2['default'].createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'An <IndexRedirect> does not make sense at the root of your route config') : undefined;
	      }
	    }
	
	  },
	
	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _PropTypes.falsy,
	    children: _PropTypes.falsy
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  }
	
	});
	
	exports['default'] = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _RouteUtils = __webpack_require__(35);
	
	var _PatternUtils = __webpack_require__(29);
	
	var _PropTypes = __webpack_require__(36);
	
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
	var Redirect = _react2['default'].createClass({
	  displayName: 'Redirect',
	
	  statics: {
	
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = _RouteUtils.createRouteFromReactElement(element);
	
	      if (route.from) route.path = route.from;
	
	      route.onEnter = function (nextState, replace) {
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
	
	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };
	
	      return route;
	    },
	
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';
	
	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';
	
	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;
	
	        if (pattern.indexOf('/') === 0) break;
	      }
	
	      return '/' + parentPattern;
	    }
	
	  },
	
	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _PropTypes.falsy,
	    children: _PropTypes.falsy
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<Redirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  }
	
	});
	
	exports['default'] = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _routerWarning = __webpack_require__(27);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _RouteUtils = __webpack_require__(35);
	
	var _PropTypes = __webpack_require__(36);
	
	var func = _react2['default'].PropTypes.func;
	
	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */
	var IndexRoute = _react2['default'].createClass({
	  displayName: 'IndexRoute',
	
	  statics: {
	
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _RouteUtils.createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'An <IndexRoute> does not make sense at the root of your route config') : undefined;
	      }
	    }
	
	  },
	
	  propTypes: {
	    path: _PropTypes.falsy,
	    component: _PropTypes.component,
	    components: _PropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<IndexRoute> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  }
	
	});
	
	exports['default'] = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _RouteUtils = __webpack_require__(35);
	
	var _PropTypes = __webpack_require__(36);
	
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
	var Route = _react2['default'].createClass({
	  displayName: 'Route',
	
	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },
	
	  propTypes: {
	    path: string,
	    component: _PropTypes.component,
	    components: _PropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<Route> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  }
	
	});
	
	exports['default'] = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _routerWarning = __webpack_require__(27);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _PropTypes = __webpack_require__(36);
	
	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {
	
	  contextTypes: {
	    history: _PropTypes.history
	  },
	
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : undefined;
	    this.history = this.context.history;
	  }
	
	};
	
	exports['default'] = History;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _routerWarning = __webpack_require__(27);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
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
	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : undefined;
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

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _routerWarning = __webpack_require__(27);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
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
	  },
	
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : undefined;
	  }
	
	};
	
	exports['default'] = RouteContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _historyLibUseQueries = __webpack_require__(23);
	
	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);
	
	var _createTransitionManager = __webpack_require__(26);
	
	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
	
	var _routerWarning = __webpack_require__(27);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
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
	  process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : undefined;
	
	  return function () {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var routes = _ref.routes;
	
	    var options = _objectWithoutProperties(_ref, ['routes']);
	
	    var history = _historyLibUseQueries2['default'](createHistory)(options);
	    var transitionManager = _createTransitionManager2['default'](history, routes);
	    return _extends({}, history, transitionManager);
	  };
	}
	
	exports['default'] = useRoutes;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouterContext = __webpack_require__(37);
	
	var _RouterContext2 = _interopRequireDefault(_RouterContext);
	
	var _routerWarning = __webpack_require__(27);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var RoutingContext = _react2['default'].createClass({
	  displayName: 'RoutingContext',
	
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : undefined;
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(_RouterContext2['default'], this.props);
	  }
	});
	
	exports['default'] = RoutingContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _createMemoryHistory = __webpack_require__(53);
	
	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
	
	var _createTransitionManager = __webpack_require__(26);
	
	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
	
	var _RouteUtils = __webpack_require__(35);
	
	var _RouterUtils = __webpack_require__(40);
	
	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history;
	  var routes = _ref.routes;
	  var location = _ref.location;
	
	  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);
	
	  !(history || location) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'match needs a history or a location') : _invariant2['default'](false) : undefined;
	
	  history = history ? history : _createMemoryHistory2['default'](options);
	  var transitionManager = _createTransitionManager2['default'](history, _RouteUtils.createRoutes(routes));
	
	  var unlisten = undefined;
	
	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    // Pick up the location from the history via synchronous history.listen
	    // call if needed.
	    unlisten = history.listen(function (historyLocation) {
	      location = historyLocation;
	    });
	  }
	
	  var router = _RouterUtils.createRouterObject(history, transitionManager);
	  history = _RouterUtils.createRoutingHistory(history, transitionManager);
	
	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation, nextState && _extends({}, nextState, {
	      history: history,
	      router: router,
	      matchContext: { history: history, transitionManager: transitionManager, router: router }
	    }));
	
	    // Defer removing the listener to here to prevent DOM histories from having
	    // to unwind DOM event listeners unnecessarily, in case callback renders a
	    // <Router> and attaches another history listener.
	    if (unlisten) {
	      unlisten();
	    }
	  });
	}
	
	exports['default'] = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createMemoryHistory;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _historyLibUseQueries = __webpack_require__(23);
	
	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);
	
	var _historyLibUseBasename = __webpack_require__(54);
	
	var _historyLibUseBasename2 = _interopRequireDefault(_historyLibUseBasename);
	
	var _historyLibCreateMemoryHistory = __webpack_require__(55);
	
	var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);
	
	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useRoutes` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = _historyLibCreateMemoryHistory2['default'](options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = _historyLibUseQueries2['default'](_historyLibUseBasename2['default'](createHistory))(options);
	  history.__v2_compatible__ = true;
	  return history;
	}
	
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _ExecutionEnvironment = __webpack_require__(11);
	
	var _PathUtils = __webpack_require__(10);
	
	var _runTransitionHook = __webpack_require__(21);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _deprecate = __webpack_require__(22);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
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
	
	      if (base) basename = _PathUtils.extractPath(base.href);
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
	
	    function prependBasename(location) {
	      if (!basename) return location;
	
	      if (typeof location === 'string') location = _PathUtils.parsePath(location);
	
	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;
	
	      return _extends({}, location, {
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
	    function push(location) {
	      history.push(prependBasename(location));
	    }
	
	    function replace(location) {
	      history.replace(prependBasename(location));
	    }
	
	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }
	
	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }
	
	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    }
	
	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	      push(_extends({ state: state }, path));
	    }
	
	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	      replace(_extends({ state: state }, path));
	    }
	
	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,
	
	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}
	
	exports['default'] = useBasename;
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(7);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _PathUtils = __webpack_require__(10);
	
	var _Actions = __webpack_require__(9);
	
	var _createHistory = __webpack_require__(15);
	
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
	
	    var location = _PathUtils.parsePath(path);
	
	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }
	
	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }
	
	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }
	
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = useRouterHistory;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _historyLibUseQueries = __webpack_require__(23);
	
	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);
	
	var _historyLibUseBasename = __webpack_require__(54);
	
	var _historyLibUseBasename2 = _interopRequireDefault(_historyLibUseBasename);
	
	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = _historyLibUseQueries2['default'](_historyLibUseBasename2['default'](createHistory))(options);
	    history.__v2_compatible__ = true;
	    return history;
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _historyLibCreateBrowserHistory = __webpack_require__(58);
	
	var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);
	
	var _createRouterHistory = __webpack_require__(59);
	
	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);
	
	exports['default'] = _createRouterHistory2['default'](_historyLibCreateBrowserHistory2['default']);
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Actions = __webpack_require__(9);
	
	var _PathUtils = __webpack_require__(10);
	
	var _ExecutionEnvironment = __webpack_require__(11);
	
	var _DOMUtils = __webpack_require__(12);
	
	var _DOMStateStorage = __webpack_require__(13);
	
	var _createDOMHistory = __webpack_require__(14);
	
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
	
	    var location = _PathUtils.parsePath(path);
	
	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _useRouterHistory = __webpack_require__(56);
	
	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	exports['default'] = function (createHistory) {
	  var history = undefined;
	  if (canUseDOM) history = _useRouterHistory2['default'](createHistory)();
	  return history;
	};
	
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _historyLibCreateHashHistory = __webpack_require__(6);
	
	var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);
	
	var _createRouterHistory = __webpack_require__(59);
	
	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);
	
	exports['default'] = _createRouterHistory2['default'](_historyLibCreateHashHistory2['default']);
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deprecate = __webpack_require__(22);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var _createLocation2 = __webpack_require__(20);
	
	var _createLocation3 = _interopRequireDefault(_createLocation2);
	
	var _createBrowserHistory = __webpack_require__(58);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	exports.createHistory = _createBrowserHistory2['default'];
	
	var _createHashHistory2 = __webpack_require__(6);
	
	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);
	
	exports.createHashHistory = _createHashHistory3['default'];
	
	var _createMemoryHistory2 = __webpack_require__(55);
	
	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);
	
	exports.createMemoryHistory = _createMemoryHistory3['default'];
	
	var _useBasename2 = __webpack_require__(54);
	
	var _useBasename3 = _interopRequireDefault(_useBasename2);
	
	exports.useBasename = _useBasename3['default'];
	
	var _useBeforeUnload2 = __webpack_require__(62);
	
	var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);
	
	exports.useBeforeUnload = _useBeforeUnload3['default'];
	
	var _useQueries2 = __webpack_require__(23);
	
	var _useQueries3 = _interopRequireDefault(_useQueries2);
	
	exports.useQueries = _useQueries3['default'];
	
	var _Actions2 = __webpack_require__(9);
	
	var _Actions3 = _interopRequireDefault(_Actions2);
	
	exports.Actions = _Actions3['default'];
	
	// deprecated
	
	var _enableBeforeUnload2 = __webpack_require__(63);
	
	var _enableBeforeUnload3 = _interopRequireDefault(_enableBeforeUnload2);
	
	exports.enableBeforeUnload = _enableBeforeUnload3['default'];
	
	var _enableQueries2 = __webpack_require__(64);
	
	var _enableQueries3 = _interopRequireDefault(_enableQueries2);
	
	exports.enableQueries = _enableQueries3['default'];
	var createLocation = _deprecate2['default'](_createLocation3['default'], 'Using createLocation without a history instance is deprecated; please use history.createLocation instead');
	exports.createLocation = createLocation;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(7);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _ExecutionEnvironment = __webpack_require__(11);
	
	var _DOMUtils = __webpack_require__(12);
	
	var _deprecate = __webpack_require__(22);
	
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deprecate = __webpack_require__(22);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var _useBeforeUnload = __webpack_require__(62);
	
	var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);
	
	exports['default'] = _deprecate2['default'](_useBeforeUnload2['default'], 'enableBeforeUnload is deprecated, use useBeforeUnload instead');
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deprecate = __webpack_require__(22);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var _useQueries = __webpack_require__(23);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	exports['default'] = _deprecate2['default'](_useQueries2['default'], 'enableQueries is deprecated, use useQueries instead');
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _html = __webpack_require__(66);
	
	var Pages = _interopRequireWildcard(_html);
	
	var _templates = __webpack_require__(82);
	
	var Templates = _interopRequireWildcard(_templates);
	
	var _src = __webpack_require__(86);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var componentSections = Object.keys(Pages).filter(function (e) {
	    return e !== 'home';
	}).map(function (page) {
	    return {
	        id: page,
	        label: page[0].toUpperCase() + page.slice(1)
	    };
	});
	
	var templateSections = Object.keys(Templates).map(function (template) {
	    return {
	        id: 'templates/' + template.toLowerCase(),
	        label: template
	    };
	});
	
	var DocApp = function (_React$Component) {
	    _inherits(DocApp, _React$Component);
	
	    function DocApp() {
	        _classCallCheck(this, DocApp);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(DocApp).apply(this, arguments));
	    }
	
	    _createClass(DocApp, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _src.Layout,
	                { fixedHeader: true, fixedDrawer: true, style: { zIndex: 100001 } },
	                _react2.default.createElement(
	                    _src.Header,
	                    { title: 'React-MDL' },
	                    _react2.default.createElement(
	                        _src.Navigation,
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'https://github.com/tleunen/react-mdl' },
	                            _react2.default.createElement(_src.Icon, { name: 'link', style: { marginRight: '8px', verticalAlign: 'middle' } }),
	                            'GitHub'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _src.Drawer,
	                    null,
	                    _react2.default.createElement(
	                        _src.Navigation,
	                        null,
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            'Components'
	                        ),
	                        componentSections.map(function (e) {
	                            return _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: e.id, activeClassName: 'active', key: e.id },
	                                e.label
	                            );
	                        }),
	                        _react2.default.createElement(_src.Spacer, { className: 'drawer-separator' }),
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            'Templates'
	                        ),
	                        templateSections.map(function (e) {
	                            return _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: e.id, key: e.id },
	                                e.label
	                            );
	                        })
	                    )
	                ),
	                _react2.default.createElement(
	                    _src.Content,
	                    { className: 'mdl-color-text--grey-600' },
	                    _react2.default.createElement(
	                        _src.Grid,
	                        null,
	                        _react2.default.createElement(
	                            _src.Cell,
	                            { col: 12 },
	                            this.props.children
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return DocApp;
	}(_react2.default.Component);
	
	exports.default = DocApp;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.tooltips = exports.toggles = exports.textfield = exports.snackbar = exports.sliders = exports.menus = exports.loading = exports.lists = exports.layout = exports.home = exports.dialogs = exports.datatables = exports.cards = exports.buttons = exports.badges = undefined;
	
	var _badgesMd = __webpack_require__(67);
	
	var _badgesMd2 = _interopRequireDefault(_badgesMd);
	
	var _buttonsMd = __webpack_require__(68);
	
	var _buttonsMd2 = _interopRequireDefault(_buttonsMd);
	
	var _cardsMd = __webpack_require__(69);
	
	var _cardsMd2 = _interopRequireDefault(_cardsMd);
	
	var _datatablesMd = __webpack_require__(70);
	
	var _datatablesMd2 = _interopRequireDefault(_datatablesMd);
	
	var _dialogsMd = __webpack_require__(71);
	
	var _dialogsMd2 = _interopRequireDefault(_dialogsMd);
	
	var _homeMd = __webpack_require__(72);
	
	var _homeMd2 = _interopRequireDefault(_homeMd);
	
	var _layoutMd = __webpack_require__(73);
	
	var _layoutMd2 = _interopRequireDefault(_layoutMd);
	
	var _listsMd = __webpack_require__(74);
	
	var _listsMd2 = _interopRequireDefault(_listsMd);
	
	var _loadingMd = __webpack_require__(75);
	
	var _loadingMd2 = _interopRequireDefault(_loadingMd);
	
	var _menusMd = __webpack_require__(76);
	
	var _menusMd2 = _interopRequireDefault(_menusMd);
	
	var _slidersMd = __webpack_require__(77);
	
	var _slidersMd2 = _interopRequireDefault(_slidersMd);
	
	var _snackbarMd = __webpack_require__(78);
	
	var _snackbarMd2 = _interopRequireDefault(_snackbarMd);
	
	var _textfieldMd = __webpack_require__(79);
	
	var _textfieldMd2 = _interopRequireDefault(_textfieldMd);
	
	var _togglesMd = __webpack_require__(80);
	
	var _togglesMd2 = _interopRequireDefault(_togglesMd);
	
	var _tooltipsMd = __webpack_require__(81);
	
	var _tooltipsMd2 = _interopRequireDefault(_tooltipsMd);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.badges = _badgesMd2.default;
	exports.buttons = _buttonsMd2.default;
	exports.cards = _cardsMd2.default;
	exports.datatables = _datatablesMd2.default;
	exports.dialogs = _dialogsMd2.default;
	exports.home = _homeMd2.default;
	exports.layout = _layoutMd2.default;
	exports.lists = _listsMd2.default;
	exports.loading = _loadingMd2.default;
	exports.menus = _menusMd2.default;
	exports.sliders = _slidersMd2.default;
	exports.snackbar = _snackbarMd2.default;
	exports.textfield = _textfieldMd2.default;
	exports.toggles = _togglesMd2.default;
	exports.tooltips = _tooltipsMd2.default;

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"badges\" class=\"mdl-typography--display-4\">Badges</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-1\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                Badge,\n                                                { text: \"1\", overlap: true },\n                                                React.createElement(Icon, { name: \"account_box\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                Badge,\n                                                { text: \"♥\", overlap: true },\n                                                React.createElement(Icon, { name: \"account_box\" })\n                                )\n                )\n);;\n        var cont = document.getElementById(\"demo-1\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Number badge on icon */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Badge</span> <span class=\"token attr-name\" >text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >overlap</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>account_box<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Badge</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Icon badge on icon */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Badge</span> <span class=\"token attr-name\" >text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>♥<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >overlap</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>account_box<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Badge</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <Badge text=\\&​quot;1\\&​quot; overlap>\\n    <Icon name=\\&​quot;account_box\\&​quot; />\\n</Badge>\\n                </Cell><Cell col={6}>\\n                    <Badge text=\\&​quot;♥\\&​quot; overlap>\\n    <Icon name=\\&​quot;account_box\\&​quot; />\\n</Badge>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-2\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            Badge,\n            { text: \"4\" },\n            \"Inbox\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            Badge,\n            { text: \"♥\", noBackground: true },\n            \"Mood\"\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-2\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Number badge on text */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Badge</span> <span class=\"token attr-name\" >text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>4<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Inbox<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Badge</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Icon badge without background on text */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Badge</span> <span class=\"token attr-name\" >text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>♥<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >noBackground</span><span class=\"token punctuation\" >></span></span>Mood<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Badge</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <Badge text=\\&​quot;4\\&​quot;>Inbox</Badge>\\n                </Cell><Cell col={6}>\\n                    <Badge text=\\&​quot;♥\\&​quot; noBackground>Mood</Badge>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">text</td>\n<td style=\"text-align:left\">Assign string value to badge</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">overlap</td>\n<td style=\"text-align:left\">Makes the badge overlaps its container</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">noBackground</td>\n<td style=\"text-align:left\">Removes the background of the badge</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"buttons\" class=\"mdl-typography--display-4\">Buttons</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-3\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                FABButton,\n                                                { colored: true },\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                FABButton,\n                                                { colored: true, ripple: true },\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                )\n);;\n        var cont = document.getElementById(\"demo-3\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Colored FAB button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FABButton</span> <span class=\"token attr-name\" >colored</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FABButton</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Colored FAB button with ripple */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FABButton</span> <span class=\"token attr-name\" >colored</span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FABButton</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <FABButton colored>\\n    <Icon name=\\&​quot;add\\&​quot; />\\n</FABButton>\\n                </Cell><Cell col={6}>\\n                    <FABButton colored ripple>\\n    <Icon name=\\&​quot;add\\&​quot; />\\n</FABButton>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-4\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 4 },\n                                React.createElement(\n                                                FABButton,\n                                                null,\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 4 },\n                                React.createElement(\n                                                FABButton,\n                                                { ripple: true },\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 4 },\n                                React.createElement(\n                                                FABButton,\n                                                { disabled: true },\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                )\n);;\n        var cont = document.getElementById(\"demo-4\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* FAB button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FABButton</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FABButton</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* FAB button with ripple */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FABButton</span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FABButton</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Disabled FAB button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FABButton</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FABButton</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={4}>\\n                    <FABButton>\\n    <Icon name=\\&​quot;add\\&​quot; />\\n</FABButton>\\n                </Cell><Cell col={4}>\\n                    <FABButton ripple>\\n    <Icon name=\\&​quot;add\\&​quot; />\\n</FABButton>\\n                </Cell><Cell col={4}>\\n                    <FABButton disabled>\\n    <Icon name=\\&​quot;add\\&​quot; />\\n</FABButton>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-5\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                FABButton,\n                                                { mini: true },\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                FABButton,\n                                                { mini: true, colored: true },\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                )\n);;\n        var cont = document.getElementById(\"demo-5\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Mini FAB button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FABButton</span> <span class=\"token attr-name\" >mini</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FABButton</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Colored Mini FAB button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FABButton</span> <span class=\"token attr-name\" >mini</span> <span class=\"token attr-name\" >colored</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FABButton</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <FABButton mini>\\n    <Icon name=\\&​quot;add\\&​quot; />\\n</FABButton>\\n                </Cell><Cell col={6}>\\n                    <FABButton mini colored>\\n    <Icon name=\\&​quot;add\\&​quot; />\\n</FABButton>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-6\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { raised: true },\n            \"Button\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { raised: true, ripple: true },\n            \"Button\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { raised: true, disabled: true },\n            \"Button\"\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-6\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Raised button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >raised</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Raised button with ripple */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >raised</span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Disabled Raised button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >raised</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={4}>\\n                    <Button raised>Button</Button>\\n                </Cell><Cell col={4}>\\n                    <Button raised ripple>Button</Button>\\n                </Cell><Cell col={4}>\\n                    <Button raised disabled>Button</Button>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-7\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { raised: true, colored: true },\n            \"Button\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { raised: true, accent: true },\n            \"Button\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { raised: true, accent: true, ripple: true },\n            \"Button\"\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-7\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Colored Raised button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >raised</span> <span class=\"token attr-name\" >colored</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Accent-colored button without ripple */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >raised</span> <span class=\"token attr-name\" >accent</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Accent-colored button with ripple */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >raised</span> <span class=\"token attr-name\" >accent</span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={4}>\\n                    <Button raised colored>Button</Button>\\n                </Cell><Cell col={4}>\\n                    <Button raised accent>Button</Button>\\n                </Cell><Cell col={4}>\\n                    <Button raised accent ripple>Button</Button>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-8\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            null,\n            \"Button\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { ripple: true },\n            \"Button\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 4 },\n        React.createElement(\n            Button,\n            { disabled: true },\n            \"Button\"\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-8\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Flat button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Flat button with ripple */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Disabled flat button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={4}>\\n                    <Button>Button</Button>\\n                </Cell><Cell col={4}>\\n                    <Button ripple>Button</Button>\\n                </Cell><Cell col={4}>\\n                    <Button disabled>Button</Button>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-9\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            Button,\n            { primary: true },\n            \"Button\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            Button,\n            { accent: true },\n            \"Button\"\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-9\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Primary colored flat button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >primary</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Accent-colored flat button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >accent</span><span class=\"token punctuation\" >></span></span>Button<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <Button primary>Button</Button>\\n                </Cell><Cell col={6}>\\n                    <Button accent>Button</Button>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-10\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(IconButton, { name: \"mood\" })\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(IconButton, { name: \"mood\", colored: true })\n    )\n);;\n        var cont = document.getElementById(\"demo-10\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Icon button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconButton</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mood<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Colored Icon button */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconButton</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mood<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >colored</span> <span class=\"token punctuation\" >/></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <IconButton name=\\&​quot;mood\\&​quot; />\\n                </Cell><Cell col={6}>\\n                    <IconButton name=\\&​quot;mood\\&​quot; colored />\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">accent</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies &quot;accent&quot; colors</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">colored</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies &quot;colored&quot; colors</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">component</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\"></td>\n<td style=\"text-align:left\">Element</td>\n<td></td>\n<td>Function</td>\n<td>Specify the custom component to use to render the element</td>\n<td>Optional. Default &#39;div&#39;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">mini</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Set the button as &quot;mini&quot;</td>\n<td style=\"text-align:left\">Optional, works only with &quot;FABButton&quot;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">name</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Set the icon name&quot;</td>\n<td style=\"text-align:left\">Optional, works only with &quot;IconButton&quot;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">primary</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies &quot;primary&quot; colors</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">raised</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies &quot;raised&quot; button style</td>\n<td style=\"text-align:left\">Optional, doesn\\&#39;t work with &quot;FABButton&quot;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">ripple</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies &quot;ripple&quot; click effect</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"cards\" class=\"mdl-typography--display-4\">Cards</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-11\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Card,\n    { shadow: 0, style: { width: '512px', margin: 'auto' } },\n    React.createElement(\n        CardTitle,\n        { style: { color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' } },\n        'Welcome'\n    ),\n    React.createElement(\n        CardText,\n        null,\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...'\n    ),\n    React.createElement(\n        CardActions,\n        { border: true },\n        React.createElement(\n            Button,\n            { colored: true },\n            'Get Started'\n        )\n    ),\n    React.createElement(\n        CardMenu,\n        { style: { color: '#fff' } },\n        React.createElement(IconButton, { name: 'share' })\n    )\n);;\n        var cont = document.getElementById(\"demo-11\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Card</span> <span class=\"token attr-name\" >shadow</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'512px'</span><span class=\"token punctuation\" >,</span> margin<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'auto'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardTitle</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>color<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'#fff'</span><span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'176px'</span><span class=\"token punctuation\" >,</span> background<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Welcome<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardTitle</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardText</span><span class=\"token punctuation\" >></span></span>\n        Lorem ipsum dolor sit amet<span class=\"token punctuation\" >,</span> consectetur adipiscing elit<span class=\"token punctuation\" >.</span>\n        Mauris sagittis pellentesque lacus eleifend lacinia<span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardText</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardActions</span> <span class=\"token attr-name\" >border</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >colored</span><span class=\"token punctuation\" >></span></span>Get Started<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardActions</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardMenu</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>color<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'#fff'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconButton</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>share<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardMenu</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Card</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Card shadow={0} style={{width: &apos;512px&apos;, margin: &apos;auto&apos;}}>\\n    <CardTitle style={{color: &apos;#fff&apos;, height: &apos;176px&apos;, background: &apos;url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover&apos;}}>Welcome</CardTitle>\\n    <CardText>\\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n        Mauris sagittis pellentesque lacus eleifend lacinia...\\n    </CardText>\\n    <CardActions border>\\n        <Button colored>Get Started</Button>\\n    </CardActions>\\n    <CardMenu style={{color: &apos;#fff&apos;}}>\\n        <IconButton name=\\&​quot;share\\&​quot; />\\n    </CardMenu>\\n</Card>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-12\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Card,\n    { shadow: 0, style: { width: '320px', height: '320px', margin: 'auto' } },\n    React.createElement(\n        CardTitle,\n        { expand: true, style: { color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' } },\n        'Update'\n    ),\n    React.createElement(\n        CardText,\n        null,\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.'\n    ),\n    React.createElement(\n        CardActions,\n        { border: true },\n        React.createElement(\n            Button,\n            { colored: true },\n            'View Updates'\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-12\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Card</span> <span class=\"token attr-name\" >shadow</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'320px'</span><span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'320px'</span><span class=\"token punctuation\" >,</span> margin<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'auto'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardTitle</span> <span class=\"token attr-name\" >expand</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>color<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'#fff'</span><span class=\"token punctuation\" >,</span> background<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Update<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardTitle</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardText</span><span class=\"token punctuation\" >></span></span>\n        Lorem ipsum dolor sit amet<span class=\"token punctuation\" >,</span> consectetur adipiscing elit<span class=\"token punctuation\" >.</span>\n        Aenan convallis<span class=\"token punctuation\" >.</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardText</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardActions</span> <span class=\"token attr-name\" >border</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >colored</span><span class=\"token punctuation\" >></span></span>View Updates<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardActions</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Card</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Card shadow={0} style={{width: &apos;320px&apos;, height: &apos;320px&apos;, margin: &apos;auto&apos;}}>\\n    <CardTitle expand style={{color: &apos;#fff&apos;, background: &apos;url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC&apos;}}>Update</CardTitle>\\n    <CardText>\\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n        Aenan convallis.\\n    </CardText>\\n    <CardActions border>\\n        <Button colored>View Updates</Button>\\n    </CardActions>\\n</Card>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-13\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Card,\n    { shadow: 0, style: { width: '256px', height: '256px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', margin: 'auto' } },\n    React.createElement(CardTitle, { expand: true }),\n    React.createElement(\n        CardActions,\n        { style: { height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)' } },\n        React.createElement(\n            'span',\n            { style: { color: '#fff', fontSize: '14px', fontWeight: '500' } },\n            'Image.jpg'\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-13\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Card</span> <span class=\"token attr-name\" >shadow</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'256px'</span><span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'256px'</span><span class=\"token punctuation\" >,</span> background<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover'</span><span class=\"token punctuation\" >,</span> margin<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'auto'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardTitle</span> <span class=\"token attr-name\" >expand</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardActions</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'52px'</span><span class=\"token punctuation\" >,</span> padding<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'16px'</span><span class=\"token punctuation\" >,</span> background<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'rgba(0,0,0,0.2)'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>color<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'#fff'</span><span class=\"token punctuation\" >,</span> fontSize<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'14px'</span><span class=\"token punctuation\" >,</span> fontWeight<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'500'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n            Image<span class=\"token punctuation\" >.</span>jpg\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardActions</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Card</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Card shadow={0} style={{width: &apos;256px&apos;, height: &apos;256px&apos;, background: &apos;url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover&apos;, margin: &apos;auto&apos;}}>\\n    <CardTitle expand />\\n    <CardActions style={{height: &apos;52px&apos;, padding: &apos;16px&apos;, background: &apos;rgba(0,0,0,0.2)&apos;}}>\\n        <span style={{color: &apos;#fff&apos;, fontSize: &apos;14px&apos;, fontWeight: &apos;500&apos;}}>\\n            Image.jpg\\n        </span>\\n    </CardActions>\\n</Card>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-14\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Card,\n    { shadow: 0, style: { width: '256px', height: '256px', background: '#3E4EB8' } },\n    React.createElement(\n        CardTitle,\n        { expand: true, style: { alignItems: 'flex-start', color: '#fff' } },\n        React.createElement(\n            'h4',\n            { style: { marginTop: '0' } },\n            'Featured event:',\n            React.createElement('br', null),\n            'May 24, 2016',\n            React.createElement('br', null),\n            '7-11pm'\n        )\n    ),\n    React.createElement(\n        CardActions,\n        { border: true, style: { borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff' } },\n        React.createElement(\n            Button,\n            { colored: true, style: { color: '#fff' } },\n            'Add to Calendar'\n        ),\n        React.createElement('div', { className: 'mdl-layout-spacer' }),\n        React.createElement(Icon, { name: 'event' })\n    )\n);;\n        var cont = document.getElementById(\"demo-14\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Card</span> <span class=\"token attr-name\" >shadow</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'256px'</span><span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'256px'</span><span class=\"token punctuation\" >,</span> background<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'#3E4EB8'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardTitle</span> <span class=\"token attr-name\" >expand</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>alignItems<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'flex-start'</span><span class=\"token punctuation\" >,</span> color<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'#fff'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>marginTop<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n            Featured event<span class=\"token punctuation\" >:</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n            May <span class=\"token number\" >24</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >2016</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token number\" >7</span><span class=\"token operator\" >-</span>11pm\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardTitle</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CardActions</span> <span class=\"token attr-name\" >border</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>borderColor<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'rgba(255, 255, 255, 0.2)'</span><span class=\"token punctuation\" >,</span> display<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'flex'</span><span class=\"token punctuation\" >,</span> boxSizing<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'border-box'</span><span class=\"token punctuation\" >,</span> alignItems<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'center'</span><span class=\"token punctuation\" >,</span> color<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'#fff'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >colored</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>color<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'#fff'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Add to Calendar<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mdl-layout-spacer<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>event<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>CardActions</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Card</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Card shadow={0} style={{width: &apos;256px&apos;, height: &apos;256px&apos;, background: &apos;#3E4EB8&apos;}}>\\n    <CardTitle expand style={{alignItems: &apos;flex-start&apos;, color: &apos;#fff&apos;}}>\\n        <h4 style={{marginTop: &apos;0&apos;}}>\\n            Featured event:<br />\\n            May 24, 2016<br />\\n            7-11pm\\n        </h4>\\n    </CardTitle>\\n    <CardActions border style={{borderColor: &apos;rgba(255, 255, 255, 0.2)&apos;, display: &apos;flex&apos;, boxSizing: &apos;border-box&apos;, alignItems: &apos;center&apos;, color: &apos;#fff&apos;}}>\\n        <Button colored style={{color: &apos;#fff&apos;}}>Add to Calendar</Button>\\n        <div className=\\&​quot;mdl-layout-spacer\\&​quot;></div>\\n        <Icon name=\\&​quot;event\\&​quot; />\\n    </CardActions>\\n</Card>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">border</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies a border on top of the container</td>\n<td style=\"text-align:left\">Optional. Works only with &quot;CardActions&quot;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">expand</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Expand the size to take the available space</td>\n<td style=\"text-align:left\">Optional. Works only with &quot;CardTitle&quot;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">shadow</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Defines the shadow depth</td>\n<td style=\"text-align:left\">Optional, Default 0. Must be between 0 and 6</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"data-tables\" class=\"mdl-typography--display-4\">Data Tables</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<h3 id=\"simple-table\" class=\"mdl-typography--display-2\">Simple table</h3>\n<div id=\"demo-15\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(DataTable, {\n    shadow: 0,\n    columns: [{ name: 'material', label: 'Material', tooltip: 'The amazing material name' }, { name: 'quantity', label: 'Quantity', tooltip: 'Number of materials', numeric: true }, { name: 'price', label: 'Unit Price', tooltip: 'Price pet unit', numeric: true }],\n    rows: [{ material: 'Acrylic (Transparent)', quantity: 25, price: '$2.90' }, { material: 'Plywood (Birch)', quantity: 50, price: '$1.25' }, { material: 'Laminate (Gold on Blue)', quantity: 10, price: '$2.35' }]\n});;\n        var cont = document.getElementById(\"demo-15\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DataTable</span>\n    <span class=\"token attr-name\" >shadow</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span>\n        <span class=\"token punctuation\" >{</span>name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'material'</span><span class=\"token punctuation\" >,</span> label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Material'</span><span class=\"token punctuation\" >,</span> tooltip<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'The amazing material name'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >{</span>name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'quantity'</span><span class=\"token punctuation\" >,</span> label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Quantity'</span><span class=\"token punctuation\" >,</span> tooltip<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Number of materials'</span><span class=\"token punctuation\" >,</span> numeric<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >{</span>name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'price'</span><span class=\"token punctuation\" >,</span> label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Unit Price'</span><span class=\"token punctuation\" >,</span> tooltip<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Price pet unit'</span><span class=\"token punctuation\" >,</span> numeric<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >}</span>\n    <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >rows</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span>\n        <span class=\"token punctuation\" >{</span>material<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Acrylic (Transparent)'</span><span class=\"token punctuation\" >,</span> quantity<span class=\"token punctuation\" >:</span> <span class=\"token number\" >25</span><span class=\"token punctuation\" >,</span> price<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'$2.90'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >{</span>material<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Plywood (Birch)'</span><span class=\"token punctuation\" >,</span> quantity<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> price<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'$1.25'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >{</span>material<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Laminate (Gold on Blue)'</span><span class=\"token punctuation\" >,</span> quantity<span class=\"token punctuation\" >:</span> <span class=\"token number\" >10</span><span class=\"token punctuation\" >,</span> price<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'$2.35'</span><span class=\"token punctuation\" >}</span>\n    <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n<span class=\"token punctuation\" >/></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <DataTable\\n    shadow={0}\\n    columns={[\\n        {name: &apos;material&apos;, label: &apos;Material&apos;, tooltip: &apos;The amazing material name&apos;},\\n        {name: &apos;quantity&apos;, label: &apos;Quantity&apos;, tooltip: &apos;Number of materials&apos;, numeric: true},\\n        {name: &apos;price&apos;, label: &apos;Unit Price&apos;, tooltip: &apos;Price pet unit&apos;, numeric: true}\\n    ]}\\n    rows={[\\n        {material: &apos;Acrylic (Transparent)&apos;, quantity: 25, price: &apos;$2.90&apos;},\\n        {material: &apos;Plywood (Birch)&apos;, quantity: 50, price: &apos;$1.25&apos;},\\n        {material: &apos;Laminate (Gold on Blue)&apos;, quantity: 10, price: &apos;$2.35&apos;}\\n    ]}\\n/>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h3 id=\"selectable-table-with-checkboxes\" class=\"mdl-typography--display-2\">Selectable Table with checkboxes</h3>\n<div id=\"demo-16\"></div>\n        <script class=\"demo-js\">\n        'use strict';\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Demo = function (_React$Component) {\n    _inherits(Demo, _React$Component);\n\n    function Demo(props) {\n        _classCallCheck(this, Demo);\n\n        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));\n\n        _this.onChangeHeaderCheckbox = _this.onChangeHeaderCheckbox.bind(_this);\n        _this.onChangeDataCheckbox = _this.onChangeDataCheckbox.bind(_this);\n\n        // imagine we get this data from the server\n        var dataFromServer = [{ material: 'Acrylic (Transparent)', quantity: 25, price: '$2.90' }, { material: 'Plywood (Birch)', quantity: 50, price: '$1.25' }, { material: 'Laminate (Gold on Blue)', quantity: 10, price: '$2.35' }];\n\n        // we add a \"checked\" state in our data (the name could be anything you want)\n        _this.state = {\n            rows: dataFromServer.map(function (row) {\n                return _extends({}, row, {\n                    checked: false\n                });\n            }),\n            headerChecked: false\n        };\n        return _this;\n    }\n\n    _createClass(Demo, [{\n        key: 'onChangeHeaderCheckbox',\n        value: function onChangeHeaderCheckbox() {\n            // update the state by checking or unchecking everything\n            this.setState(function (previousState) {\n                return {\n                    headerChecked: !previousState.headerChecked,\n                    rows: previousState.rows.map(function (row) {\n                        return _extends({}, row, {\n                            checked: !previousState.headerChecked\n                        });\n                    })\n                };\n            });\n        }\n    }, {\n        key: 'onChangeDataCheckbox',\n        value: function onChangeDataCheckbox(e) {\n            this.setState(function (previousState) {\n                return {\n                    rows: previousState.rows.map(function (row, i) {\n                        return _extends({}, row, {\n                            checked: i === parseInt(e.target.dataset.rowId, 10) ? !row.checked : row.checked\n                        });\n                    })\n                };\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            // we need to render a checkbox based on the state\n            var rows = this.state.rows.map(function (row, i) {\n                return _extends({\n                    checkbox: React.createElement(Checkbox, { 'data-row-id': i, checked: row.checked, onChange: _this2.onChangeDataCheckbox }),\n                    selected: row.checked\n                }, row);\n            });\n\n            return React.createElement(DataTable, {\n                shadow: 0,\n                columns: [{ name: 'checkbox', label: React.createElement(Checkbox, { checked: this.state.headerChecked, onChange: this.onChangeHeaderCheckbox }) }, { name: 'material', label: 'Material' }, { name: 'quantity', label: 'Quantity', numeric: true }, { name: 'price', label: 'Unit Price', numeric: true }],\n                rows: rows\n            });\n        }\n    }]);\n\n    return Demo;\n}(React.Component);\n        var elem = React.createElement(Demo);\n        var cont = document.getElementById(\"demo-16\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\" >class</span> <span class=\"token class-name\" >Demo</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token function\" >constructor</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >super</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onChangeHeaderCheckbox <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onChangeHeaderCheckbox<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onChangeDataCheckbox <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onChangeDataCheckbox<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// imagine we get this data from the server</span>\n        <span class=\"token keyword\" >const</span> dataFromServer <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span>\n            <span class=\"token punctuation\" >{</span>material<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Acrylic (Transparent)'</span><span class=\"token punctuation\" >,</span> quantity<span class=\"token punctuation\" >:</span> <span class=\"token number\" >25</span><span class=\"token punctuation\" >,</span> price<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'$2.90'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n            <span class=\"token punctuation\" >{</span>material<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Plywood (Birch)'</span><span class=\"token punctuation\" >,</span> quantity<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> price<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'$1.25'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n            <span class=\"token punctuation\" >{</span>material<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Laminate (Gold on Blue)'</span><span class=\"token punctuation\" >,</span> quantity<span class=\"token punctuation\" >:</span> <span class=\"token number\" >10</span><span class=\"token punctuation\" >,</span> price<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'$2.35'</span><span class=\"token punctuation\" >}</span>\n        <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// we add a \"checked\" state in our data (the name could be anything you want)</span>\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n            rows<span class=\"token punctuation\" >:</span> dataFromServer<span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span>row <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n                <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>row<span class=\"token punctuation\" >,</span>\n                checked<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span>\n            <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n            headerChecked<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token function\" >onChangeHeaderCheckbox</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// update the state by checking or unchecking everything</span>\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span>previousState <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n            headerChecked<span class=\"token punctuation\" >:</span> <span class=\"token operator\" >!</span>previousState<span class=\"token punctuation\" >.</span>headerChecked<span class=\"token punctuation\" >,</span>\n            rows<span class=\"token punctuation\" >:</span> previousState<span class=\"token punctuation\" >.</span>rows<span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span>row <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n                <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>row<span class=\"token punctuation\" >,</span>\n                checked<span class=\"token punctuation\" >:</span> <span class=\"token operator\" >!</span>previousState<span class=\"token punctuation\" >.</span>headerChecked\n            <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token function\" >onChangeDataCheckbox</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span>previousState <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n            rows<span class=\"token punctuation\" >:</span> previousState<span class=\"token punctuation\" >.</span>rows<span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>row<span class=\"token punctuation\" >,</span> i<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n                <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>row<span class=\"token punctuation\" >,</span>\n                checked<span class=\"token punctuation\" >:</span> i <span class=\"token operator\" >===</span> <span class=\"token function\" >parseInt</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >.</span>target<span class=\"token punctuation\" >.</span>dataset<span class=\"token punctuation\" >.</span>rowId<span class=\"token punctuation\" >,</span> <span class=\"token number\" >10</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >?</span> <span class=\"token operator\" >!</span>row<span class=\"token punctuation\" >.</span>checked <span class=\"token punctuation\" >:</span> row<span class=\"token punctuation\" >.</span>checked\n            <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// we need to render a checkbox based on the state</span>\n        <span class=\"token keyword\" >const</span> rows <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>rows<span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>row<span class=\"token punctuation\" >,</span> i<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n            checkbox<span class=\"token punctuation\" >:</span> <span class=\"token operator\" >&lt;</span>Checkbox data<span class=\"token operator\" >-</span>row<span class=\"token operator\" >-</span>id<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span>i<span class=\"token punctuation\" >}</span> checked<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span>row<span class=\"token punctuation\" >.</span>checked<span class=\"token punctuation\" >}</span> onChange<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onChangeDataCheckbox<span class=\"token punctuation\" >}</span> <span class=\"token operator\" >/</span><span class=\"token operator\" >></span><span class=\"token punctuation\" >,</span>\n            selected<span class=\"token punctuation\" >:</span> row<span class=\"token punctuation\" >.</span>checked<span class=\"token punctuation\" >,</span>\n            <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>row\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n        <span class=\"token keyword\" >return</span> <span class=\"token operator\" >&lt;</span>DataTable\n            shadow<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span>\n            columns<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span>\n                <span class=\"token punctuation\" >{</span>name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'checkbox'</span><span class=\"token punctuation\" >,</span> label<span class=\"token punctuation\" >:</span> <span class=\"token operator\" >&lt;</span>Checkbox checked<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>headerChecked<span class=\"token punctuation\" >}</span> onChange<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onChangeHeaderCheckbox<span class=\"token punctuation\" >}</span> <span class=\"token operator\" >/</span><span class=\"token operator\" >></span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n                <span class=\"token punctuation\" >{</span>name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'material'</span><span class=\"token punctuation\" >,</span> label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Material'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n                <span class=\"token punctuation\" >{</span>name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'quantity'</span><span class=\"token punctuation\" >,</span> label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Quantity'</span><span class=\"token punctuation\" >,</span> numeric<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n                <span class=\"token punctuation\" >{</span>name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'price'</span><span class=\"token punctuation\" >,</span> label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Unit Price'</span><span class=\"token punctuation\" >,</span> numeric<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >}</span>\n            <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span>\n            rows<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span>rows<span class=\"token punctuation\" >}</span>\n        <span class=\"token operator\" >/</span><span class=\"token operator\" >></span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\nclass Demo extends React.Component {\\n    constructor(props) {\\n        super(props);\\n\\n        this.onChangeHeaderCheckbox = this.onChangeHeaderCheckbox.bind(this);\\n        this.onChangeDataCheckbox = this.onChangeDataCheckbox.bind(this);\\n\\n        // imagine we get this data from the server\\n        const dataFromServer = [\\n            {material: &apos;Acrylic (Transparent)&apos;, quantity: 25, price: &apos;$2.90&apos;},\\n            {material: &apos;Plywood (Birch)&apos;, quantity: 50, price: &apos;$1.25&apos;},\\n            {material: &apos;Laminate (Gold on Blue)&apos;, quantity: 10, price: &apos;$2.35&apos;}\\n        ];\\n\\n        // we add a \\&​quot;checked\\&​quot; state in our data (the name could be anything you want)\\n        this.state = {\\n            rows: dataFromServer.map(row => ({\\n                ...row,\\n                checked: false\\n            })),\\n            headerChecked: false\\n        };\\n    }\\n\\n    onChangeHeaderCheckbox() {\\n        // update the state by checking or unchecking everything\\n        this.setState(previousState => ({\\n            headerChecked: !previousState.headerChecked,\\n            rows: previousState.rows.map(row => ({\\n                ...row,\\n                checked: !previousState.headerChecked\\n            }))\\n        }));\\n    }\\n\\n    onChangeDataCheckbox(e) {\\n        this.setState(previousState => ({\\n            rows: previousState.rows.map((row, i) => ({\\n                ...row,\\n                checked: i === parseInt(e.target.dataset.rowId, 10) ? !row.checked : row.checked\\n            }))\\n        }));\\n    }\\n\\n    render() {\\n        // we need to render a checkbox based on the state\\n        const rows = this.state.rows.map((row, i) => ({\\n            checkbox: <Checkbox data-row-id={i} checked={row.checked} onChange={this.onChangeDataCheckbox} />,\\n            selected: row.checked,\\n            ...row\\n        }));\\n\\n        return <DataTable\\n            shadow={0}\\n            columns={[\\n                {name: &apos;checkbox&apos;, label: <Checkbox checked={this.state.headerChecked} onChange={this.onChangeHeaderCheckbox} />},\\n                {name: &apos;material&apos;, label: &apos;Material&apos;},\\n                {name: &apos;quantity&apos;, label: &apos;Quantity&apos;, numeric: true},\\n                {name: &apos;price&apos;, label: &apos;Unit Price&apos;, numeric: true}\\n            ]}\\n            rows={rows}\\n        />;\\n    }\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">columns</td>\n<td style=\"text-align:left\">Array of {label, name, numeric, tooltip}</td>\n<td style=\"text-align:left\">Set the columns</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">rows</td>\n<td style=\"text-align:left\">Array of object</td>\n<td style=\"text-align:left\">Set the rows data</td>\n<td style=\"text-align:left\">Required. The properties of each object should be the &quot;name&quot; of each column</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">shadow</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Defines the shadow depth</td>\n<td style=\"text-align:left\">Optional, Default 0. Must be between 0 and 6</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"dialogs\" class=\"mdl-typography--display-4\">Dialogs</h1>\n<blockquote>\n<p>This component uses <a href=\"https://www.w3.org/TR/2013/CR-html5-20130806/interactive-elements.html#the-dialog-element\">dialog element</a>, which is only supported by Chrome and Opera currently. For other browsers, you need to include a <a href=\"https://github.com/GoogleChrome/dialog-polyfill\">polyfill</a> in your code.</p>\n<p>If you&#39;re using the <code>Dialog</code> component with a full MDL app, you will also need to set a custom <code>z-index</code> on the <code>Layout</code> to make the <code>Dialog</code> be accessible on top of the dark overlay. A value of <code>100001</code> is required for this to work.</p>\n</blockquote>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<h3 id=\"simple-dialog\" class=\"mdl-typography--display-2\">Simple Dialog</h3>\n<div id=\"demo-17\"></div>\n        <script class=\"demo-js\">\n        'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Demo = function (_React$Component) {\n  _inherits(Demo, _React$Component);\n\n  function Demo(props) {\n    _classCallCheck(this, Demo);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));\n\n    _this.state = {};\n    _this.handleOpenDialog = _this.handleOpenDialog.bind(_this);\n    _this.handleCloseDialog = _this.handleCloseDialog.bind(_this);\n    return _this;\n  }\n\n  _createClass(Demo, [{\n    key: 'handleOpenDialog',\n    value: function handleOpenDialog() {\n      this.setState({\n        openDialog: true\n      });\n    }\n  }, {\n    key: 'handleCloseDialog',\n    value: function handleCloseDialog() {\n      this.setState({\n        openDialog: false\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          Button,\n          { colored: true, onClick: this.handleOpenDialog, raised: true, ripple: true },\n          'Show Dialog'\n        ),\n        React.createElement(\n          Dialog,\n          { open: this.state.openDialog },\n          React.createElement(\n            DialogTitle,\n            null,\n            'Allow data collection?'\n          ),\n          React.createElement(\n            DialogContent,\n            null,\n            React.createElement(\n              'p',\n              null,\n              'Allowing us to collect data will let us get you the information you want faster.'\n            )\n          ),\n          React.createElement(\n            DialogActions,\n            null,\n            React.createElement(\n              Button,\n              { type: 'button' },\n              'Agree'\n            ),\n            React.createElement(\n              Button,\n              { type: 'button', onClick: this.handleCloseDialog },\n              'Disagree'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Demo;\n}(React.Component);\n        var elem = React.createElement(Demo);\n        var cont = document.getElementById(\"demo-17\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\" >class</span> <span class=\"token class-name\" >Demo</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >constructor</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >super</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleOpenDialog <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleOpenDialog<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleCloseDialog <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleCloseDialog<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >handleOpenDialog</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      openDialog<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >handleCloseDialog</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      openDialog<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token operator\" >&lt;</span>div<span class=\"token operator\" >></span>\n        <span class=\"token operator\" >&lt;</span>Button colored onClick<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleOpenDialog<span class=\"token punctuation\" >}</span> raised ripple<span class=\"token operator\" >></span>Show Dialog<span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Button<span class=\"token operator\" >></span>\n        <span class=\"token operator\" >&lt;</span>Dialog open<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>openDialog<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n          <span class=\"token operator\" >&lt;</span>DialogTitle<span class=\"token operator\" >></span>Allow data collection<span class=\"token operator\" >?</span><span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>DialogTitle<span class=\"token operator\" >></span>\n          <span class=\"token operator\" >&lt;</span>DialogContent<span class=\"token operator\" >></span>\n            <span class=\"token operator\" >&lt;</span>p<span class=\"token operator\" >></span>Allowing us to collect data will <span class=\"token keyword\" >let</span> us <span class=\"token keyword\" >get</span> you the information you want faster<span class=\"token punctuation\" >.</span><span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>p<span class=\"token operator\" >></span>\n          <span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>DialogContent<span class=\"token operator\" >></span>\n          <span class=\"token operator\" >&lt;</span>DialogActions<span class=\"token operator\" >></span>\n            <span class=\"token operator\" >&lt;</span>Button type<span class=\"token operator\" >=</span><span class=\"token string\" >'button'</span><span class=\"token operator\" >></span>Agree<span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Button<span class=\"token operator\" >></span>\n            <span class=\"token operator\" >&lt;</span>Button type<span class=\"token operator\" >=</span><span class=\"token string\" >'button'</span> onClick<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleCloseDialog<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>Disagree<span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Button<span class=\"token operator\" >></span>\n          <span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>DialogActions<span class=\"token operator\" >></span>\n        <span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Dialog<span class=\"token operator\" >></span>\n      <span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>div<span class=\"token operator\" >></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\nclass Demo extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.state = {};\\n    this.handleOpenDialog = this.handleOpenDialog.bind(this);\\n    this.handleCloseDialog = this.handleCloseDialog.bind(this);\\n  }\\n\\n  handleOpenDialog() {\\n    this.setState({\\n      openDialog: true\\n    });\\n  }\\n\\n  handleCloseDialog() {\\n    this.setState({\\n      openDialog: false\\n    });\\n  }\\n\\n  render() {\\n    return (\\n      <div>\\n        <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>\\n        <Dialog open={this.state.openDialog}>\\n          <DialogTitle>Allow data collection?</DialogTitle>\\n          <DialogContent>\\n            <p>Allowing us to collect data will let us get you the information you want faster.</p>\\n          </DialogContent>\\n          <DialogActions>\\n            <Button type=&apos;button&apos;>Agree</Button>\\n            <Button type=&apos;button&apos; onClick={this.handleCloseDialog}>Disagree</Button>\\n          </DialogActions>\\n        </Dialog>\\n      </div>\\n    );\\n  }\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h3 id=\"dialog-with-full-width-actions\" class=\"mdl-typography--display-2\">Dialog with Full Width Actions</h3>\n<div id=\"demo-18\"></div>\n        <script class=\"demo-js\">\n        'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Demo = function (_React$Component) {\n  _inherits(Demo, _React$Component);\n\n  function Demo(props) {\n    _classCallCheck(this, Demo);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));\n\n    _this.state = {};\n    _this.handleOpenDialog = _this.handleOpenDialog.bind(_this);\n    _this.handleCloseDialog = _this.handleCloseDialog.bind(_this);\n    return _this;\n  }\n\n  _createClass(Demo, [{\n    key: 'handleOpenDialog',\n    value: function handleOpenDialog() {\n      this.setState({\n        openDialog: true\n      });\n    }\n  }, {\n    key: 'handleCloseDialog',\n    value: function handleCloseDialog() {\n      this.setState({\n        openDialog: false\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          Button,\n          { colored: true, onClick: this.handleOpenDialog, raised: true, ripple: true },\n          'Show Modal'\n        ),\n        React.createElement(\n          Dialog,\n          { open: this.state.openDialog },\n          React.createElement(\n            DialogTitle,\n            null,\n            'Allow this site to collect usage data to improve your experience?'\n          ),\n          React.createElement(\n            DialogContent,\n            null,\n            React.createElement(\n              'p',\n              null,\n              'Allowing us to collect data will let us get you the information you want faster.'\n            )\n          ),\n          React.createElement(\n            DialogActions,\n            { fullWidth: true },\n            React.createElement(\n              Button,\n              { type: 'button' },\n              'Agree'\n            ),\n            React.createElement(\n              Button,\n              { type: 'button', onClick: this.handleCloseDialog },\n              'Disagree'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Demo;\n}(React.Component);\n        var elem = React.createElement(Demo);\n        var cont = document.getElementById(\"demo-18\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\" >class</span> <span class=\"token class-name\" >Demo</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >constructor</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >super</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleOpenDialog <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleOpenDialog<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleCloseDialog <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleCloseDialog<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >handleOpenDialog</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      openDialog<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >handleCloseDialog</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      openDialog<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token operator\" >&lt;</span>div<span class=\"token operator\" >></span>\n        <span class=\"token operator\" >&lt;</span>Button colored onClick<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleOpenDialog<span class=\"token punctuation\" >}</span> raised ripple<span class=\"token operator\" >></span>Show Modal<span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Button<span class=\"token operator\" >></span>\n        <span class=\"token operator\" >&lt;</span>Dialog open<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>openDialog<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n          <span class=\"token operator\" >&lt;</span>DialogTitle<span class=\"token operator\" >></span>Allow <span class=\"token keyword\" >this</span> site to collect usage data to improve your experience<span class=\"token operator\" >?</span><span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>DialogTitle<span class=\"token operator\" >></span>\n          <span class=\"token operator\" >&lt;</span>DialogContent<span class=\"token operator\" >></span>\n            <span class=\"token operator\" >&lt;</span>p<span class=\"token operator\" >></span>Allowing us to collect data will <span class=\"token keyword\" >let</span> us <span class=\"token keyword\" >get</span> you the information you want faster<span class=\"token punctuation\" >.</span><span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>p<span class=\"token operator\" >></span>\n          <span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>DialogContent<span class=\"token operator\" >></span>\n          <span class=\"token operator\" >&lt;</span>DialogActions fullWidth<span class=\"token operator\" >></span>\n            <span class=\"token operator\" >&lt;</span>Button type<span class=\"token operator\" >=</span><span class=\"token string\" >'button'</span><span class=\"token operator\" >></span>Agree<span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Button<span class=\"token operator\" >></span>\n            <span class=\"token operator\" >&lt;</span>Button type<span class=\"token operator\" >=</span><span class=\"token string\" >'button'</span> onClick<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleCloseDialog<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>Disagree<span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Button<span class=\"token operator\" >></span>\n          <span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>DialogActions<span class=\"token operator\" >></span>\n        <span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Dialog<span class=\"token operator\" >></span>\n      <span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>div<span class=\"token operator\" >></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\nclass Demo extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.state = {};\\n    this.handleOpenDialog = this.handleOpenDialog.bind(this);\\n    this.handleCloseDialog = this.handleCloseDialog.bind(this);\\n  }\\n\\n  handleOpenDialog() {\\n    this.setState({\\n      openDialog: true\\n    });\\n  }\\n\\n  handleCloseDialog() {\\n    this.setState({\\n      openDialog: false\\n    });\\n  }\\n\\n  render() {\\n    return (\\n      <div>\\n        <Button colored onClick={this.handleOpenDialog} raised ripple>Show Modal</Button>\\n        <Dialog open={this.state.openDialog}>\\n          <DialogTitle>Allow this site to collect usage data to improve your experience?</DialogTitle>\\n          <DialogContent>\\n            <p>Allowing us to collect data will let us get you the information you want faster.</p>\\n          </DialogContent>\\n          <DialogActions fullWidth>\\n            <Button type=&apos;button&apos;>Agree</Button>\\n            <Button type=&apos;button&apos; onClick={this.handleCloseDialog}>Disagree</Button>\\n          </DialogActions>\\n        </Dialog>\\n      </div>\\n    );\\n  }\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h3 id=\"dialog-with-cancel-event-handler\" class=\"mdl-typography--display-2\">Dialog with Cancel Event Handler</h3>\n<div id=\"demo-19\"></div>\n        <script class=\"demo-js\">\n        'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n{/* Cancel event is emitted when the user clicks \"Escape\" key while the modal is open.\n     It doesn't do anything by default.*/}\n\nvar Demo = function (_React$Component) {\n  _inherits(Demo, _React$Component);\n\n  function Demo(props) {\n    _classCallCheck(this, Demo);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));\n\n    _this.state = {};\n    _this.handleOpenDialog = _this.handleOpenDialog.bind(_this);\n    _this.handleCloseDialog = _this.handleCloseDialog.bind(_this);\n    return _this;\n  }\n\n  _createClass(Demo, [{\n    key: 'handleOpenDialog',\n    value: function handleOpenDialog() {\n      this.setState({\n        openDialog: true\n      });\n    }\n  }, {\n    key: 'handleCloseDialog',\n    value: function handleCloseDialog() {\n      this.setState({\n        openDialog: false\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          Button,\n          { colored: true, onClick: this.handleOpenDialog, onCancel: this.handleCloseDialog, raised: true, ripple: true },\n          'Show Dialog'\n        ),\n        React.createElement(\n          Dialog,\n          { open: this.state.openDialog, onCancel: this.handleCloseDialog },\n          React.createElement(\n            DialogTitle,\n            null,\n            'Allow data collection?'\n          ),\n          React.createElement(\n            DialogContent,\n            null,\n            React.createElement(\n              'p',\n              null,\n              'Allowing us to collect data will let us get you the information you want faster.'\n            )\n          ),\n          React.createElement(\n            DialogActions,\n            null,\n            React.createElement(\n              Button,\n              { type: 'button' },\n              'Agree'\n            ),\n            React.createElement(\n              Button,\n              { type: 'button', onClick: this.handleCloseDialog },\n              'Disagree'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Demo;\n}(React.Component);\n        var elem = React.createElement(Demo);\n        var cont = document.getElementById(\"demo-19\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Cancel event is emitted when the user clicks \"Escape\" key while the modal is open.\n    It doesn't do anything by default.*/</span><span class=\"token punctuation\" >}</span>\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >Demo</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >constructor</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >super</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleOpenDialog <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleOpenDialog<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleCloseDialog <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleCloseDialog<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >handleOpenDialog</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      openDialog<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >handleCloseDialog</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      openDialog<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token operator\" >&lt;</span>div<span class=\"token operator\" >></span>\n        <span class=\"token operator\" >&lt;</span>Button colored onClick<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleOpenDialog<span class=\"token punctuation\" >}</span> onCancel<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleCloseDialog<span class=\"token punctuation\" >}</span> raised ripple<span class=\"token operator\" >></span>Show Dialog<span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Button<span class=\"token operator\" >></span>\n        <span class=\"token operator\" >&lt;</span>Dialog open<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>openDialog<span class=\"token punctuation\" >}</span> onCancel<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleCloseDialog<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n          <span class=\"token operator\" >&lt;</span>DialogTitle<span class=\"token operator\" >></span>Allow data collection<span class=\"token operator\" >?</span><span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>DialogTitle<span class=\"token operator\" >></span>\n          <span class=\"token operator\" >&lt;</span>DialogContent<span class=\"token operator\" >></span>\n            <span class=\"token operator\" >&lt;</span>p<span class=\"token operator\" >></span>Allowing us to collect data will <span class=\"token keyword\" >let</span> us <span class=\"token keyword\" >get</span> you the information you want faster<span class=\"token punctuation\" >.</span><span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>p<span class=\"token operator\" >></span>\n          <span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>DialogContent<span class=\"token operator\" >></span>\n          <span class=\"token operator\" >&lt;</span>DialogActions<span class=\"token operator\" >></span>\n            <span class=\"token operator\" >&lt;</span>Button type<span class=\"token operator\" >=</span><span class=\"token string\" >'button'</span><span class=\"token operator\" >></span>Agree<span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Button<span class=\"token operator\" >></span>\n            <span class=\"token operator\" >&lt;</span>Button type<span class=\"token operator\" >=</span><span class=\"token string\" >'button'</span> onClick<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleCloseDialog<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>Disagree<span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Button<span class=\"token operator\" >></span>\n          <span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>DialogActions<span class=\"token operator\" >></span>\n        <span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Dialog<span class=\"token operator\" >></span>\n      <span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>div<span class=\"token operator\" >></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n{/* Cancel event is emitted when the user clicks \\&​quot;Escape\\&​quot; key while the modal is open.\\n    It doesn&apos;t do anything by default.*/}\\nclass Demo extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.state = {};\\n    this.handleOpenDialog = this.handleOpenDialog.bind(this);\\n    this.handleCloseDialog = this.handleCloseDialog.bind(this);\\n  }\\n\\n  handleOpenDialog() {\\n    this.setState({\\n      openDialog: true\\n    });\\n  }\\n\\n  handleCloseDialog() {\\n    this.setState({\\n      openDialog: false\\n    });\\n  }\\n\\n  render() {\\n    return (\\n      <div>\\n        <Button colored onClick={this.handleOpenDialog} onCancel={this.handleCloseDialog} raised ripple>Show Dialog</Button>\\n        <Dialog open={this.state.openDialog} onCancel={this.handleCloseDialog}>\\n          <DialogTitle>Allow data collection?</DialogTitle>\\n          <DialogContent>\\n            <p>Allowing us to collect data will let us get you the information you want faster.</p>\\n          </DialogContent>\\n          <DialogActions>\\n            <Button type=&apos;button&apos;>Agree</Button>\\n            <Button type=&apos;button&apos; onClick={this.handleCloseDialog}>Disagree</Button>\\n          </DialogActions>\\n        </Dialog>\\n      </div>\\n    );\\n  }\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Element</th>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">Dialog</td>\n<td style=\"text-align:left\">onCancel</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Defines the handler for the cancel event. (When the user press the &quot;Escape&quot; key)</td>\n<td style=\"text-align:left\">Optional. By default, the default behavior (closing the dialog) is prevented.</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Dialog</td>\n<td style=\"text-align:left\">open</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Set the open state of the dialog</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">DialogTitle</td>\n<td style=\"text-align:left\">component</td>\n<td style=\"text-align:left\">String, Element, Function</td>\n<td style=\"text-align:left\">Specify the custom component to use to render the element</td>\n<td style=\"text-align:left\">Optional. Default &#39;h4&#39;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">DialogActions</td>\n<td style=\"text-align:left\">fullWidth</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Apply the full-width effect to all children of dialog actions</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"react-mdl\" class=\"mdl-typography--display-4\">React-MDL</h1>\n<p>React-MDL is a React wrapper for <a href=\"http://www.getmdl.io\">Material Design Lite</a>, a set of material components maintained by Google.</p>\n<p>This documentation is actually built entirely with React-MDL. You&#39;ll find examples of the available components.</p>\n<p>If you want to experiment using codepen for example, you can find the React-MDL <a href=\"https://npmcdn.com/react-mdl/out/ReactMDL.js\">bundle JS file</a> and its <a href=\"https://npmcdn.com/react-mdl/out/ReactMDL.min.js\">minified version</a>. Don&#39;t forget to include React and React-DOM for your demos.</p>\n";

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"layout\" class=\"mdl-typography--display-4\">Layout</h1>\n<ul>\n<li><a href=\"#navigation-layout\">Navigation Layout</a></li>\n<li><a href=\"#grid\">Grid</a></li>\n<li><a href=\"#tabs\">Tabs</a></li>\n<li><a href=\"#footer\">Footer</a></li>\n</ul>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<h3 id=\"navigation-layout\" class=\"mdl-typography--display-2\">Navigation Layout</h3>\n<div id=\"demo-20\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    'div',\n    { style: { height: '300px', position: 'relative' } },\n    React.createElement(\n        Layout,\n        { style: { background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' } },\n        React.createElement(\n            Header,\n            { transparent: true, title: 'Title', style: { color: 'white' } },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                )\n            )\n        ),\n        React.createElement(\n            Drawer,\n            { title: 'Title' },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                )\n            )\n        ),\n        React.createElement(Content, null)\n    )\n);;\n        var cont = document.getElementById(\"demo-20\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Uses a transparent header that draws on top of the layout's background */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'300px'</span><span class=\"token punctuation\" >,</span> position<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'relative'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>background<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Header</span> <span class=\"token attr-name\" >transparent</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>color<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'white'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Header</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Drawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <div style={{height: &apos;300px&apos;, position: &apos;relative&apos;}}>\\n    <Layout style={{background: &apos;url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover&apos;}}>\\n        <Header transparent title=\\&​quot;Title\\&​quot; style={{color: &apos;white&apos;}}>\\n            <Navigation>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n            </Navigation>\\n        </Header>\\n        <Drawer title=\\&​quot;Title\\&​quot;>\\n            <Navigation>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n            </Navigation>\\n        </Drawer>\\n        <Content />\\n    </Layout>\\n</div>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-21\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    'div',\n    { style: { height: '300px', position: 'relative' } },\n    React.createElement(\n        Layout,\n        { fixedDrawer: true },\n        React.createElement(\n            Drawer,\n            { title: 'Title' },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                )\n            )\n        ),\n        React.createElement(Content, null)\n    )\n);;\n        var cont = document.getElementById(\"demo-21\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* No header, and the drawer stays open on larger screens (fixed drawer). */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'300px'</span><span class=\"token punctuation\" >,</span> position<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'relative'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span> <span class=\"token attr-name\" >fixedDrawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Drawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <div style={{height: &apos;300px&apos;, position: &apos;relative&apos;}}>\\n    <Layout fixedDrawer>\\n        <Drawer title=\\&​quot;Title\\&​quot;>\\n            <Navigation>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n            </Navigation>\\n        </Drawer>\\n        <Content />\\n    </Layout>\\n</div>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-22\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    'div',\n    { style: { height: '300px', position: 'relative' } },\n    React.createElement(\n        Layout,\n        { fixedHeader: true },\n        React.createElement(\n            Header,\n            { title: React.createElement(\n                    'span',\n                    null,\n                    React.createElement(\n                        'span',\n                        { style: { color: '#ddd' } },\n                        'Area / '\n                    ),\n                    React.createElement(\n                        'strong',\n                        null,\n                        'The Title'\n                    )\n                ) },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                )\n            )\n        ),\n        React.createElement(\n            Drawer,\n            { title: 'Title' },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                )\n            )\n        ),\n        React.createElement(Content, null)\n    )\n);;\n        var cont = document.getElementById(\"demo-22\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Always shows a header, even in smaller screens. */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'300px'</span><span class=\"token punctuation\" >,</span> position<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'relative'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span> <span class=\"token attr-name\" >fixedHeader</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Header</span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> color<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'#ddd'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Area <span class=\"token operator\" >/</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>strong</span><span class=\"token punctuation\" >></span></span>The Title<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>strong</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Header</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Drawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <div style={{height: &apos;300px&apos;, position: &apos;relative&apos;}}>\\n    <Layout fixedHeader>\\n        <Header title={<span><span style={{ color: &apos;#ddd&apos; }}>Area / </span><strong>The Title</strong></span>}>\\n            <Navigation>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n            </Navigation>\\n        </Header>\\n        <Drawer title=\\&​quot;Title\\&​quot;>\\n            <Navigation>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n            </Navigation>\\n        </Drawer>\\n        <Content />\\n    </Layout>\\n</div>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-23\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    'div',\n    { style: { height: '300px', position: 'relative' } },\n    React.createElement(\n        Layout,\n        { fixedHeader: true, fixedDrawer: true },\n        React.createElement(\n            Header,\n            { title: 'Title' },\n            React.createElement(Textfield, {\n                value: '',\n                onChange: () => {},\n                label: 'Search',\n                expandable: true,\n                expandableIcon: 'search'\n            })\n        ),\n        React.createElement(\n            Drawer,\n            { title: 'Title' },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                ),\n                React.createElement(\n                    'a',\n                    { href: '' },\n                    'Link'\n                )\n            )\n        ),\n        React.createElement(Content, null)\n    )\n);;\n        var cont = document.getElementById(\"demo-23\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* The drawer is always open in large screens. The header is always shown, even in small screens. */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'300px'</span><span class=\"token punctuation\" >,</span> position<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'relative'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span> <span class=\"token attr-name\" >fixedHeader</span> <span class=\"token attr-name\" >fixedDrawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Header</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n                <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span>\n                <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n                <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Search<span class=\"token punctuation\" >\"</span></span>\n                <span class=\"token attr-name\" >expandable</span>\n                <span class=\"token attr-name\" >expandableIcon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Header</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Drawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <div style={{height: &apos;300px&apos;, position: &apos;relative&apos;}}>\\n    <Layout fixedHeader fixedDrawer>\\n        <Header title=\\&​quot;Title\\&​quot;>\\n            <Textfield\\n                value=\\&​quot;\\&​quot;\\n                onChange={() => {}}\\n                label=\\&​quot;Search\\&​quot;\\n                expandable\\n                expandableIcon=\\&​quot;search\\&​quot;\\n            />\\n        </Header>\\n        <Drawer title=\\&​quot;Title\\&​quot;>\\n            <Navigation>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n            </Navigation>\\n        </Drawer>\\n        <Content />\\n    </Layout>\\n</div>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-24\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    \"div\",\n    { className: \"demo-big-content\" },\n    React.createElement(\n        Layout,\n        null,\n        React.createElement(\n            Header,\n            { title: \"Title\", scroll: true },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                )\n            )\n        ),\n        React.createElement(\n            Drawer,\n            { title: \"Title\" },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                )\n            )\n        ),\n        React.createElement(\n            Content,\n            null,\n            React.createElement(\"div\", { className: \"page-content\" })\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-24\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Uses a header that scrolls with the text, rather than staying locked at the top */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-big-content<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Header</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >scroll</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Header</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Drawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>page-content<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Content</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <div className=\\&​quot;demo-big-content\\&​quot;>\\n    <Layout>\\n        <Header title=\\&​quot;Title\\&​quot; scroll>\\n            <Navigation>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n            </Navigation>\\n        </Header>\\n        <Drawer title=\\&​quot;Title\\&​quot;>\\n            <Navigation>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n            </Navigation>\\n        </Drawer>\\n        <Content>\\n            <div className=\\&​quot;page-content\\&​quot; />\\n        </Content>\\n    </Layout>\\n</div>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-25\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    \"div\",\n    { className: \"demo-big-content\" },\n    React.createElement(\n        Layout,\n        null,\n        React.createElement(\n            Header,\n            { waterfall: true },\n            React.createElement(\n                HeaderRow,\n                { title: \"Title\" },\n                React.createElement(Textfield, {\n                    value: \"\",\n                    onChange: () => {},\n                    label: \"Search\",\n                    expandable: true,\n                    expandableIcon: \"search\"\n                })\n            ),\n            React.createElement(\n                HeaderRow,\n                null,\n                React.createElement(\n                    Navigation,\n                    null,\n                    React.createElement(\n                        \"a\",\n                        { href: \"\" },\n                        \"Link\"\n                    ),\n                    React.createElement(\n                        \"a\",\n                        { href: \"\" },\n                        \"Link\"\n                    ),\n                    React.createElement(\n                        \"a\",\n                        { href: \"\" },\n                        \"Link\"\n                    ),\n                    React.createElement(\n                        \"a\",\n                        { href: \"\" },\n                        \"Link\"\n                    )\n                )\n            )\n        ),\n        React.createElement(\n            Drawer,\n            { title: \"Title\" },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                )\n            )\n        ),\n        React.createElement(\n            Content,\n            null,\n            React.createElement(\"div\", { className: \"page-content\" })\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-25\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Uses a header that contracts as the page scrolls down. */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-big-content<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Header</span> <span class=\"token attr-name\" >waterfall</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HeaderRow</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n                    <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span>\n                    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n                    <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Search<span class=\"token punctuation\" >\"</span></span>\n                    <span class=\"token attr-name\" >expandable</span>\n                    <span class=\"token attr-name\" >expandableIcon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span>\n                <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>HeaderRow</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HeaderRow</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>HeaderRow</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Header</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Drawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>page-content<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Content</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <div className=\\&​quot;demo-big-content\\&​quot;>\\n    <Layout>\\n        <Header waterfall>\\n            <HeaderRow title=\\&​quot;Title\\&​quot;>\\n                <Textfield\\n                    value=\\&​quot;\\&​quot;\\n                    onChange={() => {}}\\n                    label=\\&​quot;Search\\&​quot;\\n                    expandable\\n                    expandableIcon=\\&​quot;search\\&​quot;\\n                />\\n            </HeaderRow>\\n            <HeaderRow>\\n                <Navigation>\\n                    <a href=\\&​quot;\\&​quot;>Link</a>\\n                    <a href=\\&​quot;\\&​quot;>Link</a>\\n                    <a href=\\&​quot;\\&​quot;>Link</a>\\n                    <a href=\\&​quot;\\&​quot;>Link</a>\\n                </Navigation>\\n            </HeaderRow>\\n        </Header>\\n        <Drawer title=\\&​quot;Title\\&​quot;>\\n            <Navigation>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n            </Navigation>\\n        </Drawer>\\n        <Content>\\n            <div className=\\&​quot;page-content\\&​quot; />\\n        </Content>\\n    </Layout>\\n</div>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-26\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    \"div\",\n    { className: \"demo-big-content\" },\n    React.createElement(\n        Layout,\n        null,\n        React.createElement(\n            Header,\n            { waterfall: true, hideTop: true },\n            React.createElement(\n                HeaderRow,\n                { title: \"Title\" },\n                React.createElement(Textfield, {\n                    value: \"\",\n                    onChange: () => {},\n                    label: \"Search\",\n                    expandable: true,\n                    expandableIcon: \"search\"\n                })\n            ),\n            React.createElement(\n                HeaderRow,\n                null,\n                React.createElement(\n                    Navigation,\n                    null,\n                    React.createElement(\n                        \"a\",\n                        { href: \"\" },\n                        \"Link\"\n                    ),\n                    React.createElement(\n                        \"a\",\n                        { href: \"\" },\n                        \"Link\"\n                    ),\n                    React.createElement(\n                        \"a\",\n                        { href: \"\" },\n                        \"Link\"\n                    ),\n                    React.createElement(\n                        \"a\",\n                        { href: \"\" },\n                        \"Link\"\n                    )\n                )\n            )\n        ),\n        React.createElement(\n            Drawer,\n            { title: \"Title\" },\n            React.createElement(\n                Navigation,\n                null,\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"\" },\n                    \"Link\"\n                )\n            )\n        ),\n        React.createElement(\n            Content,\n            null,\n            React.createElement(\"div\", { className: \"page-content\" })\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-26\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Hide the top part of the header when scrolling down */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-big-content<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Header</span> <span class=\"token attr-name\" >waterfall</span> <span class=\"token attr-name\" >hideTop</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HeaderRow</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n                    <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span>\n                    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n                    <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Search<span class=\"token punctuation\" >\"</span></span>\n                    <span class=\"token attr-name\" >expandable</span>\n                    <span class=\"token attr-name\" >expandableIcon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span>\n                <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>HeaderRow</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HeaderRow</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>HeaderRow</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Header</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Navigation</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Drawer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>page-content<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Content</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <div className=\\&​quot;demo-big-content\\&​quot;>\\n    <Layout>\\n        <Header waterfall hideTop>\\n            <HeaderRow title=\\&​quot;Title\\&​quot;>\\n                <Textfield\\n                    value=\\&​quot;\\&​quot;\\n                    onChange={() => {}}\\n                    label=\\&​quot;Search\\&​quot;\\n                    expandable\\n                    expandableIcon=\\&​quot;search\\&​quot;\\n                />\\n            </HeaderRow>\\n            <HeaderRow>\\n                <Navigation>\\n                    <a href=\\&​quot;\\&​quot;>Link</a>\\n                    <a href=\\&​quot;\\&​quot;>Link</a>\\n                    <a href=\\&​quot;\\&​quot;>Link</a>\\n                    <a href=\\&​quot;\\&​quot;>Link</a>\\n                </Navigation>\\n            </HeaderRow>\\n        </Header>\\n        <Drawer title=\\&​quot;Title\\&​quot;>\\n            <Navigation>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n                <a href=\\&​quot;\\&​quot;>Link</a>\\n            </Navigation>\\n        </Drawer>\\n        <Content>\\n            <div className=\\&​quot;page-content\\&​quot; />\\n        </Content>\\n    </Layout>\\n</div>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-27\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    'div',\n    { style: { height: '300px', position: 'relative' } },\n    React.createElement(\n        Layout,\n        { fixedHeader: true },\n        React.createElement(\n            Header,\n            null,\n            React.createElement(HeaderRow, { title: 'Title' }),\n            React.createElement(\n                HeaderTabs,\n                { activeTab: 2, onChange: tabId => {} },\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab1'\n                ),\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab2'\n                ),\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab3'\n                ),\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab4'\n                ),\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab5'\n                ),\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab6'\n                )\n            )\n        ),\n        React.createElement(Drawer, { title: 'Title' }),\n        React.createElement(\n            Content,\n            null,\n            React.createElement(\n                'div',\n                { className: 'page-content' },\n                'You can add logic to update the content of this container based on the \"activeTab\" receive in the `onChange` callback.'\n            )\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-27\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Simple header with scrollable tabs. */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'300px'</span><span class=\"token punctuation\" >,</span> position<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'relative'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span> <span class=\"token attr-name\" >fixedHeader</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Header</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HeaderRow</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HeaderTabs</span> <span class=\"token attr-name\" >activeTab</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>tabId<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab1<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab2<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab3<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab4<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab5<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab6<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>HeaderTabs</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Header</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>page-content<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>You can add logic to update the content <span class=\"token keyword\" >of</span> <span class=\"token keyword\" >this</span> container based on the <span class=\"token string\" >\"activeTab\"</span> receive <span class=\"token keyword\" >in</span> the <span class=\"token template-string\" ><span class=\"token string\" >`onChange`</span></span> callback<span class=\"token punctuation\" >.</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Content</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <div style={{height: &apos;300px&apos;, position: &apos;relative&apos;}}>\\n    <Layout fixedHeader>\\n        <Header>\\n            <HeaderRow title=\\&​quot;Title\\&​quot; />\\n            <HeaderTabs activeTab={2} onChange={(tabId) => {}}>\\n                <Tab>Tab1</Tab>\\n                <Tab>Tab2</Tab>\\n                <Tab>Tab3</Tab>\\n                <Tab>Tab4</Tab>\\n                <Tab>Tab5</Tab>\\n                <Tab>Tab6</Tab>\\n            </HeaderTabs>\\n        </Header>\\n        <Drawer title=\\&​quot;Title\\&​quot; />\\n        <Content>\\n            <div className=\\&​quot;page-content\\&​quot;>You can add logic to update the content of this container based on the \\&​quot;activeTab\\&​quot; receive in the `onChange` callback.</div>\\n        </Content>\\n    </Layout>\\n</div>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-28\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    'div',\n    { style: { height: '300px', position: 'relative' } },\n    React.createElement(\n        Layout,\n        { fixedHeader: true, fixedTabs: true },\n        React.createElement(\n            Header,\n            null,\n            React.createElement(HeaderRow, { title: 'Title' }),\n            React.createElement(\n                HeaderTabs,\n                { activeTab: 1, onChange: tabId => {} },\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab1'\n                ),\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab2'\n                ),\n                React.createElement(\n                    Tab,\n                    null,\n                    'Tab3'\n                )\n            )\n        ),\n        React.createElement(Drawer, { title: 'Title' }),\n        React.createElement(\n            Content,\n            null,\n            React.createElement(\n                'div',\n                { className: 'page-content' },\n                'You can add logic to update the content of this container based on the \"activeTab\" receive in the `onChange` callback.'\n            )\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-28\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Simple header with fixed tabs. */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>height<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'300px'</span><span class=\"token punctuation\" >,</span> position<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'relative'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Layout</span> <span class=\"token attr-name\" >fixedHeader</span> <span class=\"token attr-name\" >fixedTabs</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Header</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HeaderRow</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HeaderTabs</span> <span class=\"token attr-name\" >activeTab</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>tabId<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab1<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab2<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Tab3<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>HeaderTabs</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Header</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Drawer</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Content</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>page-content<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>You can add logic to update the content <span class=\"token keyword\" >of</span> <span class=\"token keyword\" >this</span> container based on the <span class=\"token string\" >\"activeTab\"</span> receive <span class=\"token keyword\" >in</span> the <span class=\"token template-string\" ><span class=\"token string\" >`onChange`</span></span> callback<span class=\"token punctuation\" >.</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Content</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Layout</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <div style={{height: &apos;300px&apos;, position: &apos;relative&apos;}}>\\n    <Layout fixedHeader fixedTabs>\\n        <Header>\\n            <HeaderRow title=\\&​quot;Title\\&​quot; />\\n            <HeaderTabs activeTab={1} onChange={(tabId) => {}}>\\n                <Tab>Tab1</Tab>\\n                <Tab>Tab2</Tab>\\n                <Tab>Tab3</Tab>\\n            </HeaderTabs>\\n        </Header>\\n        <Drawer title=\\&​quot;Title\\&​quot; />\\n        <Content>\\n            <div className=\\&​quot;page-content\\&​quot;>You can add logic to update the content of this container based on the \\&​quot;activeTab\\&​quot; receive in the `onChange` callback.</div>\\n        </Content>\\n    </Layout>\\n</div>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Element</th>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">Drawer</td>\n<td style=\"text-align:left\">title</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Set the Drawer title</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Layout</td>\n<td style=\"text-align:left\">fixedDrawer</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Makes the drawer always visible and open in larger screens</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Layout</td>\n<td style=\"text-align:left\">fixedHeader</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Makes the header always visible, even in small screens</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Layout</td>\n<td style=\"text-align:left\">fixedTabs</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Uses fixed tabs instead of the default scrollable tabs</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Header</td>\n<td style=\"text-align:left\">scroll</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Makes the header scroll with the content</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Header</td>\n<td style=\"text-align:left\">seamed</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Uses a header without a shadow</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Header</td>\n<td style=\"text-align:left\">title</td>\n<td style=\"text-align:left\">Any</td>\n<td style=\"text-align:left\">Set the layout title</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Header</td>\n<td style=\"text-align:left\">transparent</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Makes header transparent</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Header</td>\n<td style=\"text-align:left\">waterfall</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Allows a &quot;waterfall&quot; effect with multiple header lines</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Header</td>\n<td style=\"text-align:left\">hideTop</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Hide the top part of the header when used with <code>waterfall</code></td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">HeaderRow</td>\n<td style=\"text-align:left\">title</td>\n<td style=\"text-align:left\">Any</td>\n<td style=\"text-align:left\">Set the layout title</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Content</td>\n<td style=\"text-align:left\">component</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\"></td>\n<td style=\"text-align:left\">Element</td>\n<td></td>\n<td>Function</td>\n<td>Specify the custom component to use to render the element</td>\n<td>Optional. Default &#39;div&#39;</td>\n</tr>\n</tbody>\n        </table>\n<h3 id=\"grid\" class=\"mdl-typography--display-2\">Grid</h3>\n<style>.demo-grid-ruler .mdl-cell,\n.demo-grid-1 .mdl-cell,\n.demo-grid-2 .mdl-cell,\n.demo-grid-3 .mdl-cell {\n  box-sizing: border-box;\n  background-color: #BDBDBD;\n  height: 100px;\n  padding-left: 8px;\n  padding-top: 4px;\n  color: white;\n}\n.demo-grid-ruler.demo-grid-ruler .mdl-cell {\n  height: 50px;\n}</style><div id=\"demo-29\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    'div',\n    { style: { width: '80%', margin: 'auto' } },\n    React.createElement(\n        Grid,\n        { className: 'demo-grid-ruler' },\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        ),\n        React.createElement(\n            Cell,\n            { col: 1 },\n            '1'\n        )\n    ),\n    React.createElement(\n        Grid,\n        { className: 'demo-grid-1' },\n        React.createElement(\n            Cell,\n            { col: 4 },\n            '4'\n        ),\n        React.createElement(\n            Cell,\n            { col: 4 },\n            '4'\n        ),\n        React.createElement(\n            Cell,\n            { col: 4 },\n            '4'\n        )\n    ),\n    React.createElement(\n        Grid,\n        { className: 'demo-grid-2' },\n        React.createElement(\n            Cell,\n            { col: 6 },\n            '6'\n        ),\n        React.createElement(\n            Cell,\n            { col: 4 },\n            '4'\n        ),\n        React.createElement(\n            Cell,\n            { col: 2 },\n            '2'\n        )\n    ),\n    React.createElement(\n        Grid,\n        { className: 'demo-grid-3' },\n        React.createElement(\n            Cell,\n            { col: 6, tablet: 8 },\n            '6 (8 tablet)'\n        ),\n        React.createElement(\n            Cell,\n            { col: 4, tablet: 6 },\n            '4 (6 tablet)'\n        ),\n        React.createElement(\n            Cell,\n            { col: 2, phone: 4 },\n            '2 (4 phone)'\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-29\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'80%'</span><span class=\"token punctuation\" >,</span> margin<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'auto'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Grid</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-grid-ruler<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Grid</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Grid</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-grid-1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Grid</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Grid</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-grid-2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >2</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Grid</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Grid</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-grid-3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >tablet</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >8</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >6</span> <span class=\"token punctuation\" >(</span><span class=\"token number\" >8</span> tablet<span class=\"token punctuation\" >)</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >tablet</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >4</span> <span class=\"token punctuation\" >(</span><span class=\"token number\" >6</span> tablet<span class=\"token punctuation\" >)</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cell</span> <span class=\"token attr-name\" >col</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >phone</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >2</span> <span class=\"token punctuation\" >(</span><span class=\"token number\" >4</span> phone<span class=\"token punctuation\" >)</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cell</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Grid</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <div style={{width: &apos;80%&apos;, margin: &apos;auto&apos;}}>\\n    <Grid className=\\&​quot;demo-grid-ruler\\&​quot;>\\n        <Cell col={1}>1</Cell>\\n        <Cell col={1}>1</Cell>\\n        <Cell col={1}>1</Cell>\\n        <Cell col={1}>1</Cell>\\n        <Cell col={1}>1</Cell>\\n        <Cell col={1}>1</Cell>\\n        <Cell col={1}>1</Cell>\\n        <Cell col={1}>1</Cell>\\n        <Cell col={1}>1</Cell>\\n        <Cell col={1}>1</Cell>\\n        <Cell col={1}>1</Cell>\\n        <Cell col={1}>1</Cell>\\n    </Grid>\\n    <Grid className=\\&​quot;demo-grid-1\\&​quot;>\\n        <Cell col={4}>4</Cell>\\n        <Cell col={4}>4</Cell>\\n        <Cell col={4}>4</Cell>\\n    </Grid>\\n    <Grid className=\\&​quot;demo-grid-2\\&​quot;>\\n        <Cell col={6}>6</Cell>\\n        <Cell col={4}>4</Cell>\\n        <Cell col={2}>2</Cell>\\n    </Grid>\\n    <Grid className=\\&​quot;demo-grid-3\\&​quot;>\\n        <Cell col={6} tablet={8}>6 (8 tablet)</Cell>\\n        <Cell col={4} tablet={6}>4 (6 tablet)</Cell>\\n        <Cell col={2} phone={4}>2 (4 phone)</Cell>\\n    </Grid>\\n</div>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Element</th>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">Grid</td>\n<td style=\"text-align:left\">component</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\"></td>\n<td style=\"text-align:left\">Element</td>\n<td></td>\n<td>Function</td>\n<td>Specify the custom component to use to render the grid</td>\n<td>Optional. Default &#39;div&#39;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Grid</td>\n<td style=\"text-align:left\">noSpacing</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Removes the margins between the cells.</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Grid</td>\n<td style=\"text-align:left\">shadow</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Defines the shadow depth</td>\n<td style=\"text-align:left\">Optional, Default 0. Must be between 0 and 6</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Cell</td>\n<td style=\"text-align:left\">align</td>\n<td style=\"text-align:left\">String[top, middle, bottom, stretch]</td>\n<td style=\"text-align:left\">Set the cell alignment</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Cell</td>\n<td style=\"text-align:left\">col</td>\n<td style=\"text-align:left\">Number[1..12]</td>\n<td style=\"text-align:left\">Set the column size</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Cell</td>\n<td style=\"text-align:left\">component</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\"></td>\n<td style=\"text-align:left\">Element</td>\n<td></td>\n<td>Function</td>\n<td>Specify the custom component to use to render the cell</td>\n<td>Optional. Default &#39;div&#39;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Cell</td>\n<td style=\"text-align:left\">hideDesktop</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Hide the cell in desktop mode</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Cell</td>\n<td style=\"text-align:left\">hidePhone</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Hide the cell in phone mode</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Cell</td>\n<td style=\"text-align:left\">hideTablet</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Hide the cell in tablet mode</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Cell</td>\n<td style=\"text-align:left\">phone</td>\n<td style=\"text-align:left\">Number[1..12]</td>\n<td style=\"text-align:left\">Set the column size in phone mode</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Cell</td>\n<td style=\"text-align:left\">tablet</td>\n<td style=\"text-align:left\">Number[1..12]</td>\n<td style=\"text-align:left\">Set the column size in tablet mode</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Cell</td>\n<td style=\"text-align:left\">shadow</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Defines the shadow depth</td>\n<td style=\"text-align:left\">Optional, Default 0. Must be between 0 and 6</td>\n</tr>\n</tbody>\n        </table>\n<h3 id=\"tabs\" class=\"mdl-typography--display-2\">Tabs</h3>\n<style>.demo-tabs {\n    width: 70%;\n    margin: auto;\n}\n.demo-tabs .content {\n    height: 100px;\n}</style><div id=\"demo-30\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    \"div\",\n    { className: \"demo-tabs\" },\n    React.createElement(\n        Tabs,\n        { activeTab: 1, onChange: tabId => {}, ripple: true },\n        React.createElement(\n            Tab,\n            null,\n            \"Starks\"\n        ),\n        React.createElement(\n            Tab,\n            null,\n            \"Lannisters\"\n        ),\n        React.createElement(\n            Tab,\n            null,\n            \"Targaryens\"\n        )\n    ),\n    React.createElement(\n        \"section\",\n        null,\n        React.createElement(\n            \"div\",\n            { className: \"content\" },\n            \"You can add logic to update the content of this container based on the \\\"activeTab\\\" receive in the `onChange` callback.\"\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-30\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-tabs<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tabs</span> <span class=\"token attr-name\" >activeTab</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>tabId<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Starks<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Lannisters<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tab</span><span class=\"token punctuation\" >></span></span>Targaryens<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tab</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tabs</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>section</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>content<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>You can add logic to update the content <span class=\"token keyword\" >of</span> <span class=\"token keyword\" >this</span> container based on the <span class=\"token string\" >\"activeTab\"</span> receive <span class=\"token keyword\" >in</span> the <span class=\"token template-string\" ><span class=\"token string\" >`onChange`</span></span> callback<span class=\"token punctuation\" >.</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>section</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <div className=\\&​quot;demo-tabs\\&​quot;>\\n    <Tabs activeTab={1} onChange={(tabId) => {}} ripple>\\n        <Tab>Starks</Tab>\\n        <Tab>Lannisters</Tab>\\n        <Tab>Targaryens</Tab>\\n    </Tabs>\\n    <section>\\n        <div className=\\&​quot;content\\&​quot;>You can add logic to update the content of this container based on the \\&​quot;activeTab\\&​quot; receive in the `onChange` callback.</div>\\n    </section>\\n</div>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Element</th>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">Tabs</td>\n<td style=\"text-align:left\">activeTab</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Set the active tab</td>\n<td style=\"text-align:left\">Optional, default 0</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Tabs</td>\n<td style=\"text-align:left\">onChange</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Set the change callback</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Tabs</td>\n<td style=\"text-align:left\">ripple</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies ripples effect on tabs</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Tabs</td>\n<td style=\"text-align:left\">tabBarProps</td>\n<td style=\"text-align:left\">Object</td>\n<td style=\"text-align:left\">Pass Props to the TabBar Element</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n<h3 id=\"footer\" class=\"mdl-typography--display-2\">Footer</h3>\n<div id=\"demo-31\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Footer,\n    { size: \"mega\" },\n    React.createElement(\n        FooterSection,\n        { type: \"middle\" },\n        React.createElement(\n            FooterDropDownSection,\n            { title: \"Features\" },\n            React.createElement(\n                FooterLinkList,\n                null,\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"About\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Terms\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Partners\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Updates\"\n                )\n            )\n        ),\n        React.createElement(\n            FooterDropDownSection,\n            { title: \"Details\" },\n            React.createElement(\n                FooterLinkList,\n                null,\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Specs\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Tools\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Resources\"\n                )\n            )\n        ),\n        React.createElement(\n            FooterDropDownSection,\n            { title: \"Technology\" },\n            React.createElement(\n                FooterLinkList,\n                null,\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"How it works\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Patterns\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Usage\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Products\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Contracts\"\n                )\n            )\n        ),\n        React.createElement(\n            FooterDropDownSection,\n            { title: \"FAQ\" },\n            React.createElement(\n                FooterLinkList,\n                null,\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Questions\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Answers\"\n                ),\n                React.createElement(\n                    \"a\",\n                    { href: \"#\" },\n                    \"Contact Us\"\n                )\n            )\n        )\n    ),\n    React.createElement(\n        FooterSection,\n        { type: \"bottom\", logo: \"Title\" },\n        React.createElement(\n            FooterLinkList,\n            null,\n            React.createElement(\n                \"a\",\n                { href: \"#\" },\n                \"Help\"\n            ),\n            React.createElement(\n                \"a\",\n                { href: \"#\" },\n                \"Privacy & Terms\"\n            )\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-31\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Footer</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mega<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterSection</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>middle<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterDropDownSection</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Features<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>About<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Terms<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Partners<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Updates<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterDropDownSection</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterDropDownSection</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Details<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Specs<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Tools<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Resources<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterDropDownSection</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterDropDownSection</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Technology<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>How it works<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Patterns<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Usage<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Products<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Contracts<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterDropDownSection</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterDropDownSection</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>FAQ<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Questions<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Answers<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Contact Us<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterDropDownSection</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterSection</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterSection</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >logo</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Help<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Privacy <span class=\"token operator\" >&amp;</span> Terms<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterSection</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Footer</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Footer size=\\&​quot;mega\\&​quot;>\\n    <FooterSection type=\\&​quot;middle\\&​quot;>\\n        <FooterDropDownSection title=\\&​quot;Features\\&​quot;>\\n            <FooterLinkList>\\n                <a href=\\&​quot;#\\&​quot;>About</a>\\n                <a href=\\&​quot;#\\&​quot;>Terms</a>\\n                <a href=\\&​quot;#\\&​quot;>Partners</a>\\n                <a href=\\&​quot;#\\&​quot;>Updates</a>\\n            </FooterLinkList>\\n        </FooterDropDownSection>\\n        <FooterDropDownSection title=\\&​quot;Details\\&​quot;>\\n            <FooterLinkList>\\n                <a href=\\&​quot;#\\&​quot;>Specs</a>\\n                <a href=\\&​quot;#\\&​quot;>Tools</a>\\n                <a href=\\&​quot;#\\&​quot;>Resources</a>\\n            </FooterLinkList>\\n        </FooterDropDownSection>\\n        <FooterDropDownSection title=\\&​quot;Technology\\&​quot;>\\n            <FooterLinkList>\\n                <a href=\\&​quot;#\\&​quot;>How it works</a>\\n                <a href=\\&​quot;#\\&​quot;>Patterns</a>\\n                <a href=\\&​quot;#\\&​quot;>Usage</a>\\n                <a href=\\&​quot;#\\&​quot;>Products</a>\\n                <a href=\\&​quot;#\\&​quot;>Contracts</a>\\n            </FooterLinkList>\\n        </FooterDropDownSection>\\n        <FooterDropDownSection title=\\&​quot;FAQ\\&​quot;>\\n            <FooterLinkList>\\n                <a href=\\&​quot;#\\&​quot;>Questions</a>\\n                <a href=\\&​quot;#\\&​quot;>Answers</a>\\n                <a href=\\&​quot;#\\&​quot;>Contact Us</a>\\n            </FooterLinkList>\\n        </FooterDropDownSection>\\n    </FooterSection>\\n    <FooterSection type=\\&​quot;bottom\\&​quot; logo=\\&​quot;Title\\&​quot;>\\n        <FooterLinkList>\\n            <a href=\\&​quot;#\\&​quot;>Help</a>\\n            <a href=\\&​quot;#\\&​quot;>Privacy & Terms</a>\\n        </FooterLinkList>\\n    </FooterSection>\\n</Footer>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-32\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Footer,\n    { size: \"mini\" },\n    React.createElement(\n        FooterSection,\n        { type: \"left\", logo: \"Title\" },\n        React.createElement(\n            FooterLinkList,\n            null,\n            React.createElement(\n                \"a\",\n                { href: \"#\" },\n                \"Help\"\n            ),\n            React.createElement(\n                \"a\",\n                { href: \"#\" },\n                \"Privacy & Terms\"\n            )\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-32\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Footer</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mini<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterSection</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >logo</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Help<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Privacy <span class=\"token operator\" >&amp;</span> Terms<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterLinkList</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FooterSection</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Footer</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Footer size=\\&​quot;mini\\&​quot;>\\n    <FooterSection type=\\&​quot;left\\&​quot; logo=\\&​quot;Title\\&​quot;>\\n        <FooterLinkList>\\n            <a href=\\&​quot;#\\&​quot;>Help</a>\\n            <a href=\\&​quot;#\\&​quot;>Privacy & Terms</a>\\n        </FooterLinkList>\\n    </FooterSection>\\n</Footer>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Element</th>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">Footer</td>\n<td style=\"text-align:left\">size</td>\n<td style=\"text-align:left\">String (mini, mega)</td>\n<td style=\"text-align:left\">Set the size of the footer</td>\n<td style=\"text-align:left\">Optional, default &quot;mega&quot;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">FooterSection</td>\n<td style=\"text-align:left\">logo</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Set the &quot;logo&quot; name</td>\n<td style=\"text-align:left\">Optional, used only in the mini footer</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">FooterSection</td>\n<td style=\"text-align:left\">type</td>\n<td style=\"text-align:left\">String (top, middle, bottom, left, right)</td>\n<td style=\"text-align:left\">Set the section type</td>\n<td style=\"text-align:left\">Optional, default left</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">FooterDropDownSection</td>\n<td style=\"text-align:left\">title</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Set the &quot;logo&quot; name</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"lists\" class=\"mdl-typography--display-4\">Lists</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<h3 id=\"simple-list\" class=\"mdl-typography--display-2\">Simple list</h3>\n<div id=\"demo-33\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n  List,\n  null,\n  React.createElement(\n    ListItem,\n    null,\n    \"Bryan Cranston\"\n  ),\n  React.createElement(\n    ListItem,\n    null,\n    \"Aaron Paul\"\n  ),\n  React.createElement(\n    ListItem,\n    null,\n    \"Bob Odenkirk\"\n  )\n);;\n        var cont = document.getElementById(\"demo-33\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>List</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span><span class=\"token punctuation\" >></span></span>Bryan Cranston<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span><span class=\"token punctuation\" >></span></span>Aaron Paul<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span><span class=\"token punctuation\" >></span></span>Bob Odenkirk<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>List</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <List>\\n  <ListItem>Bryan Cranston</ListItem>\\n  <ListItem>Aaron Paul</ListItem>\\n  <ListItem>Bob Odenkirk</ListItem>\\n</List>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h3 id=\"simple-list-with-icon\" class=\"mdl-typography--display-2\">Simple list with icon</h3>\n<div id=\"demo-34\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n  List,\n  null,\n  React.createElement(\n    ListItem,\n    null,\n    React.createElement(\n      ListItemContent,\n      { icon: \"person\" },\n      \"Bryan Cranston\"\n    )\n  ),\n  React.createElement(\n    ListItem,\n    null,\n    React.createElement(\n      ListItemContent,\n      { icon: \"person\" },\n      \"Aaron Paul\"\n    )\n  ),\n  React.createElement(\n    ListItem,\n    null,\n    React.createElement(\n      ListItemContent,\n      { icon: \"person\" },\n      \"Bob Odenkirk\"\n    )\n  )\n);;\n        var cont = document.getElementById(\"demo-34\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>List</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemContent</span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>person<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Bryan Cranston<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemContent</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemContent</span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>person<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Aaron Paul<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemContent</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemContent</span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>person<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Bob Odenkirk<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemContent</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>List</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <List>\\n  <ListItem>\\n    <ListItemContent icon=\\&​quot;person\\&​quot;>Bryan Cranston</ListItemContent>\\n  </ListItem>\\n  <ListItem>\\n    <ListItemContent icon=\\&​quot;person\\&​quot;>Aaron Paul</ListItemContent>\\n  </ListItem>\\n  <ListItem>\\n    <ListItemContent icon=\\&​quot;person\\&​quot;>Bob Odenkirk</ListItemContent>\\n  </ListItem>\\n</List>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h3 id=\"list-with-avatar-and-simple-action\" class=\"mdl-typography--display-2\">List with avatar and simple action</h3>\n<div id=\"demo-35\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n  List,\n  { style: { width: '300px' } },\n  React.createElement(\n    ListItem,\n    null,\n    React.createElement(\n      ListItemContent,\n      { avatar: \"person\" },\n      \"Bryan Cranston\"\n    ),\n    React.createElement(\n      ListItemAction,\n      null,\n      React.createElement(\n        \"a\",\n        { href: \"#\" },\n        React.createElement(Icon, { name: \"star\" })\n      )\n    )\n  ),\n  React.createElement(\n    ListItem,\n    null,\n    React.createElement(\n      ListItemContent,\n      { avatar: \"person\" },\n      \"Aaron Paul\"\n    ),\n    React.createElement(\n      ListItemAction,\n      null,\n      React.createElement(\n        \"a\",\n        { href: \"#\" },\n        React.createElement(Icon, { name: \"star\" })\n      )\n    )\n  ),\n  React.createElement(\n    ListItem,\n    null,\n    React.createElement(\n      ListItemContent,\n      { avatar: \"person\" },\n      \"Bob Odenkirk\"\n    ),\n    React.createElement(\n      ListItemAction,\n      null,\n      React.createElement(\n        \"a\",\n        { href: \"#\" },\n        React.createElement(Icon, { name: \"star\" })\n      )\n    )\n  )\n);;\n        var cont = document.getElementById(\"demo-35\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>List</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'300px'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemContent</span> <span class=\"token attr-name\" >avatar</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>person<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Bryan Cranston<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemContent</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>star<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemContent</span> <span class=\"token attr-name\" >avatar</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>person<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Aaron Paul<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemContent</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>star<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemContent</span> <span class=\"token attr-name\" >avatar</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>person<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Bob Odenkirk<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemContent</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>star<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>List</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <List style={{width: &apos;300px&apos;}}>\\n  <ListItem>\\n    <ListItemContent avatar=\\&​quot;person\\&​quot;>Bryan Cranston</ListItemContent>\\n    <ListItemAction>\\n      <a href=\\&​quot;#\\&​quot;><Icon name=\\&​quot;star\\&​quot; /></a>\\n    </ListItemAction>\\n  </ListItem>\\n  <ListItem>\\n    <ListItemContent avatar=\\&​quot;person\\&​quot;>Aaron Paul</ListItemContent>\\n    <ListItemAction>\\n      <a href=\\&​quot;#\\&​quot;><Icon name=\\&​quot;star\\&​quot; /></a>\\n    </ListItemAction>\\n  </ListItem>\\n  <ListItem>\\n    <ListItemContent avatar=\\&​quot;person\\&​quot;>Bob Odenkirk</ListItemContent>\\n    <ListItemAction>\\n      <a href=\\&​quot;#\\&​quot;><Icon name=\\&​quot;star\\&​quot; /></a>\\n    </ListItemAction>\\n  </ListItem>\\n</List>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h3 id=\"list-with-avatar-and-complex-action\" class=\"mdl-typography--display-2\">List with avatar and complex action</h3>\n<div id=\"demo-36\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n  List,\n  { style: { width: '300px' } },\n  React.createElement(\n    ListItem,\n    null,\n    React.createElement(\n      ListItemContent,\n      { avatar: \"person\" },\n      \"Bryan Cranston\"\n    ),\n    React.createElement(\n      ListItemAction,\n      null,\n      React.createElement(Checkbox, { defaultChecked: true })\n    )\n  ),\n  React.createElement(\n    ListItem,\n    null,\n    React.createElement(\n      ListItemContent,\n      { avatar: \"person\" },\n      \"Aaron Paul\"\n    ),\n    React.createElement(\n      ListItemAction,\n      null,\n      React.createElement(Radio, { value: false })\n    )\n  ),\n  React.createElement(\n    ListItem,\n    null,\n    React.createElement(\n      ListItemContent,\n      { avatar: \"person\" },\n      \"Bob Odenkirk\"\n    ),\n    React.createElement(\n      ListItemAction,\n      null,\n      React.createElement(Switch, { defaultChecked: true })\n    )\n  )\n);;\n        var cont = document.getElementById(\"demo-36\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>List</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'300px'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemContent</span> <span class=\"token attr-name\" >avatar</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>person<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Bryan Cranston<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemContent</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Checkbox</span> <span class=\"token attr-name\" >defaultChecked</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemContent</span> <span class=\"token attr-name\" >avatar</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>person<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Aaron Paul<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemContent</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio</span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token boolean\" >false</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemContent</span> <span class=\"token attr-name\" >avatar</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>person<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Bob Odenkirk<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemContent</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >defaultChecked</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>List</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <List style={{width: &apos;300px&apos;}}>\\n  <ListItem>\\n    <ListItemContent avatar=\\&​quot;person\\&​quot;>Bryan Cranston</ListItemContent>\\n    <ListItemAction>\\n      <Checkbox defaultChecked />\\n    </ListItemAction>\\n  </ListItem>\\n  <ListItem>\\n    <ListItemContent avatar=\\&​quot;person\\&​quot;>Aaron Paul</ListItemContent>\\n    <ListItemAction>\\n      <Radio value={false} />\\n    </ListItemAction>\\n  </ListItem>\\n  <ListItem>\\n    <ListItemContent avatar=\\&​quot;person\\&​quot;>Bob Odenkirk</ListItemContent>\\n    <ListItemAction>\\n      <Switch defaultChecked />\\n    </ListItemAction>\\n  </ListItem>\\n</List>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h3 id=\"two-line-list\" class=\"mdl-typography--display-2\">Two line list</h3>\n<div id=\"demo-37\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n  List,\n  { style: { width: '300px' } },\n  React.createElement(\n    ListItem,\n    { twoLine: true },\n    React.createElement(\n      ListItemContent,\n      { avatar: \"person\", subtitle: \"62 episodes\" },\n      \"Bryan Cranston\"\n    ),\n    React.createElement(\n      ListItemAction,\n      { info: \"Actor\" },\n      React.createElement(\n        \"a\",\n        { href: \"#\" },\n        React.createElement(Icon, { name: \"star\" })\n      )\n    )\n  ),\n  React.createElement(\n    ListItem,\n    { twoLine: true },\n    React.createElement(\n      ListItemContent,\n      { avatar: \"person\", subtitle: \"62 episodes\" },\n      \"Aaron Paul\"\n    ),\n    React.createElement(\n      ListItemAction,\n      null,\n      React.createElement(\n        \"a\",\n        { href: \"#\" },\n        React.createElement(Icon, { name: \"star\" })\n      )\n    )\n  ),\n  React.createElement(\n    ListItem,\n    { twoLine: true },\n    React.createElement(\n      ListItemContent,\n      { avatar: \"person\", subtitle: \"62 episodes\" },\n      \"Bob Odenkirk\"\n    ),\n    React.createElement(\n      ListItemAction,\n      null,\n      React.createElement(\n        \"a\",\n        { href: \"#\" },\n        React.createElement(Icon, { name: \"star\" })\n      )\n    )\n  )\n);;\n        var cont = document.getElementById(\"demo-37\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>List</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'300px'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span> <span class=\"token attr-name\" >twoLine</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemContent</span> <span class=\"token attr-name\" >avatar</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>person<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >subtitle</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>62</span> <span class=\"token attr-name\" >episodes\"</span><span class=\"token punctuation\" >></span></span>Bryan Cranston<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemContent</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemAction</span> <span class=\"token attr-name\" >info</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Actor<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>star<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span> <span class=\"token attr-name\" >twoLine</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemContent</span> <span class=\"token attr-name\" >avatar</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>person<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >subtitle</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>62</span> <span class=\"token attr-name\" >episodes\"</span><span class=\"token punctuation\" >></span></span>Aaron Paul<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemContent</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>star<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span> <span class=\"token attr-name\" >twoLine</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemContent</span> <span class=\"token attr-name\" >avatar</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>person<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >subtitle</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>62</span> <span class=\"token attr-name\" >episodes\"</span><span class=\"token punctuation\" >></span></span>Bob Odenkirk<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemContent</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>star<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>List</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <List style={{width: &apos;300px&apos;}}>\\n  <ListItem twoLine>\\n    <ListItemContent avatar=\\&​quot;person\\&​quot; subtitle=\\&​quot;62 episodes\\&​quot;>Bryan Cranston</ListItemContent>\\n    <ListItemAction info=\\&​quot;Actor\\&​quot;>\\n      <a href=\\&​quot;#\\&​quot;><Icon name=\\&​quot;star\\&​quot; /></a>\\n    </ListItemAction>\\n  </ListItem>\\n  <ListItem twoLine>\\n    <ListItemContent avatar=\\&​quot;person\\&​quot; subtitle=\\&​quot;62 episodes\\&​quot;>Aaron Paul</ListItemContent>\\n    <ListItemAction>\\n      <a href=\\&​quot;#\\&​quot;><Icon name=\\&​quot;star\\&​quot; /></a>\\n    </ListItemAction>\\n  </ListItem>\\n  <ListItem twoLine>\\n    <ListItemContent avatar=\\&​quot;person\\&​quot; subtitle=\\&​quot;62 episodes\\&​quot;>Bob Odenkirk</ListItemContent>\\n    <ListItemAction>\\n      <a href=\\&​quot;#\\&​quot;><Icon name=\\&​quot;star\\&​quot; /></a>\\n    </ListItemAction>\\n  </ListItem>\\n</List>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h3 id=\"three-line-list\" class=\"mdl-typography--display-2\">Three line list</h3>\n<div id=\"demo-38\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n  List,\n  { style: { width: '650px' } },\n  React.createElement(\n    ListItem,\n    { threeLine: true },\n    React.createElement(\n      ListItemContent,\n      { avatar: \"person\", subtitle: \"Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.\" },\n      \"Bryan Cranston\"\n    ),\n    React.createElement(\n      ListItemAction,\n      null,\n      React.createElement(\n        \"a\",\n        { href: \"#\" },\n        React.createElement(Icon, { name: \"star\" })\n      )\n    )\n  ),\n  React.createElement(\n    ListItem,\n    { threeLine: true },\n    React.createElement(\n      ListItemContent,\n      { avatar: \"person\", subtitle: \"Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the Need For Speed Movie.\" },\n      \"Aaron Paul\"\n    ),\n    React.createElement(\n      ListItemAction,\n      null,\n      React.createElement(\n        \"a\",\n        { href: \"#\" },\n        React.createElement(Icon, { name: \"star\" })\n      )\n    )\n  ),\n  React.createElement(\n    ListItem,\n    { threeLine: true },\n    React.createElement(\n      ListItemContent,\n      { avatar: \"person\", subtitle: \"Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.\" },\n      \"Bob Odenkirk\"\n    ),\n    React.createElement(\n      ListItemAction,\n      null,\n      React.createElement(\n        \"a\",\n        { href: \"#\" },\n        React.createElement(Icon, { name: \"star\" })\n      )\n    )\n  )\n);;\n        var cont = document.getElementById(\"demo-38\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>List</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'650px'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span> <span class=\"token attr-name\" >threeLine</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemContent</span> <span class=\"token attr-name\" >avatar</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>person<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >subtitle</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Bryan</span> <span class=\"token attr-name\" >Cranston</span> <span class=\"token attr-name\" >played</span> <span class=\"token attr-name\" >the</span> <span class=\"token attr-name\" >role</span> <span class=\"token attr-name\" >of</span> <span class=\"token attr-name\" >Walter</span> <span class=\"token attr-name\" >in</span> <span class=\"token attr-name\" >Breaking</span> <span class=\"token attr-name\" >Bad.</span> <span class=\"token attr-name\" >He</span> <span class=\"token attr-name\" >is</span> <span class=\"token attr-name\" >also</span> <span class=\"token attr-name\" >known</span> <span class=\"token attr-name\" >for</span> <span class=\"token attr-name\" >playing</span> <span class=\"token attr-name\" >Hal</span> <span class=\"token attr-name\" >in</span> <span class=\"token attr-name\" >Malcom</span> <span class=\"token attr-name\" >in</span> <span class=\"token attr-name\" >the</span> <span class=\"token attr-name\" >Middle.\"</span><span class=\"token punctuation\" >></span></span>Bryan Cranston<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemContent</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>star<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span> <span class=\"token attr-name\" >threeLine</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemContent</span> <span class=\"token attr-name\" >avatar</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>person<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >subtitle</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Aaron</span> <span class=\"token attr-name\" >Paul</span> <span class=\"token attr-name\" >played</span> <span class=\"token attr-name\" >the</span> <span class=\"token attr-name\" >role</span> <span class=\"token attr-name\" >of</span> <span class=\"token attr-name\" >Jesse</span> <span class=\"token attr-name\" >in</span> <span class=\"token attr-name\" >Breaking</span> <span class=\"token attr-name\" >Bad.</span> <span class=\"token attr-name\" >He</span> <span class=\"token attr-name\" >also</span> <span class=\"token attr-name\" >featured</span> <span class=\"token attr-name\" >in</span> <span class=\"token attr-name\" >the</span> <span class=\"token attr-name\" >Need</span> <span class=\"token attr-name\" >For</span> <span class=\"token attr-name\" >Speed</span> <span class=\"token attr-name\" >Movie.\"</span><span class=\"token punctuation\" >></span></span>Aaron Paul<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemContent</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>star<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItem</span> <span class=\"token attr-name\" >threeLine</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemContent</span> <span class=\"token attr-name\" >avatar</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>person<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >subtitle</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Bob</span> <span class=\"token attr-name\" >Odinkrik</span> <span class=\"token attr-name\" >played</span> <span class=\"token attr-name\" >the</span> <span class=\"token attr-name\" >role</span> <span class=\"token attr-name\" >of</span> <span class=\"token attr-name\" >Saul</span> <span class=\"token attr-name\" >in</span> <span class=\"token attr-name\" >Breaking</span> <span class=\"token attr-name\" >Bad.</span> <span class=\"token attr-name\" >Due</span> <span class=\"token attr-name\" >to</span> <span class=\"token attr-name\" >public</span> <span class=\"token attr-name\" >fondness</span> <span class=\"token attr-name\" >for</span> <span class=\"token attr-name\" >the</span> <span class=\"token attr-name\" >character,</span> <span class=\"token attr-name\" >Bob</span> <span class=\"token attr-name\" >stars</span> <span class=\"token attr-name\" >in</span> <span class=\"token attr-name\" >his</span> <span class=\"token attr-name\" >own</span> <span class=\"token attr-name\" >show</span> <span class=\"token attr-name\" >now,</span> <span class=\"token attr-name\" >called</span> <span class=\"token attr-name\" >Better</span> <span class=\"token attr-name\" >Call</span> <span class=\"token attr-name\" >Saul.\"</span><span class=\"token punctuation\" >></span></span>Bob Odenkirk<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemContent</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>star<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItemAction</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ListItem</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>List</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <List style={{width: &apos;650px&apos;}}>\\n  <ListItem threeLine>\\n    <ListItemContent avatar=\\&​quot;person\\&​quot; subtitle=\\&​quot;Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.\\&​quot;>Bryan Cranston</ListItemContent>\\n    <ListItemAction>\\n      <a href=\\&​quot;#\\&​quot;><Icon name=\\&​quot;star\\&​quot; /></a>\\n    </ListItemAction>\\n  </ListItem>\\n  <ListItem threeLine>\\n    <ListItemContent avatar=\\&​quot;person\\&​quot; subtitle=\\&​quot;Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the Need For Speed Movie.\\&​quot;>Aaron Paul</ListItemContent>\\n    <ListItemAction>\\n      <a href=\\&​quot;#\\&​quot;><Icon name=\\&​quot;star\\&​quot; /></a>\\n    </ListItemAction>\\n  </ListItem>\\n  <ListItem threeLine>\\n    <ListItemContent avatar=\\&​quot;person\\&​quot; subtitle=\\&​quot;Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.\\&​quot;>Bob Odenkirk</ListItemContent>\\n    <ListItemAction>\\n      <a href=\\&​quot;#\\&​quot;><Icon name=\\&​quot;star\\&​quot; /></a>\\n    </ListItemAction>\\n  </ListItem>\\n</List>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Element</th>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">ListItem</td>\n<td style=\"text-align:left\">twoLine</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Set item to have 2 lines</td>\n<td style=\"text-align:left\">Optional. Cannot be set alongside <code>threeline</code></td>\n</tr>\n<tr>\n<td style=\"text-align:left\">ListItem</td>\n<td style=\"text-align:left\">twoLine</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Set item to have 3 lines</td>\n<td style=\"text-align:left\">Optional. Cannot be set alongside <code>twoLine</code></td>\n</tr>\n<tr>\n<td style=\"text-align:left\">ListItemContent</td>\n<td style=\"text-align:left\">avatar</td>\n<td style=\"text-align:left\">string, Element</td>\n<td style=\"text-align:left\">Set the item left avatar</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">ListItemContent</td>\n<td style=\"text-align:left\">icon</td>\n<td style=\"text-align:left\">string, Element</td>\n<td style=\"text-align:left\">Set the item left icon</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">ListItemContent</td>\n<td style=\"text-align:left\">subtitle</td>\n<td style=\"text-align:left\">string</td>\n<td style=\"text-align:left\">Set the item subtitle</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">ListItemAction</td>\n<td style=\"text-align:left\">info</td>\n<td style=\"text-align:left\">string</td>\n<td style=\"text-align:left\">Set a small header above the action</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"loading\" class=\"mdl-typography--display-4\">Loading</h1>\n<ul>\n<li><a href=\"#progress-bar\">Progress Bar</a></li>\n<li><a href=\"#spinner\">Spinner</a></li>\n</ul>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<h3 id=\"progress-bar\" class=\"mdl-typography--display-2\">Progress Bar</h3>\n<div id=\"demo-39\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(ProgressBar, { progress: 44 });;\n        var cont = document.getElementById(\"demo-39\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Simple Progress Bar */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ProgressBar</span> <span class=\"token attr-name\" >progress</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >44</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <ProgressBar progress={44} />;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-40\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(ProgressBar, { indeterminate: true });;\n        var cont = document.getElementById(\"demo-40\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Progress Bar with Indeterminate Progress */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ProgressBar</span> <span class=\"token attr-name\" >indeterminate</span> <span class=\"token punctuation\" >/></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <ProgressBar indeterminate />;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-41\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(ProgressBar, { progress: 33, buffer: 87 });;\n        var cont = document.getElementById(\"demo-41\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Progress Bar with Buffering */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ProgressBar</span> <span class=\"token attr-name\" >progress</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >33</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >buffer</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >87</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <ProgressBar progress={33} buffer={87} />;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">buffer</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Specify the buffer</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">indeterminate</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Set as indeterminate</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">progress</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Specify the progress value</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n<h3 id=\"spinner\" class=\"mdl-typography--display-2\">Spinner</h3>\n<div id=\"demo-42\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(Spinner, null)\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(Spinner, { singleColor: true })\n    )\n);;\n        var cont = document.getElementById(\"demo-42\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Simple spinner */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Spinner</span> <span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Single color spinner */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Spinner</span> <span class=\"token attr-name\" >singleColor</span> <span class=\"token punctuation\" >/></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <Spinner />\\n                </Cell><Cell col={6}>\\n                    <Spinner singleColor />\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">singleColor</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Use the primary color instead of a multi color spinner</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"menus\" class=\"mdl-typography--display-4\">Menus</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-43\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            \"div\",\n            { style: { position: 'relative' } },\n            React.createElement(IconButton, { name: \"more_vert\", id: \"demo-menu-lower-left\" }),\n            React.createElement(\n                Menu,\n                { target: \"demo-menu-lower-left\" },\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Some Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Another Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    { disabled: true },\n                    \"Disabled Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Yet Another Action\"\n                )\n            )\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            \"div\",\n            { style: { position: 'relative' } },\n            React.createElement(IconButton, { name: \"more_vert\", id: \"demo-menu-lower-right\" }),\n            React.createElement(\n                Menu,\n                { target: \"demo-menu-lower-right\", align: \"right\" },\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Some Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Another Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    { disabled: true },\n                    \"Disabled Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Yet Another Action\"\n                )\n            )\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-43\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Lower left */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>position<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'relative'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconButton</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>more_vert<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-lower-left<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu</span> <span class=\"token attr-name\" >target</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-lower-left<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Some Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>Disabled Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Yet Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Lower right */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>position<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'relative'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconButton</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>more_vert<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-lower-right<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu</span> <span class=\"token attr-name\" >target</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-lower-right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >align</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Some Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>Disabled Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Yet Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <div style={{position: &apos;relative&apos;}}>\\n    <IconButton name=\\&​quot;more_vert\\&​quot; id=\\&​quot;demo-menu-lower-left\\&​quot; />\\n    <Menu target=\\&​quot;demo-menu-lower-left\\&​quot;>\\n        <MenuItem>Some Action</MenuItem>\\n        <MenuItem>Another Action</MenuItem>\\n        <MenuItem disabled>Disabled Action</MenuItem>\\n        <MenuItem>Yet Another Action</MenuItem>\\n    </Menu>\\n</div>\\n                </Cell><Cell col={6}>\\n                    <div style={{position: &apos;relative&apos;}}>\\n    <IconButton name=\\&​quot;more_vert\\&​quot; id=\\&​quot;demo-menu-lower-right\\&​quot; />\\n    <Menu target=\\&​quot;demo-menu-lower-right\\&​quot; align=\\&​quot;right\\&​quot;>\\n        <MenuItem>Some Action</MenuItem>\\n        <MenuItem>Another Action</MenuItem>\\n        <MenuItem disabled>Disabled Action</MenuItem>\\n        <MenuItem>Yet Another Action</MenuItem>\\n    </Menu>\\n</div>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-44\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            \"div\",\n            { style: { position: 'relative' } },\n            React.createElement(IconButton, { name: \"more_vert\", id: \"demo-menu-top-left\" }),\n            React.createElement(\n                Menu,\n                { target: \"demo-menu-top-left\", valign: \"top\" },\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Some Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Another Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    { disabled: true },\n                    \"Disabled Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Yet Another Action\"\n                )\n            )\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            \"div\",\n            { style: { position: 'relative' } },\n            React.createElement(IconButton, { name: \"more_vert\", id: \"demo-menu-top-right\" }),\n            React.createElement(\n                Menu,\n                { target: \"demo-menu-top-right\", valign: \"top\", align: \"right\" },\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Some Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Another Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    { disabled: true },\n                    \"Disabled Action\"\n                ),\n                React.createElement(\n                    MenuItem,\n                    null,\n                    \"Yet Another Action\"\n                )\n            )\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-44\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Top left */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>position<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'relative'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconButton</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>more_vert<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-top-left<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu</span> <span class=\"token attr-name\" >target</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-top-left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >valign</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>top<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Some Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>Disabled Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Yet Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Top right */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>position<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'relative'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconButton</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>more_vert<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-top-right<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu</span> <span class=\"token attr-name\" >target</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-menu-top-right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >valign</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>top<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >align</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Some Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>Disabled Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItem</span><span class=\"token punctuation\" >></span></span>Yet Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItem</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <div style={{position: &apos;relative&apos;}}>\\n    <IconButton name=\\&​quot;more_vert\\&​quot; id=\\&​quot;demo-menu-top-left\\&​quot; />\\n    <Menu target=\\&​quot;demo-menu-top-left\\&​quot; valign=\\&​quot;top\\&​quot;>\\n        <MenuItem>Some Action</MenuItem>\\n        <MenuItem>Another Action</MenuItem>\\n        <MenuItem disabled>Disabled Action</MenuItem>\\n        <MenuItem>Yet Another Action</MenuItem>\\n    </Menu>\\n</div>\\n                </Cell><Cell col={6}>\\n                    <div style={{position: &apos;relative&apos;}}>\\n    <IconButton name=\\&​quot;more_vert\\&​quot; id=\\&​quot;demo-menu-top-right\\&​quot; />\\n    <Menu target=\\&​quot;demo-menu-top-right\\&​quot; valign=\\&​quot;top\\&​quot; align=\\&​quot;right\\&​quot;>\\n        <MenuItem>Some Action</MenuItem>\\n        <MenuItem>Another Action</MenuItem>\\n        <MenuItem disabled>Disabled Action</MenuItem>\\n        <MenuItem>Yet Another Action</MenuItem>\\n    </Menu>\\n</div>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Element</th>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">Menu</td>\n<td style=\"text-align:left\">align</td>\n<td style=\"text-align:left\">String (left, right)</td>\n<td style=\"text-align:left\">Set the horizontal alignment</td>\n<td style=\"text-align:left\">Optional, default &quot;left&quot;</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Menu</td>\n<td style=\"text-align:left\">ripple</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Apply the ripple effect</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Menu</td>\n<td style=\"text-align:left\">target</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">ID of the targeted element. A click on the targeted element will open the menu</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Menu</td>\n<td style=\"text-align:left\">valign</td>\n<td style=\"text-align:left\">String (top, bottom)</td>\n<td style=\"text-align:left\">Set the vertical alignment</td>\n<td style=\"text-align:left\">Optional, default &quot;bottom&quot;</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"sliders\" class=\"mdl-typography--display-4\">Sliders</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-45\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(Slider, { min: 0, max: 100, defaultValue: 0 })\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(Slider, { min: 0, max: 100, defaultValue: 25 })\n    )\n);;\n        var cont = document.getElementById(\"demo-45\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Default slider */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >min</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >max</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >100</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Slider with initial value */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >min</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >max</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >100</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >25</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <Slider min={0} max={100} defaultValue={0} />\\n                </Cell><Cell col={6}>\\n                    <Slider min={0} max={100} defaultValue={25} />\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">max</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Set the maximum value</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">min</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Set the minimum value</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">onChange</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Callback taking 1 parameter with the new value</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">value</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Set the initial/current value</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"snackbar\" class=\"mdl-typography--display-4\">Snackbar</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-46\"></div>\n        <script class=\"demo-js\">\n        'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n{/* Example of a snackbar */}\n\nvar Demo = function (_React$Component) {\n  _inherits(Demo, _React$Component);\n\n  function Demo(props) {\n    _classCallCheck(this, Demo);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));\n\n    _this.handleShowSnackbar = _this.handleShowSnackbar.bind(_this);\n    _this.handleTimeoutSnackbar = _this.handleTimeoutSnackbar.bind(_this);\n    _this.handleClickActionSnackbar = _this.handleClickActionSnackbar.bind(_this);\n    _this.state = { isSnackbarActive: false };\n    return _this;\n  }\n\n  _createClass(Demo, [{\n    key: 'handleShowSnackbar',\n    value: function handleShowSnackbar() {\n      this.setState({\n        isSnackbarActive: true,\n        btnBgColor: '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16)\n      });\n    }\n  }, {\n    key: 'handleTimeoutSnackbar',\n    value: function handleTimeoutSnackbar() {\n      this.setState({ isSnackbarActive: false });\n    }\n  }, {\n    key: 'handleClickActionSnackbar',\n    value: function handleClickActionSnackbar() {\n      this.setState({\n        btnBgColor: ''\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state = this.state;\n      var btnBgColor = _state.btnBgColor;\n      var isSnackbarActive = _state.isSnackbarActive;\n\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          Button,\n          { raised: true, style: { backgroundColor: btnBgColor }, onClick: this.handleShowSnackbar },\n          'Show a Snackbar'\n        ),\n        React.createElement(\n          Snackbar,\n          {\n            active: isSnackbarActive,\n            onClick: this.handleClickActionSnackbar,\n            onTimeout: this.handleTimeoutSnackbar,\n            action: 'Undo' },\n          'Button color changed.'\n        )\n      );\n    }\n  }]);\n\n  return Demo;\n}(React.Component);\n        var elem = React.createElement(Demo);\n        var cont = document.getElementById(\"demo-46\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Example of a snackbar */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >Demo</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >constructor</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >super</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleShowSnackbar <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleShowSnackbar<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleTimeoutSnackbar <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleTimeoutSnackbar<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleClickActionSnackbar <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleClickActionSnackbar<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span> isSnackbarActive<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >handleShowSnackbar</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      isSnackbarActive<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n      btnBgColor<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'#'</span> <span class=\"token operator\" >+</span>\n        Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >floor</span><span class=\"token punctuation\" >(</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >random</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >*</span> <span class=\"token number\" >0xFFFFFF</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >toString</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >16</span><span class=\"token punctuation\" >)</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >handleTimeoutSnackbar</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> isSnackbarActive<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >handleClickActionSnackbar</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      btnBgColor<span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> btnBgColor<span class=\"token punctuation\" >,</span> isSnackbarActive <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token operator\" >&lt;</span>div<span class=\"token operator\" >></span>\n        <span class=\"token operator\" >&lt;</span>Button raised style<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>backgroundColor<span class=\"token punctuation\" >:</span> btnBgColor<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span> onClick<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleShowSnackbar<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>Show a Snackbar<span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Button<span class=\"token operator\" >></span>\n        <span class=\"token operator\" >&lt;</span>Snackbar\n          active<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span>isSnackbarActive<span class=\"token punctuation\" >}</span>\n          onClick<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleClickActionSnackbar<span class=\"token punctuation\" >}</span>\n          onTimeout<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleTimeoutSnackbar<span class=\"token punctuation\" >}</span>\n          action<span class=\"token operator\" >=</span><span class=\"token string\" >\"Undo\"</span><span class=\"token operator\" >></span>Button color changed<span class=\"token punctuation\" >.</span><span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Snackbar<span class=\"token operator\" >></span>\n      <span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>div<span class=\"token operator\" >></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n{/* Example of a snackbar */}\\nclass Demo extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);\\n    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);\\n    this.handleClickActionSnackbar = this.handleClickActionSnackbar.bind(this);\\n    this.state = { isSnackbarActive: false };\\n  }\\n\\n  handleShowSnackbar() {\\n    this.setState({\\n      isSnackbarActive: true,\\n      btnBgColor: &apos;#&apos; +\\n        Math.floor(Math.random() * 0xFFFFFF).toString(16)\\n    });\\n  }\\n  handleTimeoutSnackbar() {\\n    this.setState({ isSnackbarActive: false });\\n  }\\n  handleClickActionSnackbar() {\\n    this.setState({\\n      btnBgColor: &apos;&apos;\\n    });\\n  }\\n  render() {\\n    const { btnBgColor, isSnackbarActive } = this.state;\\n    return (\\n      <div>\\n        <Button raised style={{backgroundColor: btnBgColor}} onClick={this.handleShowSnackbar}>Show a Snackbar</Button>\\n        <Snackbar\\n          active={isSnackbarActive}\\n          onClick={this.handleClickActionSnackbar}\\n          onTimeout={this.handleTimeoutSnackbar}\\n          action=\\&​quot;Undo\\&​quot;>Button color changed.</Snackbar>\\n      </div>\\n    );\\n  }\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-47\"></div>\n        <script class=\"demo-js\">\n        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n{/* Example of a toast (snackbar without action button) */}\n\nvar Demo = function (_React$Component) {\n  _inherits(Demo, _React$Component);\n\n  function Demo(props) {\n    _classCallCheck(this, Demo);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));\n\n    _this.handleShowSnackbar = _this.handleShowSnackbar.bind(_this);\n    _this.handleTimeoutSnackbar = _this.handleTimeoutSnackbar.bind(_this);\n    _this.state = { isSnackbarActive: false };\n    return _this;\n  }\n\n  _createClass(Demo, [{\n    key: \"handleShowSnackbar\",\n    value: function handleShowSnackbar() {\n      this.setState({ isSnackbarActive: true });\n    }\n  }, {\n    key: \"handleTimeoutSnackbar\",\n    value: function handleTimeoutSnackbar() {\n      this.setState({ isSnackbarActive: false });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var isSnackbarActive = this.state.isSnackbarActive;\n\n      return React.createElement(\n        \"div\",\n        null,\n        React.createElement(\n          Button,\n          { raised: true, onClick: this.handleShowSnackbar },\n          \"Show a Toast\"\n        ),\n        React.createElement(\n          Snackbar,\n          {\n            active: isSnackbarActive,\n            onTimeout: this.handleTimeoutSnackbar },\n          \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius luctus quam. Fusce quis blandit libero. Donec accumsan nunc lectus, vel blandit diam bibendum ac. Integer faucibus, lorem et convallis fermentum, diam dolor imperdiet mi, nec iaculis risus mauris id elit. Vivamus vel eros dapibus, molestie ante ut, vestibulum sem.\"\n        )\n      );\n    }\n  }]);\n\n  return Demo;\n}(React.Component);\n        var elem = React.createElement(Demo);\n        var cont = document.getElementById(\"demo-47\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Example of a toast (snackbar without action button) */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >Demo</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >constructor</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >super</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleShowSnackbar <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleShowSnackbar<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleTimeoutSnackbar <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleTimeoutSnackbar<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span> isSnackbarActive<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >handleShowSnackbar</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> isSnackbarActive<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >handleTimeoutSnackbar</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> isSnackbarActive<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> isSnackbarActive <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token operator\" >&lt;</span>div<span class=\"token operator\" >></span>\n        <span class=\"token operator\" >&lt;</span>Button raised onClick<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleShowSnackbar<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>Show a Toast<span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Button<span class=\"token operator\" >></span>\n        <span class=\"token operator\" >&lt;</span>Snackbar\n          active<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span>isSnackbarActive<span class=\"token punctuation\" >}</span>\n          onTimeout<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleTimeoutSnackbar<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n            Lorem ipsum dolor sit amet<span class=\"token punctuation\" >,</span> consectetur adipiscing elit<span class=\"token punctuation\" >.</span> Fusce varius luctus quam<span class=\"token punctuation\" >.</span> Fusce quis blandit libero<span class=\"token punctuation\" >.</span> Donec accumsan nunc lectus<span class=\"token punctuation\" >,</span> vel blandit diam bibendum ac<span class=\"token punctuation\" >.</span> Integer faucibus<span class=\"token punctuation\" >,</span> lorem et convallis fermentum<span class=\"token punctuation\" >,</span> diam dolor imperdiet mi<span class=\"token punctuation\" >,</span> nec iaculis risus mauris id elit<span class=\"token punctuation\" >.</span> Vivamus vel eros dapibus<span class=\"token punctuation\" >,</span> molestie ante ut<span class=\"token punctuation\" >,</span> vestibulum sem<span class=\"token punctuation\" >.</span>\n          <span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>Snackbar<span class=\"token operator\" >></span>\n      <span class=\"token operator\" >&lt;</span><span class=\"token operator\" >/</span>div<span class=\"token operator\" >></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n{/* Example of a toast (snackbar without action button) */}\\nclass Demo extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);\\n    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);\\n    this.state = { isSnackbarActive: false };\\n  }\\n\\n  handleShowSnackbar() {\\n    this.setState({ isSnackbarActive: true });\\n  }\\n  handleTimeoutSnackbar() {\\n    this.setState({ isSnackbarActive: false });\\n  }\\n  render() {\\n    const { isSnackbarActive } = this.state;\\n    return (\\n      <div>\\n        <Button raised onClick={this.handleShowSnackbar}>Show a Toast</Button>\\n        <Snackbar\\n          active={isSnackbarActive}\\n          onTimeout={this.handleTimeoutSnackbar}>\\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius luctus quam. Fusce quis blandit libero. Donec accumsan nunc lectus, vel blandit diam bibendum ac. Integer faucibus, lorem et convallis fermentum, diam dolor imperdiet mi, nec iaculis risus mauris id elit. Vivamus vel eros dapibus, molestie ante ut, vestibulum sem.\\n          </Snackbar>\\n      </div>\\n    );\\n  }\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">action</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Specify the label of the action button</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">active</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Set the snackbar visible</td>\n<td style=\"text-align:left\">Required. Should be false when mounting the component</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">onActionClick</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Function to call when the action button is clicked</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">onTimeout</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Function to call when the snackbar is getting hidden</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">timeout</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Defines the time (in ms) to show the snackbar</td>\n<td style=\"text-align:left\">Optional. Default 2750</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"textfield\" class=\"mdl-typography--display-4\">Textfield</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-48\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(Textfield, {\n                                                onChange: () => {},\n                                                label: \"Text...\",\n                                                style: { width: '200px' }\n                                })\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(Textfield, {\n                                                onChange: () => {},\n                                                pattern: \"-?[0-9]*(\\\\.[0-9]+)?\",\n                                                error: \"Input is not a number!\",\n                                                label: \"Number...\",\n                                                style: { width: '200px' }\n                                })\n                )\n);;\n        var cont = document.getElementById(\"demo-48\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Simple textfield */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Text...<span class=\"token punctuation\" >\"</span></span>\n    <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'200px'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n<span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Numeric textfield */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >pattern</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>-?[0-9]*(\\.[0-9]+)?<span class=\"token punctuation\" >\"</span></span>\n    <span class=\"token attr-name\" >error</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Input</span> <span class=\"token attr-name\" >is</span> <span class=\"token attr-name\" >not</span> <span class=\"token attr-name\" >a</span> <span class=\"token attr-name\" >number!\"</span>\n    <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Number...<span class=\"token punctuation\" >\"</span></span>\n    <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'200px'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n<span class=\"token punctuation\" >/></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <Textfield\\n    onChange={() => {}}\\n    label=\\&​quot;Text...\\&​quot;\\n    style={{width: &apos;200px&apos;}}\\n/>\\n                </Cell><Cell col={6}>\\n                    <Textfield\\n    onChange={() => {}}\\n    pattern=\\&​quot;-?[0-9]*(\\\\.[0-9]+)?\\&​quot;\\n    error=\\&​quot;Input is not a number!\\&​quot;\\n    label=\\&​quot;Number...\\&​quot;\\n    style={{width: &apos;200px&apos;}}\\n/>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-49\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(Textfield, {\n                                                onChange: () => {},\n                                                label: \"Text...\",\n                                                floatingLabel: true,\n                                                style: { width: '200px' }\n                                })\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(Textfield, {\n                                                onChange: () => {},\n                                                pattern: \"-?[0-9]*(\\\\.[0-9]+)?\",\n                                                error: \"Input is not a number!\",\n                                                label: \"Number...\",\n                                                floatingLabel: true\n                                })\n                )\n);;\n        var cont = document.getElementById(\"demo-49\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Textfield with floating label */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Text...<span class=\"token punctuation\" >\"</span></span>\n    <span class=\"token attr-name\" >floatingLabel</span>\n    <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'200px'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n<span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Numeric Textfield with floating label */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >pattern</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>-?[0-9]*(\\.[0-9]+)?<span class=\"token punctuation\" >\"</span></span>\n    <span class=\"token attr-name\" >error</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Input</span> <span class=\"token attr-name\" >is</span> <span class=\"token attr-name\" >not</span> <span class=\"token attr-name\" >a</span> <span class=\"token attr-name\" >number!\"</span>\n    <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Number...<span class=\"token punctuation\" >\"</span></span>\n    <span class=\"token attr-name\" >floatingLabel</span>\n<span class=\"token punctuation\" >/></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <Textfield\\n    onChange={() => {}}\\n    label=\\&​quot;Text...\\&​quot;\\n    floatingLabel\\n    style={{width: &apos;200px&apos;}}\\n/>\\n                </Cell><Cell col={6}>\\n                    <Textfield\\n    onChange={() => {}}\\n    pattern=\\&​quot;-?[0-9]*(\\\\.[0-9]+)?\\&​quot;\\n    error=\\&​quot;Input is not a number!\\&​quot;\\n    label=\\&​quot;Number...\\&​quot;\\n    floatingLabel\\n/>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-50\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(Textfield, {\n                                                onChange: () => {},\n                                                label: \"Text lines...\",\n                                                rows: 3,\n                                                style: { width: '200px' }\n                                })\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(Textfield, {\n                                                onChange: () => {},\n                                                label: \"Expandable Input\",\n                                                expandable: true,\n                                                expandableIcon: \"search\"\n                                })\n                )\n);;\n        var cont = document.getElementById(\"demo-50\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Floating Multiline Textfield */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Text</span> <span class=\"token attr-name\" >lines...\"</span>\n    <span class=\"token attr-name\" >rows</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >3</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'200px'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n<span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Expandable Textfield */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Textfield</span>\n    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Expandable</span> <span class=\"token attr-name\" >Input\"</span>\n    <span class=\"token attr-name\" >expandable</span>\n    <span class=\"token attr-name\" >expandableIcon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span>\n<span class=\"token punctuation\" >/></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <Textfield\\n    onChange={() => {}}\\n    label=\\&​quot;Text lines...\\&​quot;\\n    rows={3}\\n    style={{width: &apos;200px&apos;}}\\n/>\\n                </Cell><Cell col={6}>\\n                    <Textfield\\n    onChange={() => {}}\\n    label=\\&​quot;Expandable Input\\&​quot;\\n    expandable\\n    expandableIcon=\\&​quot;search\\&​quot;\\n/>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">disabled</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies the disabled state</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">error</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Specifies the error message</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">expandable</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Set the textfield as expandable</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">expandableIcon</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Set the icon for the expandable textfield</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">floatingLabel</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies the floating label effect</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">inputClassName</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Set CSS classes on the input</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">label</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Defines the input label</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">maxRows</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Defines the max rows (multilines)</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">onChange</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Defines the callback to receive the change event</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">pattern</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Defines the pattern to validate the value</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">required</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Set the textfield as required</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">rows</td>\n<td style=\"text-align:left\">Number</td>\n<td style=\"text-align:left\">Defines the number of rows (multiline)</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">style</td>\n<td style=\"text-align:left\">Object</td>\n<td style=\"text-align:left\">Defines the custom styles for the container</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">value</td>\n<td style=\"text-align:left\">String or Number</td>\n<td style=\"text-align:left\">Definest the &#39;current&#39; value</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"toggles\" class=\"mdl-typography--display-4\">Toggles</h1>\n<ul>\n<li><a href=\"#checkbox\">Checkbox</a></li>\n<li><a href=\"#radio-button\">Radio Button</a></li>\n<li><a href=\"#icon-toggle\">Icon Toggle</a></li>\n<li><a href=\"#switch\">Switch</a></li>\n</ul>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<h3 id=\"checkbox\" class=\"mdl-typography--display-2\">Checkbox</h3>\n<div id=\"demo-51\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(Checkbox, { label: \"With ripple\", ripple: true, defaultChecked: true })\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(Checkbox, { label: \"Without ripple\" })\n    )\n);;\n        var cont = document.getElementById(\"demo-51\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Checkbox</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>With</span> <span class=\"token attr-name\" >ripple\"</span> <span class=\"token attr-name\" >ripple</span> <span class=\"token attr-name\" >defaultChecked</span> <span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Checkbox</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Without</span> <span class=\"token attr-name\" >ripple\"</span> <span class=\"token punctuation\" >/></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <Checkbox label=\\&​quot;With ripple\\&​quot; ripple defaultChecked />\\n                </Cell><Cell col={6}>\\n                    <Checkbox label=\\&​quot;Without ripple\\&​quot; />\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">checked</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Defines the checkbox as &quot;checked&quot;</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">disabled</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Defines the checkbox as &quot;disabled&quot;</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">label</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Defines the label</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">onChange</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Callback to receive the change event</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">ripple</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies the ripple effect</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n<h3 id=\"radio-button\" class=\"mdl-typography--display-2\">Radio Button</h3>\n<div id=\"demo-52\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                RadioGroup,\n                                                { name: \"demo\", value: \"opt1\" },\n                                                React.createElement(\n                                                                Radio,\n                                                                { value: \"opt1\", ripple: true },\n                                                                \"Ripple option\"\n                                                ),\n                                                React.createElement(\n                                                                Radio,\n                                                                { value: \"opt2\" },\n                                                                \"Other option\"\n                                                )\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                RadioGroup,\n                                                { container: \"ul\", childContainer: \"li\", name: \"demo2\", value: \"opt2\" },\n                                                React.createElement(\n                                                                Radio,\n                                                                { value: \"opt1\", ripple: true },\n                                                                \"Ripple option\"\n                                                ),\n                                                React.createElement(\n                                                                Radio,\n                                                                { value: \"opt2\" },\n                                                                \"Other option\"\n                                                )\n                                )\n                )\n);;\n        var cont = document.getElementById(\"demo-52\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>RadioGroup</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>opt1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>opt1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>Ripple option<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Radio</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>opt2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Other option<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Radio</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>RadioGroup</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>RadioGroup</span> <span class=\"token attr-name\" >container</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ul<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >childContainer</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>li<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>opt2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>opt1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ripple</span><span class=\"token punctuation\" >></span></span>Ripple option<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Radio</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>opt2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Other option<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Radio</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>RadioGroup</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <RadioGroup name=\\&​quot;demo\\&​quot; value=\\&​quot;opt1\\&​quot;>\\n    <Radio value=\\&​quot;opt1\\&​quot; ripple>Ripple option</Radio>\\n    <Radio value=\\&​quot;opt2\\&​quot;>Other option</Radio>\\n</RadioGroup>\\n                </Cell><Cell col={6}>\\n                    <RadioGroup container=\\&​quot;ul\\&​quot; childContainer=\\&​quot;li\\&​quot; name=\\&​quot;demo2\\&​quot; value=\\&​quot;opt2\\&​quot;>\\n    <Radio value=\\&​quot;opt1\\&​quot; ripple>Ripple option</Radio>\\n    <Radio value=\\&​quot;opt2\\&​quot;>Other option</Radio>\\n</RadioGroup>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Element</th>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">RadioGroup</td>\n<td style=\"text-align:left\">childContainer</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Wrap every child in the specified container</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">RadioGroup</td>\n<td style=\"text-align:left\">name</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Defines the name of the radio group</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">RadioGroup</td>\n<td style=\"text-align:left\">onChange</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Defines the callback to receive the change event</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">RadioGroup</td>\n<td style=\"text-align:left\">value</td>\n<td style=\"text-align:left\">String or Number</td>\n<td style=\"text-align:left\">Defines the selected value</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Radio</td>\n<td style=\"text-align:left\">disabled</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Set as disabled</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Radio</td>\n<td style=\"text-align:left\">ripple</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies the ripple effect</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Radio</td>\n<td style=\"text-align:left\">value</td>\n<td style=\"text-align:left\">String or Number</td>\n<td style=\"text-align:left\">Defines the selected value</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n</tbody>\n        </table>\n<h3 id=\"icon-toggle\" class=\"mdl-typography--display-2\">Icon Toggle</h3>\n<div id=\"demo-53\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(IconToggle, { ripple: true, id: \"bold\", name: \"format_bold\", defaultChecked: true })\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(IconToggle, { id: \"italic\", name: \"format_italic\" })\n    )\n);;\n        var cont = document.getElementById(\"demo-53\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconToggle</span> <span class=\"token attr-name\" >ripple</span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bold<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>format_bold<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >defaultChecked</span> <span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconToggle</span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>italic<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>format_italic<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <IconToggle ripple id=\\&​quot;bold\\&​quot; name=\\&​quot;format_bold\\&​quot; defaultChecked />\\n                </Cell><Cell col={6}>\\n                    <IconToggle id=\\&​quot;italic\\&​quot; name=\\&​quot;format_italic\\&​quot; />\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">checked</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Defines the checkbox as &quot;checked&quot;</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">disabled</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Defines the checkbox as &quot;disabled&quot;</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">name</td>\n<td style=\"text-align:left\">String</td>\n<td style=\"text-align:left\">Defines the name</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">onChange</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Callback to receive the change event</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">ripple</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies the ripple effect</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n<h3 id=\"switch\" class=\"mdl-typography--display-2\">Switch</h3>\n<div id=\"demo-54\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n    Grid,\n    null,\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            Switch,\n            { ripple: true, id: \"switch1\", defaultChecked: true },\n            \"Ripple switch\"\n        )\n    ),\n    React.createElement(\n        Cell,\n        { col: 6 },\n        React.createElement(\n            Switch,\n            { id: \"switch2\" },\n            \"Switch\"\n        )\n    )\n);;\n        var cont = document.getElementById(\"demo-54\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >ripple</span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>switch1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >defaultChecked</span><span class=\"token punctuation\" >></span></span>Ripple <span class=\"token keyword\" >switch</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Switch</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>switch2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Switch<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Switch</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <Switch ripple id=\\&​quot;switch1\\&​quot; defaultChecked>Ripple switch</Switch>\\n                </Cell><Cell col={6}>\\n                    <Switch id=\\&​quot;switch2\\&​quot;>Switch</Switch>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h4 id=\"configuration\" class=\"mdl-typography--display-1\">Configuration</h4>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">checked</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Defines the checkbox as &quot;checked&quot;</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">disabled</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Defines the checkbox as &quot;disabled&quot;</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">onChange</td>\n<td style=\"text-align:left\">Function</td>\n<td style=\"text-align:left\">Callback to receive the change event</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">ripple</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Applies the ripple effect</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"loading\" class=\"mdl-typography--display-4\">Loading</h1>\n<h2 id=\"demo\" class=\"mdl-typography--display-3\">Demo</h2>\n<div id=\"demo-55\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                Tooltip,\n                                                { label: \"Follow\" },\n                                                React.createElement(Icon, { name: \"add\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                Tooltip,\n                                                { label: \"Print\", large: true },\n                                                React.createElement(Icon, { name: \"print\" })\n                                )\n                )\n);;\n        var cont = document.getElementById(\"demo-55\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Simple tooltip */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tooltip</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Follow<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>add<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tooltip</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Large Tooltip */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tooltip</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Print<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >large</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>print<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tooltip</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <Tooltip label=\\&​quot;Follow\\&​quot;>\\n    <Icon name=\\&​quot;add\\&​quot; />\\n</Tooltip>\\n                </Cell><Cell col={6}>\\n                    <Tooltip label=\\&​quot;Print\\&​quot; large>\\n    <Icon name=\\&​quot;print\\&​quot; />\\n</Tooltip>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-56\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                Tooltip,\n                                                { label: React.createElement(\n                                                                                \"span\",\n                                                                                null,\n                                                                                \"Upload \",\n                                                                                React.createElement(\n                                                                                                \"strong\",\n                                                                                                null,\n                                                                                                \"file.zip\"\n                                                                                )\n                                                                ) },\n                                                React.createElement(Icon, { name: \"cloud_upload\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 6 },\n                                React.createElement(\n                                                Tooltip,\n                                                { label: React.createElement(\n                                                                                \"span\",\n                                                                                null,\n                                                                                \"Share your content\",\n                                                                                React.createElement(\"br\", null),\n                                                                                \"via social media\"\n                                                                ) },\n                                                React.createElement(Icon, { name: \"share\" })\n                                )\n                )\n);;\n        var cont = document.getElementById(\"demo-56\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Rich Tooltip */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tooltip</span> <span class=\"token attr-name\" >label={&lt;span</span><span class=\"token punctuation\" >></span></span>Upload <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>strong</span><span class=\"token punctuation\" >></span></span>file<span class=\"token punctuation\" >.</span>zip<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>strong</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>cloud_upload<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tooltip</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Multiline Tooltip */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tooltip</span> <span class=\"token attr-name\" >label={&lt;span</span><span class=\"token punctuation\" >></span></span>Share your content<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>via social media<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>share<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tooltip</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={6}>\\n                    <Tooltip label={<span>Upload <strong>file.zip</strong></span>}>\\n    <Icon name=\\&​quot;cloud_upload\\&​quot; />\\n</Tooltip>\\n                </Cell><Cell col={6}>\\n                    <Tooltip label={<span>Share your content<br />via social media</span>}>\\n    <Icon name=\\&​quot;share\\&​quot; />\\n</Tooltip>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><div id=\"demo-57\"></div>\n        <script class=\"demo-js\">\n        var elem = React.createElement(\n                Grid,\n                null,\n                React.createElement(\n                                Cell,\n                                { col: 3 },\n                                React.createElement(\n                                                Tooltip,\n                                                { label: \"Follow\", position: \"right\" },\n                                                React.createElement(Icon, { name: \"arrow_forward\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 3 },\n                                React.createElement(\n                                                Tooltip,\n                                                { label: \"Follow\", position: \"left\" },\n                                                React.createElement(Icon, { name: \"arrow_back\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 3 },\n                                React.createElement(\n                                                Tooltip,\n                                                { label: \"Follow\", position: \"top\" },\n                                                React.createElement(Icon, { name: \"arrow_upward\" })\n                                )\n                ),\n                React.createElement(\n                                Cell,\n                                { col: 3 },\n                                React.createElement(\n                                                Tooltip,\n                                                { label: \"Follow\", position: \"bottom\" },\n                                                React.createElement(Icon, { name: \"arrow_downward\" })\n                                )\n                )\n);;\n        var cont = document.getElementById(\"demo-57\");\n        ReactDOM.render(elem, cont);\n    </script>\n        <pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Right Tooltip */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tooltip</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Follow<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >position</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>arrow_forward<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tooltip</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Left Tooltip */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tooltip</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Follow<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >position</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>arrow_back<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tooltip</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Top Tooltip */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tooltip</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Follow<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >position</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>top<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>arrow_upward<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tooltip</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token punctuation\" >{</span><span class=\"token comment\" spellcheck=\"true\">/* Bottom Tooltip */</span><span class=\"token punctuation\" >}</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tooltip</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Follow<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >position</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>arrow_downward<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tooltip</span><span class=\"token punctuation\" >></span></span></code><form class=\"codepen\" action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\">\n<input type=\"hidden\" name=\"data\" value='{&​quot;title&​quot;:&​quot;React-MDL example&​quot;,&​quot;editors&​quot;:&​quot;001&​quot;,&​quot;html&​quot;:&​quot;<div id=\\&​quot;demo\\&​quot;></div>&​quot;,&​quot;css&​quot;:&​quot;@import url(https://fonts.googleapis.com/icon?family=Material+Icons);&​quot;,&​quot;js&​quot;:&​quot;for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } } dialogPolyfill.registerDialog(document.querySelector(\\&​quot;dialog\\&​quot;));\\n\\nconst Demo = (props) => {\\n    return <Grid><Cell col={3}>\\n                    <Tooltip label=\\&​quot;Follow\\&​quot; position=\\&​quot;right\\&​quot;>\\n    <Icon name=\\&​quot;arrow_forward\\&​quot; />\\n</Tooltip>\\n                </Cell><Cell col={3}>\\n                    <Tooltip label=\\&​quot;Follow\\&​quot; position=\\&​quot;left\\&​quot;>\\n    <Icon name=\\&​quot;arrow_back\\&​quot; />\\n</Tooltip>\\n                </Cell><Cell col={3}>\\n                    <Tooltip label=\\&​quot;Follow\\&​quot; position=\\&​quot;top\\&​quot;>\\n    <Icon name=\\&​quot;arrow_upward\\&​quot; />\\n</Tooltip>\\n                </Cell><Cell col={3}>\\n                    <Tooltip label=\\&​quot;Follow\\&​quot; position=\\&​quot;bottom\\&​quot;>\\n    <Icon name=\\&​quot;arrow_downward\\&​quot; />\\n</Tooltip>\\n                </Cell></Grid>;\\n}\\nReactDOM.render(<Demo />, document.getElementById(&apos;demo&apos;))&​quot;,&​quot;js_pre_processor&​quot;:&​quot;babel&​quot;,&​quot;css_external&​quot;:&​quot;https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css&​quot;,&​quot;js_external&​quot;:&​quot;https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js&​quot;}'>\n<input type=\"image\" src=\"http://s.cdpn.io/3/cp-arrow-right.svg\" width=\"40\" height=\"40\" value=\"Create New Pen with Prefilled Data\" class=\"codepen-mover-button\">\n</form></pre><h2 id=\"configuration\" class=\"mdl-typography--display-3\">Configuration</h2>\n<table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n            <thead><tr>\n<th style=\"text-align:left\">Prop</th>\n<th style=\"text-align:left\">Type</th>\n<th style=\"text-align:left\">Effect</th>\n<th style=\"text-align:left\">Remarks</th>\n</tr>\n</thead>\n            <tbody<tr>\n<td style=\"text-align:left\">label</td>\n<td style=\"text-align:left\">Element or String</td>\n<td style=\"text-align:left\">Specify the content of the tooltip</td>\n<td style=\"text-align:left\">Required</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">large</td>\n<td style=\"text-align:left\">Boolean</td>\n<td style=\"text-align:left\">Defines a large tooltip</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">position</td>\n<td style=\"text-align:left\">String[left, right, top, bottom]</td>\n<td style=\"text-align:left\">Specify the position of the tooltip</td>\n<td style=\"text-align:left\">Optional</td>\n</tr>\n</tbody>\n        </table>\n";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Text = exports.Article = undefined;
	
	var _Article2 = __webpack_require__(83);
	
	var _Article3 = _interopRequireDefault(_Article2);
	
	var _Text2 = __webpack_require__(143);
	
	var _Text3 = _interopRequireDefault(_Text2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Article = _Article3.default;
	exports.Text = _Text3.default;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _TemplateHelper = __webpack_require__(85);
	
	var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);
	
	var _src = __webpack_require__(86);
	
	var _palette = __webpack_require__(142);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Article = function (_React$Component) {
	    _inherits(Article, _React$Component);
	
	    function Article() {
	        _classCallCheck(this, Article);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Article).apply(this, arguments));
	    }
	
	    _createClass(Article, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _src.Layout,
	                { className: (0, _classnames2.default)('demo-layout', (0, _palette.getColorClass)('grey', 100)), fixedHeader: true },
	                _react2.default.createElement(
	                    _src.Header,
	                    { className: (0, _classnames2.default)('demo-header', (0, _palette.getColorClass)('grey', 100), (0, _palette.getTextColorClass)('grey', 800)), title: 'Material Design Lite', scroll: true },
	                    _react2.default.createElement(_src.Textfield, {
	                        value: '',
	                        label: 'Search',
	                        expandable: true,
	                        expandableIcon: 'search'
	                    })
	                ),
	                _react2.default.createElement('div', { className: 'demo-ribbon' }),
	                _react2.default.createElement(
	                    _src.Content,
	                    { className: 'demo-main' },
	                    _react2.default.createElement(
	                        _src.Grid,
	                        { className: 'demo-container' },
	                        _react2.default.createElement(_src.Cell, { col: 2, hidePhone: true, hideTablet: true }),
	                        _react2.default.createElement(
	                            _src.Cell,
	                            { col: 8, shadow: 2, className: (0, _classnames2.default)('demo-content', (0, _palette.getColorClass)('white'), (0, _palette.getTextColorClass)('grey', 800)) },
	                            _react2.default.createElement(
	                                'div',
	                                { className: (0, _classnames2.default)('demo-crumbs', (0, _palette.getTextColorClass)('grey', 500)) },
	                                'Google > Material Design Lite > How to install MDL'
	                            ),
	                            _react2.default.createElement(
	                                'h3',
	                                null,
	                                'How to install MDL'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                'Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                'Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                'Tempor tempor aliqua in commodo cillum Lorem magna dolore proident Lorem. Esse ad consequat est excepteur irure eu irure quis aliqua qui. Do mollit esse veniam excepteur ut veniam anim minim dolore sit commodo consequat duis commodo. Sunt dolor reprehenderit ipsum minim eiusmod eu consectetur anim excepteur eiusmod. Duis excepteur anim dolor sit enim veniam deserunt anim adipisicing Lorem elit. Cillum sunt do consequat elit laboris nisi consectetur.'
	                            ),
	                            _react2.default.createElement(
	                                'h3',
	                                null,
	                                'Basic MDL Usage'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                'Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                'Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                'Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                'Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                'Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                'Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                'Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                'Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _src.Footer,
	                        { size: 'mini', className: 'demo-footer' },
	                        _react2.default.createElement(
	                            _src.FooterSection,
	                            { type: 'left' },
	                            _react2.default.createElement(
	                                _src.FooterLinkList,
	                                null,
	                                _react2.default.createElement(
	                                    'a',
	                                    { href: '#' },
	                                    'Help'
	                                ),
	                                _react2.default.createElement(
	                                    'a',
	                                    { href: '#' },
	                                    'Privacy and Terms'
	                                ),
	                                _react2.default.createElement(
	                                    'a',
	                                    { href: '#' },
	                                    'User Agreement'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Article;
	}(_react2.default.Component);
	
	exports.default = (0, _TemplateHelper2.default)(Article, '\n.demo-ribbon {\n  width: 100%;\n  height: 40vh;\n  background-color: #3F51B5;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n\n.demo-main {\n  margin-top: -35vh;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n\n.demo-header .mdl-layout__header-row {\n  padding-left: 40px;\n}\n\n.demo-container {\n  max-width: 1600px;\n  width: calc(100% - 16px);\n  margin: 0 auto;\n}\n\n.demo-content {\n  border-radius: 2px;\n  padding: 80px 56px;\n  margin-bottom: 80px;\n}\n\n.demo-layout.is-small-screen .demo-content {\n  padding: 40px 28px;\n}\n\n.demo-content h3 {\n  margin-top: 48px;\n}\n\n.demo-footer {\n  padding-left: 40px;\n}\n\n.demo-footer .mdl-mini-footer--link-list a {\n  font-size: 13px;\n}\n');

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var customStyleId = 0;
	
	exports.default = function (Component, css) {
	    return function (_React$Component) {
	        _inherits(Template, _React$Component);
	
	        function Template(props) {
	            _classCallCheck(this, Template);
	
	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Template).call(this, props));
	
	            _this.state = {
	                styleId: customStyleId++
	            };
	            return _this;
	        }
	
	        _createClass(Template, [{
	            key: 'componentDidMount',
	            value: function componentDidMount() {
	                var styleNode = document.createElement('style');
	                styleNode.type = 'text/css';
	                styleNode.id = 'template-style-' + this.state.styleId;
	                styleNode.innerHTML = css;
	                document.getElementsByTagName('head')[0].appendChild(styleNode);
	            }
	        }, {
	            key: 'componentWillUnmount',
	            value: function componentWillUnmount() {
	                var styleNode = document.getElementById('template-style-' + this.state.styleId);
	                styleNode.parentNode.removeChild(styleNode);
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                return _react2.default.createElement(Component, null);
	            }
	        }]);
	
	        return Template;
	    }(_react2.default.Component);
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Tooltip = exports.Textfield = exports.TabBar = exports.Tab = exports.Tabs = exports.Switch = exports.Spinner = exports.Snackbar = exports.Slider = exports.RadioGroup = exports.Radio = exports.ProgressBar = exports.MenuItem = exports.Menu = exports.ListItemContent = exports.ListItemAction = exports.ListItem = exports.List = exports.Content = exports.Navigation = exports.Spacer = exports.HeaderTabs = exports.HeaderRow = exports.Drawer = exports.Header = exports.Layout = exports.IconToggle = exports.IconButton = exports.Icon = exports.Cell = exports.Grid = exports.FooterLinkList = exports.FooterDropDownSection = exports.FooterSection = exports.Footer = exports.FABButton = exports.DialogActions = exports.DialogContent = exports.DialogTitle = exports.Dialog = exports.DataTable = exports.Checkbox = exports.CardMenu = exports.CardText = exports.CardMedia = exports.CardActions = exports.CardTitle = exports.Card = exports.Button = exports.Badge = exports.MDLComponent = exports.mdlUpgrade = undefined;
	
	var _Card = __webpack_require__(87);
	
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
	
	var _Dialog = __webpack_require__(94);
	
	Object.defineProperty(exports, 'Dialog', {
	    enumerable: true,
	    get: function get() {
	        return _Dialog.Dialog;
	    }
	});
	Object.defineProperty(exports, 'DialogTitle', {
	    enumerable: true,
	    get: function get() {
	        return _Dialog.DialogTitle;
	    }
	});
	Object.defineProperty(exports, 'DialogContent', {
	    enumerable: true,
	    get: function get() {
	        return _Dialog.DialogContent;
	    }
	});
	Object.defineProperty(exports, 'DialogActions', {
	    enumerable: true,
	    get: function get() {
	        return _Dialog.DialogActions;
	    }
	});
	
	var _Footer = __webpack_require__(98);
	
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
	
	var _Grid2 = __webpack_require__(104);
	
	Object.defineProperty(exports, 'Cell', {
	    enumerable: true,
	    get: function get() {
	        return _Grid2.Cell;
	    }
	});
	
	var _Layout = __webpack_require__(105);
	
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
	
	var _List = __webpack_require__(117);
	
	Object.defineProperty(exports, 'List', {
	    enumerable: true,
	    get: function get() {
	        return _List.List;
	    }
	});
	Object.defineProperty(exports, 'ListItem', {
	    enumerable: true,
	    get: function get() {
	        return _List.ListItem;
	    }
	});
	Object.defineProperty(exports, 'ListItemAction', {
	    enumerable: true,
	    get: function get() {
	        return _List.ListItemAction;
	    }
	});
	Object.defineProperty(exports, 'ListItemContent', {
	    enumerable: true,
	    get: function get() {
	        return _List.ListItemContent;
	    }
	});
	
	var _Menu2 = __webpack_require__(122);
	
	Object.defineProperty(exports, 'MenuItem', {
	    enumerable: true,
	    get: function get() {
	        return _Menu2.MenuItem;
	    }
	});
	
	var _Tabs = __webpack_require__(123);
	
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
	
	var _mdlUpgrade2 = __webpack_require__(107);
	
	var _mdlUpgrade3 = _interopRequireDefault(_mdlUpgrade2);
	
	var _MDLComponent2 = __webpack_require__(108);
	
	var _MDLComponent3 = _interopRequireDefault(_MDLComponent2);
	
	var _Badge2 = __webpack_require__(126);
	
	var _Badge3 = _interopRequireDefault(_Badge2);
	
	var _Button2 = __webpack_require__(127);
	
	var _Button3 = _interopRequireDefault(_Button2);
	
	var _Checkbox2 = __webpack_require__(128);
	
	var _Checkbox3 = _interopRequireDefault(_Checkbox2);
	
	var _DataTable2 = __webpack_require__(129);
	
	var _DataTable3 = _interopRequireDefault(_DataTable2);
	
	var _FABButton2 = __webpack_require__(131);
	
	var _FABButton3 = _interopRequireDefault(_FABButton2);
	
	var _Grid3 = _interopRequireDefault(_Grid2);
	
	var _Icon2 = __webpack_require__(120);
	
	var _Icon3 = _interopRequireDefault(_Icon2);
	
	var _IconButton2 = __webpack_require__(132);
	
	var _IconButton3 = _interopRequireDefault(_IconButton2);
	
	var _IconToggle2 = __webpack_require__(133);
	
	var _IconToggle3 = _interopRequireDefault(_IconToggle2);
	
	var _Menu3 = _interopRequireDefault(_Menu2);
	
	var _ProgressBar2 = __webpack_require__(134);
	
	var _ProgressBar3 = _interopRequireDefault(_ProgressBar2);
	
	var _Radio2 = __webpack_require__(135);
	
	var _Radio3 = _interopRequireDefault(_Radio2);
	
	var _RadioGroup2 = __webpack_require__(136);
	
	var _RadioGroup3 = _interopRequireDefault(_RadioGroup2);
	
	var _Slider2 = __webpack_require__(137);
	
	var _Slider3 = _interopRequireDefault(_Slider2);
	
	var _Snackbar2 = __webpack_require__(138);
	
	var _Snackbar3 = _interopRequireDefault(_Snackbar2);
	
	var _Spinner2 = __webpack_require__(139);
	
	var _Spinner3 = _interopRequireDefault(_Spinner2);
	
	var _Switch2 = __webpack_require__(140);
	
	var _Switch3 = _interopRequireDefault(_Switch2);
	
	var _Textfield2 = __webpack_require__(141);
	
	var _Textfield3 = _interopRequireDefault(_Textfield2);
	
	var _Tooltip2 = __webpack_require__(130);
	
	var _Tooltip3 = _interopRequireDefault(_Tooltip2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	exports.Snackbar = _Snackbar3.default;
	exports.Spinner = _Spinner3.default;
	exports.Switch = _Switch3.default;
	exports.Textfield = _Textfield3.default;
	exports.Tooltip = _Tooltip3.default;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CardMedia = exports.CardActions = exports.CardTitle = exports.CardMenu = exports.CardText = exports.Card = undefined;
	
	var _basicClassCreator = __webpack_require__(88);
	
	var _basicClassCreator2 = _interopRequireDefault(_basicClassCreator);
	
	var _Card2 = __webpack_require__(89);
	
	var _Card3 = _interopRequireDefault(_Card2);
	
	var _CardTitle2 = __webpack_require__(92);
	
	var _CardTitle3 = _interopRequireDefault(_CardTitle2);
	
	var _CardActions2 = __webpack_require__(93);
	
	var _CardActions3 = _interopRequireDefault(_CardActions2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Card = _Card3.default;
	var CardText = exports.CardText = (0, _basicClassCreator2.default)('CardText', 'mdl-card__supporting-text');
	var CardMenu = exports.CardMenu = (0, _basicClassCreator2.default)('CardMenu', 'mdl-card__menu');
	exports.CardTitle = _CardTitle3.default;
	exports.CardActions = _CardActions3.default;
	var CardMedia = exports.CardMedia = (0, _basicClassCreator2.default)('CardMedia', 'mdl-card__media');

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
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
	    fn.propTypes = {
	        className: _react.PropTypes.string
	    };
	
	    return fn;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _clamp = __webpack_require__(90);
	
	var _clamp2 = _interopRequireDefault(_clamp);
	
	var _shadows = __webpack_require__(91);
	
	var _shadows2 = _interopRequireDefault(_shadows);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Card = function Card(props) {
	    var className = props.className;
	    var shadow = props.shadow;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'shadow', 'children']);
	
	    var hasShadow = typeof shadow !== 'undefined';
	    var shadowLevel = (0, _clamp2.default)(shadow || 0, 0, _shadows2.default.length - 1);
	
	    var classes = (0, _classnames2.default)('mdl-card', _defineProperty({}, _shadows2.default[shadowLevel], hasShadow), className);
	
	    return _react2.default.createElement(
	        'div',
	        _extends({ className: classes }, otherProps),
	        children
	    );
	};
	Card.propTypes = {
	    className: _react.PropTypes.string,
	    shadow: _react.PropTypes.number
	};
	
	exports.default = Card;

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = clamp
	
	function clamp(value, min, max) {
	  return min < max
	    ? (value < min ? min : value > max ? max : value)
	    : (value < max ? max : value > min ? min : value)
	}


/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var values = [2, 3, 4, 5, 6, 8, 16];
	exports.default = values.map(function (v) {
	  return "mdl-shadow--" + v + "dp";
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CardTitle = function (_React$Component) {
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
	
	            return _react2.default.createElement(
	                'div',
	                _extends({ className: classes }, otherProps),
	                title
	            );
	        }
	    }]);
	
	    return CardTitle;
	}(_react2.default.Component);
	
	CardTitle.propTypes = {
	    className: _react.PropTypes.string,
	    expand: _react.PropTypes.bool
	};
	exports.default = CardTitle;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var CardActions = function CardActions(props) {
	    var className = props.className;
	    var border = props.border;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'border', 'children']);
	
	    var classes = (0, _classnames2.default)('mdl-card__actions', {
	        'mdl-card--border': border
	    }, className);
	
	    return _react2.default.createElement(
	        'div',
	        _extends({ className: classes }, otherProps),
	        children
	    );
	};
	
	CardActions.propTypes = {
	    border: _react.PropTypes.bool,
	    className: _react.PropTypes.string
	};
	
	exports.default = CardActions;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DialogActions = exports.DialogContent = exports.DialogTitle = exports.Dialog = undefined;
	
	var _basicClassCreator = __webpack_require__(88);
	
	var _basicClassCreator2 = _interopRequireDefault(_basicClassCreator);
	
	var _Dialog2 = __webpack_require__(95);
	
	var _Dialog3 = _interopRequireDefault(_Dialog2);
	
	var _DialogTitle2 = __webpack_require__(96);
	
	var _DialogTitle3 = _interopRequireDefault(_DialogTitle2);
	
	var _DialogActions2 = __webpack_require__(97);
	
	var _DialogActions3 = _interopRequireDefault(_DialogActions2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Dialog = _Dialog3.default;
	exports.DialogTitle = _DialogTitle3.default;
	var DialogContent = exports.DialogContent = (0, _basicClassCreator2.default)('DialogContent', 'mdl-dialog__content');
	exports.DialogActions = _DialogActions3.default;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var prevent = function prevent(event) {
	    return event.preventDefault();
	};
	
	var Dialog = function (_React$Component) {
	    _inherits(Dialog, _React$Component);
	
	    function Dialog() {
	        _classCallCheck(this, Dialog);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).apply(this, arguments));
	    }
	
	    _createClass(Dialog, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.refs.dialog.addEventListener('cancel', this.props.onCancel);
	            if (this.props.open) {
	                (0, _reactDom.findDOMNode)(this).showModal();
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (this.props.open !== prevProps.open) {
	                if (this.props.open) {
	                    (0, _reactDom.findDOMNode)(this).showModal();
	
	                    // display the dialog at the right location
	                    // needed for the polyfill, otherwise it's not at the right position
	                    var bodyHeight = document.body.clientHeight;
	                    var dialogHeight = this.refs.dialog.clientHeight;
	                    this.refs.dialog.style.position = 'fixed';
	                    this.refs.dialog.style.top = (bodyHeight - dialogHeight) / 2 + 'px';
	                } else {
	                    (0, _reactDom.findDOMNode)(this).close();
	                }
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.refs.dialog.removeEventListener('cancel', this.props.onCancel);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var children = _props.children;
	            var open = _props.open;
	            var onCancel = _props.onCancel;
	
	            var otherProps = _objectWithoutProperties(_props, ['className', 'children', 'open', 'onCancel']);
	
	            var classes = (0, _classnames2.default)('mdl-dialog', className);
	
	            return _react2.default.createElement(
	                'dialog',
	                _extends({ ref: 'dialog', className: classes }, otherProps),
	                children
	            );
	        }
	    }]);
	
	    return Dialog;
	}(_react2.default.Component);
	
	Dialog.propTypes = {
	    className: _react.PropTypes.string,
	    onCancel: _react.PropTypes.func,
	    open: _react.PropTypes.bool
	};
	Dialog.defaultProps = {
	    onCancel: prevent
	};
	exports.default = Dialog;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var DialogTitle = function DialogTitle(props) {
	    var className = props.className;
	    var component = props.component;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'component', 'children']);
	
	    return _react2.default.createElement(component || 'h4', _extends({
	        className: (0, _classnames2.default)('mdl-dialog__title', className)
	    }, otherProps), children);
	};
	
	DialogTitle.propTypes = {
	    className: _react.PropTypes.string,
	    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.func])
	};
	
	exports.default = DialogTitle;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var DialogActions = function DialogActions(props) {
	    var className = props.className;
	    var fullWidth = props.fullWidth;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'fullWidth', 'children']);
	
	    var classes = (0, _classnames2.default)('mdl-dialog__actions', {
	        'mdl-dialog__actions--full-width': fullWidth
	    }, className);
	
	    return _react2.default.createElement(
	        'div',
	        _extends({ className: classes }, otherProps),
	        children
	    );
	};
	
	DialogActions.propTypes = {
	    className: _react.PropTypes.string,
	    fullWidth: _react.PropTypes.bool
	};
	
	exports.default = DialogActions;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FooterLinkList = exports.FooterDropDownSection = exports.FooterSection = exports.Footer = undefined;
	
	var _Footer2 = __webpack_require__(99);
	
	var _Footer3 = _interopRequireDefault(_Footer2);
	
	var _Section = __webpack_require__(101);
	
	var _Section2 = _interopRequireDefault(_Section);
	
	var _DropDownSection = __webpack_require__(102);
	
	var _DropDownSection2 = _interopRequireDefault(_DropDownSection);
	
	var _LinkList = __webpack_require__(103);
	
	var _LinkList2 = _interopRequireDefault(_LinkList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Footer = _Footer3.default;
	exports.FooterSection = _Section2.default;
	exports.FooterDropDownSection = _DropDownSection2.default;
	exports.FooterLinkList = _LinkList2.default;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _cloneChildren = __webpack_require__(100);
	
	var _cloneChildren2 = _interopRequireDefault(_cloneChildren);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Footer = function Footer(props) {
	    var className = props.className;
	    var size = props.size;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'size', 'children']);
	
	    var classes = (0, _classnames2.default)(_defineProperty({}, 'mdl-' + size + '-footer', true), className);
	
	    return _react2.default.createElement(
	        'footer',
	        _extends({ className: classes }, otherProps),
	        (0, _cloneChildren2.default)(children, { size: size })
	    );
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (children, props) {
	    return _react2.default.Children.map(children, function (child) {
	        var newProps = typeof props === 'function' ? props(child) : props;
	        return _react2.default.cloneElement(child, newProps);
	    });
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _cloneChildren = __webpack_require__(100);
	
	var _cloneChildren2 = _interopRequireDefault(_cloneChildren);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Section = function Section(props) {
	    var className = props.className;
	    var logo = props.logo;
	    var size = props.size;
	    var type = props.type;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'logo', 'size', 'type', 'children']);
	
	    var classes = (0, _classnames2.default)(_defineProperty({}, 'mdl-' + size + '-footer__' + type + '-section', true), className);
	
	    return _react2.default.createElement(
	        'div',
	        _extends({ className: classes }, otherProps),
	        logo ? _react2.default.createElement(
	            'div',
	            { className: 'mdl-logo' },
	            logo
	        ) : null,
	        (0, _cloneChildren2.default)(children, { size: size })
	    );
	};
	
	Section.propTypes = {
	    className: _react.PropTypes.string,
	    logo: _react.PropTypes.node,
	    size: _react.PropTypes.oneOf(['mini', 'mega']),
	    type: _react.PropTypes.oneOf(['top', 'middle', 'bottom', 'left', 'right'])
	};
	Section.defaultProps = {
	    size: 'mega',
	    type: 'left'
	};
	
	exports.default = Section;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _cloneChildren = __webpack_require__(100);
	
	var _cloneChildren2 = _interopRequireDefault(_cloneChildren);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var DropDownSection = function DropDownSection(props) {
	    var className = props.className;
	    var size = props.size;
	    var title = props.title;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'size', 'title', 'children']);
	
	    var classes = (0, _classnames2.default)(_defineProperty({}, 'mdl-' + size + '-footer__drop-down-section', true), className);
	
	    return _react2.default.createElement(
	        'div',
	        _extends({ className: classes }, otherProps),
	        _react2.default.createElement('input', { className: 'mdl-' + size + '-footer__heading-checkbox', type: 'checkbox', defaultChecked: true }),
	        _react2.default.createElement(
	            'h1',
	            { className: 'mdl-' + size + '-footer__heading' },
	            title
	        ),
	        (0, _cloneChildren2.default)(children, { size: size })
	    );
	};
	
	DropDownSection.propTypes = {
	    className: _react.PropTypes.string,
	    size: _react.PropTypes.oneOf(['mini', 'mega']),
	    title: _react.PropTypes.node.isRequired
	};
	DropDownSection.defaultProps = {
	    size: 'mega'
	};
	
	exports.default = DropDownSection;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var LinkList = function LinkList(props) {
	    var className = props.className;
	    var size = props.size;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'size', 'children']);
	
	    var classes = (0, _classnames2.default)(_defineProperty({}, 'mdl-' + size + '-footer__link-list', true), className);
	
	    return _react2.default.createElement(
	        'ul',
	        _extends({ className: classes }, otherProps),
	        _react2.default.Children.map(children, function (child) {
	            return _react2.default.createElement(
	                'li',
	                null,
	                child
	            );
	        })
	    );
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
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Cell = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _clamp = __webpack_require__(90);
	
	var _clamp2 = _interopRequireDefault(_clamp);
	
	var _shadows = __webpack_require__(91);
	
	var _shadows2 = _interopRequireDefault(_shadows);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Grid = function Grid(props) {
	    var noSpacing = props.noSpacing;
	    var className = props.className;
	    var children = props.children;
	    var component = props.component;
	    var shadow = props.shadow;
	
	    var otherProps = _objectWithoutProperties(props, ['noSpacing', 'className', 'children', 'component', 'shadow']);
	
	    var hasShadow = typeof shadow !== 'undefined';
	    var shadowLevel = (0, _clamp2.default)(shadow || 0, 0, _shadows2.default.length - 1);
	
	    var classes = (0, _classnames2.default)('mdl-grid', _defineProperty({
	        'mdl-grid--no-spacing': noSpacing
	    }, _shadows2.default[shadowLevel], hasShadow), className);
	
	    return _react2.default.createElement(component || 'div', _extends({
	        className: classes
	    }, otherProps), children);
	};
	
	Grid.propTypes = {
	    className: _react.PropTypes.string,
	    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.func]),
	    noSpacing: _react.PropTypes.bool,
	    shadow: _react.PropTypes.number
	};
	
	/* eslint-disable react/no-multi-comp */
	var Cell = function Cell(props) {
	    var _classNames2;
	
	    var align = props.align;
	    var className = props.className;
	    var children = props.children;
	    var col = props.col;
	    var phone = props.phone;
	    var tablet = props.tablet;
	    var component = props.component;
	    var hideDesktop = props.hideDesktop;
	    var hidePhone = props.hidePhone;
	    var hideTablet = props.hideTablet;
	    var shadow = props.shadow;
	
	    var otherProps = _objectWithoutProperties(props, ['align', 'className', 'children', 'col', 'phone', 'tablet', 'component', 'hideDesktop', 'hidePhone', 'hideTablet', 'shadow']);
	
	    var hasShadow = typeof shadow !== 'undefined';
	    var shadowLevel = (0, _clamp2.default)(shadow || 0, 0, _shadows2.default.length - 1);
	
	    var classes = (0, _classnames2.default)('mdl-cell', (_classNames2 = {}, _defineProperty(_classNames2, 'mdl-cell--' + col + '-col', true), _defineProperty(_classNames2, 'mdl-cell--' + phone + '-col-phone', typeof phone !== 'undefined'), _defineProperty(_classNames2, 'mdl-cell--' + tablet + '-col-tablet', typeof tablet !== 'undefined'), _defineProperty(_classNames2, 'mdl-cell--' + align, typeof align !== 'undefined'), _defineProperty(_classNames2, 'mdl-cell--hide-desktop', hideDesktop), _defineProperty(_classNames2, 'mdl-cell--hide-phone', hidePhone), _defineProperty(_classNames2, 'mdl-cell--hide-tablet', hideTablet), _defineProperty(_classNames2, _shadows2.default[shadowLevel], hasShadow), _classNames2), className);
	
	    return _react2.default.createElement(component || 'div', _extends({
	        className: classes
	    }, otherProps), children);
	};
	
	Cell.propTypes = {
	    align: _react.PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
	    className: _react.PropTypes.string,
	    col: _react.PropTypes.number.isRequired,
	    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.func]),
	    phone: _react.PropTypes.number,
	    tablet: _react.PropTypes.number,
	    hideDesktop: _react.PropTypes.bool,
	    hidePhone: _react.PropTypes.bool,
	    hideTablet: _react.PropTypes.bool,
	    shadow: _react.PropTypes.number
	};
	
	exports.default = Grid;
	exports.Cell = Cell;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Spacer = exports.Navigation = exports.HeaderTabs = exports.HeaderRow = exports.Header = exports.Drawer = exports.Content = exports.Layout = undefined;
	
	var _Layout2 = __webpack_require__(106);
	
	var _Layout3 = _interopRequireDefault(_Layout2);
	
	var _Content2 = __webpack_require__(109);
	
	var _Content3 = _interopRequireDefault(_Content2);
	
	var _Drawer2 = __webpack_require__(110);
	
	var _Drawer3 = _interopRequireDefault(_Drawer2);
	
	var _Header2 = __webpack_require__(111);
	
	var _Header3 = _interopRequireDefault(_Header2);
	
	var _HeaderRow2 = __webpack_require__(112);
	
	var _HeaderRow3 = _interopRequireDefault(_HeaderRow2);
	
	var _HeaderTabs2 = __webpack_require__(114);
	
	var _HeaderTabs3 = _interopRequireDefault(_HeaderTabs2);
	
	var _Navigation2 = __webpack_require__(116);
	
	var _Navigation3 = _interopRequireDefault(_Navigation2);
	
	var _Spacer2 = __webpack_require__(113);
	
	var _Spacer3 = _interopRequireDefault(_Spacer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Layout = _Layout3.default;
	exports.Content = _Content3.default;
	exports.Drawer = _Drawer3.default;
	exports.Header = _Header3.default;
	exports.HeaderRow = _HeaderRow3.default;
	exports.HeaderTabs = _HeaderTabs3.default;
	exports.Navigation = _Navigation3.default;
	exports.Spacer = _Spacer3.default;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(107);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Layout = function (_React$Component) {
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
	
	            return _react2.default.createElement(
	                'div',
	                _extends({ className: classes }, otherProps),
	                this.props.children
	            );
	        }
	    }]);
	
	    return Layout;
	}(_react2.default.Component);
	
	Layout.propTypes = {
	    className: _react.PropTypes.string,
	    fixedDrawer: _react.PropTypes.bool,
	    fixedHeader: _react.PropTypes.bool,
	    fixedTabs: _react.PropTypes.bool
	};
	exports.default = (0, _mdlUpgrade2.default)(Layout);

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MDLComponent = __webpack_require__(108);
	
	var _MDLComponent2 = _interopRequireDefault(_MDLComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (Component) {
	    var render = Component.prototype.render;
	
	    Component.prototype.render = function rendr() {
	        // eslint-disable-line no-param-reassign
	        return _react2.default.createElement(
	            _MDLComponent2.default,
	            null,
	            render.call(this)
	        );
	    };
	
	    return Component;
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _reactDom = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MDLComponent = function (_Component) {
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
	}(_react.Component);

	exports.default = MDLComponent;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Content = function Content(props) {
	    var children = props.children;
	    var className = props.className;
	    var component = props.component;
	
	    var otherProps = _objectWithoutProperties(props, ['children', 'className', 'component']);
	
	    var classes = (0, _classnames2.default)('mdl-layout__content', className);
	
	    return _react2.default.createElement(component || 'div', _extends({
	        className: classes
	    }, otherProps), [children, _react2.default.createElement('div', { key: 'hack', className: 'react-mdl-header-tabs-hack', id: 'undefined' })]);
	};
	
	Content.propTypes = {
	    className: _react.PropTypes.string,
	    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.func])
	};
	
	exports.default = Content;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Drawer = function Drawer(props) {
	    var className = props.className;
	    var title = props.title;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'title', 'children']);
	
	    var classes = (0, _classnames2.default)('mdl-layout__drawer', className);
	
	    return _react2.default.createElement(
	        'div',
	        _extends({ className: classes }, otherProps),
	        title ? _react2.default.createElement(
	            'span',
	            { className: 'mdl-layout-title' },
	            title
	        ) : null,
	        children
	    );
	};
	Drawer.propTypes = {
	    className: _react.PropTypes.string,
	    title: _react.PropTypes.node
	};
	
	exports.default = Drawer;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _HeaderRow = __webpack_require__(112);
	
	var _HeaderRow2 = _interopRequireDefault(_HeaderRow);
	
	var _HeaderTabs = __webpack_require__(114);
	
	var _HeaderTabs2 = _interopRequireDefault(_HeaderTabs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Header = function Header(props) {
	    var className = props.className;
	    var scroll = props.scroll;
	    var seamed = props.seamed;
	    var title = props.title;
	    var transparent = props.transparent;
	    var waterfall = props.waterfall;
	    var hideTop = props.hideTop;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'scroll', 'seamed', 'title', 'transparent', 'waterfall', 'hideTop', 'children']);
	
	    var classes = (0, _classnames2.default)('mdl-layout__header', {
	        'mdl-layout__header--scroll': scroll,
	        'mdl-layout__header--seamed': seamed,
	        'mdl-layout__header--transparent': transparent,
	        'mdl-layout__header--waterfall': waterfall,
	        'mdl-layout__header--waterfall-hide-top': waterfall && hideTop
	    }, className);
	
	    var isRowOrTab = false;
	    _react2.default.Children.forEach(children, function (child) {
	        if (child && (child.type === _HeaderRow2.default || child.type === _HeaderTabs2.default)) {
	            isRowOrTab = true;
	        }
	    });
	
	    return _react2.default.createElement(
	        'header',
	        _extends({ className: classes }, otherProps),
	        isRowOrTab ? children : _react2.default.createElement(
	            _HeaderRow2.default,
	            { title: title },
	            children
	        )
	    );
	};
	Header.propTypes = {
	    className: _react.PropTypes.string,
	    scroll: _react.PropTypes.bool,
	    seamed: _react.PropTypes.bool,
	    title: _react.PropTypes.node,
	    transparent: _react.PropTypes.bool,
	    waterfall: _react.PropTypes.bool,
	    hideTop: _react.PropTypes.bool
	};
	
	exports.default = Header;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Spacer = __webpack_require__(113);
	
	var _Spacer2 = _interopRequireDefault(_Spacer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var HeaderRow = function HeaderRow(props) {
	    var className = props.className;
	    var title = props.title;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'title', 'children']);
	
	    var classes = (0, _classnames2.default)('mdl-layout__header-row', className);
	
	    return _react2.default.createElement(
	        'div',
	        _extends({ className: classes }, otherProps),
	        title && _react2.default.createElement(
	            'span',
	            { className: 'mdl-layout-title' },
	            title
	        ),
	        title && _react2.default.createElement(_Spacer2.default, null),
	        children
	    );
	};
	HeaderRow.propTypes = {
	    className: _react.PropTypes.string,
	    title: _react.PropTypes.node
	};
	
	exports.default = HeaderRow;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _basicClassCreator = __webpack_require__(88);
	
	var _basicClassCreator2 = _interopRequireDefault(_basicClassCreator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _basicClassCreator2.default)('Spacer', 'mdl-layout-spacer');

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _TabBar = __webpack_require__(115);
	
	var _TabBar2 = _interopRequireDefault(_TabBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var HeaderTabs = function HeaderTabs(props) {
	    var className = props.className;
	    var ripple = props.ripple;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'ripple', 'children']);
	
	    var classes = (0, _classnames2.default)({
	        'mdl-js-ripple-effect': ripple
	    }, className);
	
	    return _react2.default.createElement(
	        _TabBar2.default,
	        _extends({ cssPrefix: 'mdl-layout', className: classes }, otherProps),
	        children
	    );
	};
	HeaderTabs.propTypes = {
	    activeTab: _react.PropTypes.number,
	    className: _react.PropTypes.string,
	    onChange: _react.PropTypes.func,
	    ripple: _react.PropTypes.bool
	};
	
	exports.default = HeaderTabs;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TabBar = function (_React$Component) {
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
	
	            return _react2.default.createElement(
	                'div',
	                _extends({ className: classes }, otherProps),
	                _react2.default.Children.map(this.props.children, function (child, tabId) {
	                    return _react2.default.cloneElement(child, {
	                        cssPrefix: cssPrefix,
	                        tabId: tabId,
	                        active: tabId === activeTab,
	                        onTabClick: _this2._handleClickTab
	                    });
	                })
	            );
	        }
	    }]);
	
	    return TabBar;
	}(_react2.default.Component);
	
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
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _cloneChildren = __webpack_require__(100);
	
	var _cloneChildren2 = _interopRequireDefault(_cloneChildren);
	
	var _Spacer = __webpack_require__(113);
	
	var _Spacer2 = _interopRequireDefault(_Spacer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Navigation = function Navigation(props) {
	    var className = props.className;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'children']);
	
	    var classes = (0, _classnames2.default)('mdl-navigation', className);
	
	    return _react2.default.createElement(
	        'nav',
	        _extends({ className: classes }, otherProps),
	        (0, _cloneChildren2.default)(children, function (child) {
	            return {
	                className: (0, _classnames2.default)({ 'mdl-navigation__link': child.type !== _Spacer2.default }, child.props.className)
	            };
	        })
	    );
	};
	Navigation.propTypes = {
	    className: _react.PropTypes.string
	};
	
	exports.default = Navigation;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListItemContent = exports.ListItemAction = exports.ListItem = exports.List = undefined;
	
	var _basicClassCreator = __webpack_require__(88);
	
	var _basicClassCreator2 = _interopRequireDefault(_basicClassCreator);
	
	var _ListItem2 = __webpack_require__(118);
	
	var _ListItem3 = _interopRequireDefault(_ListItem2);
	
	var _ListItemAction2 = __webpack_require__(121);
	
	var _ListItemAction3 = _interopRequireDefault(_ListItemAction2);
	
	var _ListItemContent2 = __webpack_require__(119);
	
	var _ListItemContent3 = _interopRequireDefault(_ListItemContent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var List = exports.List = (0, _basicClassCreator2.default)('List', 'mdl-list', 'ul');
	exports.ListItem = _ListItem3.default;
	exports.ListItemAction = _ListItemAction3.default;
	exports.ListItemContent = _ListItemContent3.default;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _ListItemContent = __webpack_require__(119);
	
	var _ListItemContent2 = _interopRequireDefault(_ListItemContent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ListItem = function (_React$Component) {
	    _inherits(ListItem, _React$Component);
	
	    function ListItem() {
	        _classCallCheck(this, ListItem);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));
	    }
	
	    _createClass(ListItem, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var twoLine = _props.twoLine;
	            var threeLine = _props.threeLine;
	
	            var otherProps = _objectWithoutProperties(_props, ['className', 'twoLine', 'threeLine']);
	
	            var classes = (0, _classnames2.default)('mdl-list__item', {
	                'mdl-list__item--two-line': twoLine && !threeLine,
	                'mdl-list__item--three-line': !twoLine && threeLine
	            }, className);
	
	            var children = _react.Children.map(otherProps.children, function (child) {
	                if (typeof child === 'string') {
	                    return _react2.default.createElement(
	                        _ListItemContent2.default,
	                        null,
	                        child
	                    );
	                }
	                if (child.type === _ListItemContent2.default) {
	                    return (0, _react.cloneElement)(child, _extends({}, child.props, {
	                        useBodyClass: !!threeLine
	                    }));
	                }
	                return child;
	            });
	
	            return _react2.default.createElement(
	                'li',
	                _extends({ className: classes }, otherProps),
	                children
	            );
	        }
	    }]);
	
	    return ListItem;
	}(_react2.default.Component);
	
	ListItem.propTypes = {
	    className: _react.PropTypes.string,
	    twoLine: _react.PropTypes.bool,
	    threeLine: _react.PropTypes.bool
	};
	exports.default = ListItem;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(120);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ListItemContent = function (_React$Component) {
	    _inherits(ListItemContent, _React$Component);
	
	    function ListItemContent() {
	        _classCallCheck(this, ListItemContent);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItemContent).apply(this, arguments));
	    }
	
	    _createClass(ListItemContent, [{
	        key: 'createIcon',
	        value: function createIcon(type, icon) {
	            if (typeof icon === 'string') {
	                return _react2.default.createElement(_Icon2.default, { className: 'mdl-list__item-' + type, name: icon });
	            }
	            return _react2.default.cloneElement(icon, { className: 'mdl-list__item-' + type });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var avatar = _props.avatar;
	            var children = _props.children;
	            var className = _props.className;
	            var icon = _props.icon;
	            var subtitle = _props.subtitle;
	            var useBodyClass = _props.useBodyClass;
	
	            var otherProps = _objectWithoutProperties(_props, ['avatar', 'children', 'className', 'icon', 'subtitle', 'useBodyClass']);
	
	            var classes = (0, _classnames2.default)('mdl-list__item-primary-content', className);
	            var subtitleClassName = useBodyClass ? 'mdl-list__item-text-body' : 'mdl-list__item-sub-title';
	
	            var iconElement = null;
	            if (icon) {
	                iconElement = this.createIcon('icon', icon);
	            } else if (avatar) {
	                iconElement = this.createIcon('avatar', avatar);
	            }
	
	            return _react2.default.createElement(
	                'span',
	                _extends({ className: classes }, otherProps),
	                iconElement,
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    children
	                ),
	                subtitle && _react2.default.createElement(
	                    'span',
	                    { className: subtitleClassName },
	                    subtitle
	                )
	            );
	        }
	    }]);
	
	    return ListItemContent;
	}(_react2.default.Component);
	
	ListItemContent.propTypes = {
	    avatar: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	    className: _react.PropTypes.string,
	    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	    subtitle: _react.PropTypes.node,
	    useBodyClass: _react.PropTypes.bool
	};
	exports.default = ListItemContent;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Icon = function Icon(props) {
	    var className = props.className;
	    var name = props.name;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'name']);
	
	    var classes = (0, _classnames2.default)('material-icons', className);
	
	    return _react2.default.createElement(
	        'i',
	        _extends({ className: classes }, otherProps),
	        name
	    );
	};
	
	Icon.propTypes = {
	    className: _react.PropTypes.string,
	    name: _react.PropTypes.string.isRequired
	};
	
	exports.default = Icon;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ListItemAction = function (_React$Component) {
	    _inherits(ListItemAction, _React$Component);
	
	    function ListItemAction() {
	        _classCallCheck(this, ListItemAction);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItemAction).apply(this, arguments));
	    }
	
	    _createClass(ListItemAction, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var info = _props.info;
	
	            var otherProps = _objectWithoutProperties(_props, ['children', 'className', 'info']);
	
	            var classes = (0, _classnames2.default)('mdl-list__item-secondary-content', className);
	
	            return _react2.default.createElement(
	                'span',
	                _extends({ className: classes }, otherProps),
	                info && _react2.default.createElement(
	                    'span',
	                    { className: 'mdl-list__item-secondary-info' },
	                    info
	                ),
	                _react2.default.createElement(
	                    'span',
	                    { className: 'mdl-list__item-secondary-action' },
	                    children
	                )
	            );
	        }
	    }]);
	
	    return ListItemAction;
	}(_react2.default.Component);
	
	ListItemAction.propTypes = {
	    children: _react.PropTypes.element,
	    className: _react.PropTypes.string,
	    info: _react.PropTypes.string
	};
	exports.default = ListItemAction;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MenuItem = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(107);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	var _basicClassCreator = __webpack_require__(88);
	
	var _basicClassCreator2 = _interopRequireDefault(_basicClassCreator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Menu = function (_React$Component) {
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
	
	            return _react2.default.createElement(
	                'ul',
	                _extends({ className: classes, 'data-mdl-for': target }, otherProps),
	                children
	            );
	        }
	    }]);
	
	    return Menu;
	}(_react2.default.Component);
	
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
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tab = exports.TabBar = exports.Tabs = undefined;
	
	var _Tabs2 = __webpack_require__(124);
	
	var _Tabs3 = _interopRequireDefault(_Tabs2);
	
	var _TabBar2 = __webpack_require__(115);
	
	var _TabBar3 = _interopRequireDefault(_TabBar2);
	
	var _Tab2 = __webpack_require__(125);
	
	var _Tab3 = _interopRequireDefault(_Tab2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Tabs = _Tabs3.default;
	exports.TabBar = _TabBar3.default;
	exports.Tab = _Tab3.default;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Tab = __webpack_require__(125);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _TabBar = __webpack_require__(115);
	
	var _TabBar2 = _interopRequireDefault(_TabBar);
	
	var _mdlUpgrade = __webpack_require__(107);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TabPropType = function TabPropType(props, propName, componentName) {
	    var prop = props[propName];
	    if (prop.type !== _Tab2.default) {
	        return new Error('\'' + componentName + '\' only accepts \'Tab\' as children.');
	    }
	};
	
	var Tabs = function (_React$Component) {
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
	            var tabBarProps = _props.tabBarProps;
	
	            var otherProps = _objectWithoutProperties(_props, ['activeTab', 'className', 'onChange', 'ripple', 'children', 'tabBarProps']);
	
	            var classes = (0, _classnames2.default)('mdl-tabs mdl-js-tabs', {
	                'mdl-js-ripple-effect': ripple
	            }, className);
	
	            return _react2.default.createElement(
	                'div',
	                _extends({ className: classes }, otherProps),
	                _react2.default.createElement(
	                    _TabBar2.default,
	                    _extends({ cssPrefix: 'mdl-tabs', activeTab: activeTab, onChange: onChange }, tabBarProps),
	                    children
	                ),
	                _react2.default.createElement('div', { className: 'react-mdl-hack', id: 'undefined' })
	            );
	        }
	    }]);
	
	    return Tabs;
	}(_react2.default.Component);
	
	Tabs.propTypes = {
	    activeTab: _react.PropTypes.number,
	    children: _react.PropTypes.oneOfType([TabPropType, _react.PropTypes.arrayOf(TabPropType)]),
	    className: _react.PropTypes.string,
	    onChange: _react.PropTypes.func,
	    ripple: _react.PropTypes.bool,
	    tabBarProps: _react.PropTypes.object
	};
	exports.default = (0, _mdlUpgrade2.default)(Tabs);

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tab = function (_React$Component) {
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
	            var component = _props.component;
	            var children = _props.children;
	            var cssPrefix = _props.cssPrefix;
	            var onTabClick = _props.onTabClick;
	            var style = _props.style;
	            var tabId = _props.tabId;
	
	            var otherProps = _objectWithoutProperties(_props, ['active', 'className', 'component', 'children', 'cssPrefix', 'onTabClick', 'style', 'tabId']);
	
	            var classes = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, cssPrefix + '__tab', true), _defineProperty(_classNames, 'is-active', active), _classNames), className);
	
	            style.cursor = 'pointer';
	
	            return _react2.default.createElement(component || 'a', _extends({
	                className: classes,
	                onClick: this._handleClick,
	                style: style
	            }, otherProps), children);
	        }
	    }]);
	
	    return Tab;
	}(_react2.default.Component);
	
	Tab.propTypes = {
	    active: _react.PropTypes.bool,
	    className: _react.PropTypes.string,
	    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.func]),
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
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Badge = function (_React$Component) {
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
	            var overlap = _props.overlap;
	            var noBackground = _props.noBackground;
	
	            // No badge if no children
	
	            if (!_react2.default.Children.count(children)) return null;
	
	            var element = typeof children === 'string' ? _react2.default.createElement(
	                'span',
	                null,
	                children
	            ) : _react2.default.Children.only(children);
	
	            // No text -> No need of badge
	            if (text === null || typeof text === 'undefined') return element;
	
	            return _react2.default.cloneElement(element, {
	                className: (0, _classnames2.default)('mdl-badge', {
	                    'mdl-badge--overlap': !!overlap,
	                    'mdl-badge--no-background': !!noBackground
	                }),
	                'data-badge': text
	            });
	        }
	    }]);
	
	    return Badge;
	}(_react2.default.Component);
	
	Badge.propTypes = {
	    children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
	    text: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	    overlap: _react.PropTypes.bool,
	    noBackground: _react.PropTypes.bool
	};
	exports.default = Badge;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(107);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Button = function (_React$Component) {
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
	}(_react2.default.Component);
	
	Button.propTypes = {
	    accent: _react.PropTypes.bool,
	    className: _react.PropTypes.string,
	    colored: _react.PropTypes.bool,
	    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.func]),
	    href: _react.PropTypes.string,
	    primary: _react.PropTypes.bool,
	    raised: _react.PropTypes.bool,
	    ripple: _react.PropTypes.bool
	};
	exports.default = (0, _mdlUpgrade2.default)(Button);

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(107);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Checkbox = function (_React$Component) {
	    _inherits(Checkbox, _React$Component);
	
	    function Checkbox() {
	        _classCallCheck(this, Checkbox);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).apply(this, arguments));
	    }
	
	    _createClass(Checkbox, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (this.props.disabled !== prevProps.disabled) {
	                var fnName = this.props.disabled ? 'disable' : 'enable';
	                (0, _reactDom.findDOMNode)(this).MaterialCheckbox[fnName]();
	            }
	            if (this.props.checked !== prevProps.checked) {
	                var fnName = this.props.checked ? 'check' : 'uncheck';
	                (0, _reactDom.findDOMNode)(this).MaterialCheckbox[fnName]();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var label = _props.label;
	            var ripple = _props.ripple;
	
	            var inputProps = _objectWithoutProperties(_props, ['className', 'label', 'ripple']);
	
	            var classes = (0, _classnames2.default)('mdl-checkbox mdl-js-checkbox', {
	                'mdl-js-ripple-effect': ripple
	            }, className);
	
	            return _react2.default.createElement(
	                'label',
	                { className: classes },
	                _react2.default.createElement('input', _extends({
	                    type: 'checkbox',
	                    className: 'mdl-checkbox__input'
	                }, inputProps)),
	                label && _react2.default.createElement(
	                    'span',
	                    { className: 'mdl-checkbox__label' },
	                    label
	                )
	            );
	        }
	    }]);
	
	    return Checkbox;
	}(_react2.default.Component);
	
	Checkbox.propTypes = {
	    checked: _react.PropTypes.bool,
	    className: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    label: _react.PropTypes.string,
	    onChange: _react.PropTypes.func,
	    ripple: _react.PropTypes.bool
	};
	exports.default = (0, _mdlUpgrade2.default)(Checkbox);

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _clamp = __webpack_require__(90);
	
	var _clamp2 = _interopRequireDefault(_clamp);
	
	var _mdlUpgrade = __webpack_require__(107);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	var _shadows = __webpack_require__(91);
	
	var _shadows2 = _interopRequireDefault(_shadows);
	
	var _Tooltip = __webpack_require__(130);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DataTable = function (_React$Component) {
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
	            var shadow = _props.shadow;
	
	            var otherProps = _objectWithoutProperties(_props, ['className', 'columns', 'data', 'selectable', 'shadow']);
	
	            var rows = this.props.rows || data;
	
	            var hasShadow = typeof shadow !== 'undefined';
	            var shadowLevel = (0, _clamp2.default)(shadow || 0, 0, _shadows2.default.length - 1);
	
	            var classes = (0, _classnames2.default)('mdl-data-table mdl-js-data-table', _defineProperty({
	                'mdl-data-table--selectable': selectable
	            }, _shadows2.default[shadowLevel], hasShadow), className);
	
	            return _react2.default.createElement(
	                'table',
	                _extends({ className: classes }, otherProps),
	                _react2.default.createElement(
	                    'thead',
	                    null,
	                    _react2.default.createElement(
	                        'tr',
	                        null,
	                        columns.map(function (column) {
	                            var columnClasses = (0, _classnames2.default)(_this2._getCellClass(column), column.className);
	
	                            var label = !!column.tooltip ? _react2.default.createElement(
	                                _Tooltip2.default,
	                                { label: column.tooltip },
	                                column.label
	                            ) : column.label;
	
	                            return _react2.default.createElement(
	                                'th',
	                                { key: column.name, className: columnClasses },
	                                label
	                            );
	                        })
	                    )
	                ),
	                _react2.default.createElement(
	                    'tbody',
	                    null,
	                    rows.map(function (row, idx) {
	                        var rowClasses = (0, _classnames2.default)({
	                            'is-selected': row.selected
	                        }, row.className);
	                        return _react2.default.createElement(
	                            'tr',
	                            { key: row.key ? row.key : idx, className: rowClasses },
	                            columns.map(function (column) {
	                                return _react2.default.createElement(
	                                    'td',
	                                    { key: column.name, className: _this2._getCellClass(column) },
	                                    row[column.name]
	                                );
	                            })
	                        );
	                    })
	                )
	            );
	        }
	    }]);
	
	    return DataTable;
	}(_react2.default.Component);
	
	DataTable.propTypes = {
	    className: _react.PropTypes.string,
	    columns: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	        label: _react.PropTypes.node,
	        name: _react.PropTypes.string,
	        numeric: _react.PropTypes.bool,
	        tooltip: _react.PropTypes.node
	    })).isRequired,
	    data: function data(props, propName, componentName) {
	        if (props[propName]) {
	            return new Error(componentName + ': `' + propName + '` is deprecated, please use `rows` instead. `' + propName + '` will be removed in the next major release.');
	        }
	    },
	    rows: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
	    selectable: function selectable(props, propName, componentName) {
	        if (props[propName]) {
	            return new Error(componentName + ': `' + propName + '` is deprecated. Please manage the checkboxes yourself. An example is available here: http://tleunen.github.io/react-mdl/#/datatables `' + propName + '` will be removed in the next major release.');
	        }
	    },
	    shadow: _react.PropTypes.number
	};
	exports.default = (0, _mdlUpgrade2.default)(DataTable);

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _MDLComponent = __webpack_require__(108);
	
	var _MDLComponent2 = _interopRequireDefault(_MDLComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Tooltip = function Tooltip(props) {
	    var label = props.label;
	    var large = props.large;
	    var children = props.children;
	    var position = props.position;
	
	    var otherProps = _objectWithoutProperties(props, ['label', 'large', 'children', 'position']);
	
	    var id = Math.random().toString(36).substr(2);
	
	    var newLabel = typeof label === 'string' ? _react2.default.createElement(
	        'span',
	        null,
	        label
	    ) : label;
	
	    var element = undefined;
	    if (typeof children === 'string') {
	        element = _react2.default.createElement(
	            'span',
	            null,
	            children
	        );
	    } else {
	        element = _react2.default.Children.only(children);
	    }
	
	    return _react2.default.createElement(
	        'div',
	        _extends({ style: { display: 'inline-block' } }, otherProps),
	        _react2.default.cloneElement(element, { id: id }),
	        _react2.default.createElement(
	            _MDLComponent2.default,
	            null,
	            _react2.default.cloneElement(newLabel, {
	                htmlFor: id,
	                className: (0, _classnames2.default)('mdl-tooltip', _defineProperty({
	                    'mdl-tooltip--large': large
	                }, 'mdl-tooltip--' + position, typeof position !== 'undefined'))
	            })
	        )
	    );
	};
	
	Tooltip.propTypes = {
	    children: _react.PropTypes.node.isRequired,
	    label: _react.PropTypes.node.isRequired,
	    large: _react.PropTypes.bool,
	    position: _react.PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
	};
	
	exports.default = Tooltip;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Button = __webpack_require__(127);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var FABButton = function FABButton(props) {
	    var mini = props.mini;
	    var className = props.className;
	    var children = props.children;
	
	    var otherProps = _objectWithoutProperties(props, ['mini', 'className', 'children']);
	
	    var classes = (0, _classnames2.default)('mdl-button--fab', {
	        'mdl-button--mini-fab': mini
	    }, className);
	
	    return _react2.default.createElement(
	        _Button2.default,
	        _extends({ className: classes }, otherProps),
	        children
	    );
	};
	
	FABButton.propTypes = {
	    className: _react.PropTypes.string,
	    mini: _react.PropTypes.bool
	};
	
	exports.default = FABButton;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Button = __webpack_require__(127);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Icon = __webpack_require__(120);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var IconButton = function IconButton(props) {
	    var className = props.className;
	    var name = props.name;
	
	    var otherProps = _objectWithoutProperties(props, ['className', 'name']);
	
	    var classes = (0, _classnames2.default)('mdl-button--icon', className);
	
	    return _react2.default.createElement(
	        _Button2.default,
	        _extends({ className: classes }, otherProps),
	        _react2.default.createElement(_Icon2.default, { name: name })
	    );
	};
	
	IconButton.propTypes = {
	    className: _react.PropTypes.string,
	    name: _react.PropTypes.string.isRequired
	};
	
	exports.default = IconButton;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(120);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _mdlUpgrade = __webpack_require__(107);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var IconToggle = function (_React$Component) {
	    _inherits(IconToggle, _React$Component);
	
	    function IconToggle() {
	        _classCallCheck(this, IconToggle);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(IconToggle).apply(this, arguments));
	    }
	
	    _createClass(IconToggle, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (this.props.disabled !== prevProps.disabled) {
	                var fnName = this.props.disabled ? 'disable' : 'enable';
	                (0, _reactDom.findDOMNode)(this).MaterialIconToggle[fnName]();
	            }
	            if (this.props.checked !== prevProps.checked) {
	                var fnName = this.props.checked ? 'check' : 'uncheck';
	                (0, _reactDom.findDOMNode)(this).MaterialIconToggle[fnName]();
	            }
	        }
	    }, {
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
	
	            return _react2.default.createElement(
	                'label',
	                { className: classes },
	                _react2.default.createElement('input', _extends({
	                    type: 'checkbox',
	                    className: 'mdl-icon-toggle__input'
	                }, inputProps)),
	                _react2.default.createElement(_Icon2.default, { className: 'mdl-icon-toggle__label', name: name })
	            );
	        }
	    }]);
	
	    return IconToggle;
	}(_react2.default.Component);
	
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
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(107);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProgressBar = function (_React$Component) {
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
	}(_react2.default.Component);
	
	ProgressBar.propTypes = {
	    buffer: _react.PropTypes.number,
	    className: _react.PropTypes.string,
	    indeterminate: _react.PropTypes.bool,
	    progress: _react.PropTypes.number
	};
	exports.default = (0, _mdlUpgrade2.default)(ProgressBar);

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(107);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Radio = function (_React$Component) {
	    _inherits(Radio, _React$Component);
	
	    function Radio() {
	        _classCallCheck(this, Radio);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Radio).apply(this, arguments));
	    }
	
	    _createClass(Radio, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (this.props.disabled !== prevProps.disabled) {
	                var fnName = this.props.disabled ? 'disable' : 'enable';
	                (0, _reactDom.findDOMNode)(this).MaterialRadio[fnName]();
	            }
	            if (this.props.checked !== prevProps.checked) {
	                var fnName = this.props.checked ? 'check' : 'uncheck';
	                (0, _reactDom.findDOMNode)(this).MaterialRadio[fnName]();
	            }
	        }
	    }, {
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
	
	            return _react2.default.createElement(
	                'label',
	                { className: classes },
	                _react2.default.createElement('input', _extends({
	                    type: 'radio',
	                    className: 'mdl-radio__button',
	                    value: value,
	                    name: name
	                }, inputProps)),
	                _react2.default.createElement(
	                    'span',
	                    { className: 'mdl-radio__label' },
	                    children
	                )
	            );
	        }
	    }]);
	
	    return Radio;
	}(_react2.default.Component);
	
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
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Radio = __webpack_require__(135);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var RadioGroup = function RadioGroup(props) {
	    var name = props.name;
	    var value = props.value;
	    var children = props.children;
	    var container = props.container;
	    var childContainer = props.childContainer;
	    var onChange = props.onChange;
	
	    var otherProps = _objectWithoutProperties(props, ['name', 'value', 'children', 'container', 'childContainer', 'onChange']);
	
	    var hasOnChange = typeof onChange === 'function';
	    var checked = hasOnChange ? 'checked' : 'defaultChecked';
	
	    return _react2.default.createElement(container, otherProps, _react2.default.Children.map(children, function (child) {
	        var _extends2;
	
	        var clonedChild = _react2.default.cloneElement(child, _extends((_extends2 = {}, _defineProperty(_extends2, checked, child.props.value === value), _defineProperty(_extends2, 'name', name), _defineProperty(_extends2, 'onChange', onChange), _extends2), otherProps));
	
	        return childContainer ? _react2.default.createElement(childContainer, {}, clonedChild) : clonedChild;
	    }));
	};
	
	RadioGroup.propTypes = {
	    childContainer: _react.PropTypes.string,
	    children: _react.PropTypes.arrayOf(function (props, propName, componentName) {
	        var prop = props[propName];
	        if (prop.type !== _Radio2.default) {
	            return new Error('\'' + componentName + '\' only accepts \'Radio\' as children.');
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
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(107);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Slider = function (_React$Component) {
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
	}(_react2.default.Component);
	
	Slider.propTypes = {
	    className: _react.PropTypes.string,
	    max: _react.PropTypes.number,
	    min: _react.PropTypes.number,
	    onChange: _react.PropTypes.func,
	    value: _react.PropTypes.number
	};
	exports.default = (0, _mdlUpgrade2.default)(Slider);

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// This component doesn't use the javascript from MDL.
	// This is the expected behavior and the reason is because it's not written in
	// a way to make it easy to use with React.
	var ANIMATION_LENGTH = 250;
	
	var Snackbar = function (_React$Component) {
	    _inherits(Snackbar, _React$Component);
	
	    function Snackbar(props) {
	        _classCallCheck(this, Snackbar);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Snackbar).call(this, props));
	
	        _this.clearTimer = _this.clearTimer.bind(_this);
	        _this.timeoutId = null;
	        _this.clearTimeoutId = null;
	        _this.state = {
	            open: false
	        };
	        return _this;
	    }
	
	    _createClass(Snackbar, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({
	                open: nextProps.active
	            });
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (this.timeoutId) {
	                clearTimeout(this.timeoutId);
	            }
	
	            if (this.props.active) {
	                this.timeoutId = setTimeout(this.clearTimer, this.props.timeout);
	
	                // Hack fix to re-center the snackbar based on its content
	                this.refs.snackbar.style.marginLeft = '-' + this.refs.snackbar.offsetWidth * 0.5 + 'px';
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.timeoutId) {
	                clearTimeout(this.timeoutId);
	                this.timeoutId = null;
	            }
	            if (this.clearTimeoutId) {
	                clearTimeout(this.clearTimeoutId);
	                this.clearTimeoutId = null;
	            }
	        }
	    }, {
	        key: 'clearTimer',
	        value: function clearTimer() {
	            var _this2 = this;
	
	            this.timeoutId = null;
	            this.setState({ open: false });
	
	            this.clearTimeoutId = setTimeout(function () {
	                _this2.clearTimeoutId = null;
	                _this2.props.onTimeout();
	            }, ANIMATION_LENGTH);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var action = _props.action;
	            var active = _props.active;
	            var className = _props.className;
	            var children = _props.children;
	            var onActionClick = _props.onActionClick;
	            var onTimeout = _props.onTimeout;
	            var timeout = _props.timeout;
	
	            var otherProps = _objectWithoutProperties(_props, ['action', 'active', 'className', 'children', 'onActionClick', 'onTimeout', 'timeout']);
	
	            var open = this.state.open;
	
	
	            var classes = (0, _classnames2.default)('mdl-snackbar', {
	                'mdl-snackbar--active': open
	            }, className);
	
	            return _react2.default.createElement(
	                'div',
	                _extends({ ref: 'snackbar', className: classes, 'aria-hidden': !open }, otherProps),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'mdl-snackbar__text' },
	                    active && children
	                ),
	                active && action && _react2.default.createElement(
	                    'button',
	                    { className: 'mdl-snackbar__action', type: 'button', onClick: onActionClick },
	                    action
	                )
	            );
	        }
	    }]);
	
	    return Snackbar;
	}(_react2.default.Component);
	
	Snackbar.propTypes = {
	    action: _react.PropTypes.string,
	    active: _react.PropTypes.bool.isRequired,
	    className: _react.PropTypes.string,
	    onActionClick: _react.PropTypes.func,
	    onTimeout: _react.PropTypes.func.isRequired,
	    timeout: _react.PropTypes.number
	};
	Snackbar.defaultProps = {
	    timeout: 2750
	};
	exports.default = Snackbar;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(107);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Spinner = function (_React$Component) {
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
	}(_react2.default.Component);
	
	Spinner.propTypes = {
	    className: _react.PropTypes.string,
	    singleColor: _react.PropTypes.bool
	};
	exports.default = (0, _mdlUpgrade2.default)(Spinner);

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(107);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Switch = function (_React$Component) {
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
	
	            return _react2.default.createElement(
	                'label',
	                { className: classes },
	                _react2.default.createElement('input', _extends({
	                    type: 'checkbox',
	                    className: 'mdl-switch__input'
	                }, inputProps)),
	                _react2.default.createElement(
	                    'span',
	                    { className: 'mdl-switch__label' },
	                    children
	                )
	            );
	        }
	    }]);
	
	    return Switch;
	}(_react2.default.Component);
	
	Switch.propTypes = {
	    checked: _react.PropTypes.bool,
	    className: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    onChange: _react.PropTypes.func,
	    ripple: _react.PropTypes.bool
	};
	exports.default = (0, _mdlUpgrade2.default)(Switch);

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(107);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Textfield = function (_React$Component) {
	    _inherits(Textfield, _React$Component);
	
	    function Textfield() {
	        _classCallCheck(this, Textfield);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Textfield).apply(this, arguments));
	    }
	
	    _createClass(Textfield, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (this.props.required !== prevProps.required || this.props.pattern !== prevProps.pattern || this.props.error !== prevProps.error) {
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
	            var id = _props.id;
	            var error = _props.error;
	            var expandable = _props.expandable;
	            var expandableIcon = _props.expandableIcon;
	            var floatingLabel = _props.floatingLabel;
	            var label = _props.label;
	            var maxRows = _props.maxRows;
	            var rows = _props.rows;
	            var style = _props.style;
	
	            var otherProps = _objectWithoutProperties(_props, ['className', 'inputClassName', 'id', 'error', 'expandable', 'expandableIcon', 'floatingLabel', 'label', 'maxRows', 'rows', 'style']);
	
	            var hasRows = !!rows;
	            var customId = id || 'textfield-' + label.replace(/[^a-z0-9]/gi, '');
	            var inputTag = hasRows || maxRows > 1 ? 'textarea' : 'input';
	
	            var inputProps = _extends({
	                className: (0, _classnames2.default)('mdl-textfield__input', inputClassName),
	                id: customId,
	                rows: rows,
	                ref: 'input'
	            }, otherProps);
	
	            var input = _react2.default.createElement(inputTag, inputProps);
	            var labelContainer = _react2.default.createElement(
	                'label',
	                { className: 'mdl-textfield__label', htmlFor: customId },
	                label
	            );
	            var errorContainer = !!error && _react2.default.createElement(
	                'span',
	                { className: 'mdl-textfield__error' },
	                error
	            );
	
	            var containerClasses = (0, _classnames2.default)('mdl-textfield mdl-js-textfield', {
	                'mdl-textfield--floating-label': floatingLabel,
	                'mdl-textfield--expandable': expandable
	            }, className);
	
	            return expandable ? _react2.default.createElement(
	                'div',
	                { className: containerClasses, style: style },
	                _react2.default.createElement(
	                    'label',
	                    { className: 'mdl-button mdl-js-button mdl-button--icon', htmlFor: customId },
	                    _react2.default.createElement(
	                        'i',
	                        { className: 'material-icons' },
	                        expandableIcon
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'mdl-textfield__expandable-holder' },
	                    input,
	                    labelContainer,
	                    errorContainer
	                )
	            ) : _react2.default.createElement(
	                'div',
	                { className: containerClasses, style: style },
	                input,
	                labelContainer,
	                errorContainer
	            );
	        }
	    }]);
	
	    return Textfield;
	}(_react2.default.Component);
	
	Textfield.propTypes = {
	    className: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    error: _react.PropTypes.node,
	    expandable: _react.PropTypes.bool,
	    expandableIcon: _react.PropTypes.string,
	    floatingLabel: _react.PropTypes.bool,
	    id: _react.PropTypes.string,
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
/* 142 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getColorClass = getColorClass;
	exports.getTextColorClass = getTextColorClass;
	// see https://github.com/google/material-design-lite/blob/master/src/palette/_palette.scss
	// for the color and level possibilities
	
	function getColorClass(color, level) {
	    var lvlClass = level ? '-' + level : '';
	    return 'mdl-color--' + color + lvlClass;
	}
	
	function getTextColorClass(color, level) {
	    var lvlClass = level ? '-' + level : '';
	    return 'mdl-color-text--' + color + lvlClass;
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(84);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _TemplateHelper = __webpack_require__(85);
	
	var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);
	
	var _src = __webpack_require__(86);
	
	var _palette = __webpack_require__(142);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Text = function (_React$Component) {
	    _inherits(Text, _React$Component);
	
	    function Text(props) {
	        _classCallCheck(this, Text);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Text).call(this, props));
	
	        _this.onChangeHeaderTab = _this.onChangeHeaderTab.bind(_this);
	
	        _this.state = {
	            activeHeaderTab: 0
	        };
	        return _this;
	    }
	
	    _createClass(Text, [{
	        key: 'onChangeHeaderTab',
	        value: function onChangeHeaderTab(tabId) {
	            this.setState({
	                activeHeaderTab: tabId
	            });
	        }
	    }, {
	        key: 'renderTabOverview',
	        value: function renderTabOverview() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _src.Grid,
	                    { component: 'section', className: 'section--center', shadow: 0, noSpacing: true },
	                    _react2.default.createElement(
	                        _src.Cell,
	                        { component: 'header', col: 3, tablet: 2, phone: 4, className: (0, _classnames2.default)('section__play-btn', (0, _palette.getColorClass)('teal', 100), (0, _palette.getTextColorClass)('white')) },
	                        _react2.default.createElement(_src.Icon, { name: 'play_circle_filled' })
	                    ),
	                    _react2.default.createElement(
	                        _src.Cell,
	                        { component: _src.Card, col: 9, tablet: 6, phone: 4 },
	                        _react2.default.createElement(
	                            _src.CardText,
	                            null,
	                            _react2.default.createElement(
	                                'h4',
	                                null,
	                                'Features'
	                            ),
	                            'Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse.'
	                        ),
	                        _react2.default.createElement(
	                            _src.CardActions,
	                            null,
	                            _react2.default.createElement(
	                                _src.Button,
	                                { href: '#' },
	                                'Read our features'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(_src.IconButton, { name: 'more_vert', id: 'btn1', ripple: true }),
	                    _react2.default.createElement(
	                        _src.Menu,
	                        { target: 'btn1', align: 'right', valign: 'bottom' },
	                        _react2.default.createElement(
	                            _src.MenuItem,
	                            null,
	                            'Lorem'
	                        ),
	                        _react2.default.createElement(
	                            _src.MenuItem,
	                            { disabled: true },
	                            'Ipsum'
	                        ),
	                        _react2.default.createElement(
	                            _src.MenuItem,
	                            null,
	                            'Dolor'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _src.Grid,
	                    { component: 'section', className: 'section--center', shadow: 0, noSpacing: true },
	                    _react2.default.createElement(
	                        _src.Cell,
	                        { component: _src.Card, col: 12 },
	                        _react2.default.createElement(
	                            _src.Grid,
	                            { component: _src.CardText, noSpacing: true },
	                            _react2.default.createElement(
	                                _src.Cell,
	                                { component: 'h4', col: 12 },
	                                'Details'
	                            ),
	                            _react2.default.createElement(
	                                _src.Cell,
	                                { className: 'section__circle-container', col: 2, phone: 1 },
	                                _react2.default.createElement('div', { className: (0, _classnames2.default)('section__circle-container__circle', (0, _palette.getColorClass)('primary')) })
	                            ),
	                            _react2.default.createElement(
	                                _src.Cell,
	                                { className: 'section__text', col: 10, tablet: 6, phone: 3 },
	                                _react2.default.createElement(
	                                    'h5',
	                                    null,
	                                    'Lorem ipsum dolor sit amet'
	                                ),
	                                'Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis ',
	                                _react2.default.createElement(
	                                    'a',
	                                    { href: '#' },
	                                    'proident minim'
	                                ),
	                                '.'
	                            ),
	                            _react2.default.createElement(
	                                _src.Cell,
	                                { className: 'section__circle-container', col: 2, phone: 1 },
	                                _react2.default.createElement('div', { className: (0, _classnames2.default)('section__circle-container__circle', (0, _palette.getColorClass)('primary')) })
	                            ),
	                            _react2.default.createElement(
	                                _src.Cell,
	                                { className: 'section__text', col: 10, tablet: 6, phone: 3 },
	                                _react2.default.createElement(
	                                    'h5',
	                                    null,
	                                    'Lorem ipsum dolor sit amet'
	                                ),
	                                'Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis ',
	                                _react2.default.createElement(
	                                    'a',
	                                    { href: '#' },
	                                    'proident minim'
	                                ),
	                                '.'
	                            ),
	                            _react2.default.createElement(
	                                _src.Cell,
	                                { className: 'section__circle-container', col: 2, phone: 1 },
	                                _react2.default.createElement('div', { className: (0, _classnames2.default)('section__circle-container__circle', (0, _palette.getColorClass)('primary')) })
	                            ),
	                            _react2.default.createElement(
	                                _src.Cell,
	                                { className: 'section__text', col: 10, tablet: 6, phone: 3 },
	                                _react2.default.createElement(
	                                    'h5',
	                                    null,
	                                    'Lorem ipsum dolor sit amet'
	                                ),
	                                'Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis ',
	                                _react2.default.createElement(
	                                    'a',
	                                    { href: '#' },
	                                    'proident minim'
	                                ),
	                                '.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _src.CardActions,
	                            null,
	                            _react2.default.createElement(
	                                _src.Button,
	                                { href: '#' },
	                                'Read our features'
	                            )
	                        ),
	                        _react2.default.createElement(_src.IconButton, { name: 'more_vert', id: 'btn2', ripple: true }),
	                        _react2.default.createElement(
	                            _src.Menu,
	                            { target: 'btn2', align: 'right', valign: 'bottom' },
	                            _react2.default.createElement(
	                                _src.MenuItem,
	                                null,
	                                'Lorem'
	                            ),
	                            _react2.default.createElement(
	                                _src.MenuItem,
	                                { disabled: true },
	                                'Ipsum'
	                            ),
	                            _react2.default.createElement(
	                                _src.MenuItem,
	                                null,
	                                'Dolor'
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _src.Grid,
	                    { component: 'section', className: 'section--center', shadow: 0, noSpacing: true },
	                    _react2.default.createElement(
	                        _src.Cell,
	                        { component: _src.Card, col: 12 },
	                        _react2.default.createElement(
	                            _src.CardText,
	                            null,
	                            _react2.default.createElement(
	                                'h4',
	                                null,
	                                'Technology'
	                            ),
	                            'Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse. Pariatur occaecat nisi laboris tempor laboris eiusmod qui id Lorem esse commodo in. Exercitation aute dolore deserunt culpa consequat elit labore incididunt elit anim.'
	                        ),
	                        _react2.default.createElement(
	                            _src.CardActions,
	                            null,
	                            _react2.default.createElement(
	                                _src.Button,
	                                { href: '#' },
	                                'Read our features'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(_src.IconButton, { name: 'more_vert', id: 'btn3', ripple: true }),
	                    _react2.default.createElement(
	                        _src.Menu,
	                        { target: 'btn3', align: 'right', valign: 'bottom' },
	                        _react2.default.createElement(
	                            _src.MenuItem,
	                            null,
	                            'Lorem'
	                        ),
	                        _react2.default.createElement(
	                            _src.MenuItem,
	                            { disabled: true },
	                            'Ipsum'
	                        ),
	                        _react2.default.createElement(
	                            _src.MenuItem,
	                            null,
	                            'Dolor'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _src.Grid,
	                    { component: 'section', className: (0, _classnames2.default)('section--footer', (0, _palette.getColorClass)('white')) },
	                    _react2.default.createElement(
	                        _src.Cell,
	                        { className: 'section__circle-container', col: 2, phone: 1 },
	                        _react2.default.createElement('div', { className: (0, _classnames2.default)('section__circle-container__circle section__circle--big', (0, _palette.getColorClass)('accent')) })
	                    ),
	                    _react2.default.createElement(
	                        _src.Cell,
	                        { className: 'section__text', col: 4, tablet: 6, phone: 3 },
	                        _react2.default.createElement(
	                            'h5',
	                            null,
	                            'Lorem ipsum dolor sit amet'
	                        ),
	                        'Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.'
	                    ),
	                    _react2.default.createElement(
	                        _src.Cell,
	                        { className: 'section__circle-container', col: 2, phone: 1 },
	                        _react2.default.createElement('div', { className: (0, _classnames2.default)('section__circle-container__circle section__circle--big', (0, _palette.getColorClass)('accent')) })
	                    ),
	                    _react2.default.createElement(
	                        _src.Cell,
	                        { className: 'section__text', col: 4, tablet: 6, phone: 3 },
	                        _react2.default.createElement(
	                            'h5',
	                            null,
	                            'Lorem ipsum dolor sit amet'
	                        ),
	                        'Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.'
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'renderFeatures',
	        value: function renderFeatures() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _src.Grid,
	                    { component: 'section', className: 'section--center', noSpacing: true },
	                    _react2.default.createElement(
	                        _src.Cell,
	                        { col: 12 },
	                        _react2.default.createElement(
	                            'h4',
	                            null,
	                            'Features'
	                        ),
	                        'Minim duis incididunt est cillum est ex occaecat consectetur. Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.',
	                        _react2.default.createElement(
	                            'ul',
	                            { className: 'toc' },
	                            _react2.default.createElement(
	                                'h4',
	                                null,
	                                'Contents'
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { href: '#lorem1' },
	                                'Lorem ipsum'
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { href: '#lorem2' },
	                                'Lorem ipsum'
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { href: '#lorem3' },
	                                'Lorem ipsum'
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { href: '#lorem4' },
	                                'Lorem ipsum'
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { href: '#lorem5' },
	                                'Lorem ipsum'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h5',
	                            { id: 'lorem1' },
	                            'Lorem ipsum dolor sit amet'
	                        ),
	                        'Excepteur et pariatur officia veniam anim culpa cupidatat consequat ad velit culpa est non.',
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Nisi qui nisi duis commodo duis reprehenderit consequat velit aliquip.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Dolor consectetur incididunt in ipsum laborum non et irure pariatur excepteur anim occaecat officia sint.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Lorem labore proident officia excepteur do.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'Sit qui est voluptate proident minim cillum in aliquip cupidatat labore pariatur id tempor id. Proident occaecat occaecat sint mollit tempor duis dolor cillum anim. Dolore sunt ea mollit fugiat in aliqua consequat nostrud aliqua ut irure in dolore. Proident aliqua culpa sint sint exercitation. Non proident occaecat reprehenderit veniam et proident dolor id culpa ea tempor do dolor. Nulla adipisicing qui fugiat id dolor. Nostrud magna voluptate irure veniam veniam labore ipsum deserunt adipisicing laboris amet eu irure. Sunt dolore nisi velit sit id. Nostrud voluptate labore proident cupidatat enim amet Lorem officia magna excepteur occaecat eu qui. Exercitation culpa deserunt non et tempor et non.'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'Do dolor eiusmod eu mollit dolore nostrud deserunt cillum irure esse sint irure fugiat exercitation. Magna sit voluptate id in tempor elit veniam enim cupidatat ea labore elit. Aliqua pariatur eu nulla labore magna dolore mollit occaecat sint commodo culpa. Eu non minim duis pariatur Lorem quis exercitation. Sunt qui ex incididunt sit anim incididunt sit elit ad officia id.'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { id: 'lorem2' },
	                            'Tempor voluptate ex consequat fugiat aliqua. Do sit et reprehenderit culpa deserunt culpa. Excepteur quis minim mollit irure nulla excepteur enim quis in laborum. Aliqua elit voluptate ad deserunt nulla reprehenderit adipisicing sint. Est in eiusmod exercitation esse commodo. Ea reprehenderit exercitation veniam adipisicing minim nostrud. Veniam dolore ex ea occaecat non enim minim id ut aliqua adipisicing ad. Occaecat excepteur aliqua tempor cupidatat aute dolore deserunt ipsum qui incididunt aliqua occaecat sit quis. Culpa sint aliqua aliqua reprehenderit veniam irure fugiat ea ad.'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'Eu minim fugiat laborum irure veniam Lorem aliqua enim. Aliqua veniam incididunt consequat irure consequat tempor do nisi deserunt. Elit dolore ad quis consectetur sint laborum anim magna do nostrud amet. Ea nulla sit consequat quis qui irure dolor. Sint deserunt excepteur consectetur magna irure. Dolor tempor exercitation dolore pariatur incididunt ut laboris fugiat ipsum sunt veniam aute sunt labore. Non dolore sit nostrud eu ad excepteur cillum eu ex Lorem duis.'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'Id occaecat velit non ipsum occaecat aliqua quis ut. Eiusmod est magna non esse est ex incididunt aute ullamco. Cillum excepteur sint ipsum qui quis velit incididunt amet. Qui deserunt anim enim laborum cillum reprehenderit duis mollit amet ad officia enim. Minim sint et quis aliqua aliqua do minim officia dolor deserunt ipsum laboris. Nulla nisi voluptate consectetur est voluptate et amet. Occaecat ut quis adipisicing ad enim. Magna est magna sit duis proident veniam reprehenderit fugiat reprehenderit enim velit ex. Ullamco laboris culpa irure aliquip ad Lorem consequat veniam ad ipsum eu. Ipsum culpa dolore sunt officia laborum quis.'
	                        ),
	                        _react2.default.createElement(
	                            'h5',
	                            { id: 'lorem3' },
	                            'Lorem ipsum dolor sit amet'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { id: 'lorem4' },
	                            'Eiusmod nulla aliquip ipsum reprehenderit nostrud non excepteur mollit amet esse est est dolor. Dolore quis pariatur sit consectetur veniam esse ullamco duis Lorem qui enim ut veniam. Officia deserunt minim duis laborum dolor in velit pariatur commodo ullamco eu. Aute adipisicing ad duis labore laboris do mollit dolor cillum sunt aliqua ullamco. Esse tempor quis cillum consequat reprehenderit. Adipisicing proident anim eu sint elit aliqua anim dolore cupidatat fugiat aliquip qui.'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { id: 'lorem5' },
	                            'Nisi eiusmod esse cupidatat excepteur exercitation ipsum reprehenderit nostrud deserunt aliqua ullamco. Anim est irure commodo eiusmod pariatur officia. Est dolor ipsum excepteur magna aliqua ad veniam irure qui occaecat eiusmod aute fugiat commodo. Quis mollit incididunt amet sit minim velit eu fugiat voluptate excepteur. Sit minim id pariatur ex cupidatat cupidatat nostrud nostrud ipsum.'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'Enim ea officia excepteur ad veniam id reprehenderit eiusmod esse mollit consequat. Esse non aute ullamco Lorem aliqua qui dolore irure eiusmod aute aliqua proident labore aliqua. Ipsum voluptate voluptate exercitation laborum deserunt nulla elit aliquip et minim ex veniam. Duis cupidatat aute sunt officia mollit dolor ad elit ad aute labore nostrud duis pariatur. In est sint voluptate consectetur velit ea non labore. Ut duis ea aliqua consequat nulla laboris fugiat aute id culpa proident. Minim eiusmod laboris enim Lorem nisi excepteur mollit voluptate enim labore reprehenderit officia mollit.'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'Cupidatat labore nisi ut sunt voluptate quis sunt qui ad Lorem esse nisi. Ex esse velit ullamco incididunt occaecat dolore veniam tempor minim adipisicing amet. Consequat in exercitation est elit anim consequat cillum sint labore cillum. Aliquip mollit laboris ad labore anim.'
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'renderActiveTabContent',
	        value: function renderActiveTabContent() {
	            switch (this.state.activeHeaderTab) {
	                case 0:
	                    return this.renderTabOverview();
	                case 1:
	                    return this.renderFeatures();
	                default:
	                    return _react2.default.createElement(
	                        'div',
	                        null,
	                        'Nothing to see here :-)'
	                    );
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: (0, _classnames2.default)('mdl-demo', 'mdl-base') },
	                _react2.default.createElement(
	                    _src.Layout,
	                    { fixedHeader: true, className: (0, _classnames2.default)((0, _palette.getColorClass)('grey', 100), (0, _palette.getTextColorClass)('grey', 700)) },
	                    _react2.default.createElement(
	                        _src.Header,
	                        { className: (0, _palette.getColorClass)('primary'), title: 'Material Design Lite', scroll: true },
	                        _react2.default.createElement(_src.HeaderRow, { className: 'mdl-layout--large-screen-only' }),
	                        _react2.default.createElement(
	                            _src.HeaderRow,
	                            { className: 'mdl-layout--large-screen-only' },
	                            _react2.default.createElement(
	                                'h3',
	                                null,
	                                'Name & Title'
	                            )
	                        ),
	                        _react2.default.createElement(_src.HeaderRow, { className: 'mdl-layout--large-screen-only' }),
	                        _react2.default.createElement(
	                            _src.HeaderTabs,
	                            { className: (0, _palette.getTextColorClass)('primary-dark'), activeTab: this.state.activeHeaderTab, onChange: this.onChangeHeaderTab, ripple: true },
	                            _react2.default.createElement(
	                                _src.Tab,
	                                null,
	                                'Overview'
	                            ),
	                            _react2.default.createElement(
	                                _src.Tab,
	                                null,
	                                'Features'
	                            ),
	                            _react2.default.createElement(
	                                _src.Tab,
	                                null,
	                                'Details'
	                            ),
	                            _react2.default.createElement(
	                                _src.Tab,
	                                null,
	                                'Technology'
	                            ),
	                            _react2.default.createElement(
	                                _src.Tab,
	                                null,
	                                'FAQ'
	                            ),
	                            _react2.default.createElement(
	                                _src.FABButton,
	                                { ripple: true, colored: true, accent: true, className: 'mdl-shadow--4dp', id: 'add' },
	                                _react2.default.createElement(_src.Icon, { name: 'add' }),
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'visuallyhidden' },
	                                    'Add'
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _src.Content,
	                        { component: 'main' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'react-mdl-layout__tab-panel' },
	                            this.renderActiveTabContent()
	                        ),
	                        _react2.default.createElement(
	                            _src.Footer,
	                            { size: 'mega' },
	                            _react2.default.createElement(
	                                _src.FooterSection,
	                                { type: 'middle' },
	                                _react2.default.createElement(
	                                    _src.FooterDropDownSection,
	                                    { title: 'Features' },
	                                    _react2.default.createElement(
	                                        _src.FooterLinkList,
	                                        null,
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#' },
	                                            'About'
	                                        ),
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#' },
	                                            'Terms'
	                                        ),
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#' },
	                                            'Partners'
	                                        ),
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#' },
	                                            'Updates'
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _src.FooterDropDownSection,
	                                    { title: 'Details' },
	                                    _react2.default.createElement(
	                                        _src.FooterLinkList,
	                                        null,
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#' },
	                                            'Specs'
	                                        ),
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#' },
	                                            'Tools'
	                                        ),
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#' },
	                                            'Resources'
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _src.FooterDropDownSection,
	                                    { title: 'Technology' },
	                                    _react2.default.createElement(
	                                        _src.FooterLinkList,
	                                        null,
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#' },
	                                            'How it works'
	                                        ),
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#' },
	                                            'Patterns'
	                                        ),
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#' },
	                                            'Usage'
	                                        ),
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#' },
	                                            'Products'
	                                        ),
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#' },
	                                            'Contracts'
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _src.FooterDropDownSection,
	                                    { title: 'FAQ' },
	                                    _react2.default.createElement(
	                                        _src.FooterLinkList,
	                                        null,
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#' },
	                                            'Questions'
	                                        ),
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#' },
	                                            'Answers'
	                                        ),
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#' },
	                                            'Contact Us'
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _src.FooterSection,
	                                { type: 'bottom', logo: 'More Information' },
	                                _react2.default.createElement(
	                                    _src.FooterLinkList,
	                                    null,
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: 'https://developers.google.com/web/starter-kit/' },
	                                        'Web Starter Kit'
	                                    ),
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: '#' },
	                                        'Help'
	                                    ),
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: '#' },
	                                        'Privacy & Terms'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Text;
	}(_react2.default.Component);
	
	exports.default = (0, _TemplateHelper2.default)(Text, '\nhtml, body {\n  font-family: \'Roboto\', \'Helvetica\', sans-serif;\n  margin: 0;\n  padding: 0;\n}\n.mdl-demo .mdl-layout__header-row {\n  padding-left: 40px;\n}\n.mdl-demo .mdl-layout.is-small-screen .mdl-layout__header-row h3 {\n  font-size: inherit;\n}\n.mdl-demo .mdl-layout__tab-bar-button {\n  display: none;\n}\n.mdl-demo .mdl-layout.is-small-screen .mdl-layout__tab-bar .mdl-button {\n  display: none;\n}\n.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar,\n.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar-container {\n  overflow: visible;\n}\n.mdl-demo .mdl-layout__tab-bar-container {\n  height: 64px;\n}\n.mdl-demo .mdl-layout__tab-bar {\n  padding: 0;\n  padding-left: 16px;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n}\n.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab {\n  height: 64px;\n  line-height: 64px;\n}\n.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab.is-active::after {\n  background-color: white;\n  height: 4px;\n}\n.mdl-demo main > .react-mdl-layout__tab-panel {\n  padding: 8px;\n  padding-top: 48px;\n}\n.mdl-demo .mdl-card {\n  height: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.mdl-demo .mdl-card > * {\n  height: auto;\n}\n.mdl-demo .mdl-card .mdl-card__supporting-text {\n  margin: 40px;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  padding: 0;\n  color: inherit;\n  width: calc(100% - 80px);\n}\n.mdl-demo.mdl-demo .mdl-card__supporting-text h4 {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n.mdl-demo .mdl-card__actions {\n  margin: 0;\n  padding: 4px 40px;\n  color: inherit;\n}\n.mdl-demo .mdl-card__actions a {\n  color: #00BCD4;\n  margin: 0;\n}\n.mdl-demo .mdl-card__actions a:hover,\n.mdl-demo .mdl-card__actions a:active {\n  color: inherit;\n  background-color: transparent;\n}\n.mdl-demo .mdl-card__supporting-text + .mdl-card__actions {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n.mdl-demo #add {\n  position: absolute;\n  right: 40px;\n  top: 36px;\n  z-index: 999;\n}\n.mdl-demo .mdl-layout__content {\n    padding-top: 48px;\n}\n.mdl-demo .mdl-layout__content section:not(:last-of-type) {\n  position: relative;\n  margin-bottom: 48px;\n}\n.mdl-demo section.section--center {\n  max-width: 860px;\n}\n.mdl-demo #features section.section--center {\n  max-width: 620px;\n}\n.mdl-demo section > header{\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.mdl-demo section > .section__play-btn {\n  min-height: 200px;\n}\n.mdl-demo section > header > .material-icons {\n  font-size: 3rem;\n}\n.mdl-demo section > button {\n  position: absolute;\n  z-index: 99;\n  top: 8px;\n  right: 8px;\n}\n.mdl-demo section .section__circle {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-flex-shrink: 1;\n      -ms-flex-negative: 1;\n          flex-shrink: 1;\n}\n.mdl-demo section .section__text {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  padding-top: 8px;\n}\n.mdl-demo section .section__text h5 {\n  font-size: inherit;\n  margin: 0;\n  margin-bottom: 0.5em;\n}\n.mdl-demo section .section__text a {\n  text-decoration: none;\n}\n.mdl-demo section .section__circle-container > .section__circle-container__circle {\n  width: 64px;\n  height: 64px;\n  border-radius: 32px;\n  margin: 8px 0;\n}\n.mdl-demo section.section--footer .section__circle--big {\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  margin: 8px 32px;\n}\n.mdl-demo .is-small-screen section.section--footer .section__circle--big {\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  margin: 8px 16px;\n}\n.mdl-demo section.section--footer {\n  padding: 64px 0;\n  margin: 0 -8px -8px -8px;\n}\n.mdl-demo section.section--center .section__text:not(:last-child) {\n  border-bottom: 1px solid rgba(0,0,0,.13);\n}\n.mdl-demo .mdl-card .mdl-card__supporting-text > h3:first-child {\n  margin-bottom: 24px;\n}\n.mdl-demo #features section {\n  margin-bottom: 72px;\n}\n.mdl-demo #features h4, #features h5 {\n  margin-bottom: 16px;\n}\n.mdl-demo .toc {\n  border-left: 4px solid #C1EEF4;\n  margin: 24px;\n  padding: 0;\n  padding-left: 8px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.mdl-demo .toc h4 {\n  font-size: 0.9rem;\n  margin-top: 0;\n}\n.mdl-demo .toc a {\n  color: #4DD0E1;\n  text-decoration: none;\n  font-size: 16px;\n  line-height: 28px;\n  display: block;\n}\n.mdl-demo .mdl-menu__container {\n  z-index: 99;\n}\n');

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/* eslint no-eval: 0 */
	
	exports.default = function (html) {
	    return function (_React$Component) {
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
	
	                var dialogs = document.querySelectorAll('dialog');
	                [].slice.call(dialogs).forEach(function (dialog) {
	                    return window.dialogPolyfill.registerDialog(dialog);
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
	                return _react2.default.createElement('section', { dangerouslySetInnerHTML: { __html: html } });
	            }
	        }]);
	
	        return PageComponent;
	    }(_react2.default.Component);
	};

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map