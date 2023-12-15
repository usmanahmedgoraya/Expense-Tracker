import { useContext} from "react";
import { GlobalContext } from "../context/GlobalContext";


function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
      '$ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
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

const Balance = () => {
    const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0)*-1
  );
  const Income = (
    amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)
  );
  

    return (
        <div className="flex justify-between dark:bg-slate-700 items-center px-6 rounded-lg py-4 bg-white shadow-xl">
            <div className="text-2xl font-semibold space-y-0.5">
                <h1>Expense</h1>
                <p className="text-red-700 dark:text-red-500">{moneyFormatter(expense)}</p>
            </div>
            <div className="bg-gray-500 w-0.5 h-12 rounded-md"></div>
            <div className="text-2xl font-semibold space-y-0.5">
                <h1>Income</h1>
                <p className="text-green-700 dark:text-green-500">{moneyFormatter(Income)}</p>
            </div>
        </div>
    )
}

export default Balance