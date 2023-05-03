import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Popular from './components/Popular/Popular'
import Offers from './components/Offers/Offers'
import About from './components/About/About'
import Blog from './components/Blog/Blog'

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Home/>
      <Popular/>
      <Offers/>
      <About/>
      <Blog/>
      <Footer/>
     </div>
  );
}

export default App;
