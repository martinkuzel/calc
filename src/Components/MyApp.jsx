import React, {useState, useEffect} from "react";
import Navigation from "./Navigation";
import TransactionList from "./TransactionList";
import Pagination from "./Pagination";
import NewTransactionButton from "./NewTransactionButton";

const data = [
  { description: "Vypalny", amount: 5000, currency: "CZK", direction: "OUT" },
  { description: "Vyplata", amount: 1000, currency: "EUR", direction: "IN" },
  { description: "Kniha javascript v praxi", amount: 256, currency: "CZK", direction: "OUT" }
];


const MyApp = () => {
  const [filter, setFilter] = useState('ALL');
  const [transactionData, setTransactionData] = useState(data);
  const [transactionDataView, setTransactionDataView] = useState(data);

  // po add styled mam problem

  // jak si predavat filter ?
  // onClick reference funkce

  // TOD list transakci, tlacitko na pridani (default tr.), neco na odebrani

  // const setNewFilter = filter => {
  //   setFilter(filter);
  //   const actTransactions = transactionData.filter(
  //     transaction => transaction.direction === filter || "ALL" === filter
  //   );
  
  //   setTransactionData(actTransactions);
  // }

  const addTransaction = (transaction) => {
    setTransactionData(
      [...transactionData, transaction]
    );
  }

  // const applyFilter = () => {
  //   const actTransactions = transactionData.filter(
  //     transaction => transaction.direction === filter || "ALL" === filter
  //   );
  
  //   setTransactionDataView(actTransactions);
  // }

  useEffect(() => {
    const actTransactions = transactionData.filter(
      transaction => transaction.direction === filter || "ALL" === filter
    );
  
    setTransactionDataView(actTransactions);
    // return () => {
    //   this.applyFilter();
    // };
  }, [transactionData, filter])


  return (
    <div>
      <Navigation setNewFilter={setFilter} />
      <TransactionList transactionData={transactionDataView} />

      <Pagination />
      <NewTransactionButton addTransaction={addTransaction} />
    </div>
  );
}

export default MyApp;
