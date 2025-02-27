document.addEventListener('DOMContentLoaded', function() {
    const formLogin = document.getElementById('form-login');
    const formRegistrar = document.getElementById('form-registrar');
    const formCadastroLivro = document.getElementById('form-cadastro-livro');
    const listaDeLivros = document.getElementById('lista-livros');
    const mensagemLogin = document.getElementById('mensagem-login');
    const mensagemRegistrar = document.getElementById('mensagem-registrar');

    // Simulação de "banco de dados" de usuários e livros (apenas para front-end)
    let usuarios = [];
    let livros = [];

    // Função para simular o login
    formLogin.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Verifica se o usuário existe no "banco de dados"
        const usuario = usuarios.find(u => u.email === email && u.senha === senha);

        if (usuario) {
            mensagemLogin.textContent = "Login bem-sucedido!";
            mensagemLogin.style.color = "green";
            // Aqui você pode redirecionar o usuário ou mostrar conteúdo restrito
        } else {
            mensagemLogin.textContent = "Email ou senha incorretos.";
            mensagemLogin.style.color = "red";
        }
    });

    // Função para simular o registro
    formRegistrar.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email-registrar').value;
        const senha = document.getElementById('senha-registrar').value;

        // Verifica se o email já está cadastrado
        const usuarioExistente = usuarios.find(u => u.email === email);

        if (usuarioExistente) {
            mensagemRegistrar.textContent = "Email já cadastrado.";
            mensagemRegistrar.style.color = "red";
        } else {
            // Adiciona o novo usuário ao "banco de dados"
            usuarios.push({ nome, email, senha });
            mensagemRegistrar.textContent = "Usuário registrado com sucesso!";
            mensagemRegistrar.style.color = "green";
            formRegistrar.reset(); // Limpa o formulário após o registro
        }
    });

    // Função para cadastrar livro
    formCadastroLivro.addEventListener('submit', function(event) {
        event.preventDefault();

        const livro = {
            titulo: document.getElementById('titulo').value,
            autor: document.getElementById('autor').value,
            edicao: document.getElementById('edicao').value,
            estado: document.getElementById('estado').value
        };

        // Adiciona o livro ao "banco de dados"
        livros.push(livro);
        carregarLivros();
        formCadastroLivro.reset(); // Limpa o formulário após o cadastro
    });

    // Função para carregar livros na lista
    function carregarLivros() {
        listaDeLivros.innerHTML = '';
        livros.forEach(livro => {
            const li = document.createElement('li');
            li.textContent = `${livro.titulo} - ${livro.autor} (Edição: ${livro.edicao}, Estado: ${livro.estado})`;
            listaDeLivros.appendChild(li);
        });
    }

    // Carregar livros ao iniciar a página
    carregarLivros();
});