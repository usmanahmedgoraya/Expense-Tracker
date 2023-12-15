import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' + (p[0].split('')[0] === '-' ? '-' : '') +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

const Header = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <div>
      <h1 className="text-3xl font-bold mt-12">Expense Tracker</h1>
      <div className="flex justify-start flex-col my-4">
        <h1 className="text-lg font-semibold">Your Balance</h1>
        <h1 className="text-2xl font-bold">{moneyFormatter(total)}</h1>
      </div>
    </div>
  )
}

export default Header