import { AppBoard } from './pages/AppBoard';
import { CustomerList } from './pages/CustomerList';
import { TransactionEdit } from './pages/TransactionEdit';

const routes = [
    {
        path: '/',
        component: AppBoard,
    },
    {
        path: '/customers',
        component: CustomerList,
    },
    {
        path: '/transaction/edit/:id?',
        component: TransactionEdit,
    },
]

export default routes;