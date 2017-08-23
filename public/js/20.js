webpackJsonp([20],{

/***/ 151:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },

    methods: {
        handleSelectedFile: function handleSelectedFile(convertedData) {
            var vm = this;
            axios.post('../api/products/imports', { products: convertedData.body }).then(function (response) {
                _.forEach(response.data, function (value) {
                    console.log(value);
                });
                //this.$router.push({name:'products'})
                //NotyAlert.notyAlert('success', 'Tech Item has deleted')
            }).catch(function (error) {
                //NotyAlert.notyAlert('error', 'something went wrong');
            });
        }
    }
});

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
exports.push([module.i, "\n\n\n\n\n\n\n", ""]);

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('vue-xlsx-table', {
    on: {
      "on-select-file": _vm.handleSelectedFile
    }
  }, [_vm._v("I")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0985d51f", module.exports)
  }
}

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("402e7608", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0985d51f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0985d51f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(207)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(151),
  /* template */
  __webpack_require__(180),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\inventory_vue__ - Copy\\resources\\assets\\js\\components\\Products\\show.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] show.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0985d51f", Component.options)
  } else {
    hotAPI.reload("data-v-0985d51f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});