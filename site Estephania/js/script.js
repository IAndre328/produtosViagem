const subButton = document.getElementById('subButton'); //variavel constante, botao de submit
const cleanButton = document.getElementById('cleanButton'); //variavel constante, botao para limpar


function verificarDados(event){
    event.preventDefault();
    let form = document.querySelector("#contForm");
    console.log(form)

}











// add event listeners
subButton.addEventListener("click",verificarDados)