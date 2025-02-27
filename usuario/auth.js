// auth.js - Sistema de Autenticação Modular

// Simulação de "banco de dados" de usuários (apenas para front-end)
let usuarios = [];

// Função para registrar um novo usuário
function registrarUsuario(nome, email, senha) {
    // Verifica se o email já está cadastrado
    const usuarioExistente = usuarios.find(u => u.email === email);

    if (usuarioExistente) {
        return { success: false, message: "Email já cadastrado." };
    } else {
        // Adiciona o novo usuário ao "banco de dados"
        usuarios.push({ nome, email, senha });
        return { success: true, message: "Usuário registrado com sucesso!" };
    }
}

// Função para fazer login
function fazerLogin(email, senha) {
    // Verifica se o usuário existe no "banco de dados"
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        return { success: true, message: "Login bem-sucedido!", usuario };
    } else {
        return { success: false, message: "Email ou senha incorretos." };
    }
}

// Exporta as funções para uso em outros arquivos
export { registrarUsuario, fazerLogin };