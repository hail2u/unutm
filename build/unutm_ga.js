/**
 * @preserve unutm_ga.js
 *
 * LICENSE: MIT
 */
/* exported unutm */
var unutm = function () {
  var l = location;
  var h = history;

  if (!l.search || !h.replaceState) {
    return;
  }

  var u = l.pathname +
    l.search.replace(/[?&]utm_[^&]+/g, "").replace(/^&/, "?") +
    l.hash;
  h.replaceState(null, "", u);
};
