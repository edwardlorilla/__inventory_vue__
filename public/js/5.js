webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['serials'],

    data: function data() {
        return {};
    },

    computed: {
        isEmpty: function isEmpty() {
            var vm = this;
            return _.isEmpty(vm.serials);
        }
    }
});

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
exports.push([module.i, "\n.noty_layout_mixin, #noty_layout__top, #noty_layout__topLeft, #noty_layout__topCenter, #noty_layout__topRight, #noty_layout__bottom, #noty_layout__bottomLeft, #noty_layout__bottomCenter, #noty_layout__bottomRight, #noty_layout__center, #noty_layout__centerLeft, #noty_layout__centerRight {\n  position: fixed;\n  margin: 0;\n  padding: 0;\n  z-index: 9999999;\n  -webkit-transform: translateZ(0) scale(1, 1);\n          transform: translateZ(0) scale(1, 1);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-font-smoothing: subpixel-antialiased;\n  filter: blur(0);\n  -webkit-filter: blur(0);\n  max-width: 90%;\n}\n#noty_layout__top {\n  top: 0;\n  left: 5%;\n  width: 90%;\n}\n#noty_layout__topLeft {\n  top: 20px;\n  left: 20px;\n  width: 325px;\n}\n#noty_layout__topCenter {\n  top: 5%;\n  left: 50%;\n  width: 325px;\n          -webkit-transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1);\n                  transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1);\n}\n#noty_layout__topRight {\n  top: 20px;\n  right: 20px;\n  width: 325px;\n}\n#noty_layout__bottom {\n  bottom: 0;\n  left: 5%;\n  width: 90%;\n}\n#noty_layout__bottomLeft {\n  bottom: 20px;\n  left: 20px;\n  width: 325px;\n}\n#noty_layout__bottomCenter {\n  bottom: 5%;\n  left: 50%;\n  width: 325px;\n          -webkit-transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1);\n                  transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1);\n}\n#noty_layout__bottomRight {\n  bottom: 20px;\n  right: 20px;\n  width: 325px;\n}\n#noty_layout__center {\n  top: 50%;\n  left: 50%;\n  width: 325px;\n          -webkit-transform: translate(calc(-50% - .5px), calc(-50% - .5px)) translateZ(0) scale(1, 1);\n                  transform: translate(calc(-50% - .5px), calc(-50% - .5px)) translateZ(0) scale(1, 1);\n}\n#noty_layout__centerLeft {\n  top: 50%;\n  left: 20px;\n  width: 325px;\n          -webkit-transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1);\n                  transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1);\n}\n#noty_layout__centerRight {\n  top: 50%;\n  right: 20px;\n  width: 325px;\n          -webkit-transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1);\n                  transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1);\n}\n.noty_progressbar {\n  display: none;\n}\n.noty_has_timeout .noty_progressbar {\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 3px;\n  width: 100%;\n  background-color: #646464;\n  opacity: 0.2;\n  filter: alpha(opacity=10);\n}\n.noty_bar {\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translate(0, 0) translateZ(0) scale(1, 1);\n      transform: translate(0, 0) scale(1, 1);\n  -webkit-font-smoothing: subpixel-antialiased;\n  overflow: hidden;\n}\n.noty_effects_open {\n  opacity: 0;\n  -webkit-transform: translate(50%);\n          transform: translate(50%);\n  -webkit-animation: noty_anim_in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n          animation: noty_anim_in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.noty_effects_close {\n  -webkit-animation: noty_anim_out 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n          animation: noty_anim_out 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.noty_fix_effects_height {\n  -webkit-animation: noty_anim_height 75ms ease-out;\n          animation: noty_anim_height 75ms ease-out;\n}\n.noty_close_with_click {\n  cursor: pointer;\n}\n.noty_close_button {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  font-weight: bold;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  background-color: rgba(0, 0, 0, 0.05);\n  border-radius: 2px;\n  cursor: pointer;\n  transition: all .2s ease-out;\n}\n.noty_close_button:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.noty_modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  z-index: 10000;\n  opacity: .3;\n  left: 0;\n  top: 0;\n}\n.noty_modal.noty_modal_open {\n  opacity: 0;\n  -webkit-animation: noty_modal_in .3s ease-out;\n          animation: noty_modal_in .3s ease-out;\n}\n.noty_modal.noty_modal_close {\n  -webkit-animation: noty_modal_out .3s ease-out;\n          animation: noty_modal_out .3s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes noty_modal_in {\n100% {\n    opacity: .3;\n}\n}\n@keyframes noty_modal_in {\n100% {\n    opacity: .3;\n}\n}\n@-webkit-keyframes noty_modal_out {\n100% {\n    opacity: 0;\n}\n}\n@keyframes noty_modal_out {\n100% {\n    opacity: 0;\n}\n}\n@keyframes noty_modal_out {\n100% {\n    opacity: 0;\n}\n}\n@-webkit-keyframes noty_anim_in {\n100% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n    opacity: 1;\n}\n}\n@keyframes noty_anim_in {\n100% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n    opacity: 1;\n}\n}\n@-webkit-keyframes noty_anim_out {\n100% {\n    -webkit-transform: translate(50%);\n            transform: translate(50%);\n    opacity: 0;\n}\n}\n@keyframes noty_anim_out {\n100% {\n    -webkit-transform: translate(50%);\n            transform: translate(50%);\n    opacity: 0;\n}\n}\n@-webkit-keyframes noty_anim_height {\n100% {\n    height: 0;\n}\n}\n@keyframes noty_anim_height {\n100% {\n    height: 0;\n}\n}\n.noty_theme__relax.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n}\n.noty_theme__relax.noty_bar .noty_body {\n    padding: 10px;\n}\n.noty_theme__relax.noty_bar .noty_buttons {\n    border-top: 1px solid #e7e7e7;\n    padding: 5px 10px;\n}\n.noty_theme__relax.noty_type__alert,\n.noty_theme__relax.noty_type__notification {\n  background-color: #fff;\n  border: 1px solid #dedede;\n  color: #444;\n}\n.noty_theme__relax.noty_type__warning {\n  background-color: #FFEAA8;\n  border: 1px solid #FFC237;\n  color: #826200;\n}\n.noty_theme__relax.noty_type__warning .noty_buttons {\n    border-color: #dfaa30;\n}\n.noty_theme__relax.noty_type__error {\n  background-color: #FF8181;\n  border: 1px solid #e25353;\n  color: #FFF;\n}\n.noty_theme__relax.noty_type__error .noty_buttons {\n    border-color: darkred;\n}\n.noty_theme__relax.noty_type__info,\n.noty_theme__relax.noty_type__information {\n  background-color: #78C5E7;\n  border: 1px solid #3badd6;\n  color: #FFF;\n}\n.noty_theme__relax.noty_type__info .noty_buttons,\n  .noty_theme__relax.noty_type__information .noty_buttons {\n    border-color: #0B90C4;\n}\n.noty_theme__relax.noty_type__success {\n  background-color: #BCF5BC;\n  border: 1px solid #7cdd77;\n  color: darkgreen;\n}\n.noty_theme__relax.noty_type__success .noty_buttons {\n    border-color: #50C24E;\n}\n.noty_theme__metroui.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  position: relative;\n  box-shadow: rgba(0, 0, 0, 0.298039) 0 0 5px 0;\n}\n.noty_theme__metroui.noty_bar .noty_progressbar {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 3px;\n    width: 100%;\n    background-color: #000;\n    opacity: 0.2;\n    filter: alpha(opacity=20);\n}\n.noty_theme__metroui.noty_bar .noty_body {\n    padding: 1.25em;\n    font-size: 14px;\n}\n.noty_theme__metroui.noty_bar .noty_buttons {\n    padding: 0 10px .5em 10px;\n}\n.noty_theme__metroui.noty_type__alert,\n.noty_theme__metroui.noty_type__notification {\n  background-color: #fff;\n  color: #1d1d1d;\n}\n.noty_theme__metroui.noty_type__warning {\n  background-color: #FA6800;\n  color: #fff;\n}\n.noty_theme__metroui.noty_type__error {\n  background-color: #CE352C;\n  color: #FFF;\n}\n.noty_theme__metroui.noty_type__info,\n.noty_theme__metroui.noty_type__information {\n  background-color: #1BA1E2;\n  color: #FFF;\n}\n.noty_theme__metroui.noty_type__success {\n  background-color: #60A917;\n  color: #fff;\n}\n.noty_theme__mint.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n}\n.noty_theme__mint.noty_bar .noty_body {\n    padding: 10px;\n    font-size: 14px;\n}\n.noty_theme__mint.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_theme__mint.noty_type__alert,\n.noty_theme__mint.noty_type__notification {\n  background-color: #fff;\n  border-bottom: 1px solid #D1D1D1;\n  color: #2F2F2F;\n}\n.noty_theme__mint.noty_type__warning {\n  background-color: #FFAE42;\n  border-bottom: 1px solid #E89F3C;\n  color: #fff;\n}\n.noty_theme__mint.noty_type__error {\n  background-color: #DE636F;\n  border-bottom: 1px solid #CA5A65;\n  color: #fff;\n}\n.noty_theme__mint.noty_type__info,\n.noty_theme__mint.noty_type__information {\n  background-color: #7F7EFF;\n  border-bottom: 1px solid #7473E8;\n  color: #fff;\n}\n.noty_theme__mint.noty_type__success {\n  background-color: #AFC765;\n  border-bottom: 1px solid #A0B55C;\n  color: #fff;\n}\n.noty_theme__sunset.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n}\n.noty_theme__sunset.noty_bar .noty_body {\n    padding: 10px;\n    font-size: 14px;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n}\n.noty_theme__sunset.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_theme__sunset.noty_type__alert,\n.noty_theme__sunset.noty_type__notification {\n  background-color: #073B4C;\n  color: #fff;\n}\n.noty_theme__sunset.noty_type__alert .noty_progressbar,\n  .noty_theme__sunset.noty_type__notification .noty_progressbar {\n    background-color: #fff;\n}\n.noty_theme__sunset.noty_type__warning {\n  background-color: #FFD166;\n  color: #fff;\n}\n.noty_theme__sunset.noty_type__error {\n  background-color: #EF476F;\n  color: #fff;\n}\n.noty_theme__sunset.noty_type__error .noty_progressbar {\n    opacity: .4;\n}\n.noty_theme__sunset.noty_type__info,\n.noty_theme__sunset.noty_type__information {\n  background-color: #118AB2;\n  color: #fff;\n}\n.noty_theme__sunset.noty_type__info .noty_progressbar,\n  .noty_theme__sunset.noty_type__information .noty_progressbar {\n    opacity: .6;\n}\n.noty_theme__sunset.noty_type__success {\n  background-color: #06D6A0;\n  color: #fff;\n}\n.noty_theme__bootstrap-v3.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.noty_theme__bootstrap-v3.noty_bar .noty_body {\n    padding: 15px;\n}\n.noty_theme__bootstrap-v3.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_theme__bootstrap-v3.noty_bar .noty_close_button {\n    font-size: 21px;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    filter: alpha(opacity=20);\n    opacity: .2;\n    background: transparent;\n}\n.noty_theme__bootstrap-v3.noty_bar .noty_close_button:hover {\n    background: transparent;\n    text-decoration: none;\n    cursor: pointer;\n    filter: alpha(opacity=50);\n    opacity: .5;\n}\n.noty_theme__bootstrap-v3.noty_type__alert,\n.noty_theme__bootstrap-v3.noty_type__notification {\n  background-color: #fff;\n  color: inherit;\n}\n.noty_theme__bootstrap-v3.noty_type__warning {\n  background-color: #fcf8e3;\n  color: #8a6d3b;\n  border-color: #faebcc;\n}\n.noty_theme__bootstrap-v3.noty_type__error {\n  background-color: #f2dede;\n  color: #a94442;\n  border-color: #ebccd1;\n}\n.noty_theme__bootstrap-v3.noty_type__info,\n.noty_theme__bootstrap-v3.noty_type__information {\n  background-color: #d9edf7;\n  color: #31708f;\n  border-color: #bce8f1;\n}\n.noty_theme__bootstrap-v3.noty_type__success {\n  background-color: #dff0d8;\n  color: #3c763d;\n  border-color: #d6e9c6;\n}\n.noty_theme__bootstrap-v4.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid transparent;\n  border-radius: .25rem;\n}\n.noty_theme__bootstrap-v4.noty_bar .noty_body {\n    padding: .75rem 1.25rem;\n}\n.noty_theme__bootstrap-v4.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_theme__bootstrap-v4.noty_bar .noty_close_button {\n    font-size: 1.5rem;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    filter: alpha(opacity=20);\n    opacity: .5;\n    background: transparent;\n}\n.noty_theme__bootstrap-v4.noty_bar .noty_close_button:hover {\n    background: transparent;\n    text-decoration: none;\n    cursor: pointer;\n    filter: alpha(opacity=50);\n    opacity: .75;\n}\n.noty_theme__bootstrap-v4.noty_type__alert,\n.noty_theme__bootstrap-v4.noty_type__notification {\n  background-color: #fff;\n  color: inherit;\n}\n.noty_theme__bootstrap-v4.noty_type__warning {\n  background-color: #fcf8e3;\n  color: #8a6d3b;\n  border-color: #faebcc;\n}\n.noty_theme__bootstrap-v4.noty_type__error {\n  background-color: #f2dede;\n  color: #a94442;\n  border-color: #ebccd1;\n}\n.noty_theme__bootstrap-v4.noty_type__info,\n.noty_theme__bootstrap-v4.noty_type__information {\n  background-color: #d9edf7;\n  color: #31708f;\n  border-color: #bce8f1;\n}\n.noty_theme__bootstrap-v4.noty_type__success {\n  background-color: #dff0d8;\n  color: #3c763d;\n  border-color: #d6e9c6;\n}\n.noty_theme__semanticui.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid transparent;\n  font-size: 1em;\n  border-radius: .28571429rem;\n  box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.22) inset, 0 0 0 0 transparent;\n}\n.noty_theme__semanticui.noty_bar .noty_body {\n    padding: 1em 1.5em;\n    line-height: 1.4285em;\n}\n.noty_theme__semanticui.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_theme__semanticui.noty_type__alert,\n.noty_theme__semanticui.noty_type__notification {\n  background-color: #f8f8f9;\n  color: rgba(0, 0, 0, 0.87);\n}\n.noty_theme__semanticui.noty_type__warning {\n  background-color: #fffaf3;\n  color: #573a08;\n  box-shadow: 0 0 0 1px #c9ba9b inset, 0 0 0 0 transparent;\n}\n.noty_theme__semanticui.noty_type__error {\n  background-color: #fff6f6;\n  color: #9f3a38;\n  box-shadow: 0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent;\n}\n.noty_theme__semanticui.noty_type__info,\n.noty_theme__semanticui.noty_type__information {\n  background-color: #f8ffff;\n  color: #276f86;\n  box-shadow: 0 0 0 1px #a9d5de inset, 0 0 0 0 transparent;\n}\n.noty_theme__semanticui.noty_type__success {\n  background-color: #fcfff5;\n  color: #2c662d;\n  box-shadow: 0 0 0 1px #a3c293 inset, 0 0 0 0 transparent;\n}\n.noty_theme__nest.noty_bar {\n  margin: 0 0 15px 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n  box-shadow: rgba(0, 0, 0, 0.098039) 5px 4px 10px 0;\n}\n.noty_theme__nest.noty_bar .noty_body {\n    padding: 10px;\n    font-size: 14px;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n}\n.noty_theme__nest.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_layout .noty_theme__nest.noty_bar {\n  z-index: 5;\n}\n.noty_layout .noty_theme__nest.noty_bar:nth-child(2) {\n  position: absolute;\n  top: 0;\n  margin-top: 4px;\n  margin-right: -4px;\n  margin-left: 4px;\n  z-index: 4;\n  width: 100%;\n}\n.noty_layout .noty_theme__nest.noty_bar:nth-child(3) {\n  position: absolute;\n  top: 0;\n  margin-top: 8px;\n  margin-right: -8px;\n  margin-left: 8px;\n  z-index: 3;\n  width: 100%;\n}\n.noty_layout .noty_theme__nest.noty_bar:nth-child(4) {\n  position: absolute;\n  top: 0;\n  margin-top: 12px;\n  margin-right: -12px;\n  margin-left: 12px;\n  z-index: 2;\n  width: 100%;\n}\n.noty_layout .noty_theme__nest.noty_bar:nth-child(5) {\n  position: absolute;\n  top: 0;\n  margin-top: 16px;\n  margin-right: -16px;\n  margin-left: 16px;\n  z-index: 1;\n  width: 100%;\n}\n.noty_layout .noty_theme__nest.noty_bar:nth-child(n+6) {\n  position: absolute;\n  top: 0;\n  margin-top: 20px;\n  margin-right: -20px;\n  margin-left: 20px;\n  z-index: -1;\n  width: 100%;\n}\n#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(2),\n#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(2) {\n  margin-top: 4px;\n  margin-left: -4px;\n  margin-right: 4px;\n}\n#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(3),\n#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(3) {\n  margin-top: 8px;\n  margin-left: -8px;\n  margin-right: 8px;\n}\n#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(4),\n#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(4) {\n  margin-top: 12px;\n  margin-left: -12px;\n  margin-right: 12px;\n}\n#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(5),\n#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(5) {\n  margin-top: 16px;\n  margin-left: -16px;\n  margin-right: 16px;\n}\n#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(n+6),\n#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(n+6) {\n  margin-top: 20px;\n  margin-left: -20px;\n  margin-right: 20px;\n}\n.noty_theme__nest.noty_type__alert,\n.noty_theme__nest.noty_type__notification {\n  background-color: #073B4C;\n  color: #fff;\n}\n.noty_theme__nest.noty_type__alert .noty_progressbar,\n  .noty_theme__nest.noty_type__notification .noty_progressbar {\n    background-color: #fff;\n}\n.noty_theme__nest.noty_type__warning {\n  background-color: #FFD166;\n  color: #fff;\n}\n.noty_theme__nest.noty_type__error {\n  background-color: #EF476F;\n  color: #fff;\n}\n.noty_theme__nest.noty_type__error .noty_progressbar {\n    opacity: .4;\n}\n.noty_theme__nest.noty_type__info,\n.noty_theme__nest.noty_type__information {\n  background-color: #118AB2;\n  color: #fff;\n}\n.noty_theme__nest.noty_type__info .noty_progressbar,\n  .noty_theme__nest.noty_type__information .noty_progressbar {\n    opacity: .6;\n}\n.noty_theme__nest.noty_type__success {\n  background-color: #06D6A0;\n  color: #fff;\n}", ""]);

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
exports.push([module.i, "\n.noty_layout_mixin, #noty_layout__top, #noty_layout__topLeft, #noty_layout__topCenter, #noty_layout__topRight, #noty_layout__bottom, #noty_layout__bottomLeft, #noty_layout__bottomCenter, #noty_layout__bottomRight, #noty_layout__center, #noty_layout__centerLeft, #noty_layout__centerRight {\n  position: fixed;\n  margin: 0;\n  padding: 0;\n  z-index: 9999999;\n  -webkit-transform: translateZ(0) scale(1, 1);\n          transform: translateZ(0) scale(1, 1);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-font-smoothing: subpixel-antialiased;\n  filter: blur(0);\n  -webkit-filter: blur(0);\n  max-width: 90%;\n}\n#noty_layout__top {\n  top: 0;\n  left: 5%;\n  width: 90%;\n}\n#noty_layout__topLeft {\n  top: 20px;\n  left: 20px;\n  width: 325px;\n}\n#noty_layout__topCenter {\n  top: 5%;\n  left: 50%;\n  width: 325px;\n          -webkit-transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1);\n                  transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1);\n}\n#noty_layout__topRight {\n  top: 20px;\n  right: 20px;\n  width: 325px;\n}\n#noty_layout__bottom {\n  bottom: 0;\n  left: 5%;\n  width: 90%;\n}\n#noty_layout__bottomLeft {\n  bottom: 20px;\n  left: 20px;\n  width: 325px;\n}\n#noty_layout__bottomCenter {\n  bottom: 5%;\n  left: 50%;\n  width: 325px;\n          -webkit-transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1);\n                  transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1);\n}\n#noty_layout__bottomRight {\n  bottom: 20px;\n  right: 20px;\n  width: 325px;\n}\n#noty_layout__center {\n  top: 50%;\n  left: 50%;\n  width: 325px;\n          -webkit-transform: translate(calc(-50% - .5px), calc(-50% - .5px)) translateZ(0) scale(1, 1);\n                  transform: translate(calc(-50% - .5px), calc(-50% - .5px)) translateZ(0) scale(1, 1);\n}\n#noty_layout__centerLeft {\n  top: 50%;\n  left: 20px;\n  width: 325px;\n          -webkit-transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1);\n                  transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1);\n}\n#noty_layout__centerRight {\n  top: 50%;\n  right: 20px;\n  width: 325px;\n          -webkit-transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1);\n                  transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1);\n}\n.noty_progressbar {\n  display: none;\n}\n.noty_has_timeout .noty_progressbar {\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 3px;\n  width: 100%;\n  background-color: #646464;\n  opacity: 0.2;\n  filter: alpha(opacity=10);\n}\n.noty_bar {\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translate(0, 0) translateZ(0) scale(1, 1);\n      transform: translate(0, 0) scale(1, 1);\n  -webkit-font-smoothing: subpixel-antialiased;\n  overflow: hidden;\n}\n.noty_effects_open {\n  opacity: 0;\n  -webkit-transform: translate(50%);\n          transform: translate(50%);\n  -webkit-animation: noty_anim_in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n          animation: noty_anim_in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.noty_effects_close {\n  -webkit-animation: noty_anim_out 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n          animation: noty_anim_out 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.noty_fix_effects_height {\n  -webkit-animation: noty_anim_height 75ms ease-out;\n          animation: noty_anim_height 75ms ease-out;\n}\n.noty_close_with_click {\n  cursor: pointer;\n}\n.noty_close_button {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  font-weight: bold;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  background-color: rgba(0, 0, 0, 0.05);\n  border-radius: 2px;\n  cursor: pointer;\n  transition: all .2s ease-out;\n}\n.noty_close_button:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.noty_modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  z-index: 10000;\n  opacity: .3;\n  left: 0;\n  top: 0;\n}\n.noty_modal.noty_modal_open {\n  opacity: 0;\n  -webkit-animation: noty_modal_in .3s ease-out;\n          animation: noty_modal_in .3s ease-out;\n}\n.noty_modal.noty_modal_close {\n  -webkit-animation: noty_modal_out .3s ease-out;\n          animation: noty_modal_out .3s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes noty_modal_in {\n100% {\n    opacity: .3;\n}\n}\n@keyframes noty_modal_in {\n100% {\n    opacity: .3;\n}\n}\n@-webkit-keyframes noty_modal_out {\n100% {\n    opacity: 0;\n}\n}\n@keyframes noty_modal_out {\n100% {\n    opacity: 0;\n}\n}\n@keyframes noty_modal_out {\n100% {\n    opacity: 0;\n}\n}\n@-webkit-keyframes noty_anim_in {\n100% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n    opacity: 1;\n}\n}\n@keyframes noty_anim_in {\n100% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n    opacity: 1;\n}\n}\n@-webkit-keyframes noty_anim_out {\n100% {\n    -webkit-transform: translate(50%);\n            transform: translate(50%);\n    opacity: 0;\n}\n}\n@keyframes noty_anim_out {\n100% {\n    -webkit-transform: translate(50%);\n            transform: translate(50%);\n    opacity: 0;\n}\n}\n@-webkit-keyframes noty_anim_height {\n100% {\n    height: 0;\n}\n}\n@keyframes noty_anim_height {\n100% {\n    height: 0;\n}\n}\n.noty_theme__relax.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n}\n.noty_theme__relax.noty_bar .noty_body {\n    padding: 10px;\n}\n.noty_theme__relax.noty_bar .noty_buttons {\n    border-top: 1px solid #e7e7e7;\n    padding: 5px 10px;\n}\n.noty_theme__relax.noty_type__alert,\n.noty_theme__relax.noty_type__notification {\n  background-color: #fff;\n  border: 1px solid #dedede;\n  color: #444;\n}\n.noty_theme__relax.noty_type__warning {\n  background-color: #FFEAA8;\n  border: 1px solid #FFC237;\n  color: #826200;\n}\n.noty_theme__relax.noty_type__warning .noty_buttons {\n    border-color: #dfaa30;\n}\n.noty_theme__relax.noty_type__error {\n  background-color: #FF8181;\n  border: 1px solid #e25353;\n  color: #FFF;\n}\n.noty_theme__relax.noty_type__error .noty_buttons {\n    border-color: darkred;\n}\n.noty_theme__relax.noty_type__info,\n.noty_theme__relax.noty_type__information {\n  background-color: #78C5E7;\n  border: 1px solid #3badd6;\n  color: #FFF;\n}\n.noty_theme__relax.noty_type__info .noty_buttons,\n  .noty_theme__relax.noty_type__information .noty_buttons {\n    border-color: #0B90C4;\n}\n.noty_theme__relax.noty_type__success {\n  background-color: #BCF5BC;\n  border: 1px solid #7cdd77;\n  color: darkgreen;\n}\n.noty_theme__relax.noty_type__success .noty_buttons {\n    border-color: #50C24E;\n}\n.noty_theme__metroui.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  position: relative;\n  box-shadow: rgba(0, 0, 0, 0.298039) 0 0 5px 0;\n}\n.noty_theme__metroui.noty_bar .noty_progressbar {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 3px;\n    width: 100%;\n    background-color: #000;\n    opacity: 0.2;\n    filter: alpha(opacity=20);\n}\n.noty_theme__metroui.noty_bar .noty_body {\n    padding: 1.25em;\n    font-size: 14px;\n}\n.noty_theme__metroui.noty_bar .noty_buttons {\n    padding: 0 10px .5em 10px;\n}\n.noty_theme__metroui.noty_type__alert,\n.noty_theme__metroui.noty_type__notification {\n  background-color: #fff;\n  color: #1d1d1d;\n}\n.noty_theme__metroui.noty_type__warning {\n  background-color: #FA6800;\n  color: #fff;\n}\n.noty_theme__metroui.noty_type__error {\n  background-color: #CE352C;\n  color: #FFF;\n}\n.noty_theme__metroui.noty_type__info,\n.noty_theme__metroui.noty_type__information {\n  background-color: #1BA1E2;\n  color: #FFF;\n}\n.noty_theme__metroui.noty_type__success {\n  background-color: #60A917;\n  color: #fff;\n}\n.noty_theme__mint.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n}\n.noty_theme__mint.noty_bar .noty_body {\n    padding: 10px;\n    font-size: 14px;\n}\n.noty_theme__mint.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_theme__mint.noty_type__alert,\n.noty_theme__mint.noty_type__notification {\n  background-color: #fff;\n  border-bottom: 1px solid #D1D1D1;\n  color: #2F2F2F;\n}\n.noty_theme__mint.noty_type__warning {\n  background-color: #FFAE42;\n  border-bottom: 1px solid #E89F3C;\n  color: #fff;\n}\n.noty_theme__mint.noty_type__error {\n  background-color: #DE636F;\n  border-bottom: 1px solid #CA5A65;\n  color: #fff;\n}\n.noty_theme__mint.noty_type__info,\n.noty_theme__mint.noty_type__information {\n  background-color: #7F7EFF;\n  border-bottom: 1px solid #7473E8;\n  color: #fff;\n}\n.noty_theme__mint.noty_type__success {\n  background-color: #AFC765;\n  border-bottom: 1px solid #A0B55C;\n  color: #fff;\n}\n.noty_theme__sunset.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n}\n.noty_theme__sunset.noty_bar .noty_body {\n    padding: 10px;\n    font-size: 14px;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n}\n.noty_theme__sunset.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_theme__sunset.noty_type__alert,\n.noty_theme__sunset.noty_type__notification {\n  background-color: #073B4C;\n  color: #fff;\n}\n.noty_theme__sunset.noty_type__alert .noty_progressbar,\n  .noty_theme__sunset.noty_type__notification .noty_progressbar {\n    background-color: #fff;\n}\n.noty_theme__sunset.noty_type__warning {\n  background-color: #FFD166;\n  color: #fff;\n}\n.noty_theme__sunset.noty_type__error {\n  background-color: #EF476F;\n  color: #fff;\n}\n.noty_theme__sunset.noty_type__error .noty_progressbar {\n    opacity: .4;\n}\n.noty_theme__sunset.noty_type__info,\n.noty_theme__sunset.noty_type__information {\n  background-color: #118AB2;\n  color: #fff;\n}\n.noty_theme__sunset.noty_type__info .noty_progressbar,\n  .noty_theme__sunset.noty_type__information .noty_progressbar {\n    opacity: .6;\n}\n.noty_theme__sunset.noty_type__success {\n  background-color: #06D6A0;\n  color: #fff;\n}\n.noty_theme__bootstrap-v3.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.noty_theme__bootstrap-v3.noty_bar .noty_body {\n    padding: 15px;\n}\n.noty_theme__bootstrap-v3.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_theme__bootstrap-v3.noty_bar .noty_close_button {\n    font-size: 21px;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    filter: alpha(opacity=20);\n    opacity: .2;\n    background: transparent;\n}\n.noty_theme__bootstrap-v3.noty_bar .noty_close_button:hover {\n    background: transparent;\n    text-decoration: none;\n    cursor: pointer;\n    filter: alpha(opacity=50);\n    opacity: .5;\n}\n.noty_theme__bootstrap-v3.noty_type__alert,\n.noty_theme__bootstrap-v3.noty_type__notification {\n  background-color: #fff;\n  color: inherit;\n}\n.noty_theme__bootstrap-v3.noty_type__warning {\n  background-color: #fcf8e3;\n  color: #8a6d3b;\n  border-color: #faebcc;\n}\n.noty_theme__bootstrap-v3.noty_type__error {\n  background-color: #f2dede;\n  color: #a94442;\n  border-color: #ebccd1;\n}\n.noty_theme__bootstrap-v3.noty_type__info,\n.noty_theme__bootstrap-v3.noty_type__information {\n  background-color: #d9edf7;\n  color: #31708f;\n  border-color: #bce8f1;\n}\n.noty_theme__bootstrap-v3.noty_type__success {\n  background-color: #dff0d8;\n  color: #3c763d;\n  border-color: #d6e9c6;\n}\n.noty_theme__bootstrap-v4.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid transparent;\n  border-radius: .25rem;\n}\n.noty_theme__bootstrap-v4.noty_bar .noty_body {\n    padding: .75rem 1.25rem;\n}\n.noty_theme__bootstrap-v4.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_theme__bootstrap-v4.noty_bar .noty_close_button {\n    font-size: 1.5rem;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    filter: alpha(opacity=20);\n    opacity: .5;\n    background: transparent;\n}\n.noty_theme__bootstrap-v4.noty_bar .noty_close_button:hover {\n    background: transparent;\n    text-decoration: none;\n    cursor: pointer;\n    filter: alpha(opacity=50);\n    opacity: .75;\n}\n.noty_theme__bootstrap-v4.noty_type__alert,\n.noty_theme__bootstrap-v4.noty_type__notification {\n  background-color: #fff;\n  color: inherit;\n}\n.noty_theme__bootstrap-v4.noty_type__warning {\n  background-color: #fcf8e3;\n  color: #8a6d3b;\n  border-color: #faebcc;\n}\n.noty_theme__bootstrap-v4.noty_type__error {\n  background-color: #f2dede;\n  color: #a94442;\n  border-color: #ebccd1;\n}\n.noty_theme__bootstrap-v4.noty_type__info,\n.noty_theme__bootstrap-v4.noty_type__information {\n  background-color: #d9edf7;\n  color: #31708f;\n  border-color: #bce8f1;\n}\n.noty_theme__bootstrap-v4.noty_type__success {\n  background-color: #dff0d8;\n  color: #3c763d;\n  border-color: #d6e9c6;\n}\n.noty_theme__semanticui.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid transparent;\n  font-size: 1em;\n  border-radius: .28571429rem;\n  box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.22) inset, 0 0 0 0 transparent;\n}\n.noty_theme__semanticui.noty_bar .noty_body {\n    padding: 1em 1.5em;\n    line-height: 1.4285em;\n}\n.noty_theme__semanticui.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_theme__semanticui.noty_type__alert,\n.noty_theme__semanticui.noty_type__notification {\n  background-color: #f8f8f9;\n  color: rgba(0, 0, 0, 0.87);\n}\n.noty_theme__semanticui.noty_type__warning {\n  background-color: #fffaf3;\n  color: #573a08;\n  box-shadow: 0 0 0 1px #c9ba9b inset, 0 0 0 0 transparent;\n}\n.noty_theme__semanticui.noty_type__error {\n  background-color: #fff6f6;\n  color: #9f3a38;\n  box-shadow: 0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent;\n}\n.noty_theme__semanticui.noty_type__info,\n.noty_theme__semanticui.noty_type__information {\n  background-color: #f8ffff;\n  color: #276f86;\n  box-shadow: 0 0 0 1px #a9d5de inset, 0 0 0 0 transparent;\n}\n.noty_theme__semanticui.noty_type__success {\n  background-color: #fcfff5;\n  color: #2c662d;\n  box-shadow: 0 0 0 1px #a3c293 inset, 0 0 0 0 transparent;\n}\n.noty_theme__nest.noty_bar {\n  margin: 0 0 15px 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n  box-shadow: rgba(0, 0, 0, 0.098039) 5px 4px 10px 0;\n}\n.noty_theme__nest.noty_bar .noty_body {\n    padding: 10px;\n    font-size: 14px;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n}\n.noty_theme__nest.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_layout .noty_theme__nest.noty_bar {\n  z-index: 5;\n}\n.noty_layout .noty_theme__nest.noty_bar:nth-child(2) {\n  position: absolute;\n  top: 0;\n  margin-top: 4px;\n  margin-right: -4px;\n  margin-left: 4px;\n  z-index: 4;\n  width: 100%;\n}\n.noty_layout .noty_theme__nest.noty_bar:nth-child(3) {\n  position: absolute;\n  top: 0;\n  margin-top: 8px;\n  margin-right: -8px;\n  margin-left: 8px;\n  z-index: 3;\n  width: 100%;\n}\n.noty_layout .noty_theme__nest.noty_bar:nth-child(4) {\n  position: absolute;\n  top: 0;\n  margin-top: 12px;\n  margin-right: -12px;\n  margin-left: 12px;\n  z-index: 2;\n  width: 100%;\n}\n.noty_layout .noty_theme__nest.noty_bar:nth-child(5) {\n  position: absolute;\n  top: 0;\n  margin-top: 16px;\n  margin-right: -16px;\n  margin-left: 16px;\n  z-index: 1;\n  width: 100%;\n}\n.noty_layout .noty_theme__nest.noty_bar:nth-child(n+6) {\n  position: absolute;\n  top: 0;\n  margin-top: 20px;\n  margin-right: -20px;\n  margin-left: 20px;\n  z-index: -1;\n  width: 100%;\n}\n#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(2),\n#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(2) {\n  margin-top: 4px;\n  margin-left: -4px;\n  margin-right: 4px;\n}\n#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(3),\n#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(3) {\n  margin-top: 8px;\n  margin-left: -8px;\n  margin-right: 8px;\n}\n#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(4),\n#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(4) {\n  margin-top: 12px;\n  margin-left: -12px;\n  margin-right: 12px;\n}\n#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(5),\n#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(5) {\n  margin-top: 16px;\n  margin-left: -16px;\n  margin-right: 16px;\n}\n#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(n+6),\n#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(n+6) {\n  margin-top: 20px;\n  margin-left: -20px;\n  margin-right: 20px;\n}\n.noty_theme__nest.noty_type__alert,\n.noty_theme__nest.noty_type__notification {\n  background-color: #073B4C;\n  color: #fff;\n}\n.noty_theme__nest.noty_type__alert .noty_progressbar,\n  .noty_theme__nest.noty_type__notification .noty_progressbar {\n    background-color: #fff;\n}\n.noty_theme__nest.noty_type__warning {\n  background-color: #FFD166;\n  color: #fff;\n}\n.noty_theme__nest.noty_type__error {\n  background-color: #EF476F;\n  color: #fff;\n}\n.noty_theme__nest.noty_type__error .noty_progressbar {\n    opacity: .4;\n}\n.noty_theme__nest.noty_type__info,\n.noty_theme__nest.noty_type__information {\n  background-color: #118AB2;\n  color: #fff;\n}\n.noty_theme__nest.noty_type__info .noty_progressbar,\n  .noty_theme__nest.noty_type__information .noty_progressbar {\n    opacity: .6;\n}\n.noty_theme__nest.noty_type__success {\n  background-color: #06D6A0;\n  color: #fff;\n}", ""]);

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(108)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(105),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\inventory_vue__ - Copy\\resources\\assets\\js\\components\\Filtering\\create.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] create.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7cc7a58c", Component.options)
  } else {
    hotAPI.reload("data-v-7cc7a58c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(100),
  /* template */
  __webpack_require__(107),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\inventory_vue__ - Copy\\resources\\assets\\js\\components\\Filtering\\history.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] history.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b21f2b74", Component.options)
  } else {
    hotAPI.reload("data-v-b21f2b74", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 105:
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
    staticClass: "panel-heading "
  }, [_c('a', {
    on: {
      "click": _vm.backList
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-menu-left"
  })]), _vm._v("Create " + _vm._s(_vm.textData))]), _vm._v(" "), (_vm.textData == 'Locations') ? _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.validateDuplicateName || _vm.errors.Name
    }
  }, [_c('label', [_vm._v(_vm._s(_vm.textData) + " Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.nameData.name),
      expression: "nameData.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "name",
      "autofocus": "",
      "required": "",
      "placeholder": "Name"
    },
    domProps: {
      "value": (_vm.nameData.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.nameData.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block",
    class: {
      'hidden': !_vm.validateDuplicateName
    }
  }, [_vm._v("Duplicated " + _vm._s(_vm.textData) + " name Entry")]), _vm._v(" "), _c('span', {
    staticClass: "help-block",
    class: {
      'hidden': !_vm.errors.Name
    }
  }, [_vm._v("The Name field is required.")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.BU
    }
  }, [_vm._m(0), _vm._v(" "), _c('label', [_vm._v("Business Unit " + _vm._s(_vm.textData) + " Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.nameData.BU),
      expression: "nameData.BU"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "list": "BU",
      "required": "",
      "placeholder": "Name"
    },
    domProps: {
      "value": (_vm.nameData.BU)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.nameData.BU = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block",
    class: {
      'hidden': !_vm.errors.BU
    }
  }, [_vm._v("The Business Unit field is required.")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.OU
    }
  }, [_vm._m(1), _vm._v(" "), _c('label', [_vm._v("Operating Unit " + _vm._s(_vm.textData) + " Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.nameData.OU),
      expression: "nameData.OU"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Name",
      "required": "",
      "list": "OU"
    },
    domProps: {
      "value": (_vm.nameData.OU)
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        $event.preventDefault();
        _vm.postData($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.nameData.OU = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block",
    class: {
      'hidden': !_vm.errors.OU
    }
  }, [_vm._v("The Operating Unit field is required.")])])]) : (_vm.textData == 'Categories') ? _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.validateDuplicateName || _vm.errors.Name
    }
  }, [_c('label', [_vm._v(_vm._s(_vm.textData) + " Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.nameData.name),
      expression: "nameData.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "autofocus": "",
      "required": "",
      "placeholder": "Name"
    },
    domProps: {
      "value": (_vm.nameData.name)
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        $event.preventDefault();
        _vm.postData($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.nameData.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block",
    class: {
      'hidden': !_vm.validateDuplicateName
    }
  }, [_vm._v("Duplicated " + _vm._s(_vm.textData) + " name Entry")]), _vm._v(" "), _c('span', {
    staticClass: "help-block",
    class: {
      'hidden': !_vm.errors.Name
    }
  }, [_vm._v("The " + _vm._s(_vm.textData) + " Name field is required.")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [(!_vm.image) ? _c('div', [_c('label', [_vm._v(" Select an image")])]) : _c('div', [_c('img', {
    attrs: {
      "src": _vm.image
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.removeImage
    }
  }, [_vm._v("Remove image")])]), _vm._v(" "), _c('input', {
    attrs: {
      "name": "image",
      "type": "file"
    },
    on: {
      "change": _vm.onFileChange
    }
  })])]) : _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.validateDuplicateName || _vm.errors.Name
    }
  }, [_c('label', [_vm._v(_vm._s(_vm.textData) + " Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.nameData.name),
      expression: "nameData.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "autofocus": "",
      "required": "",
      "placeholder": "Name"
    },
    domProps: {
      "value": (_vm.nameData.name)
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        $event.preventDefault();
        _vm.postData($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.nameData.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block",
    class: {
      'hidden': !_vm.validateDuplicateName
    }
  }, [_vm._v("Duplicated " + _vm._s(_vm.textData) + " name Entry")]), _vm._v(" "), _c('span', {
    staticClass: "help-block",
    class: {
      'hidden': !_vm.errors.Name
    }
  }, [_vm._v("The " + _vm._s(_vm.textData) + " Name field is required.")])])]), _vm._v(" "), _c('div', {
    staticClass: "panel-footer"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "disabled": _vm.validateDuplicateName || _vm.validationEntry
    },
    on: {
      "click": _vm.postData
    }
  }, [_vm._v("Create " + _vm._s(_vm.textData))])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('datalist', {
    attrs: {
      "id": "BU"
    }
  }, [_c('option', {
    attrs: {
      "value": "PHAM14"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('datalist', {
    attrs: {
      "id": "OU"
    }
  }, [_c('option', {
    attrs: {
      "value": "P14"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7cc7a58c", module.exports)
  }
}

/***/ }),

/***/ 106:
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
    staticClass: "panel-heading "
  }, [_c('a', {
    on: {
      "click": _vm.backList
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-menu-left"
  })]), _vm._v(_vm._s(_vm.textLabel) + " Edit\n                    "), (_vm.layout == 'list') ? _c('a', {
    staticClass: "pull-right",
    on: {
      "click": function($event) {
        _vm.layout = 'time'
      }
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-time"
  })]) : _vm._e(), _vm._v(" "), (_vm.layout == 'time') ? _c('a', {
    staticClass: "pull-right",
    on: {
      "click": function($event) {
        _vm.layout = 'list'
      }
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-edit"
  })]) : _vm._e()]), _vm._v(" "), (_vm.layout == 'list') ? _c('div', {
    staticClass: "panel-body"
  }, [(_vm.textLabel == 'Locations') ? _c('div', [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.textLabel) + " Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editData.name),
      expression: "editData.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Name"
    },
    domProps: {
      "value": (_vm.editData.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editData.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Last " + _vm._s(_vm.textLabel))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editData.lastLocation),
      expression: "editData.lastLocation"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Name"
    },
    domProps: {
      "value": (_vm.editData.lastLocation)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editData.lastLocation = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Business Unit " + _vm._s(_vm.textLabel) + " Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editData.BU),
      expression: "editData.BU"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Name"
    },
    domProps: {
      "value": (_vm.editData.BU)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editData.BU = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Operating Unit " + _vm._s(_vm.textLabel) + " Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editData.OU),
      expression: "editData.OU"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Name"
    },
    domProps: {
      "value": (_vm.editData.OU)
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        $event.preventDefault();
        _vm.postData($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editData.OU = $event.target.value
      }
    }
  })])]) : (_vm.textLabel == 'Categories') ? _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.textLabel) + " Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editData.name),
      expression: "editData.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Name"
    },
    domProps: {
      "value": (_vm.editData.name)
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        $event.preventDefault();
        _vm.postData($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editData.name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "thumbnail"
  }, [(_vm.isEmptyPhoto) ? _c('img', {
    attrs: {
      "src": _vm.editData.photo ? _vm.editData.photo.name : '/images/images.jpg',
      "width": "100",
      "alt": _vm.editData.photo ? _vm.editData.photo.name : '/images/images.jpg'
    }
  }) : _c('img', {
    attrs: {
      "width": "100",
      "src": _vm.image
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [(!_vm.image) ? _c('div', [_c('label', [_vm._v("Select an image")])]) : _c('div', [_c('button', {
    staticClass: "btn btn-danger",
    on: {
      "click": _vm.removeImage
    }
  }, [_vm._v("Remove image")])]), _vm._v(" "), (!_vm.image) ? _c('input', {
    attrs: {
      "name": "image",
      "type": "file"
    },
    on: {
      "change": _vm.onFileChange
    }
  }) : _vm._e()])])])]) : _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.textLabel) + " Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editData.name),
      expression: "editData.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Name"
    },
    domProps: {
      "value": (_vm.editData.name)
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        $event.preventDefault();
        _vm.postData($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editData.name = $event.target.value
      }
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.layout == 'time') ? _c('history', {
    attrs: {
      "serials": _vm.editData.serials
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "panel-footer"
  }, [_c('span', {
    staticClass: "btn-group"
  }, [(_vm.isEmpty) ? _c('button', {
    staticClass: "btn btn-danger",
    on: {
      "click": _vm.deleteData
    }
  }, [_vm._v("Delete " + _vm._s(_vm.textLabel))]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    on: {
      "click": _vm.postData
    }
  }, [_vm._v("Update " + _vm._s(_vm.textLabel))])])])], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-89664e30", module.exports)
  }
}

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "list-group"
  }, [_vm._l((_vm.serials), function(serial) {
    return _c('li', {
      staticClass: "list-group-item",
      domProps: {
        "textContent": _vm._s(serial)
      }
    })
  }), _vm._v(" "), (_vm.isEmpty) ? _c('li', {
    staticClass: "list-group-item"
  }, [_vm._v("Not found")]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b21f2b74", module.exports)
  }
}

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("a758f67c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7cc7a58c\",\"scoped\":false,\"hasInlineConfig\":true}!./noty.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7cc7a58c\",\"scoped\":false,\"hasInlineConfig\":true}!./noty.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("6620095c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-89664e30\",\"scoped\":false,\"hasInlineConfig\":true}!./noty.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-89664e30\",\"scoped\":false,\"hasInlineConfig\":true}!./noty.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

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

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Filtering_create_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Filtering_create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Filtering_create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Filtering_Edit_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Filtering_Edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Filtering_Edit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Filtering_Filter_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Filtering_Filter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Filtering_Filter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Filtering_descriptionStates_js__ = __webpack_require__(16);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        DemoGrid: __WEBPACK_IMPORTED_MODULE_2__Filtering_Filter_vue___default.a, Create: __WEBPACK_IMPORTED_MODULE_0__Filtering_create_vue___default.a, Edit: __WEBPACK_IMPORTED_MODULE_1__Filtering_Edit_vue___default.a
    },
    data: function data() {
        return {
            searchQuery: '',
            brandsColumns: ['name', 'id'],
            brands: __WEBPACK_IMPORTED_MODULE_3__Filtering_descriptionStates_js__["a" /* default */].data,
            layout: 'list',

            textData: 'Descriptions',
            urlData: '../api/descriptions',
            nameData: {
                id: null,
                name: ''
            },
            editData: null

        };
    },
    created: function created() {
        this.fetchbrands();
    },

    methods: {
        spliceData: function spliceData(data) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_3__Filtering_descriptionStates_js__["a" /* default */].deleteData(data);
            vm.layout = 'list';
        },
        findIndex: function findIndex(data) {
            console.log(data);
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_3__Filtering_descriptionStates_js__["a" /* default */].findIndex(data);
            vm.layout = 'edit';
        },
        editPost: function editPost() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_3__Filtering_descriptionStates_js__["a" /* default */].dataEdit();
            vm.layout = 'list';
        },
        dataReceive: function dataReceive(id, data) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_3__Filtering_descriptionStates_js__["a" /* default */].dataReceive(id, data, vm.textData);
            vm.layout = 'list';
        },
        fetchbrands: function fetchbrands() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_3__Filtering_descriptionStates_js__["a" /* default */].fetch('api/descriptions', vm.textData);
        }
    }
});

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.layout == 'edit') ? _c('edit', {
    attrs: {
      "urlString": _vm.urlData,
      "textLabel": _vm.textData,
      "editData": _vm.brands.editData
    },
    on: {
      "return": function($event) {
        _vm.editPost()
      },
      "backList": function($event) {
        _vm.layout = 'list'
      },
      "goBack": function($event) {
        _vm.spliceData($event)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.layout == 'create') ? _c('create', {
    attrs: {
      "urlString": _vm.urlData,
      "textData": _vm.textData,
      "nameData": _vm.nameData,
      "dataArray": _vm.brands.descriptions
    },
    on: {
      "dataId": function($event) {
        _vm.nameData.id = $event
      },
      "dataName": function($event) {
        _vm.dataReceive(_vm.nameData.id, $event)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.layout == 'list') ? _c('div', {
    staticClass: "container"
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 col-md-offset-2"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        _vm.layout = 'create'
      }
    }
  }, [_vm._v("Create " + _vm._s(_vm.textData) + "\n                    ")]), _vm._v(" "), _c('div', {
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
      "titleHead": _vm.textData,
      "data": _vm.brands.descriptions,
      "columns": _vm.brandsColumns,
      "filter-key": _vm.searchQuery
    },
    on: {
      "editData": function($event) {
        _vm.findIndex($event)
      }
    }
  })], 1) : _c('div', [_vm._v("\n                        Loading...\n                    ")])])])])], 1) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7251a81a", module.exports)
  }
}

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(168);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("0fca9537", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7251a81a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7251a81a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(216)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(139),
  /* template */
  __webpack_require__(195),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\inventory_vue__ - Copy\\resources\\assets\\js\\components\\Descriptions\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7251a81a", Component.options)
  } else {
    hotAPI.reload("data-v-7251a81a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_noty__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_noty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_noty__);

/* harmony default export */ __webpack_exports__["a"] = ({
    notyAlert: function notyAlert(type, message) {
        new __WEBPACK_IMPORTED_MODULE_0_noty___default.a({
            type: type,
            layout: 'topRight',
            theme: 'bootstrap-v3',
            text: message,
            timeout: 3000,
            progressBar: true,
            closeWith: ['click', 'button'],
            animation: {
                open: function open(promise) {
                    var n = this;
                    Velocity(n.barDom, {
                        left: 450,
                        scaleY: 2
                    }, {
                        duration: 0
                    });
                    Velocity(n.barDom, {
                        left: 0,
                        scaleY: 1
                    }, {
                        easing: [8, 8],
                        complete: function complete() {
                            promise(function (resolve) {
                                resolve();
                            });
                        }
                    });
                },
                close: function close(promise) {
                    var n = this;
                    Velocity(n.barDom, {
                        left: '+=-50'
                    }, {
                        easing: [8, 8, 2],
                        duration: 350
                    });
                    Velocity(n.barDom, {
                        left: 450,
                        scaleY: .2,
                        height: 0,
                        margin: 0
                    }, {
                        easing: [8, 8],
                        complete: function complete() {
                            promise(function (resolve) {
                                resolve();
                            });
                        }
                    });
                }
            }
        }).show();
    }
});

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Noty", [], factory);
	else if(typeof exports === 'object')
		exports["Noty"] = factory();
	else
		root["Noty"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = exports.deepExtend = exports.animationEndEvents = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.inArray = inArray;
exports.stopPropagation = stopPropagation;
exports.generateID = generateID;
exports.outerHeight = outerHeight;
exports.addListener = addListener;
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.remove = remove;
exports.classList = classList;
exports.visibilityChangeFlow = visibilityChangeFlow;
exports.createAudioElements = createAudioElements;

var _api = __webpack_require__(1);

var API = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var animationEndEvents = exports.animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function inArray(needle, haystack, argStrict) {
  var key = void 0;
  var strict = !!argStrict;

  if (strict) {
    for (key in haystack) {
      if (haystack.hasOwnProperty(key) && haystack[key] === needle) {
        return true;
      }
    }
  } else {
    for (key in haystack) {
      if (haystack.hasOwnProperty(key) && haystack[key] === needle) {
        return true;
      }
    }
  }
  return false;
}

function stopPropagation(evt) {
  evt = evt || window.event;

  if (typeof evt.stopPropagation !== 'undefined') {
    evt.stopPropagation();
  } else {
    evt.cancelBubble = true;
  }
}

var deepExtend = exports.deepExtend = function deepExtend(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];

    if (!obj) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (Array.isArray(obj[key])) {
          out[key] = obj[key];
        } else if (_typeof(obj[key]) === 'object' && obj[key] !== null) {
          out[key] = deepExtend(out[key], obj[key]);
        } else {
          out[key] = obj[key];
        }
      }
    }
  }

  return out;
};

function generateID() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var id = 'noty_' + prefix + '_';

  id += 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });

  return id;
}

function outerHeight(el) {
  var height = el.offsetHeight;
  var style = window.getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

var css = exports.css = function () {
  var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'];
  var cssProps = {};

  function camelCase(string) {
    return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (match, letter) {
      return letter.toUpperCase();
    });
  }

  function getVendorProp(name) {
    var style = document.body.style;
    if (name in style) return name;

    var i = cssPrefixes.length;
    var capName = name.charAt(0).toUpperCase() + name.slice(1);
    var vendorName = void 0;

    while (i--) {
      vendorName = cssPrefixes[i] + capName;
      if (vendorName in style) return vendorName;
    }

    return name;
  }

  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }

  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }

  return function (element, properties) {
    var args = arguments;
    var prop = void 0;
    var value = void 0;

    if (args.length === 2) {
      for (prop in properties) {
        if (properties.hasOwnProperty(prop)) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) {
            applyCss(element, prop, value);
          }
        }
      }
    } else {
      applyCss(element, args[1], args[2]);
    }
  };
}();

function addListener(el, events, cb) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  events = events.split(' ');
  for (var i = 0; i < events.length; i++) {
    if (document.addEventListener) {
      el.addEventListener(events[i], cb, useCapture);
    } else if (document.attachEvent) {
      el.attachEvent('on' + events[i], cb);
    }
  }
}

function hasClass(element, name) {
  var list = typeof element === 'string' ? element : classList(element);
  return list.indexOf(' ' + name + ' ') >= 0;
}

function addClass(element, name) {
  var oldList = classList(element);
  var newList = oldList + name;

  if (hasClass(oldList, name)) return;

  // Trim the opening space.
  element.className = newList.substring(1);
}

function removeClass(element, name) {
  var oldList = classList(element);
  var newList = void 0;

  if (!hasClass(element, name)) return;

  // Replace the class name.
  newList = oldList.replace(' ' + name + ' ', ' ');

  // Trim the opening and closing spaces.
  element.className = newList.substring(1, newList.length - 1);
}

function remove(element) {
  if (element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

function classList(element) {
  return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
}

function visibilityChangeFlow() {
  var hidden = void 0;
  var visibilityChange = void 0;
  if (typeof document.hidden !== 'undefined') {
    // Opera 12.10 and Firefox 18 and later support
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    visibilityChange = 'msvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    visibilityChange = 'webkitvisibilitychange';
  }

  function onVisibilityChange() {
    API.PageHidden = document[hidden];
    handleVisibilityChange();
  }

  function onBlur() {
    API.PageHidden = true;
    handleVisibilityChange();
  }

  function onFocus() {
    API.PageHidden = false;
    handleVisibilityChange();
  }

  function handleVisibilityChange() {
    if (API.PageHidden) stopAll();else resumeAll();
  }

  function stopAll() {
    setTimeout(function () {
      Object.keys(API.Store).forEach(function (id) {
        if (API.Store.hasOwnProperty(id)) {
          if (API.Store[id].options.visibilityControl) {
            API.Store[id].stop();
          }
        }
      });
    }, 100);
  }

  function resumeAll() {
    setTimeout(function () {
      Object.keys(API.Store).forEach(function (id) {
        if (API.Store.hasOwnProperty(id)) {
          if (API.Store[id].options.visibilityControl) {
            API.Store[id].resume();
          }
        }
      });
      API.queueRenderAll();
    }, 100);
  }

  addListener(document, visibilityChange, onVisibilityChange);
  addListener(window, 'blur', onBlur);
  addListener(window, 'focus', onFocus);
}

function createAudioElements(ref) {
  if (ref.hasSound) {
    var audioElement = document.createElement('audio');

    ref.options.sounds.sources.forEach(function (s) {
      var source = document.createElement('source');
      source.src = s;
      source.type = 'audio/' + getExtension(s);
      audioElement.appendChild(source);
    });

    if (ref.barDom) {
      ref.barDom.appendChild(audioElement);
    } else {
      document.querySelector('body').appendChild(audioElement);
    }

    audioElement.volume = ref.options.sounds.volume;

    if (!ref.soundPlayed) {
      audioElement.play();
      ref.soundPlayed = true;
    }

    audioElement.onended = function () {
      remove(audioElement);
    };
  }
}

function getExtension(fileName) {
  return fileName.match(/\.([^.]+)$/)[1];
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Defaults = exports.Store = exports.Queues = exports.DefaultMaxVisible = exports.docTitle = exports.DocModalCount = exports.PageHidden = undefined;
exports.getQueueCounts = getQueueCounts;
exports.addToQueue = addToQueue;
exports.removeFromQueue = removeFromQueue;
exports.queueRender = queueRender;
exports.queueRenderAll = queueRenderAll;
exports.ghostFix = ghostFix;
exports.build = build;
exports.hasButtons = hasButtons;
exports.handleModal = handleModal;
exports.handleModalClose = handleModalClose;
exports.queueClose = queueClose;
exports.dequeueClose = dequeueClose;
exports.fire = fire;
exports.openFlow = openFlow;
exports.closeFlow = closeFlow;

var _utils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var PageHidden = exports.PageHidden = false;
var DocModalCount = exports.DocModalCount = 0;

var DocTitleProps = {
  originalTitle: null,
  count: 0,
  changed: false,
  timer: -1
};

var docTitle = exports.docTitle = {
  increment: function increment() {
    DocTitleProps.count++;

    docTitle._update();
  },

  decrement: function decrement() {
    DocTitleProps.count--;

    if (DocTitleProps.count <= 0) {
      docTitle._clear();
      return;
    }

    docTitle._update();
  },

  _update: function _update() {
    var title = document.title;

    if (!DocTitleProps.changed) {
      DocTitleProps.originalTitle = title;
      document.title = '(' + DocTitleProps.count + ') ' + title;
      DocTitleProps.changed = true;
    } else {
      document.title = '(' + DocTitleProps.count + ') ' + DocTitleProps.originalTitle;
    }
  },

  _clear: function _clear() {
    if (DocTitleProps.changed) {
      DocTitleProps.count = 0;
      document.title = DocTitleProps.originalTitle;
      DocTitleProps.changed = false;
    }
  }
};

var DefaultMaxVisible = exports.DefaultMaxVisible = 5;

var Queues = exports.Queues = {
  global: {
    maxVisible: DefaultMaxVisible,
    queue: []
  }
};

var Store = exports.Store = {};

var Defaults = exports.Defaults = {
  type: 'alert',
  layout: 'topRight',
  theme: 'mint',
  text: '',
  timeout: false,
  progressBar: true,
  closeWith: ['click'],
  animation: {
    open: 'noty_effects_open',
    close: 'noty_effects_close'
  },
  id: false,
  force: false,
  killer: false,
  queue: 'global',
  container: false,
  buttons: [],
  callbacks: {
    beforeShow: null,
    onShow: null,
    afterShow: null,
    onClose: null,
    afterClose: null,
    onHover: null,
    onTemplate: null
  },
  sounds: {
    sources: [],
    volume: 1,
    conditions: []
  },
  titleCount: {
    conditions: []
  },
  modal: false,
  visibilityControl: true
};

/**
 * @param {string} queueName
 * @return {object}
 */
function getQueueCounts() {
  var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'global';

  var count = 0;
  var max = DefaultMaxVisible;

  if (Queues.hasOwnProperty(queueName)) {
    max = Queues[queueName].maxVisible;
    Object.keys(Store).forEach(function (i) {
      if (Store[i].options.queue === queueName && !Store[i].closed) count++;
    });
  }

  return {
    current: count,
    maxVisible: max
  };
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function addToQueue(ref) {
  if (!Queues.hasOwnProperty(ref.options.queue)) {
    Queues[ref.options.queue] = { maxVisible: DefaultMaxVisible, queue: [] };
  }

  Queues[ref.options.queue].queue.push(ref);
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function removeFromQueue(ref) {
  if (Queues.hasOwnProperty(ref.options.queue)) {
    var queue = [];
    Object.keys(Queues[ref.options.queue].queue).forEach(function (i) {
      if (Queues[ref.options.queue].queue[i].id !== ref.id) {
        queue.push(Queues[ref.options.queue].queue[i]);
      }
    });
    Queues[ref.options.queue].queue = queue;
  }
}

/**
 * @param {string} queueName
 * @return {void}
 */
function queueRender() {
  var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'global';

  if (Queues.hasOwnProperty(queueName)) {
    var noty = Queues[queueName].queue.shift();

    if (noty) noty.show();
  }
}

/**
 * @return {void}
 */
function queueRenderAll() {
  Object.keys(Queues).forEach(function (queueName) {
    queueRender(queueName);
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function ghostFix(ref) {
  var ghostID = Utils.generateID('ghost');
  var ghost = document.createElement('div');
  ghost.setAttribute('id', ghostID);
  Utils.css(ghost, {
    height: Utils.outerHeight(ref.barDom) + 'px'
  });

  ref.barDom.insertAdjacentHTML('afterend', ghost.outerHTML);

  Utils.remove(ref.barDom);
  ghost = document.getElementById(ghostID);
  Utils.addClass(ghost, 'noty_fix_effects_height');
  Utils.addListener(ghost, Utils.animationEndEvents, function () {
    Utils.remove(ghost);
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function build(ref) {
  findOrCreateContainer(ref);

  var markup = '<div class="noty_body">' + ref.options.text + '</div>' + buildButtons(ref) + '<div class="noty_progressbar"></div>';

  ref.barDom = document.createElement('div');
  ref.barDom.setAttribute('id', ref.id);
  Utils.addClass(ref.barDom, 'noty_bar noty_type__' + ref.options.type + ' noty_theme__' + ref.options.theme);

  ref.barDom.innerHTML = markup;

  fire(ref, 'onTemplate');
}

/**
 * @param {Noty} ref
 * @return {boolean}
 */
function hasButtons(ref) {
  return !!(ref.options.buttons && Object.keys(ref.options.buttons).length);
}

/**
 * @param {Noty} ref
 * @return {string}
 */
function buildButtons(ref) {
  if (hasButtons(ref)) {
    var buttons = document.createElement('div');
    Utils.addClass(buttons, 'noty_buttons');

    Object.keys(ref.options.buttons).forEach(function (key) {
      buttons.appendChild(ref.options.buttons[key].dom);
    });

    ref.options.buttons.forEach(function (btn) {
      buttons.appendChild(btn.dom);
    });
    return buttons.outerHTML;
  }
  return '';
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function handleModal(ref) {
  if (ref.options.modal) {
    if (DocModalCount === 0) {
      createModal(ref);
    }

    exports.DocModalCount = DocModalCount += 1;
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function handleModalClose(ref) {
  if (ref.options.modal && DocModalCount > 0) {
    exports.DocModalCount = DocModalCount -= 1;

    if (DocModalCount <= 0) {
      var modal = document.querySelector('.noty_modal');

      if (modal) {
        Utils.removeClass(modal, 'noty_modal_open');
        Utils.addClass(modal, 'noty_modal_close');
        Utils.addListener(modal, Utils.animationEndEvents, function () {
          Utils.remove(modal);
        });
      }
    }
  }
}

/**
 * @return {void}
 */
function createModal() {
  var body = document.querySelector('body');
  var modal = document.createElement('div');
  Utils.addClass(modal, 'noty_modal');
  body.insertBefore(modal, body.firstChild);
  Utils.addClass(modal, 'noty_modal_open');

  Utils.addListener(modal, Utils.animationEndEvents, function () {
    Utils.removeClass(modal, 'noty_modal_open');
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function findOrCreateContainer(ref) {
  if (ref.options.container) {
    ref.layoutDom = document.querySelector(ref.options.container);
    return;
  }

  var layoutID = 'noty_layout__' + ref.options.layout;
  ref.layoutDom = document.querySelector('div#' + layoutID);

  if (!ref.layoutDom) {
    ref.layoutDom = document.createElement('div');
    ref.layoutDom.setAttribute('id', layoutID);
    Utils.addClass(ref.layoutDom, 'noty_layout');
    document.querySelector('body').appendChild(ref.layoutDom);
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function queueClose(ref) {
  if (ref.options.timeout) {
    if (ref.options.progressBar && ref.progressDom) {
      Utils.css(ref.progressDom, {
        transition: 'width ' + ref.options.timeout + 'ms linear',
        width: '0%'
      });
    }

    clearTimeout(ref.closeTimer);

    ref.closeTimer = setTimeout(function () {
      ref.close();
    }, ref.options.timeout);
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function dequeueClose(ref) {
  if (ref.options.timeout && ref.closeTimer) {
    clearTimeout(ref.closeTimer);
    ref.closeTimer = -1;

    if (ref.options.progressBar && ref.progressDom) {
      Utils.css(ref.progressDom, {
        transition: 'width 0ms linear',
        width: '100%'
      });
    }
  }
}

/**
 * @param {Noty} ref
 * @param {string} eventName
 * @return {void}
 */
function fire(ref, eventName) {
  if (ref.listeners.hasOwnProperty(eventName)) {
    ref.listeners[eventName].forEach(function (cb) {
      if (typeof cb === 'function') {
        cb.apply(ref);
      }
    });
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function openFlow(ref) {
  fire(ref, 'afterShow');
  queueClose(ref);

  Utils.addListener(ref.barDom, 'mouseenter', function () {
    dequeueClose(ref);
  });

  Utils.addListener(ref.barDom, 'mouseleave', function () {
    queueClose(ref);
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function closeFlow(ref) {
  delete Store[ref.id];
  ref.closing = false;
  fire(ref, 'afterClose');

  Utils.remove(ref.barDom);

  if (ref.layoutDom.querySelectorAll('.noty_bar').length === 0 && !ref.options.container) {
    Utils.remove(ref.layoutDom);
  }

  if (Utils.inArray('docVisible', ref.options.titleCount.conditions) || Utils.inArray('docHidden', ref.options.titleCount.conditions)) {
    docTitle.decrement();
  }

  queueRender(ref.options.queue);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotyButton = undefined;

var _utils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotyButton = exports.NotyButton = function NotyButton(html, classes, cb) {
  var _this = this;

  var attributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  _classCallCheck(this, NotyButton);

  this.dom = document.createElement('button');
  this.dom.innerHTML = html;
  this.id = attributes.id = attributes.id || Utils.generateID('button');
  this.cb = cb;
  Object.keys(attributes).forEach(function (propertyName) {
    _this.dom.setAttribute(propertyName, attributes[propertyName]);
  });
  Utils.addClass(this.dom, classes || 'noty_btn');

  return this;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Push = exports.Push = function () {
  function Push() {
    var workerPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/service-worker.js';

    _classCallCheck(this, Push);

    this.subData = {};
    this.workerPath = workerPath;
    this.listeners = {
      onPermissionGranted: [],
      onPermissionDenied: [],
      onSubscriptionSuccess: [],
      onSubscriptionCancel: [],
      onWorkerError: [],
      onWorkerSuccess: [],
      onWorkerNotSupported: []
    };
    return this;
  }

  /**
   * @param {string} eventName
   * @param {function} cb
   * @return {Push}
   */


  _createClass(Push, [{
    key: 'on',
    value: function on(eventName) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      if (typeof cb === 'function' && this.listeners.hasOwnProperty(eventName)) {
        this.listeners[eventName].push(cb);
      }

      return this;
    }
  }, {
    key: 'fire',
    value: function fire(eventName) {
      var _this = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (this.listeners.hasOwnProperty(eventName)) {
        this.listeners[eventName].forEach(function (cb) {
          if (typeof cb === 'function') {
            cb.apply(_this, params);
          }
        });
      }
    }
  }, {
    key: 'create',
    value: function create() {
      console.log('NOT IMPLEMENTED YET');
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'isSupported',
    value: function isSupported() {
      var result = false;

      try {
        result = window.Notification || window.webkitNotifications || navigator.mozNotification || window.external && window.external.msIsSiteMode() !== undefined;
      } catch (e) {}

      return result;
    }

    /**
     * @return {string}
     */

  }, {
    key: 'getPermissionStatus',
    value: function getPermissionStatus() {
      var perm = 'default';

      if (window.Notification && window.Notification.permissionLevel) {
        perm = window.Notification.permissionLevel;
      } else if (window.webkitNotifications && window.webkitNotifications.checkPermission) {
        switch (window.webkitNotifications.checkPermission()) {
          case 1:
            perm = 'default';
            break;
          case 0:
            perm = 'granted';
            break;
          default:
            perm = 'denied';
        }
      } else if (window.Notification && window.Notification.permission) {
        perm = window.Notification.permission;
      } else if (navigator.mozNotification) {
        perm = 'granted';
      } else if (window.external && window.external.msIsSiteMode() !== undefined) {
        perm = window.external.msIsSiteMode() ? 'granted' : 'default';
      }

      return perm.toString().toLowerCase();
    }

    /**
     * @return {string}
     */

  }, {
    key: 'getEndpoint',
    value: function getEndpoint(subscription) {
      var endpoint = subscription.endpoint;
      var subscriptionId = subscription.subscriptionId;

      // fix for Chrome < 45
      if (subscriptionId && endpoint.indexOf(subscriptionId) === -1) {
        endpoint += '/' + subscriptionId;
      }

      return endpoint;
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'isSWRegistered',
    value: function isSWRegistered() {
      try {
        return navigator.serviceWorker.controller.state === 'activated';
      } catch (e) {
        return false;
      }
    }

    /**
     * @return {void}
     */

  }, {
    key: 'unregisterWorker',
    value: function unregisterWorker() {
      var self = this;
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = registrations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var registration = _step.value;

              registration.unregister();
              self.fire('onSubscriptionCancel');
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
        });
      }
    }

    /**
     * @return {void}
     */

  }, {
    key: 'requestSubscription',
    value: function requestSubscription() {
      var _this2 = this;

      var userVisibleOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var self = this;
      var current = this.getPermissionStatus();
      var cb = function cb(result) {
        if (result === 'granted') {
          _this2.fire('onPermissionGranted');

          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register(_this2.workerPath).then(function () {
              navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
                self.fire('onWorkerSuccess');
                serviceWorkerRegistration.pushManager.subscribe({
                  userVisibleOnly: userVisibleOnly
                }).then(function (subscription) {
                  var key = subscription.getKey('p256dh');
                  var token = subscription.getKey('auth');

                  self.subData = {
                    endpoint: self.getEndpoint(subscription),
                    p256dh: key ? window.btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
                    auth: token ? window.btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null
                  };

                  self.fire('onSubscriptionSuccess', [self.subData]);
                }).catch(function (err) {
                  self.fire('onWorkerError', [err]);
                });
              });
            });
          } else {
            self.fire('onWorkerNotSupported');
          }
        } else if (result === 'denied') {
          _this2.fire('onPermissionDenied');
          _this2.unregisterWorker();
        }
      };

      if (current === 'default') {
        if (window.Notification && window.Notification.requestPermission) {
          window.Notification.requestPermission(cb);
        } else if (window.webkitNotifications && window.webkitNotifications.checkPermission) {
          window.webkitNotifications.requestPermission(cb);
        }
      } else {
        cb(current);
      }
    }
  }]);

  return Push;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.0
 */

(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  return typeof x === 'function' || typeof x === 'object' && x !== null;
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(9);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  _resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        _resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      _reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      _reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    _reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return _resolve(promise, value);
    }, function (reason) {
      return _reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$) {
  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$ === GET_THEN_ERROR) {
      _reject(promise, GET_THEN_ERROR.error);
      GET_THEN_ERROR.error = null;
    } else if (then$$ === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$)) {
      handleForeignThenable(promise, maybeThenable, then$$);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function _resolve(promise, value) {
  if (promise === value) {
    _reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function _reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      _reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      _resolve(promise, value);
    } else if (failed) {
      _reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      _reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      _resolve(promise, value);
    }, function rejectPromise(reason) {
      _reject(promise, reason);
    });
  } catch (e) {
    _reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this._input = input;
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate();
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    _reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
};

Enumerator.prototype._enumerate = function () {
  var length = this.length;
  var _input = this._input;

  for (var i = 0; this._state === PENDING && i < length; i++) {
    this._eachEntry(_input[i], i);
  }
};

Enumerator.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$ = c.resolve;

  if (resolve$$ === resolve) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$) {
        return resolve$$(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$(entry), i);
  }
};

Enumerator.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      _reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  _reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}

Promise.all = all;
Promise.race = race;
Promise.resolve = resolve;
Promise.reject = reject;
Promise._setScheduler = setScheduler;
Promise._setAsap = setAsap;
Promise._asap = asap;

Promise.prototype = {
  constructor: Promise,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

function polyfill() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise;
}

// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;

return Promise;

})));
//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), __webpack_require__(8)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global VERSION */

__webpack_require__(5);

var _es6Promise = __webpack_require__(4);

var _es6Promise2 = _interopRequireDefault(_es6Promise);

var _utils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_utils);

var _api = __webpack_require__(1);

var API = _interopRequireWildcard(_api);

var _button = __webpack_require__(2);

var _push = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Noty = function () {
  /**
   * @param {object} options
   * @return {Noty}
   */
  function Noty() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Noty);

    this.options = Utils.deepExtend({}, API.Defaults, options);
    this.id = this.options.id || Utils.generateID('bar');
    this.closeTimer = -1;
    this.barDom = null;
    this.layoutDom = null;
    this.progressDom = null;
    this.showing = false;
    this.shown = false;
    this.closed = false;
    this.closing = false;
    this.killable = this.options.timeout || this.options.closeWith.length > 0;
    this.hasSound = this.options.sounds.sources.length > 0;
    this.soundPlayed = false;
    this.listeners = {
      beforeShow: [],
      onShow: [],
      afterShow: [],
      onClose: [],
      afterClose: [],
      onHover: [],
      onTemplate: []
    };
    this.promises = {
      show: null,
      close: null
    };
    this.on('beforeShow', this.options.callbacks.beforeShow);
    this.on('onShow', this.options.callbacks.onShow);
    this.on('afterShow', this.options.callbacks.afterShow);
    this.on('onClose', this.options.callbacks.onClose);
    this.on('afterClose', this.options.callbacks.afterClose);
    this.on('onHover', this.options.callbacks.onHover);
    this.on('onTemplate', this.options.callbacks.onTemplate);

    return this;
  }

  /**
   * @param {string} eventName
   * @param {function} cb
   * @return {Noty}
   */


  _createClass(Noty, [{
    key: 'on',
    value: function on(eventName) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      if (typeof cb === 'function' && this.listeners.hasOwnProperty(eventName)) {
        this.listeners[eventName].push(cb);
      }

      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'show',
    value: function show() {
      var _this = this;

      if (this.options.killer === true && !API.PageHidden) {
        Noty.closeAll();
      } else if (typeof this.options.killer === 'string' && !API.PageHidden) {
        Noty.closeAll(this.options.killer);
      } else {
        var queueCounts = API.getQueueCounts(this.options.queue);

        if (queueCounts.current >= queueCounts.maxVisible || API.PageHidden) {
          API.addToQueue(this);

          if (API.PageHidden && this.hasSound && Utils.inArray('docHidden', this.options.sounds.conditions)) {
            Utils.createAudioElements(this);
          }

          if (API.PageHidden && Utils.inArray('docHidden', this.options.titleCount.conditions)) {
            API.docTitle.increment();
          }

          return this;
        }
      }

      API.Store[this.id] = this;

      API.fire(this, 'beforeShow');

      this.showing = true;

      if (this.closing) {
        this.showing = false;
        return this;
      }

      API.build(this);
      API.handleModal(this);

      if (this.options.force) {
        this.layoutDom.insertBefore(this.barDom, this.layoutDom.firstChild);
      } else {
        this.layoutDom.appendChild(this.barDom);
      }

      if (this.hasSound && !this.soundPlayed && Utils.inArray('docVisible', this.options.sounds.conditions)) {
        Utils.createAudioElements(this);
      }

      if (Utils.inArray('docVisible', this.options.titleCount.conditions)) {
        API.docTitle.increment();
      }

      this.shown = true;
      this.closed = false;

      // bind button events if any
      if (API.hasButtons(this)) {
        Object.keys(this.options.buttons).forEach(function (key) {
          var btn = _this.barDom.querySelector('#' + _this.options.buttons[key].id);
          Utils.addListener(btn, 'click', function (e) {
            Utils.stopPropagation(e);
            _this.options.buttons[key].cb();
          });
        });
      }

      this.progressDom = this.barDom.querySelector('.noty_progressbar');

      if (Utils.inArray('click', this.options.closeWith)) {
        Utils.addClass(this.barDom, 'noty_close_with_click');
        Utils.addListener(this.barDom, 'click', function (e) {
          Utils.stopPropagation(e);
          _this.close();
        }, false);
      }

      Utils.addListener(this.barDom, 'mouseenter', function () {
        API.fire(_this, 'onHover');
      }, false);

      if (this.options.timeout) Utils.addClass(this.barDom, 'noty_has_timeout');

      if (Utils.inArray('button', this.options.closeWith)) {
        Utils.addClass(this.barDom, 'noty_close_with_button');

        var closeButton = document.createElement('div');
        Utils.addClass(closeButton, 'noty_close_button');
        closeButton.innerHTML = '×';
        this.barDom.appendChild(closeButton);

        Utils.addListener(closeButton, 'click', function (e) {
          Utils.stopPropagation(e);
          _this.close();
        }, false);
      }

      API.fire(this, 'onShow');

      if (this.options.animation.open === null) {
        this.promises.show = new _es6Promise2.default(function (resolve) {
          resolve();
        });
      } else if (typeof this.options.animation.open === 'function') {
        this.promises.show = new _es6Promise2.default(this.options.animation.open.bind(this));
      } else {
        Utils.addClass(this.barDom, this.options.animation.open);
        this.promises.show = new _es6Promise2.default(function (resolve) {
          Utils.addListener(_this.barDom, Utils.animationEndEvents, function () {
            Utils.removeClass(_this.barDom, _this.options.animation.open);
            resolve();
          });
        });
      }

      this.promises.show.then(function () {
        var _t = _this;
        setTimeout(function () {
          API.openFlow(_t);
        }, 100);
      });

      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'stop',
    value: function stop() {
      API.dequeueClose(this);
      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'resume',
    value: function resume() {
      API.queueClose(this);
      return this;
    }

    /**
     * @param {int|boolean} ms
     * @return {Noty}
     */

  }, {
    key: 'setTimeout',
    value: function (_setTimeout) {
      function setTimeout(_x) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function (ms) {
      this.stop();
      this.options.timeout = ms;

      if (this.barDom) {
        if (this.options.timeout) {
          Utils.addClass(this.barDom, 'noty_has_timeout');
        } else {
          Utils.removeClass(this.barDom, 'noty_has_timeout');
        }

        var _t = this;
        setTimeout(function () {
          // ugly fix for progressbar display bug
          _t.resume();
        }, 100);
      }

      return this;
    })

    /**
     * @param {string} html
     * @param {boolean} optionsOverride
     * @return {Noty}
     */

  }, {
    key: 'setText',
    value: function setText(html) {
      var optionsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.barDom) {
        this.barDom.querySelector('.noty_body').innerHTML = html;
      }

      if (optionsOverride) this.options.text = html;

      return this;
    }

    /**
     * @param {string} type
     * @param {boolean} optionsOverride
     * @return {Noty}
     */

  }, {
    key: 'setType',
    value: function setType(type) {
      var _this2 = this;

      var optionsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.barDom) {
        var classList = Utils.classList(this.barDom).split(' ');

        classList.forEach(function (c) {
          if (c.substring(0, 11) === 'noty_type__') {
            Utils.removeClass(_this2.barDom, c);
          }
        });

        Utils.addClass(this.barDom, 'noty_type__' + type);
      }

      if (optionsOverride) this.options.type = type;

      return this;
    }

    /**
     * @param {string} theme
     * @param {boolean} optionsOverride
     * @return {Noty}
     */

  }, {
    key: 'setTheme',
    value: function setTheme(theme) {
      var _this3 = this;

      var optionsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.barDom) {
        var classList = Utils.classList(this.barDom).split(' ');

        classList.forEach(function (c) {
          if (c.substring(0, 12) === 'noty_theme__') {
            Utils.removeClass(_this3.barDom, c);
          }
        });

        Utils.addClass(this.barDom, 'noty_theme__' + theme);
      }

      if (optionsOverride) this.options.theme = theme;

      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'close',
    value: function close() {
      var _this4 = this;

      if (this.closed) return this;

      if (!this.shown) {
        // it's in the queue
        API.removeFromQueue(this);
        return this;
      }

      API.fire(this, 'onClose');

      this.closing = true;

      if (this.options.animation.close === null) {
        this.promises.close = new _es6Promise2.default(function (resolve) {
          resolve();
        });
      } else if (typeof this.options.animation.close === 'function') {
        this.promises.close = new _es6Promise2.default(this.options.animation.close.bind(this));
      } else {
        Utils.addClass(this.barDom, this.options.animation.close);
        this.promises.close = new _es6Promise2.default(function (resolve) {
          Utils.addListener(_this4.barDom, Utils.animationEndEvents, function () {
            if (_this4.options.force) {
              Utils.remove(_this4.barDom);
            } else {
              API.ghostFix(_this4);
            }
            resolve();
          });
        });
      }

      this.promises.close.then(function () {
        API.closeFlow(_this4);
        API.handleModalClose(_this4);
      });

      this.closed = true;

      return this;
    }

    // API functions

    /**
     * @param {boolean|string} queueName
     * @return {Noty}
     */

  }], [{
    key: 'closeAll',
    value: function closeAll() {
      var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      Object.keys(API.Store).forEach(function (id) {
        if (queueName) {
          if (API.Store[id].options.queue === queueName && API.Store[id].killable) {
            API.Store[id].close();
          }
        } else if (API.Store[id].killable) {
          API.Store[id].close();
        }
      });
      return this;
    }

    /**
     * @param {Object} obj
     * @return {Noty}
     */

  }, {
    key: 'overrideDefaults',
    value: function overrideDefaults(obj) {
      API.Defaults = Utils.deepExtend({}, API.Defaults, obj);
      return this;
    }

    /**
     * @param {int} amount
     * @param {string} queueName
     * @return {Noty}
     */

  }, {
    key: 'setMaxVisible',
    value: function setMaxVisible() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : API.DefaultMaxVisible;
      var queueName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'global';

      if (!API.Queues.hasOwnProperty(queueName)) {
        API.Queues[queueName] = { maxVisible: amount, queue: [] };
      }

      API.Queues[queueName].maxVisible = amount;
      return this;
    }

    /**
     * @param {string} innerHtml
     * @param {String} classes
     * @param {Function} cb
     * @param {Object} attributes
     * @return {NotyButton}
     */

  }, {
    key: 'button',
    value: function button(innerHtml) {
      var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var cb = arguments[2];
      var attributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      return new _button.NotyButton(innerHtml, classes, cb, attributes);
    }

    /**
     * @return {string}
     */

  }, {
    key: 'version',
    value: function version() {
      return "3.1.0";
    }

    /**
     * @param {String} workerPath
     * @return {Push}
     */

  }, {
    key: 'Push',
    value: function Push(workerPath) {
      return new _push.Push(workerPath);
    }
  }]);

  return Noty;
}();

// Document visibility change controller


exports.default = Noty;
Utils.visibilityChangeFlow();
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
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
    var timeout = runTimeout(cleanUpNextTick);
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
    runClearTimeout(timeout);
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
        runTimeout(drainQueue);
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


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);
});
//# sourceMappingURL=noty.js.map

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(109)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(98),
  /* template */
  __webpack_require__(106),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\inventory_vue__ - Copy\\resources\\assets\\js\\components\\Filtering\\Edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-89664e30", Component.options)
  } else {
    hotAPI.reload("data-v-89664e30", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__history_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__history_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__history_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Noty_notyAlert__ = __webpack_require__(95);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        History: __WEBPACK_IMPORTED_MODULE_0__history_vue___default.a
    },
    props: ['urlString', 'textLabel', 'editData'],
    data: function data() {
        return {
            nameData: {},
            layout: 'list',
            image: ''
        };
    },

    computed: {
        isEmpty: function isEmpty() {
            var vm = this;
            return _.isEmpty(vm.editData.serials);
        },
        isEmptyPhoto: function isEmptyPhoto() {
            var vm = this;
            return _.isEmpty(vm.image);
        }
    },
    mounted: function mounted() {
        // this.fetchData(this.$route.params.id)
    },

    methods: {
        onFileChange: function onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage: function createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;
            reader.onload = function (e) {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        removeImage: function removeImage(e) {
            this.image = '';
        },
        deleteData: function deleteData() {
            var vm = this;
            vm.$emit('goBack', vm.editData.id);
            axios.delete('../' + vm.urlString + '/' + vm.editData.id).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_1__Noty_notyAlert__["a" /* default */].notyAlert('success', 'Tech Item has deleted');

                //m.$router.push({ name:  vm.$route.name})
            }).catch(function (error) {
                __WEBPACK_IMPORTED_MODULE_1__Noty_notyAlert__["a" /* default */].notyAlert('error', 'something went wrong');
            });
        },
        backList: function backList() {
            var vm = this;
            vm.$emit('backList', 'list');
        },
        postData: function postData() {
            var vm = this;
            axios.patch('../' + vm.urlString + '/' + vm.editData.id, vm.textLabel == 'Categories' ? { name: vm.editData.name, image: vm.image } : vm.editData).then(function (response) {

                __WEBPACK_IMPORTED_MODULE_1__Noty_notyAlert__["a" /* default */].notyAlert('success', response.data.message);
                vm.$emit('return', response.data);
            }).catch(function (error) {
                console.log(error);
                __WEBPACK_IMPORTED_MODULE_1__Noty_notyAlert__["a" /* default */].notyAlert('error', 'something went wrong');
            });
        }
    }
});

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Noty_notyAlert__ = __webpack_require__(95);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        urlString: String,
        textData: String,
        nameData: Object,
        dataArray: Array
    },
    data: function data() {
        return {
            errors: {
                Name: false
            },
            image: ''
        };
    },
    mounted: function mounted() {
        document.title = 'Create ' + this.textData;
    },

    computed: {
        validateDuplicateName: function validateDuplicateName() {
            var vm = this;
            var data = _.map(vm.dataArray, 'name');
            return _.includes(data, vm.nameData.name);
        },
        validationEntry: function validationEntry() {
            var vm = this;
            return vm.textData == 'Locations' ? _.isEmpty(vm.nameData.name) || _.isEmpty(vm.nameData.BU) || _.isEmpty(vm.nameData.OU) : _.isEmpty(vm.nameData.name);
        }
    },
    methods: {
        backList: function backList() {
            var vm = this;
            vm.$emit('backList', 'list');
        },
        onFileChange: function onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage: function createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;
            reader.onload = function (e) {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        removeImage: function removeImage(e) {
            this.image = '';
        },

        postData: function postData() {
            var vm = this;
            axios.post(vm.urlString, vm.textData == 'Categories' ? { name: vm.nameData.name, image: vm.image } : vm.nameData).then(function (response) {
                vm.$emit('dataId', response.data.data.id);
                vm.$emit('dataName', response.data.data.name);
                vm.$emit('object', response.data.data);

                __WEBPACK_IMPORTED_MODULE_0__Noty_notyAlert__["a" /* default */].notyAlert('success', response.data.message);
            }).catch(function (error) {

                __WEBPACK_IMPORTED_MODULE_0__Noty_notyAlert__["a" /* default */].notyAlert('error', 'something went wrong');
            });
        }
    }
});

/***/ })

});