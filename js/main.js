function askQuestions() {


	var firstName = prompt('What is your first name?'),
		lastName = prompt('What is your last name?'),
		fullName = firstName + ' ' + lastName;

	console.log(fullName);	

	/* If the user's first name is 'General' and their last name is NOT 'Assembly',
then greet the general! (hint: User console.log)
*/

	if(firstName.toLowerCase().trim() =='general'
		&& lastName.toLowerCase().trim() != 'assembly') {
	console.log('Hello General!')	
	};



	if (fullName == 'Steve Knapp') {
		console.log('You da man');
	};

	var age = prompt('How old are you?');

	age = parseInt(age);

	if (age >= 18) {

		console.log('User is an adult');

	} else if (age >= 13) {

		console.log('User is a teenager');
	}

	else {

		console.log('User is a child');
	};


}




// This is a JS comment
/* This is also a JS comment */
//When the page has loaded
$(function() {

	//When the user clicks the image, run askQuestions
	$('img').on('click',askQuestions);

	//When the user clicks an h3 element
	$('h3').on('click', function() {


		//Hide the next element
		$(this).next().slideToggle(500);

	});

});

