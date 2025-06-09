document.addEventListener('DOMContentLoaded', function() {
    // Carrossel
    const imagens = document.querySelector('.carrossel .imagens');
    const bolinhas = document.querySelectorAll('.navegacao .bolinha');
    const totalImagens = bolinhas.length;
    let indexAtivo = 0;

    // Função para atualizar a imagem ativa e a bolinha
    function atualizarCarrossel() {
        const todasImagens = imagens.querySelectorAll('img');
        todasImagens.forEach(img => img.classList.remove('active')); // Remove a classe 'active' de todas as imagens
        todasImagens[indexAtivo].classList.add('active'); // Adiciona a classe 'active' na imagem atual

        bolinhas.forEach((bolinha, index) => {
            bolinha.classList.remove('active'); // Remove a classe 'active' de todas as bolinhas
            if (index === indexAtivo) {
                bolinha.classList.add('active'); // Adiciona a classe 'active' na bolinha correspondente
            }
        });
    }

    // Navegação manual (clicar nas bolinhas)
    bolinhas.forEach((bolinha, index) => {
        bolinha.addEventListener('click', () => {
            indexAtivo = index;
            atualizarCarrossel(); // Atualiza a imagem ativa ao clicar na bolinha
        });
    });

    // Inicializa o carrossel na primeira imagem
    atualizarCarrossel();
});
