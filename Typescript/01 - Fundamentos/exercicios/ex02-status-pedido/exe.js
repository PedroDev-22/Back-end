"use strict";
let statusPedido = "pendente";
function tempoEntrega(status) {
    if (status === 'pendente') {
        return "Aguardando pagamento";
    }
    else if (status === 'enviado') {
        return "Chega em 3-5 dias úteis";
    }
    else if (status === 'entregue') {
        return "Pedido Entregue";
    }
}
;
console.log(tempoEntrega(statusPedido));
statusPedido = "enviado";
console.log(tempoEntrega(statusPedido));
statusPedido = 'cancelado'; // Erro
console.log(tempoEntrega(statusPedido));
