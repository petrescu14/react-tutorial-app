
type Props = {
  value: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Square: React.FC<Props> = (props) => {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
export default Square;