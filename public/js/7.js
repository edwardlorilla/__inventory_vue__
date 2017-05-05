webpackJsonp([7],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-10 col-md-offset-1"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('section', {
    staticClass: "panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "panel panel-footer"
  }, [_c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('th', [_vm._v("Serial")]), _vm._v(" "), _c('th', [_vm._v("Status")]), _vm._v(" "), _c('th', [_vm._v("Model")]), _vm._v(" "), _c('th', [_vm._v("Categories")]), _vm._v(" "), _c('th', [_vm._v("Description")]), _vm._v(" "), _c('th', [_vm._v("Manufacture")]), _vm._v(" "), _c('th', [_vm._v("Location")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('a', {
    directives: [{
      name: "hotkey",
      rawName: "v-hotkey",
      value: (_vm.addTd),
      expression: "addTd"
    }],
    staticClass: "addRow",
    on: {
      "click": _vm.addRow
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-plus"
  })])])]), _vm._v(" "), _c('tbody', _vm._l((_vm.addRows), function(addTd, index) {
    return _c('tr', [_c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (addTd.serial),
        expression: "addTd.serial"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "placeholder": "Serial"
      },
      domProps: {
        "value": (addTd.serial)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          addTd.serial = $event.target.value
        }
      }
    })]), _vm._v(" "), _c('td', [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (addTd.status),
        expression: "addTd.status"
      }],
      staticClass: "form-control",
      on: {
        "change": function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          addTd.status = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
        }
      }
    }, [_c('option', {
      attrs: {
        "value": "1"
      }
    }, [_vm._v("\n                                                Working\n                                            ")]), _vm._v(" "), _c('option', {
      attrs: {
        "value": "0"
      }
    }, [_vm._v("\n                                                Defective\n                                            ")])])]), _vm._v(" "), _c('td', [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (addTd.model),
        expression: "addTd.model"
      }],
      staticClass: "form-control",
      on: {
        "change": function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          addTd.model = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
        }
      }
    }, _vm._l((_vm.brands), function(option) {
      return _c('option', {
        domProps: {
          "value": option.id
        }
      }, [_vm._v("\n                                                " + _vm._s(option.name) + "\n                                            ")])
    }))]), _vm._v(" "), _c('td', [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (addTd.category),
        expression: "addTd.category"
      }],
      staticClass: "form-control",
      on: {
        "change": function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          addTd.category = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
        }
      }
    }, _vm._l((_vm.categories), function(option) {
      return _c('option', {
        domProps: {
          "value": option.id
        }
      }, [_vm._v("\n                                                " + _vm._s(option.name) + "\n                                            ")])
    }))]), _vm._v(" "), _c('td', [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (addTd.description),
        expression: "addTd.description"
      }],
      staticClass: "form-control",
      on: {
        "change": function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          addTd.description = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
        }
      }
    }, _vm._l((_vm.descriptions), function(option) {
      return _c('option', {
        domProps: {
          "value": option.id
        }
      }, [_vm._v("\n                                                " + _vm._s(option.name) + "\n                                            ")])
    }))]), _vm._v(" "), _c('td', [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (addTd.manufacture),
        expression: "addTd.manufacture"
      }],
      staticClass: "form-control",
      on: {
        "change": function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          addTd.manufacture = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
        }
      }
    }, _vm._l((_vm.manufactures), function(option) {
      return _c('option', {
        domProps: {
          "value": option.id
        }
      }, [_vm._v("\n                                                " + _vm._s(option.name) + "\n                                            ")])
    }))]), _vm._v(" "), _c('td', [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (addTd.location),
        expression: "addTd.location"
      }],
      staticClass: "form-control",
      on: {
        "change": function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          addTd.location = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
        }
      }
    }, _vm._l((_vm.locations), function(option) {
      return _c('option', {
        domProps: {
          "value": option.id
        }
      }, [_vm._v("\n                                                " + _vm._s(option.name) + "\n                                            ")])
    }))]), _vm._v(" "), _c('td', [_c('button', {
      staticClass: "btn btn-sm btn-danger",
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.addRows.splice(index, 1)
        }
      }
    }, [_c('i', {
      staticClass: "glyphicon glyphicon-remove"
    })])])])
  }))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary pull-right",
    on: {
      "click": _vm.addSerial
    }
  }, [_vm._v("Add Serial")])])])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel panel-footer"
  }, [_c('header', {
    staticClass: "panel panel-default"
  }, [_c('h3', [_vm._v("Create Tech Item")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5e7e85ec", module.exports)
  }
}

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(102),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\inventory_vue__\\resources\\assets\\js\\components\\Products\\create.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] create.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e7e85ec", Component.options)
  } else {
    hotAPI.reload("data-v-5e7e85ec", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 80:
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
    data: function data() {
        return {
            addRows: [],
            brands: [],
            categories: [],
            products: [],
            descriptions: [],
            manufactures: [],
            locations: []
        };
    },
    mounted: function mounted() {
        this.fetchProducts();
        this.fetchModel();
        this.fetchCategory();
        this.fetchDescriptions();
        this.fetchManufacture();
        this.fetchLocation();
    },

    computed: {
        addTd: function addTd() {
            return {
                enter: this.addRow,
                esc: this.deleteRow
            };
        }
    },
    methods: {
        deleteRow: function deleteRow() {
            this.addRows.pop();
        },

        addSerial: function addSerial() {
            var _this = this;

            var addRows = _.map(this.addRows, function (num) {
                return _.pick(num, 'quantity', 'serial', 'manufacture', 'description', 'location', 'category', 'model', 'status');
            });
            axios.post('../api/products', { products: addRows }).then(function (response) {
                _this.$router.push({ name: 'products' });
            });
        },
        addRow: function addRow() {
            this.addRows.push({
                serial: null,
                quantity: 1,
                status: null,
                model: null,
                category: null,
                description: null,
                manufacture: null,
                location: null
            });
        },

        fetchModel: function fetchModel() {
            var _this2 = this;

            this.$Progress.start();
            axios.get('../api/brands').then(function (response) {
                _this2.$Progress.finish();
                _this2.brands = _.map(response.data.brands, function (data) {
                    return _.pick(data, 'name', 'id');
                });
            });
        },
        fetchCategory: function fetchCategory() {
            var _this3 = this;

            axios.get('../api/categories').then(function (response) {
                return _this3.categories = _.map(response.data.categories, function (data) {
                    return _.pick(data, 'name', 'id');
                });
            });
        },
        fetchProducts: function fetchProducts() {
            var _this4 = this;

            axios.get('../api/products').then(function (response) {
                return _this4.products = response.data.products;
            });
        },
        fetchDescriptions: function fetchDescriptions() {
            var _this5 = this;

            axios.get('../api/descriptions').then(function (response) {
                return _this5.descriptions = _.map(response.data.descriptions, function (data) {
                    return _.pick(data, 'name', 'id');
                });
            });
        },
        fetchManufacture: function fetchManufacture() {
            var _this6 = this;

            axios.get('../api/manufactures').then(function (response) {
                return _this6.manufactures = _.map(response.data.manufactures, function (data) {
                    return _.pick(data, 'name', 'id');
                });
            });
        },
        fetchLocation: function fetchLocation() {
            var _this7 = this;

            axios.get('../api/locations').then(function (response) {
                return _this7.locations = _.map(response.data.locations, function (data) {
                    return _.pick(data, 'name', 'id');
                });
            });
        }
    }
});

/***/ })

});