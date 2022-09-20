import ScrollToTop   from "react-scroll-to-top";
import './App.css';
import System from "./router/System";
 
function App() {
  return (
     <div className="App">   
     <ScrollToTop smooth top="20"/>
     <System/>
     </div>
  );
}

export default App;
