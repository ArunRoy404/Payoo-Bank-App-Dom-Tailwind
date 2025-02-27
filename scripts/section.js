toggle('cash-out')

document.getElementById("card-container").addEventListener("click", function(event) {
    let currentDiv = event.target.closest('button')
    // while(currentDiv.parentElement.id !== 'card-container'){
    //     currentDiv = currentDiv.parentElement;
    // }
    if(currentDiv.id === 'select-add-money') toggle('add-money')
    if(currentDiv.id === 'select-cash-out') toggle('cash-out')
    if(currentDiv.id === 'select-transfer-money') toggle('transfer-money')
    if(currentDiv.id === 'select-get-bonus') toggle('get-bonus')
    if(currentDiv.id === 'select-pay-bill') toggle('pay-bill')
    if(currentDiv.id === 'select-transaction') toggle('transaction')
});