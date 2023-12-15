const express = require('express');
const router = express.Router();
const { AddTransaction, GetALLTransactions, DeleteTransaction } = require('../controllers/Expense')

// Creating the first routing API Endpoint
router.get("/get-all-transactions", GetALLTransactions)
router.post("/add-transaction", AddTransaction)
router.delete("/delete-transaction/:id", DeleteTransaction)


module.exports = router