let balance = 5000;
let userchoice = 0;

let currentbalance = document.getElementById("balance").innerHTML = `Current Balance: ₱${balance.toFixed(2)}`;


function withdraw() {
    let withdrawAmount = parseFloat(prompt('Enter the amount you want to withdraw: '));
    if (withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            alert(`You successfully withdrawn ₱${withdrawAmount.toFixed(2)}`);
            document.getElementById("balance").innerHTML = `Current Balance: ₱${balance.toFixed(2)}`;


        }
        else {
            alert('Error : You have insuficient balance for this withdrawal.');
        }
    }

    else {
        alert('Error : Please enter a valid withdrawal amount. ');
    }

}

function deposit() {
    let depositAmount = parseFloat(prompt('Enter the amount you want to deposit : '));

    if (isNaN(depositAmount)) {
        alert('Error : Please enter a valid withdrawal amount. ');
    }

    else {
        balance += depositAmount;
        alert(`You successfully deposited ₱${depositAmount.toFixed(2)}`);
        document.getElementById("balance").innerHTML = `Current Balance: ₱${balance.toFixed(2)}`;
    }
}


function checkBalance() {
    alert(`Your Current Balance is : ₱${balance.toFixed(2)}`);
}

function exit() {
    alert(`Thank you using the ATM Bank Simulator !`);
    userchoice = 4;
    location.reload();
}

