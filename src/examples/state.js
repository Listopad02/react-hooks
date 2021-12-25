import { useState } from "react";

function computeInitialCounter() {
    console.log('Some calculations...');
    return Math.trunc(Math.random() * 20);
}

function App() {
    // const [counter, setCounter] = useState(0)
    // const [counter, setCounter] = useState(computeInitialCounter())
    const [counter, setCounter] = useState(() => {
        return computeInitialCounter()
    }) 

    const [state, setState] = useState({
        title: 'counter',
        date: Date.now()
    })

    function increment() {
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        setCounter((prevCounter) => {
            return prevCounter + 1
        })
        //setCounter(prev => prev + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    function updateTitle() {
        setState(prev => {
            return {
                ...prev,
                title: 'New title'
            }
        })
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Sub</button>
            <button onClick={updateTitle}>Change title</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    )
}

export default App;