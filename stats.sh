import styles from "./styles.jsx";

const render = ({ output }) => {
  if (output.song == "Nothing playing") return null;
  return (
    <div>
      <span>{ output.playing
          ? {􀑪} : {􀊅}
      } {output}</span>
    </div>
  );
};

export default render;
