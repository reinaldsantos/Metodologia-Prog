<<<<<<< HEAD
document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome.trim() === '' || email.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Esconder o formulário
    document.querySelector('.form-wrapper').classList.add('hidden');

    // Mostrar a foto
    const fotoContainer = document.getElementById('foto-container');
    fotoContainer.classList.remove('hidden');
    fotoContainer.style.display = 'flex'; // Usar flex para centralizar
}); 
=======
function cadastrarUsuario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let imagem = document.getElementById("imagemSucesso");

    if (nome && email) {
        alert("Usuário cadastrado com sucesso!\nNome: " + nome + "\nEmail: " + email);
        console.log("Exibindo imagem...");
        imagem.style.display = "block"; // Exibe a imagem
        imagem.style.visibility = "visible"; // Garante visibilidade
        imagem.style.opacity = "1"; // Garante opacidade
    } else {
        alert("Preencha todos os campos!");
    }
}
>>>>>>> ef059ebd9f7ab52a0b30b497b338d74e032c3bb7
