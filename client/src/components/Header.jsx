/* eslint-disable react/prop-types */

const Header = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h1 className="text-xl md:text-2xl -mt-1 font-bold">Expense Tracker</h1>
    </div>
  )
}

export default Header