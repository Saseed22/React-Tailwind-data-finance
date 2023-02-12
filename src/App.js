import Analytics from "./components/analytics.jsx";
import Cards from "./components/cards.jsx";
import Footer from "./components/footer.jsx";
import Hero from "./components/hero.jsx";
import Navbar from "./components/navbar.jsx";
import NewsLetter from "./components/newsLetter.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
