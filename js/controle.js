let contador = 0;
let input = document.getElementById("input");
let btnAdd= document.getElementById("btnAdd");
let main = document.getElementById("Lista")


function addTarefa() {
    //PEGAR O VALOR DIGITADO
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NULO , NEM INDEFINIDO
   if((valorInput !== "") && 
   (valorInput !== null) && 
   (valorInput !== undefined)) 
   {
    
    ++contador;
    
    //COPIA O BLOCO DO HTML RESPONSÁVEL PELO MODELO PARA PADRONIZAR O ESTILO DOS BOTÕES

    //${} É USADO PARA ALTERAR ESSE BLOCO DO HTML E PERMITE QUE O VALOR ADICIONADO SEJA O VALOR DO "valorInput", DEIXANDO MAIS DINÂMICO
  let novoItem = `<div id ="${contador}" class = "item">
          <div onclick = "marcaTarefa(${contador})" class = "item-icone"> 
            <i  id ="icone_${contador}" class = "mdi mdi-circle-outline"></i>
          
        </div>
          
        <div onclick= "marcaTarefa(${contador})"class = "item-nome">
           ${valorInput}
          
        </div>
          
        <div class = "item-botao">
          <button onclick="Deletar(${contador})" class="Delete"><i class = "mdi mdi-delete"></i> 
        </i> 
            Deletar 
        </button>
          
        </div>
       </div>`;

        //ADICIONAR NOVO ITEM NO MAIN
     main.innerHTML += novoItem;

     //ZERAR OS CAMPOS
     input.value= "";
     input.focus();

}
}
function Deletar(id) {
     var tarefa = document.getElementById(id);
     tarefa.remove();
}

function marcaTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute('class');

  if(classe == "item") {
    item.classList.add('clicado');

    var icone = document.getElementById('icone_' + id)
    icone.classList.remove('mdi-circle-outline');
    icone.classList.add('mdi-check-circle');

    item.parentNode.appendChild(item);
  
  } else {
    item.classList.remove('clicado');

    var icone = document.getElementById('icone_' + id);
    icone.classList.remove('mdi-check-circle');
    icone.classList.add('mdi-circle-outline');
  }
}


input.addEventListener("keyup" , function(event){
    //SE DIGITOU O ENTER(TECLA 13)
     if(event.keyCode ===13){
    event.preventDefault(); //EXCLUI AS FUNCIONALIDADES DO ENTER 
    btnAdd.click(); 
     }
    
}) 

