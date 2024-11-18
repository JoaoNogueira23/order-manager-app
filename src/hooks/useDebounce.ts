import { useEffect, useState } from "react";


function useDebounce<T = any>(value: T, delay: number){
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay])

    return debouncedValue
}

export default useDebounce;