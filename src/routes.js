import { AppBoard } from './pages/AppBoard';
import { CustomerList } from './pages/CustomerList';

const routes = [
    {
        path: '/',
        component: AppBoard,
    },
    {
        path: '/customers',
        component: CustomerList,
    },
]

export default routes;