
import Expensesitem from "./Expensesitem";
import Expensefiter from "./Expensefilter";
import { useState } from "react";
// var x= props.exe.array;
function Expense(props){
  const [click,setclick]=useState('Select Year')
  function val(event){
  setclick(event.target.value)
  // console.log(event.target.value)
  }
  const filteredyear = props.array.filter((y)=>{
    return y.date.getFullYear().toString() === click
  })
  // const filteredyear1 =props.array.filter((y)=>{
  //   return y.date.toString() === click})
    return(
        <div>
          <Expensefiter onChange={val} value={click}></Expensefiter>
         { click === 'Select Year' ? (props.array.map((a1)=>(
          <Expensesitem exp={a1}></Expensesitem>)) ) :
          (filteredyear.length === 0 ? (<h1 id="aaa">No Expense Found</h1>) : (filteredyear.map((a1)=>(
          <Expensesitem exp={a1}></Expensesitem>)) 
           ) )}
          
          {/* {filteredyear.map((a1)=>(
          <Expensesitem exp={a1}></Expensesitem>)) 
           } */}
      {/* <Expensesitem exp={props.array[0] }></Expensesitem>
      <Expensesitem exp={props.array[1]}></Expensesitem>
      <Expensesitem exp={props.array[2]}></Expensesitem> */}
      </div>
    )
}
export default Expense;