/* eslint-disable react/prop-types */
import { useContext } from "react";
import Balance from "../Balance"
import DarkModeToggle from "../DarkModeToggle"
import Header from "../Header"
import { GlobalContext } from "../../context/GlobalContext";
import HoverDevCards from "./HoverDevCards";

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


// Hover card Component
const HoverCard = ({ handleDarkMode, darkMode }) => {
    const { transactions } = useContext(GlobalContext);

    // Counting the Total
    const total = transactions.reduce((acc, item) => (item.type === "Expense" ? acc -= item.amount : acc += item.amount), 0);
return (
    <div>
        <div>
            <div
                className="group relative cursor-pointer overflow-hidden dark:bg-slate-800 bg-white  px-5 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-lg rounded-lg sm:px-6 hover:text-white mt-7">
                <span className="absolute top-8 right-5 sm:right-6 z-0 h-10 w-10 rounded-full bg-sky-500 dark:bg-sky-950 transition-all duration-500 group-hover:scale-[24] hover:text-white"></span>
                <div className="relative z-10 mx-auto max-w-md">
                    <div className="flex justify-between items-start">

                        <Header handleDarkMode={handleDarkMode} darkMode={darkMode} />
                        <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400 relative -top-2">
                            <DarkModeToggle handleDarkMode={handleDarkMode} darkMode={darkMode} />
                        </div>
                    </div>
                        <HoverDevCards TotalBalance={moneyFormatter(total)}/>
                    <Balance />
                </div>
            </div>
        </div>
    </div>
)
}

export default HoverCard