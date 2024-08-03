import React, { useState } from "react";
import styled from "styled-components";
import DestinationCard from "./destinationCard";
import useDestinations from "./hooks";

const Container = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
`;

const Home = () => {
  const { destinations, removeDestination, toggleVisited } = useDestinations();
  const [filter, setFilter] = useState("all");

  const filteredDestinations = destinations.filter((destination) => {
    if (filter === "visited") return destination.visited;
    if (filter === "notVisited") return !destination.visited;
    return true;
  });

  return (
    <Container>
      <div>
        <Button onClick={() => setFilter("all")}>All</Button>
        <Button onClick={() => setFilter("visited")}>Visited</Button>
        <Button onClick={() => setFilter("notVisited")}>Not Visited</Button>
      </div>
      <h2>Your Travel Destinations</h2>
      {destinations.length === 0 ? (
        <p>No destinations added yet. Start by adding one!</p>
      ) : (
        filteredDestinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            removeDestination={removeDestination}
            toggleVisited={toggleVisited}
          />
        ))
      )}
    </Container>
  );
};

export default Home;
