// Algorithms in JavaScript from scratch...

// fizz buzz
// if the module of the number === 0 from 3 or 5 print fizzbuzz
// if the module of the number === 0 from 3 print fizz
// if the module of the number === 0 from 5 print buzz
// for the rest, just log them.

let num=30;
function fizzBuzz(num){
    for (let i=1; i<=num;i++) {
        if(i%3===0 && i%5===0){
            console.log('fizzBuzz')
        }else if(i %3===0){
            console.log('fizz')
        }else if(i %5===0){
            console.log('buzz')
        }else{
            console.log(i)
        }
    }
}
// fizzBuzz(num)

// big o notation: tells us how long it takes to the algorithm to complete based on the input size and how it can affect the performance based on the runtime. If the runtime is constant or the requirements don't change, the performance will be the same even if the input is larger (0 (1)). In case the requirements involve all the elements of input the runtime will increase proportionally to the size of input, which is called linear runtime (0(n)). Exponential runtime means that if we increase the input the runtime gets larger and the algorhitm becomes slower and less efficient (0(n^2)). Logarhitmic runtine normally involve binary searches, in which input is divided by half, considering the list of values (organized in a way) and the value that we need to find. In case the input increases, the number of operations will grow logarhitmically. 
// time complexity: logarithmic runtime (O(log n))

// harmless ranson note
// create a function with two parameters, one note, other magazine
// compare both and check if the second containes the words that are in the first, in case of so, to remove the counter of the words that we've been using to build the first note from the magazine.
// make it efficient in runtime, avoid exponential time complexity (avoid nesting)

let noteText= 'this is a secret note for you from a secret admirer'
let magazineText='puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'

function harmlessRansomNote(noteText, magazineText){
let noteTextArr= noteText.split(' ')
let magazineTextArr=magazineText.split(' ')
// hash table to keep track of every word and how many times it has been used
let magazineObj={};
magazineTextArr.forEach(word=>{
    if(!magazineObj[word]){ // if we don't have words
        magazineObj[word] = 0 //set the counter on zero
    }
    magazineObj[word]++ //if there are words, count how many times the words appear.
})  
let noteIsPossible=true;
noteTextArr.forEach(word=>{
    if(magazineObj[word]){
        magazineObj[word]--
        if(magazineObj[word] <0)noteIsPossible=false;   
    }else{
        noteIsPossible=false
    }
})
// console.log(noteIsPossible)
return noteIsPossible
}
harmlessRansomNote(noteText, magazineText)

// is palindrome
// take a string and return true if the string is palindrome
// palindrome is spelled the same backward and forward
// no regex
// ignore special characters, remove everything that is not a letter

let sentence= "holiwi"
function isPalindrome(sentence){
sentence=sentence.toLowerCase()
let sentenceArr= sentence.split('')
let validCharactersArr='abcdefghijklmnopqrstuvwxyz'.split('')
let lettersArray=[]
sentenceArr.forEach(letter=>{
    if(validCharactersArr.indexOf(letter)> -1){ //indexOf returns the position in the array of the valid letters, in case of invalid characters will return -1
        lettersArray.push(letter)
    }
    })
    if(lettersArray.join('')===lettersArray.reverse().join('')){
        console.log('true')
        return true
    }else{
        console.log('false')
        return false
    }
}
//isPalindrome(sentence)

// caesar cipher
// shift the letters of the string based on the value of the number that is passed by (even negative numbers)
// transform all to lowercase
// add the spaces to the new string as spaces
// check i the letters are actually in alphabet with index of, which finds the position of the letter in the alphabet.
// shift the letter by the passed number

function caesarCipher(str, digit){
digit=digit%26;
str=str.toLowerCase()
let validCharacters='abcdefghijklmnopqrstuvwxyz'.split('')
let newString=' '
for (let i = 0; i < str.length; i++) {
    let currentLetter=str[i]
    if(currentLetter===" "){
        newString+=currentLetter
        continue;
    }
    let currentIndex=validCharacters.indexOf(currentLetter)
    let newIndex=currentIndex+digit
    if(newIndex>25) {
        newIndex=newIndex-26;
    }
    if(newIndex<0){
        newIndex=26+newIndex
    }
    if(str[i]===str[i].toUpperCase()){
        newString+=validCharacters[newIndex].toUpperCase()
    }else{
        newString+=validCharacters[newIndex]
    }
}
console.log(newString)
return newString
}
// caesarCipher('Big Car', -16)
// caesarCipher('JavaScript', -900)
// tkfkcmbszd
// caesarCipher('Big Car', -16)
// lsq mkb

// reverse words in a string
// transform into an array
// return the new string
function reverseWords(string){
    string=string.split('')
    string=string.reverse('')
    string=string.join('')
    //console.log(string)
    return string
}
reverseWords('hola como estas')
// satse omoc aloh

// without using the reverse method...
// we transform the string into an array
// create an empty array
// iterate through the length of first array, remove the last element, push it into the second
// we use while because we will remove every last element through each cycle
// transform it back into a string
// return 
function noReverse(string2){
    string2=string2.split('')
    let output=[]
    while (string2.length){
        output.push(string2.pop())
    }
    output=output.join('')
    // console.log(output)
    return output
}
noReverse('hola como estas')
// satse omoc aloh

// reverse array in place, not creating other
function reverseArrayInPlace(arrayInPlace){
    arrayInPlace=arrayInPlace.reverse()
    //console.log(arrayInPlace)
    return arrayInPlace
}
reverseArrayInPlace(['hola','como','estas'])
// [ 'estas', 'como', 'hola' ]

// no using reverse method again
// state positions of origin and ending
// we run a loop while start is less than end
function noReverseAgain(arrayInPlace2){
    let start= 0
    let end= arrayInPlace2.length-1
    while(start <end){
        let temp=arrayInPlace2[start] // hola
        arrayInPlace2[start]=arrayInPlace2[end]
        arrayInPlace2[end]=temp
        start++
        end--
    }
    //console.log(arrayInPlace2)
    return arrayInPlace2
}
noReverseAgain(['hola', 'de', 'nuevo'])
// 'nuevo', 'de', 'hola' 

//calculate mean, median, mode.
// functional programming: separate the problem into different functions in order to allow the to be reused.
let arrayNum=[2,3,4,6,7,8,9,3,4,5,3,3,7,2,11]

// mean is the average of everything
// first we add the components
// second we divide it according to the number of elements.
function getMean(arrayNum){
   let result1= arrayNum.reduce((a,b)=>a+b,0)
   //console.log(result1)
   // 77
   let mean=Math.round(result1 / arrayNum.length) //15
   //console.log(`the mean is ${mean}`)
   return mean
}
getMean(arrayNum)

// find the number that is in the middle when the number of elements is odd, and in case is even, the average of middle two elements.
// organize the numbers in an ascending way, then check if the number of elements is odd or even 
function getMedian(arrayNum){
    let sort=arrayNum.sort(function(a,b){
        return a-b
    })
    // console.log(sort)
    // we initialize the median operation above because of scope
    let median1= Math.floor(arrayNum.length / 2)
    if(arrayNum.length %2===0){
        //console.log(`the median is ${median1}`)
        return median1;
    }else{
        let median2= (arrayNum[median1 -1] + arrayNum[median1])/2
        //console.log(`the median is ${median2}`)
        return median2
        // 4 because in this case the number is odd 
    }
}
getMedian(arrayNum)

function getMode(arrayNum){
// the number that appears more frequently is the mode, we calculate it iterating and if we find the value, we increment it, at the end we mention the one that is most frequent
const mode = a => 
  Object.values(
    a.reduce((count, e) => {
      if (!(e in count)) {
        count[e] = [0, e];
      }
      count[e][0]++;
      return count;
    }, {})
  ).reduce((a, v) => v[0] < a[0] ? a : v, [0, null])[1];
;
let result3=mode(arrayNum)
//console.log(`the mode is ${result3}`)
return result3
}
getMode(arrayNum)


function meanMedianMode(arrayNum){
    // call the other three functions.
    // return object which includes the three answers
    let result=[]
    result.push(getMean(arrayNum))
    result.push(getMedian(arrayNum))
    result.push(getMode(arrayNum))
    // console.log(result)
    // console.log(`when we talk about: ${arrayNum}: the mean is ${getMean(arrayNum)}, the median is ${getMedian(arrayNum)} and the mode is ${getMode(arrayNum)}`)
    return result
}
meanMedianMode(arrayNum)
// when we talk about: 2,2,3,3,3,3,4,4,5,6,7,7,8,9,11: the mean is 5, the median is 4 and the mode is 3

// twoSum
// return every pair of numbers from numArray
// then adds up to the sum
// result= array of arrays
let numArray=[1,6,4,5,3,3]
let sum=7;
function twoSum(numArray, sum){
    let sums=[]
    let resultHash={} // hashtable (can be an object, has the same function)
// check every element in the array
for (let i = 0; i < numArray.length; i++) {
// calculate sum - current element
    let sumMinusElement=sum-numArray[i]
// check if this number exists in hash table
// if so then we found a pair of numbers that sum to sum
if (resultHash[sumMinusElement.toString()] !== undefined) { 
    sums.push([numArray[i], sumMinusElement]);
}
// add the current number to the hash table
resultHash[numArray[i].toString()] = numArray[i];
}
//console.log(sums)
return sums;   
}
twoSum(numArray, sum)
// [ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ]

// binary search 
// search a given value (key) inside of a list (numArray2)
// return true if the key is inside of numArray2. Return false if not
// use recursion (the function calls itself)
// search through an array very quickly
function binarySearch(numArray2, key){
    // find middle index
    let middleIndex= Math.floor(numArray2.length / 2)
    let middleElem=numArray2[middleIndex] // finds the middle number in the array

    if(middleElem === key){
        // console.log('true')
        return true
    }
    else if(middleElem < key && numArray2.length > 1){
        let binarySearchRecursion1=binarySearch(numArray2.splice(middleIndex, numArray2.length), key)
        // console.log(binarySearchRecursion1)
        return binarySearchRecursion1
    }
    else if(middleElem > key && numArray2.length > 1){
        let binarySearchRecursion2= binarySearch(numArray2.splice(0, middleIndex),key)
       // console.log(binarySearchRecursion2)
        return binarySearchRecursion2
    }
    else {
        // console.log('false')
        return false
    };
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56)

// true

// fibonacci algorithm sequence
// each number is the sum of the previous 2 numbers.
// use recursion
function fibonacci(position){ // position will indicate which number of fibonacci position sequence we want to return to us for example, 9 returns 34 because that is the 9 number in the sequence.
    if(position < 3){
        // console.log('1')
        return 1
    }
    else {
        let resultFibonacciRecursion= fibonacci(position -1) + fibonacci(position-2)
        // console.log(resultFibonacciRecursion)
        return resultFibonacciRecursion
    }
}
fibonacci(2)
// 2
// 3
// 2
// 5
// 2
// 3
// 8 --> this would be... an exponential time complexity, very inefficient.

// fibonacci memoized (this time well done)
// base case + recursive case
function fibMemo(index,cache){ // index of number in fibonacci sequence // cache: an array used as memory
cache=cache||[]
if(cache[index]){
    // console.log(cache[index])
    return cache[index]
}else{
    if(index < 3){
        // console.log('1')
        return 1
    }else{
        let recursionFibonacci3= cache[index]=fibMemo(index-1, cache)+fibMemo(index -2, cache)
        // console.log(recursionFibonacci3)
    }
}
let resultFibonacciEfficient=cache[index]
// console.log(resultFibonacciEfficient)
return resultFibonacciEfficient
}
 fibMemo(50) //0 (n) runtime, best in efficiency
// 1
// 1
// 2
// 2
// 1
// 3
// 3
// 2
// 5
// 5
// 3
// 8
// 8
// 5
// 13
// 13
// 8
// 21
// 21
// 13
// 34
// 34
// 21
// 55
// 55
// 34
// 89
// 89
// 55
// 144
// 144
// 89
// 233
// 233
// 144
// 377
// 377
// 233
// 610
// 610
// 377
// 987
// 987
// 610
// 1597
// 1597
// 987
// 2584
// 2584
// 1597
// 4181
// 4181
// 2584
// 6765
// 6765 --> this is the result with efficient time complexity.

// sieve of erathostenes
// return all prime numbers up to a given number
function sieveOfErathostenes(numbersEra){
    let primes = [];
    for (let i = 0; i <= numbersEra; i++) {
      primes[i] = true;
    }
    
    primes[0] = false;
    primes[1] = false;
    
    for (let i = 2; i <= Math.sqrt(numbersEra); i++) {
      for (j = 2; i * j <= numbersEra; j++) {
        primes[i * j] = false;
      }
    }
    
    let result = [];
    for (let i = 0; i < primes.length; i++) {
      if (primes[i]) result.push(i);
    }
    // console.log(result)
    return result;
}
sieveOfErathostenes(20)
// [2,  3,  5,  7, 11, 13, 17, 19]

// bubblesort algorithm
// sort from least to greatest

function bubbleSort(arraySort) {
    for (let i = arraySort.length; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arraySort[j] > arraySort[j + 1]) {
          let temp = arraySort[j];
          arraySort[j] = arraySort[j + 1];
          arraySort[j + 1] = temp;
        }
      }
    }
   // console.log(arraySort)
    return arraySort;
}
bubbleSort([5,3,8,2,1,4])
// [ 1, 2, 3, 4, 5, 8 ]

// maxStockProfit
// returns the max profit of the day in an array of prices
function maxStockProfit(pricesArr){
    let maxProfit = -1;
    let buyPrice = 0;
    let sellPrice = 0;
    
    let changeBuyPrice = true;
    
    for (let i = 0; i < pricesArr.length; i++) {
      if (changeBuyPrice) buyPrice = pricesArr[i];
      sellPrice = pricesArr[i + 1];
      
      if (sellPrice < buyPrice) {
        changeBuyPrice = true;
      }
      else {
        var tempProfit = sellPrice - buyPrice;
        if (tempProfit > maxProfit) maxProfit = tempProfit;
        changeBuyPrice = false;
      }
    }
    console.log(maxProfit)
    return maxProfit;
}
maxStockProfit([32,46,26,38,40,48,42])
// 22