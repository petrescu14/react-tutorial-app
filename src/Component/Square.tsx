
type Props = {
  value: string;
  click: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Square: React.FC<Props> = (props) => {
  return (
    <button
      className="square"
      onClick={props.click}
    >
      {props.value}
    </button>
  );
}
export default Square;