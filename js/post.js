async function carregarDados() {
    try {
        // O fetch faz a requisição para o servidor do WAMP
        const resposta = await fetch('http://localhost/projeto/api.php');
        
        // Transforma o texto do banco em um objeto JS
        const dados = await resposta.json();
        
        console.log("Dados do WAMP:", dados);
    } catch (erro) {
        console.error("Erro ao conectar no link:", erro);
    }
}

carregarDados();


async function POSTcadastro(url, body) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Sucesso:", data);
            document.getElementById('mensagem1').innerText = "Cadastro realizado com sucesso!";
            document.getElementById('mensagem1').style.color = "green";
        } else {
            throw new Error(data.message || "Erro ao cadastrar");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        document.getElementById('mensagem1').innerText = "Erro: " + error.message;
        document.getElementById('mensagem1').style.color = "red";
    }
}

// 2. Função que captura o clique no botão (Disparada pelo onsubmit)
function cadastrarUsuario(event) {
    event.preventDefault(); // Impede o formulário de recarregar a página

    // Captura os valores dos inputs pelo ID
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;

    // Monta o objeto JSON
    const body = {
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha 
    };

    console.log("Enviando dados:", body);

    // Substitua pela URL real da sua API
    const urlAPI = "http://localhost/projeto/api.php"; 
    
    POSTusuario(urlAPI, body);
}

async function fazerLogin(event) {
    event.preventDefault(); // Impede a página de recarregar

    // 1. Captura os dados dos campos de login
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;

    const dados = {
        email: email,
        senha: senha
    };

    console.log("Tentando logar com:", dados);

    try {
        // 2. Faz a requisição POST para a sua rota de login
        const response = await fetch("http://localhost/projeto/api.php", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        const resultado = await response.json();

        if (response.ok) {
            // Se o login for bem-sucedido:
            console.log("Login autorizado!", resultado);
            
            // Opcional: Salvar um token de acesso (JWT) no localStorage
            // localStorage.setItem("token", resultado.token);

            // 3. Redireciona o usuário para a página principal
            window.location.href = "index.html"; 
        } else {
            // Se a senha estiver errada ou usuário não existir
            document.getElementById('mensagem2').innerText = "E-mail ou senha incorretos.";
            document.getElementById('mensagem2').style.color = "red";
        }
    } catch (erro) {
        console.error("Erro na conexão:", erro);
        document.getElementById('mensagem2').innerText = "Erro ao conectar com o servidor.";
    }
}