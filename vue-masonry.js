;(function () {
    var vueMasonry = {}
    var _ = require('lodash');
    var Masonry = typeof require === 'function' ?
        require('masonry-layout') :
        window.Masonry
    vueMasonry.install = function (Vue) {
        Vue.directive('masonry', {
            bind: function () {
            },
            update: function (value) {
                console.log(value)
                var options = {
                    itemSelector: '.grid-item',
                    columnWidth: 160,
                    isResizeBound: false
                }
                if (_.isPlainObject(value)) {
                    options = _.assign(options, value);
                }

                if (!this.el.masonry) {
                    this.el.masonry = new Masonry(this.el, options)
                }
            },
            unbind: function () {
                this.el.masonry = null;
            },
        })
    }

    if (typeof exports == "object") {
        module.exports = vueMasonry
    } else if (typeof define == "function" && define.amd) {
        define([], function () {
            return vueMasonry
        })
    } else if (window.Vue) {
        window.VueMasonry = vueMasonry
        Vue.use(vueMasonry)
    }
})()
