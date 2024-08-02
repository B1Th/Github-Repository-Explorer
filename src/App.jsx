import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RepoDetailsPage from "./pages/RepoDetailsPage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <h1>GitHub Repository Explorer</h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/repo/:owner/:name" element={<RepoDetailsPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
