import logo from "./logo.svg";
import "./App.css";
import HeroSect from "./components/HeroSect";
import Layout from "./components/Layout";
import Close from "./assets/close.png";

function App() {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-end px-10">
        <div className="pt-4 hover:rotate-180 transform-origin-center transition-transform duration-500 cursor-pointer">
          <img src={Close} />
        </div>
      </div>
      <Layout />
    </div>
  );
}

export default App;
