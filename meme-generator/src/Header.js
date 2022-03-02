import React from 'react'
import troll from './Trollface.png'
export default function Header(){
    return(
        <div className='meme-head'>
            <img src ={troll}
            className='troll'></img>
            <h2 className='title'>Meme Generator</h2>
            <h4 className='project'>React Course - Project 3</h4>
        </div>
    )
}