import React, { useState} from 'react'
import {useHistory} from 'react-router-dom'
import { TransactionContainer } from './Transaction'
import styled from "styled-components"

const FormElement = styled.span`
    margin: 1rem;
    input, select {
        background-color: lightgray;
    }
`;

const NewTransaction = ({addTransaction}) => {



    const {push} = useHistory();
    const [actDesc, setActDesc] = useState("");
    const [actAmount, setActAmount] = useState("");
    const [actCurr, setActCurr] = useState("CZK");

    const addActual = () => {
        const actDir = actAmount > 0 ? "IN" : "OUT";
        addTransaction({ description: actDesc, amount: actAmount, currency: actCurr, direction: actDir });
        push("/");
    }

    return (
        <TransactionContainer>
            <FormElement>
                Description: 
                <input type="text" value={actDesc} 
                    onChange={(event) => setActDesc(event.target.value)} />
            </FormElement>
            <FormElement>
                Amount: 
                <input type="number" value={actAmount} 
                    onChange={(event) => setActAmount(event.target.value)} />
            </FormElement>
            <FormElement>
                Currency:
                <select value={actCurr} 
                    onChange={(event) => setActCurr(event.target.value)}>
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
