/*! copyhex - v1.0.0 - 2016-06-03
* Copyright (c) 2016 Thiago Duarte; Licensed MIT */
(function($) {
  $.fn.copyhex = function() {

    // Style with a link cursor
    $(this).css('cursor', 'pointer');

    // Convert RGB to HEX
    function rgb2hex(rgb) {
      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    // Create an input with the HEX and copy that
    function copyToClipboard(elem) {
      var target = document.getElementById('hexInput'),
          currentFocus = document.activeElement,
          succeed;
      target.value = elem;
      target.focus();
      target.setSelectionRange(0, 7);
      try {
        succeed = document.execCommand("copy");

      } catch (e) {
        succeed = false;
      }
      if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
      } else {
        target.textContent = "";
      }
      return succeed;
    }

    // Events
    this.on("click", function() {
      event.preventDefault();
      var box = $(this),
          rgb = $(box).css('backgroundColor'),
          color = rgb2hex(rgb),
          boxContent = $('<div class="ch-temp"><input size="1" id="hexInput"></div>');
      $(box).append(boxContent);
      copyToClipboard(color);
      $('.ch-temp').remove();
    });

  };
}(jQuery));