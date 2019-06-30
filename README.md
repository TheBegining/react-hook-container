<p align="right">
  <strong>
    <a href="README.md">中文</a>
  </strong>
  <br/>
  <sup><em>(Please contribute translations!)</em></sup>
</p>

# react-hook-container

> hook 数据共享微型解决方案

- **由[unstated-next](https://github.com/jamiebuilds/unstated-next)启发**
- **由 Typescript 编写**
- **超小型，易于修改**

## 安装

> npm install -S react-hook-container

## 例子

见 `src/App.tsx`

## 状态共享基本思路

### 1 兄弟组件通信。

在父组件下创建 自定义 hook。

使用 `createContext` _react API_ 创建`Context`。

并将兄弟组件包裹在同一 `Provider`中

```
const valueFromUseHook = useCustomHook();
type MyValue = ReturnType<typeof useCustomHook>//如果使用TS的话，这是一个麻烦的地方。
const ParentContext = createContext<MyValue|null>(null);

// Parent.tsx
...
  <ParentContext.Provider value={valueFromUseHook}>
    <BrotherA/>
    <BrotherB/>
  </ParentContext.Provider>
...
```

在兄弟组件中使用 _react API_ `useContext`

```
BrotherA.tsx/BrotherB.tsx
...
  const {...,something,dispatch,setSomething} = useContext(ParentContext);

...
```
