
function POSTusuario(body) {
    console.log("POST =", body)

    document.getElementById('mensagem1').innerText = "Cadastro efetuado com sucesso!";
}


function cadastrarUsuario(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;

    console.log(nome)
    console.log(email)
    console.log(telefone)
    console.log(senha)

    body = {
        "nome": nome,
        "email": email,
        "telefone": telefone,
        "senha": senha 
    }

    POSTusuario(body)
}
