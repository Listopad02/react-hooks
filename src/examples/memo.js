import { useState, useEffect, useMemo } from "react";

function complexCompute(number) {
    console.log('complexCompute')
    let i = 0
    while (i < 1000000000) i++
    return number * 2
}

function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])

    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    useEffect(() => {
        console.log('styles changed')
    }, [styles])
    
    return (
        <div>
            <h1 style={styles}>Computed number: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>Add</button>
            <button onClick={() => setNumber(prev => prev - 1)}>Sub</button>
            <button onClick={() => setColored(prev => !prev)}>Change</button>
        </div>
    )
}

export default App;