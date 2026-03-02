function validarCadastro() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = parseInt(document.getElementById("idade").value);
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value;
    const mensagem1 = document.getElementById("mensagem1");

    // Regex simples para validar email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        nome !== "" &&
        emailValido.test(email) &&
        idade >= 16 &&
        telefone.length >= 10 &&
        senha.length >= 8
    ) {
        mensagem1.innerText = "Cadastro Concluído ✅";
        mensagem1.style.color = "lightgreen";
    } else {
        mensagem1.innerText = "Cadastro inválido. Verifique os campos.";
        mensagem1.style.color = "red";
    }
}

function testeGET(){

}

function testePOST(){

}

function testePUT(){

}

function testeDELETE(){
    
}