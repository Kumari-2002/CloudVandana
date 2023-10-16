var str=window.prompt("Enter the Sentence to reverse");
var reversed=str.split("").reverse().join("");
var rev=reversed.split(" ").reverse().join(" ");
console.log(rev);