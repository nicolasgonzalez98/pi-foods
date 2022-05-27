import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from './components/Landing.js';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
