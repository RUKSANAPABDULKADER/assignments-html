var calculator = document.getElementById('calculator');
function btnclick(value){
    calculator.value+=value;   
}
function ClearScreen(){
    calculator.value="";
}
function findResult(){
    var result=eval(calculator.value);
    calculator.value=result;
}