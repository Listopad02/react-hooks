import { useState } from "react"
import { useEffect } from "react/cjs/react.development"

function useLogger(value) {
    useEffect(() => {
        console.log('Current value:', value)
    }, [value]) 
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = e => {
        setValue(e.target.value)
    }

    const clear = () => setValue('')

    return {
        bind: {value, onChange},
        value,
        clear
    }
} 

function App() {
    const input = useInput('')
    const lastName = useInput('')

    useLogger(input.value)

    return (
        <div>
            {/* <input type="text" value={input.value} onChange={input.onChange} /> */}
            {/* instead of previous string */}
            <input type="text" {...input.bind} />
            <input type="text" {...lastName.bind} />
            <button onClick={() => {
                input.clear()
                lastName.clear()
            }}>Clear inputs</button>
            <hr />
            <h1>{input.value} {lastName.value}</h1>
        </div> 
    )
}

export default App;