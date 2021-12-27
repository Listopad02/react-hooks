import { useAlert } from "./AlertContext"

export default function Alert() {
    const alert = useAlert()

    if (!alert.visible) return null

    return (
        <div onClick={alert.toggle}>
            This is very and very important message
        </div>
    )
}