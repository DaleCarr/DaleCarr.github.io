A();

function c() {
	console.log("C");
	d();
}

function E(f) {
	console.log("E");
	var f = F;
	f();
}

function A() {
	console.log("A");
	B();
};



function G() {
	console.log("G");

	var H = function() {
		console.log("H");
		I();
	};
	H();
}

function d() {
	console.log("D");
	E(F);
}

function I() {
	console.log("I");
	J();
	J();
}

	function B() {
	console.log("B");
	C();
};

	function F() {
	console.log("F");
	G();
};

var rest = "KLMNOPQRSTUVWXYZ".split("");
for (var i=0; i<rest.length; i++) {
	(function(i){
			console.log(rest[i]);
	
	})(i);
}

function J() {
	J = function() {
		console.log("J");
		var K = function(){}
		K();
	};
};

 function C() {
	console.log("C");
	D();
};

