# Swapr UI

## Documentation

For documentation, visit [swap-ui-website](https://swapr-ui.pages.dev/), it's still work in progress.

## Getting started

Swapr UI will help you build dapp supafast by having a set of web components built with the utility classes from Tailwind CSS.

Install it with npm

```bash
npm install swapr-ui@latest
```

Install it with bun

```bash
bun add swapr-ui@latest 
```

## If are using Tailwind CSS on your project

Add this path to content on tailwind config

**Tailwind Config**

```
 content: [
    <!-- other paterns -->
    "./node_modules/swapr-ui/**/*.{js,ts,js,mjs}",
  ],
```

**Import Colors**

You can either import colors or just copy colors.css and tweak it. On Next js, you can import it on a place like `layout.js`.

```
  import "swapr-ui/colors.css";
```

## Not using tailwind css

Import all the needed styles

```
import "swapr-ui/styles.css";
```

---

# Library

## Available Scripts

### Build the library
This will run rollup  with -c command (to check rollup config file)

```
npm run build
```

### Publish the library
Make sure you run the build command before publishing, also update the lib version package.json

```
npm publish
```

### Run tailwindcss to compile styles
```
npm run build:tailwindcss
```

### Run storybook locally

```
npm run storybook
```

### Build storybook

```
npm run build:storybook
```