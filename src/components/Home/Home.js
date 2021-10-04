import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import image from "../../20945183.jpg"
import RigntCourse from '../HomeRightCourse/RigntCourse';
import MainTitle from '../MainTitle/MainTitle';
import Popular from '../PopularCourses/Popular';

const Home = () => {
    return (
        <div>
            <MainTitle></MainTitle>
            <Popular></Popular>
            <RigntCourse></RigntCourse>
        </div>

    );
};

export default Home;