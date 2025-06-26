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
    fotoContainer.style.display = 'flex';
    fotoContainer.style.flexDirection = 'column';
    fotoContainer.style.alignItems = 'center';
    fotoContainer.style.justifyContent = 'center';
    fotoContainer.style.minHeight = '100vh';
}); 
