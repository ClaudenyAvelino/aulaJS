
    const form = document.getElementById("formContato");
    const msg = document.getElementById("mensagem-sucesso");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // evita reload
        msg.style.display = "block";
        form.reset();
    });


    /*
DESCRIÇÃO

<script>
    // Seleciona o formulário pelo ID
    const form = document.getElementById("formContato");

    // Seleciona a div da mensagem de sucesso
    const msg = document.getElementById("mensagem-sucesso");

    // Adiciona um "ouvinte" para o evento de envio do formulário
    form.addEventListener("submit", function (event) {

        // Impede o comportamento padrão do formulário
        // (que seria recarregar a página ao enviar)
        event.preventDefault();

        // Exibe a mensagem de sucesso
        msg.style.display = "block";

        // Limpa todos os campos do formulário após o envio
        form.reset();
    });
</script>

Resumindo o fluxo:

O usuário clica em Enviar

O JavaScript impede o recarregamento da página

A mensagem “Formulário enviado com sucesso!” aparece

Os campos do formulário são limpos
    */

