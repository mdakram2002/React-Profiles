import React, { useState } from "react";
import Card from "./Card"
import './Cards.css';


const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourse, setLikedCourse] = useState([]);

    function getCourse() {
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            //we want to access specific data array/pass;
            return courses[category];
        }
    }



    return (
        <div className="cards">
            {
                getCourse().map((course) => {
                    return (
                        <Card key={course.id}
                            course={course}
                            likedCourse={likedCourse}
                            setLikedCourse={setLikedCourse} />
                    )
                })
            }
        </div>
    );
}
export default Cards;