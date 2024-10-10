const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const popup_el = document.getElementById('popup-message')
const message_el = document.getElementById('message')
const correctLetters=[];
const wrongLetters=[];
const wrongLetters_el = document.getElementById('wrong-letters');
let selectedWord = getRandomWord();
const items = document.querySelectorAll('.item');
const playAgainBtn = document.getElementById('play-again');
const popupdiv = document.getElementById('popupdiv');
 
let takeLetter = true;


async function getRandomWord(){

 
    // const words = ['fiko','seto','ulaş','özge','hakan','yağız','didem','funda','mertmartı'];
    // return words[Math.floor(Math.random()*words.length)];


    try {
        const response = await fetch("https://random-word-api.herokuapp.com/word");
        const data = await response.json();
        selectedWord = data[0]; // Assign the random word to the global variable
       
       
    } catch (error) {
        console.error('Error fetching random word:', error);
        
    }
   
    return selectedWord;
}

(async () => {
    
   await getRandomWord();
   
   displayWord();
})();


function displayWord(){
    if(selectedWord != null){
    console.log(selectedWord);
    word_el.innerHTML = `${selectedWord.split('').map(letter=>`<div class="letter">${correctLetters.includes(letter)?letter:''}</div>`).join('')}`;
    const w = word_el.innerText.replace(/\n/g,'');
     
    if(w===selectedWord){
      
            popup.style.display ='flex';
            popup_el.innerText = 'you win!';
            popupdiv.style.backgroundColor = 'green';
            takeLetter=false;
    }
}
}
 


function updateWrongLetters(){
    wrongLetters_el.innerHTML=`${wrongLetters.length>0?'<h3>wrong letters</h3>':''}
        ${wrongLetters.map(letter=>`<span>${letter}</span>`)}
    `;
        items.forEach((item,index)=>{
            const errorCount = wrongLetters.length;
            item.style.display = (index < errorCount) ? 'block':'none';
        });

        if(wrongLetters.length === items.length){
            popup.style.display ='flex';
            popup_el.innerText = 'you loose!';
            popupdiv.style.backgroundColor = 'red';
            takeLetter=false;
            word_el.innerHTML = `${selectedWord.split('').map(letter=>`<div class="letter">${letter}</div>`).join('')}`;
            const w = word_el.innerText.replace(/\n/g,'');

        }
}

function displayMessage(){
    message_el.classList.add('show');
    setTimeout(() => {
        
        message_el.classList.remove('show');
    }, 2003);
}

playAgainBtn.addEventListener('click',function(){
correctLetters.splice(0);
wrongLetters.splice(0);
selectedWord = getRandomWord();
takeLetter=true;
 

(async () => {
    
    await getRandomWord();
    
    displayWord();
 })();

updateWrongLetters();
popup.style.display='none';
});

window.addEventListener('keydown',function(e){
    message_el.classList.remove('show');

  if(takeLetter){
  
    if((e.keyCode>=65 && e.keyCode<=90)|| (['ı','ş','ç','ö','ğ','ü'].includes(e.key))){
 

        const letter = e.key;
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }else{
                displayMessage();
            
              //  this.alert("already have this letter");a
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLetters();
            }else{
                displayMessage();
                //message_el.classList.add('show');
                //    this.alert("already have this letter");
            }
        }

    }
    }
});
 