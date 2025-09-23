<?php
include('../includes/conexao.php');
include('../includes/header.php');

// Recebe os dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT); // Criptografa a senha

// Prepara a inserção
$sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nome, $email, $senha);

// Verifica resultado
if ($stmt->execute()) {
    echo '
    <div class="mensagem-sucesso">
        <h2>🎉 Cadastro realizado com sucesso!</h2>
        <p>Você será redirecionado para a página inicial em alguns segundos...</p>
        <p>Se não for redirecionado, <a href="../index.php">clique aqui</a>.</p>
    </div>
    <meta http-equiv="refresh" content="5;URL=../index.php">
    ';
} else {
    echo '<div class="mensagem-erro">
        <h2>❌ Erro ao cadastrar</h2>
        <p>' . $stmt->error . '</p>
        <p><a href="cadastro.php">Tentar novamente</a></p>
    </div>';
}

include('../includes/footer.php');
$conn->close();
?>
