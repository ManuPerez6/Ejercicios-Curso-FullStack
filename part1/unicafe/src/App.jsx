const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Part = (props) => {
    return (
      <div>
        <p>
          {props.part}, {props.exercises}
        </p>
      </div>
    );
  };

  const Content = () => {
    return (
      <div>
        <Part part={parts[0].name} exercises={parts[0].exercises} />
        <Part part={parts[1].name} exercises={parts[1].exercises} />
        <Part part={parts[2].name} exercises={parts[2].exercises} />
      </div>
    );
  };

  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.numberOfExercises}</p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total
        numberOfExercises={
          parts[0].exercises + parts[1].exercises + parts[2].exercises
        }
      />
    </div>
  );
};

export default App;
