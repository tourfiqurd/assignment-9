import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon className="text-gray-100 text-3xl" icon={faCoffee} />


const SinglePopuler = (props) => {
    return (
        <div>
            <div className=" text-center py-4  items-center px-5 py-1 m-4 border-2 rounded-md bg-blue-600 hover:text-white">
                <div className="">
                    <h1 className="text-2xl">{element}</h1>

                </div>

                <div className="p-2 ">
                    <h1 className="text-2xl font-bold text-gray-200 ">{props.data.name}</h1>
                    <p className="text-1xl text-white">{props.data.desc}</p>
                </div>
            </div>


        </div>
    );
};

export default SinglePopuler;