import React, { useState } from "react";
import train from "../assets/images/train.png";
import styled from "styled-components";

interface ImageContainerProps {
  rowCount: number;
  columnCount: number;
}

export default function Gallery() {
  const [rowCount, setRowCount] = useState(1);
  const [columnCount, setColumnCount] = useState(1);

  const handleColumnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColumnCount(parseInt(event.target.value, 10));
  };
  const handleRowInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowCount(parseInt(event.target.value, 10));
  };

  return (
    <GalleyContainer>
      <Header>
        <h1>갤러리</h1>
        <div>
          <InputContainer>
            <Label htmlFor="rowCount">row 개수 설정</Label>
            <Input type="number" value={rowCount} onChange={handleRowInput} id="rowCount" />
          </InputContainer>
          <InputContainer>
            <Label style={{ marginLeft: "50px" }} htmlFor="columnCount">
              column 개수 설정
            </Label>
            <Input type="number" value={columnCount} onChange={handleColumnInput} id="columnCount" />
          </InputContainer>
        </div>
      </Header>
      <ImageContainer rowCount={rowCount} columnCount={columnCount}>
        {Array(rowCount * columnCount)
          .fill(0)
          .map((_, i) => (
            <Image key={i} src={train} alt={`gallery image${i}`} />
          ))}
      </ImageContainer>
    </GalleyContainer>
  );
}

const GalleyContainer = styled.div`
  border: 2px solid black;
`;

const ImageContainer = styled.div<ImageContainerProps>`
  display: grid;
  background-color: #fff4e6;
  grid-template-rows: repeat(${(props) => props.rowCount}, 1fr);
  grid-template-columns: repeat(${(props) => props.columnCount}, 1fr);
  grid-auto-rows: 0;
  grid-auto-columns: 0;
`;

const Header = styled.div`
  text-align: center;
  margin: 30px 0;
`;

const Label = styled.label`
  border: 2px solid black;
  font-size: 20px;
  margin-right: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 50px;
  font-size: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  border: 2px solid black;
`;
