let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let signupForm = document.querySelector(".signup .form");
let loginForm = document.querySelector(".login .form");
let signupMessage = document.querySelector(".signup .message");
let loginMessage = document.querySelector(".login .message");
let signupActivator = document.querySelector(".signup-activator");
let loginActivator = document.querySelector(".login-activator");
let lines = document.querySelector(".lines");


login.addEventListener('click', function(){
	lines.style.opacity = 0;
	lines.style.visibility = 'hidden';
	signupForm.style.opacity = 0;
	signupForm.style.visibility = 'hidden';
	signupMessage.style.opacity = 1;
	signupMessage.style.visibility = 'visible';
	loginForm.style.opacity = 1;
	loginForm.style.visibility = 'visible';
	loginMessage.style.opacity = 0;
	loginMessage.style.visibility = 'hidden';
	signupActivator.style.backgroundColor = '#2f2f2f';
	loginActivator.style.backgroundColor = '#c03546';
})

signup.addEventListener('click', function(){
	lines.style.opacity = 1;
	lines.style.visibility = 'visible';
	loginForm.style.opacity = 0;
	loginForm.style.visibility = 'hidden';
	loginMessage.style.opacity = 1;
	loginMessage.style.visibility = 'visible';
	signupForm.style.opacity = 1;
	signupForm.style.visibility = 'visible';
	signupMessage.style.opacity = 0;
	signupMessage.style.visibility = 'hidden';
	signupActivator.style.backgroundColor = '#c03546';
	loginActivator.style.backgroundColor = '#2f2f2f';
})