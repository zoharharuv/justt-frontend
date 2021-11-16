import { httpService } from './http.service'
// const gDatabase = require('../data/data.json');

// (async () => {
//     for (const d of gDatabase) {
//         await add(d)
//     }
// })()

export const transactionService = {
    query,
    getById,
    update,
    add,
    remove
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

async function remove(transactionId) {
    return await httpService.delete(`transaction/${transactionId}`)
}

async function add(transaction) {
    return await httpService.post('transaction', transaction)
}

async function update(transaction) {
    return await httpService.put(`transaction/${transaction._id}`, transaction)
}
