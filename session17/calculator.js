var tmp = '';
function cal(text){
	tmp = tmp + text;
	$('#result').val(tmp);
}
function result(){
	if(tmp != ''){
		$('#result').val(eval(tmp));	
	}
}
function del(){
	$('#result').val('');
	tmp = '';
}
function back(){
	var result = $('#result').val();
	var lengResult = result.length;
	var	resultNew = result.substring(0,lengResult-1); 
	$('#result').val(resultNew);
}