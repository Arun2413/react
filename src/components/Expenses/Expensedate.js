// import Expensedate from "./Expensedate";
// import {useState} from 'react'
import './Expensedate.css'
function Expensedate(props){
  
const month = props.exp.date.toLocaleString('en-US',{month:'long'});
const date = props.exp.date.toLocaleString('en-US',{day:'2-digit'});
const year = props.exp.date.getFullYear()


    return(<div  id='a'>
    <p>{month}<br/> {year}<br/> {date}</p>
    </div>
    )
}
export default Expensedate;