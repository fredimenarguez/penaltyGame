window.onload = () => {
    game.init()  
    audio.play() 
}

let audio = new Audio('../audio/campeones.mp3');
if(typeof audio.loop == 'boolean')
{
    audio.loop=true;
}
else{
    audio.addEventListener('ended', function(){
        this.currentTime = 0;
        this.play();
    
    }, false);
}
