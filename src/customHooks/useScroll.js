import { useState } from 'react';
import { debounce } from 'lodash';

export function useScrolll() {
    let [scrollXPos, setScrollXPos] = useState(0);
    let [scrollYPos, setScrollYPos] = useState(0);

    const getScrollPosition = () => {
        let { scrollLeft, scrollTop, clientLeft = 0, clientTop = 0 } = document.documentElement;

        let left = (window.pageXOffset || scrollLeft) - clientLeft;
        let top = (window.pageYOffset || scrollTop) - clientTop;

        return { scrollX: left, scrollY: top };
    }
    const listener = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let { scrollX, scrollY } = getScrollPosition();
        setScrollXPos(scrollX);
        setScrollYPos(scrollY)
    }
    useState(() => {
        window.addEventListener('scroll', debounce(listener, 3000), false);
        return () => {
            window.removeEventListener('scroll', listener)
        }
    })
    return { scrollXPos, scrollYPos };
}