/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useContext, useRef, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { CiBookmarkPlus, CiCirclePlus } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTransaction = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity my-3 mt-8 flex items-center"
            >
                <CiBookmarkPlus className="mx-2 text-xl" /> Add Transaction
            </button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
    const [text, setText] = useState()
    const [amount, setAmount] = useState()
    const { addTransaction } = useContext(GlobalContext);
    const textRef = useRef(null)
    const amountRef = useRef(null)
    const [loading, setLoading] = useState(false)

    const handleChangeInput = (e) => {
        e.preventDefault();
        if (e.target.id === "transaction") {
            setText(e.target.value)
        }
        else if (e.target.id === "amount") {
            let rakam = e.target.value
            console.log(+rakam)
            setAmount(+rakam)
        }
    }


    const handleAddBtn = () => {
        if (text === "" || amount === "") {
            toast.error("Please add some data in Input", {
                position: "top-right",
                autoClose: 1300,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        const parsedAmount = parseFloat(amount);

        if (isNaN(parsedAmount)) {
            toast.error("Amount must be a valid number", {
                position: "top-right",
                autoClose: 1300,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        const newTransaction = {
            text,
            amount: parsedAmount,
        };
        setLoading(true);
        addTransaction(newTransaction);
        setIsOpen(false);
        setLoading(false)
        toast.success("Transaction Successfully Added", {
            position: "top-right",
            autoClose: 1300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };


    return (
        <AnimatePresence>
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
            {isOpen && (
                <motion.div
                    key="modal-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur sm:p-8 p-3 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "14.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    >
                        <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                        <div className="relative z-10">
                            <div className="bg-white mb-2 py-2 rounded-md text-lg sm:text-3xl text-indigo-600 grid place-items-center mx-auto">
                                Add Transaction
                            </div>
                            <div>
                                <div className="mb-5">
                                    <label htmlFor="transaction" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tranaction</label>
                                    <input type="text" id="transaction" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. Flower" onChange={handleChangeInput} ref={amountRef} required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                                    <input type="text" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. $ 20" onChange={handleChangeInput} ref={textRef} required />
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => { setIsOpen(false); }}
                                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                                >
                                    Nah, go back
                                </button>
                                <button
                                    onClick={handleAddBtn}
                                    className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full sm:py-2 py-0 rounded flex items-center justify-center text-base sm:text-xl" disabled={loading}

                                >
                                    <CiCirclePlus className="text-2xl mx-3" />Add
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AddTransaction;