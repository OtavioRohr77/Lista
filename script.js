// Função para adicionar um item à lista de compras
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        
        // Criar um novo item da lista
        const listItem = document.createElement("li");
        
        // Adicionar o texto do item
        listItem.textContent = taskText;
        
        // Criar o botão de remover
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.classList.add("remove-btn");
        
        // Adicionar a função de remoção ao botão
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        // Adicionar o botão ao item da lista
        listItem.appendChild(removeButton);
        
        // Adicionar o item à lista
        taskList.appendChild(listItem);
        
        // Limpar o campo de entrada
        taskInput.value = "";
    } else {
        alert("Digite um item para adicionar à lista.");
    }
}
