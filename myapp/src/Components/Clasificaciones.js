import React from "react";


export  function Clasificaciones (){
    return(
        
        <div className="mx-16 my-16   ">
            <div className="grid grid-cols-8 gasp-2 ">
                <p className="subpixel-antialiased  text-xl text-center sm:col-start-2 sm:col-end-3 col-start-1 scol-end-2"><strong>Coleciones</strong></p>
                <p className="lg:col-start-4 lg:col-end-5 sm:pl-12 lg:pl-1  sm:col-start-4 sm:col-end-6 col-start-6 col-end-8 subpixel-antialiased  text-xl text-center ml-10"><strong>Status</strong></p>
                <p className="lg:col-start-5 lg:col-end-6 subpixel-antialiased  text-xl text-center ml-10 lg:block hidden"><strong>Species</strong></p>
                <p className="lg:col-start-6 lg:col-end-7 sm:col-start-7 sm:col-end-8 subpixel-antialiased  text-xl text-center sm:block hidden  "><strong>Origin</strong></p>
            </div>
        </div>
    )
}