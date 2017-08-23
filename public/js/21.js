webpackJsonp([21],{

/***/ 147:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            dataFetch: []
        };
    },
    mounted: function mounted() {
        this.fetchData(this.$route.params.id);
    },

    methods: {
        fetchData: function fetchData(dataId) {
            var vm = this;
            axios.get('../../api/transfers/' + dataId + '/history').then(function (response) {
                vm.dataFetch = _.map(response.data, function (data) {
                    var pick = _.pick(data, 'location.lastLocation', 'location.name', 'updated_at', 'status');
                    var status = '';
                    if (pick.status === 1) {
                        status = 'TRANSFER';
                    } else if (pick.status === 2) {
                        status = 'DEPLOY';
                    } else {
                        status = 'REPLACED';
                    }
                    var object = { status: status, lastLocation: pick.location.lastLocation, currentLocation: pick.location.name, updateDate: pick.updated_at };
                    return object;
                });
            });
        }
    }
});

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 col-md-offset-2"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Transactions")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('table', {
    staticClass: "table table-striped"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.dataFetch), function(data) {
    return (_vm.dataFetch) ? _c('tr', [_c('td', [_vm._v(_vm._s(data.status))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.currentLocation))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.lastLocation))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(data.updateDate))])]) : _c('tr', [_vm._v("NO CONTENT")])
  }))])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Status")]), _vm._v(" "), _c('th', [_vm._v("Current Location")]), _vm._v(" "), _c('th', [_vm._v("Last Location")]), _vm._v(" "), _c('th', [_vm._v("Updated Date")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bf66da7c", module.exports)
  }
}

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(172);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("9b8068b4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-bf66da7c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./History.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-bf66da7c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./History.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(220)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(147),
  /* template */
  __webpack_require__(202),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\inventory_vue__ - Copy\\resources\\assets\\js\\components\\Products\\History.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] History.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bf66da7c", Component.options)
  } else {
    hotAPI.reload("data-v-bf66da7c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});