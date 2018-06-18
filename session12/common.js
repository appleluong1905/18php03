//alert('external demo');
document.write('Hello');
document.getElementById("demo").innerHTML = 'Xin chao demo';

var a = 5;
if(a == 3) {
	document.write("so 3");
} else if(a == 4) {
	document.write("so 4");
} else {
	document.write("k phai so 3 hoac 4");	
}
document.write("<br>");




for (var i = 0; i < 5; i++) {
	document.write(i);
	document.write("<br>");
}

function functionName(a = 3, b = 4){
	var c;
	c = a + b;
	document.write("Tong cua a va b la:" + c);
}


functionName(4, 5);
document.write("<br>");
functionName();