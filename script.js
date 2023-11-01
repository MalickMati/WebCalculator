function add(){
    let a = Number(document.getElementById('value1').value);
    let b = Number(document.getElementById('value2').value);
    let result = a + b;
    document.getElementById('result').innerHTML = result;
}
function sub(){
    let a = Number(document.getElementById('value1').value);
    let b = Number(document.getElementById('value2').value);
    let result = a - b;
    document.getElementById('result').innerHTML = result;
}
function mul(){
    let a = Number(document.getElementById('value1').value);
    let b = Number(document.getElementById('value2').value);
    let result = a * b;
    document.getElementById('result').innerHTML = result;
}
function div(){
    let a = Number(document.getElementById('value1').value);
    let b = Number(document.getElementById('value2').value);
    if(b===0){
        document.getElementById('result').innerHTML = "Cannot be devided by zero";
    }
    else{
        let result = a / b;
        document.getElementById('result').innerHTML = result;
    }
}