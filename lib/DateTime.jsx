const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  return (
    <div>
      {output.date}
      &nbsp;
      &nbsp;
      {output.time}
    </div>
  );
};

export default render;
