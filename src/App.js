import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AllUsers from "./components/User/AllUsers";
import UserProfile from "./components/User/UserProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<AllUsers />} />
          <Route path="/userProfile/:id" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
