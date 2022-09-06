const prevButton = document.querySelectorAll(".previous-btn");
const nextButton = document.querySelectorAll(".next-btn");
const fromSteps = document.querySelectorAll(".page");
const progress = document.getElementById("progress");
const progressSteps = document.querySelectorAll(".Progress-step");


// check Input Value---------------------- 
const stepOneError = document.getElementById('step-one-error-notice');
const stepTwoError = document.getElementById('step-two-error-notice');
// END input vale ------------------------

let formStepNum = 0;



nextButton.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        

// console.log();
console.log(formStepNum);
        if(formStepNum == 0){
            if(document.getElementById('Name-Business').value == 0){
                stepOneError.innerHTML = "Filed Name of business"
                return
            }else{
                formStepNum++;
                stepTwoError.style.display = "none";
                updateFormSteps();
                updateProgressbar();
            }
        }
        else if(formStepNum == 1){
            if(document.getElementById('Facebook-URL').value == 0){
                stepTwoError.style.display = "block";
                stepTwoError.innerHTML = "Please, Put URL of Facebook Page"
                return
            }
            else if(document.getElementById('Youtube-URL').value == 0){
                stepTwoError.style.display = "block";
                stepTwoError.innerHTML = "Please, put URL of Youtube"
                return
            }
            else if(document.querySelector('#Google-Analaytics').checked == false){
                stepTwoError.style.display = "block";
                stepTwoError.innerHTML = "Please, Checked View Access of Google Analaytics"
                return
            }
            else{
                formStepNum++;
                updateFormSteps();
                updateProgressbar();
            }
        }

    });
});

prevButton.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        formStepNum--;
        updateFormSteps();
        updateProgressbar();
    });
});

function updateFormSteps(){

    fromSteps.forEach((formStep) =>{
        formStep.classList.contains("active") && 
        formStep.classList.remove("active");
    });

    fromSteps[formStepNum].classList.add("active") 
}


function updateProgressbar(){
    progressSteps.forEach((progressStep, idx)=>{
        if(idx < formStepNum + 1 ){
            progressStep.classList.add('Progress-step-active');
        }else{
            progressStep.classList.remove('Progress-step-active');
        }
    });

    const progressActive = document.querySelectorAll(".Progress-step-active");
    progress.style.width = ((progressActive.length - 1)/(progressSteps.length - 1)) * 100 + '%';
}


