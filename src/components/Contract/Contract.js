import React from 'react';
import { Link } from 'react-router-dom';

const Contract = () => {
    return (
        <div>
            <div>
                <br /><br />
                <h1 className="text-gray-800 text-center font-bold text-5xl">Stay With Us</h1>
                <h1 className="text-gray-800 text-center font-bold text-3xl">Fill Out This Form</h1>

            </div>
            <div className="text-center p-6">
                <form action="">
                    <input className="border-2 p-2 m-2" placeholder="Please Enter Your Name Here" size="50" type="email" /><br />
                    <input className="border-2 p-2 m-2" placeholder="Please Enter Your Name Here" size="50" type="password" /><br />
                    <textarea placeholder="Please Enter Your Comment Here" className="border-2 p-2 m-2 resize-none" name="" id="" cols="52" rows="10"></textarea><br />
                    <Link to="/contact"><button className="text-1xl bg-red-400 hover:bg-red-600 hover:text-white rounded-sm mx-5 px-4 py-2  bg-red-50 px-2">
                        Submit Now</button></Link>

                </form>

            </div>
        </div>
    );
};

export default Contract;