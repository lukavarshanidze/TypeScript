import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

// 2 way of solving <T> error
// <T,>  , tells TSC that it's generic otherwise with only <T> it's error
// <T extends {}>  extends {} tells TSC that it's generic otherwise with only <T> it's error
const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, ind) => (
        <li key={ind}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
