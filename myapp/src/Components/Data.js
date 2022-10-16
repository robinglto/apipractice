import React, {useState, useEffect} from "react";

export function Data(){

    const [personajes,setPersonajes] = useState(null)
    const [ubicaciones,setUbicaciones] = useState(null)
    const [episodios,setEpisodios] = useState(null)
  
  
    function caracteres(){
      fetch(`https://rickandmortyapi.com/api/character`)  
      .then((response)=> response.json())
      .then((data)=>{
          setPersonajes(data.info.count)
      })
    }
    function Locaciones(){
        fetch(`https://rickandmortyapi.com/api/location`)  
        .then((response)=> response.json())
        .then((data)=>{
            setUbicaciones(data.info.count)
        })
    }
    function episodio(){
        fetch(`https://rickandmortyapi.com/api/episode`)  
        .then((response)=> response.json())
        .then((data)=>{
            setEpisodios(data.info.count)
        })
    }
  
    caracteres()
    Locaciones()
    episodio()

    return(
        <div>
                <h1 className="mt-28 mb-4 font-mono subpixel-antialiased text-6xl flex justify-center text-center">The Rick and Morty API</h1>
            <div className='sm:flex sm:justify-center sm:space-x-6'>
                <h1 className=" font-mono subpixel-antialiased text-lg flex justify-center ">Characters:{personajes}</h1>
                <h1 className=" font-mono subpixel-antialiased text-lg flex justify-center ">Locations:{ubicaciones}</h1>
                <h1 className="mb-28 font-mono subpixel-antialiased text-lg flex justify-center">Episodes:{episodios}</h1>
            </div>
        </div>
    )
}