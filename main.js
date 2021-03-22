
let inputVal = document.getElementById(`inputVal`);

function btnClick(obj){
    let clickVal = obj.innerHTML;
    if(clickVal == "="){
        inputVal.innerHTML = eval(inputVal.innerHTML)
    }
    else if(clickVal == "AC"){
        inputVal.innerHTML = "0"
    }
    else{
        if(inputVal.innerHTML=="0"){
            inputVal.innerHTML = clickVal;
        }
        else{
            inputVal.innerHTML += clickVal; 
        }
    }
}