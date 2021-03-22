
let inputLabel = document.getElementById(`inputLabel`);

function btnClick(obj){
    let clck = obj.innerHTML;

    if(clck == "="){
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
    }
    else if(clck == 'AC'){
        inputLabel.innerHTML = "0";
    }
    else{
        if(inputLabel.innerHTML == '0'){
            inputLabel.innerHTML = clck
        }else{
            inputLabel.innerHTML = inputLabel.innerHTML + clck
        }
    }
}