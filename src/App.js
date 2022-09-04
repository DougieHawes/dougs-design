import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import Page1 from "./components/routes/pages/Page1";

import "./style.css";

const App = () => {
  return (
    <div className="app full-screen">
      <BrowserRouter>
        <Header />
        <div className="routes">
          <Routes>
            <Route exact path="/pages/1" element={<Page1 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
