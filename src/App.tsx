import { FC } from 'react';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

import HomePage from './views/home/Home';
import ProfilePage from './views/profile/Profile';
import SinglePokemonPage  from 'views/singlePokemon/SinglePokemon';

export interface IApplicationProps {};

const App: FC<IApplicationProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='profile' element={ <ProfilePage /> } />
        <Route path='pokemon'>
          <Route index element={ <SinglePokemonPage /> } />
          <Route path=':id' element={ <SinglePokemonPage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
} 

export default App;
