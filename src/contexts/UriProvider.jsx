import React, {createContext, useState, useEffect} from "react"
import {useLocation} from "react-router-dom"
import DevHelper from "../helpers/DevHelper";
import _ from "lodash";

export const UriContext = createContext()

const UriProvider = (props) => {
    // Props
    const {children} = props;

    // React Hooks
    const location = useLocation()

    // States
    const [segments, setSegments] = useState([])
    const [controller, setController] = useState("")
    const [controllerAction, setControllerAction] = useState("")

    useEffect(() => {
        let segments = []
        let parts = location.pathname.split("/");
        parts.map((part) => {
            if ( !_.isEmpty(part) ) {
                segments.push(part)
            }
        })
        if ( segments[0] ) {
            setController(segments[0])
        }
        if ( segments[1] ) {
            setControllerAction(segments[1])
        }
        setSegments(segments)
    }, [location])


    const API = {
        segments,
        controller,
        controllerAction,
        uriString: location.pathname,
    }
    return <UriContext.Provider value={API} children={children}/>
}
export default UriProvider