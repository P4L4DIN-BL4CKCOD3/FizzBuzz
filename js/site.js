//We start by getting the values from the page
//To acheive this we need to start controller function.
//CONTROLLER FUNCTION.

function getValues(){
    //To get the values from the page.
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    //We need to validate the input and parse them into integers.
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    //Check that the numbers are integers using an 'if' statement.
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {        
        //We call fizzBuzz.
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        //we call diplayData and diplay the output to the screen.
        displayData(fbArray);
    } else {
        alert("You must enter an integer")
    }
}
//Let's do the fizzBuzz - the long way.
function fizzBuzz(fizzValue, buzzVale){
    //Initiate the returnArray.
    let returnArray = [];
    //The 'loop' statement for 1 to 100.
    for (let i = 1; i <= 100; i++) {        
        //We need to check the current values in 3 steps.
        //Step 1 - Check to see if the numbers are divisible by both (3 and 5).
        if (i % fizzValue == 0 && i % buzzVale == 0) {
            //If so push 'FizzBuzz' into array and not the number.
            returnArray.push('FizzBuzz');        
        //Step 2 - Check to see if divisible by fizz value of (3).  
        } else if (i % fizzValue == 0) {
            //If so push 'Fizz' into array and not the number.
            returnArray.push('Fizz');
        //Step 3 - Check to see if divisible by buzz value (5).    
        } else if (i % buzzVale == 0) {
            //If so push 'Buzz' into array and not the number.
            returnArray.push('Buzz');
        } else {
            //If none match then push the number into the array.
            returnArray.push(i);
        }       
    }
    return returnArray;
}
//The switch-case statment using Boolean Values.
function fizzBuzzB(fizzValue, buzzValue){
    let returnArray = [];
    let Fizz = false
    let Buzz = false
    for (let i = 1; i <= 100; i++) {
        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0;

        switch(true){
            case Fizz && Buzz:{
                returnArray.push('FizzBuzz');
                break;
            }
            case Fizz:{
                returnArray.push('Fizz');
                break;
            }
            case Buzz:{
                returnArray.push('Buzz');
                break;                
            }
            default:{
                returnArray.push(i);
                break;
            }
        }
        
    }
    return returnArray;
}
//Ternary operators: ?=if or elseif ||=or and :=this and that.
function fizzBuzzC(fizzValue, buzzValue){
    let returnArray = [];
    for (let i = 1; i <= 100; i++) {        
        let value = ((i%fizzValue==0 ? 'Fizz':'') + (i%buzzValue== 0 ? 'Buzz':'')||i);
        returnArray.push(value);
    }
    return returnArray;
}
//Loop over the array and create a rowtable for each item.
function displayData(fbArray){
    //Get the table body element from the app.html page.
    let tableBody = document.getElementById("results");
    //Get the template row.
    let templateRow = document.getElementById("fbTemplate");
    //Clear the table from previous results - start fresh.
    tableBody.innerHTML = "";
    //Import the HTML 'template' element from the page app.html.
    for (let index = 0; index < fbArray.length; index += 5) {        
        let tableRow = document.importNode(templateRow.content, true);
        //We want to know how many rows are in the template buy using a 'query selector'.
        let rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];
        
        rowCols[1].classList.add(fbArray[index+1]);
        rowCols[1].textContent = fbArray[index+1];
        
        rowCols[2].classList.add(fbArray[index+2]);
        rowCols[2].textContent = fbArray[index+2];
        
        rowCols[3].classList.add(fbArray[index+3]);
        rowCols[3].textContent = fbArray[index+3];
        
        rowCols[4].classList.add(fbArray[index+4]);
        rowCols[4].textContent = fbArray[index+4];        
        
        tableBody.appendChild(tableRow);        
    }
}