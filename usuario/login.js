document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    if (!email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const loginData = { email, password };

    fetch('http://localhost:8080/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(errorMessage => {
                throw new Error(errorMessage);
            });
        }
        return response.json();
    })
    .then(usuario => {
        alert('Login bem-sucedido!');
        localStorage.setItem('usuario', JSON.stringify(usuario)); // Salva o usuário no localStorage
        window.location.href = '/livraria/livraria.html'; // Redireciona para outra página
    })
    .catch(error => {
        console.error('Erro ao fazer login:', error);
        alert(`Erro: ${error.message}`);
    });
});
