import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import poster1 from "../../poster.png"
import poster2 from "../../poster2.png"

import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import SinglePopuler from './SinglePopuler/SinglePopuler';
import Searvises from './../Searvices/Searvises';


const element = <FontAwesomeIcon className="text-gray-100 text-3xl hover:te" icon={faCoffee} />



const Popular = () => {
    const [populer, setPopuler] = useState()
    useEffect(() => {
        fetch("popular.json")
            .then(res => res.json())
            .then(data => setPopuler(data))
    }, [])
    const newPopuler = populer?.slice(0, 4)





    return (

        <div div >
            <h1 className="text-gray-800 text-center font-bold text-5xl">Explore</h1>
            <h1 className="text-gray-800 font-bold text-center text-4xl">Our Popular Searvises  </h1>


            <div className="flex justify-center">
                <div>
                    <div className="flex items-center justify-center p-3">
                        {
                            newPopuler?.map(single => <SinglePopuler data={single}></SinglePopuler>)
                        }



                    </div>
                    <div className="flex ">
                        <img className="w-6/12 p-5" src={poster1} alt="" />
                        <img className="w-6/12 p-5" src={poster2} alt="" />
                    </div>

                </div>
            </div>

        </div >
    );
};

export default Popular;