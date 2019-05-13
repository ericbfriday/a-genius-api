# a-genius-api

A helpful library offering a wrapper around the genius.com API.

### Usage

```
npm install --save @friday-friday/a-genius-api

// or

yarn add @friday-friday/a-genius-api
```

Adding Genius Annotations To Your Own Site:

If you want to make or display annotations for your own page, you'll need to add the following script tag:

```html
<script src="https://genius.codes"></script>
```

### Features

### Importing library

### NPM scripts

### Development

This project is developed using [Typescript](https://typescriptlang.org/) and [Node](https://nodejs.org/).

Quickstart guide:

1. Fork and clone the repo.
2. Install dependencies.
   `npm install` or `yarn install`.
3.

To run tests, make sure you create a `test\.dev-only-access-token.ts` file with four exported constants. Example:

```typescript
- export const CLIENT_ID = 'asdf...myClientId...jkl'
- export const CLIENT_SECRET ='zyxwvut...myClientSecret...321'
- export const CLIENT_ACCESS_TOKEN ='abc123...myAccessToken...789'
- export const REDIRECT_URI = 'http://my-redirect.uri/'
- export const APP_WEBSITE_URL = 'https://www.my-website.com/'
```

### FAQ

### Contributors

Eric Friday [Website](http://www.ericbfriday.com)
David Friday [Website](https://www.github.com/tom1011)

### Additional Thanks

[Drew Kestell](https://drewkestell.us) for his wonderful guidance.
[Alex Joverm](https://github.com/alexjoverm) for his terrific [Typescript Library Starter](https://github.com/alexjoverm/typescript-library-starter) repo.

### TODO

- Documentation
- Tests (specifically client OAuth calls)
- Coding...
