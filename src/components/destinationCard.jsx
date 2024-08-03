import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

const Item = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.visited ? '#d4edda' : 'white')};
  flex-direction: column;
  
  @media (min-width: 600px) {
    flex-direction: row;
    padding: 15px;
    margin: 10px;
  }
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  text-align: center;

  h3 {
    margin-top: 0;
  }

  @media (min-width: 600px) {
    text-align: left;
  }
`;

const DestinationCard = ({ destination, removeDestination, toggleVisited }) => {
  if (!destination) {
    return null;
  }

  return (
    <Item visited={destination.visited}>
      <TextContainer>
        <h3>
          {destination.location.charAt(0).toUpperCase() + destination.location.slice(1)} ({destination.country.charAt(0).toUpperCase() + destination.country.slice(1)})
        </h3>
        <p>{destination.description.charAt(0).toUpperCase() + destination.description.slice(1)}</p>
      </TextContainer>
      <div>
        <Button onClick={() => toggleVisited(destination.id)}>
          {destination.visited ? <FaCheck /> : 'Mark as Visited'}
        </Button>
        <Button onClick={() => removeDestination(destination.id)}>Remove</Button>
      </div>
    </Item>
  );
};

export default DestinationCard;
