import './App.css';
import Hero from './components/Hero.js';
import Programs from './components/Programs.js';
import Reasons from './components/Reasons.js';
import Plan from './components/Plan.js';
import Testimonials from './components/Testimonials.js';
import Join from './components/Join.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plan />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
