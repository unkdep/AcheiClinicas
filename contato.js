document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contato');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio do formulário
  
      // Captura os valores dos campos
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const telefone = document.getElementById('telefone').value;
      const mensagem = document.getElementById('mensagem').value;
  
      // Validação simples
      if (!nome || !email || !telefone || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
  
      // Se tudo estiver ok, envia os dados (aqui apenas um alerta por enquanto)
      alert('Mensagem enviada com sucesso!');
  
      // Limpar os campos do formulário após o envio
      form.reset();
    });
  });
  