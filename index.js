//Initialize Discord Client
const Discord = require('discord.js')
const client = new Discord.Client()
var line1 = [" |", " |", " |"];
var line2 = [" |", " |", " |"];
var line3 = [" |", " |", " |"];
var inbetween = "-------"
var header = "1 2 3"
var started = false;

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
    line1 = ["A ", "| ", "| ", "| ", "|"];
    line2 = ["A ", "| ", "| ", "| ", "|"];
    line3 = ["A ", "| ", "| ", "| ", "|"];
    msg.channel.send(header)
    msg.channel.send(line1[0] + line1[1] + line1[2] + line1[3] + line1[4])
    msg.channel.send(inbetween)
    msg.channel.send(line2[0] + line2[1] + line2[2] + line2[3] + line2[4])
    msg.channel.send(inbetween)
    msg.channel.send(line2[0] + line2[1] + line3[2] + line3[3] + line3[4])
    msg.channel.send(inbetween)
    msg.channel.send("Player 1, please take your turn (send message in format '[letter][number]' ex. A1 or B3 ")
  }
  else if (started == false) {

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