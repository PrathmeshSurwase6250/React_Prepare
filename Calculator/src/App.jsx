import React from "react";
import Heading from "./Heading";
import InputSection from "./InputSection";
import Number from "./Number";
const App = () => {
  return (
    <>
      <Heading />
      <InputSection /> <br />
      <Number leftvalue="c" middlevalue="1" rightvalue="2" />
      <Number leftvalue="+" middlevalue="3" rightvalue="4" />
      <Number leftvalue="-" middlevalue="5" rightvalue="6" />
      <Number leftvalue="*" middlevalue="7" rightvalue="8" />
      <Number leftvalue="/" middlevalue="9" rightvalue="0" />
      <Number leftvalue="=" middlevalue="." rightvalue="%" />
    </>
  );
};

export default App;
