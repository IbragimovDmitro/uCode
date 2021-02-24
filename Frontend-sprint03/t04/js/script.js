"use strict"

function concat(str1, str2) {
  if (str2)
    return str1.concat(" ", str2);

  function subFunc() {
    let promptStr = prompt("Enter your string.", "");

    subFunc.count++;
    return promptStr ? `${str1} ${promptStr}` : str1;
  }

  subFunc.count = 0;
  return subFunc;
}

let phrase1 = concat("Hulk", "smash!");
let output = phrase1;
console.log(output);
let phrase2 = concat("Leave");
output = phrase2();
console.log(output);
console.log(phrase2.count);
output = phrase2();
console.log(output);output = phrase2();
console.log(output);
console.log(phrase2.count);
let phrase3 = concat("Go");
output = phrase3();
console.log(output); 
console.log(phrase3.count);
console.log(phrase2.count); 

// // Result in Console panel:
// Hulk smash!
// Leave Hulk alone!
// 1
// Leave me alone, please!
// Leave HULK ALONE!
// 3
// Go away!
// 1
// 3s