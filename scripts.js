function calculate() {
    const percentageNumber = document.querySelector('.isActive').getAttribute('data-tip');
    const porc = parseInt(percentageNumber) / 100;
    const billTxt = parseFloat(document.getElementById('billInput').value);
    const numberPerson = parseInt(document.getElementById("numberPeopleInput").value);
    const tipAmountTotal = billTxt * porc;
    const tipPerPerson = tipAmountTotal / numberPerson;
    const total = (tipAmountTotal + billTxt) / numberPerson;
    const totalWithTip = billTxt + tipAmountTotal;
    document.getElementById('lblTipTotal').textContent = tipAmountTotal;
    document.getElementById('lblAmountPerPerson').textContent = tipPerPerson;
    document.getElementById('lblBillTotal').textContent = totalWithTip;
    document.getElementById('lblBillTotalPerPerson').textContent = total;
}

function handleClick(e, isCustom = false){
    toggleCustomTip(false);
    // First remove isActive from elements
    const elements = document.querySelectorAll('.isActive');
    for (const elem of elements){
        elem.classList.remove('isActive');
    }
    // Add it to this one
    // If is custom === true then ...
    if (isCustom) {
        // Add isActive to the input
        toggleCustomTip(true);
        return; // Return
    } 
    e.target.classList.add('isActive')
    const x = document.getElementById("billInput");
    const y = document.getElementById("numberPeopleInput");
    //Recordatorio
    //Para validar, si deshabilito los botones no podre volver a ejecutar esta funcion incluso para que vuelva a funcionar.
    calculate();
};

function handleValueChange(e){
    e.target.setAttribute('data-tip', e.target.value);
}

function toggleCustomTip(isShown = true){
    const inputElement = document.getElementById("customTipInput");
    const btnCustomElement = document.getElementById("btnCustom");
     if(isShown){
        inputElement.style.display = "inline-block";
        inputElement.classList.add('isActive');
        btnCustomElement.style.display = "none";
     } else {
        inputElement.style.display = "none";
        btnCustomElement.style.display = "inline-block";
     }
    
}
function customTip() {
    
}
// function changeToActive() {
//     // console.log(e);
//     // e.preventDefault();
//     // document.querySelectorAll('button').onclick = function() {
//     //     this.classList.add('isActive');
//     // }
//     const botones = document.querySelectorAll("button");
//     for (let i = 0; i < botones.length; i++) {
//         botones[i].classList.add("isActive");
//     }
//     botones.getAttribute("data-tip");
//     alert(botones);
// }

// document.querySelectorAll('button').onclick = function() {
//     this.classList.add('isActive');
// }