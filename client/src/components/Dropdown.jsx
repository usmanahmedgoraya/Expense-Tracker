/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import {
    FiChevronDown,
    FiEdit,
    FiPlusSquare,
    FiShare,
    FiTrash,
} from "react-icons/fi";
import { GiExpense } from "react-icons/gi";

const Dropdown = ({setType,type}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="my-6">
            <motion.div animate={open ? "open" : "closed"} className="relative">
                <button
                    onClick={() => setOpen((pv) => !pv)}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
                >
                    {type?
                        <span className="font-medium text-sm">{type}</span>
                        :<span className="font-medium text-sm">Transaction Type</span>
                    }
                    <motion.span variants={iconVariants}>
                        <FiChevronDown />
                    </motion.span>
                </button>

                <motion.ul
                    initial={wrapperVariants.closed}
                    variants={wrapperVariants}
                    style={{ originY: "top", translateX: "-60%" }}
                    className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
                >
                    <Option setOpen={setOpen} Icon={GiExpense} text="Expense" setType={setType} />
                    <Option setOpen={setOpen} Icon={FiPlusSquare} text="Income" setType={setType} />
                </motion.ul>
            </motion.div>
        </div>
    );
};



const Option = ({ text, Icon, setOpen,setType }) => {
    

    const handleOption = () =>{
        setType(text)
        console.log(text)
        setOpen(false)
    }
    return (
        <motion.li
            variants={itemVariants}
            onClick={handleOption}
            className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
        >
            <motion.span variants={actionIconVariants} className={`${text==="Expense"?"text-red-700": "text-green-700"} text-xl`}>
                <Icon />
            </motion.span>
            <span className="text-base">{text}</span>
        </motion.li>
    );
};

export default Dropdown;

const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
};

const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
};

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
        },
    },
    closed: {
        opacity: 0,
        y: -15,
        transition: {
            when: "afterChildren",
        },
    },
};

const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
};