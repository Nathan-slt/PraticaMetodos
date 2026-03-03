async function PUTdados(event) {
    event.preventDefault(); 

    const editarEmail = document.getElementById('editarEmail').value;
    const editarSenha = document.getElementById('editarSenha').value;

    const dados = {
        email: editarEmail,
        senha: editarSenha
    };

    console.log("PUT =", dados);
    
            console.log("Edição efetuada!");
            document.getElementById('mensagem2').style.color = "green"

} 