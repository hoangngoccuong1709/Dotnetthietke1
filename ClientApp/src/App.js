import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import { Routes, Route } from "react-router-dom";
import Forminput from './component/body/Forminput';
import Footer from './component/footer/Footer';
import Home from './pages/home/Home';
import Service from './pages/service/Service';
import Abount from './pages/abount/Abount';
import Contact from './pages/contact/Contact';
import Signin from './pages/signin/Signin';
function App() {
  return (
     <div className="App">   
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="service" element={<Service />} />
      <Route path="abount" element={<Abount />} />
      <Route path="contact" element={<Contact/>} />
      <Route path="signin" element={<Signin />} />
        {/* <Route path="/service">
          <Service />
        </Route> */}
      </Routes>
      
      {/* <Home /> */}
       {/* <Slide />
       <Sale /> 
       <Titleproduct /> 
       <Video />
       <Saleoff />
       <Introduce1 />
       <Forminput /> */}
      <Footer />
     </div>
  );
}

export default App;
