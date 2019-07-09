
> This is a demonstration of adopting TSCC to an existing project. The original app is at [todomvc/typescript-backbone](https://github.com/tastejs/todomvc/tree/master/examples/typescript-backbone). 
> In order to make it compatible with TSCC, following changes were made:
> ### Changes

> - Added import statements for `Backbone` and `lodash`.
> - Added `tsconfig.json`, as tscc requires a well-defined typescript project.
> - Replace model keys in object literal property to use quoted property name, in order to prevent renaming.
> - Replace every reference of class method name via string literal to call to `goog.reflect.objectProperty` and `goog.reflect.object`. This is a tricky part, as Backbone relies a lot on such a pattern. In order to replace such string literals to a renamed method name, one can use `goog.reflect`. Read about it in [closure tools blog](http://closuretools.blogspot.com/2016/06/using-polymer-with-closure-compiler-part-2.html). In order to use it, import it via `import googReflect from 'goog:goog.reflect';` and reference the module declaration from `@tscc/tscc/third_party/closure_library/reflect.d.ts`. TSCC always include goog.reflect to your bundle; it only provides access to closure compiler's privmitives and if you don't use it, all the code will be removed anyway. Of course you can manually provide the source via tscc spec's `jsFiles` key.
> - Set typescript compiler target language to `ES6` - as it works better when you are using `goog.reflect.object`. This only affects the intermediate representation of source; output langauge is still ES5.
> - Correct `length` reference in `TodoList` implementation ([link](https://github.com/theseanl/todomvc/blob/1aecad0903edce570fe38ed7d7c2c9d83f9b2df6/typescript-backbone/js/app.ts#L166)) to `this.length`. This error is caught by Closure Compiler - another benefit of using Closure Compiler!

> #### Other changes not specific to TSCC

> - Updated old typescript version to a version specified in tsickle (0.35.0)'s peerDependency: (~3.4.1).
> - Removed an ad-hoc type declaration for `Backbone` and use the one in DefinitelyTyped. Installed `@types/backbone` and `@types/backbone.localstorage`.
> - Modify `Backbone.View.event` and `Backbone.View.render` to match that of type declaration in DefinitelyTyped - it requires `render` to always `return this` although not required by backbone, and requires `event` to be a method that returns an event hash.
> - Initialize `Backbone.View.tagName` property in `preInitialize` hook, as modern ECMAScript prohibits statements before `super` call in class constructors (this source is 4 years old!)

---

# TypeScript & Backbone.js TodoMVC Example

> TypeScript is a language for application-scale JavaScript development. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open Source.

> _[TypeScript - typescriptlang.org](http://typescriptlang.org)_


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
* [ScreenCast - Why I Like TypeScript](http://www.leebrimelow.com/why-i-like-typescripts)

Get help from other TypeScript users:

* [TypeScript on StackOverflow](http://stackoverflow.com/questions/tagged/typescript)
* [Forums](https://github.com/Microsoft/TypeScript/issues)
* [TypeScript on Twitter](http://twitter.com/typescriptlang)

_If you have other helpful links to share, or find any of the links above no longer work, please [let us know](https://github.com/tastejs/todomvc/issues)._


## Implementation

This application uses TypeScript classes to create Backbone.js models and views, and jQuery for all DOM manipulation.


## Running

To compile the TypeScript in this project, install the dependencies and run the `compile` script.

```
# from examples/typescript-backbone
$ yarn tscc --spec js
# or alternatively,
$ yarn tscc --module app:js/app.ts --external backbone:Backbone --external lodash:_ --prefix js/ -- --project js -- --externs js/externs.js
$ open index.html
```
