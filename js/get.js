async function buscarUsuario(id) {
    const resposta = await fetch(`http://sua-api.com/usuarios/${id}`);
    const dadosUsuario = await resposta.json();
    
    // Agora você preenche os campos do HTML com o que veio da API
    document.getElementById('nome').value = dadosUsuario.nome;
}