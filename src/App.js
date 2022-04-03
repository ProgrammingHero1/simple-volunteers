import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Volunteers from './components/Volunteers/Volunteers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/volunteers' element={<Volunteers></Volunteers>}></Route>
      </Routes>
    </div>
  );
}

export default App;
