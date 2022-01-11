# NPM Packages - The Right way

This repository aims to demonstrate how to build NPM packages the right way.

- `my-package` should import the shared code, built for the current environment.
- `my-package/server` should import the server-only code (and maybe shared code as well?)
- `my-package/client` should import the client-only code (and maybe shared code as well?)
- Packages should be written in TypeScript and expose their type definitions

Bonus features:

- Folders may have multiple indexes `index.client.ts`, `index.server.ts` etc.
- Support common 3rd party tools: importing in Jest, Storybook, Cypress...

To sum it up, we want to demonstrate how to build fullstack, typed NPM packages.

We take inspiration from Meteor package system: https://guide.meteor.com/writing-atmosphere-packages.html.
They provide an incredible developer experience, but were sadly limited to Meteor apps and suffer from a few technical issues.
We want to achieve the same "DevX" with modern, generic bundlers.


Note: the shared code will be exactly the same in both environment, this is slightly different to what we call isomorphism.
Isomorphism is only possible with some magic at import time (basically changing `my-package` to `my-package/<current-environment>` at build time in your app), which is out of scope here.

## Run and test

- Clone this repo
- `yarn` - Install relevant packages
- `cd my-package-webpack && yarn && yarn run publish` - Will build your package + generate a tarball
- `cd .. && cd demo-next-app && yarn && yarn run dev` - Will start a Next.js app that imports each package
- Open relevant page to test the import

## How you can help

See contribute section below.

You can:

- add a demo with a new bundler: Rollup, Tsup (https://github.com/egoist/tsup), Unbuild (https://github.com/unjs/unbuild) could be great candidates.
- improve the build for one of the bundler we cover
- add automated tests for the Next.js app, using Jest or Cypress
- open an issue with ideas, feedback, knowledge about bundlers, a feature you'd like to test etc. etc.
- add a performance benchmark
- automate building, facilitate development

## Learnings

### Formats

- UMD used to be the way to go for having a single shared bundle, but now ES Modules should be preferred.
Moderne bundlers such as Esbuild might not support them: https://github.com/evanw/esbuild/issues/507
- In Webpack, `commonjs2` seems to do something similar to UMD
- ES Modules will be the reference in the short run

### NPM packages

- NPM exports will be the reference in the short run, but:
  - need better support in TypeScript
  - need better support in Jest, should be shipped in Jest 28: https://github.com/facebook/jest/issues/9771

### TypeScript

- TypeScript doesn't support multi entry exports correctly at the time of writing, see this article for a hackish (but brilliant) solution to bypass this issue: https://blog.mozilla.org/data/2021/04/07/this-week-in-glean-publishing-glean-js/, see Stack Overflow question: https://stackoverflow.com/questions/63058081/package-json-with-multiple-entrypoints
- For all bundlers that do not support generating `.d.ts`, you can simply use `"tsc --emitDeclarationOnly --declaration` to generate the type definitions. Generating such files needs TypeScript, it's not yet possible to create them more quickly without rewriting TypeScript. They will account for most of the build time when using Esbuild or SWC, half of the build-time (very roughly, can vary) for a Webpack project.
- You must not alter the file names when building, otherwise your definition files won't match. See https://webpack.js.org/configuration/output/#outputlibrarytype
- There is an issue between `@types/node` and TS 4.5, we locked it to 4.2 in the Esbuild demo: @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/55430

### Webpack

- Webpack has a weird way to handle packages in Lerna repo, the bundle sometimes end up containing the current package + imports: https://github.com/lerna/lerna/issues/3006

At the moment this repo doesn't demo importing other packages, or monorepo, but it could useful in the future.

### Esbuild

- Handling external is utterly painful for the server export! You want to add packages such as React, Graphql etc. as "externals" but there
  is no easy way to add all packages from package.json as externals

### Others

- Typing the bundler config is often difficult, because they are run at low-level, using Node.
The `@types` directive in comments might help having IntelliSense in VS code, without actually using TypeScript files.
- Don't forget to drop `.next` from time to time when working with local packages. Next.js might cache them,
leading to stale imports
- NPM and/or Yarn may cache .tgz files in an unexpected way, reinstalling a stale version everytime:https://github.com/yarnpkg/yarn/issues/6811

## Contribute

If you want to test a new bundler, copy `package-template` and setup `package.json` accordingly.
Please try to modify only the `package.json`: this way we can compare bundlers against the same basic features.
Then add a new page in the Next.js demo app.

To update a package, publish it, and rerun `yarn` in the Next.js app. You may need to use `npm` if the package is not updated, see https://github.com/yarnpkg/yarn/issues/6811

You may use this package to reproduce bugs for certain bundlers. 
In this case, reproduce your bug, and open a pull request. We'll keep it open until the maintainers of the bundler fix the bug.

If you want to test a new feature (exporting React components, supporting path aliases or whatever),
you may open a PR modifying the "package-template". We can then apply this change to all the packages using a command.


## References

- Next.js Plugin RFC: https://github.com/vercel/next.js/discussions/9133#discussioncomment-1927292
- Vulcan Fullstack packages RFC: https://github.com/VulcanJS/vulcan-npm/issues/14
