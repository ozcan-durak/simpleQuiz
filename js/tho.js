function submitForm(){
	var total = 4;
	var score = 0;

	//get the input value
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;

	//Validate the question
	for(i=1;i<= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ""){
			alert('missing question '+ i);
			return false;
		}
	}

	var answers =  ["a","b","a","d"];
	//check the answers
	for(i=1; i <= total; i++){
		if(eval('q'+i) == answers[i -1]){
			score++;
		}
	}

	//display the score as an alert
	alert('you scored '+score+' out of '+total);

	//keep it false unless you are using a from to submit like (php, asp) etc..
	return false;
}