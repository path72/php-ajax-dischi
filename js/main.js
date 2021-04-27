/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

// ###################################################### 
// # Vue.js - MAIN INSTANCE                             # 
// ###################################################### 
// var app = new Vue(
// 	{
// 		el: '#app',
// 		data: {
// 		},
// 		methods: {
// 		},
// 		computed: {
// 		},
// 		created() {
// 		},
// 		mounted() {
// 		},
// 		updated() {
// 		}
// 	}
// );
var app = new Vue({
  el: '#app',
  data: {
    itemList: [],
    // original remote data 
    displayItems: [],
    // displayed (sortable) data
    displayItemsAreReady: false,
    sortSelected: '',
    // parameter1 selected for sorting
    filterLists: {},
    // object with parameter1: [ parameter2 value list ]
    filter1Selected: '',
    // parameter1 selected for filter
    filter2Selected: '' // parameter2 selected for filter

  },
  methods: {
    getRemoteData: function getRemoteData() {
      var _this = this;

      axios.get('https://flynn.boolean.careers/exercises/api/array/music').then(function (resp) {
        _this.itemList = resp.data.response; // original data

        _this.buildFilterList(_this.itemList); // object of data's parameters

      });
    },
    buildFilterList: function buildFilterList(items) {
      var _this2 = this;

      items.forEach(function (item) {
        // item cycle
        for (key in item) {
          // parameter1 cycle of item
          if (_this2.filterLists[key] == undefined) _this2.filterLists[key] = []; // parameter2 values list

          if (!_this2.filterLists[key].includes(item[key])) _this2.filterLists[key].push(item[key]); // parameter2 values
        }
      }); // console.log(this.filterLists);

      this.displayItems = this.itemList; // filling displayed data

      if (this.displayItems.length > 0) this.displayItemsAreReady = true;
    },
    sortFilter: function sortFilter() {
      var _this3 = this;

      if (this.sortSelected) {
        this.filterLists[this.sortSelected].sort(); // sorted parameter2 values
        // console.log(this.filterLists[this.sortSelected]);

        var sortedItems = []; // sorted items by sorted paramter2

        this.filterLists[this.sortSelected].forEach(function (sortPar) {
          _this3.itemList.forEach(function (item) {
            for (key in item) {
              if (item[key] == sortPar && !sortedItems.includes(item)) sortedItems.push(item);
            }
          });
        });
        this.displayItems = sortedItems; // console.log(this.displayItems);
      } else {
        this.displayItems = this.itemList;
      }
    },
    isViewable: function isViewable(item) {
      if (this.filter1Selected && this.filter2Selected) return item[this.filter1Selected] == this.filter2Selected;else return true;
    },
    isSelected: function isSelected(par) {
      if (par == this.filter2Selected) return true;else return false;
    },
    isSorted: function isSorted(par) {
      if (par == this.sortSelected) return true;else return false;
    },
    cap: function cap(string) {
      return string[0].toUpperCase() + string.substring(1);
    }
  },
  computed: {},
  created: function created() {
    this.getRemoteData(); // prima è meglio
  },
  mounted: function mounted() {},
  updated: function updated() {}
}); // Vue.config.devtools = true;

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkscss"] = self["webpackChunkscss"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;