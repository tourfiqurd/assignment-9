import React, { useEffect, useState } from 'react';

import SingleCourse from './../SingleCourse/SingleCourse';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("courses.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <div>
                <br /><br />
                <h1 className="text-gray-800 text-center font-bold text-5xl">Find the Right</h1>
                <h1 className="text-gray-800 text-center font-bold text-3xl">Online Course for you</h1>
                <p className="text-gray-300 text-center font-bold text-1xl">You don't have to struggle alone, you've got our assistance and help.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4">
                {
                    courses?.map(course => <SingleCourse data={course}></SingleCourse>)

                }
            </div>

        </div>
    );
};

export default Courses;