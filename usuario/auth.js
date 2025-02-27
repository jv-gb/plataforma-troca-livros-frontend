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
    const usuario = { email, user, password };

    const url = 'http://localhost:8080/usuarios/cadastrar'; // URL do seu endpoint

    // Realizando a requisição POST
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario) // Transforma o objeto em JSON
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(errorMessage => {
                throw new Error(errorMessage);
            });
        }
        return response.json();
    })
    .then(data => {
        alert('Usuário cadastrado com sucesso!');
        location.reload();
    })
    .catch(error => {
        console.error('Erro ao cadastrar usuário:', error);
        alert(`O usuário ou e-mail informado já está em uso`);
        location.reload();
    });
});
