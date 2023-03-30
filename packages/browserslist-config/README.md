# A Color Bright's browserslist config

## Introduction

Our standard level of browser support is the last two versions of all major browsers.

We no longer support IE11.

## Installation

Via npm:

```shell
npm install -DE @acolorbright/browserslist-config@latest
```

## Usage

Add the following to your `package.json`:

```json
"browserslist": [
	"extends @acolorbright/browserslist-config"
]
```

Or, create a `.browserslistrc` file with the following contents:

```
extends @acolorbright/browserslist-config
```

Also add a script that can be used [to regularly update the Browserslist DB](https://github.com/browserslist/update-db#why-you-need-to-call-it-regularly):

```json
"scripts": {
	"browserslist:update": "npx update-browserslist-db@latest"
}
```
