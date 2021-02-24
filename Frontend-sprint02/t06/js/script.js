let n = 1;
let n1 = 123n;
let str1 = "Hello";
let nameFieldCheked = true;
let suka = null;
let age = undefined;
let user = new Object();
let id = Symbol("id");
var func = function myFunc(){};

var result = `n is ${typeof n}\ntime is ${typeof n1} 
\nstr is ${typeof str1}\nisFalse is ${typeof true}
\nage is ${typeof suka}\ndata is ${typeof age}
\npersone is ${typeof user}\nid is ${typeof id}
\nfunc is ${typeof func}\n`;

alert(result);



