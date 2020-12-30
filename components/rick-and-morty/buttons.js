function Buttons(props) {
  return (
    <div>
      <button> Prev</button>
      <button onClick={console.log(props.id)}> Next </button>
    </div>
  );
}
export default Buttons;
