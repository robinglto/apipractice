import React from "react";

export function Cards (props){
    return(
        <div>
        <div className="mx-16 my-4  ">
            <div className="grid grid-cols-9 gasp-2  ">

            <h2 className="subpixel-antialiased text-xl  place-items-center p-3 text-black  col-start-1 col-end-2 "><strong>{props.key}</strong></h2>

            <div className="flex  sm:col-start-2 sm:col-end-5 col-start-1 col-end-3 ">
                <img className=" h-16  rounded-full" src={props.img} alt="imagen del personaje"/>
                <h2 className="subpixel-antialiased text-xl  place-items-center p-3 ">{props.name}</h2>
            </div>

                <div className="space-x-4 lg:col-start-5 lg:col-end-6 sm:col-start-6 sm:col-end-8 col-start-8 col-end-10 flex">               
                    <div>
                        <button className={`w-3 h-3 rounded-full ${
                                props.status!=='unknown'?
                                props.status==='Alive'? "bg-green-500": "bg-red-600":"bg-gray-400"}
                        `}></button>
                    </div>
                
                    <div className=" space-x-4 flex ">
                         <p>{props.status} </p>
                    </div>
                </div>


                <p className="lg:block hidden lg:col-start-6 lg:col-end-7 place-items-center">{props.species}</p>
                <p className="lg:col-start-7 hidden sm:block lg:col-end-9 place-items-center sm:col-start-8 smcol-end-10">{props.origin}</p>
                <hr className="col-start-1 col-end-10 mt-3  "></hr>
                
            </div>
        </div>
        </div>
    )
}