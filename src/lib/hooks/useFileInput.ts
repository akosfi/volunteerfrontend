import { ChangeEvent, useRef, useState } from "react";
import { get } from "lodash";

const useFileInput = () => {
    const [fileURL, setFileURL] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = get(e, "target.files[0]", null);

        if (!file) return;

        const url = URL.createObjectURL(file);
        setFileURL(url);
    };

    const handleFileRemove = () => {
        if (fileInputRef?.current) {
            fileInputRef.current.value = "";
            setFileURL(null);
        }
    };

    return {
        fileURL,
        fileInputRef,
        handleFileInputChange,
        handleFileRemove
    };
};

export default useFileInput;
