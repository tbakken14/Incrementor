//get html elements
let operands = document.getElementsByClassName("operands"); //[element1, element2 ... elementn]
let counter = document.getElementById("counter");

//Add event listener to html buttons
for (let i = 0; i < operands.length; i++) {
    let curr = operands[i];
    curr.addEventListener("click", increment);
}

function increment() {
    const button_val = this.innerHTML;
    const counter_val = counter.innerHTML;
    const sum = parseInt(counter_val) + parseInt(button_val);
    counter.innerHTML = sum.toString();
}

