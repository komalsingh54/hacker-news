import serialize from 'serialize-javascript';

export default function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <title>Hacker News</title>
        <meta charset="UTF-8">
        <meta name="description" content="Hacker news">
        <meta name="keywords" content="hacker news">
        <meta name="author" content="Komal">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="style.css" />'
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${serialize(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/dist/main.bundle.js"></script>
      </body>
    </html>
    `;
}
