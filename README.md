# gridstack-parcel-app

This is a playground to make gridstack working with ES6 imports and native jquery/jquery-ui.

The source code is in `app-src` folder.

Follow the steps:

-   npm install
-   npm run app:start
-   Open browser and console for errors
-   Change imports in `app-src/index.js`

The following:

```js
import "gridstack/dist/jquery";
import "gridstack/dist/jquery-ui";
```

should be optional and it should work with already imported jquery version

Ideally all the imports should be named imports, ie:
`import $ from 'jquery'`
