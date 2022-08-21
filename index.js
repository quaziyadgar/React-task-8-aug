// We have a string, we can take any value for that and we need to calculate the number of words of that string.

let str = prompt("Enter a string for word count");
console.log(str);
let i=0;
let wordCount = 0;
let word = "";
while(i < str.length)
{
    if(str[i] === " " && word.length > 0)
    {
        word = "";
        wordCount++;
    }
    else{
        if(str[i] !== " ")
        word = word + str[i]; 
    }
    i++;
}
console.log("word count = ",wordCount+1);



// Create an array of random numbers (take 10 elements). Sort that array and then find:
// Mean
// Median
// Mode

const arr = [2,5,7,8,9,5,3,4,11,5];
arr.sort();

const sum = arr.reduce((total,num)=> total += num);
console.log("Mean = ",sum/10);

const median = (arr[4]+arr[5])/2;
console.log("Median = ", median);
const obj = {};
arr.forEach(num=>{
    if(!obj[num])
    {
        obj[num] = 1;
    }
    else
    {
        obj[num] += 1;
    }
});

let highestValue = -Infinity;
let numb =0;

for(let key in obj)
{
    let value = obj[key];
    if(highestValue < value)
    {
        highestValue = value;
        numb = key; 
    }
}
console.log("Mode = ",numb);

