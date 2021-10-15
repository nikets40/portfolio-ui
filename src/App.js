import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecentPost from "./components/RecentPost";
import Featured from "./components/Featured";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <RecentPost />
      <Featured />
    </div>
  );
}

export default App;
