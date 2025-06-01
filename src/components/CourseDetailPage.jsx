import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CoursePage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/courses/${id}`)
      .then(res => setCourse(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <div>
      <Link to="/">Go Back</Link>
      <h1>{course.title}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Duration:</strong> {course.duration} hours</p>
      <p><strong>Category:</strong> {course.category}</p>
    </div>
  );
}

export default CoursePage;
