[![Netlify Status](https://api.netlify.com/api/v1/badges/0ffbf542-a750-4fd9-9724-a76fb63097e8/deploy-status)](https://app.netlify.com/sites/strehlow-uckermark/deploys)

# About
This is hobby project that aims to establish a website for peers of mine. 
I started the project using Ember.js which was appealing in the beginning but a hassle 
when it came to set up a proper component lifecycle for a Map component using third party libraries. 
This is the old repo: https://github.com/geomC/strehlow-ember.

Furthermore, this new start incorporates what I have learned developing for [FixMyBerlin](https://github.com/FixMyBerlin/fixmy.frontend).

As development boiler plate, [webkid´s React Starterkit](https://github.com/wbkd/react-starter) is used, thanks guys!

# Usage

## Setup

Development requires optaining a personal [mapbox](https://www.mapbox.com/) [API Token](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/), since the API key stored in the repo is bound to the host where the app is deployed to later on.

Store the key in ./.env like `MAPBOX_KEY_DEV={INSERT-YOUR-KEY-HERE}`. Otherwise webpack will throw an error complaining about the missing environment variable.

## Development

Builds the application and starts a webserver with hot loading.

```sh
$ npm run start
```

The app runs on [localhost:8080](http://localhost:8080/)


## Build

Builds a minified version of the application in the build folder.

```sh
$ npm run build
```

# CI

[Netlfiy](https://www.netlify.com) is used for continious deployments.
Production builds can be viewed at https://strehlow-uckermark.com,
dev builds at https://development.strehlow-uckermark.com.