let products = [
  { id: 1, name: "Xbox", description: "Xbox 360" },
  { id: 2, name: "Playstation", description: "Playstation 2" },
  { id: 3, name: "Nintendo", description: "Nintendo 64" },
  { id: 4, name: "Sega", description: "Master System" }
];

// Função para atualizar a tela
function renderizar(lista = products) {
    const container = document.getElementById('listaJogos');
    container.innerHTML = "";

    lista.forEach(item => {
        container.innerHTML += `
            <div class="console-card">
                <div>
                    <strong>${item.name}</strong><br>
                    <small>${item.description}</small>
                </div>
                <button class="btn-delete" onclick="removerJogo(${item.id})">Deletar</button>
            </div>
        `;
    });
}

// Simulação de DELETE
function removerJogo(id) {
    // 1. Simula a lógica de rota
    console.log(`DELETE -> /products/${id}`);
    document.getElementById('status-log').innerText = `Enviado DELETE para ID: ${id}`;

    // 2. Remove do array local
    products = products.filter(p => p.id !== id);

    // 3. Atualiza a interface
    renderizar();
}

// Simulação de PESQUISA (Filtro dinâmico)
function pesquisar() {
    const termo = document.getElementById('inputPesquisa').value.toLowerCase();
    
    const filtrados = products.filter(p => 
        p.name.toLowerCase().includes(termo) || 
        p.description.toLowerCase().includes(termo)
    );

    renderizar(filtrados);
}

// Inicializa a página
renderizar();
