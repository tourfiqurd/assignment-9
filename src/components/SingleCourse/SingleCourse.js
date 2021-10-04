import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = (props) => {
    const { name, img, lessons, type, price, ranking, instractor } = props.data

    return (
        <div className="p-3 shadow-md mt-3 text-center">
            <img className="w-12/12" src={img} alt="" />
            <h2 className="text-indigo-900 font-bold text-2xl p-2">{name}</h2>
            <hr />
            <p className="text-gray-500 font-bold text-xl p-2">{lessons}</p>
            <hr />
            <p className="text-gray-500 font-bold text-xl p-2">Type: {type}</p>
            <hr />
            <p className="text-gray-500 font-bold text-xl p-2">Price: {price}</p>
            <hr />

            <p className="text-gray-500 font-bold text-xl p-2">Ranking: {ranking}</p>
            <hr />
            <p className="text-gray-500 font-bold text-xl p-2">Instractor: {instractor}</p>
            <div className="flex justify-center">

                <Link to="/home">
                    <br />

                    <button className="text-purple-50 bg-purple-900 px-5 py-2">Enroll Now</button>
                </Link>

            </div>

        </div>
    );
};

export default SingleCourse;