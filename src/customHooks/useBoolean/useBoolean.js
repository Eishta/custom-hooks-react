import React, { useCallback, useState } from 'react';

function useBoolean(defaultValue) {
    let [value, setValue] = useState(!!!defaultValue);

    const setTrue = useCallback(() => setValue(true));
    const setFalse = useCallback(() => setValue(false));
    const toggle = useCallback(() => setValue(!value));

    return { value, setValue, setTrue, setFalse, toggle }

}
export { useBoolean };

// usage 

import React from 'react'

import { useBoolean } from './useBoolean'

export default function Component() {
    const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false)

    // Just an example to use "setValue"
    const customToggle = () => setValue(x => !x)

    return (
        <>
            <p>
                Value is <code>{value.toString()}</code>
            </p>
            <button onClick={setTrue}>set true</button>
            <button onClick={setFalse}>set false</button>
            <button onClick={toggle}>toggle</button>
            <button onClick={customToggle}>custom toggle</button>
        </>
    )
}