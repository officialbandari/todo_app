import React from 'react';
import RefTodo from './components/RefTodo'


// import Todo from './components/Todo'
// import ClassTodo from './components/ClassTodo'


const App = () => {

  // const myObj = {
  //   name: 'krishna',
  //   age: 29,
  //   job: 'softwareEngineer'
  // }
  //const [data, setData] = React.useContext(myObj)

  return (
    <div className="App" style={{ textAlign: "center" }}>
      {/* <Todo />
      <ClassTodo /> */}
      <RefTodo />

    </div>
  );
};

export default App;