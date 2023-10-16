const input = window.prompt("Enter numbers separated by commas:");

const numbers = input.split(",");

const numberArray = numbers.map(Number);
numberArray.sort(
    (a,b)=>{
        if(a<b)
        return 1
        else return -1
    }
)
console.log(numberArray);