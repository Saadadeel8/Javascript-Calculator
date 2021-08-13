
function update(value) {
	
      document.calculator.display.value += value;
}

function reset() {
      document.calculator.display.value = " ";
	  }	  
function result(value) {
	document.calculator.display.value = eval(document.calculator.display.value);
	  
	var answer = document.calculator.display.value;
	
	if
	(answer == 9/0) {
		
		document.calculator.display.value = "Syntax Error";
		
		
		return document.calculator.display.value;} 
	  }	 
