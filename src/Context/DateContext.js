import { createContext, useState } from "react";

export const DateContext  = createContext();

export const DateProvider = ({children}) => {
    
    const [repeat, setRepeat] = useState({
        start: "Yearly",
        end: "Never"
    })
    const [status, setStatus] = useState({
        month: "",
        days: "",
        date: "",
        frequency: "",
        execution: "",
    })
    const [date, setDate] = useState({
        startDate: "",
        endDate: ""
    })
    const [days,setDays] = useState([])
    const [selection, setSelection] = useState("ON");
    
    const totalDays = (selectedDays) => {
        days.includes(selectedDays) ? 
        setDays(days.filter((day) => day !== selectedDays)) :
        setDays([...days,selectedDays])
    }

    const value = {
        repeat,setRepeat,status,setStatus,date,setDate,days,setDays,selection,setSelection,totalDays
    }

    return(
        <DateContext.Provider value={value} >
            {children}
        </DateContext.Provider>
    )
}