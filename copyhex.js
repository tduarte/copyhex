/*============================================
=             Copycontent Plugin             =
=   Use to copy the content in a data-color  =
=          attribute in your element.        =
============================================*/


$.fn.copyhex = function() {

	$(this).css('cursor', 'pointer'); 
	$(this).css('background-color', function () { 
		return $(this).data('color')
	});

	this.on("click", function() {
		event.preventDefault();
		var box = $(this),
			color = $(box).data("color");
			boxContent = $('<div class="ch-copied">Copiado!</div>');
		$(box).append(boxContent);
		if (boxContent.hasClass('fadeOut')) {
			boxContent.removeClass('fadeOut');
		}
		boxContent.addClass('fadeIn');
		box.addClass('pulse');
		setTimeout(function(){
	      boxContent.addClass('fadeOut');
	      box.removeClass('pulse');
	  	}, 300);
	  	setTimeout(function(){
	  		box.empty();
	  	}, 1000);
		// var colorSpan = $(this).parents('span');
		console.log(color);
	    copyToClipboard(color);
    });
	function copyToClipboard(elem) {
		var targetText = elem,
			target = document.getElementById('colorInput'),
			currentFocus = document.activeElement,
			succeed;
			target.value = elem;
			target.focus();
			target.setSelectionRange(0, 7);
	    
		// copy the selection
		try {
			succeed = document.execCommand("copy");
			// console.log('Copiado!')
		} catch(e) {
			succeed = false;
		}
		// restore original focus
		if (currentFocus && typeof currentFocus.focus === "function") {
			currentFocus.focus();
		}
		else {
			// clear temporary content
			target.textContent = "";
		}
		return succeed;
	}    
};