//getting all required elements

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");

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
}

let que_count = 0; //Inicializo el contador de preguntas

const next_btn = quiz_box.querySelector(".next_btn");

//Next button clicked
next_btn.onclick = () => {
    if(que_count < questions.length -1){
        que_count++;
        showQuestions(que_count);
        queCounter(que_count + 1);    
    }else{
        console.log("Questions COmplete");
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
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer; //Accede a las posicion del array de questions, posicion answer
    let allOptions = option_list.children.length;

    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Correcto");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }else{
        answer.classList.add("incorrect");
        console.log("INcorrecto");
        answer.insertAdjacentHTML("beforeend", crossIcon);
        //if the option selected was incorrect auto select the correct one
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");                
            }
            
        }
    }
    //disable options after user select one
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");   
    }

}

//get numeration for questions on the footer
function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQueTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQueTag;
}