/*
 * fb-deep-link.js v0.1
 * Facebook deep linking
 * Redirect Facebook web links to Facebook App on iOS and Android.
 *
 * https://github.com/imnotadeveloper/facebook-deep-linking
 * Licensed under MIT License
 */
(function() {

  // OS patterns detection based on:
  // https://github.com/hgoebl/mobile-detect.js/blob/master/mobile-detect.js
  var isIOS = osPattern('\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia');
  var isAndroidOS = osPattern('Android');

  // Listen fbLinks clicks on iOs and AndroidOS
  if (isIOS || isAndroidOS) {

    var fbLinks = document.querySelectorAll('[data-fbid]');
    for (var i = 0; i < fbLinks.length; i++) {

      fbLinks[i].addEventListener('click', function() {

        event.preventDefault();
        var url = event.toElement.getAttribute('href');
        var fbid = event.toElement.dataset.fbid;

        // URIs
        if (isIOS) {
          var uri = 'fb://profile/' + fbid;
        }
        else if (isAndroidOS) {
          var uri = 'fb://facewebmodal/f?href=' + url;
        }
        else {
          var uri = url;
        }

        // Redirect to URI
        window.location = uri;

        // Fallback to URL
        setTimeout(function() {
          window.location = url;
        }, 1);

      });
    }
  }



  /**
   * Check OS Pattern in User-Agent.
   *
   * @param {string} pattern
   * @return {boolean}
   */
  function osPattern(pattern) {
    return new RegExp(pattern, 'i').test(navigator.userAgent) ? true : false;
  }

})();
