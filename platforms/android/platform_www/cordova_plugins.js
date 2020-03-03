cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_android",
      "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-cache-clear.CacheClear",
      "file": "plugins/cordova-plugin-cache-clear/www/CacheClear.js",
      "pluginId": "cordova-plugin-cache-clear",
      "clobbers": [
        "CacheClear"
      ]
    },
    {
      "id": "cordova-plugin-appinfo.AppInfo",
      "file": "plugins/cordova-plugin-appinfo/www/appinfo.js",
      "pluginId": "cordova-plugin-appinfo",
      "merges": [
        "navigator.appInfo"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-splashscreen": "5.0.3",
    "cordova-plugin-cache-clear": "1.3.7",
    "cordova-plugin-appinfo": "2.1.2"
  };
});