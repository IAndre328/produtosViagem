'use strict';

const subButton = document.getElementById('subButton'); //variavel constante, botao de submit
const cleanButton = document.getElementById('cleanButton'); //variavel constante, botao para limpar
const tableBody = document.querySelector('tbody'); //variavel constante, corpo da tabela
let dataPc;

const dataAtual = () => {
    setInterval(() => {
        const data = new Date();
        const ano = data.getFullYear();
        const mes = data.getMonth() + 1; // Os meses começam em 0, então adicionamos 1.
        const dia = data.getDate();
        dataPc = `${ano}-${mes}-${dia}`
    }, 5000);
}

// Chame a função para iniciar a atualização periódica
dataAtual();


function verificarDados(event){
    event.preventDefault();
    let form = document.querySelector("#contForm");

    let name = form.contName.value;
    let weight = Number(form.contWeight.value);
    let fragile = form.contFragile.checked;
    let expDate = form.contExpDate.value;

    console.log(expDate,dataPc)

    let camposErros = false;

    [name,weight,expDate].forEach(prod =>{
        if (prod.value === "") {
            camposErros = true;
        }
    });
    if (expDate < dataPc || weight <= 0){
        camposErros = true;
    }

    if (camposErros) {
        alert("Preencha todos os campos corretamente.");
    } else {
        adicionarProduto(name,weight,fragile,expDate);
    }
    console.log(camposErros)
}
function adicionarProduto(nome,peso,fragil,expiro){

    tableBody.insertAdjacentHTML("afterbegin", 
    `<tr contenteditable> 
        <td>${nome}</td> 
        <td>${peso}</td> 
        <td>${fragil}</td>
        <td>${dataPc}</td> 
        <td>${expiro}</td> 
        <td><button class="excluir" onclick=removerProduto(this)></button></td> 
    </tr>`
    ); //insere um codigo html abaixo de outro

}

function removerProduto(elemento){
    console.log(elemento)
    elemento.parentElement.parentElement.remove();
}










// add event listeners
subButton.addEventListener("click",verificarDados)