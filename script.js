/* ANO AUTOMÁTICO NO RODAPÉ */

document.getElementById("ano").textContent =
    new Date().getFullYear();


/*Formulário da reserva*/

document.getElementById("formReserva").addEventListener("submit", function(event) {

    event.preventDefault();
    const numero = "5535999686086";

    /*Capturar informações */
    const nome = document.getElementById("nome").value;
    const tipo = document.getElementById("tipo").value;
    const data = document.getElementById("data").value;
    const convidados = document.getElementById("convidados").value;

/*formatar a data */
const dataFormatada = data.split("-").reverse().join("/");

/*mensagem*/

const mensagem =
    "Olá! Gostaria de solicitar um orçamento.\n\n" +
    "Nome: " + nome + "\n" +
    "Tipo do evento: " +tipo + "\n" +
    "Data desejada: " +dataFormatada + "\n" +
    "Quantidade de convidados: " + convidados + "\n\n" +
    "Aguardo retorno, obrigado!";

    /*link whatsapp*/
    const link = ("https://wa.me/5535999686086?text=" + encodeURIComponent(mensagem));
    
    window.open(link, "_blank");
});