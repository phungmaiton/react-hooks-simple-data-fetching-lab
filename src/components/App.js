// create your App component here
import { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState("");
  const [isLoaded, setIsLoad] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((image) => {
        setImage(image.message);
        setIsLoad(true);
      });
  }, []);

  if (!isLoaded) return <p>Loading...</p>;
  return (
    <div>
      <img alt="A Random Dog" src={image} />
    </div>
  );
}

export default App;
