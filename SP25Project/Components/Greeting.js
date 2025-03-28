function Greeting(props) {
  console.log(props);
  return (
    <>
      <Text> {props.message}</Text>;<Text> Goodbye</Text>;
    </>
  );
}
export default Greeting;