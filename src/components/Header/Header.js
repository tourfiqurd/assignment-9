import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../logo2.png"

const Header = () => {
    return (
        <div className="bg-gray-700 shadow-2xl py-1 flex justify-between items-center ">
            <div className="flex items-center">
                <img className="pl-3" width="50px" src={logo} alt="" />
                <p className="text-3xl uppercase font-bold pl-4 text-white"><span className="text-red-400">Edu</span>cation    !</p>
            </div>
            <div className="px-5">
                <Link className="text-1xl text-white px-2" to="/home">Home</Link>
                <Link className="text-1xl text-white px-2" Link to="/Searvices" > Searvices</Link >
                <Link className="text-1xl text-white px-2" to="/courses">Courses</Link>
                <Link className="text-1xl text-white px-2" to="/contact">Contract</Link>
                <Link to="/contact"><button className="text-1xl bg-red-400 hover:bg-red-600 hover:text-white rounded-sm mx-5 px-4 py-2  bg-red-50 px-2">
                    Try It Now</button></Link>
            </div>

        </div >
    );
};

export default Header;