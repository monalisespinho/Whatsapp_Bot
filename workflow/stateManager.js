let estados = {};

function iniciarEstado(userJid) {
    estados[userJid] = {
        perguntaAtual: 'inicio',
        confianca: 100
    };
}

function removerEstado(userJid) {
    delete estados[userJid];
}

function getEstado(userJid) {
    return estados[userJid];
}

module.exports = { estados, iniciarEstado, removerEstado, getEstado };
