import React, {useState} from "react";
import Navigation from "./Navigation";
import TransactionList from "./TransactionList";
import Pagination from "./Pagination";
import NewTransactionButton from "./NewTransactionButton";

const data = [
  { description: "Vyplany", amount: 5000, currency: "CZK", direction: "OUT" },
  { description: "Vyplata", amount: 1000, currency: "EUR", direction: "IN" },
  { description: "Kniha javascript v praxi", amount: 256, currency: "CZK", direction: "OUT" }
];


const MyApp = () => {
  // const [filter, setFilter] = useState('ALL');
  const [transactionData, setTransactionData] = useState(data);

  // po add styled mam problem

  // jak si predavat filter ?
  // onClick reference funkce

  // TOD list transakci, tlacitko na pridani (default tr.), neco na odebrani

  const applyFilter = filter => {
    const actTransactions = data.filter(
      transaction => transaction.direction === filter || "ALL" === filter
    );
  
    setTransactionData(actTransactions);
  }

  return (
    <div>
      <Navigation applyFilter={applyFilter} />
      <TransactionList transactionData={transactionData} />

      <Pagination />
      <NewTransactionButton />
    </div>
  );
}

export default MyApp;
