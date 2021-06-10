/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Hexo/public/2021/03/11/page/index.html","ee39d3e3902235c2e09a7e89ad2fcb75"],["D:/Hexo/public/2021/06/11/Linux/index.html","6dba60823981483548ea9e1e04ea0c2b"],["D:/Hexo/public/2021/06/11/MySQL基础/index.html","1dc581c027b074aa0107a51a1128520a"],["D:/Hexo/public/2021/06/11/hibernate/index.html","9facd54d30af931fa7cba8f073819fc7"],["D:/Hexo/public/2021/06/11/javaWeb/index.html","635d04fe97ea829ed1fa021fe94a1263"],["D:/Hexo/public/2021/06/11/java基础/index.html","c2578b7810e94dbddc8b84cc917369c5"],["D:/Hexo/public/2021/06/11/java集合/index.html","9fb2888ce0ab6ff94d8bad909d994cb9"],["D:/Hexo/public/2021/06/11/mybatis/index.html","a470d8dcfe5035182cff5e65581e05c7"],["D:/Hexo/public/2021/06/11/redis/index.html","1f5b676f45260ef2ce3a46a622fa28a4"],["D:/Hexo/public/2021/06/11/spring/index.html","d35674c1969a76601649c152246fc96a"],["D:/Hexo/public/2021/06/11/springBoot/index.html","a87a7fe50eb05a363c9ba6a669389840"],["D:/Hexo/public/2021/06/11/springCloud/index.html","bfe35b1b6f5b71ffad2ad88c0f97c0e8"],["D:/Hexo/public/2021/06/11/springmvc/index.html","93a20ad7e059f55404c22d9dc7fc4ad3"],["D:/Hexo/public/2021/06/11/操作系统/index.html","4c6b28ebdadbb379e89b3c2c2f2dc39f"],["D:/Hexo/public/2021/06/11/网络/index.html","ca214c20352e54da1d4c356754f92b88"],["D:/Hexo/public/2021/06/11/设计模式/index.html","d0647121ede6d2ef35ea1163649085de"],["D:/Hexo/public/404.html","fc0b9d46c0782ccdd4c869badad3504b"],["D:/Hexo/public/README.html","1ca3f193f64852f916dfcfd3745f8745"],["D:/Hexo/public/about/index.html","c4f1945925ab393e9b712e2fc02f3445"],["D:/Hexo/public/archives/2021/03/index.html","7abcdbc0b62aec0e30bd40a744ede5a4"],["D:/Hexo/public/archives/2021/06/index.html","82c12ba23be8e1620a97599b9bceacf5"],["D:/Hexo/public/archives/2021/06/page/2/index.html","28a6745621ebbbe3a7ba6608382370b4"],["D:/Hexo/public/archives/2021/index.html","dae1794900bfb17ebd1cf9d1a8963a26"],["D:/Hexo/public/archives/2021/page/2/index.html","6f27be017721a791689381415c111e29"],["D:/Hexo/public/archives/index.html","3a1547dedfd4186675357dc26fa2587c"],["D:/Hexo/public/archives/page/2/index.html","72fc1185c33e40369f548d4476f10011"],["D:/Hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/Hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/Hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/Hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/Hexo/public/categories/index.html","4ffd8f09fe0cb7e7175eb12f23333db8"],["D:/Hexo/public/categories/java/index.html","d2f2272addc82d34abdc7be4578cdd07"],["D:/Hexo/public/css/index.css","e995abfb79cebab2f2d33cfedea330f1"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/alipay.jpg","d5c6a541d3b1893d03556232ed4f04f6"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/keji.jpg","be5ae71c5631a35dd28739aff67fa6b3"],["D:/Hexo/public/img/left.jpg","7f99fe6152dd7e2226e8070a49ab1792"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/img/main.jpg","ccac61c2bf28fac9f9dd3f854ef2785a"],["D:/Hexo/public/img/right.jpg","375ffde5d297b786477dc3f09161b222"],["D:/Hexo/public/img/top.jpg","2c520fc88f636ee357d25da204c4cff9"],["D:/Hexo/public/img/wechat.jpg","88a41861b8cdb509e33b2933b1023229"],["D:/Hexo/public/index.html","333bd15ac99a7ce6da53dd006ad70bb6"],["D:/Hexo/public/javaimg/javajichu.png","19d89bda8b93384c00344e87662f8552"],["D:/Hexo/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["D:/Hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/Hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/Hexo/public/js/tw_cn.js","c71318e978c08b7123db08410b79dec1"],["D:/Hexo/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/Hexo/public/link/index.html","c73949e350c2bfad948fcfe5471e33e5"],["D:/Hexo/public/live2dw/assets/moc/nipsilon.2048/texture_00.png","89816949aed4dc3734d894598844c34d"],["D:/Hexo/public/live2dw/assets/moc/nipsilon.2048/texture_01.png","90517165911a785cc29a71c66c2c5867"],["D:/Hexo/public/live2dw/assets/moc/nipsilon.2048/texture_02.png","cc219978974dc916c80f5bf13ede8204"],["D:/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Hexo/public/page/2/index.html","1a3535f57c7e885d9875c7a67c9bc8d5"],["D:/Hexo/public/tags/index.html","dbd6ce24c217da28bde7cb53125f29ea"],["D:/Hexo/public/tags/java-基础/index.html","9ab152e04401fc3d7fac714d9ac053a2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







