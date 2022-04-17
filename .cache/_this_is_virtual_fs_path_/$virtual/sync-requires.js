
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/sou/projects/tech-blog/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/sou/projects/tech-blog/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/sou/projects/tech-blog/src/pages/index.js")),
  "component---src-templates-blog-template-js": preferDefault(require("/Users/sou/projects/tech-blog/src/templates/blogTemplate.js"))
}

