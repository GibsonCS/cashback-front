import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cashback from "./Cashback";
import Layout from "./Layout";
import Home from "./Home";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cashback" element={<Cashback />} />
        </Route>
      </Routes>
    </Router>
  );
}
