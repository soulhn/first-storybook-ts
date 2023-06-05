// React 및 필요한 모듈을 임포트합니다.
import React from "react";
import styled from "styled-components";
import train from "../assets/images/train.png";
import sign from "../assets/images/sign.png";

interface ProgressBarProps {
  progress: number; // 진행도를 나타내는 숫자입니다. 이 값은 1~100 사이의 정수입니다.
  marginBottom?: string; // CSS 마진 바텀 값입니다. 선택적으로 입력할 수 있습니다.
  feat?: string; // 상태바의 기능을 정의합니다. "simple"이면 기차 이미지가 사라집니다.
}

const CustomProgressBar: React.FC<ProgressBarProps> = ({ progress, marginBottom, feat }) => {
  return (
    <ProgressBarContainer marginBottom={marginBottom}>
      {feat !== "simple" && <Sign />}
      <Bar progress={progress} feat={feat} />
      {feat !== "simple" && <Train progress={progress} />}
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div<{ marginBottom?: string }>`
  position: relative;
  width: 100%;
  background-color: blue;
  border-radius: 5px;
  border: 1px solid black;
  box-sizing: border-box;
  margin-bottom: ${(props) => props.marginBottom || "50px"};
`;

const Bar = styled.div<{ progress: number; feat?: string }>`
  height: ${({ feat }) => (feat === "simple" && "1.25em") || "24px"};
  border-radius: 5px;
  background-color: red;
  width: ${({ progress }) => progress}%;
`;

const Train = styled.div<{ progress: number }>`
  bottom: 22px;
  transform: translateX(-50%);
  position: absolute;
  left: ${({ progress }) => progress}%;
  width: 55px;
  height: 50px;
  background-image: url(${train});
  background-size: cover;
  background-position: center;
`;

const Sign = styled.div`
  transform: translateX(-15%);
  position: absolute;
  background-size: cover;
  background-position: center;
  width: 55px;
  height: 50px;
  bottom: 25px;
  background-image: url(${sign});
`;

export default CustomProgressBar;
