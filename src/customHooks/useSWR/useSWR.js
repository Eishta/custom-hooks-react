import { useEffect, useState } from 'react'

export function useSWR(_key, fetcher) {
    // your code here
    const fetchRes = fetcher();
    const [data, setData] = useState(fetchRes instanceof Promise ? undefined : fetchRes);
    const [error, setError] = useState();

    useEffect(() => {
        if (fetchRes instanceof Promise) {
            Promise.resolve(fetchRes)
                .then(res => setData(res))
                .catch(err => setError(err))
        }
    }, []);
    
    return { data, error };
}