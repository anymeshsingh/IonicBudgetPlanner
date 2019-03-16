const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expenseList = document.querySelector("#expense-list");
const totalExpensesOutput = document.querySelector("#total-expenses");
const alertControl = document.querySelector("ion-alert-controller");

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = 0;
}

confirmBtn.addEventListener('click', ()=>{
    var enteredReason = reasonInput.value
    var enteredAmount = amountInput.value

    if(enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0){
        alertControl.create({
            message: "Please enter valid reason and amount!",
            header: "Invalid inputs",
            buttons: ['Okay']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': ₹' + enteredAmount;

    expenseList.appendChild(newItem);

    totalExpenses += parseInt(amountInput.value)
    totalExpensesOutput.textContent = totalExpenses
    clear();
});

cancelBtn.addEventListener('click', clear);