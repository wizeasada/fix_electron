import React from 'react';
import AppRouter from './presentation/components/pages/AppRouter';
import './tailwind.output.css';

//const store = configureStore({});

const App: React.FC = () => (
  <div className="App">
    <AppRouter />
  </div>
);

export default App;
