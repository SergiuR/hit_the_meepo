var counter = document.getElementById('counter');
var count = 0;

window.onload = function () {
	var meepo = document.getElementById('meepo');
	var i = 0;
	var s = ['block', 'none'];
	var t = [1000, 500];
	var top;
	var left;
	function show() {
		i ^= 1;
		top = Math.floor(Math.random() * 350);
		left = Math.floor(Math.random() * 550);
		meepo.style.top = top + "px";
		meepo.style.left = left + "px";
		meepo.style.display = s[i];
		setTimeout(show,t[i]);
	}

	show()
}


function hit() {
	count++;
	counter.innerHTML = 'Hits: ' + count;
	show();
}