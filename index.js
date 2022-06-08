// utility
function printValue(value){
 
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
function addBasic(){
    printValue(30+ 50)
}
//calling func
addBasic()

//TODO: create a function that takes in two values and adds them
function addWithParam(num1, num2){
    printValue(num1 + num2)
}
//calling function
addWithParam(81, 55)

//TODO: create a function that takes in two values, adds them and returns the value of the addition

function addAndReturn(num1, num2){
    const add = num1 + num2
    return add
}


//const addition = addAndReturn(99,91)
//printValue addition


// 1.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
const age = function(){
    printValue(20)
}
age()

//TODO: create a function that takes in two values and adds them
const addTwoNumbers = function(a, b){
    printValue(a + b)
}
addTwoNumbers(60, 70)


//TODO: create a function that takes in two values, adds them and returns the value of the addition
const distance = function(dist1, dist2){
    return dist1 + dist2
}

printValue('Distances: ${distance(900, 120)}')
// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values

const addNumbers =()=>{
    printValue(20 + 70)
}


//TODO: create a function that takes in two values and adds them
const sum = (a, b) =>{
    printValue(a + b)
}
sum(20+50)



//TODO: create a function that takes in two values, adds them and returns the value of the addition

//const adVal = (i, j)
