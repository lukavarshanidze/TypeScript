import { ReactNode } from 'react'
import { useCounter, useCounterText } from './context/CounterContext'


type ChildrenType = {
    children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  const { count, increment, decrement } = useCounter()
  const { text, handleTextInput } = useCounterText()
  return (
    <>
    <h1>{children(count)}</h1>
      {count}
      {text}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="text" onChange={handleTextInput}/>
    </>
  );
};

export default Counter;
