/* eslint-disable no-unused-vars */
//Q1

//1. What is the Big O for this?

// 1) Determine the Big O for the following algorithm: 
// You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed.
// So you want to know if anyone out of the 15 people have the same breed as your dog. 
// You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
// Someone yells - "I do, be happy to bring him over"


// A) O(1) constant time : because it's called one.


// 2) Determine the Big O for the following algorithm:
// You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed.
// So you want to know if anyone out of the 15 people have the same breed as your dog.
// You start with the first person and ask him if he has a golden retriever.
// He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

// A) O(n) Linear time : it's called one loop(if he says no, and loop)


//2 Even or odd

function isEven(value){
    if(value % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

// A) O(1) constant time : it's only action one time.

//3 Are you here?

function areYouHere(arr1, arr2){
    for (let i = 0 ; i < arr1.length ; i++){
        const el1 = arr1[i];
        for(let j = 0 ; j < arr2.length ; j++){
            const el2 = arr2[j];
            if(el1 ===el2)
            return true;
        }
    }
    return false;
}

// A) O(n^2) polynomial time : an algorithm requires 2 levels of looping. O(n * n)

//4 Doubler

function doubleArrayValues(array){
    for (let i = 0 ; i < array.length ; i++){
        array[i] *= 2;
    }
    return array;
}

// A) O(n) Linear time : it's called one loop

//5 Native Search

function nativeSearch(array, item){
    for (let i = 0 ; i < array.length ; i++){
        if(array[i] === item){
            return i;
        }
    }
}

// A) O(n) Linear time : search through the array 

//6 Creating Pairs

function createPairs(arr){
    for(let i = 0 ; i < arr.length ; i++){
        for (let j = i+1 ; j < arr.length ; j++){
            console.log(arr[i] + ' , ' + arr[j]);
        }
    }
}

// A) O(n^2) polynomial time : an algorithm requires 2 levels of looping. O(n * n)

//7 Compute the Sequence

function compute(num){
    let result = [];
    for(let i = 0 ; i <= num ; i++){
        if(i ===1){
            result.push(0);
        }
        else if(i ===2){
            result.push(1);
        }
        else{
            result.push(result[i -2] + result[i -3])
        }
    }
    return result;
}

// A) O(n) Linear time : it's called one loop

//8 An Efficient Search

function efficientSearch(array, item){
    let minIndex = 0;
    let maxIndex = array.length -1;
    let currentIndex;
    let currentElement;

    while(minIndex <= maxIndex){
        currentIndex = Math.floor((minIndex + maxIndex)/2);
        currentElement = array[currentIndex];

        if(currentElement < item){
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item){
            maxIndex = currentIndex -1 ;
        }
        else{
            return currentIndex;
        }
    }
    return -1;
}

// A) O(logn) Logarithmic time : while logarithmic time complexity algorithms do take
//longer with larger inputs, running time increases slowly.

// 9. Random Element

function findRandomElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

// A) O(1) constant time : because it's called one.

// 10. What Am I ?

function isWhat(n){
    if(n < 2 || n % 1 !== 0){
        return false;
    }
    for(let i = 2 ; i < n ; ++i){
        if( n % 1 === 0)
        return false;
    }
    return true;
}

// A) O(n) Linear time : Function checks to see it's not the prime number.



//sort, then find the two highest
//loop through and store the current largest and second largest

/*onst largestProduct = function(arr){
    if(arr.length <= 1){
        throw new Error('Must provide at least two numbers')
    }
    let largest = arr[0];
    let secondLargest = arr[1];
    if(secondLargest > largest){
        [largest, secondLargest] = [secondLargest, largest];
    }
    let smallest = secondLargest;
    let secondSmallest = largest;
    for(let i = 2 ; i < arr.length ; i++){
        const value = arr[i];
        if(value > largest){
            secondLargest = largest;
            largest = value;
        }
        else if(value > secondLargest){
            secondLargest = value;
        }
        if(value < smallest){
            secondSmallest = smallest;
            smallest = value;
        }
        else if(value < secondSmallest){
            secondSmallest = value;
        }
    }
    const largestProduct = largest * secondLargest;
    const smallestProduct = smallest * secondSmallest;
    if(largestProduct > smallestProduct){
        return largestProduct;
    }
    else{
        return smallestProduct;
    }
}*/

const largestProduct = function(arr){
    if(arr.length <=1){
        throw new Error('Must provide at least two numbers');
    }
    let largest = -Infinity;
    for(let i = 0 ; i < arr.length ; i++){
        const valueA = arr[i];
        for(let j = i+1 ; j < arr.length; j++){
            const valueB = arr[j];
            const product = valueA * valueB ;
            if(product > largest){
                largest = product;
            }
        }
    }
    return largest;
}

console.log(largestProduct([3,5,2,6,8,1])) // 48
console.log(largestProduct([3, 5, -2, 6, 8, 1])) //48
console.log(largestProduct([0, 0, 0, 0]))  // 0;
console.log(largestProduct([3, -5, -10, 6, 8 , 1])) //50
console.log(largestProduct([3, 5, 2 , 6.5, 8 , 1])) // 52
console.log(largestProduct([3, 5, 2, 6, 8, 8])) //64

try{
    console.log(largestProduct([]));
}catch(e){
    console.log('error');
}


const hanoi = function (disk, start, temporary, destination){
    if(disk > 0){
        hanoi(disk -1, start, destination, temporary);
        console.log('Move disk ' + ' from ' + start + ' to ' + destination);
        hanoi(disk -1, temporary, start, destination)
    }
}

console.log(hanoi(3, 'starting' , 'temporary' , 'destination'));


//only ever 3 rods
//rods do not have a set number of disks
//proportion of disks is irrelevant only that they're all different sizes

//rods will be as tall as the number of disks
//disks and the absence thereof will be represented by integers
//console.logs will convert these numbers into strings of concatenated spaces or hyphens

//in this version the end rod is arbitrary, but cannot be the original rod

//BRAINSTORM:
// move top of row 1 over by one
// move smallest disk to an arbitrary rod if the current disk is not smaller

//arguments: move was a success, current top disk rodA, rodB, rodC. 
//current disk r


const rods = [
    [],
    [],
    []
]

function towerOfHanoi(numDisks){
    //initialize Rod A, B, and C
    for (let i=0; i<numDisks; i++){
        rods[0].push(i+1)
        rods[1].push(0)
        rods[2].push(0)
    }

    //try a move

    function printRods(){
        //print for each level
        for (let i=0; i<numDisks; i++) {
            let renderA = ''
            let renderB = ''
            let renderC = ''
            //render disks / blanks on rod
            for (let j=0; j<numDisks; j++) {
                renderA = (j < rods[0][i]) ? (renderA + '-') : (renderA + ' ')
                renderB = (j < rods[1][i]) ? (renderB + '-') : (renderB + ' ')
                renderC = (j < rods[2][i]) ? (renderC + '-') : (renderC + ' ')
            }
            console.log(renderA, renderB, renderC)
        }
    }
}

function moveTower(disk, source, destination, temp){
    if (disk === 0 ) {
        
    }
}

//arguments rodA, rodB, rodC, move sucessful, 

// Step 1 : Shift first disk from 'A' to 'B'. Step 2 : Shift second disk from 'A' to 'C'. Step 3 : Shift first disk from 'B' to 'C'.

// The pattern here is : Shift 'n-1' disks from 'A' to 'B'. Shift last disk from 'A' to 'C'. Shift 'n-1' disks from 'B' to 'C'.

//a > c
//a > b
//c > b
//a > c
//b > a
//b > c
//a > c

//
