alert('ben');
function submitAnswers() {
	var total = 5;
	var score = 0;

	//get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;

	//validation
	if(q1 == null || q1 == ''){
		alert('you missed question 1');
		return false;
	} 

	for(i = 1; i <= total; i++){
		if(evals(q1) == null || q1 == ''){
		alert('you missed question 1');
		return false;
	}

	return false;
}


function submitAnswers() {
	var total = 5;
	var score = 0;

	//get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;

	//validation

	if(q1 == " " || q1 == null){
		alert('you missed a question');
		return false;
	}

	for (var i = Things.length - 1; i >= 0; i--) {
		Things[i]
	};
}