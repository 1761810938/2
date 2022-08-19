/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "/HYCOM/r2.2/precache-manifest.5241fd7ff1f00449a99d6763b3b5b568.js"
=======
  "/HYCOM/r2.2/precache-manifest.8cd1c3d97287b1bd8be3babb1d83026b.js"
>>>>>>> f7caaed3d9dfc6e5d270676cfebe22d8ace1dc47
);

workbox.core.setCacheNameDetails({prefix: "hycom"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
