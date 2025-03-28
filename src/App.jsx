import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex">
          <div className="col-auto">
            <Sidebar />
          </div>
          <div>
            {/* <Routes>
              <Route path="/" element={<Dashboard/>}></Route>
              <Route path="/" element={<Dashboard/>}></Route>
            </Routes> */}
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;


