export default function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <title>Redux Universal Example</title>
        <meta charset="UTF-8">
        <meta name="description" content="Hacker news">
        <meta name="keywords" content="hacker news">
        <meta name="author" content="Komal">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${process.env.NODE_ENV === 'production' ? '<link rel="stylesheet" type="text/css" href="/dist/main.style.css" />' : ''}
        <link rel="manifest" href="/public/manifest.json" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/dist/main.bundle.js"></script>
      </body>
    </html>
    `;
}
