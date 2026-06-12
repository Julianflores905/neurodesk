import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Subscriptions from "./Pages/Subscriptions";
import Login from "./Pages/login";
import Register from "./Pages/register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}