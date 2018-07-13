$('#input').click(function(){
	var name = "Hello World Cup";
	var input = $('#inputData').val();
	var leng = name.length;
	var pos  = name.indexOf(input); 
	var sub1  = name.substring(0,pos); 
	var sub2  = name.substring(pos+1,name.length); 
	var newName = sub1 + "<span class='yellow'>" + input + "</span>"
	+ sub2;
	document.getElementById('demo').innerHTML = newName;
});
