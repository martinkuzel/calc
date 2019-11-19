import React, {useState, useEffect} from "react";
import Navigation from "./Navigation";
import TransactionList from "./TransactionList";
import Pagination from "./Pagination";
import NewTransactionButton from "./NewTransactionButton";
import NewTransaction from "./NewTransaction";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Graph from "./Graph";

const data = [
  { description: "Vypalny", amount: 5000, currency: "CZK", direction: "OUT" },
  { description: "Vyplata", amount: 1000, currency: "EUR", direction: "IN" },
  { description: "Kniha javascript v praxi", amount: 256, currency: "CZK", direction: "OUT" }
];


const MyApp = () => {
  const [filter, setFilter] = useState('ALL');
  const [transactionData, setTransactionData] = useState(data);
  const [transactionDataView, setTransactionDataView] = useState(data);
  const [graph, setGraph] = useState(false);

  const addTransaction = (transaction) => {
    console.log('addTr', transaction)
    setTransactionData(
      [...transactionData, transaction]
    );
  }

  const removeTransaction = (transaction) => {
    setTransactionData(transactionData.filter(tr => tr !== transaction));
  } 

  const applyFilter = () => {
    console.log('trData', transactionData);

    const actTransactions = transactionData.filter(
      transaction => transaction.direction === filter || "ALL" === filter
    );
  
    setTransactionDataView(actTransactions);
  }

  const toggleGraph = (value) => {
    setGraph(value);
  }

  useEffect(() => {
    applyFilter();
  }, [transactionData, filter]) // QA: checkstyle ? useCallBack

  return (
    <div>

      <BrowserRouter>
        <Navigation setNewFilter={setFilter} graph={graph}/>

        <Switch>
          <Route path='/graph'
            render={() => <Graph toggleGraph={toggleGraph}></Graph> }
          ></Route>

          <Route path='/add'
            render={() => <NewTransaction addTransaction={addTransaction}></NewTransaction> }
          ></Route>

          <Route path='/' render={ () => 
              <TransactionList transactionData={transactionDataView} removeTransaction={removeTransaction} toggleGraph={toggleGraph} />}
          >
          </Route>
        </Switch>

        {/* <Pagination /> */}
        <NewTransactionButton addTransaction={addTransaction} />
      </BrowserRouter>

    </div>
  );
}

export default MyApp;
