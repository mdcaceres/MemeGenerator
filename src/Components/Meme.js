import React from "react"
import memesData from "../memeData.js"
let url; 
function getMemeImage() {
    const memesArray = memesData.data.memes; 
    let randonNumber = Math.floor(Math.random() * memesArray.length); 
    url = memesArray[randonNumber].url; 
}


export default function Meme() {
    return (
        <main>
            <div className="form">
                <input type="Text" className="form--input" placeholder="Top text"/>
                <input type="Text" className="form--input" placeholder="Bottom text"/>
                <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
            </div>
        </main>
    )
}