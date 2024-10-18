// src/App.jsx
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 p-8 text-white">
          <Profile />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
