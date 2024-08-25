import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './App.routes';
import { ContextProvider } from './context/ContextProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ContextProvider>
          <AppRouter />
      </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
