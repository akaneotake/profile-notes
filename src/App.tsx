import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home';
import ForAdult from './ForAdult';
import ForAmongus from './ForAmongus';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='for-adult' element={<ForAdult />} />
          <Route path='for-amongus' element={<ForAmongus />} />
          <Route path='*' element={ <h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;