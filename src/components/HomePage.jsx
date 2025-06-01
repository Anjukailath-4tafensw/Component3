import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/HomePage.css';

function HomePage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/courses')
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Courses</h1>    
            <div className="course-grid">
                {courses.map((course) => (
                <div key={course._id} className="course-box">
                    <div className="course-content">
                    <h2 className="course-title">{course.title}</h2>
                    <p className="course-description">{course.description}</p>
                    <p className="course-hours">Duration:{course.duration} hours</p>
                    <Link to={`/courses/${course._id}`}>View Details</Link>            
                    </div>
                </div>
                ))}
            </div>
    </div>       
  );
}

export default HomePage;
