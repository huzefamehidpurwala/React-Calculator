// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [prevOperand, setPrevOperand] = useState();
  const [currentOperand, setCurrentOperand] = useState("0");
  const [prevStatus, setPrevStatus] = useState([]);
  const arrTheme = ["bg-dark", "bg-light"];
  const arrThemeSrc = [
    "https://img.icons8.com/external-linear-outline-icons-papa-vector/40/external-Light-Mode-interface-linear-outline-icons-papa-vector.png",
    "https://img.icons8.com/ios-glyphs/40/moon-symbol.png",
  ];
  const [theme, setTheme] = useState(0);

  const HandleBtnClick = (event) => {
    // console.log(event.target.id === "del");

    // if (event.target.id === "del") {
    //     setCurrentOperand(prevStatus);
    // }

    // currentOperand && setPrevStatus(prevStatus?.push(currentOperand));

    currentOperand !== "0"
      ? setCurrentOperand(currentOperand + event?.target?.innerHTML)
      : setCurrentOperand(event?.target?.innerHTML);
  };

  const HandleEq = (event) => {
    if (event.target.id === "eq") {
      const pattern = /([÷x+\-])/;
      const arrOfInp = currentOperand?.split(pattern).filter(Boolean);
      console.log(arrOfInp);
      currentOperand &&
        currentOperand !== "0" &&
        setPrevOperand(currentOperand);
    }
  };

  const HandleClear = (event) => {
    if (event.target.id === "clear") {
      setCurrentOperand("0");
      // console.log("clear");
      setPrevOperand("");
    }
  };

  const ChangeTheme = () => {
    setTheme((t) => t + 1);
  };

  console.log("prevStatus", prevStatus);

  return (
    <div className={`${arrTheme[theme % 2]} App`}>
      <div className={`${arrTheme[theme % 2]} logo-btn`}>
        <p>Switch Theme to </p>

        <span className="white-space"></span>

        <img
          onClick={ChangeTheme}
          width="40"
          height="40"
          src={`${arrThemeSrc[theme % 2]}`}
          alt=""
        />
      </div>

      <div className={`${arrTheme[theme % 2]} calculator-grid`}>
        {/* <div className={`${arrTheme[theme % 2]} output-bg`}> */}
        <div className={`${arrTheme[theme % 2]} output`}>
          <div className={`${arrTheme[theme % 2]} prev-operand`}>
            {prevOperand}
          </div>

          <div
            className={`${arrTheme[theme % 2]} current-operand anim-typewriter`}
          >
            {currentOperand}
          </div>
        </div>
        {/* </div> */}

        <button onClick={HandleClear} id="clear" className="span-two">
          AC
        </button>
        <button onClick={HandleBtnClick} id="del">
          DEL
        </button>
        <button onClick={HandleBtnClick} id="div">
          ÷
        </button>
        <button onClick={HandleBtnClick} id="7">
          7
        </button>
        <button onClick={HandleBtnClick} id="8">
          8
        </button>
        <button onClick={HandleBtnClick} id="9">
          9
        </button>
        <button onClick={HandleBtnClick} id="prod">
          ×
        </button>
        <button onClick={HandleBtnClick} id="4">
          4
        </button>
        <button onClick={HandleBtnClick} id="5">
          5
        </button>
        <button onClick={HandleBtnClick} id="6">
          6
        </button>
        <button onClick={HandleBtnClick} id="sub">
          -
        </button>
        <button onClick={HandleBtnClick} id="1">
          1
        </button>
        <button onClick={HandleBtnClick} id="2">
          2
        </button>
        <button onClick={HandleBtnClick} id="3">
          3
        </button>
        <button onClick={HandleBtnClick} id="add">
          +
        </button>
        <button onClick={HandleBtnClick} id=".">
          .
        </button>
        <button onClick={HandleBtnClick} id="0">
          0
        </button>
        <button onClick={HandleEq} id="eq" className="span-two">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
