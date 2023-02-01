import { useEffect, useState } from "react";

export const useWindowWidth = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [timerId, setTimerId] = useState(null);

    useEffect(() => {
        const debounceResizeHandler = () => {
            if(timerId) {
                clearTimeout(timerId);
            }

            let newTimer = setTimeout(() => {
                setWidth(window.innerWidth)
            }, 100);

            setTimerId(newTimer);
        }

        window.addEventListener('resize', debounceResizeHandler)

        return () => window.removeEventListener('resize', debounceResizeHandler);
    }, [timerId])

    return width;
    
}

