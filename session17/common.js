$('#register').click(function(){
	var name = $('#name').val();
	var phone = $('#phone').val();

	$('#show-name').text(name);
	$('#show-phone').text(phone);
	var a = '3';
	var b = '+';
	var c = 5;

	console.log(eval(a+b+c));
});