import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
import './Card.css'

const Card = (props) => {
    let course = props.course;
    let likedCourse = props.likedCourse;
    let setLikedCourse = props.setLikedCourse;

    function clickHandler() {
        if (likedCourse.includes(course.id)) {
            // already liked
            setLikedCourse((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("like removed");
        }
        else {
            // insert like new course
            if (likedCourse.length === 0) {
                setLikedCourse([course.id])
            }
            else {
                // non-empty liked course
                setLikedCourse((prev) => [...prev, course.id])
            }
            toast.success("Liked Successfully")
        }
    };

    return (
        <div className="course-card">
            <div className="img">
                <img src={course.image.url} alt="courses imge" />
                <div>
                    <button className="like" onClick={clickHandler}>
                        {
                            likedCourse.includes(course.id) ? (<FcLikePlaceholder font-size="1.75rem" />) :
                                (<FcLike fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>

            <div className=''>
                <p className="course-title">{course.title}</p>
                <p className="course-description">
                    {
                        course.description.length > 100 ?
                            (course.description.substr(0, 100)) + "..." :
                            (course.description)
                    }
                </p>
            </div>
        </div>
    );
}
export default Card;