import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

const useDestinations = () => {
  const [destinations, setDestinations] = useLocalStorage("destinations", []);

  const addDestination = (destination) => {
    const newDestination = { ...destination, id: Date.now().toString() };
    setDestinations([...destinations, newDestination]);
  };

  const removeDestination = (id) => {
    setDestinations(destinations.filter((destination) => destination.id !== id));
  };

  const toggleVisited = (id) => {
    setDestinations(
      destinations.map((destination) =>
        destination.id === id
          ? { ...destination, visited: !destination.visited }
          : destination
      )
    );
  };

  return {
    destinations,
    addDestination,
    removeDestination,
    toggleVisited,
  };
};

export default useDestinations;
