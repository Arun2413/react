

function Expensefiter(props){
    return(
        <div>
<p id="pa">Filter By Year</p>
<select id="se" onChange={props.onChange} value={props.value}>
    <option value='Select Year' >Select Year</option>
    <option value='2020' >2020</option>
    <option value='2021' >2021</option>
    <option value='2022' >2022</option>
    <option value='2023' >2023</option>
    <option value='2024'>2024</option>
</select>
</div>
    )
}

export default Expensefiter