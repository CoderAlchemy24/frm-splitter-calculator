const billField = document.getElementById('bill');

const tipBtns = document.getElementsByClassName('tip-option');

const customTipField = document.querySelector('.custom-tip');

const personsNumField = document.getElementById('people');
const errorLabel = document.querySelector('.error-message');

const tipField = document.getElementById('tip-amount');

const totalField = document.getElementById('total');

const resetBtn = document.querySelector('.reset-button');

let bill = 0;
let tip = 0;
let numOfPersons = 0;


billField.addEventListener("input", ()=>{
    bill = parseFloat(billField.value);
    if (numOfPersons > 0)
    calculateTipAndTotal();
})

personsNumField.addEventListener("input", ()=>{
    numOfPersons = parseInt(personsNumField.value);
    
    if (numOfPersons < 1) {
        errorLabel.classList.remove('hidden')}
     else {
        errorLabel.classList.add('hidden');
        
    }

    if (numOfPersons > 0){
      calculateTipAndTotal();}
})



Array.from(tipBtns).forEach(btn => {
   
    btn.addEventListener("click", () => {
     
        Array.from(tipBtns).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
       
        customTipField.value = "";
      
        tip = parseFloat(btn.getAttribute('data-value')) / 100;
       
        console.log(tip);
        if (numOfPersons > 0) calculateTipAndTotal();
    });
});

customTipField.addEventListener("input", ()=>{
    tip = parseFloat(customTipField.value) / 100;
     Array.from(tipBtns).forEach(b => b.classList.remove('active'));
    if (numOfPersons > 0)
    calculateTipAndTotal();
})

function calculateTipAndTotal() {
    const tipAmount = bill * tip / numOfPersons;
    const total = bill / numOfPersons + tipAmount;

    tipField.textContent = `$${tipAmount.toFixed(2)}`;
    totalField.textContent = `$${total.toFixed(2)}`;
}

resetBtn.addEventListener("click", ()=>{
    billField.value = "";
    customTipField.value = "";
    personsNumField.value = "";
    tipField.textContent = "$0.00";
    totalField.textContent = "$0.00";
    bill = 0;
    tip = 0;
    numOfPersons = 0;
})