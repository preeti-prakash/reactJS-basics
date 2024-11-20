import Person from "./Person";
function NameList() {
  const names = ["Preeti", "junnu", "bhanu", "preeti"];
  const persons = [
    { id: 1, name: "preeti", age: 28, skill: "React" },
    { id: 2, name: "junnu", age: 2, skill: "Playing" },
    { id: 3, name: "bhanu", age: 32, skill: "Angular" },
    { id: 4, name: "ironman", age: 45, skill: "Flying" },
    { id: 5, name: "black panther", age: 43, skill: "Speed" },
    { id: 6, name: "hulk", age: 42, skill: "Strength" },
  ];

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} - {name}
    </h2>
  ));
  return (
    <div>
      {/* {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))} */}
      <h2>{nameList}</h2>
    </div>
  );
}

export default NameList;

//rendering list of elemnts using map()
//specifying key attribute to ensure each elemnt in the list holds a stable identity
