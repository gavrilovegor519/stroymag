import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Services from './views/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
