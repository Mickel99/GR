import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import AdminPage from "./components/AdminPage";
import BookingForm from "./components/BookingForm";
import NavBar from "./components/NavBar";
import "./App.css";
import { createRestaurant } from "./Service/createrestaurant";

const AppContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
