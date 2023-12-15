import TransactionList from "./TransactionList"

const IncomeExpensive = () => {
  return (
    <div className="overflow-y-scroll no-scrollbar">
      <div className="my-3">
        <h1 className="text-xl font-bold">History</h1>
        <div className="w-full h-0.5 bg-gray-500 my-2" ></div>
      </div>

      <TransactionList />
    </div>
  )
}

export default IncomeExpensive