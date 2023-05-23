self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Img = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "sc-1tcu2iw-0"
})(["width:100%;height:35%;object-fit:cover;overflow:hidden;border-radius:10px;"]);
var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "sc-1tcu2iw-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));grid-auto-rows:minmax(0,1fr);", " column-gap:2rem;row-gap:3rem;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], ''
/* padding: 3rem; */
, function (props) {
  return props.theme.breakpoints.sm;
});
var BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "sc-1tcu2iw-2"
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);display:flex;flex-direction:column;justify-content:space-between;text-align:center;@media ", "{width:100%;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "sc-1tcu2iw-3"
})(["text-align:center;z-index:20;width:100%;"]);
var HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "sc-1tcu2iw-4"
})(["font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:.5rem 0;font-size:", ";"], function (props) {
  return props.title ? '2rem' : '2rem';
});
var Hr = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "sc-1tcu2iw-5"
})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]);
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "sc-1tcu2iw-6"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]);
var CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "sc-1tcu2iw-7"
})(["width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;@media ", "{padding:.3rem}"], function (props) {
  return props.theme.breakpoints.sm;
});
var UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "sc-1tcu2iw-8"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]);
var ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "ProjectsStyles__ExternalLinks",
  componentId: "sc-1tcu2iw-9"
})(["color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#801414;}"]);
var TagList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "sc-1tcu2iw-10"
})(["display:flex;justify-content:center;padding:2rem;"]);
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "sc-1tcu2iw-11"
})(["color:#d8bfbf;font-size:1.3rem;margin-right:1rem;"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanMiXSwibmFtZXMiOlsiSW1nIiwic3R5bGVkIiwiR3JpZENvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsInNtIiwiQmxvZ0NhcmQiLCJUaXRsZUNvbnRlbnQiLCJIZWFkZXJUaHJlZSIsInRpdGxlIiwiSHIiLCJJbnRybyIsIkNhcmRJbmZvIiwiVXRpbGl0eUxpc3QiLCJFeHRlcm5hbExpbmtzIiwiVGFnTGlzdCIsIlRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLEdBQUcsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsa0ZBQVQ7QUFRQSxJQUFNQyxhQUFhLEdBQUdELHlFQUFIO0FBQUE7QUFBQTtBQUFBLDZOQUl0QjtBQUFHO0FBSm1CLEVBT2pCLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVBpQixDQUFuQjtBQWVBLElBQU1DLFFBQVEsR0FBR04scUVBQUg7QUFBQTtBQUFBO0FBQUEsa0xBT1YsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBUFUsQ0FBZDtBQVdBLElBQU1FLFlBQVksR0FBR1AscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0RBQWxCO0FBTUEsSUFBTVEsV0FBVyxHQUFHUixvRUFBSDtBQUFBO0FBQUE7QUFBQSx5RkFLVCxVQUFDRSxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDTyxLQUFOLEdBQWMsTUFBZCxHQUF1QixNQUFsQztBQUFBLENBTFMsQ0FBakI7QUFRQSxJQUFNQyxFQUFFLEdBQUdWLG9FQUFIO0FBQUE7QUFBQTtBQUFBLDJFQUFSO0FBUUEsSUFBTVcsS0FBSyxHQUFHWCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxrSUFBWDtBQVdBLElBQU1ZLFFBQVEsR0FBR1osbUVBQUg7QUFBQTtBQUFBO0FBQUEsNEdBTVYsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBTlUsQ0FBZDtBQWFBLElBQU1RLFdBQVcsR0FBR2Isb0VBQUg7QUFBQTtBQUFBO0FBQUEsaUdBQWpCO0FBUUEsSUFBTWMsYUFBYSxHQUFHZCxtRUFBSDtBQUFBO0FBQUE7QUFBQSw2SUFBbkI7QUFhQSxJQUFNZSxPQUFPLEdBQUdmLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHlEQUFiO0FBS0EsSUFBTWdCLEdBQUcsR0FBR2hCLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHlEQUFUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM1YTUzOGU3YmI5Y2YwMzY3Y2EzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDozNSU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuYFxuXG5leHBvcnQgY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMCwgMWZyKTtcbiAgJHsnJyAvKiBwYWRkaW5nOiAzcmVtOyAqL31cbiAgY29sdW1uLWdhcDogMnJlbTtcbiAgcm93LWdhcDogM3JlbTtcbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbmBcbmV4cG9ydCBjb25zdCBCbG9nQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgVGl0bGVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAyMDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyVGhyZWUgPSBzdHlsZWQuaDNgXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjOWNjOWUzO1xuICBwYWRkaW5nOiAuNXJlbSAwO1xuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aXRsZSA/ICcycmVtJyA6ICcycmVtJ307XG5gO1xuXG5leHBvcnQgY29uc3QgSHIgPSBzdHlsZWQuaHJgXG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogI2QwYmI1NztcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnRybyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxNzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGNvbG9yOiAjZGNlM2U3O1xuICBmb250LWZhbWlseTogJ0Ryb2lkIFNlcmlmJywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsaW5lLWhlaWdodDogMThweDtcbmA7XG5cblxuZXhwb3J0IGNvbnN0IENhcmRJbmZvID0gc3R5bGVkLnBgXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIGNvbG9yOiAjZTRlNmU3O1xuICBmb250LXN0eWxlOiAycmVtO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHBhZGRpbmc6LjNyZW1cbiAgXG59XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBVdGlsaXR5TGlzdCA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luOiAyLjVyZW0gMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFeHRlcm5hbExpbmtzID0gc3R5bGVkLmFgXG5jb2xvcjojZDRjMGMwO1xuZm9udC1zaXplOiAxLjZyZW07XG5wYWRkaW5nOjFyZW0gMS41cmVtO1xuYmFja2dyb3VuZDogIzZiMzAzMDtcbmJvcmRlci1yYWRpdXM6IDE1cHg7XG50cmFuc2l0aW9uOiAwLjVzO1xuJjpob3ZlcntcbiAgYmFja2dyb3VuZDogIzgwMTQxNDtcblxufVxuYDtcblxuZXhwb3J0IGNvbnN0IFRhZ0xpc3QgPSBzdHlsZWQudWxgXG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5wYWRkaW5nOiAycmVtO1xuYFxuZXhwb3J0IGNvbnN0IFRhZyA9IHN0eWxlZC5saWBcbmNvbG9yOiAjZDhiZmJmO1xuZm9udC1zaXplOiAxLjNyZW07XG5tYXJnaW4tcmlnaHQ6IDFyZW07XG5gIl0sInNvdXJjZVJvb3QiOiIifQ==