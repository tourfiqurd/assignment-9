import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import image from "../../20945183.jpg"

const MainTitle = () => {
    return (
        <div className="flex items-center  p-20">
            <div className="w-6/12">
                <h1 className="text-3xl font-extralight text-black">Access 2700+</h1>
                <h1 className="text-5xl font-bold text-indigo-900">Online yellow-shape Tutorial From Top Instructor.</h1>
                <h4 className="text-2xl font-light text-gray-500">Meet university,and cultural institutions, who'll share their experience.</h4>
                <Link to="/courses">
                    <button className="bg-indigo-900 rounded-sm mt-2 text-white font-bold px-3 py-2 shadow-sm hover:bg-red-900">View all course</button>
                </Link>

            </div>
            <div className="w-6/12">
                <img src={image} alt="" />

            </div>

        </div>
    );
};

export default MainTitle;