import { useAlert } from "./alert/AlertContext"

export default function Main() {
    const {toggle} = useAlert()
    return (
        <>
            <h1>"Hello" in example with Context</h1>
            <button onClick={toggle}>Show alert</button>
        </>
    )
}