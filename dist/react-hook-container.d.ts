import React from "react";
interface IProps<State> {
    initialState?: State;
}
interface IContainer<Value, State> {
    Provider: (props: React.PropsWithChildren<IProps<State>>) => JSX.Element;
    Context: React.Context<Value | null>;
}
export declare function createContainer<Value, State = never>(useHook: (initialState: State) => Value): IContainer<Value, State>;
export declare function createContainer<Value>(useHook: () => Value): IContainer<Value, never>;
export declare function useContainer<Value, State>(container: IContainer<Value, State>): Value;
export declare const connect: <TContextProps extends {}>(useContext: <T>(OwnProps: T) => TContextProps) => <TOwnProps extends {}>(Component: (props: TContextProps & TOwnProps) => JSX.Element | null) => (props: TOwnProps) => JSX.Element;
export {};
