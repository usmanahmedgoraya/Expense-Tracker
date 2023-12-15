/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext'
import { MdOutlineDeleteSweep } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TransactionList = () => {
    const { transactions, deleteTransaction } = useContext(GlobalContext);
    const [loading, setLoading] = useState(false)

    const handleDeleteFunction = async (id) => {
        try {
            setLoading(true)
            deleteTransaction(id);
            setLoading(false)
            toast.success("Transaction Successfully Deleted", {
                position: "top-right",
                autoClose: 1300,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            setLoading(false)
            toast.error("Transaction Deleted Failed", {
                position: "top-right",
                autoClose: 1300,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1300}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                key="toast-container"
            />
            <div className="space-y-3">
                {transactions.length > 0 ? (transactions.map((transaction) => {
                    return (
                        <div key={transaction._id} className={`flex justify-between items-center cursor-pointer relative bg-white dark:bg-slate-700 py-3 px-3 rounded-md group  ${transaction.amount < 0 ? "border-r-4 border-red-700 dark:border-red-500" : "border-r-4 border-green-700"}`}>
                            <div className='flex items-center gap-4 transition-all duration-200'>
                                <button className=' text-xl hidden transition-all duration-300  text-red-600 dark:text-red-500 relative active:animate-ping left-[0%] group-hover:inline group-hover:animate-pulse' disabled={loading} onClick={() => handleDeleteFunction(transaction._id)}>
                                    <MdOutlineDeleteSweep />
                                </button>
                                <h1 className="text-lg font-semibold select-none">{transaction.text}</h1>
                            </div>
                            <p className={`text-lg text-green-600 font-bold select-none ${transaction.amount < 0 ? "dark:text-red-500 text-red-700" : " text-green-700 dark:text-green-500"}`}>{transaction.amount}$</p>

                        </div>

                    )
                }
                )) : (
                    <div>No Transaction history</div>
                )}
            </div>
        </>
    )
}

export default TransactionList