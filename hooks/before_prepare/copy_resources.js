const fs = require('fs');
const { join } = require('path');
const package = require('../../package.json');

module.exports = function (context) {
  // Configure current build type
  const BuildType = {
    DEV: 'dev',
    PROD: 'prod',
  };
  const BUILD = package.production ? BuildType.PROD : BuildType.DEV;

  console.log(`Build type: ${BUILD}`);

  // Native resources to copy
  const srcResPath = 'res/android';

  // Android platform resource path
  const androidResPath = 'platforms/android/app/src/main/res/drawable-land-xhdpi';

  // List of files to copy
  const toCopy = [{ src: `${srcResPath}/banner-${BUILD}.png`, dest: `${androidResPath}/banner.png` }];

  toCopy.forEach((f) => {
    fs.copyFileSync(f.src, f.dest);
    console.log(`Copied ${f.src} --> ${f.dest}`);
  });

  const replaceURL = true; // Set false when using local url
  if (replaceURL) {
    const indexPath = 'www/index.html';
    const index = fs
      .readFileSync(indexPath)
      .toString()
      .replace(/\(.*Url\)/, `(${BUILD}Url)`);
    fs.writeFileSync(indexPath, index);
  }

  const configPath = 'config.xml';
  const config = fs
    .readFileSync(configPath)
    .toString()
    .replace(/<widget id=".*?"/, `<widget id="com.amcolash.pirateflix${BUILD === BuildType.DEV ? '_dev' : ''}"`)
    .replace(/<name>.*?<\/name>/, `<name>PirateFlix${BUILD === BuildType.DEV ? ' - Dev' : ''}</name>`);
  fs.writeFileSync(configPath, config);
};
