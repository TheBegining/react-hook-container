"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createContainer = createContainer;
exports.useContainer = useContainer;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function createContainer(useHook) {
  var Context = (0, _react.createContext)(null);

  var Provider = function Provider(props) {
    var value = useHook(props.initialState);
    return _react.default.createElement(Context.Provider, {
      value: value
    }, props.children);
  };

  return {
    Provider: Provider,
    Context: Context
  };
}

function useContainer(container) {
  var value = (0, _react.useContext)(container.Context);

  if (value === null) {
    throw new Error("Component must be wrapped with <Container.Provider>");
  }

  return value;
}