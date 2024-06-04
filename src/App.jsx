import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import BusinessCards from "./pages/BusinessCards";
import Instructions from "./pages/Instructions";
import Requests from "./pages/Requests";
import StProfaile from "./pages/StProfaile";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/BusinessCards" element={<BusinessCards />} />
          <Route path="/Instructions" element={<Instructions />} />
          <Route path="/Requests" element={<Requests />} />
          <Route path="/StProfaile" element={<StProfaile />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
