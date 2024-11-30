const withdraw = document.getElementById("withdraw");
var guess;
let money = 5000;
let text = document.getElementById("text");
let deposit = document.getElementById("deposit");
let balance = document.getElementById("balance");
let exit = document.getElementById("exit");
var txt;

function myFunction(sel) {
  
  switch (Number(sel)) {
    case 1:
      txt = prompt("Enter any ammount to withdraw: ");
      money -= Number(txt);
      text.textContent = money;

      break;
    case 2:
      txt = prompt("Enter any ammount to deposit: ");
      money += Number(txt);
      text.textContent = money;
      break;
    case 3:
      txt = alert(`Your Balance is : $${money}`);

  }
  while(sel == 4){
    alert("Goodbye! and thank you",)
    break;
    
  }
  debugger;
}
