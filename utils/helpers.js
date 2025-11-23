const { normalize } = require('./normalizer');

function montarMensagem(pergunta) {
    let txt = pergunta.descricao + "\n\n";
    pergunta.opcoes.forEach(op => {
        txt += `- ${op.opcao}\n`;
    });
    return txt;
}

function encontrarOpcao(pergunta, respostaUsuario) {
    const r = normalize(respostaUsuario);

    for (let op of pergunta.opcoes) {
        if (normalize(op.opcao) === r) return op;
    }

    for (let op of pergunta.opcoes) {
        const first = normalize(op.opcao).split(' ')[0];
        if (first === r) return op;
    }

    return null;
}

module.exports = { montarMensagem, encontrarOpcao };
