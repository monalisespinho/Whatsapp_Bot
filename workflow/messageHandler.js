const { selecionaPergunta } = require('./knowledgeBase');
const { normalize } = require('../utils/normalizer');
const { montarMensagem, encontrarOpcao } = require('../utils/helpers');
const { iniciarEstado, removerEstado, getEstado } = require('./stateManager');
const { AUTHORIZED_NUMBER } = require('../config');

async function handleMessage(msg, client) {
    const senderJid = msg.from;
    const senderNumber = '+' + senderJid.split('@')[0];

    if (senderNumber !== AUTHORIZED_NUMBER) return;

    let estado = getEstado(senderJid);

    if (!estado) {
        iniciarEstado(senderJid);
        const pergunta = selecionaPergunta('inicio');
        await msg.reply('Olá! Vou te fazer algumas perguntas rápidas...');
        await msg.reply(montarMensagem(pergunta));
        return;
    }

    const pergunta = selecionaPergunta(estado.perguntaAtual);
    const respostaUsuario = msg.body.trim();

    if (normalize(respostaUsuario) === 'reiniciar') {
        iniciarEstado(senderJid);
        await msg.reply("Teste reiniciado.");
        await msg.reply(montarMensagem(selecionaPergunta("inicio")));
        return;
    }

    const opc = encontrarOpcao(pergunta, respostaUsuario);
    if (!opc) {
        await msg.reply("Resposta não reconhecida.");
        await msg.reply(montarMensagem(pergunta));
        return;
    }

    if (opc.resposta) {
        if (!opc.confianca) estado.confianca -= 10;

        await msg.reply(`🎯 Recomendação final: *${opc.resposta}*`);
        await msg.reply(`🔎 Nível de confiança: ${estado.confianca}%`);
        await msg.reply('Para refazer o teste, envie "reiniciar".');

        removerEstado(senderJid);
        return;
    }

    if (opc.redireciona) {
        if (!opc.confianca) estado.confianca -= 10;
        estado.perguntaAtual = opc.redireciona;

        const nova = selecionaPergunta(opc.redireciona);
        await msg.reply(montarMensagem(nova));
    }
}

module.exports = { handleMessage };
