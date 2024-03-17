
import '../App.css'
export function Balance(props) {


  return <div className="balanceDiv">
    <h2>Your Balance </h2><br />
    <h2>{props.income - props.expense}</h2>


  </div>



}
