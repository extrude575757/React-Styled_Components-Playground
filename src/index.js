import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "./Button";

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const BlueH1 = styled.h1`
  color: #7F7FFF;
`;

function App() {
  return (
    <WrapperDiv>
      <BlueH1>Styled Components Playground</BlueH1>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
      <Button type="warning">Warning</Button>
    </WrapperDiv>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
