import { useEffect, useRef, useState } from 'react';
import './App.css';
import FirstPage from './pages/FirstPage';
import AppRouter from './router/AppRouter';

function App() {

  return (
    <div className="App divApp">
<AppRouter />
    </div>
  );
}

export default App;
