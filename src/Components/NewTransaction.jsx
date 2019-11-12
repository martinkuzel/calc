import React, { useState} from 'react'
import {useHistory} from 'react-router-dom'
import { TransactionContainer } from './Transaction'
import styled from "styled-components"

const NewTransaction = ({addTransaction}) => {
    const FormElement = styled.span`
        /* margin: 1rem auto; */
        /* input, select { */
            /* background-color: lightgray; */
        /* } */
    `;


    const {push} = useHistory();
    const [actTransaction, setActTransaction] = useState({ description: "test", amount: 0, currency: "CZK", direction: "OUT" });

    const addActual = () => {
        actTransaction.amount > 0 ? actTransaction.direction = "IN" : actTransaction.direction = "OUT";
        addTransaction(actTransaction);

        push("/");
    }

    return (
        <TransactionContainer>
            <FormElement>
                Description: 
                <input type="text" value={actTransaction.description} 
                    onChange={(event) =>  setActTransaction({...actTransaction, description: event.target.value})} />
            </FormElement>
            <FormElement>
                Amount: 
                <input type="number" value={actTransaction.amount} 
                    onChange={(event) => setActTransaction({...actTransaction, amount: event.target.value})} />
            </FormElement>
            <FormElement>
                Currency:
                <select value={actTransaction.currency} 
                    onChange={(event) => setActTransaction({...actTransaction, currency: event.target.value})}>
                        <option value='CZK'>CZK</option>
                        <option value='EUR'>EUR</option>
                        <option value='USD'>USD</option>
                </select>
            </FormElement>

            <button onClick={addActual}>Add</button>
        </TransactionContainer>
    )
}

export default NewTransaction
