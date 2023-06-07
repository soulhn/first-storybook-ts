import React from "react";
import CustomButton from "./components/CustomButton";
import CustomProgressBar from "./components/CustomProgressBar";
import styled from "styled-components";
import Gallery from "./components/Gallery";
import CustomNav from "./components/CustomNav/CustomNav";

function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <MainContainer>
      <CustomNav />
      <Contents>
        <CustomProgressBar progress={80}></CustomProgressBar>
        <CustomButton label="Click Me" clickHandler={handleClick} size="lg" backgroundColor="blue" color="white" />
        <Gallery />
      </Contents>
    </MainContainer>
  );
}

const MainContainer = styled.div``;

const Contents = styled.section`
  margin: 100px;
`;

export default App;
