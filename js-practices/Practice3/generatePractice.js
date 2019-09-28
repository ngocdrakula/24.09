'use strict'

function generate(testLengthArray){
  var arr=[];
  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm
  testLengthArray = sort(testLengthArray);
  for(let i = 0; i < testLengthArray.length; i++){
    let input = new Array(testLengthArray[i]);
    for(let j = 0; j < testLengthArray[i]; j++){
      input[j] = Math.floor(Math.random()*20000-10000);
    }
    input = sort(input);

    let target;
    if(i == 0) target  = input[0];
    else if(i == testLengthArray.length) target = input[testLengthArray[i]-1];
    else do {
      target = Math.floor(Math.random()*20000-10000);
    }
    while (target == input[0]||target == input[testLengthArray[i]-1])
    let output = search(input,target);
    arr[i] = {
      input: input,
      target: target,
      output: output
    }
  }
  return(arr);
}
function sort(input) {
  // return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
  for(let i=0; i<input.length; i++){
    let maxnumber = input[0];
    for(let j=0;j<input.length-i-1;j++){
      if(input[j]>input[j+1]){
        maxnumber=input[j];
        input[j]=input[j+1];
        input[j+1]=maxnumber;
      }
    }
  }
  return(input);
}
function search(input, target) {
  let position = -1;
  ///return input.indexOf(target);  // Remove this line and change to your own algorithm
  for(let i = 0; i < input.length; i++){
    if(input[i] == target){
      position = i;
      break;
    }
  }
   return(position);
}
module.exports = generate
