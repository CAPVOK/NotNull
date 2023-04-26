import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUs, Main, Broker } from "./pages";
import BackGround from "./modules/background";

function App() {
  return (
    <div className="App">
      <BackGround/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/brokers/:broker' element={<Broker/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
