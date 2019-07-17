import React from 'react';



const scissors= "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
const paper = "https://images.unsplash.com/photo-1513705153361-9bc726c8db67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
const rock ="https://images.unsplash.com/photo-1444312645910-ffa973656eba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

const PlayerCard =(props)=>{

    var sign =props.sign;
    var image = " "

    console.log ("this is 4",props)
    return(
        <div className="playerCard">{props.sign}
        <img alt= "HI!"  scr = {image} />
        </div>
    )
}

export default PlayerCard;
