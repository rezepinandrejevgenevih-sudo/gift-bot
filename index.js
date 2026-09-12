const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '1780244588:QaQ_avZKVhHhVDdNKeakpkq79UQ5iCfOcxS';
const bot = new TelegramBot(TOKEN, { polling: true });

console.log('🤖 Бот запущен!');

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '👋 Привет! Я бот GiftBattle! 🎁\n\nНапиши /help');
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, '📋 Команды:\n/gift — подарок 🎁\n/battle — битва ⚔️\n/coin — монетка 🪙\n/dice — кубик 🎲');
});

bot.onText(/\/gift/, (msg) => {
  const gifts = ['🧸 Мишка', '🌹 Роза', '💎 Алмаз', '🏆 Кубок', '❤️ Сердце', '🎂 Торт', '⭐ Звезда', '🚀 Ракета'];
  bot.sendMessage(msg.chat.id, '🎁 Тебе выпал: ' + gifts[Math.floor(Math.random() * gifts.length)] + '!');
});

bot.onText(/\/battle/, (msg) => {
  const you = Math.floor(Math.random() * 100);
  const enemy = Math.floor(Math.random() * 100);
  const result = you > enemy ? '🏆 ТЫ ПОБЕДИЛ!' : you < enemy ? '💀 Ты проиграл...' : '🤝 Ничья!';
  bot.sendMessage(msg.chat.id, '⚔️ БИТВА!\n\nТы: ' + you + '\nВраг: ' + enemy + '\n\n' + result);
});

bot.onText(/\/coin/, (msg) => {
  bot.sendMessage(msg.chat.id, Math.random() < 0.5 ? '🦅 Орёл' : '🌰 Решка');
});

bot.onText(/\/dice/, (msg) => {
  bot.sendMessage(msg.chat.id, '🎲 Выпало: ' + (Math.floor(Math.random() * 6) + 1));
});

bot.on('polling_error', (err) => {
  console.log('❌ Ошибка:', err.message);
});
