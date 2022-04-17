"use strict";
exports.id = "component---src-templates-blog-template-js";
exports.ids = ["component---src-templates-blog-template-js"];
exports.modules = {

/***/ "./src/templates/blogTemplate.js":
/*!***************************************!*\
  !*** ./src/templates/blogTemplate.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Template({
  data // this prop will be injected by the GraphQL query below.

}) {
  const {
    markdownRemark
  } = data; // data.markdownRemark holds our post data

  const {
    frontmatter,
    html
  } = markdownRemark;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "blog-post-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "blog-post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, frontmatter.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "blog-post-content",
    dangerouslySetInnerHTML: {
      __html: html
    }
  })));
}
const pageQuery = "1569184130";

/***/ })

};
;
//# sourceMappingURL=component---src-templates-blog-template-js.js.map