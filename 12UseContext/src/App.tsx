import Counter from "./Counter";
import { CounterProvider } from "./context/CounterContext";
import { initState } from "./context/CounterContext";

function App() {
  return (
    <>
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter>{(num: number) => <>Number</>}</Counter>
      </CounterProvider>
    </>
  );
}

export default App;
