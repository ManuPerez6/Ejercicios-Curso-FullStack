const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Manuel";
  const age = 20;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Manu" age={10 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
