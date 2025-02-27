document.getElementById('form-registrar').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Obtenção dos valores dos campos do formulário
    const email = document.getElementById('email-registrar').value;
    const user = document.getElementById('nome').value;
    const password = document.getElementById('senha-registrar').value;

    // Verificação para garantir que os campos não estão vazios
    if (!email || !user || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Objeto com os dados do novo usuário
    const usuario = {
        email: email,
        user: user,
        password: password
    };

    const url = 'http://localhost:8080/usuarios'; // URL do seu endpoint

    // Realizando a requisição POST
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario) // Transforma o objeto em uma string JSON
    })
    .then(response => response.json())
    .then(data => {
        alert('Usuário cadastrado com sucesso!');
        console.log(data); // Exibe os dados retornados pela API
    })
    .catch(error => {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao cadastrar usuário.');
    });
});
