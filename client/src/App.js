import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from './components/Landing.js';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail'
import RecipeCreate from './components/RecipeCreate'
import MyRecipesDb from './components/MyRecipesDb';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/create' element={<RecipeCreate />} />
        <Route path='/my-recipes' element={<MyRecipesDb />} />
        <Route path="/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
