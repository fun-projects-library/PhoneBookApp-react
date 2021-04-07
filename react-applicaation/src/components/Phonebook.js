import React from 'react'
import Form from "./Form"

export default function Phonebook(props) {
    const addFunc = ()=>{
        alert("")
        console.log(this.nameInput.value)
        // let parag = document.createElement("p")
        // parag = `${nameInput.value} ----> ${phoneInput}`;
        // results.appendChild(parag)
    }
    return (
        <div>
            <div className="results">

            </div>
            <Form addFunc={addFunc}/>
        </div>
    )
}
