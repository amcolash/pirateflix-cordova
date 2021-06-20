# pirateflix-cordova

Android TV companion app for transmission-yify/pirate-flix

## Building

### Install Deps

- Install node dependencies with `$ npm install`

- Install android sdk and have `ANDROID_HOME` env var set

### Set Up Cordova

- Install cordova `$ npm i -g cordova`
- Add android platform folder `$ cordova platforms add android`

### Choose Dev/Prod

The dev build points to a local server while the prod one points to prod server. Update the `production` value inside of `package.json`.
When this value changes, you will need to rebuild the `platforms` folder. Easiest route is `$ npm run clean`.

### Build / Deploy with Cordova

```bash
$ npm run build

# OR

$ npm run deploy
```
