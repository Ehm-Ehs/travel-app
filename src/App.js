import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/home";
import DestinationForm from "./components/destinationForm";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
const Navbar = styled.nav`
  margin: 20px;
  a {
    margin: 0 10px;
    text-decoration: none;
    color: #007bff;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const App = () => {
  return (
    <Container>
        <Navbar>
          <Link to="/">Home</Link>
          <Link to="/add">Add Destination</Link>
        </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<DestinationForm />} />
      </Routes>
    </Container>
  );
};

export default App;
