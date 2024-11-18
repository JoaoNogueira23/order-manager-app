import HomePage from '../pages/HomePage';
import { RouteType } from './IRoute'



const routes: RouteType[] = [
    {
        title: 'Visão Geral',
        path: '/',
        element: <HomePage/>
    },
]

export default routes;