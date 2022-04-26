let cashRegisterBillAmount = document.querySelector('.cash-register__bill-amount')
let cashRegisterCashGiven = document.querySelector('.cash-register__cash-given')
let cashRegisterButton = document.querySelector('.cash-register__button')
let denominations = [2000, 1000, 500, 100, 50, 10, 5, 1]

cashRegisterButton.addEventListener('click', function () {

    let difference = Number(cashRegisterCashGiven.value) - Number(cashRegisterBillAmount.value)
    if (difference >= 0) {
        let outputArray = denominations.map(x => {

            let quotient = Math.floor(difference / x)
            difference %= x
            return quotient
        })
        let cashRegisterOutput = document.querySelectorAll('.cash-register__output')
        cashRegisterOutput.forEach((element, index) => {
            element.innerText = `${outputArray[index]}`;
        });
    }

})

