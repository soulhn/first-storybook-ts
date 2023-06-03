import React, { useCallback } from "react";
import CustomButton from "./components/CustomButton";

// import CustomButton, { ButtonProps } from "./components/CustomButton";
// 버전1
// function App() {
//   const handleClick = () => {
//     console.log("버튼을 클릭합니다.");
//   };

//   const buttonProps: ButtonProps = {
//     clickHandler: handleClick,
//     buttonText: "테스트 버튼",
//     backgroundColor: "blue",
//     color: "white",
//   };
//   return (
//     <div className="App">
//       <CustomButton {...buttonProps} />
//     </div>
//   );
// }

// 버전2 useCallBack 사용
function App() {
  const handleClick = useCallback(() => {
    console.log("버튼을 클릭합니다.");
  }, []); // 의존성 배열이 비어 있으므로, handleClick은 컴포넌트가 처음 렌더링될 때 한 번만 생성
  return (
    <div className="App">
      <CustomButton buttonText="Click me!" backgroundColor="blue" color="white" clickHandler={handleClick} />
    </div>
  );
}

export default App;
