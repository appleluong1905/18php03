// $('a').click(function(){
// 	$('p').hide();
// });
// $('.hide-demo').click(function(){
// 	$('.demo').hide();
// });
$('#hide-demo').click(function(){
	$('#demo').hide("slow");
});
$('#show-demo').click(function(){
	$('#demo').show(5000);
});
$('#change-demo1').click(function(){
	$('#demo1').text('Hello world');_
});
$('#change-demo2').click(function(){
	$('#demo2').attr('src','anh2.jpg');_
});