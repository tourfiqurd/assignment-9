import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from "../../404.jpg"

const NotFound = () => {
    return (
        <div style={{ height: "500px" }} className=" flex items-center justify-center">
            <div>
                <br /><br /><br />
                <img width="400px" src={errorImage} alt="" />
                <p className="text-5xl uppercase font-bold pl-4 text-black"><span className="text-red-400">4</span>04</p>

                <p className="text-2xl  font-bold pl-4 text-gray-500">opps! the page you are looking for does not exist</p><br />
                <Link to="/home"><button className="text-1xl bg-red-400 hover:bg-red-600 hover:text-white rounded-sm mx-5 px-4 py-2  bg-red-50 px-2">
                    Go to Home Page</button></Link>
                <br /><br /><br />
            </div>

        </div>
    );
};

export default NotFound;