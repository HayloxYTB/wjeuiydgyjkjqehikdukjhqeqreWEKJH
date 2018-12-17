var request = require('request');
const Discord = require("discord.js");
const Discord2 = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord2.Client();
const fs = require("fs");
var i = 0;
require('events').EventEmitter.defaultMaxListeners = 20;
var messagetest;
 const talkedRecently = new Set();
 var maxMessages = 100; // Change based on how many messages you want sent
/*
var invite = "ewwJr7"";
var channel = "451432205839761419";
var id = "298188468817887242";
var proxy = "";
*/
test = [];
 var tokens = [
"NTI0MDEyMzIwMzM1MjAwMjU2.Dvh4AQ.daakVMlx_9tGYr4URr6Iajmwa60",
"NTI0MDEyMzY3NDU4MjA1NzE4.Dvh4DA.n0g6l-6IYF6dfyMCHR374cSuZhk",
"NTI0MDEzMjQ5Mjg5NTE5MTI3.Dvh43w.CHcTWHIW3mV67-0cnsc3YT3XQTg",
"NTI0MDEzMzU2MjI3NzU2MDQy.Dvh4-Q.1joWAKTxcsv1stccj16VrzzIxl4",
"NTI0MDE0NjExMzEwMTgyNDA0.Dvh6KA.6frbXodqIPHIlB3x2WSUeBbN9Fg",
"NTI0MDE0NjYxMDIxMjA0NDkw.Dvh6Lw.P9hQXSd6henuOEw3EVJ88lMXqTA"
 	
 ];
var testz = tokens.length;
  function isInArray(array, search)
{
    return array.indexOf(search) >= 0;
}
 whitelist = ["214486512861970432","475432784211476481","305639565656326145","305639565656326145","199555647333728257","321971966074552321","287609251374039051"];
function spam(channel,message,token)
{
    const Data = {
            content: message,
            token: token
        }
         const Headers = {
            authorization: Data.token,
            'content-type': 'application/json'
        }
         request({
            method: 'POST',
            headers: Headers,
            json:    Data,
            uri:      "https://discordapp.com/api/v6/channels/"+channel+"/messages"
        }, (Error, Response, Body) => {
			try {
				var delay = Body.retry_after;
				if(Body.message === 'You are being rate limited.') {
                var t = setTimeout(()=>{spam(channel,message,token);},1+delay);
				}
			} catch (err) {
				var delay = 5
				var t = setTimeout(()=>{spam(channel,message,token);},1+delay);
			}
			
        });
		
}
function spamdm(userid,message,token)
{
    const Data = {
            recipient_id: userid,
            token: token
        }
         const Headers = {
            authorization: Data.token,
            'content-type': 'application/json'
        }
         request({
            method: 'POST',
            headers: Headers,
            json:    Data,
            uri:      "https://discordapp.com/api/v6/users/@me/channels"
        }, (Error, Response, Body) => {
			try {
				var delay = Body.retry_after;
				if(Body.message === 'You are being rate limited.') {
                var t = setTimeout(()=>{createdm(userid,message,token);},1+delay);
				} else {
					var chanid = Body.id;
					spam(chanid,message,token);
				}
			} catch (err) {
				var delay = 5
				var t = setTimeout(()=>{createdm(userid,message,token);},1+delay);
			}
			
        });
		
}
 function reqreset(eemail, method, url, form) {
    console.log("Email: " + eemail + " Method: " + method + "")
    return new Promise((resolve, reject) => {
        request({
            method: method,
            url: url,
            headers: {
                email: eemail
            },
	
            form: form
        }, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}
function online(tokens)
{
    var clients = [];
    tokens.forEach(function(token) {
    clients.push(newclient(token));
    });
    return clients;
}
function newclient(token)
{
    return {token: token, client: new Discord.Client()};
}
 function req(token, method, url, form) {
    return new Promise((resolve, reject) => {
        request({
            method: method,
		
            url: url,
		
            headers: {
				'User-Agent': "Mozilla/5.0 (X11; Linux x86_64; rv:62.0) Gecko/20100101 Firefox/62.0",
                authorization: token
            },
	
		
	
            form: form
        }, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}
 function attack(tkn, inv, chnl, srver,message){
	
    
    req(tkn, "POST", "https://discordapp.com/api/v6/invite/" + inv).then(body => {
        let parsed = JSON.parse(body);
	   
	 
	   	 			setInterval(function () {
				
						
						
			
						
						
			if(i < 10000){
				
				i += 1
				      
				
				     req(tkn, "POST", "https://discordapp.com/api/v6/channels/" + chnl + "/messages", {content: message}).then(body => {
					     if(body.includes("Unknown Channel")){
					     process.exit(0);
						     
                         }
                        
					     if(i > 500000){process.exit(1)}
		});
				
				
				
			
		
			}
						
						
			
						
			
  
},900); 
	    
       
	    
 				   
	
 	
	 
	
	
        
       
    
        
    });
	
	
		
	
	
     
 }
 function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}
function send(invite,channel,server,message){
	
 console.log("")
clients = online(tokens);
var i = 0;
 clients.forEach(function(bot) {
    bot.client.login(bot.token);
	
   
    bot.client.on('message', message => {
		if(!isInArray(whitelist,message.author.id)) return;
		
		
  if (message.content === '!helpinfo') {
    // Note that this will only work if the message was sent in a guild
    // and the author is actually in a voice channel.
    // You might want to check for all that stuff first
    const channel = message.member.voiceChannel;
	
     channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
  if(message.content === "pls help me"){
	   const channel = message.member.voiceChannel;
     channel.leave();
	  
	  
  }
  if(message.content === "seagull send help"){
	   const channel = message.member.voiceChannel;
	   channel.join()
 .then(connection => {
      const dispatcher = connection.playFile('./Mine_mine_mine_SFX_-_Finding_nemo-Ps8aBSnEIXE.mp3');
            dispatcher.on("end", end => {channel.leave()});
	   })
	  
  }
  
});
});
     tokens.forEach(function(death) {
	   
        attack(death, invite, channel, server,message);
        
    });
     
 }
 client.on("ready", () => {
  console.log("I am ready!");
	client.user.setUsername("RaidBOT")
  
 });
 client.on("message", (message) => {
	var args = message.content.split(" ")
	 if (message.content.startsWith("leavediscord")) {
		 az = message.content.split(" ")
	 bz = az[1]
	 
	
			 tokens.forEach(function(death) {
	   
         req(death, "DELETE", "https://discordapp.com/api/v6/users/@me/guilds/" + bz).then(body => {
                
            });
        
    });
	 
	 }
	
	
	  if(message.content == "!help"){
	  help_embed = new Discord.RichEmbed()
     .setColor('#4C1B1B')
     .addField("Bot commands", "   !help : show commands! \n attack <serverid> <channel id> \n !serverid : Get the channel ID of the Discord text channel. On Discord, open your User Settings -> Appearance -> Enable Developer Mode. Rightclick on the Discord text channel you want and press Copy ID \n")
     
 
     .setFooter("Copyright © 2018 RAIDBOT - All Rights Reserved")
     .setThumbnail(message.author.avatarURL)
 message.channel.sendEmbed(help_embed);
	  
	  
	  }
 	
	if(message.content == "!restart"){
	 if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait a minute to restart " + message.author);
    } else {
    process.exit()
    
    
    }
	}
	if(message.content.startsWith("spamdm")){
		azx = message.content.split(" ")
	 var channel = azx[1];
	  tokens.forEach(function(token) {
                    spamdm(channel, 'nigger', token);
                });
	}
  if (message.content.startsWith("attack")) {
	  if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait a minute to send a new attack - " + message.author);
    } else {
            // the user can type the command ... your command code goes here :)
a = message.content.split(" ")
      b = a[1]
      c = a[2]
      d = a[3]
	  de = a[4]
	  dez = a[5]
	  dex = a[6]
	  dec = a[7]
	  dep = a[8]
	  deq = a[9]
	    a.shift()
	    a.shift()
	    a.shift()
	     a.shift()
      message.channel.send("Attack sent at : discord.gg/" + b + " with the server id of : " + c + " and the channel id of : " + d + " And the message of : " + a.join(" "))
	    message.channel.send("Bots : " + testz)
	
	  
      send(b,d,c,a.join(" "))
  }
        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
      
});
 client.login("NDg2MjIxODc1MDg5NzY4NDUw.DolTsA.KzpuwY400oyIEQPLNVSxs277100");
