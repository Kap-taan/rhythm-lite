import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Songs from "./components/Songs";
import SongContextProvider from "./stores/SongContext";

function App() {
  return (
    <SongContextProvider>
      <div className="App max-h-screen">
        <Navbar />
        <Songs />
        <Footer />
      </div>
    </SongContextProvider>
  );
}

export default App;
