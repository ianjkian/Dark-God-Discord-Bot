const Discord = require('discord.js');
const Subiex = require('../../bot.js');
const oneLinerJoke = require('one-liner-joke');

module.exports.run = async (bot, message, args) => {
  message.delete();
  var joke = oneLinerJoke.getRandomJoke();
  message.channel.send({embed: {
  color: 15158332,
  description: joke.body
}});

}, ['emoji', 'funny', 'hilarious'], 'Get a random joke!', '[]'

module.exports.help = {
    name: "joke",
    cooldown: 5,
}
