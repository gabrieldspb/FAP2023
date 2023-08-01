function calculadora (num1, num2, op){
  if(op == 1){
    return (num1 + num2);
  }
  else if (op == 2){
   return (num1 - num2);
  }
  else if( op == 3){
    return (num1 * num2);
  }
 else if( op == 4){
    return (num1/num2);
  }
  else{
    return 0;
  }
}

console.log(calculadora(2,10,1));
