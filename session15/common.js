function checkValidate(){
	var name, email, password;
	name     = document.getElementById('name').value;
	email    = document.getElementById('email').value;
	password = document.getElementById('password').value;
	if(name == ''){
		document.getElementById('error_name').innerHTML = 
		'Please input your name';
		//alert("Please input your name");
	}else{
		document.getElementById('error_name').innerHTML = 
		'';
	}
	if(email == ''){
		//alert("Please input your email");
	}
	if(password == ''){
		//alert("Please input your password");
	}
	// console.log(name);
}