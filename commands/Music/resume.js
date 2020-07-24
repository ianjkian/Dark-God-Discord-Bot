exports.run = async (client, message, args, ops) => {

    message.delete();
    let fetched = ops.active.get(message.guild.id);
    
    if(!fetched)
        return message.channel.send("There isn't any music playing in this guild!");

    if(!message.member.voiceChannel)
        return message.channel.send("You are not in a voice channel");          

    if(!fetched.dispatcher.paused)
        return message.channel.send("The music isn't paused");
        
    fetched.dispatcher.resume();    
    
    message.channel.send(`Successfully resumed the track **${fetched.queue[0].songTitle}**`);    
}

module.exports.help = {
    name: "resume"
}