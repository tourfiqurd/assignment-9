import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../logo2.png"

const Footer = () => {
    return (

        <div >
            <br />
            <br />
            <br />
            <div className="bg-gray-700 flex justify-between items-center">
                <div className="w-2/12">
                    <img className="w-52 p-7" src={logo} alt="" />


                </div>
                <div className="w-6/12">
                    <div>
                        <p className="text-3xl uppercase font-bold pl-4 text-center text-white"><span className="text-white">Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best. </span></p><br />

                        <h1 className="text-center text-white" >© 2022 Education, All Rights Reserved. Design By us </h1>
                    </div>
                </div>


                <div className="w-4/12 p-4 text-center">
                    <p className="text-5xl uppercase font-bold pl-4 text-white"><span className="text-red-400">Edu</span>cation    !</p>
                    <br />
                    <input className="p-5" type="text" placeholder="Plese write Your Comment" />
                    <Link className="text-1xl p-5 bg-purple-900 text-white px-2" to="/home">Subscribe</Link><br />



                </div>
            </div>


        </div>
    );
};

export default Footer;