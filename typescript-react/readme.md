
> This is a demonstration of a process of adding TSCC to an existing project. The original app is at [todomvc/typescript-react](https://github.com/tastejs/todomvc/tree/master/examples/typescript-react). 
> In order to make it compilable with TSCC, following changes were made:
> ### Changes
> - Modified `interfaces.d.ts` file to `interfaces.ts`, in order to enable property name mangling for properties in this file. TSCC does not rename any properties declared in ambiant contexts.
> - Added `libs: ["dom", "es2015"]` to `tsconfig.json`. This is due to appearance of ES2015 structs in type declaration files of `react` ([react requires Map, Set](https://reactjs.org/docs/javascript-environment-requirements.html)). In normal typescript compilation, vendor type declaration files are not transpiled by the compiler. However, TSCC does pass it to the compiler in order to generate externs for closure compiler, and hence it requires ES2015 libs even if the consuming code does not use it.
> - Declare `react`, `react-dom`, `classnames` as external modules, and provide them as a separate script tag in `index.html`.
> - Change `Router#init` property access to use string literal `router["init"]`. This way closure compiler won't mangle this property name. An alternative way would be to fix it is to declare `Router` variable's type as `declare const Router: { init: any }`.
> - Replace `localStorage` access to `window.localStorage`, as closure compiler complains about undeclared `localStorage` globl value.

---
 
# TypeScript & React TodoMVC Example

> TypeScript is a language for application-scale JavaScript development. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open Source.

> _[TypeScript - typescriptlang.org](http://typescriptlang.org)_

> React is a JavaScript library for creating user interfaces. Its core principles are declarative code, efficiency, and flexibility. Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes.

> _[React - facebook.github.io/react](http://facebook.github.io/react)_

## Learning TypeScript

The [TypeScript website](http://typescriptlang.org) is a great resource for getting started.

Here are some links you may find helpful:

* [Tutorial](http://www.typescriptlang.org/Tutorial)
* [Code Playground](http://www.typescriptlang.org/Playground)
* [Documentation](https://github.com/Microsoft/TypeScript/wiki)
* [Applications built with TypeScript](http://www.typescriptlang.org/Samples)
* [Blog](http://blogs.msdn.com/b/typescript)
* [Source Code](https://github.com/Microsoft/TypeScript)

Articles and guides from the community:

* [Thoughts on TypeScript](http://www.nczonline.net/blog/2012/10/04/thoughts-on-typescript)
* [ScreenCast - Why I Like TypeScript](https://www.youtube.com/watch?v=Mh5VQVfWTbs)

Get help from other TypeScript users:

* [TypeScript on StackOverflow](http://stackoverflow.com/questions/tagged/typescript)
* [Forums](https://github.com/Microsoft/TypeScript/issues)
* [TypeScript on Twitter](http://twitter.com/typescriptlang)

_If you have other helpful links to share, or find any of the links above no longer work, please [let us know](https://github.com/tastejs/todomvc/issues)._

## Learning React

The [React getting started documentation](http://facebook.github.io/react/docs/getting-started.html) is a great way to get started.

Here are some links you may find helpful:

* [Documentation](http://facebook.github.io/react/docs/getting-started.html)
* [API Reference](http://facebook.github.io/react/docs/reference.html)
* [Blog](http://facebook.github.io/react/blog/)
* [React on GitHub](https://github.com/facebook/react)
* [Support](http://facebook.github.io/react/support.html)

Articles and guides from the community:

* [How is Facebook's React JavaScript library](http://www.quora.com/React-JS-Library/How-is-Facebooks-React-JavaScript-library)
* [React: Under the hood](http://www.quora.com/Pete-Hunt/Posts/React-Under-the-Hood)

Get help from other React users:

* [React on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
* [Discussion Forum](https://discuss.reactjs.org/)

_If you have other helpful links to share, or find any of the links above no longer work, please [let us know](https://github.com/tastejs/todomvc/issues)._



## Running

Install the tscc package from NPM.

	yarn install @tscc/tscc

To compile the TypeScript in this project:

	# from typescript-react
	$ yarn tscc --spec js/tscc.spec.json

Or alternatively, using flags instead of the spec file:

	$ yarn tscc --module js/bundle:js/app.tsx --external react:React --external react-dom:ReactDOM --external classnames:classNames -- --project js 

To run the app, spin up an HTTP server (e.g. `python -m SimpleHTTPServer`) and visit http://localhost/.../myexample/.

