import React from 'react';
import Header from './components/Header'

export const MyContext = React.createContext()

// import RefTodo from './components/RefTodo'
// import ClasRef from './components/ClasRef';
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
      {/* <RefTodo /> */}
      {/* <ClasRef/> */}
      <MyContext.Provider value={'krishna'}>
        <Header />
      </MyContext.Provider>

    </div>
  );
};

export default App;