import React from "react";
interface IProps<State> {
    initialState?: State;
}
interface IContainer<State, Value> {
    Provider: (props: React.PropsWithChildren<IProps<State>>) => JSX.Element;
    Context: React.Context<Value | null>;
}
export declare function createContainer<Value, State = never>(useHook: (initialState: State) => Value): IContainer<State, Value>;
export declare function createContainer<Value>(useHook: () => Value): IContainer<never, Value>;
export declare function useContainer<State, Value>(container: IContainer<State, Value>): Value;
export {};
