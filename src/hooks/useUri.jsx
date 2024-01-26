import {useContext} from "react"
import {UriContext} from "../contexts/UriProvider"

export const useUri = () => {
    const {
        segments,
        controller,
        controllerAction,
        uriString,
    } = useContext(UriContext)
    return {
        segments,
        controller,
        controllerAction,
        uriString,
    }
}