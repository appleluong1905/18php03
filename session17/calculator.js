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
	
}