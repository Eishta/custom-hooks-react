import React,  {  useEffect, useRef } from "react";

function useEffectOnce(effect) {
  const calledOnce = useRef(false);
 
  useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    calledOnce.current = true;
    effect();

  }, []);
}

export { useEffectOnce };


// Usage
import React, { useEffect, useState } from "react";

import { useEffectOnce } from "./useEffectOnce";

export default function Component() {
  const [data, setData] = useState(0);
  useEffect(() => {
    console.log("Normal useEffect", { data });
  }, [data]);

  useEffectOnce(() => {
    console.log("Triggered only once, on mount", { data });
  });

  return (
    <div>
      <p>Open your console</p>
      <button onClick={() => setData(Date.now())}>Update data</button>
    </div>
  );
}
