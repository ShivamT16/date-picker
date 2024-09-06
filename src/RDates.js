import { useState } from "react";
import { MonthArray, DateArray, DaysOfWeek } from "./data"

export const RDates = () => {
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
    // console.log(days)

    return(
        <div>
            <h3> Start Date </h3>
            <input type="date" onChange={(e) => setDate({...date,startDate: e.target.value})} />
            <br />
            <h3> Repeat </h3>
            <select onChange={(e) => setRepeat({...repeat,start: e.target.value})} >
                <option>Yearly</option>
                <option>Monthly</option>
                <option>Weekly</option>
            </select>
            <br />

        <br /> --------------------------------------------------      

      { repeat.start === "Yearly" && <div>
            <input type="radio" name="yearly" value={"ON"} onChange={(e) => setSelection(e.target.value)} /> On Month:
            <select onChange={(e) => setStatus({...status, month: e.target.value})} disabled={selection === "ON" ? false : true}>
            { MonthArray.map((month) => <option>{month}</option>) }
            </select>
            Date:
            <select onChange={(e) => setStatus({...status, date: e.target.value})} disabled={selection === "ON" ? false : true}>
            { DateArray.map((date) => <option>{date}</option> ) }
            </select> 

            <br />
            <br />
            
            <input type="radio" name="yearly" value={"ON-THE"} onChange={(e) => setSelection(e.target.value)} /> On the Occurence of:
            <select onChange={(e) => setStatus({...status, frequency: e.target.value})} disabled={selection === "ON" ? true : false}>
            <option>First</option>
            <option>Second</option>
            <option>Third</option>
            <option>Fourth</option>
            <option>Last</option>
            </select>
            Day:
            <select onChange={(e) => setStatus({...status, days: e.target.value})} disabled={selection === "ON" ? true : false}>
            { DaysOfWeek.map((days)=> <option>{days}</option> ) }
            </select>
            of Month:
            <select onChange={(e) => setStatus({...status, month: e.target.value})} disabled={selection === "ON" ? true : false}>
            { MonthArray.map((month) => <option>{month}</option> ) }
            </select>
      </div> }

      { repeat.start === "Monthly" && <div>
       Every <input type="text" placeholder="First, Second month...." /> month
       <br />
       
       <input type="radio" name="monthly" value={"ON"} onChange={(e) => setSelection(e.target.value)} /> On Date:
            <select onChange={(e) => setStatus({...status, date: e.target.value})} disabled={selection === "ON" ? false : true}>
            {  DateArray.map((date) => <option>{date}</option> ) }
            </select> 
        <br />
            <input type="radio" name="monthly" value={"ON-THE"} onChange={(e) => setSelection(e.target.value)} /> On the Occurence of

            <select onChange={(e) => setStatus({...status, frequency: e.target.value})} disabled={selection === "ON" ? true : false}>
            <option>First</option>
            <option>Second</option>
            <option>Third</option>
            <option>Fourth</option>
            <option>Last</option>
            </select>
            Day: 
            <select onChange={(e) => setStatus({...status, days: e.target.value})} disabled={selection === "ON" ? true : false}>
            { DaysOfWeek.map((days)=> <option>{days}</option> ) }
            </select>

      </div> }

      { repeat.start === "Weekly" && <div>
            Every <input type="text" placeholder="First, Second week...." /> Week

            <br />
            <br />
         OR Select Days:
            {
                DaysOfWeek.map((day)=> <button style={{backgroundColor: days.includes(day) ? "blue" : "" }} onClick={(e) => totalDays(day)} > {day} </button> )
            }
      </div> }

      <br /> --------------------------------------------------

        <h3> End </h3>
          <select onChange={(e) => setRepeat({...repeat, end: e.target.value})}>
          <option>Never</option>   
          <option>After</option>   
          <option>On Date</option>   
          </select>   

          { repeat.end === "After" && <>
          <input type="text" /> Execution </> }

          { repeat.end === "On Date" && <>
          <input type="date" onChange={(e) => setDate({...date,endDate: e.target.value})} /> </> }

     <br />------------------------
     <p> {date.startDate} || {date.endDate} </p> 
     <p> {repeat.start} {repeat.end} </p>
     <p> {status.month} {status.days} {status.date} {status.frequency} {status.execution} </p>
     <p> {days.join(" | ")} </p>

    </div>
    )
}