import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import BusinessCards from "./pages/BusinessCards";
import Instructions from "./pages/Instructions";
import Requests from "./pages/Requests";
import Profile from "./pages/Profile";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/BusinessCards" element={<BusinessCards />} />
          <Route path="/Instructions" element={<Instructions />} />
          <Route path="/Requests" element={<Requests />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
