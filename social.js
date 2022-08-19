const bodyElement=document.querySelector("#body-element");
const toggleMode=document.querySelector("#toggle-mode");
const toggleBall=document.querySelector("#toggle-ball");
const allBoxes=document.querySelectorAll(".BOX");
const article1=document.querySelector("#article-1");
const tWhite=document.querySelectorAll(".t-white");
const textSecondary=article1.querySelectorAll(".text-secondary");
const overView=document.querySelector("#overview");
const overArray=overView.querySelectorAll(".BOX");
const num1=document.querySelector(".num-1");
let number1=0;
let lightM=true;
console.log(allBoxes);
let darkMode=false;
// let lightMode=true;

let interNum1=setInterval(num1Increment,1);
function num1Increment(){
    number1+=1;
    num1.textContent=number1;
    stopInterNum1(number1,1987,interNum1)
}
function stopInterNum1(variable,value,interval){
    if(variable===value){
        clearInterval(interval);
    }
}



console.log(bodyElement)
toggleMode.addEventListener("click",changingMode);
function changingMode(){
if(!darkMode){
    darkMode=true;
}
else if(darkMode){
    darkMode=false;
}
modeChange(toggleBall,toggleMode)
}
function modeChange(ball,mode){
if(darkMode){
    ball.style.transform="translateX(100%)";
    ball.classList.remove("bg-white");
    ball.classList.add("bg-dark");
    mode.classList.remove("bg-secondary");
    mode.classList.add("bg-linear");
    
    console.log(mode)
    console.log(ball);
    article1.classList.add("darkmode");
    for(let i=0; i< overArray.length; i++){
        overArray[i].classList.remove("border-white");
        overArray[i].classList.add("border-dark");
    }
for(let i=0;i < textSecondary.length; i++){
    textSecondary[i].classList.add("text-blue");
    textSecondary[i].classList.remove("text-secondary");
    }
console.log(ball)  
    for(let i=0; i< tWhite.length; i++){
        tWhite[i].classList.add("text-white")
    }
    for(let i=0; i < allBoxes.length; i++){
allBoxes[i].classList.add("dark-hover");
}
lightM=false;
}



else if(!darkMode){
    ball.style.transform="translateX(0%)";
    ball.classList.add("bg-white");
    ball.classList.remove("bg-dark")
    mode.classList.add("bg-secondary");
    mode.classList.remove("bg-linear");
    for(let i=0; i< overArray.length; i++){
overArray[i].classList.add("border-white");
overArray[i].classList.remove("border-dark");
    }
    for(let i=0;i < textSecondary.length; i++){
        textSecondary[i].classList.add("text-secondary");
        textSecondary[i].classList.remove("text-blue");
        }
console.log(textSecondary)
    console.log(toggleMode);
    article1.classList.remove("darkmode")
    for(let i=0; i< tWhite.length; i++){
tWhite[i].classList.remove("text-white")
    }
    for(let i=0; i< allBoxes.length; i++){
allBoxes[i].classList.remove("dark-hover");
    };
lightM=true;
}
}