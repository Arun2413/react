import Expensedate from "./Expensedate";
import Card from "../UI/Card"
import './Expensesitem.css'
function Expensesitem(props){
    return(
        <div>
       {/* <h2 id="a">{props.d}</h2>
       <h2 id="b">{props.e}</h2>
       <h2 id='c'>{props.f}</h2> */}
       <Card id='aj'>
        <Expensedate exp={props.exp}></Expensedate>
       <h2 id='b'>{props.exp.name}</h2>
       <h2 id='c'>{props.exp.rs}</h2>
       </Card><br/>
       </div>
    )
}
export default Expensesitem;