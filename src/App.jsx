import Header from "./components/Header";
import Home from "./components/Home";
import Logos from "./components/Logos";
import { Routes, Route } from "react-router";
import Übermich from "./components/Übermich";
import Erfahrung from "./components/Erfahrung";

function App() {
  return (
    <>
      <Header />
      
      <main className="">
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Home /> 
                  <Logos />
              
              </>
            }
          />
          <Route path="/übermich" element={<Übermich />} />
          <Route path="/Erfahrung" element ={<Erfahrung />} />
        </Routes>
        
       
      </main>
    </>
  );
}

export default App;
