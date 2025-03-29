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
