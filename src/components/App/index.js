import React from 'react';
import ReposList from '../ReposList';
import AppNavbar from '../NavBar/AppNavbar';
import store from '../../store';
import { Provider } from 'react-redux';

const App = _ => (
  <Provider store={store}> 
  <div className="center">
  <AppNavbar/>
  <ReposList />
  </div>
  </Provider>
);

export default App;
