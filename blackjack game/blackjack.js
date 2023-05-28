
let cards=[];
let sum = 0;
let hasBlackJack = false; // default suppose no black jack
let isAlive= false; // at biginning players alive
let message="";


let messageEl=document.getElementById("message-el");


let sumEl=document.querySelector("#sum-el");
let cardsEl=document.getElementById("cards-el");




//here we used object to use playersName and playersChips

let player= {   name:'Bhesh Raj', 
          chips:"145"  }

let playerEl=document.getElementById('player-el');
playerEl.textContent=player.name+": $"+player.chips;



function getRendomCard(){

   let randomeNumber =  Math.floor(Math.random()*13)+1;

   if (randomeNumber>10){
    return 10;

   }

   else if( randomeNumber=== 1){ // for ekkaa
 
    return 11;
   }
   else{

    return randomeNumber;
   }



}



function startGame(){

  isAlive = true;
 let firstcard= getRendomCard();
 let secondcard= getRendomCard();

 cards= [ firstcard,secondcard];

 sum =firstcard + secondcard;

       randerGame();

}

function randerGame(){
 

       
    //cardsEl.textContent= "Cards:"+cards[0]+"  "+ cards[1];


// loop for render out all cards instead of just two

cardsEl.textContent= "Cards:";

for ( let i = 0; i< cards.length ;i++){

 cardsEl.textContent += cards[i] + " ";
}


    sumEl.textContent= "Sum:" + sum;  

    if(sum<=20){
        console.log("Do you want to draw a new car?");
       isAlive=true;
       hasBlackJack=false;
       message="Try Again!"
    }
    else if (sum ===21) {
    
        console.log("Wohoo! YOu 've got Blackjack!");
        isAlive=false;
        hasBlackJack= true;
        message="YOU've got Blackjack"
        
    }
    else {
        console.log("you're out of the game!");
        isAlive=false;
        hasBlackJack=false;
         message ="you are logging out";
        
    }

    messageEl.textContent =  message
                            
    
  //console.log(message);
}




function newCard(){

  //only allow the player to get a new card if she is alive and doesnot have a blackjack.

if (isAlive===true && hasBlackJack===false){

       let card = getRendomCard()
       cards.push(card);  
     
     sum += card;  // new sum which next card drwan ; this  sum  in  below  renderGame()function 
     randerGame();
}
  



















}

































