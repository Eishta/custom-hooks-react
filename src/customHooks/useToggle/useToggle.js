import { useState, useCallback } from 'react';
export function useToggle(on) {
    
    const [onOrOff, setOnOrOff] = useState(on);

    const toggle = useCallback(() => setOnOrOff(prev => !prev), []);
    return [onOrOff, toggle]
}
