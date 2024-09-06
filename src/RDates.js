import { useState } from "react";

export const RDates = () => {

    const MonthArray = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
    const DateArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const DaysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday','Weekdays', 'Weekends'];

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
            <input type="date" onChange={(e) => setDate({startDate: e.target.value})} />
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
            <input type="radio" name="yearly" value={"ON"} onChange={(e) => setSelection(e.target.value)} /> on
            <select onChange={(e) => setStatus({...status, month: e.target.value})} disabled={selection === "ON" ? false : true}>
            { MonthArray.map((month) => <option>{month}</option>) }
            </select>
            <select onChange={(e) => setStatus({...status, date: e.target.value})} disabled={selection === "ON" ? false : true}>
            { DateArray.map((date) => <option>{date}</option> ) }
            </select> 

            <br />
            
            <input type="radio" name="yearly" value={"ON-THE"} onChange={(e) => setSelection(e.target.value)} /> on the
            <select onChange={(e) => setStatus({...status, frequency: e.target.value})} disabled={selection === "ON" ? true : false}>
            <option>First</option>
            <option>Second</option>
            <option>Third</option>
            <option>Fourth</option>
            <option>Last</option>
            </select>
            <select onChange={(e) => setStatus({...status, days: e.target.value})} disabled={selection === "ON" ? true : false}>
            { DaysOfWeek.map((days)=> <option>{days}</option> ) }
            </select>
            of
            <select onChange={(e) => setStatus({...status, month: e.target.value})} disabled={selection === "ON" ? true : false}>
            { MonthArray.map((month) => <option>{month}</option> ) }
            </select>
      </div> }

      { repeat.start === "Monthly" && <div>
       every <input type="text" />
       <br />
       <input type="radio" name="monthly" value={"ON"} onChange={(e) => setSelection(e.target.value)} /> on day
            <select onChange={(e) => setStatus({...status, date: e.target.value})} disabled={selection === "ON" ? false : true}>
            {  DateArray.map((date) => <option>{date}</option> ) }
            </select> 
        <br />
            <input type="radio" name="monthly" value={"ON-THE"} onChange={(e) => setSelection(e.target.value)} /> on the

            <select onChange={(e) => setStatus({...status, frequency: e.target.value})} disabled={selection === "ON" ? true : false}>
            <option>First</option>
            <option>Second</option>
            <option>Third</option>
            <option>Fourth</option>
            <option>Last</option>
            </select>

            <select onChange={(e) => setStatus({...status, days: e.target.value})} disabled={selection === "ON" ? true : false}>
            { DaysOfWeek.map((days)=> <option>{days}</option> ) }
            </select>

      </div> }

      { repeat.start === "Weekly" && <div>
            every <input type="text" placeholder="1" /> weeks

            <br />

            {
                DaysOfWeek.map((day)=> <button style={{border: days.includes(day) ? "" : "" }} onClick={(e) => totalDays(day)} > {day} </button> )
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
          <input type="date" onChange={(e) => setDate({endDate: e.target.value})} /> </> }

    </div>
    )
}