import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import BookSection from "./components/BookSection/BookSection";
import Footer from "./components/Footer/Footer";
import AddBook from "./components/AddBook/AddBook";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BookSection />
      <AddBook />
      <Footer />
    </>
  );
}

export default App;
