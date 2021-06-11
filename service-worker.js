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

var precacheConfig = [["D:/Hexo/public/2021/03/11/page/index.html","de7ad171508d002f0dbc70db99dc3f4c"],["D:/Hexo/public/2021/06/11/Linux/index.html","17e3268d77ef77501ff475621f24df48"],["D:/Hexo/public/2021/06/11/MySQL基础/index.html","085811db3f3cbcf0c22c34e9e33aca34"],["D:/Hexo/public/2021/06/11/hibernate/index.html","81f7bb4caa71ee09a64fff20278c6574"],["D:/Hexo/public/2021/06/11/javaWeb/index.html","bbc5a31e3031bd89a55ff5fe6331e23b"],["D:/Hexo/public/2021/06/11/java基础/index.html","b5bbda771d58d895b9eed802670619eb"],["D:/Hexo/public/2021/06/11/java集合/index.html","8a43e4347efd797d6ffa262c60748792"],["D:/Hexo/public/2021/06/11/mybatis/index.html","fe28d27114d10f4d3be591124f6ed766"],["D:/Hexo/public/2021/06/11/redis/index.html","bed6c7fede026c51a3e9c02b8a2b67f6"],["D:/Hexo/public/2021/06/11/spring/index.html","5633c93bf3f3b6a8f35e9f7f5eef70e1"],["D:/Hexo/public/2021/06/11/springBoot/index.html","08f024e264cd26ccff154cf8e61d5f9c"],["D:/Hexo/public/2021/06/11/springCloud/index.html","54112a331de77f26eba45f874009b6b2"],["D:/Hexo/public/2021/06/11/springmvc/index.html","33188cd602edd4d166e8fb91c40de91c"],["D:/Hexo/public/2021/06/11/操作系统/index.html","7f5e7731d4c4046820703ec708fee846"],["D:/Hexo/public/2021/06/11/网络/index.html","2c6bfdc8f11ba474f3bec3559ad0bf0c"],["D:/Hexo/public/2021/06/11/设计模式/index.html","2f46539269542dd9f27edffb5448b8ac"],["D:/Hexo/public/404.html","5a314a2aaecc88c8285f36e027e5021b"],["D:/Hexo/public/about/index.html","c63a566cb74206ceba69aa7ba72e908a"],["D:/Hexo/public/archives/2021/03/index.html","c1947473e54678e88e64f342fd1b91df"],["D:/Hexo/public/archives/2021/06/index.html","210292875d8958ec45a9042355e05de3"],["D:/Hexo/public/archives/2021/06/page/2/index.html","6d43468d0de471a2f8347c94dc715c0b"],["D:/Hexo/public/archives/2021/index.html","8f1ed011d972b9cb5f9cb98e0e2112cd"],["D:/Hexo/public/archives/2021/page/2/index.html","30badf4d61bb9a36f1f5e54fbd0d701e"],["D:/Hexo/public/archives/index.html","f0b1930720d989e8ccd88ad9bea3cc0a"],["D:/Hexo/public/archives/page/2/index.html","38808726b984aefd3aee041d24f04726"],["D:/Hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/Hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/Hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/Hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/Hexo/public/categories/index.html","490c9b1386a6b8da45db981845c1df0d"],["D:/Hexo/public/categories/java/index.html","12b07bf5c5d7adee8650a73abf4d252d"],["D:/Hexo/public/categories/java/基础/index.html","0764a547887bc61671a24f50e9289069"],["D:/Hexo/public/categories/java/基础/学习/index.html","bcd20eec491b4148fab94b8d9a977dea"],["D:/Hexo/public/categories/面试/Linux/index.html","5294024aa5badf34005c9c8153003bdd"],["D:/Hexo/public/categories/面试/index.html","f6f11254cea60ff723b4613f8c3df902"],["D:/Hexo/public/categories/面试/java/index.html","46f4be6eefcfeea6495ac570b4d75bc3"],["D:/Hexo/public/categories/面试/java/基础/index.html","fed12784e4d8265bcab997e9db61dfb4"],["D:/Hexo/public/categories/面试/java/集合/index.html","f67ecd17d876d619693db0bbdc4a3fa8"],["D:/Hexo/public/categories/面试/javaWeb/index.html","b672ba6dade33f12f3e6c5f9bdb4b7e6"],["D:/Hexo/public/categories/面试/page/2/index.html","d25d4e5c4db27bdce1d24e04e4a507b1"],["D:/Hexo/public/categories/面试/基础/Mysql/index.html","4e1926855761f805e597cbda8eca5a08"],["D:/Hexo/public/categories/面试/基础/index.html","27f6f8d71d3cb3f6a73ba587367bf8ff"],["D:/Hexo/public/categories/面试/基础/redis/index.html","4a57c5641ce89ac4a2f1304b58f7fa3b"],["D:/Hexo/public/categories/面试/框架/Hibernate/index.html","7ae890851fd82478e76d10cf62560105"],["D:/Hexo/public/categories/面试/框架/Spring/index.html","88d965b2ea0f39d5c7254dd6c28ab653"],["D:/Hexo/public/categories/面试/框架/SpringBoot/index.html","a550331ffa088be844c51b4ba3b290e0"],["D:/Hexo/public/categories/面试/框架/SpringCloud/index.html","e9be8c36c17bb3f0ef2e7c200d8f4695"],["D:/Hexo/public/categories/面试/框架/SpringMvc/index.html","4c82129fca3ad71ce27c49e0b9499b11"],["D:/Hexo/public/categories/面试/框架/index.html","ec92d0670b5ceee2f43cbbc21936c0d5"],["D:/Hexo/public/categories/面试/框架/mybatis/index.html","41eaa505a57db99f657cb5f4670d5609"],["D:/Hexo/public/categories/面试/系统/index.html","a1341d34dad9d9c6153e1891d3170328"],["D:/Hexo/public/categories/面试/网络/index.html","a67a6d151d4f17e4b42e3afbe5b98cc1"],["D:/Hexo/public/categories/面试/设计模式/index.html","b9115bf794b2ae5c827e23f64fb371ba"],["D:/Hexo/public/css/index.css","e995abfb79cebab2f2d33cfedea330f1"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/Hibernate.jpg","3da932cfbcbfd2c654f88c0ada5b9c26"],["D:/Hexo/public/img/Linux.jpg","46276a4258269ccdc6f7d800e74c4fd3"],["D:/Hexo/public/img/Mysql基础.jpg","f7c363c721e093f4fb3a01c72b072a64"],["D:/Hexo/public/img/Spring.jpg","3dcc25d9f705d959d42e4fa74911a6d0"],["D:/Hexo/public/img/SpringBoot.jpg","95871f194f2b389aa4655137f7dffd60"],["D:/Hexo/public/img/SpringCloud.jpg","b442ba3aa02312d76ac5a0c3ca58358f"],["D:/Hexo/public/img/SpringMvc.jpg","9cd65fdb04d26017493c507723ad1b6b"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/alipay.jpg","d5c6a541d3b1893d03556232ed4f04f6"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/javaweb.jpg","6f645f0c90d1d1208c6fe29c7116df1a"],["D:/Hexo/public/img/java基础.jpg","2f613370bf8892bd7131af2c216ba728"],["D:/Hexo/public/img/java集合.jpg","2756fc8b8ea85e6efd9121ede2a98f9d"],["D:/Hexo/public/img/keji.jpg","be5ae71c5631a35dd28739aff67fa6b3"],["D:/Hexo/public/img/left.jpg","7f99fe6152dd7e2226e8070a49ab1792"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/img/main.jpg","ccac61c2bf28fac9f9dd3f854ef2785a"],["D:/Hexo/public/img/mybatis.jpg","0b44cfbf44090c158a71841701b2987a"],["D:/Hexo/public/img/redis.jpg","1c92be068e6f563eaf05e42f8eb00735"],["D:/Hexo/public/img/right.jpg","375ffde5d297b786477dc3f09161b222"],["D:/Hexo/public/img/top.jpg","2c520fc88f636ee357d25da204c4cff9"],["D:/Hexo/public/img/wechat.jpg","88a41861b8cdb509e33b2933b1023229"],["D:/Hexo/public/img/网络.jpg","f2bd8481573c42c734ea106faefcc187"],["D:/Hexo/public/img/设计模式.jpg","96e4ebfb773e97822eb1a5de83f94ae3"],["D:/Hexo/public/index.html","cb6a0c957a61b5d8962c9f435b55bef7"],["D:/Hexo/public/javaimg/javajichu.png","19d89bda8b93384c00344e87662f8552"],["D:/Hexo/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["D:/Hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/Hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/Hexo/public/js/tw_cn.js","c71318e978c08b7123db08410b79dec1"],["D:/Hexo/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/Hexo/public/link/index.html","7918478f179bf063fe99140656147410"],["D:/Hexo/public/live2dw/assets/moc/nipsilon.2048/texture_00.png","89816949aed4dc3734d894598844c34d"],["D:/Hexo/public/live2dw/assets/moc/nipsilon.2048/texture_01.png","90517165911a785cc29a71c66c2c5867"],["D:/Hexo/public/live2dw/assets/moc/nipsilon.2048/texture_02.png","cc219978974dc916c80f5bf13ede8204"],["D:/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Hexo/public/page/2/index.html","e67de335f2517116ad0a340a262dc36b"],["D:/Hexo/public/tags/Hibernate/index.html","691428a400ae11535c8f5691e74515c0"],["D:/Hexo/public/tags/Linux/index.html","3fb836a855c768797770add4cadfe6b8"],["D:/Hexo/public/tags/Mysql/index.html","24fa17af51db451ff939057f16693bfb"],["D:/Hexo/public/tags/Spring/index.html","5c9cb54deab7f307ab9fda54e18686e7"],["D:/Hexo/public/tags/SpringBoot/index.html","1af7530994fe5f6aee808447dce659d7"],["D:/Hexo/public/tags/SpringCloud/index.html","19f73b69dc2126806ce7f68f2fe10927"],["D:/Hexo/public/tags/SpringMvc/index.html","0caef1352f4d15708926464984a60fdc"],["D:/Hexo/public/tags/index.html","cf55521a0e9dd5161b0c8b9895c780d3"],["D:/Hexo/public/tags/java/index.html","6493b597f93511dfb5a0ef4bd753efda"],["D:/Hexo/public/tags/javaWeb/index.html","b4c0e935918ee7de5dd6e0d105d3a2db"],["D:/Hexo/public/tags/mybatis/index.html","626b5af05561e9ee4ddb38ad1936ce13"],["D:/Hexo/public/tags/redis/index.html","e374b6631fb2f69de7f64680fa924d2c"],["D:/Hexo/public/tags/基础/index.html","2d8f4cfde2ee0b2ad2c6ae846ae9fd9b"],["D:/Hexo/public/tags/框架/index.html","95f8f146d1758a1ccdd1486a639778b4"],["D:/Hexo/public/tags/系统/index.html","67c7b2abcd3f0c8cb928a48bbcfe6bd9"],["D:/Hexo/public/tags/网络/index.html","567334d9eb2248f9240995314ad5d6ef"],["D:/Hexo/public/tags/设计模式/index.html","c4526feb91263493531bea79319ef228"],["D:/Hexo/public/tags/集合/index.html","e1a29d18cfaffbf6fef3f200b9cbb1db"],["D:/Hexo/public/域名.html","1a1c70b7806c89e121816d3968991d9d"]];
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







