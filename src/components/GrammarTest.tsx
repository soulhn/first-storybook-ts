import React from "react";
//문법 테스트를 위해 작성한 임시 컴포넌트

const jsxBox: JSX.Element = <div>Hello world!</div>;

function GrammarTest(): JSX.Element {
  return <div>{jsxBox}</div>;
}

export default GrammarTest;
