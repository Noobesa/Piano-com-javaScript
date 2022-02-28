
const keys = document.querySelectorAll('.key');



// Função playNotes; 

function playNotes(event){
    
    let audioKeyCode = getKeyCode(event);
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    const notFoundKey = !key;

    if(notFoundKey){
        return;
    }
    addPlayingClass(key);
    playAudio(audioKeyCode);

};

function addPlayingClass(key){
    key.classList.add('playing');
}

function getKeyCode(event){
    let keyCode;
    const isKeyBoard = event.type === 'keydown';
    
    if(isKeyBoard){
        keyCode = event.keyCode;
    }else{
        keyCode = event.target.dataset.key
    }

    return keyCode;
}

function playAudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
    audio.currentTime = 0;
    audio.play();
}

// Evento ao clicar no botão;

function removePLaying(event){
    event.target.classList.remove('playing');
}

function init(){
    keys.forEach(function(key){
        key.addEventListener('click', playNotes);
        key.addEventListener('transitionend', removePLaying);
    });
    
    // Evento ao pressionar o  botão;
    
    window.addEventListener('keydown', playNotes)
}

window.addEventListener('load', init);


