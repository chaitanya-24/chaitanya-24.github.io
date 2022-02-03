import "./App.css";
import Home from "./Home";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Error from "./pages/Error";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/projects" element={<ProjectsPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
      
    </>
  );
}

export default App;
