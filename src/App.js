import React,{Component} from 'react';
import PlayerCard from './PlayerCard'
import { withStatement } from '@babel/types';

class Game extends Component{

  constructor(){
    super();
    this.signs =["rock","paper","scissors"];
    this.state ={
      playerOne:"rock",
      playerTwo:"scissors",
      
    }
  }


  playGame = () => {
    //functionality is created below
    this.setState({
      playerOne: this.signs[Math.floor(Math.random() * 3)],
      playerTwo: this.signs[Math.floor(Math.random() * 3)],
    })

  }
  decideWinner =() => {
    const p1= this.state.playerOne
    const p2= this.state.playerTwo

    if (p1===p2){
      return "Its a Tie!"

    }
    else if ((p1==="rock" && p2==="scissors")|| 
    (p1==="paper"&& p2==="rock")||
    (p1==="scissors"&& p2==="paper"))
    {
      return " Player 1 wins !";
    }
    else {
      return "Player Two wins! ";
    }
    
      
     

  };



  
  render(){
    return(
      <div className="style">
        <div>
          <PlayerCard sign ={this.state.playerOne} />
          <PlayerCard sign ={this.state.playerTwo} />

        </div>
        <div className="winner">{this.decideWinner()}</div>
        <button type="button" onClick ={this.playGame}>Play the Game </button>
      </div>
    )
  }

}
export default Game;