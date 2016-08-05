var Bot = require('slackbots');

var settings = {
  token: 'Slack Token',
  name: "Chuck Norris"
};

var bot = new Bot(settings);

bot.on('start', function() {
  bot.postMessageToChannel('some-channel-name', 'Hello channel!');
  bot.postMessageToUser('some-username', 'hello bro!');
  bot.postMessageToGroup('some-private-group', 'hello group chat!');
})
