const dateFromInput=document.querySelector("#inputdate");
const errorMessage=document.getElementById("errormessage");
const resultButton=document.querySelector(".result-button");
const resultParagraph=document.querySelector(".main__result");
const currentDate = new Date();


function getDaysUntilBirthday(){
    const dateFromInputValue=document.querySelector("#inputdate").value;
    errorMessage.innerHTML="";
    resultParagraph.innerHTML="";
    if (!dateFromInput.value){
    errorMessage.textContent="Введите дату рождения";
    } else{
        const parsedDate=Date.parse(currentDate);
        const userBirthday = Date.parse(dateFromInputValue);

        let calculateDiff=userBirthday-parsedDate;
        let calculateDiffInDays=Math.floor(calculateDiff / 1000 / 3600 / 24);
        if (calculateDiffInDays < 0){
            resultParagraph.textContent="Ваш день рождения в этот году уже прошел.";
        } else if (calculateDiffInDays === 0) {
            resultParagraph.textContent="Ваш день рождения сегодня."; 
        } else {
            resultParagraph.textContent="До вашего дня рождения осталось" + calculateDiffInDays +"дней.";
        }
    } 
}
resultButton.addEventListener('click', getDaysUntilBirthday);