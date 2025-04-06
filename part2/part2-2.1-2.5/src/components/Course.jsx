/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ name }) => <h1>{name}</h1>;

Header.propTypes = {
    name: PropTypes.string.isRequired,
};

const Part = ({ name, exercises }) => (
    <p>
        {name} {exercises}
    </p>
);

Part.propTypes = {
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired,
};

const Content = ({ parts }) => (
    <div>
        {parts.map(part => (
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
    </div>
);

Content.propTypes = {
    parts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            exercises: PropTypes.number.isRequired,
        })
    ).isRequired,
};

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
    return <p><b>total of {total} exercises</b></p>;
};

Total.propTypes = {
    parts: PropTypes.arrayOf(
        PropTypes.shape({
            exercises: PropTypes.number.isRequired,
        })
    ).isRequired,
};

const Course = ({ course }) => (
    <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
);

Course.propTypes = {
    course: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        parts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                exercises: PropTypes.number.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

const Courses = ({ courses }) => (
    <div>
        {courses.map(course => (
            <Course key={course.id} course={course} />
        ))}
    </div>
);

Courses.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            parts: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    exercises: PropTypes.number.isRequired,
                })
            ).isRequired,
        })
    ).isRequired,
};

export default Courses;