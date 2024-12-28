import Header from "./components/Header";
import AppleWatch from "./pages/AppleWatch";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="px-7 py-8 ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apple-watch" element={<AppleWatch />} />
      </Routes>
    </div>
  );
}

export default App;
