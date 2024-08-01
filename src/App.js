import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import "./index.css";



function App() {
  return (
    <BrowserRouter>
        <Header/> 
        <Routes>
            <Route path="/" element={<HomePage />}/>
        </Routes>
        <Footer/>
    </BrowserRouter>     
  );
}

export default App;
