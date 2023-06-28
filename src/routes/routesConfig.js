import PeoplePage from '../containers/PeoplePage/PeoplePage'
import HomePage from '../containers/HomePage/HomePage'
import NotFoundPage from '../containers/NotFoundPage/NotFoundPage';
import PersonPage from '../containers/PersonPage/PersonPage';
import FavoritePage from '../containers/FavoritePage';
import SearchPage from '../containers/SearchPage';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const routesConfig = [
    {
        path: '/',
        element: <HomePage/>,
        errorElement: <NotFoundPage/>
    },

    {
        path: '/people', 
        element: <PeoplePage/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/favorites', 
        element: <FavoritePage/>,
        errorElement: <NotFoundPage/>
    },
    
    {
        path: '/people/:id', 
        element: <PersonPage/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/search', 
        element: <SearchPage/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/fail', 
        element: <ErrorMessage/>,
        errorElement: <NotFoundPage/>
    },

    {
        path: '/not-found', 
        element: <NotFoundPage/>
    }
];

export default routesConfig; 