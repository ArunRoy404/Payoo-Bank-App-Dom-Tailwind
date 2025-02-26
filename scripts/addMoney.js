document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault()
    const bank = getInputValueByID('bank')
    const accountNumber = getInputNumberByID('bank-account')
    const amount = getInputNumberByID('add-money-amount')
    const pin = getInputNumberByID('add-money-pin')
    let balance = getNumber('balance')

    console.log(bank, typeof accountNumber,typeof amount,typeof pin,typeof balance)
    if(pin === 1234){
        if(amount<=0){
            alert('Invalid Amount')
        }else{
            balance += amount
            setText('balance',balance)
            setTransaction(bank,amount)
        }
    }else{
        alert("Wrong Credential")
    }
})