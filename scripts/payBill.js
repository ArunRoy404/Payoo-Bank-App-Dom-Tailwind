document.getElementById('pay-btn').addEventListener('click',function(event){
    event.preventDefault()

    let balance = getNumber('balance')
    const payTo = getInputValueByID('pay-to')
    const account = getInputNumberByID('pay-account')
    const amount = getInputNumberByID('pay-amount')
    const pin = getInputNumberByID('pay-pin')

    if(pin === 1234){
        if(amount<=balance){
            balance -= amount
            setText('balance',balance)
            setTransaction(payTo,amount)
        }else{
            alert("Invalid Amount")
        }
    }else{
        alert("Wrong Credential")
    }
})