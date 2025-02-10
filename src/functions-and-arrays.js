// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    let maxNum = 0;

    if(num1 > num2){
        maxNum = num1
    } else if( num2 > num1 ){
        maxNum = num2
    } else if(num1 == num2){
        maxNum = num1
    }

    return maxNum;
}

/*Best way:
function maxOfTwoNumbers(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
*/




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longWord = "";

    words.forEach(e => {
        if(e.length > longWord.length){
            longWord = e
        }
    });

    if(words.length == 0){
        return null
    } else{
        return longWord;
    }
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    
    let num = 0;

    numbers.forEach(e => {
        num += e;
    })

    if(numbers.length == 0){
        return 0;
    }else{
        return num;
    }

    // return num
}

    


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let sum = 0;

    numbers2.forEach(e => {
        sum += e;
    });

    const total = sum / numbers2.length;
    console.log(total)
    if(numbers2.length == 0){
        return sum;
    }else{
        return total;
    }

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordToSearch) {

    if(words2.find((words2) => words2 === wordToSearch)){
        return true
    }else if(words2.length == 0){
        return null;
    } else{
        return false
    }
}

/**
 * Best solution:
 function doesWordExist(words, wordToSearch) {
    if (words.length === 0) return null;
    return words.includes(wordToSearch);
}
 */
