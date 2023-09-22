const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const massage = document.querySelector("#error-massage")
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]

checkButton.addEventListener("click", function validateBillAmount(){
   hideMassage();

    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturn = cashGiven.value - billAmount.value;

            calculateChange(amountToBeReturn);

        }else{
            showMassage("Do you want wash Plates?")
        }

    }else{
       showMassage("Invalid Bill Amount")
    }
})

function calculateChange(amountToBeReturn){
    for(let i = 0; i < availableNotes.length; i++){
        const numberOfNotes =  Math.trunc(amountToBeReturn / availableNotes[i])

        amountToBeReturn = amountToBeReturn % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
    };
    

}

function hideMassage(){
    massage.style.display = "none";
}

function showMassage(msg){
    massage.innerText = msg;
    massage.style.display = "block";
}