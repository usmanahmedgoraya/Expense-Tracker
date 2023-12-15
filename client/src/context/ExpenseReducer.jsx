/* eslint-disable react-refresh/only-export-components */



// Delete Transaction Function
const deleteTrans = async(id) =>{
    try {     
        const res = await fetch(`http://localhost:3000/api/delete-transaction/${id}`,{
            method:"delete"
        })
    
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error.message);
    }
}
// Add Transaction Function
const AddTrans = async(transaction) =>{
    const res = await fetch(`http://localhost:3000/api/add-transaction`,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(transaction)
    })

    const data = await res.json()
    console.log(data)
}

export default (state, action) => {
    switch (action.type) {
        case 'Delete transactions':
            return {
                
                ...state,
                transactions:deleteTrans(action.payload),
            }
        case 'Add transactions':
            return {
                transactions: AddTrans(action.payload)
            }
        default:
            return state;

    }
}