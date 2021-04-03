import { RefObject, useEffect } from "react";
import { find } from "lodash";

const useOnClickOutside = (refObjects: RefObject<HTMLElement>[], callback: Function, isEnabled: boolean) => {
    const handleClickOutside = (e: any) => {
        const hasClickedInside = find(refObjects, ref => ref?.current && !!ref?.current.contains(e.target));

        if (!hasClickedInside) callback();
    };

    useEffect(() => {
        if (isEnabled) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isEnabled]);
};

export default useOnClickOutside;
