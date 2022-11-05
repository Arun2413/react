import { useState } from 'react'
import './Expenseform.css'
function Expenseform(props){
const [title,settitle]=useState('');
const [amount,setamount]=useState('');
const [date,setdate]=useState('');

const result=(event)=>{
    event.preventDefault();
    settitle('' )
    setdate('' )
    setamount( '')
    let opg={name:title,rs:amount,date:new Date(date)}
    props.op1(opg)

}
function titleChange(event){
    settitle(event.target.value)}
    function amountChange(event){
    setamount(event.target.value)}
    function dateChange(event){
    setdate(event.target.value)
}  

    return(
        <form>
            
        <div>
            <div id="x">
                <div id='n'>
                <div><label>title</label><br/>
                <input type='text' value={title} onChange={titleChange}></input><br/></div>
                <div id='m'><label>Amount</label><br/>
                <input type='number' value={amount} onChange={amountChange} ></input><br/></div></div>
                <div id='p'><label>Date</label><br/>
                <input type='date' value={date} onChange={dateChange}></input></div>
                <button id="y" type='button' onClick={props.f}>Cancel</button>
                <button id='z' type='submit' onClick={result}>Add Expense</button>
            </div>
        </div></form>
    )
}
export default Expenseform