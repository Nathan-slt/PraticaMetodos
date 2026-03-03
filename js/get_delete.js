let games = [
  { id: 1, name: "FIFA 16", description: "Xbox 360" },
  { id: 2, name: "God of War", description: "Playstation 2" },
  { id: 3, name: "Super Mario Odyssey", description: "Nintendo Switch" },
  { id: 4, name: "Banjo Kazooie", description: "Nintendo 64" }
];

// Função para atualizar a tela
function renderizar(lista = games) {
    const container = document.getElementById('listaJogos');
    container.innerHTML = "";

    lista.forEach(item => {
        container.innerHTML += `
            <div class="console-card">
                <div class="jogo" id="jogo">
                    <strong id="titulo">${item.name}</strong><br>
                    <small>${item.description}</small>
                </div>
                <button class="btn-delete" onclick="DELETEjogo(${item.id})">Deletar</button>
            </div>
        `;
    });
}

// Simulação de DELETE
function DELETEjogo(id) {
    const jogo = games.find(g => g.id === id);
    console.log("DELETE = ID", id);
    if (jogo) {
        document.getElementById('status-log').innerText = `Excluído o jogo: ${jogo.name}`;
    }
    games = games.filter(g => g.id !== id);
    
    renderizar();
}

// Simulação de PESQUISA GET (Filtro)
function GETpesquisar() {
    const termo = document.getElementById('inputPesquisa').value.toLowerCase();
    
    const filtrados = games.filter(p => 
        p.name.toLowerCase().includes(termo) || 
        p.description.toLowerCase().includes(termo)
    );

    renderizar(filtrados);
    console.log("GET =", filtrados);
}

// Inicializa a página
renderizar();
