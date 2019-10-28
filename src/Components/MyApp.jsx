import React from "react";
import Navigation from "./Navigation";
import TransactionList from "./TransactionList";
import Pagination from "./Pagination";
import NewTransactionButton from "./NewTransactionButton";

class MyApp extends React.Component {
  transactionData = [
    { description: "Vyplany", amount: 5000, currency: "CZK", direction: "OUT" },
    { description: "Vyplata", amount: 1000, currency: "EUR", direction: "IN" },
    {
      description: "Kniha javascript v praxi",
      amount: 256,
      currency: "CZK",
      direction: "OUT"
    }
  ];

  state = {
    filter: "ALL"
  };

  // po add styled mam problem

  // jak si predavat filter ?
  // onClick reference funkce

  // TOD list transakci, tlacitko na pridani (default tr.), neco na odebrani

  render() {
    return (
      <div>
        <Navigation state={this.state} />
        <TransactionList
          transactionData={this.transactionData}
          filter={this.state.filter}
        />
        <Pagination />
        <NewTransactionButton />
      </div>
    );
  }
}

export default MyApp;
