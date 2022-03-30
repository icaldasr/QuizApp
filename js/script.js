//getting all required elements

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = quiz_box.querySelector(".timer .timer_sec"); //Muestra en el top los sg
const timeLine = quiz_box.querySelector("header .time_line"); //Agrego la barra en el barra superior
const timeText = quiz_box.querySelector("header .time_text");

//Start quiz button clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //Show the info
}

//Exit quiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //Hide the info
}

//Continue quiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //Hide the info
    quiz_box.classList.add("activeQuiz"); //Show the quiz box
    showQuestions(0);
    queCounter(1);
    startTime(15); //Initialize max time in seconds
    startTimerLine(0);
}

let que_count = 0; //Inicializo el contador de preguntas
let counter; //for timer
let counterLine;
let timeValue = 15; //max time in seconds
let widthValue = 0; //Width line
let userScore = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

//RestartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTime(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

quit_quiz.onclick = () =>{
    window.location.reload();
}

//Next button clicked
next_btn.onclick = () => {
    if(que_count < questions.length -1){
        que_count++;
        showQuestions(que_count);
        queCounter(que_count + 1);
        clearInterval(counter);
        clearInterval(counterLine); 
        startTime(timeValue);
        startTimerLine(widthValue);   
        timeText.textContent = "Time Left"; //change the text of timeText to Time Left
        next_btn.style.display = "none";
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        //console.log("Questions COmplete");
        showResultBox();
    }
}

//Get questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question+'</span>'; //Accede a las posicion del array de questions, posicion question
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'//Accede a las posiciones del array de questions, posiicion options y recorre ese subarray
                    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");
    // set onclick attribute to all available options
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    // startTime(timeValue);
    clearInterval(counter);
    clearInterval(counterLine);  
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer; //Accede a las posicion del array de questions, posicion answer
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        userScore += 1;
        //console.log(userScore);
        answer.classList.add("correct");
        //console.log("Correcto");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }else{
        answer.classList.add("incorrect");
        //console.log("INcorrecto");
        answer.insertAdjacentHTML("beforeend", crossIcon);
        //if the option selected was incorrect auto select the correct one
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct"); //mark the correct one
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon); //Add the correct icon    
            }
            
        }
    }
    //disable options after user select one
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");   
    }
    next_btn.style.display = "block";
}

function showResultBox(){
    info_box.classList.remove("activeInfo"); //Hide info box
    quiz_box.classList.remove("activeQuiz"); //Hide the quiz box
    result_box.classList.add("activeResult"); //Show the result box
    const scoreText = result_box.querySelector(".score_text");
    if(userScore > 3){
        let scoreTag = '<span>and CONGRATS!!, You got <p>'+ userScore+ '</p>out of<p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){
        let scoreTag = '<span>and NICEEE, You got <p>'+ userScore+ '</p>out of<p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry, You got only<p>'+ userScore+ '</p>out of<p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}


function startTime(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //Muestra los segundos actualizados
        time--; //Decrease time
        if (time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeText.textContent = "TIME OFF";

            let correctAns = questions[que_count].answer; //Accede a las posicion del array de questions, posicion answer
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correctAns) {
                    option_list.children[i].setAttribute("class", "option correct"); //mark the correct one
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon); //Add the correct icon    
                }
                
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");   
            }
            next_btn.style.display = "block";
        }
    }
}

//Timer line that restart in each question
function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        timeLine.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

//get numeration for questions on the footer
function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQueTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQueTag;
}