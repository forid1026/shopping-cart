const plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener("click", function(){
  
//input  
const inputValue = document.getElementById("inputValue").value;
const inputValueNumber = parseFloat(inputValue);
const totalInput = inputValueNumber+1;
document.getElementById("inputValue").value = totalInput;

// total price
const currentValue = document.getElementById("currentValue").innerText;
const currentValueNumber = parseFloat(currentValue);
const totalPriceValue = currentValueNumber + 1219;
document.getElementById("currentValue").innerText = totalPriceValue;


// subtotal
const subTotal = document.getElementById("subTotal").innerText;
const subTotalNumber = parseFloat(subTotal);
const subTotalAmount =  totalPriceValue;
document.getElementById("subTotal").innerText = subTotalAmount;

// tax
const tax = document.getElementById("tax").innerText;
const taxAmount = parseFloat(tax);
const totalTax = taxAmount + 50;
document.getElementById("tax").innerText = totalTax;

const total = document.getElementById("total").innerText;
const totalNumber = parseFloat(total);
const totalAmount = subTotalAmount + totalTax;
document.getElementById("total").innerText = totalAmount;


})



// product 2

const secondPlusBtn = document.getElementById("secondPlusBtn");
secondPlusBtn.addEventListener('click', function(){
    console.log("product 2")
    const product2 = document.getElementById("product2").value;

    //input
    const product2Number = parseFloat(product2);
    const product2Input = product2Number + 1;
    document.getElementById("product2").value = product2Input; 

    //price
    const product2Value = document.getElementById("product2Value").innerText;
    const product2ValueNumber = parseFloat(product2Value);
     const product2PriceValue = product2ValueNumber + 59;
    console.log(product2PriceValue);
    document.getElementById("product2Value").innerText = product2PriceValue;


})