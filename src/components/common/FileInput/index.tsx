import * as React from "react";
import { ChangeEvent, FC, memo, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { get } from "lodash";
import classNames from "classnames";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        maxWidth: "278px",
        height: "278px",
        borderRadius: 3,
        background: "lightgray",
        overflow: "hidden",
        position: "relative"
    },
    previewImageWrapper: {
        width: "100%",
        height: "100%",
        position: "relative"
    },
    fileInputOverlay: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        opacity: 0,
        cursor: "pointer"
    },
    previewImage: {
        width: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1
    },
    removeButtonWrapper: {
        borderRadius: "100%",
        height: "24px",
        width: "24px",
        position: "absolute",
        top: "8px",
        right: "8px",
        zIndex: 2,
        background: "white",
        cursor: "pointer"
    },
    hidden: {
        display: "none"
    },
    placeholderWrapper: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    placeholderText: {
        fontSize: "12px",
        color: "#989898",
        width: "156px",
        margin: "0 auto",
        textAlign: "center"
    }
}));

const FileInput: FC = () => {
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

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <input
                type="file"
                onChange={handleFileInputChange}
                ref={fileInputRef}
                className={classNames(classes.fileInputOverlay, { [classes.hidden]: !!fileURL })}
            />
            <div className={classNames(classes.previewImageWrapper, { [classes.hidden]: !fileURL })}>
                <img className={classes.previewImage} src={fileURL as string} alt={"Preview Image"} />
                <div
                    className={classNames(classes.removeButtonWrapper, { [classes.hidden]: !fileURL })}
                    onClick={handleFileRemove}
                >
                    <ClearIcon />
                </div>
            </div>
            <div className={classes.placeholderWrapper}>
                <AddIcon />
                <p className={classes.placeholderText}>
                    Kép feltöltéséhez húzza ide a feltölteni kívánt képet vagy kattintson ide!
                </p>
            </div>
        </div>
    );
};

export default memo(FileInput);
