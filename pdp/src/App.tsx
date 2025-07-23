import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "home/Header";
import Footer from "home/Footer";

const App = () => (
  <>
    <Header />
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: PDP</div>
      <div>Framework: react-19</div>
    </div>
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);