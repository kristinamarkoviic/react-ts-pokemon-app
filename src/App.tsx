import { FC } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.scss';

import HomePage from './views/home/Home';
import ProfilePage from './views/profile/Profile';
import SinglePokemonPage  from 'views/singlePokemon/SinglePokemon';

// TODO za foreach ruta
// import { Route as AppRoute } from './types/Route';
// import { routes } from './config';
import Layout  from './components/Layout/Layout';

export interface IApplicationProps {
};

const App: FC<IApplicationProps> = () => {

  return (
    <>
        <BrowserRouter>
          <Layout>
            <Routes>
				{/* TODO forEach sa rutama, prvo config da se sredi sa children (subRoutes), ispis ovde :id pokemon */}
            <Route path='/' element={ <HomePage /> } />
            <Route path='profile' element={ <ProfilePage /> } />
            <Route path='pokemon'>
              <Route index element={ <SinglePokemonPage /> } />
              <Route path=':id' element={ <SinglePokemonPage /> } />
            </Route>
            </Routes>
          </Layout>
        </BrowserRouter>
  	</>
    
  )
} 

export default App;
