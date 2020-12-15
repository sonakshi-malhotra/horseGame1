class Form {
    constructor(){
        this.input=createInput("name")
        this.button =createButton('submit')
        this.greeting=createElement('h3')
        this.reset=createButton('reset database')
    }
    display(){
        var title =createElement('h2')
        title.html("Horse Racing game")
        title.position(displayWidth/2,0)
       
      
        this.input.position(displayWidth/2,displayHeight/2-80)
        this.button.position(displayWidth/2,displayHeight/2)
        this.reset.position(displayWidth-100,20)

        this.button.mousePressed(() =>{
        this.input.hide()
        this.button.hide()

        player.name=this.input.value()
        playerCount=playerCount+1
        player.index=playerCount
        player.update(name)
        player.updateCount(playerCount)
        this.greeting.html("welcome "+player.name)
        this.greeting.position(displayWidth/2,displayHeight/2)
    }) 
    
    this.reset.mousePressed(()=>{
        player.updateCount(0)
        game.updateGameState(0)
        database.ref('players').remove()
        Player.updateCarsAtEnd(0)
    })
    }
    hide(){this.greeting.hide();
    this.button.hide();
    this.input.hide()
    }
}
