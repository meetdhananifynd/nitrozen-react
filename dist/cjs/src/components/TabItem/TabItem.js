"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  l = require("../../utils/uuids.js"),
  o = require("../Tooltip/Tooltip.js");
function n(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./TabItem.scss.js");
var i = n(t);
const s = (t) => {
  const {
      id: l,
      children: n,
      onClick: s,
      className: r,
      style: a,
      icon: c,
      tooltipIcon: u,
      tooltipIconHoverText: d,
    } = t,
    m = e.__rest(t, [
      "id",
      "children",
      "onClick",
      "className",
      "style",
      "icon",
      "tooltipIcon",
      "tooltipIconHoverText",
    ]);
  return i.default.createElement(
    "li",
    Object.assign(
      {
        onClick: s,
        id: l,
        className: `nitrozen-tab-item ${null != r ? r : ""}`,
        style: null != a ? a : {},
      },
      m
    ),
    i.default.createElement("span", null, n),
    u && d
      ? i.default.createElement(
          "span",
          { className: "tab-item-icon" },
          i.default.createElement(o, {
            position: "bottom",
            icon: u,
            tooltipContent: d,
          })
        )
      : c || null
  );
};
s.defaultProps = {
  id: "nitrozen-tab-item" + l(),
  children: i.default.createElement("span", null, "hello"),
};
var r = t.memo(s);
module.exports = r;
//# sourceMappingURL=TabItem.js.map
