const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { AUTHORIZED_NUMBER } = require('./config');
const { handleMessage } = require('./workflow/messageHandler');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log("QR gerado.");
});

client.on('ready', async () => {
    console.log("WhatsApp conectado!");

    const chatId = AUTHORIZED_NUMBER.replace('+', '') + '@c.us';
    await client.sendMessage(chatId, "Bot iniciado com sucesso!");
});

client.on('message', msg => handleMessage(msg, client));

client.initialize();
