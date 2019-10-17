import React from "react";
import "./App.css";
import Pagination from "./Components/Pagination";
import Navigation from "./Components/Navigation";
import TransactionList from "./Components/TransactionList";
import NewTransactionButton from "./Components/NewTransactionButton";

function App() {
  return (
    <div className="App">
      <Navigation />
      <TransactionList />
      <Pagination />
      <NewTransactionButton />
    </div>
  );
}

export default App;
