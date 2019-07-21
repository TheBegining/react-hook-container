import React, { createContext, useContext, memo } from "react";

interface IProps<State> {
  initialState?: State;
}

interface IContainer<Value, State> {
  Provider: (props: React.PropsWithChildren<IProps<State>>) => JSX.Element;
  Context: React.Context<Value | null>;
}

export function createContainer<Value, State = never>(
  useHook: (initialState: State) => Value
): IContainer<Value, State>;

export function createContainer<Value>(
  useHook: () => Value
): IContainer<Value, never>;

export function createContainer<Value, State>(
  useHook: any
): IContainer<Value, State> {
  const Context = createContext<Value | null>(null);

  const Provider = (props: React.PropsWithChildren<IProps<State>>) => {
    const value = useHook(props.initialState);
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
  };
  return { Provider, Context };
}

export function useContainer<Value, State>(
  container: IContainer<Value, State>
): Value {
  const value = useContext(container.Context);
  if (value === null) {
    throw new Error("Component must be wrapped with <Container.Provider>");
  }
  return value;
}

export const connect = <TContextProps extends {}>(
  useContext: <T>(OwnProps: T) => TContextProps
) => {
  return <TOwnProps extends {}>(
    Component: (props: TContextProps & TOwnProps) => JSX.Element | null
  ) => {
    const MemoComponent = memo(Component) as any;
    return (props: TOwnProps) => {
      const ContextProps = useContext(props);
      return <MemoComponent {...props} {...ContextProps} />;
    };
  };
};
