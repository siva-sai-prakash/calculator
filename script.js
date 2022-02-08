let input  = document.querySelector('#inputField');
let buttons = document.querySelectorAll('.btn');
let clearBtn = document.querySelector('.button-red');
let equalBtn = document.querySelector('.button-green');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        input.value += value;
    })
})

equalBtn.addEventListener('click',function(){
    if (input.value === ''){
        input.value === 'Enter Calculation';
    }
    else{
        input.value =eval(input.value);
    }
})

clearBtn.addEventListener('click', function(){
    input.value = '';
})