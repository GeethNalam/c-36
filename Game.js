class Game{
   constructor(){
     

   }
gameState(){
 var gameStateRef = database.ref('gamestate')
gameStateRef.on("value",function(data){
    gameState = data.val()
})
}
}
