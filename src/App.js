import './App.css';
import './index.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Expericence from './components/Expericence/Expericence';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Testimonial from './components/Testimonial/Testimonial';
import './components/header/Header'
import Header from './components/header/Header';
function App() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <About></About>
    <Expericence></Expericence>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;
