/*globals chrome*/
var m = {
  cols: undefined,
  els: document.getElementsByTagName('input'),
  css: function () {
    return 'center > div, .page_border, .page_bcg, .t_b, .t_br {width: 100% !important}'+
    '#cont .print-visible + pre {column-count:'+this.cols+';-webkit-column-count:'+this.cols+'}';
  },
  clickHandler: function () {
    if (this.value !== '1') {
      m.cols = this.value;
      chrome.tabs.insertCSS(null, {code: m.css()});
    } else {
      chrome.tabs.executeScript(null, {code: 'window.location.reload();'});
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {
  var i, l, v;
  for (i = 0, l = m.els.length; i < l; i ++) {
    v = m.els[i];
    v.addEventListener('click', m.clickHandler);
  }
});
