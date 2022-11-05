
// import Expensedate from './components/Expensedate'
import './App.css';
import Expense from './components/Expenses/Expense';
// import Expensefiter from './components/Expenses/Expensefilter';
import Newexpense from './components/Newexpense/Newexpense';
import { useState } from "react"
// import Expensesitem from './components/Expensesitem';

function App(op) {
  var array=[{date:new Date(2021,7,13),name:'Bank Loan',rs:'RS 2000'},{date:new Date(2021,12,24),name:'current bill',rs:'RS 5000'},{date:new Date(2023,0,14),name:'Water bill',rs:'RS 5000'}];
  const [arr,setarr]=useState(array)
  // var date ='August 2022 12'
  // var name ='Bank Loan'
  
  // var h1 ='Welcome to react'

  function app(call){
    setarr((a1)=>{
     return [call, ...a1]
    })
  console.log(op)
  }
  return (
    <div className="App">
      <Newexpense op2={app}></Newexpense><br/>
      <h1 id='s'>Welcome to react</h1>
      <div id='h'>
        
      <Expense array={arr}></Expense>
      {/* <Expensesitem exe={array[0]}></Expensesitem>
      <Expensesitem exe={array[1]}></Expensesitem>
      <Expensesitem exe={array[0]}></Expensesitem> */}
      </div><br/>
      

    </div>
  );
}

export default App;
