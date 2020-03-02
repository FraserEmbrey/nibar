import styles from "./styles.jsx";

const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  return (
    <div>
      <span>􀑪 {output}</span>
    </div>
  );
};

export default render;
