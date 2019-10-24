import React from "react";
import "./App.css";
import Pagination from "./Components/Pagination";
import Navigation from "./Components/Navigation";
import TransactionList from "./Components/TransactionList";
import NewTransactionButton from "./Components/NewTransactionButton";
import Store from "./Store";

function App() {
  const transactionData = [
    { description: "Vyplany", amount: 5000, currency: "CZK", direction: "OUT" },
    { description: "Vyplata", amount: 1000, currency: "EUR", direction: "IN" },
    {
      description: "Kniha javascript v praxi",
      amount: 256,
      currency: "CZK",
      direction: "OUT"
    }
  ];

  this.setState = {
    filter: "ALL"
  };

  let filter = "ALL";

  const store = new Store();

  return (
    <div className="App">
      <Navigation filter={store} />
      <TransactionList transactionData={transactionData} filter={store} />
      <Pagination />
      <NewTransactionButton />
      {filter}
    </div>
  );
}

export default App;
