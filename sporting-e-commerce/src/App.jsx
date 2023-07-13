import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserProvider from "./contexts/UserContext";
import About from "./pages/About";

export default function App() {
  
  return (
  <UserProvider>
    <Routes>
      <Route path="/home" element={<Home />}/>;
      <Route path="/sobre-nos" element={<About/>}/>
    </Routes>
  </UserProvider>
  )
}
