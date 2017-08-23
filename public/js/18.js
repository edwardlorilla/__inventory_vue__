webpackJsonp([18],{

/***/ 110:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        data: Array,
        columns: Array,
        filterKey: String,
        titleHead: String
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
    mounted: function mounted() {
        document.title = this.titleHead;
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
                    if (_.size(searchKey) == 2 || _.size(searchKey) == 1) {
                        filter = String(row[key]).toLowerCase().indexOf(filterKey) || String(row['name']).toLowerCase().indexOf(searchKey['name'].toLowerCase());
                    } else if (_.size(searchKey) == 2 || _.size(searchKey) == 3) {
                        filter = String(row[key]).toLowerCase().indexOf(filterKey) || String(row['id']).toLowerCase().indexOf(searchKey['id'].toLowerCase()) || String(row['name']).toLowerCase().indexOf(searchKey['name'].toLowerCase()) || String(row['productCount']).toLowerCase().indexOf(searchKey['productCount'].toLowerCase());
                    } else if (_.size(searchKey) == 5) {
                        filter = String(row[key]).toLowerCase().indexOf(filterKey) || String(row['updated']).toLowerCase().indexOf(searchKey['updated'].toLowerCase()) || String(row['serial']).toLowerCase().indexOf(searchKey['serial'].toLowerCase()) || String(row['to']).toLowerCase().indexOf(searchKey['to'].toLowerCase()) || String(row['from']).toLowerCase().indexOf(searchKey['from'].toLowerCase()) || String(row['status']).toLowerCase().indexOf(searchKey['status'].toLowerCase());
                    } else if (_.size(searchKey) >= 10) {
                        filter = String(row[key]).toLowerCase().indexOf(filterKey) || String(row['id']).toLowerCase().indexOf(searchKey['id'].toLowerCase()) || String(row['updated']).toLowerCase().indexOf(searchKey['updated'].toLowerCase()) || String(row['serial']).toLowerCase().indexOf(searchKey['serial'].toLowerCase()) || String(row['assetSerial']).toLowerCase().indexOf(searchKey['assetSerial'].toLowerCase()) || String(row['quantity']).toLowerCase().indexOf(searchKey['quantity'].toLowerCase()) || String(row['status']).toLowerCase().indexOf(searchKey['status'].toLowerCase()) || String(row['description']).toLowerCase().indexOf(searchKey['description'].toLowerCase()) || String(row['location']).toLowerCase().indexOf(searchKey['location'].toLowerCase()) || String(row['manufacture']).toLowerCase().indexOf(searchKey['manufacture'].toLowerCase()) || String(row['model']).toLowerCase().indexOf(searchKey['model'].toLowerCase()) || String(row['category']).toLowerCase().indexOf(searchKey['category'].toLowerCase());
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
        editEntry: function editEntry(index) {
            var vm = this;
            vm.$emit('editData', index);
        },
        sortBy: function sortBy(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        },
        setPage: function setPage(pageNumber) {
            if (pageNumber >= 0 && pageNumber < this.totalPages) {
                this.currentPage = pageNumber;
            }
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

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(110),
  /* template */
  __webpack_require__(112),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\inventory_vue__ - Copy\\resources\\assets\\js\\components\\Filtering\\Filter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Filter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eb80d454", Component.options)
  } else {
    hotAPI.reload("data-v-eb80d454", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "panel panel-default",
    staticStyle: {
      "margin-top": "8px"
    }
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v(_vm._s(_vm.titleHead))]), _vm._v(" "), _c('div', {
    staticClass: "panel-body "
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-striped table-bordered"
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
    }, [_vm._v(_vm._s(_vm._f("capitalize")(key))), _c('span', {
      staticClass: "glyphicon",
      class: _vm.sortOrders[key] > 0 ? 'glyphicon-sort-by-attributes' : 'glyphicon-sort-by-attributes-alt'
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
      }, [(entry[key] === entry['serial'] && _vm.titleHead === 'Products') ? _c('span', [_c('router-link', {
        attrs: {
          "to": '/techitem/' + entry['id'] + '/edit'
        }
      }, [_vm._v(_vm._s(entry[key]))])], 1) : (entry[key] === entry['name'] && _vm.titleHead === 'Manufactures') ? _c('span', [_c('a', {
        on: {
          "click": function($event) {
            _vm.editEntry({
              id: entry['id']
            })
          }
        }
      }, [_vm._v(_vm._s(entry[key]))])]) : (entry[key] === entry['name'] && _vm.titleHead === 'Locations') ? _c('span', [_c('a', {
        on: {
          "click": function($event) {
            _vm.editEntry({
              id: entry['id'],
              name: entry['name'],
              BU: entry['BU'],
              OU: entry['OU']
            })
          }
        }
      }, [_vm._v(_vm._s(entry[key]))])]) : (entry[key] === entry['name'] && _vm.titleHead === 'Descriptions') ? _c('span', [_c('a', {
        on: {
          "click": function($event) {
            _vm.editEntry({
              id: entry['id'],
              name: entry['name']
            })
          }
        }
      }, [_vm._v(_vm._s(entry[key]))])]) : (entry[key] === entry['name'] && _vm.titleHead === 'Categories') ? _c('span', [_c('a', {
        on: {
          "click": function($event) {
            _vm.editEntry({
              id: entry['id']
            })
          }
        }
      }, [_vm._v(_vm._s(entry[key]))])]) : (entry[key] === entry['name'] && _vm.titleHead === 'Models') ? _c('span', [_c('a', {
        on: {
          "click": function($event) {
            _vm.editEntry({
              id: entry['id']
            })
          }
        }
      }, [_vm._v(_vm._s(entry[key]))])]) : _c('span', [_vm._v(_vm._s(entry[key]))])])
    }))
  }))], 1)]), _vm._v(" "), _c('nav', {
    attrs: {
      "aria-label": "Page navigation"
    }
  }, [_c('ul', {
    staticClass: "pagination"
  }, [_c('li', [_c('a', {
    attrs: {
      "aria-label": "Previous"
    },
    on: {
      "click": function($event) {
        _vm.setPage(_vm.currentPage - 1)
      }
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("«")])])]), _vm._v(" "), _c('li', {
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
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "aria-label": "Next"
    },
    on: {
      "click": function($event) {
        _vm.setPage(_vm.currentPage + 1)
      }
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("»")])])])], 2)])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-eb80d454", module.exports)
  }
}

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Filtering_Filter_vue__ = __webpack_require__(111);
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


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        DemoGrid: __WEBPACK_IMPORTED_MODULE_0__Filtering_Filter_vue___default.a
    },
    data: function data() {
        return {
            searchQuery: '',
            brandsColumns: ['updated', 'serial', 'to', 'from', 'status'],
            brands: [],

            loading: true,
            post: null,
            error: null
        };
    },
    mounted: function mounted() {
        this.fetchBrands();
    },


    methods: {
        fetchBrands: function fetchBrands() {
            var that = this;
            that.loading = true;

            axios.get("../api/transfers").then(function (response) {
                that.brands = _.map(response.data.data, function (num) {
                    var pick = _.pick(num, 'product.serial', 'location', 'updated_at', 'action.name');
                    var objectData = {
                        updated: pick.updated_at,
                        serial: _.isEmpty(pick.product) ? 'NOT SERIAL DEFINED' : pick.product.serial,
                        to: pick.location.lastLocation,
                        from: pick.location.name,
                        status: pick.action.name
                    };
                    return objectData;
                });
                that.loading = false;
            });
        }
    }
});

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "tag": "button",
      "to": {
        name: 'createTransfers'
      }
    }
  }, [_vm._v("Create CFAT\n            ")]), _vm._v(" "), _c('div', {
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
  })]), _vm._v(" "), _c('demo-grid', {
    attrs: {
      "titleHead": "Transactions",
      "data": _vm.brands,
      "columns": _vm.brandsColumns,
      "filter-key": _vm.searchQuery
    }
  })], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d948b5fc", module.exports)
  }
}

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("29f432ac", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d948b5fc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d948b5fc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(221)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(155),
  /* template */
  __webpack_require__(203),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\inventory_vue__ - Copy\\resources\\assets\\js\\components\\Transfers\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d948b5fc", Component.options)
  } else {
    hotAPI.reload("data-v-d948b5fc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});