import React, { useEffect, useState } from 'react'

function useDebounce(value, delay){
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default function Component() {
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value, 500)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    // Fetch API (optional)
    useEffect(() => {
        console.log(debouncedValue)
    }, [debouncedValue])

    return (
        <div>
            <p>Value real-time: {value}</p>
            <p>Debounced value: {debouncedValue}</p>

            <input type="text" value={value} onChange={handleChange} />
        </div>
    )
}