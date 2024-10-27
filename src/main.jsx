import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Projects from "./components/Projects.jsx";
import Skill from "./components/Skill.jsx";
import Experience from "./components/Experience.jsx";
import About from "./components/About.jsx";

import ContactSection from "./components/ContactSection.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Experience />} />
      <Route path="skill" element={<Skill />} />
      <Route path="project" element={<Projects />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactSection />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
