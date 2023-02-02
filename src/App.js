import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home  from './pages/Home'
import Contact from './pages/Contact'


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
