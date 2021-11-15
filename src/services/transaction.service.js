import { httpService } from './http.service'

export const transactionService = {
    query,
    getById,
    update,
    add,
    remove,
}

async function query() {
    try {
        return await httpService.get('transaction')
    } catch (err) {
        console.log(err);
    }
}

async function getById(transactionId) {
    return await httpService.get(`transaction/${transactionId}`)
}

function remove(transactionId) {
    return httpService.delete(`transaction/${transactionId}`)
}

async function add(transactionId = null) {
    let transaction
    if (transactionId) {
        transaction = await getById(transactionId)
        delete transaction._id
        transaction.title = transaction.title + ' copy'
    } else {
        console.log('ok add');
    }
    return await httpService.post('transaction', transaction)
}

async function update(transaction) {
    const updatedTransaction = await httpService.put(`transaction/${transaction._id}`, transaction)
    return updatedTransaction
}
