import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import SideScroller from "./components/routes/pages/SideScroller";

import "./style.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="routes">
          <Routes>
            <Route
              exact
              path="/pages/side-scroller"
              element={<SideScroller />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
