# A Color Bright's browserslist config

## Introduction

Our standard level of browser support is the last two versions of all major browsers.

We no longer support IE11.

## Installation

Via npm:

```
npm install -DE @acolorbright/browserslist-config@latest
```

## Usage

Add the following to your `package.json`:

```
"browserslist": [
  "extends @acolorbright/browserslist-config"
]
```

Or, create a `.browserslistrc` file with the following contents:

```
extends @acolorbright/browserslist-config
```
