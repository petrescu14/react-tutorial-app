import React from "react";

type Props = {
  value: number;
}

const Square: React.FC<Props> = (props) => {
  return (
    <button className="square" onClick={() => console.log("click")}>
      {props.value}
    </button>
  );
}
export default Square;