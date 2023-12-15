const Expense = require('../Model/Expense')
// Creating Transaction
const AddTransaction = async (req, res) => {
    try {
        const { type, text, amount } = req.body;
        if (text === '' || amount.length === 0) {
            return res.status(400).json({
                success: false,
                msg: "Please enter correct input"
            })
        }

        if (isNaN(amount)) {
            return res.status(400).json({
                success: false,
                msg: "Please enter correct input"
            })
        }

        const transaction = await Expense.create({
            type, text, amount
        })

        res.status(200).json({
            success: true,
            transaction
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        })
    }
}


// Get All Transactions
const GetALLTransactions = async (req, res) => {
    try {
        const transactions = await Expense.find()

        res.status(200).json({
            success: true,
            transactions
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        })
    }
}


// Delete Transaction
const DeleteTransaction = async (req, res) => {
    try {
        const id = req.params.id
        await Expense.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            id: id,
            msg: "Delete Transaction Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        })
    }
}

module.exports = {
    AddTransaction,
    GetALLTransactions,
    DeleteTransaction
}