document.addEventListener('DOMContentLoaded', function() {
    const formCadastroLivro = document.getElementById('form-cadastro-livro');
    const listaDeLivros = document.getElementById('lista-livros');
    const listaDeTrocas = document.getElementById('lista-trocas');
    const listaDeResenhas = document.getElementById('lista-resenhas');

    // Função para carregar livros
    function carregarLivros() {
        fetch('/api/livros')
            .then(response => response.json())
            .then(data => {
                listaDeLivros.innerHTML = '';
                data.forEach(livro => {
                    const li = document.createElement('li');
                    li.textContent = `${livro.titulo} - ${livro.autor} (Edição: ${livro.edicao}, Estado: ${livro.estado})`;
                    listaDeLivros.appendChild(li);
                });
            });
    }

    // Função para cadastrar livro
    formCadastroLivro.addEventListener('submit', function(event) {
        event.preventDefault();

        const livro = {
            titulo: document.getElementById('titulo').value,
            autor: document.getElementById('autor').value,
            edicao: document.getElementById('edicao').value,
            estado: document.getElementById('estado').value
        };

        fetch('/api/livros', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livro)
        })
        .then(response => response.json())
        .then(data => {
            carregarLivros();
            formCadastroLivro.reset();
        });
    });

    // Carregar livros ao iniciar a página
    carregarLivros();
});