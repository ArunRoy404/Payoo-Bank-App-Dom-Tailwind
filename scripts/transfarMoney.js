document.getElementById('transfer-btn').addEventListener('click',function(event){
    event.preventDefault()

    let balance = getNumber('balance')
    const accountNumber = getInputNumberByID('transfer-account')
    const amount = getInputNumberByID('transfer-amount')
    const pin = getInputNumberByID('transfer-pin')

    if(pin === 1234){
        if(amount<=balance){
            balance -= amount
            setText('balance',balance)
            setTransaction('Transfer Money', amount)
        }else{
            alert("Invalid Amount")
        }
    }else{
        alert("Wrong Credential")
    }
})