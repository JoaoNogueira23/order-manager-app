import HomePage from '../pages/HomePage';
import PageTables from '../pages/PageTables';
import { RouteType } from './IRoute'



const routes: RouteType[] = [
    {
        title: 'Visão Geral',
        path: '/',
        element: <HomePage/>
    },
    {
        title: 'Mesas',
        path: '/tables',
        element: <PageTables/>
    },
]

export default routes;