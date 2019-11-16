var step1 = document.getElementById("StepOneContainer")
var step1next = document.getElementById("StepOneNext")
var fname = document.getElementById("first_name")
var fnameerror = document.getElementById("first_name_error")
var emailerror = document.getElementById("email_error")
var email = document.getElementById("email")


/*const emptyFields = (test)=>{
	
	if(test.value ==""){
		if(test ===fname){
			fnameerror.style.display = "inline-block";
			fnameerror.innerHTML = "This field cannot be empty";
		}else if(test ===email){
			emailerror.style.display = "inline-block";
			emailerror.innerHTML = "This field cannot be empty";
		}else if(test === contact){
			contacterror.style.display="inline-block";
			contacterror.innerHTML = "This field cannot be empty";
		}else if(test===country){
			countryerror.style.display="inline-block";
			countryerror.innerHTML = "This field cannot be empty";
		}
	}else{
		step1.style.display = "none";
		step2.style.display="block";
		}
}*/
step1next.addEventListener('click',function(e){
	let fnamevalid = false;
	let emailvalid = false;
	e.preventDefault();
	if(fname.value==""){
		fnameerror.style.display = "inline-block";
		fnameerror.innerHTML = "This field cannot be empty";
		fnamevalid = false;
	}else if(!((/^([a-zA-Z]{3,16})$/).test(fname.value))){
		fnameerror.style.display = 'inline-block';
		fnameerror.innerHTML = "Please enter valid First Name";
		fnamevalid = false;
	}else{
		fnameerror.style.display = "none";
		fnamevalid = true;
	}
	if(email.value==""){
		emailerror.style.display = "inline-block";
		emailerror.innerHTML = "This field cannot be empty";
		emailvalid = false;
	}else if(!((/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/).test(email.value))){
		emailerror.style.display = 'inline-block';
		emailerror.innerHTML = "Please enter valid email";
		emailvalid = false;
	}else{
		emailerror.style.display = "none";
		emailvalid = true;
	}
	if(emailvalid && fnamevalid){
		step1.style.display = "none";
		step2.style.display="block";
	}
})

var step2 = document.getElementById("StepTwoContainer")
var step2next = document.getElementById("StepTwoNext")
var contact = document.getElementById("contact")
var country = document.getElementById("country")
var contacterror = document.getElementById("contact_error")
var countryerror = document.getElementById("country_error")

var step3 = document.getElementById("StepThreeContainer")
step2next.addEventListener('click',function(e){
	e.preventDefault();
	let contactvalid = false;
	let countryvalid = false;
	
	if(contact.value==""){
		contacterror.style.display = "inline-block";
		contacterror.innerHTML = "This field cannot be empty";
		contactvalid = false;
	}else if(!((/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/).test(contact.value))){
		contacterror.style.display = 'inline-block';
		contacterror.innerHTML = "Please enter valid Contact";
		contactvalid = false;
	}else{
		contacterror.style.display = "none";
		contactvalid = true;
	}
	if(country.value==""){
		countryerror.style.display = "inline-block";
		countryerror.innerHTML = "This field cannot be empty";
		countryvalid = false;
	}else if(!((/^[a-zA-Z]{2,}$/).test(country.value))){
		countryerror.style.display = 'inline-block';
		countryerror.innerHTML = "Please enter valid Country";
		countryvalid = false;
	}else{
		countryerror.style.display = "none";
		countryvalid = true;
	}
	if(countryvalid && contactvalid){
		step2.style.display = "none";
		step3.style.display="block";
	}
})

var step2previous = document.getElementById("StepTwoPrevious")
step2previous.addEventListener('click',function(e){
	e.preventDefault();
	step1.style.display = "block";
	step2.style.display="none";
})


var submit = document.getElementById("StepThreeSubmit")
var program = document.getElementById("select_program")
var message = document.getElementById("message")
var programerror = document.getElementById("select_program_error")
var messageerror = document.getElementById("message_error")

var Success = document.getElementById("SuccessContainer")

submit.addEventListener('click',function(e){
	e.preventDefault();
	let programvalid = false;
	let messagevalid = false;
	
	if(program.value==""){
		programerror.style.display = "inline-block";
		programerror.innerHTML = "Please Select Valid Program";
		programvalid = false;
	}else{
		programerror.style.display = "none";
		programvalid = true;
	}
	if(message.value==""){
		messageerror.style.display = "inline-block";
		messageerror.innerHTML = "This field cannot be empty";
		messagevalid = false;
	}else if(!((/^[a-zA-Z]{2,}$/).test(message.value))){
		messageerror.style.display = 'inline-block';
		messageerror.innerHTML = "Please enter Message of atleast 3 characters";
		messagevalid = false;
	}else{
		messageerror.style.display = "none";
		messagevalid = true;
	}
	if(messagevalid && programvalid){
		step3.style.display = "none";
		Success.style.display="block";
	}
})

var step3previous = document.getElementById("StepThreePrevious")
step3previous.addEventListener('click',function(e){
	e.preventDefault();
	step2.style.display = "block";
	step3.style.display="none";
})