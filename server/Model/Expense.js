const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

const Expense = mongoose.model('ExpenseTracker', ExpenseSchema)
module.exports = Expense;