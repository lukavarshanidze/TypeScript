import Counter from "./Counter";
import "./css/App.css";

const App = () => {
  return (
    <>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </>
  );
};

export default App;
