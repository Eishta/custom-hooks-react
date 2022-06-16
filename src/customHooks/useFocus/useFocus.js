import { useEffect, useState } from 'react'

export function useFocus() {
    const ref = useRef(null);  //defining the ref
    const [isFocused, setFocused] = useState(false)

    useEffect(() => {
        if (!ref.current)
            return  //return if ref does not exist

        const currentElement = ref.current  //storing the current ref
        const onFocus = () => setFocused(true)  //fn for focus
        const onBlur = () => setFocused(false)  //fn for remove focus

        currentElement.addEventListener('focus', onFocus)  //when element is focussed
        currentElement.addEventListener('blur', onBlur)  //when focus is removed

        return () => {  //removing the event listeners
            currentElement.removeEventListener('focus', onFocus)
            currentElement.removeEventListener('blur', onBlur)
        }
    })  //no dependency array means useEffect will rerun on every render

    return [ref, isFocused]
}

// usage 
// import React, { useRef } from 'react'

// import { useFocus } from './useFocus'

export default function Component() {
    const [ref, isFocus] = useFocus();

    return (
        <div ref={ref}>
            {`The current div is ${isFocus ? `Focused` : `unFocused`}`}
        </div>
    )
}