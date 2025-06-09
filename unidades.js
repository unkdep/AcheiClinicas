document.addEventListener('DOMContentLoaded', function() {
    const verMaisBtn = document.getElementById('btn-ver-mais');
    const verMenosBtn = document.getElementById('btn-ver-menos');
    const unidadesExtras = document.getElementById('unidades-imagens-extra');
  
    if (verMaisBtn && verMenosBtn && unidadesExtras) {
  
      // Ação do botão "Ver Mais"
      verMaisBtn.addEventListener('click', function() {
        unidadesExtras.classList.remove('escondido');  // Mostra as unidades extras
        verMaisBtn.style.display = 'none';  // Esconde o botão "Ver Mais"
        verMenosBtn.style.display = 'inline-block';  // Mostra o botão "Ver Menos"
      });
  
      // Ação do botão "Ver Menos"
      verMenosBtn.addEventListener('click', function() {
        unidadesExtras.classList.add('escondido');  // Esconde as unidades extras
        verMaisBtn.style.display = 'inline-block';  // Mostra o botão "Ver Mais"
        verMenosBtn.style.display = 'none';  // Esconde o botão "Ver Menos"
      });
    }
  });
  