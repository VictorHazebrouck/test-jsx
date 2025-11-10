(() => {
  // src/myJSX.js
  function createElement(...args) {
    console.log("elem created with args: ", args);
  }

  // src/main.jsx
  function Test() {
    return /* @__PURE__ */ createElement("div", null, "Hello world");
  }
  Test();
})();
