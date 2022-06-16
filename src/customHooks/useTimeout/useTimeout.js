import React from 'react';

export function useTimeout(callback, delay) {
    // your code here
    const callbackRef = React.useRef();

    React.useEffect(() => {
        callbackRef.current = callback;
    }, [callback])

    React.useEffect(() => {
        const intervalId = setTimeout(() => callbackRef.current?.call(null), delay);
        return () => clearTimeout(intervalId);
    }, [delay])
}