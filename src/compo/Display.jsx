import cally from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      type="text"
      readOnly
      className={cally.display}
      value={displayValue}
    />
  );
};

export default Display;
