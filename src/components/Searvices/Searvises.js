import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import poster1 from "../../poster.png"
import poster2 from "../../poster2.png"

import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import SinglePopuler from '../PopularCourses/SinglePopuler/SinglePopuler';


const element = <FontAwesomeIcon className="text-gray-100 text-3xl hover:te" icon={faCoffee} />



const Searvises = () => {
    const [populer, setPopuler] = useState()
    useEffect(() => {
        fetch("popular.json")
            .then(res => res.json())
            .then(data => setPopuler(data))
    }, [])





    return (

        <div div >
            <br /><br />
            <h1 className="text-gray-800 text-center font-bold text-5xl">Explore</h1>
            <h1 className="text-gray-800 font-bold text-center text-4xl">Our Searvises  </h1>


            <div className="flex justify-center">
                <div>
                    <div className="grid grid-cols-4 p-3">
                        {
                            populer?.map(single => <SinglePopuler data={single}></SinglePopuler>)
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

export default Searvises;