import React, { useState} from 'react'
import {useHistory} from 'react-router-dom'

const NewTransaction = ({addTransaction}) => {
    const {push} = useHistory();
    const [actTransaction, setActTransaction] = useState({ description: "test", amount: 0, currency: "CZK", direction: "OUT" });

    const addActual = () => {
        actTransaction.amount > 0 ? actTransaction.direction = "IN" : actTransaction.direction = "OUT";
        addTransaction(actTransaction);

        push("/");
    }

    return (
        <div>
            <span>Description: <input type="text" value={actTransaction.description} 
                onChange={(event) =>  setActTransaction({...actTransaction, description: event.target.value})} /></span>
            <span>Amount: <input type="number" value={actTransaction.amount} 
                onChange={(event) => setActTransaction({...actTransaction, amount: event.target.value})} /></span>
            <span>Currency:
            <select value={actTransaction.currency} 
                onChange={(event) => setActTransaction({...actTransaction, currency: event.target.value})}>
                    <option value='CZK'>CZK</option>
                    <option value='EUR'>EUR</option>
                    <option value='USD'>USD</option>
            </select>
            </span>

            <button onClick={addActual}>Add</button>
        </div>
    )
}

export default NewTransaction
