//We start by getting the values from the page
//To acheive this we need to a start or controller function

function getValues(){
    
    //To get the values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    
    //We need to validate our input and parse them into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        
        //Here we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        
        //Here we call displayNumbers
        displayNumbers(numbers);

    } else {
        alert("You must enter integers");
    }   
}

//Here we need to generate numbers from startvalue to the endvalue
//logic function(s)

function generateNumbers(sValue, eValue) {
    
    let numbers = [];
    
    //We want to get all the numbers from start to end
    
    for(let index = sValue; index <= eValue; index ++) {
        
        //This will execute in a loop until index = eValue
        numbers.push(index);
    }

    return numbers;

}

//Here we want to display the numbers and mark the even numbers in bold
//Display or view function(s)
function displayNumbers(numbers){
    
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let className = "even";    
        
        let number = numbers[index];

        if(number % 2 == 0){
                className = "even";
        }
        else{
                className = "odd";
            }
        
        templateRows += `<tr><td class="${className}" >${number}</td></tr>`
    
    } 
    
    document.getElementById("results").innerHTML = templateRows;

}