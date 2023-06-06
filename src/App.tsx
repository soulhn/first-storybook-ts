import React from "react";
import CustomButton from "./components/CustomButton";
import CustomProgressBar from "./components/CustomProgressBar";
import styled from "styled-components";
import Gallery from "./pages/Gallery";

function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="App">
      <Container>
        <CustomProgressBar progress={80}></CustomProgressBar>
        <CustomButton label="Click Me" clickHandler={handleClick} size="lg" backgroundColor="blue" color="white" />
        <Gallery></Gallery>
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin: 100px;
`;

export default App;
