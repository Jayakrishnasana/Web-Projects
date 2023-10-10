function check(){
	var name=document.getElementById("name");
	 var email=document.getElementById("email");
	 var mobileNumber=document.getElementById("phoneNumber");
	 var userdob=document.getElementById("dateOfBirth"); 
	 var location=document.getElementById("location"); 
	 var file=document.getElementById("document");
	 
	 
		
	 var nameregx=/^[a-zA-Z ]+$/
	 var emailregx=/^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z0-9]+[.]com$/
	 var mobileNumbeeRegx=/^[6-9][0-9]{9}$/
	
		 const d = new Date();
		let year = d.getFullYear();
		var n=userdob.value.split("-");
		var age=year-n[0];
		 
	 
	 if(name.value.length==0 || !nameregx.test(name.value)){
			document.getElementById("result").innerHTML= "**invalid name";
			return false;	
		 }
	 
	 else if(mobileNumber.value.length==0 || !mobileNumbeeRegx.test(mobileNumber.value) ){
			document.getElementById("result").innerHTML= "**invalid mobile number";
			return false;	
		 }
	 else if( email.value.length==0 || !emailregx.test(email.value)){
			document.getElementById("result").innerHTML= "**invalid email";
			return false;	
		 }
	 else if( userdob.value.length==0 ){
			document.getElementById("result").innerHTML= "**invalid Date of Birth ";
			return false;	
		 }
	 else if( age<18){
			document.getElementById("result").innerHTML= "**Age should be not less than 21 ";
			return false;	
		 }
	 else if(location.value.length==0){
			document.getElementById("result").innerHTML= "**please select location";
			return false;	
		 }
	 else if(file.value.length==0){
			document.getElementById("result").innerHTML= "**please upload document";
			return false;	
		 }
	 else if(file.files[0].size > 2500000){
			document.getElementById("result").innerHTML= "**file size not more than 2MB";
			return false;	
		 }
	 
	
	 return true;
	
}