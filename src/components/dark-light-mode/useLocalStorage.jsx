import { useEffect, useState } from "react"

export default function useLocalStorage(key, defaultVal) {
    const [value, setValue] = useState(() => {
        let currentVal;

        try {
            currentVal = JSON.parse(localStorage.getItem(key) || String(defaultVal));
        } catch (error) {
            console.log(error);
            currentVal = defaultVal;
        }
        return currentVal;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}