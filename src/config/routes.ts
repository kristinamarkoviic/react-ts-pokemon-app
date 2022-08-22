import { Route } from '../types/Route';
import Home  from '../views/home/Home';
import Profile from '../views/profile/Profile';
import SinglePokemon from '../views/singlePokemon/SinglePokemon';

const routes: Array<Route> = [
    {
        key: 'router-home',
        title: 'Home',
        description: 'Home',
        element: Home,
        path: '/'
    },
    {
        key: 'router-profile',
        title: 'Profile',
        description: 'User Profile',
        element: Profile,
        path: '/profile'
    },
    {
        key: 'router-pokemon',
        title: 'Pokemon',
        description: 'Single Pokemon',
        element: SinglePokemon,
        path: '/pokemon/:id'
    },
]

export default routes;