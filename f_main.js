function firstLetterName(name) {
    alert("The name " + name + " starts with the letter " + name[0] + ".");
}

function divisibleByTwo(num) {
    return num % 2 === 0;
}

function largestNum(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

firstLetterName("David");
console.log("The number 8 is divisible by 2: " + divisibleByTwo(8));
console.log("The number 5 is divisible by 2: " + divisibleByTwo(5));
console.log(largestNum([3, 5, 6, 7, 101, 6]));