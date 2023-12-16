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

  // const transactionTypes = transactions.map(transaction => transaction.type);
  const expense = (
    transactions.filter(item => item.type === "Expense").reduce((acc, item) => (acc += item.amount), 0)
  );
  const Income = (
    transactions.filter(item => item.type === "Income").reduce((acc, item) => (acc += item.amount), 0)
  );
  

    return (
        <div className="flex flex-col sm:flex-row justify-start sm:justify-between dark:bg-slate-700 items-center sm:gap-2 gap-0  sm:px-4 px-2 rounded-lg py-4 bg-[#6740ea] shadow-xl text-white">
            <div className="text-2xl sm:flex-col flex-row flex justify-between items-center  font-semibold space-y-0.5">
                <h1 className="mx-2">Expense</h1>
                <p className="text-red-400 dark:text-red-500">{moneyFormatter(expense)}</p>
            </div>
            <div className="bg-gray-200 w-0.5 h-12 mx-3 hidden sm:block rounded-md"></div>
            <div className="bg-gray-200 h-0.5 w-[12rem] rounded-md sm:hidden my-4"></div>
            <div className="text-2xl sm:flex-col flex-row flex justify-between items-center  font-semibold space-y-0.5">
                <h1>Income</h1>
                <p className="text-green-400 dark:text-green-500">{moneyFormatter(Income)}</p>
            </div>
        </div>
    )
}

export default Balance