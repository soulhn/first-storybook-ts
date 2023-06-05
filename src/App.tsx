import React from "react";
import CustomButton from "./components/CustomButton";
import CustomProgressBar from "./components/CustomProgressBar";

function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="App">
      <CustomProgressBar progress={80}></CustomProgressBar>
      <CustomButton label="Click Me" clickHandler={handleClick} size="lg" backgroundColor="blue" color="white" />
    </div>
  );
}

export default App;
