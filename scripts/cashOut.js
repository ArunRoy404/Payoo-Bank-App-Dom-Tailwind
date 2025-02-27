document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault()

    let balance = getNumber('balance')
    const accountNumber = getInputNumberByID('cash-out-account')
    const amount = getInputNumberByID('cash-out-amount')
    const pin = getInputNumberByID('cash-out-pin')

    if(balance<amount){
        alert('Invalid Amount')
    }else{
        if(pin === 1234){
            balance -= amount
            console.log(balance)
            setText('balance',balance)
            setTransaction('Cash Out',amount)
        }else{
            alert('Wrong Credential')
        }
    }
})