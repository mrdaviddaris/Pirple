<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2021 by mrdaviddaris (http://jsbin.com/xirizam/4/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
//A block scope is the area within a function area, or whenever
//one sees {curly brackets}. In ES6, const and let keywords allow 
//developers to declare variables in the block scope, which means
//those variables exist only within the corresponding block.
//Var would assign a variable that was accessible outside the block 
//which made it possible to crash code in the event a mistake was
//made by duplicating a variable. Let and Const make Var obsolete
// in that they cannot be accessed outside the block, making for
//cleaner variables.

function sayHi () {
  var shouldSayHi = true;
  
  if (shouldSayHi === true) {
    myName = "Chris";
    console.log("Hi" + " " + myName)
  }
}
sayHi();
console.log(myName);

function sayHey (){
  let didSayHey = true;
  
  if (didSayHey === true){
    const myNickname = "Biff";
    console.log("Hey" + " " + myNickname)
  }
}
sayHey();
console.log(didSayHey);
console.log(myNickname);

   


  






</script>
</body>
</html>