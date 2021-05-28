function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}
//UI logic
$(document).ready(function(){

  $("#add").submit(function(event){
    event.preventDefault();
    let firstNumber=$("#add1").val();
    let secondNumber=$("#add2").val();

    let result=add(parseFloat(firstNumber),parseFloat(secondNumber));
    alert(result);

    
  });
});
//$("#story").show();