function test() {
  var name = "Saketh";
  var age = 20;
  var year="UG3";
  return {name,age,year};
}

function Greet() {
  const data = test();
  console.log(data.name);
  console.log(data.age);
  console.log(data.year); 
  return (
    <>
      <h1>Hello, {data.name}!</h1>
      <p> You are {data.age} years old </p>
      <p>You looks like {data.year} UG3 Student</p>
    </>
  );
}

export default Greet;