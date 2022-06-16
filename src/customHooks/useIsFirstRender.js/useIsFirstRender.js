import React, { useRef, useEffect, useState } from 'react'

export function useIsFirstRender1() {
    const renderCountRef = useRef(0)
    //useRef creates a reference to the render count with initial value 0.
    //This mutable value persists through re-renders.

    useEffect(() => { renderCountRef.current++ })
    //useEffect runs AFTER rendering.
    //Without a dependancy array, it increases the render count by 1 after EACH render.

    return renderCountRef.current === 0
    //Only  true if the render count has not been increased (the first render)
}

export function App() {
    const [clicked, setClicked] = useState(0)
    return <div>
        <button onClick={() => setClicked(prev => prev + 1)}>
            This button clicked {clicked} times so far...
        </button>
        <h3>{useIsFirstRender1() ? 'First Render!' : 'Render 2: Electric Boogaloo'}</h3>

    </div>
}




import React from 'react';

export function useIsFirstRender2() {
    const isFirst = React.useRef(true);

    React.useEffect(() => {
        isFirst.current = false
    }, []);

    return isFirst.current;
}