// create your App component here
import {useState, useEffect,use } from "react";
import DogDisplay from "./DogDisplay";
import FetchDogsButton from "./FetchDogsButton";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [dogs, setDogs] = useState("");
  useEffect(() => {
    fetchDogs();
  }, []);
  const fetchDogs = () => {
    setIsLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          setDogs(data.message);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching dog image:", error);
          setIsLoading(false);
        });

  }
  return (
    <div>
      <h1>Dog Images</h1>
      <DogDisplay isLoading={isLoading} dog={dogs} />
      <FetchDogsButton fetch={fetchDogs} />
    </div>
  )
}

export default App;     