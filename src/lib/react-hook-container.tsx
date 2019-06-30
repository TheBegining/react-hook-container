import React, { createContext, useContext } from "react";

interface IProps<State> {
  initialState?: State;
}

interface IContainer<State, Value> {
  Provider: (props: React.PropsWithChildren<IProps<State>>) => JSX.Element;
  Context: React.Context<Value | null>;
}

export function createContainer<Value, State = never>(
  useHook: (initialState: State) => Value
): IContainer<State, Value>;

export function createContainer<Value>(
  useHook: () => Value
): IContainer<never, Value>;

export function createContainer<Value, State>(
  useHook: any
): IContainer<State, Value> {
  const Context = createContext<Value | null>(null);

  const Provider = (props: React.PropsWithChildren<IProps<State>>) => {
    const value = useHook(props.initialState);
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
  };
  return { Provider, Context };
}

export function useContainer<State, Value>(
  container: IContainer<State, Value>
): Value {
  const value = useContext(container.Context);
  if (value === null) {
    throw new Error("Component must be wrapped with <Container.Provider>");
  }
  return value;
}
