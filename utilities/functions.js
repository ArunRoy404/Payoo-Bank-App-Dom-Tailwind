function getInputValueByID(id){
    return document.getElementById(id).value
}
function getInputNumberByID(id){
    return parseFloat(document.getElementById(id).value)
}
function getNumber(id){
    return parseFloat(document.getElementById(id).innerText)
}
function setText(id, text){
    document.getElementById(id).innerText = text
}