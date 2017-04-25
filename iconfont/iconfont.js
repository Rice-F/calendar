;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-rili" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1022.970554 342.642824l0-6.480598L1022.970554 80.509638l-40.932248 0 0 0.166799L854.807576 80.676437c-11.30344 0-20.466124 9.162684-20.466124 20.466124l0 0c0 11.30344 9.162684 20.466124 20.466124 20.466124l127.229706 0 0 214.553541-939.39509 0L42.642193 121.608685l127.572514 0c11.30344 0 20.466124-9.162684 20.466124-20.466124l0 0c0-11.30344-9.162684-20.466124-20.466124-20.466124L42.643216 80.676437l0-0.166799-40.932248 0 0 255.652588 0 6.480598 0 624.557542c0 28.776394 23.411199 52.188616 52.188616 52.188616l916.882354 0c28.776394 0 52.188616-23.412223 52.188616-52.188616L1022.970554 342.642824zM970.781938 978.456734l-916.882354 0c-6.101975 0-11.256368-5.154393-11.256368-11.256368L42.643216 377.094474l939.39509 0 0 590.106916C982.038306 973.302341 976.883913 978.456734 970.781938 978.456734z"  ></path>' +
    '' +
    '<path d="M253.444293 184.030363c11.30344 0 20.466124-9.502421 20.466124-21.224394L273.910417 33.339316c0-11.721973-9.162684-21.224394-20.466124-21.224394s-20.466124 9.502421-20.466124 21.224394l0 129.467677C232.978169 174.527942 242.140853 184.030363 253.444293 184.030363z"  ></path>' +
    '' +
    '<path d="M765.097392 184.030363c11.30344 0 20.466124-9.502421 20.466124-21.224394L785.563516 33.339316c0-11.721973-9.162684-21.224394-20.466124-21.224394s-20.466124 9.502421-20.466124 21.224394l0 129.467677C744.631268 174.527942 753.793952 184.030363 765.097392 184.030363z"  ></path>' +
    '' +
    '<path d="M342.316389 121.608685 680.31852 121.608685c11.405771 0 20.651342-9.162684 20.651342-20.466124l0 0c0-11.30344-9.246595-20.466124-20.651342-20.466124L342.316389 80.676437c-11.405771 0-20.651342 9.162684-20.651342 20.466124l0 0C321.664024 112.444978 330.910619 121.608685 342.316389 121.608685z"  ></path>' +
    '' +
    '<path d="M681.186284 737.639017l0-120.750131c0-49.466622-40.243563-89.710184-89.710184-89.710184-49.465598 0-89.709161 40.243563-89.709161 89.710184l0 120.750131c0 49.465598 40.243563 89.709161 89.709161 89.709161C640.942721 827.348178 681.186284 787.104615 681.186284 737.639017zM542.699186 737.639017l0-120.750131c0-26.895557 21.881356-48.777937 48.776913-48.777937s48.777937 21.88238 48.777937 48.777937l0 120.750131c0 26.895557-21.88238 48.776913-48.777937 48.776913S542.699186 764.534574 542.699186 737.639017z"  ></path>' +
    '' +
    '<path d="M423.994644 805.722648 423.994644 548.805254c0-11.567453-9.162684-20.944008-20.466124-20.944008-6.018064 0-11.411911 2.673899-15.156188 6.90527-4.551666 3.589758-8.879228 7.970532-12.082176 11.172457l-32.454156 32.454156c-7.992021 7.992021-7.993045 20.951171 0 28.943193l0 0c7.993045 7.993045 20.951171 7.993045 28.944216 0l10.282181-10.282181 0 208.667483c0 11.567453 9.162684 20.944008 20.466124 20.944008S423.994644 817.289078 423.994644 805.722648z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gengduo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M904 692c0 8.189-3.124 16.379-9.372 22.628-12.497 12.496-32.759 12.496-45.256 0L512 377.255 174.628 714.628c-12.497 12.496-32.758 12.496-45.255 0-12.497-12.498-12.497-32.758 0-45.256l360-360c12.497-12.496 32.758-12.496 45.255 0l360 360C900.876 675.621 904 683.811 904 692z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M904 332c0-8.189-3.124-16.379-9.372-22.628-12.497-12.496-32.759-12.496-45.256 0L512 646.745 174.628 309.372c-12.497-12.496-32.758-12.496-45.255 0-12.497 12.498-12.497 32.758 0 45.256l360 360c12.497 12.496 32.758 12.496 45.255 0l360-360C900.876 348.379 904 340.189 904 332z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)