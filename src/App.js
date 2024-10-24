import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Everything from './Everything/Everything'; // Assuming you have this component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use BrowserRouter instead of Router
import Women from './Women/Women';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/everything" element={<Everything />} />
        <Route path='/women' element={<Women/>}/>
      </Routes>
    </Router>
  );
}

export default App;
