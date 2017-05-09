webpackJsonp([6],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 col-md-offset-2"
  }, [_c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "tag": "button",
      "to": {
        name: 'createBrands'
      }
    }
  }, [_vm._v("Create Brand\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "form-group pull-right"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchQuery),
      expression: "searchQuery"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "search...",
      "name": "query",
      "aria-describedby": "basic-addon1"
    },
    domProps: {
      "value": (_vm.searchQuery)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchQuery = $event.target.value
      }
    }
  })]), _vm._v(" "), (_vm.brands) ? _c('div', [_c('demo-grid', {
    attrs: {
      "data": _vm.brands,
      "columns": _vm.brandsColumns,
      "filter-key": _vm.searchQuery
    }
  })], 1) : _c('div', [_vm._v("\n        Loading...\n    ")])], 1)])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1cd53b8c", module.exports)
  }
}

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("2b6d55b8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1cd53b8c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1cd53b8c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(124)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(109),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\inventory_vue__\\resources\\assets\\js\\components\\Brands\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1cd53b8c", Component.options)
  } else {
    hotAPI.reload("data-v-1cd53b8c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    data: function data() {
        var sortOrders = {};
        this.columns.forEach(function (key) {
            sortOrders[key] = 1;
        });
        var searchKeys = {};
        this.columns.forEach(function (key) {
            searchKeys[key] = '';
        });
        return {
            sortKey: '',
            sortOrders: sortOrders,
            searchOrder: searchKeys,

            currentPage: 0,
            itemsPerPage: 10,
            resultCount: 0,

            loading: false,
            post: null,
            error: null
        };
    },
    computed: {
        totalPages: function totalPages() {
            return Math.ceil(this.filteredData.length / this.itemsPerPage);
        },
        paginatedData: function paginatedData() {
            if (this.currentPage >= this.totalPages) {
                this.currentPage = this.totalPages;
            }
            var index = this.currentPage * this.itemsPerPage;
            return this.filteredData.slice(index, index + this.itemsPerPage);
        },
        filteredData: function filteredData() {
            var sortKey = this.sortKey;
            var filterKey = this.filterKey && this.filterKey.toLowerCase();
            var searchKey = this.searchOrder;
            var order = this.sortOrders[sortKey] || 1;
            var data = this.data;

            if (filterKey || searchKey) data = data.filter(function (row) {
                return Object.keys(row).some(function (key) {
                    var filter;
                    if (_.size(searchKey) == 1) {
                        filter = String(row[key]).toLowerCase().indexOf(filterKey) || String(row['name']).toLowerCase().indexOf(searchKey['name'].toLowerCase());
                    } else if (_.size(searchKey) == 8) {
                        filter = String(row[key]).toLowerCase().indexOf(filterKey) || String(row['id']).toLowerCase().indexOf(searchKey['id'].toLowerCase()) || String(row['serial']).toLowerCase().indexOf(searchKey['serial'].toLowerCase()) || String(row['quantity']).toLowerCase().indexOf(searchKey['quantity'].toLowerCase()) || String(row['description']).toLowerCase().indexOf(searchKey['description'].toLowerCase()) || String(row['location']).toLowerCase().indexOf(searchKey['location'].toLowerCase()) || String(row['manufacture']).toLowerCase().indexOf(searchKey['manufacture'].toLowerCase()) || String(row['model']).toLowerCase().indexOf(searchKey['model'].toLowerCase()) || String(row['category']).toLowerCase().indexOf(searchKey['category'].toLowerCase());
                    }
                    return filter > -1;
                });
            });

            if (sortKey) {
                data = data.slice().sort(function (a, b) {
                    a = a[sortKey];
                    b = b[sortKey];
                    return (a === b ? 0 : a > b ? 1 : -1) * order;
                });
            }
            return data;
        }
    },
    filters: {
        capitalize: function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        padend: function padend(str) {
            return _.toString(str).padEnd(3);
        }
    },
    methods: {
        sortBy: function sortBy(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        },
        setPage: function setPage(pageNumber) {
            this.currentPage = pageNumber;
        },
        beforeEnter: function beforeEnter(el) {
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter: function enter(el, done) {
            var delay = el.dataset.index * 50;
            setTimeout(function () {
                Velocity(el, { opacity: 1, height: '1.6em' }, { complete: done });
            }, delay);
        },
        leave: function leave(el, done) {
            var delay = el.dataset.index * 50;
            setTimeout(function () {
                Velocity(el, { opacity: 0, height: 0 }, { complete: done });
            }, delay);
        }

    }
});

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(72)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(71),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\inventory_vue__\\resources\\assets\\js\\components\\Filtering\\Filter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Filter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18945a70", Component.options)
  } else {
    hotAPI.reload("data-v-18945a70", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "panel panel-default",
    staticStyle: {
      "margin-top": "8px"
    }
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Brands")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body "
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-striped table-bordered",
    attrs: {
      "id": "example"
    }
  }, [_c('thead', [_c('tr', _vm._l((_vm.columns), function(key) {
    return _c('th', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (key === 'id' ? false : true),
        expression: "key === 'id' ? false : true"
      }],
      class: {
        active: _vm.sortKey == key
      },
      on: {
        "click": function($event) {
          _vm.sortBy(key)
        }
      }
    }, [_vm._v("\n                        " + _vm._s(_vm._f("capitalize")(key)) + "\n                        "), _c('span', {
      staticClass: "arrow",
      class: _vm.sortOrders[key] > 0 ? 'asc' : 'dsc'
    })])
  }))]), _vm._v(" "), _c('thead', [_c('tr', _vm._l((_vm.columns), function(key) {
    return _c('th', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (key === 'id' ? false : true),
        expression: "key === 'id' ? false : true"
      }]
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.searchOrder[key]),
        expression: "searchOrder[key]"
      }],
      staticClass: "input form-control",
      attrs: {
        "placeholder": key
      },
      domProps: {
        "value": (_vm.searchOrder[key])
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          var $$exp = _vm.searchOrder,
            $$idx = key;
          if (!Array.isArray($$exp)) {
            _vm.searchOrder[key] = $event.target.value
          } else {
            $$exp.splice($$idx, 1, $event.target.value)
          }
        }
      }
    })])
  }))]), _vm._v(" "), _c('transition-group', {
    attrs: {
      "name": "staggered-fade",
      "tag": "tbody",
      "css": false
    },
    on: {
      "before-enter": _vm.beforeEnter,
      "enter": _vm.enter,
      "leave": _vm.leave
    }
  }, _vm._l((_vm.paginatedData), function(entry, index) {
    return _c('tr', {
      key: index,
      attrs: {
        "data-index": index
      }
    }, _vm._l((_vm.columns), function(key, index) {
      return _c('td', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (entry[key] === entry['id'] ? false : true),
          expression: "entry[key] === entry['id'] ? false : true"
        }],
        key: index,
        attrs: {
          "data-index": index
        }
      }, [(entry[key] === entry['serial']) ? _c('span', [_c('router-link', {
        attrs: {
          "to": '/products/' + entry['id'] + '/edit'
        }
      }, [_vm._v(_vm._s(_vm._f("padend")(entry['serial'])))])], 1) : _c('span', [_vm._v(_vm._s(entry[key]))])])
    }))
  }))], 1)]), _vm._v(" "), _c('nav', {
    attrs: {
      "aria-label": "Page navigation"
    }
  }, [_c('ul', {
    staticClass: "pagination"
  }, [_vm._m(0), _vm._v(" "), _c('li', {
    class: {
      'active': _vm.currentPage === 0
    }
  }, [_c('a', {
    on: {
      "click": function($event) {
        _vm.setPage(0)
      }
    }
  }, [_vm._v("1")])]), _vm._v(" "), _vm._l((_vm.totalPages), function(pageNumber) {
    return (Math.abs(pageNumber - _vm.currentPage) < 3 || pageNumber == _vm.totalPages - 1 || pageNumber == 0) ? _c('li', {
      class: {
        'active': _vm.currentPage === pageNumber
      }
    }, [_c('a', {
      class: {
        'active': _vm.currentPage === pageNumber, last: (pageNumber == _vm.totalPages - 1 && Math.abs(pageNumber - _vm.currentPage) > 3), first: (pageNumber == 0 && Math.abs(pageNumber - _vm.currentPage) > 3)
      },
      on: {
        "click": function($event) {
          _vm.setPage(pageNumber)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(pageNumber + 1)), (_vm.currentPage === pageNumber) ? _c('span', {
      staticClass: "sr-only"
    }, [_vm._v("(current)")]) : _vm._e()])])]) : _vm._e()
  }), _vm._v(" "), _vm._m(1)], 2)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "aria-label": "Previous"
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("«")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": "#",
      "aria-label": "Next"
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("»")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-18945a70", module.exports)
  }
}

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("20994788", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-18945a70\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Filter.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-18945a70\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Filter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Filtering_Filter_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Filtering_Filter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Filtering_Filter_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DemoGrid: __WEBPACK_IMPORTED_MODULE_0__Filtering_Filter_vue___default.a
  },
  data: function data() {
    return {
      tokenLaravel: window.Laravel.csrfToken,
      searchQuery: '',
      brandsColumns: ['name'],
      brands: []

    };
  },
  created: function created() {
    this.fetchbrands();
  },


  methods: {
    fetchbrands: function fetchbrands() {
      var _this = this;

      axios.get('api/brands').then(function (response) {
        return _this.brands = response.data.brands;
      });
    }
  }
});

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

/***/ })

});