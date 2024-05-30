import cally from "./button.module.css";
const Button = ({ onButtonClicked }) => {
  let buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={cally.buttonContainer}>
      {buttonName.map((buttonText) => {
        return (
          <button
            key={buttonText}
            className={cally.button}
            onClick={() => onButtonClicked(buttonText)}
          >
            {/* <button className={cally.button} onClick={onButtonClicked}> */}
            {buttonText}
          </button>
        );
      })}
      {/* here without return also we can use direct the single line button code; */}
    </div>
  );
};
export default Button;
