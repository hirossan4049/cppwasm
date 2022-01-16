import React, { useState } from 'react';
import Draw from "./wasm/Draw.js";
import DrawWASM from "./wasm/Draw.wasm";
import { useEffect } from 'react';

function App() {
  const draw = Draw({
    locateFile: () => {
      return DrawWASM
    },
  })

  useEffect(() => {
    draw.then((core) => {
      core.render("#canvas")
    })
  }, [])
  return (
    <>
        <h1>olala</h1>
        <canvas id="canvas" width="300px" height="300px" />
    </>
  );
}

export default App;
