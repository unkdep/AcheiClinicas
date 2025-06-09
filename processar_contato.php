<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $mensagem = $_POST['mensagem'];

    // Destinatário (seu e-mail)
    $destinatario = "fristmts@gmail.com"; // E-mail para o qual as mensagens serão enviadas

    // Assunto do e-mail
    $assunto = "Nova mensagem de contato do site";

    // Corpo do e-mail
    $corpo = "Nome: $nome\nE-mail: $email\nTelefone: $telefone\n\nMensagem:\n$mensagem";

    // Cabeçalhos do e-mail
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Envia o e-mail
    if (mail($destinatario, $assunto, $corpo, $headers)) {
        // Redireciona de volta para o formulário com status de sucesso
        header("Location: contato.html?status=sucesso");
    } else {
        // Redireciona com status de erro
        header("Location: contato.html?status=erro");
    }
    exit();
}
?>
