import { BrowserRouter } from "react-router-dom";
import {Navbar, Hero, About, Contact, Tech, Work  } from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary text-black'>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>

      </div>
      <About/>
      <Tech/>
      <Work/>
      <div className="relative z-0">
        <Contact/>
      </div>

    </div>
    </BrowserRouter>
  );
};

export default App;