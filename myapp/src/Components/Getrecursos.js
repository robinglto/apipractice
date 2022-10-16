import React, {useState, useEffect} from "react";
import { Cards2 } from "./Cards2";

export function Getrecursos(){


    let convertir = JSON.parse(localStorage.getItem('personajes'))
    const [state,setState]=useState(null)
    useEffect(
        ()=>{
            fetch(`https://rickandmortyapi.com/api/character`)  
            .then((response)=> response.json())
            .then((data)=>{
                let cantidad =data.info.count
                let posicion = 0
                let arreglo = []
                while(posicion<=cantidad){
                    posicion++
                    arreglo.push(posicion)
                }        
                
                    fetch(`https://rickandmortyapi.com/api/character/${arreglo.map(dato=>dato)}`)           
                    .then((response)=> response.json())
                    .then((data)=>{
                        localStorage.setItem('personajes',JSON.stringify(data.flat()))
                    })
            })
        },[]
    )


    return(
        <div>
                {convertir
                ?convertir.map(persona=><Cards2 key={persona.id} img={persona.image} name={persona.name} status={persona.status} species={persona.species} location={persona.location.name} origin={persona.origin.name} />)
                            
                :null
                }
        </div>
    )
}


// state.map(persona=><Cards key={persona.id} img={persona.image} name={persona.name} status={persona.status} species={persona.species} location={persona.location.name} origin={persona.origin.name} />)