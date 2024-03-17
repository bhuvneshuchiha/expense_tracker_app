import { useState, useEffect } from "react"
import { Balance } from "./Balance";

import '../App.css'
export function NewTransaction() {
  const [transaction, setTransaction] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    let iSum = 0;
    let eSum = 0;

    for (let i = 0; i < transaction.length; i++) {
      if (parseInt(transaction[i].amount) < 0) {
        eSum += parseInt(transaction[i].amount);
      } else {
        iSum += parseInt(transaction[i].amount);
      }
    }

    setIncome(iSum);
    setExpense(eSum);
  }, [transaction]);


  function addTransaction() {
    setTransaction([...transaction, {
      title: title,
      amount: amount
    }])
  }



  return <div className='transaction'>

    <Balance income={income} expense={-1 * expense} />

    <h2>Income - {income}</h2>
    <h2>Expense - {expense}</h2>

    <h2>History</h2>
    {transaction.map((trans, index) => {
      return <div key={index} className="historyDiv">
        <h2>{trans.title}</h2>
        <h2>{trans.amount}</h2>
      </div>
    })}

    <h2>Add new transaction</h2>
    <h3>Text</h3>
    <input type="text" placeholder="Enter text" onChange={(e) => {
      setTitle(e.target.value);
    }} /><br />
    <h3>Amount</h3>
    <p>(negative- expense, postive- income)</p>
    <input type="text" placeholder="Enter Amount" onChange={(e) => {
      setAmount(e.target.value);
    }} /><br /><br />
    <button onClick={addTransaction}>Add transaction</button>



  </div>



}
