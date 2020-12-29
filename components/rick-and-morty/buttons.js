function Buttons(props) {
  return (
    <div>
      <button onClick={console.log(props.text)}>Prneeev Page</button>
      <button onClick={console.log(props.text2)}>Dnet Page</button>
      <div>{props.text}</div>
    </div>
  );
}
export default Buttons;
