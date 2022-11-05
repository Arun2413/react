import { useState } from "react";
import Expenseform from "./Expenseform";

function Newexpense(props){

function output(opg){
    // console.log('in newexp')
    // console.log(opg);
    props.op2(opg)
} 
const [initial,final]=useState(false)
function sub(){
    final(true)
}
function cancel(){
    final(false)
}
 

 const output1 = <Expenseform f={cancel} op1={output}></Expenseform>
 
    return(
        <div>
        <h1 id="s">Expense App</h1>
        { initial ? (output1) : (<button id="r" onClick={sub}>Add New Expense</button>) }
        
        </div>
    )
}

export default Newexpense