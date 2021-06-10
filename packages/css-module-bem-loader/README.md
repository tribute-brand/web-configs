# `css-module-bem-loader`

A webpack loader to transform a CSS module object with additional BEM features

## Install

This CSS loader depends on `webpack` and `css-loader` to work.

```sh
npx install-peerdeps -D @acolorbright/css-module-bem-loader && npm install -DE @acolorbright/css-module-bem-loader
```

## Configure

The css module BEM loader can only be used in combination with `css-loader` and has to be applied after `css-loader` and before `style-loader` in the webpack configuration. The loader only works with `.module.css` and `.modules.scss` files.

```js
{
  test: /\.module\.css/,
  use: [
    'style-loader',
    '@acolorbright/css-module-bem-loader',
    {
      loader: 'css-loader',
      options: {
        modules: {
          namedExport: false,
          mode: 'pure'
        }
      }
    }
  ]
}
```

> Note that the loader doesn't work with the `modules.namedExport` css-loader option enabled.
> The module can be used with or without the css-loader option `esModule`

## Usage

In order to use the loader correctly you need to make sure that a module's block classname is equal to the module's filename:

```css
/* navigation.module.css */
.navigation {
  /* styles */
}

.navigation__links {
  /* styles */
}

.navigation--expanded {
  /* styles */
}
```

The transformed styles object applies scopes for your BEM classnames so that it's easier to select classnames without having to look up complex keys containing dashes and underscores:

```js
import styles from './navigation.module.css'

/* get the block className */
styles.block

/* get an element className */
styles.element.links

/* get a modifier className */
styles.modifier.expanded
```

Since there's only one block selector, the `block` key returns a string. For the elements and modifiers the object provides two nested objects `element` and `modifier` which contain the relevant classnames without the `block__` and `block--` prefix.

> In case the block classname doesn't contain any CSS rules, the block classname will return an empty string
> The BEM keys are being added on top of the original object keys, so it's still possible to use the module without the added keys
