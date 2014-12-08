/**
 * @preserve unutm_ga.js
 *
 * LICENSE: http://hail2u.mit-license.org/2014
 */
var unutm = function () {
  var l = location;
  var h = history;

  if (!l.search || !h.replaceState) {
    return;
  }

  var u = l.pathname +
    l.search.replace(/[?&]utm_[^&]+/g, '').replace(/^&/, '?') +
    l.hash;
  h.replaceState(null, '', u);
};
