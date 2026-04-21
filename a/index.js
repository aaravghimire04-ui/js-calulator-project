//calculator progaram

const dispaly = document.getElementById('dispaly');

function appendToDispaly(input){
    dispaly.value += input;
}

function clearDisplay(){
    dispaly.value = " ";
}

function calculate(){
   try{
     dispaly.value=eval(dispaly.value);
    }
catch(error){
    dispaly.value="Error";
}
}