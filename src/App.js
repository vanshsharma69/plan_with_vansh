import React from "react";
import Tours from "./components/tours";
import data from "./data";

const App = () => {
  const [tours, setTours] = useState(data)
  return (
    <div>
      <Tours tours={tours}></Tours>
    </div>
  );
};

export default App;