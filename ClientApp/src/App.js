import ScrollToTop   from "react-scroll-to-top";
import './App.css';
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import System from "./router/System";

function App() {
   
  return (
     <div className="App">   
     <ScrollToTop smooth top="20"/>
      <Header/>
      <System/>
      <Footer/>
     </div>
  );
}

export default App;
