import React from "react";
import CustomButton from "./components/CustomButton";

function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="App">
      <CustomButton label="Click Me" clickHandler={handleClick} size="lg" backgroundColor="blue" color="white" />
    </div>
  );
}

export default App;
