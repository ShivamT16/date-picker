import { useContext } from "react";
import { MonthArray, DateArray, DaysOfWeek } from "./Data/data"
import { DateContext } from "./Context/DateContext";

export const RDates = () => {
    const {
        repeat,setRepeat,status,setStatus,date,setDate,days,selection,setSelection,totalDays
    } = useContext(DateContext)

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
                <option>Daily</option>
            </select>

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

         <p>Or Select Days:</p>
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
          <input type="text" placeholder="Number of execution..." /> Execution </> }

          { repeat.end === "On Date" && <>
          <input type="date" onChange={(e) => setDate({...date,endDate: e.target.value})} /> </> }

     <br /> --------------------------------------------------
     
     <div>
     <p> Start Date- {date.startDate} | End Date- {date.endDate} </p> 
     <p> Repeat Start- {repeat.start} | Repeat End- {repeat.end} </p>
     <p> Month- {status.month} | Days- {status.days} | Date- {status.date} | Frequency- {status.frequency} | Execution- {status.execution} </p>
     <p> Selected Days- {days.join(" | ")} </p>
     </div>

    </div>
    )
}