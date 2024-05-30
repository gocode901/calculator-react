import cally from "./App.module.css";
import Display from "./compo/Display";
import Button from "./compo/Buttons";
import { useState } from "react";
import Container from "./compo/Container";
function App() {
  let [displayNo, setdisplayNo] = useState("");
  // const onButtonClicked = (event) => {
  //   let ClickedNum = displayNo + event.target.textContent;
  //   setfoodState(ClickedNum);
  // };
  const onButtonClicked = (buttonText) => {
    if (buttonText === "C") {
      setdisplayNo("");
    } else if (buttonText === "=") {
      const res = eval(displayNo);
      setdisplayNo(res);
    } else {
      const ClickedNum = displayNo + buttonText;
      setdisplayNo(ClickedNum);
    }
  };

  return (
    <Container>
      <h1 className="heading">Calculator</h1>
      <div className={cally.calc}>
        <Display displayValue={displayNo}></Display>
        <Button onButtonClicked={onButtonClicked}></Button>
      </div>
    </Container>
  );
}

export default App;
