(function() {
	var gui = require('nw.gui');
	var win = gui.Window.get();
	var config = require("./config");
	var danmu = require("./danmu");
	var listener = require("./listener");
	var penetrate = require("./penetrate");

	var crypto = require('crypto');
	var md5 = crypto.createHash("md5");

	win.showDevTools();

	document.title = "DANMU Client - Client ID = " + crypto.createHash('md5').update(Math.random().toString()).digest('hex');

	var isStart = false;
	window.addEventListener("keydown", function(e) {
		if (e.keyCode == 13 && !isStart) {
			document.getElementById("message").remove();
			document.querySelector(".border").remove();
			document.querySelector("body").style.background = "transparent";
			listener.init(config);
			danmu.init(config, listener, document.getElementById("main-canvas"));
			penetrate.init();
			isStart = true;
		}
	}, true);

	var resizeFunction = function(e) {
		if (!isStart) {
			document.querySelector(".border").style.width = window.outerWidth - 6 + "px";
			document.querySelector(".border").style.height = window.outerHeight - 6 + "px";
		}
	};
	window.addEventListener("resize", resizeFunction);
	resizeFunction();



	
	
})();