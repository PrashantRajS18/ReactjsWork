import { useState } from "react";
// import Inc from './Inc'

const Info = ({fname}) => {
  const [count, SetCount] = useState(0);
  const [dlr, SetDlr] = useState("#fff");
  const [clr, SetClr] = useState("#fff");
  const incNum = () => {
    SetCount((count) => count + 1);
    SetClr("green");
    SetDlr("#fff");
  };
  const clear = () => {
    SetCount(0);
    SetClr("#fff");
    SetDlr("#fff");
  };
  const decNum = () => {
    SetCount(prev=>prev-1);
    SetDlr("red");
    SetClr("#fff");
  };
  return (
    <>
      <div className="info" style={{ textAlign: "center" }}>
        <h1>{fname}</h1>
        <h1>{count}</h1>
        <button onClick={incNum} style={{ background: clr }}>
          Increment
        </button>
        <button onClick={decNum} style={{ background: dlr }}>
          Decrement
        </button>
        <br></br>
        <button onClick={clear} style={{ marginTop: "10px", backgroundColor: "#fff" }}>
          clear
        </button>
      </div>
    </>
  );
};

export default Info;
