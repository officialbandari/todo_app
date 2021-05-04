import React, { useState, useEffect } from 'react';


function Todo() {

    const [inputdata, setInputData] = useState('')
    const [item, setItem] = useState([])

    const addTod = () => {
        setItem([...item, inputdata])
        setInputData('')
    }

    const removeItem = (id) => {
        const results = item.filter((val, ind) => {
            return ind !== id
        })
        setItem(results)
    }
    useEffect(() => {

        setInputData(inputdata)

    }, [inputdata])


    return (
        <div className="App">
            <h1>TodoFunction </h1>
            <input
                type="text"
                value={inputdata}
                onChange={(e) => setInputData(e.target.value)}
            />
            <button onClick={addTod}>addTodo</button>
            <br />
            {inputdata}
            <br />
            {item.map((val, ind) => {
                return (<div key={ind}>
                    {val}
                    <button onClick={() => removeItem(ind)}>X</button>
                </div>)
            })}
        </div>
    );
}

export default Todo;
