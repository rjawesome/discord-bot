//Initialize Discord Client
const Discord = require('discord.js')
const client = new Discord.Client()

//When the bot starts
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  const channel = client.channels.find('name', 'questions')
  channel.send("For help ask a question")
})

//When a message is sent
client.on('message', msg => {
  //If the message (msg) is in the channel questions
  if (msg.channel.name === "questions") {
    //Do the search algorithm for the message
    search(msg)
  }
  //If the message (msg) is in the channel tictactoe
  if (msg.channel.name === "tictactoe") {
    //Do the algorithm for tic tac toe
    tictactoe(msg)
  } 
})

//Login to the discord server
client.login('NjEyODA5MzUxODUzMzc1NTIy.XVohmg.F0xLVVFp9w8LUEpJbz6rZkG3ytg')

function tictactoe (msg) {
  if (msg.content === 'start') {
    
  }
}

function search (msg) {
    //If the message says ping
    if (msg.content === 'ping') {
        //Reply with Pong!
        msg.reply('Pong!')
      }
      //If the message says hello
      else if (msg.content === 'hello') {
        //Reply with the message below
        msg.reply('Hi, My name is random bot!')
      }
      //If the message is not sent by the bot
      else if (msg.author.tag.indexOf("randomapplication") < 0) {
        //Create our query link
        var webpage = "https://google.com/search?&q=";
        var query = msg.content.replace("+", "%2B");
        query = query.replace(/ /g, "+");
        webpage = webpage + query
        var firstresult = webpage + "&btnI"
        //Send the first result link
        msg.channel.send({embed: {
            color: 3447003,
            title: "First result",
            url: firstresult
        }});
        //Send the other results link
        msg.channel.send({embed: {
            color: 3447003,
            title: "Other results",
            url: webpage
        }});
      }
}