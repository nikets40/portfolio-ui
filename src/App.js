import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecentPost from "./components/RecentPost";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <RecentPost />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
