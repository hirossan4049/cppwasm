import React, { useState } from 'react';
import HelloWorld from "./wasm/HelloWorld.js";
import HelloWorldWASM from "./wasm/HelloWorld.wasm";
import { useEffect } from 'react';

function App() {
    const [wasmMessage, setWasmMessage] = useState("")

  const hw = HelloWorld({
    locateFile: () => {
      return HelloWorldWASM
    },
  })

  useEffect(() => {
    hw.then((core) => {
      setWasmMessage(core.hello("omg!?"))
    })
  }, [])
  return (
    <h1>{wasmMessage}</h1>
  );
}

export default App;
