import React from "react";
import { RequireAuth } from "react-auth-kit";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Menubar from "./components/Menubar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <BrowserRouter>
      <div style={Container}>
        <Menubar />
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth loginPath="/login">
                <HomePage />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

const Container: React.CSSProperties = {
  maxWidth: "80%",
  margin: "0 auto",
};
