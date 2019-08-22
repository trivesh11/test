let pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
const questions = [
[ "The addictive chemical in cigarettes is known as:", "Nicotine", "Tar", "Carbon Dioxide" , 'A' ],
["Which pulmonary disease that is caused by smoking makes it difficult to breathe?", "Cancer", "Emphysema" , "Diabetis", 'B'],
["The active ingredient of all cigarette smoke is:","Diazpam", "Nicotine" , "Caffein", 'B' ],
[ "Children who breathe secondhand smoke are more likely to develop asthma.", "Yes", "No","Dont Know", 'A' ],
[ "Cigarette smoking kills nearly 420,000 people each year.", "Yes", "No","Dont Know", 'A' ],
[ "Although smoking damages the inside of your body, it causes no external permanent damage to a smoker's appearance.", "Yes", "No","Dont Know", 'B' ],
[ "Smoke inhaled from a cigarette reaches and affects the brain faster than intravenous drugs.", "Yes", "No","Dont Know", 'A' ],
[ "Smoking affects sexual and reproductive health only in women smokers.", "Yes", "No","Dont Know", 'B' ],
[ "Smoking increases your risk for developing osteoporosis.", "Yes", "No","Dont Know", 'A' ],
[ "Approximately how many chemicals does cigarette smoke contain?", "40","400","4000", 'C' ]

];
function _(x){
	return document.getElementById(x);
}
function retry() {
  window.location.href = "#pagenine";
  $.mobile.changePage("#pagenine", {
    reverse: false,
    transition: "slide"
  });
  location.reload();
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = `<h2>You got ${correct} of ${questions.length} questions correct</h2>`;
		_("test_status").innerHTML = "Test Completed";

    test.innerHTML +="<br><a href='#pagenine' data-role='button' onClick='retry()'>Retry</a><br>";
      test.innerHTML+="<br><a href='#pageten' data-role='button' data-ajax='false'>View Answers</a>";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = `Question ${pos+1} of ${questions.length}`;

	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
  chD = questions[pos][4];
//  chE = questions[pos][5];
	test.innerHTML = `<h3> ${question} </h3>`;

	test.innerHTML += `<input type='radio' name='choices' value='A' style="text-align:center;"> ${chA}<br>`;
	test.innerHTML += `<input type='radio' name='choices' value='B'> ${chB}<br>`;
  test.innerHTML += `<input type='radio' name='choices' value='C'> ${chC}<br><br>`;
	//test.innerHTML += `<input type='radio' name='choices' value='D'> ${chD}<br><br>`;
	test.innerHTML += "<button data-role='button' data-ajax='false' onclick='checkAnswer()'>Next</button>";
//<a href="#pagenine" data-role="button" data-ajax="false">Quiz</a>
//<button data-role='button' data-ajax='false' onclick='checkAnswer()'>Next</button>
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(let i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}

	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
    //WORKING ON number correct right or wrong.
}
window.addEventListener("load", renderQuestion, false);
