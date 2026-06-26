import Header from "./components/Header";
import Home from "./components/Home";
import Logos from "./components/Logos";
import { Routes, Route } from "react-router";
import Übermich from "./components/Übermich";
import Erfahrung from "./components/Erfahrung";
import Portfolio from "./components/Portfolio";
import Kontakt from "./components/Kontakt";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <LanguageProvider>
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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        
       
      </main>
    </LanguageProvider>
  );
}

export default App;
