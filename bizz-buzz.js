var test = "";

for(var k = 0; k < 100; k++){
  test = "";
  if (k % 3 === 0){
    test += "fizz";
  }
  if (k % 5 === 0){
    test += "buzz";
  }
  console.log(k + ": " + test);
}