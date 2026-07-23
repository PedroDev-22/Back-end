let respostaApi: number | string = 200;
respostaApi = 'OK';

let statusUsuario: "ativo" | "inativo" = "inativo";
// statusUsuario = "banido"; // Erro

function mostrarResposta(resposta: number | string) {

    if (typeof resposta === 'number') {
        console.log(`Código: ${resposta}`)
    } else if (typeof resposta === 'string') {
        console.log(`Mensagem: ${resposta}`)
    }
}

mostrarResposta(respostaApi)