import { useEffect, useRef } from "react";

// @ts-ignore
const usePrevious = value => {
    const reference = useRef();

    useEffect(() => {
        reference.current = value;
    }, [value]);

    return reference.current;
};

export default usePrevious;
