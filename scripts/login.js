document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault()

    const accNumberString = getInputValueByID('account-number')
    const accNumber = getInputNumberByID('account-number')
    const pin = getInputNumberByID('pin')

    if(typeof accNumber === 'number' && typeof pin === 'number'){
        if(accNumberString.length === 11 && pin === 1234){
            window.location.assign('home.html')
        }else{
            alert("Wrong Credential")
        }
    }else{
        alert('Invalid Input')
    }
})