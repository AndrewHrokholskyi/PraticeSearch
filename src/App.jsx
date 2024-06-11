import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import BusinessCards from "./pages/BusinessCards";
import Instructions from "./pages/Instructions";
import Requests from "./pages/Requests";
import Profile from "./pages/Profile";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import VisitCard from "./pages/BusinessCards/components/VisitCard";
import PracticeCard from "./pages/Home/components/PracticeCard";
import AddCard from "./pages/BusinessCards/components/AddCard";

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
          <Route path="/business-cards/:id" element={<VisitCard />} />
          <Route path="/add-card" element={<AddCard />} />
          <Route path="/practice-card/:id" element={<PracticeCard />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
