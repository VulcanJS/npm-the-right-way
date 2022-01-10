# NPM Packages - The Right way

This repository aims to demonstrate how to build NPM packages the right way.

- `my-package` should import the shared code, built for the current environment.
- `my-package/server` should import the server-only code (and maybe shared code as well?)
- `my-package/client` should import the client-only code (and maybe shared code as well?)
- Packages should be written in TypeScript and expose their type definitions

To sum it up, we want to demonstrate how to build fullstack, typed NPM packages.

We take inspiration from Meteor package system: https://guide.meteor.com/writing-atmosphere-packages.html.
They provide an incredible developer experience, but were sadly limited to Meteor apps and suffer from a few technical issues.
We want to achieve the same "DevX" with modern, generic bundlers.


Note: the shared code will be exactly the same in both environment, this is slightly different to what we call isomorphism.
Isomorphism is only possible with some magic at import time (basically changing `my-package` to `my-package/<current-environment>` at build time in your app), which is out of scope here.

## Learnings

- UMD used to be the way to go for having a single shared bundle, but now ES Modules should be preferred.
Moderne bundlers such as Esbuild might not support them: https://github.com/evanw/esbuild/issues/507
- ES Modules will be the reference in the short run
- NPM exports will be the reference in the short run, but:
  - need better support in TypeScript
  - need better support in Jest, should be shipped in Jest 28: https://github.com/facebook/jest/issues/9771

## Contribute

If you want to test a new bundler, copy `package-template` and setup `package.json` accordingly.
Please try to modify only the `package.json`: this way we can compare bundlers against the same basic features.

If you want to test a new feature (exporting React components, supporting path aliases or whatever),
you may open a PR modifying the "package-template". We can then apply this change to all the packages using a command.


## References

- https://github.com/vercel/next.js/discussions/9133#discussioncomment-1927292