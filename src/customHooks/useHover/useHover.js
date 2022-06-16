import { useEffect, useState } from 'react'

export function useHover (){
    const ref = useRef(null);  //defining the ref
    const [isHovered, setHovered] = useState(false)

    useEffect(() => {
        if (!ref.current)
            return  //return if ref does not exist

        const currentElement = ref.current  //storing the current ref
        const onFocus = () => setHovered(true)  //fn for focus
        const onBlur = () => setHovered(false)  //fn for remove focus

        currentElement.addEventListener('mouseenter', onFocus)  //when element is focussed
        currentElement.addEventListener('mouseleave', onBlur)  //when focus is removed

        return () => {  //removing the event listeners
            currentElement.removeEventListener('mouseenter', onFocus)
            currentElement.removeEventListener('mouseleave', onBlur)
        }
    })  //no dependency array means useEffect will rerun on every render

    return [ref, isHovered]
}

// usage 
// import React, { useRef } from 'react'

// import { useHover } from './useHover'

export default function Component() {
  const [ref, isHover] = useHover();

  return (
    <div ref={ref}>
      {`The current div is ${isHover ? `hovered` : `unhovered`}`}
    </div>
  )
}