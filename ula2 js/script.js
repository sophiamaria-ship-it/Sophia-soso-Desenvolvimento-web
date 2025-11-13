 function adicionarTarefa() {
    //recebe o valor de input do usuario
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value

    //cria novo item (li) e insere na (lista ul)
    let listaTarefa = document.getElementById("listaTarefa")
    let novaTarefa = document.createElement("li")

    novaTarefa.textContent = tarefa
    listaTarefa.appendChild(novaTarefa)
    //elemento 1            //elemento 2

    //mesagem de novo item add
    let mensagem = "Tarefa adicionada com sucesso"
    document.getElementById("mensagem").textContent = mensagem

    //limpa o input do  usuario 
    inputTarefa.value = ""
}