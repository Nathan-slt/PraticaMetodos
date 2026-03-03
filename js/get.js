async function buscarUsuario(id) {
    const resposta = await fetch(`http://sua-api.com/usuarios/${id}`);
    const dadosUsuario = await resposta.json();
    I
    document.getElementById('nome').value = dadosUsuario.nome;
}