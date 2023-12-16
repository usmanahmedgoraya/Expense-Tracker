/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FiMail } from "react-icons/fi";
import { MdOutlineAccountBalance } from "react-icons/md";

const HoverDevCards = ({ TotalBalance }) => {
    return (
        <div className=" py-4">
            <div className="grid grid-cols-1">

                <Card title="Balance" TotalBalance={TotalBalance}  Icon={MdOutlineAccountBalance} />
                {/* <Card title="Team" subtitle="Manage team" href="#" Icon={FiUsers} /> */}

            </div>
        </div>
    );
};

const Card = ({ title, TotalBalance, Icon, }) => {
    return (
        <a
            className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

            <Icon className="absolute z-10 -top-6 -right-6 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
            <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
            <h3 className="text-xl md:text-2xl text-slate-950 group-hover:text-white relative z-10 duration-300 font-bold">
                {title}
            </h3>
            <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300 text-2xl">
                {TotalBalance}
            </p>
        </a>
    );
};

export default HoverDevCards;