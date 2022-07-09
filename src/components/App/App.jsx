import { React } from 'react';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <Main></Main>
    </div>
  );
};

export default App;
