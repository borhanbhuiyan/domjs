// onclick function
function handleOnClick(){
  const handlerStatus = document.getElementById('handler-status');
  handlerStatus.innerText = 'text changed by onclick'
}
// addEventListener 
document.getElementById("event-listener").addEventListener('click', function(){
  
 const handlerStatus = document.getElementById("handler-status");
 
 handlerStatus.innerText = 'text changed by addEventListener'  ;

})


document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputField.value = '';
  
})

// practice
document.getElementById('button-click').addEventListener('click', function(){

const inputTextField = document.getElementById('input-text-field');
const inputTextValue = inputTextField.value;

const p = document.getElementById('paragraph-text');
p.innerText = inputTextValue;
inputTextField.value = "";
})