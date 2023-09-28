# node-prisma-shopping-cart-api
[![TypeScript version][ts-badge]][typescript-5-1]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

🏃🏽 Instant Value: All basic tools included and configured:

- [TypeScript][typescript] [5.1][typescript-5-1]
- [Prisma][prisma]
- [ESLint][eslint] with some initial rules recommendation
- [Jest][jest] for fast unit testing and code coverage
- Type definitions for Node.js and Jest
- [Prettier][prettier] to enforce consistent code style
- NPM [scripts](#available-scripts) for common operations
- [EditorConfig][editorconfig] for consistent coding style

## Homework

Add 3 test of your choice to any of the shopping cart functions such as 

* adding/removing product
* shopping_session and cart item

Carry out a test-driven approach by writing the simple test first, then write enough code to make the test pass(eg. static return or expect the function to pass etc.). Then refactor the code to make the code fail (eg. require actual data/insert-expect data of your choice etc.) and rinse and repeat until functionality is mature enough (since its your code, you decide when its production ready).

Tests can cover the same functionality with negative cases (fail on purpose the correct way)

### Use as a repository template

To start, just click the **[Use template][repo-template-action]** link (or the green button). Start adding your code in the `src` and unit tests in the `__tests__` directories.

### Clone repository

To clone the repository, use the following commands:

```sh
git clone https://github.com/mahoraz/shopping_cart
cd shopping_cart
npm install
```

## Available Scripts

- `clean` - remove coverage data, Jest cache and transpiled files,
- `prebuild` - lint source files and tests before building,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `prettier` - reformat files,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests

## Additional Information


## License

Licensed under the GPL-3.0 See the [LICENSE](https://www.gnu.org/licenses/gpl-3.0.html#license-text) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-5.1-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2018.12-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v18.x/docs/api/
[typescript]: https://www.typescriptlang.org/
[typescript-5-1]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-1/
[license-badge]: https://img.shields.io/badge/license-gpl-3.0-blue.svg
[license]: https://www.gnu.org/licenses/gpl-3.0.html#license-text
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[wiki-js-tests]: https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript

