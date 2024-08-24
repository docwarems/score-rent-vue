# Score Rent (Vue)

This ia a Vue version of Score Rent (also found in my repos) rewritten from scratch.
Score Rent has been created using the EJS Express addon, which was very easy to use for me coming from a Java JSP background, at the time when I was also working with frontends professionally.

Today professionally I'm doing only nodejs backend development, but our frontend team uses Vue. So I always wanted to get my hands dirty with Vue too.

## Resources

Currently I primilarly follow the official Vue documentation at vuejs.org.

Before I watched the Vue 3 tutorial from Net Ninja at https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1. which is fantastic as all Net Ninja tutorials. However, it is three years old and focuses mainly on the Options API (but at the end it promotes the Composition API for the future too). The link to the Github repo is not fully matching today with the YT playlist (early chapters from the playlist missing). The repo seems to have progressed a lot regarding a non free Vue/Firebase course.

## Setup

I setup the app template using "npm create vue@latest" as described on the Vue site. Create options used:

- Typescript: I activated Typescript support as we use it professionally too.
- Router: However, I deleted the routing code for my very first routing example - see below
- Playwright: I enabled the Playwright support, as this is also used for testing by our frontend team. I plan to use it later.

### App organization

As I plan to later connect the Vue app to a backend API, I created the Vue app in a 'client' folder of the project.

## Options vs Composition API

I will use the Composition API, as it seems to be the recommended default variant today.

## Development experience

### Typescript

The CLI set up Typescript 5.4 which is newer as the version I am familiar with professionally. These things were new to me so far:

- "import type" feature mandatory (or at least mandatory due to some tsconfig option created by the Vue template).

### Extensions

The README created from the Vue app template recommends the Volar Vue extension, which today is marked as deprecated. I assume it's functionality has been added to the official Vue extension, so I didn't install it.

### Routing

The approach described here https://vuejs.org/guide/scaling-up/routing.html is somehow different from the only I found in the Net Ninja tutorial. The Vue doc obviously uses a manually created routing mechanism using a-tag JS hrefs ("If you .. do not wish to involve a full-featured router library"). Of course I want to use the full-featured router, but I started with this simple approach too.

# Remains from the README created by the Vuejs template

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
